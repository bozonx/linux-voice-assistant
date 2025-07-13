// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var stt_service_pb = require('./stt_service_pb.js');
var stt_pb = require('./stt_pb.js');

function serialize_speechkit_stt_v3_DeleteRecognitionRequest(arg) {
  if (!(arg instanceof stt_pb.DeleteRecognitionRequest)) {
    throw new Error('Expected argument of type speechkit.stt.v3.DeleteRecognitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechkit_stt_v3_DeleteRecognitionRequest(buffer_arg) {
  return stt_pb.DeleteRecognitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechkit_stt_v3_Empty(arg) {
  if (!(arg instanceof stt_service_pb.Empty)) {
    throw new Error('Expected argument of type speechkit.stt.v3.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechkit_stt_v3_Empty(buffer_arg) {
  return stt_service_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechkit_stt_v3_GetRecognitionRequest(arg) {
  if (!(arg instanceof stt_service_pb.GetRecognitionRequest)) {
    throw new Error('Expected argument of type speechkit.stt.v3.GetRecognitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechkit_stt_v3_GetRecognitionRequest(buffer_arg) {
  return stt_service_pb.GetRecognitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechkit_stt_v3_Operation(arg) {
  if (!(arg instanceof stt_service_pb.Operation)) {
    throw new Error('Expected argument of type speechkit.stt.v3.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechkit_stt_v3_Operation(buffer_arg) {
  return stt_service_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechkit_stt_v3_RecognizeFileRequest(arg) {
  if (!(arg instanceof stt_pb.RecognizeFileRequest)) {
    throw new Error('Expected argument of type speechkit.stt.v3.RecognizeFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechkit_stt_v3_RecognizeFileRequest(buffer_arg) {
  return stt_pb.RecognizeFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechkit_stt_v3_StreamingRequest(arg) {
  if (!(arg instanceof stt_pb.StreamingRequest)) {
    throw new Error('Expected argument of type speechkit.stt.v3.StreamingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechkit_stt_v3_StreamingRequest(buffer_arg) {
  return stt_pb.StreamingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechkit_stt_v3_StreamingResponse(arg) {
  if (!(arg instanceof stt_pb.StreamingResponse)) {
    throw new Error('Expected argument of type speechkit.stt.v3.StreamingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechkit_stt_v3_StreamingResponse(buffer_arg) {
  return stt_pb.StreamingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Основной сервис распознавания речи
var RecognizerService = exports.RecognizerService = {
  // Ожидает аудио в реальном времени
recognizeStreaming: {
    path: '/speechkit.stt.v3.Recognizer/RecognizeStreaming',
    requestStream: true,
    responseStream: true,
    requestType: stt_pb.StreamingRequest,
    responseType: stt_pb.StreamingResponse,
    requestSerialize: serialize_speechkit_stt_v3_StreamingRequest,
    requestDeserialize: deserialize_speechkit_stt_v3_StreamingRequest,
    responseSerialize: serialize_speechkit_stt_v3_StreamingResponse,
    responseDeserialize: deserialize_speechkit_stt_v3_StreamingResponse,
  },
};

exports.RecognizerClient = grpc.makeGenericClientConstructor(RecognizerService, 'Recognizer');
// Сервис для асинхронного распознавания речи
var AsyncRecognizerService = exports.AsyncRecognizerService = {
  recognizeFile: {
    path: '/speechkit.stt.v3.AsyncRecognizer/RecognizeFile',
    requestStream: false,
    responseStream: false,
    requestType: stt_pb.RecognizeFileRequest,
    responseType: stt_service_pb.Operation,
    requestSerialize: serialize_speechkit_stt_v3_RecognizeFileRequest,
    requestDeserialize: deserialize_speechkit_stt_v3_RecognizeFileRequest,
    responseSerialize: serialize_speechkit_stt_v3_Operation,
    responseDeserialize: deserialize_speechkit_stt_v3_Operation,
  },
  getRecognition: {
    path: '/speechkit.stt.v3.AsyncRecognizer/GetRecognition',
    requestStream: false,
    responseStream: true,
    requestType: stt_service_pb.GetRecognitionRequest,
    responseType: stt_pb.StreamingResponse,
    requestSerialize: serialize_speechkit_stt_v3_GetRecognitionRequest,
    requestDeserialize: deserialize_speechkit_stt_v3_GetRecognitionRequest,
    responseSerialize: serialize_speechkit_stt_v3_StreamingResponse,
    responseDeserialize: deserialize_speechkit_stt_v3_StreamingResponse,
  },
  deleteRecognition: {
    path: '/speechkit.stt.v3.AsyncRecognizer/DeleteRecognition',
    requestStream: false,
    responseStream: false,
    requestType: stt_pb.DeleteRecognitionRequest,
    responseType: stt_service_pb.Empty,
    requestSerialize: serialize_speechkit_stt_v3_DeleteRecognitionRequest,
    requestDeserialize: deserialize_speechkit_stt_v3_DeleteRecognitionRequest,
    responseSerialize: serialize_speechkit_stt_v3_Empty,
    responseDeserialize: deserialize_speechkit_stt_v3_Empty,
  },
};

exports.AsyncRecognizerClient = grpc.makeGenericClientConstructor(AsyncRecognizerService, 'AsyncRecognizer');
