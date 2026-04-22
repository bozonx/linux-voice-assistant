# Yandex SpeechKit TypeScript Types

Этот каталог содержит TypeScript типы для работы с Yandex SpeechKit API, сгенерированные из protobuf файлов.

## Структура файлов

- `stt.proto` - Основные типы для распознавания речи (упрощенная версия без внешних зависимостей)
- `stt_service.proto` - Определения сервисов для распознавания речи (упрощенная версия)
- `generate-types.sh` - Скрипт для генерации TypeScript кода
- `example.ts` - Примеры использования сгенерированных типов
- `output/` - Сгенерированные TypeScript файлы
- `yandexSpeechKit.ts` - Оригинальный файл интеграции

## Сгенерированные файлы

В папке `output/` находятся следующие файлы:

- `stt.ts` - Основные типы для распознавания речи (278KB)
- `stt_service.ts` - Типы для сервисов распознавания (24KB)
- `stt_pb.js` - JavaScript реализации типов (414KB)
- `stt_service_pb.js` - JavaScript реализации сервисов (29KB)
- `stt_grpc_pb.js` - gRPC клиенты
- `stt_service_grpc_pb.js` - gRPC сервисы

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install @grpc/grpc-js google-protobuf
npm install --save-dev grpc-tools protoc-gen-ts
```

### 2. Генерация типов

```bash
cd electron/yandex
./generate-types.sh
```

### 3. Использование в коде

```typescript
import { speechkit } from "./electron/yandex/output/stt";
import { speechkit as speechkitService } from "./electron/yandex/output/stt_service";
import * as grpc from "@grpc/grpc-js";

// Создание клиента
const client = new speechkitService.stt.v3.RecognizerClient(
  "stt.api.cloud.yandex.net:443",
  grpc.credentials.createSsl()
);

// Создание настроек аудио
const audioFormat = new speechkit.stt.v3.AudioFormatOptions({
  raw_audio: new speechkit.stt.v3.RawAudio({
    audio_encoding: speechkit.stt.v3.RawAudio.AudioEncoding.LINEAR16_PCM,
    sample_rate_hertz: 16000,
    audio_channel_count: 1,
  }),
});
```

## Основные типы

### AudioFormatOptions

Настройки аудио формата для распознавания:

```typescript
const audioFormat = new speechkit.stt.v3.AudioFormatOptions({
  raw_audio: new speechkit.stt.v3.RawAudio({
    audio_encoding: speechkit.stt.v3.RawAudio.AudioEncoding.LINEAR16_PCM,
    sample_rate_hertz: 16000,
    audio_channel_count: 1,
  }),
});
```

### RecognitionModelOptions

Настройки модели распознавания:

```typescript
const modelOptions = new speechkit.stt.v3.RecognitionModelOptions({
  model: "general",
  audio_format: audioFormat,
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
```

### StreamingRequest

Запрос для потокового распознавания:

```typescript
const request = new speechkit.stt.v3.StreamingRequest({
  chunk: new speechkit.stt.v3.AudioChunk({
    data: audioBuffer,
  }),
  session_options: streamingOptions,
});
```

### StreamingResponse

Ответ от сервиса распознавания:

```typescript
// Обработка ответа
response.on("data", (data: speechkit.stt.v3.StreamingResponse) => {
  if (data.has_final && data.final?.alternatives?.[0]?.text) {
    console.log("Final result:", data.final.alternatives[0].text);
  } else if (data.has_partial && data.partial?.alternatives?.[0]?.text) {
    console.log("Partial result:", data.partial.alternatives[0].text);
  }
});
```

## Сервисы

### RecognizerClient

Клиент для потокового распознавания:

```typescript
import * as grpc from "@grpc/grpc-js";

const client = new speechkitService.stt.v3.RecognizerClient(
  "stt.api.cloud.yandex.net:443",
  grpc.credentials.createSsl()
);

const stream = client.RecognizeStreaming();

// Отправка аудио данных
stream.write(audioRequest);

// Получение результатов
stream.on("data", (response: speechkit.stt.v3.StreamingResponse) => {
  // Обработка ответа
});

stream.on("end", () => {
  console.log("Stream ended");
});
```

### AsyncRecognizerClient

Клиент для асинхронного распознавания файлов:

```typescript
const asyncClient = new speechkitService.stt.v3.AsyncRecognizerClient(
  "stt.api.cloud.yandex.net:443",
  grpc.credentials.createSsl()
);

// Распознавание файла
const operation = await asyncClient.RecognizeFile(fileRequest);

// Получение результатов
const results = asyncClient.GetRecognition(
  new speechkitService.stt.v3.GetRecognitionRequest({
    operation_id: operation.id,
  })
);
```

## Примеры использования

Смотрите файл `example.ts` для полных примеров:

- `createAudioFormat()` - Создание настроек аудио
- `createRecognitionModel()` - Создание настроек модели
- `createStreamingOptions()` - Создание настроек потокового распознавания
- `createRecognizerClient()` - Создание клиента
- `handleStreamingResponse()` - Обработка ответов
- `streamRecognition()` - Потоковое распознавание
- `recognizeFile()` - Асинхронное распознавание файла

## Регенерация типов

Для обновления типов после изменения protobuf файлов:

```bash
cd electron/yandex
./generate-types.sh
```

## Зависимости

Убедитесь, что установлены следующие пакеты:

```bash
npm install @grpc/grpc-js google-protobuf
npm install --save-dev grpc-tools protoc-gen-ts
```

## Особенности реализации

### Упрощенные protobuf файлы

Оригинальные protobuf файлы содержали внешние зависимости от Google и Yandex Cloud API. Для упрощения использования были созданы локальные версии:

- Убраны импорты внешних protobuf файлов
- Добавлены локальные определения для `Struct`, `Value`, `ListValue`
- Упрощены сервисы без HTTP аннотаций

### Типы доступа к полям

В сгенерированных типах используются геттеры для проверки наличия полей:

```typescript
// Правильно
if (response.has_final && response.final?.alternatives?.[0]?.text) {
  console.log(response.final.alternatives[0].text);
}

// Неправильно
if (response.has_final() && response.final?.alternatives?.[0]?.text) {
  console.log(response.final.alternatives[0].text);
}
```

## Примечания

- Все типы сгенерированы автоматически из protobuf файлов
- Файлы в папке `output/` не следует редактировать вручную
- При изменении protobuf файлов необходимо перегенерировать типы
- Упрощенные protobuf файлы совместимы с оригинальным API Yandex SpeechKit
