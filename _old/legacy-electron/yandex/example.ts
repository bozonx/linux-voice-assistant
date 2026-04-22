// Пример использования TypeScript типов для Yandex SpeechKit
import { speechkit } from "./output/stt";
import { speechkit as speechkitService } from "./output/stt_service";
import * as grpc from "@grpc/grpc-js";

/**
 * Пример создания настроек аудио для распознавания речи
 */
export function createAudioFormat(): speechkit.stt.v3.AudioFormatOptions {
  return new speechkit.stt.v3.AudioFormatOptions({
    raw_audio: new speechkit.stt.v3.RawAudio({
      audio_encoding: speechkit.stt.v3.RawAudio.AudioEncoding.LINEAR16_PCM,
      sample_rate_hertz: 16000,
      audio_channel_count: 1,
    }),
  });
}

/**
 * Пример создания настроек модели распознавания
 */
export function createRecognitionModel(): speechkit.stt.v3.RecognitionModelOptions {
  return new speechkit.stt.v3.RecognitionModelOptions({
    model: "general",
    audio_format: createAudioFormat(),
    text_normalization: new speechkit.stt.v3.TextNormalizationOptions({
      text_normalization:
        speechkit.stt.v3.TextNormalizationOptions.TextNormalization
          .TEXT_NORMALIZATION_ENABLED,
      profanity_filter: false,
      literature_text: false,
    }),
    audio_processing_type:
      speechkit.stt.v3.RecognitionModelOptions.AudioProcessingType.REAL_TIME,
  });
}

/**
 * Пример создания настроек потокового распознавания
 */
export function createStreamingOptions(): speechkit.stt.v3.StreamingOptions {
  return new speechkit.stt.v3.StreamingOptions({
    recognition_model: createRecognitionModel(),
    eou_classifier: new speechkit.stt.v3.EouClassifierOptions({
      default_classifier: new speechkit.stt.v3.DefaultEouClassifier({
        type: speechkit.stt.v3.DefaultEouClassifier.EouSensitivity.DEFAULT,
        max_pause_between_words_hint_ms: 1000,
      }),
    }),
  });
}

/**
 * Пример создания клиента для распознавания речи
 */
export function createRecognizerClient(
  endpoint: string = "stt.api.cloud.yandex.net:443",
  credentials?: grpc.ChannelCredentials
): speechkitService.stt.v3.RecognizerClient {
  return new speechkitService.stt.v3.RecognizerClient(
    endpoint,
    credentials || grpc.credentials.createSsl()
  );
}

/**
 * Пример обработки ответа от сервиса распознавания
 */
export function handleStreamingResponse(
  response: speechkit.stt.v3.StreamingResponse,
  onPartial?: (text: string) => void,
  onFinal?: (text: string) => void,
  onError?: (error: string) => void
): void {
  // Обработка частичных результатов
  if (response.has_partial && response.partial?.alternatives?.[0]?.text) {
    const partialText = response.partial.alternatives[0].text;
    onPartial?.(partialText);
  }

  // Обработка финальных результатов
  if (response.has_final && response.final?.alternatives?.[0]?.text) {
    const finalText = response.final.alternatives[0].text;
    onFinal?.(finalText);
  }

  // Обработка ошибок
  if (response.has_status_code && response.status_code) {
    const errorMessage = response.status_code.message || "Unknown error";
    onError?.(errorMessage);
  }

  // Обработка конца высказывания
  if (response.has_eou_update) {
    console.log("End of utterance detected");
  }
}

/**
 * Пример использования потокового распознавания
 */
export async function streamRecognition(
  audioChunks: Uint8Array[],
  onPartial?: (text: string) => void,
  onFinal?: (text: string) => void,
  onError?: (error: string) => void
): Promise<void> {
  const client = createRecognizerClient();
  const stream = client.RecognizeStreaming();

  // Обработка входящих данных
  stream.on("data", (response: speechkit.stt.v3.StreamingResponse) => {
    handleStreamingResponse(response, onPartial, onFinal, onError);
  });

  // Обработка ошибок потока
  stream.on("error", (error: Error) => {
    onError?.(error.message);
  });

  // Обработка завершения потока
  stream.on("end", () => {
    console.log("Recognition stream ended");
  });

  // Отправка аудио данных
  for (const audioChunk of audioChunks) {
    const request = new speechkit.stt.v3.StreamingRequest({
      chunk: new speechkit.stt.v3.AudioChunk({
        data: audioChunk,
      }),
    });
    stream.write(request);
  }

  // Завершение потока
  stream.end();
}

/**
 * Пример создания запроса для асинхронного распознавания файла
 */
export function createFileRecognitionRequest(
  audioContent: Uint8Array,
  options?: speechkit.stt.v3.RecognitionModelOptions
): speechkit.stt.v3.RecognizeFileRequest {
  return new speechkit.stt.v3.RecognizeFileRequest({
    content: audioContent,
    recognition_model: options || createRecognitionModel(),
  });
}

/**
 * Пример использования асинхронного распознавания файла
 */
export async function recognizeFile(
  audioContent: Uint8Array,
  onProgress?: (operation: speechkitService.stt.v3.Operation) => void
): Promise<string> {
  const client = new speechkitService.stt.v3.AsyncRecognizerClient(
    "stt.api.cloud.yandex.net:443",
    grpc.credentials.createSsl()
  );

  const request = createFileRecognitionRequest(audioContent);

  // Запуск распознавания
  const operation = await new Promise<speechkitService.stt.v3.Operation>(
    (resolve, reject) => {
      client.RecognizeFile(request, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    }
  );

  onProgress?.(operation);

  // Ожидание завершения операции
  while (!operation.done) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onProgress?.(operation);
  }

  if (operation.error) {
    throw new Error(operation.error);
  }

  // Получение результатов
  const results = client.GetRecognition(
    new speechkitService.stt.v3.GetRecognitionRequest({
      operation_id: operation.id,
    })
  );

  return new Promise((resolve, reject) => {
    let finalText = "";

    results.on("data", (response: speechkit.stt.v3.StreamingResponse) => {
      if (response.has_final && response.final?.alternatives?.[0]?.text) {
        finalText = response.final.alternatives[0].text;
      }
    });

    results.on("end", () => {
      resolve(finalText);
    });

    results.on("error", (error: Error) => {
      reject(error);
    });
  });
}
