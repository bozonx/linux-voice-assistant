import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import Microphone from "node-microphone";

// Загрузка .proto файлов
const PROTO_PATH = "./output/stt_service.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const sttProto =
  grpc.loadPackageDefinition(packageDefinition).yandex.cloud.ai.stt.v3;

// Настройки gRPC клиента
const IAM_TOKEN = "YOUR_IAM_TOKEN"; // Замените на ваш IAM-токен
const FOLDER_ID = "YOUR_FOLDER_ID"; // Замените на ID вашей папки
const credentials = grpc.credentials.createSsl();
const client = new sttProto.Recognizer(
  "stt.api.cloud.yandex.net:443",
  credentials
);

// Настройки распознавания
const recognitionConfig = {
  session_options: {
    recognition_model: {
      audio_format: {
        raw_audio: {
          sample_rate_hertz: "8000",
          audio_channel_count: 1,
        },
      },
      text_normalization: {
        text_normalization: "TEXT_NORMALIZATION_ENABLED",
        profanity_filter: true,
      },
      language_restriction: {
        language_code: ["ru-RU"],
      },
    },
  },
};

// Инициализация микрофона
const mic = new Microphone({ rate: 8000, channels: 1 });

// Создание потока gRPC
const call = client.RecognizeStreaming({
  metadata: [["authorization", `Bearer ${IAM_TOKEN}`]],
});

// Отправка настроек распознавания
call.write(recognitionConfig);

// Обработка ответов от сервера
call.on("data", (response) => {
  if (response.partial && response.partial.alternatives.length > 0) {
    console.log(
      "Partial:",
      response.partial.alternatives.map((a) => a.text)
    );
  }
  if (response.final) {
    console.log(
      "Final:",
      response.final.alternatives.map((a) => a.text)
    );
  }
  if (response.final_refinement) {
    console.log(
      "Final Refinement:",
      response.final_refinement.normalized_text.alternatives.map((a) => a.text)
    );
  }
});

call.on("error", (error) => {
  console.error("Error:", error);
});

call.on("end", () => {
  console.log("Stream ended");
  mic.stop();
});

// Захват аудио с микрофона и отправка в поток
const micStream = mic.start();
micStream.on("data", (chunk) => {
  call.write({ audio_content: chunk });
});

micStream.on("error", (error) => {
  console.error("Mic error:", error);
  call.end();
});

// Завершение потока по команде (например, через Ctrl+C)
process.on("SIGINT", () => {
  call.end();
  mic.stop();
  process.exit();
});
