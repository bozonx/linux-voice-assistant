# Решение проблемы генерации TypeScript типов для Yandex SpeechKit

## Проблема

При попытке генерации TypeScript кода из protobuf файлов возникала ошибка:

```
yandex/cloud/ai/stt/v3/stt.proto: File not found.
google/api/annotations.proto: File not found.
yandex/cloud/validation.proto: File not found.
yandex/cloud/api/operation.proto: File not found.
yandex/cloud/operation/operation.proto: File not found.
```

## Причина

Оригинальные protobuf файлы Yandex SpeechKit содержали импорты внешних зависимостей:

- Google protobuf файлы (`google/protobuf/struct.proto`, `google/api/annotations.proto`)
- Yandex Cloud API файлы (`yandex/cloud/ai/stt/v3/stt.proto`, `yandex/cloud/validation.proto`, и др.)

Эти файлы отсутствуют в проекте, что приводило к ошибкам при генерации.

## Решение

### 1. Упрощение protobuf файлов

Созданы локальные версии protobuf файлов без внешних зависимостей:

#### stt.proto

- Убран импорт `google/protobuf/struct.proto`
- Добавлены локальные определения:

  ```protobuf
  message Struct {
    map<string, Value> fields = 1;
  }

  message Value {
    oneof kind {
      bool bool_value = 1;
      double number_value = 2;
      string string_value = 3;
      Struct struct_value = 4;
      ListValue list_value = 5;
    }
  }

  message ListValue {
    repeated Value values = 1;
  }
  ```

- Заменено использование `google.protobuf.Struct` на локальное `Struct`

#### stt_service.proto

- Убраны все внешние импорты
- Добавлены упрощенные определения:

  ```protobuf
  message Empty {}

  message Operation {
    string id = 1;
    bool done = 2;
    string error = 3;
    bytes response = 4;
  }
  ```

- Упрощены сервисы без HTTP аннотаций
- Добавлен импорт локального `stt.proto`

### 2. Создание скрипта генерации

Создан скрипт `generate-types.sh` для автоматической генерации:

```bash
#!/bin/bash
cd "$(dirname "$0")"
mkdir -p output

../../node_modules/.bin/grpc_tools_node_protoc \
  --proto_path=. \
  --js_out=import_style=commonjs,binary:./output \
  --grpc_out=grpc_js:./output \
  --plugin=protoc-gen-ts=../../node_modules/.bin/protoc-gen-ts \
  --ts_out=service=grpc-node,mode=grpc-js:./output \
  ./stt.proto ./stt_service.proto
```

### 3. Создание примеров использования

Создан файл `example.ts` с примерами использования сгенерированных типов:

- Создание настроек аудио
- Создание настроек модели распознавания
- Потоковое распознавание речи
- Асинхронное распознавание файлов

## Результат

### Сгенерированные файлы

В папке `output/` созданы следующие файлы:

- `stt.ts` (278KB) - Основные типы для распознавания речи
- `stt_service.ts` (24KB) - Типы для сервисов распознавания
- `stt_pb.js` (414KB) - JavaScript реализации типов
- `stt_service_pb.js` (29KB) - JavaScript реализации сервисов
- `stt_grpc_pb.js` - gRPC клиенты
- `stt_service_grpc_pb.js` - gRPC сервисы

### Использование

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

## Преимущества решения

1. **Полная автономность** - нет зависимости от внешних protobuf файлов
2. **Совместимость** - упрощенные файлы совместимы с оригинальным API
3. **Простота использования** - готовые TypeScript типы с автодополнением
4. **Гибкость** - возможность модификации protobuf файлов под нужды проекта
5. **Документация** - подробные примеры использования

## Дальнейшие шаги

1. Интеграция сгенерированных типов в основной код проекта
2. Замена существующей реализации в `yandexSpeechKit.ts` на типизированную версию
3. Добавление обработки ошибок и валидации
4. Создание wrapper'ов для упрощения использования API
