#!/bin/bash

# Скрипт для генерации TypeScript кода из protobuf файлов
# Переходим в директорию с proto файлами
cd "$(dirname "$0")"

# Создаем директорию для выходных файлов
mkdir -p output

# Генерируем JavaScript и TypeScript код из protobuf файлов
echo "Generating TypeScript code from protobuf files..."

# Генерируем JavaScript код
../../node_modules/.bin/grpc_tools_node_protoc \
  --proto_path=. \
  --js_out=import_style=commonjs,binary:./output \
  --grpc_out=grpc_js:./output \
  --plugin=protoc-gen-ts=../../node_modules/.bin/protoc-gen-ts \
  --ts_out=service=grpc-node,mode=grpc-js:./output \
  ./stt.proto ./stt_service.proto

echo "TypeScript code generation completed!"
echo "Generated files are in the output directory:"
ls -la output/ 