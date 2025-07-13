// source: stt.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.speechkit.stt.v3.Alternative', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.AlternativeUpdate', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.AudioChunk', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.AudioCursors', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.AudioFormatOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.AudioFormatOptions.AudioformatCase', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.AudioSegmentBoundaries', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.CodeType', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.ContainerAudio', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.ContainerAudio.ContainerAudioType', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.ContentUsage', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.ConversationAnalysis', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.DefaultEouClassifier', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.DefaultEouClassifier.EouSensitivity', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.DeleteRecognitionRequest', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.DescriptiveStatistics', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.DescriptiveStatistics.Quantile', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.Eou', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.EouClassifierOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.EouClassifierOptions.ClassifierCase', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.EouUpdate', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.ExternalEouClassifier', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.FinalRefinement', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.FinalRefinement.TypeCase', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.JsonSchema', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.LanguageEstimation', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.LanguageRestrictionOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.LanguageRestrictionOptions.LanguageRestrictionType', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.ListValue', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.PhraseHighlight', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RawAudio', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RawAudio.AudioEncoding', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognitionClassifier', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognitionClassifier.TriggerType', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognitionClassifierLabel', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognitionClassifierOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognitionClassifierResult', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognitionClassifierUpdate', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognitionClassifierUpdate.WindowType', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognitionModelOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognitionModelOptions.AudioProcessingType', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognizeFileRequest', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.RecognizeFileRequest.AudiosourceCase', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SessionUuid', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SilenceChunk', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SpeakerAnalysis', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SpeakerAnalysis.WindowType', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SpeakerLabelingOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SpeakerLabelingOptions.SpeakerLabeling', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SpeechAnalysisOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.StatusCode', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.StreamingOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.StreamingRequest', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.StreamingRequest.EventCase', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.StreamingResponse', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.StreamingResponse.EventCase', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.StreamingResponseList', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.Struct', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.Summarization', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SummarizationOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SummarizationProperty', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SummarizationProperty.ResponseformatCase', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.SummarizationPropertyResult', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.TextNormalizationOptions', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.TextNormalizationOptions.PhoneFormattingMode', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.TextNormalizationOptions.TextNormalization', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.Value', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.Value.KindCase', null, global);
goog.exportSymbol('proto.speechkit.stt.v3.Word', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.Struct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.Struct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.Struct.displayName = 'proto.speechkit.stt.v3.Struct';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.speechkit.stt.v3.Value.oneofGroups_);
};
goog.inherits(proto.speechkit.stt.v3.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.Value.displayName = 'proto.speechkit.stt.v3.Value';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.ListValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.ListValue.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.ListValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.ListValue.displayName = 'proto.speechkit.stt.v3.ListValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.TextNormalizationOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.TextNormalizationOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.TextNormalizationOptions.displayName = 'proto.speechkit.stt.v3.TextNormalizationOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.DefaultEouClassifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.DefaultEouClassifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.DefaultEouClassifier.displayName = 'proto.speechkit.stt.v3.DefaultEouClassifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.ExternalEouClassifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.ExternalEouClassifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.ExternalEouClassifier.displayName = 'proto.speechkit.stt.v3.ExternalEouClassifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.EouClassifierOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.speechkit.stt.v3.EouClassifierOptions.oneofGroups_);
};
goog.inherits(proto.speechkit.stt.v3.EouClassifierOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.EouClassifierOptions.displayName = 'proto.speechkit.stt.v3.EouClassifierOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.RecognitionClassifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.RecognitionClassifier.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.RecognitionClassifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.RecognitionClassifier.displayName = 'proto.speechkit.stt.v3.RecognitionClassifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.RecognitionClassifierOptions.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.RecognitionClassifierOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.RecognitionClassifierOptions.displayName = 'proto.speechkit.stt.v3.RecognitionClassifierOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.SpeechAnalysisOptions.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.SpeechAnalysisOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.SpeechAnalysisOptions.displayName = 'proto.speechkit.stt.v3.SpeechAnalysisOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.RawAudio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.RawAudio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.RawAudio.displayName = 'proto.speechkit.stt.v3.RawAudio';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.ContainerAudio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.ContainerAudio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.ContainerAudio.displayName = 'proto.speechkit.stt.v3.ContainerAudio';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.AudioFormatOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.speechkit.stt.v3.AudioFormatOptions.oneofGroups_);
};
goog.inherits(proto.speechkit.stt.v3.AudioFormatOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.AudioFormatOptions.displayName = 'proto.speechkit.stt.v3.AudioFormatOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.LanguageRestrictionOptions.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.LanguageRestrictionOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.LanguageRestrictionOptions.displayName = 'proto.speechkit.stt.v3.LanguageRestrictionOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.JsonSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.JsonSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.JsonSchema.displayName = 'proto.speechkit.stt.v3.JsonSchema';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.SummarizationProperty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.speechkit.stt.v3.SummarizationProperty.oneofGroups_);
};
goog.inherits(proto.speechkit.stt.v3.SummarizationProperty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.SummarizationProperty.displayName = 'proto.speechkit.stt.v3.SummarizationProperty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.SummarizationOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.SummarizationOptions.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.SummarizationOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.SummarizationOptions.displayName = 'proto.speechkit.stt.v3.SummarizationOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.SummarizationPropertyResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.SummarizationPropertyResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.SummarizationPropertyResult.displayName = 'proto.speechkit.stt.v3.SummarizationPropertyResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.RecognitionModelOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.RecognitionModelOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.RecognitionModelOptions.displayName = 'proto.speechkit.stt.v3.RecognitionModelOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.SpeakerLabelingOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.SpeakerLabelingOptions.displayName = 'proto.speechkit.stt.v3.SpeakerLabelingOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.StreamingOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.StreamingOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.StreamingOptions.displayName = 'proto.speechkit.stt.v3.StreamingOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.AudioChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.AudioChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.AudioChunk.displayName = 'proto.speechkit.stt.v3.AudioChunk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.SilenceChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.SilenceChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.SilenceChunk.displayName = 'proto.speechkit.stt.v3.SilenceChunk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.Eou = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.Eou, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.Eou.displayName = 'proto.speechkit.stt.v3.Eou';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.StreamingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.speechkit.stt.v3.StreamingRequest.oneofGroups_);
};
goog.inherits(proto.speechkit.stt.v3.StreamingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.StreamingRequest.displayName = 'proto.speechkit.stt.v3.StreamingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.RecognizeFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.speechkit.stt.v3.RecognizeFileRequest.oneofGroups_);
};
goog.inherits(proto.speechkit.stt.v3.RecognizeFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.RecognizeFileRequest.displayName = 'proto.speechkit.stt.v3.RecognizeFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.Word = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.Word, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.Word.displayName = 'proto.speechkit.stt.v3.Word';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.LanguageEstimation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.LanguageEstimation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.LanguageEstimation.displayName = 'proto.speechkit.stt.v3.LanguageEstimation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.Alternative = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.Alternative.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.Alternative, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.Alternative.displayName = 'proto.speechkit.stt.v3.Alternative';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.EouUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.EouUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.EouUpdate.displayName = 'proto.speechkit.stt.v3.EouUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.AlternativeUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.AlternativeUpdate.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.AlternativeUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.AlternativeUpdate.displayName = 'proto.speechkit.stt.v3.AlternativeUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.AudioCursors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.AudioCursors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.AudioCursors.displayName = 'proto.speechkit.stt.v3.AudioCursors';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.FinalRefinement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.speechkit.stt.v3.FinalRefinement.oneofGroups_);
};
goog.inherits(proto.speechkit.stt.v3.FinalRefinement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.FinalRefinement.displayName = 'proto.speechkit.stt.v3.FinalRefinement';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.StatusCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.StatusCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.StatusCode.displayName = 'proto.speechkit.stt.v3.StatusCode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.SessionUuid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.SessionUuid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.SessionUuid.displayName = 'proto.speechkit.stt.v3.SessionUuid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.PhraseHighlight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.PhraseHighlight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.PhraseHighlight.displayName = 'proto.speechkit.stt.v3.PhraseHighlight';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.RecognitionClassifierLabel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.RecognitionClassifierLabel.displayName = 'proto.speechkit.stt.v3.RecognitionClassifierLabel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.RecognitionClassifierResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.RecognitionClassifierResult.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.RecognitionClassifierResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.RecognitionClassifierResult.displayName = 'proto.speechkit.stt.v3.RecognitionClassifierResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.RecognitionClassifierUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.RecognitionClassifierUpdate.displayName = 'proto.speechkit.stt.v3.RecognitionClassifierUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.DescriptiveStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.DescriptiveStatistics.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.DescriptiveStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.DescriptiveStatistics.displayName = 'proto.speechkit.stt.v3.DescriptiveStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.DescriptiveStatistics.Quantile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.displayName = 'proto.speechkit.stt.v3.DescriptiveStatistics.Quantile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.AudioSegmentBoundaries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.AudioSegmentBoundaries.displayName = 'proto.speechkit.stt.v3.AudioSegmentBoundaries';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.SpeakerAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.SpeakerAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.SpeakerAnalysis.displayName = 'proto.speechkit.stt.v3.SpeakerAnalysis';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.ConversationAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.ConversationAnalysis.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.ConversationAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.ConversationAnalysis.displayName = 'proto.speechkit.stt.v3.ConversationAnalysis';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.displayName = 'proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.ContentUsage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.ContentUsage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.ContentUsage.displayName = 'proto.speechkit.stt.v3.ContentUsage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.Summarization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.Summarization.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.Summarization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.Summarization.displayName = 'proto.speechkit.stt.v3.Summarization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.StreamingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_);
};
goog.inherits(proto.speechkit.stt.v3.StreamingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.StreamingResponse.displayName = 'proto.speechkit.stt.v3.StreamingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.DeleteRecognitionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechkit.stt.v3.DeleteRecognitionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.DeleteRecognitionRequest.displayName = 'proto.speechkit.stt.v3.DeleteRecognitionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechkit.stt.v3.StreamingResponseList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.speechkit.stt.v3.StreamingResponseList.repeatedFields_, null);
};
goog.inherits(proto.speechkit.stt.v3.StreamingResponseList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechkit.stt.v3.StreamingResponseList.displayName = 'proto.speechkit.stt.v3.StreamingResponseList';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.Struct.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.Struct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.Struct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Struct.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldsMap: (f = msg.getFieldsMap()) ? f.toObject(includeInstance, proto.speechkit.stt.v3.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.Struct}
 */
proto.speechkit.stt.v3.Struct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.Struct;
  return proto.speechkit.stt.v3.Struct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.Struct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.Struct}
 */
proto.speechkit.stt.v3.Struct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.speechkit.stt.v3.Value.deserializeBinaryFromReader, "", new proto.speechkit.stt.v3.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.Struct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.Struct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.Struct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Struct.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.speechkit.stt.v3.Value.serializeBinaryToWriter);
  }
};


/**
 * map<string, Value> fields = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.speechkit.stt.v3.Value>}
 */
proto.speechkit.stt.v3.Struct.prototype.getFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.speechkit.stt.v3.Value>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.speechkit.stt.v3.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.speechkit.stt.v3.Struct} returns this
 */
proto.speechkit.stt.v3.Struct.prototype.clearFieldsMap = function() {
  this.getFieldsMap().clear();
  return this;};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.speechkit.stt.v3.Value.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.speechkit.stt.v3.Value.KindCase = {
  KIND_NOT_SET: 0,
  BOOL_VALUE: 1,
  NUMBER_VALUE: 2,
  STRING_VALUE: 3,
  STRUCT_VALUE: 4,
  LIST_VALUE: 5
};

/**
 * @return {proto.speechkit.stt.v3.Value.KindCase}
 */
proto.speechkit.stt.v3.Value.prototype.getKindCase = function() {
  return /** @type {proto.speechkit.stt.v3.Value.KindCase} */(jspb.Message.computeOneofCase(this, proto.speechkit.stt.v3.Value.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.Value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolValue: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    numberValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    structValue: (f = msg.getStructValue()) && proto.speechkit.stt.v3.Struct.toObject(includeInstance, f),
    listValue: (f = msg.getListValue()) && proto.speechkit.stt.v3.ListValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.Value}
 */
proto.speechkit.stt.v3.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.Value;
  return proto.speechkit.stt.v3.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.Value}
 */
proto.speechkit.stt.v3.Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNumberValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 4:
      var value = new proto.speechkit.stt.v3.Struct;
      reader.readMessage(value,proto.speechkit.stt.v3.Struct.deserializeBinaryFromReader);
      msg.setStructValue(value);
      break;
    case 5:
      var value = new proto.speechkit.stt.v3.ListValue;
      reader.readMessage(value,proto.speechkit.stt.v3.ListValue.deserializeBinaryFromReader);
      msg.setListValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.Value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStructValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.speechkit.stt.v3.Struct.serializeBinaryToWriter
    );
  }
  f = message.getListValue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.speechkit.stt.v3.ListValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool bool_value = 1;
 * @return {boolean}
 */
proto.speechkit.stt.v3.Value.prototype.getBoolValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.speechkit.stt.v3.Value} returns this
 */
proto.speechkit.stt.v3.Value.prototype.setBoolValue = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.speechkit.stt.v3.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.speechkit.stt.v3.Value} returns this
 */
proto.speechkit.stt.v3.Value.prototype.clearBoolValue = function() {
  return jspb.Message.setOneofField(this, 1, proto.speechkit.stt.v3.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.Value.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double number_value = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.Value.prototype.getNumberValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.Value} returns this
 */
proto.speechkit.stt.v3.Value.prototype.setNumberValue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.speechkit.stt.v3.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.speechkit.stt.v3.Value} returns this
 */
proto.speechkit.stt.v3.Value.prototype.clearNumberValue = function() {
  return jspb.Message.setOneofField(this, 2, proto.speechkit.stt.v3.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.Value.prototype.hasNumberValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string string_value = 3;
 * @return {string}
 */
proto.speechkit.stt.v3.Value.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.Value} returns this
 */
proto.speechkit.stt.v3.Value.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.speechkit.stt.v3.Value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.speechkit.stt.v3.Value} returns this
 */
proto.speechkit.stt.v3.Value.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 3, proto.speechkit.stt.v3.Value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.Value.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Struct struct_value = 4;
 * @return {?proto.speechkit.stt.v3.Struct}
 */
proto.speechkit.stt.v3.Value.prototype.getStructValue = function() {
  return /** @type{?proto.speechkit.stt.v3.Struct} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.Struct, 4));
};


/**
 * @param {?proto.speechkit.stt.v3.Struct|undefined} value
 * @return {!proto.speechkit.stt.v3.Value} returns this
*/
proto.speechkit.stt.v3.Value.prototype.setStructValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.speechkit.stt.v3.Value.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.Value} returns this
 */
proto.speechkit.stt.v3.Value.prototype.clearStructValue = function() {
  return this.setStructValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.Value.prototype.hasStructValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ListValue list_value = 5;
 * @return {?proto.speechkit.stt.v3.ListValue}
 */
proto.speechkit.stt.v3.Value.prototype.getListValue = function() {
  return /** @type{?proto.speechkit.stt.v3.ListValue} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.ListValue, 5));
};


/**
 * @param {?proto.speechkit.stt.v3.ListValue|undefined} value
 * @return {!proto.speechkit.stt.v3.Value} returns this
*/
proto.speechkit.stt.v3.Value.prototype.setListValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.speechkit.stt.v3.Value.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.Value} returns this
 */
proto.speechkit.stt.v3.Value.prototype.clearListValue = function() {
  return this.setListValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.Value.prototype.hasListValue = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.ListValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.ListValue.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.ListValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.ListValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ListValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.speechkit.stt.v3.Value.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.ListValue}
 */
proto.speechkit.stt.v3.ListValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.ListValue;
  return proto.speechkit.stt.v3.ListValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.ListValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.ListValue}
 */
proto.speechkit.stt.v3.ListValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.Value;
      reader.readMessage(value,proto.speechkit.stt.v3.Value.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.ListValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.ListValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.ListValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ListValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.speechkit.stt.v3.Value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Value values = 1;
 * @return {!Array<!proto.speechkit.stt.v3.Value>}
 */
proto.speechkit.stt.v3.ListValue.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.Value, 1));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.Value>} value
 * @return {!proto.speechkit.stt.v3.ListValue} returns this
*/
proto.speechkit.stt.v3.ListValue.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.speechkit.stt.v3.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.Value}
 */
proto.speechkit.stt.v3.ListValue.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.speechkit.stt.v3.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.ListValue} returns this
 */
proto.speechkit.stt.v3.ListValue.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.TextNormalizationOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.TextNormalizationOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.TextNormalizationOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    textNormalization: jspb.Message.getFieldWithDefault(msg, 1, 0),
    profanityFilter: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    literatureText: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    phoneFormattingMode: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.TextNormalizationOptions}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.TextNormalizationOptions;
  return proto.speechkit.stt.v3.TextNormalizationOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.TextNormalizationOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.TextNormalizationOptions}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.speechkit.stt.v3.TextNormalizationOptions.TextNormalization} */ (reader.readEnum());
      msg.setTextNormalization(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProfanityFilter(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLiteratureText(value);
      break;
    case 4:
      var value = /** @type {!proto.speechkit.stt.v3.TextNormalizationOptions.PhoneFormattingMode} */ (reader.readEnum());
      msg.setPhoneFormattingMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.TextNormalizationOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.TextNormalizationOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.TextNormalizationOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextNormalization();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProfanityFilter();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLiteratureText();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPhoneFormattingMode();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.TextNormalization = {
  TEXT_NORMALIZATION_UNSPECIFIED: 0,
  TEXT_NORMALIZATION_ENABLED: 1,
  TEXT_NORMALIZATION_DISABLED: 2
};

/**
 * @enum {number}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.PhoneFormattingMode = {
  PHONE_FORMATTING_MODE_UNSPECIFIED: 0,
  PHONE_FORMATTING_MODE_DISABLED: 1
};

/**
 * optional TextNormalization text_normalization = 1;
 * @return {!proto.speechkit.stt.v3.TextNormalizationOptions.TextNormalization}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.getTextNormalization = function() {
  return /** @type {!proto.speechkit.stt.v3.TextNormalizationOptions.TextNormalization} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.TextNormalizationOptions.TextNormalization} value
 * @return {!proto.speechkit.stt.v3.TextNormalizationOptions} returns this
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.setTextNormalization = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool profanity_filter = 2;
 * @return {boolean}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.getProfanityFilter = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.speechkit.stt.v3.TextNormalizationOptions} returns this
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.setProfanityFilter = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool literature_text = 3;
 * @return {boolean}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.getLiteratureText = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.speechkit.stt.v3.TextNormalizationOptions} returns this
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.setLiteratureText = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional PhoneFormattingMode phone_formatting_mode = 4;
 * @return {!proto.speechkit.stt.v3.TextNormalizationOptions.PhoneFormattingMode}
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.getPhoneFormattingMode = function() {
  return /** @type {!proto.speechkit.stt.v3.TextNormalizationOptions.PhoneFormattingMode} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.TextNormalizationOptions.PhoneFormattingMode} value
 * @return {!proto.speechkit.stt.v3.TextNormalizationOptions} returns this
 */
proto.speechkit.stt.v3.TextNormalizationOptions.prototype.setPhoneFormattingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.DefaultEouClassifier.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.DefaultEouClassifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.DefaultEouClassifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.DefaultEouClassifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxPauseBetweenWordsHintMs: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.DefaultEouClassifier}
 */
proto.speechkit.stt.v3.DefaultEouClassifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.DefaultEouClassifier;
  return proto.speechkit.stt.v3.DefaultEouClassifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.DefaultEouClassifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.DefaultEouClassifier}
 */
proto.speechkit.stt.v3.DefaultEouClassifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.speechkit.stt.v3.DefaultEouClassifier.EouSensitivity} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxPauseBetweenWordsHintMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.DefaultEouClassifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.DefaultEouClassifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.DefaultEouClassifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.DefaultEouClassifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMaxPauseBetweenWordsHintMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.DefaultEouClassifier.EouSensitivity = {
  EOU_SENSITIVITY_UNSPECIFIED: 0,
  DEFAULT: 1,
  HIGH: 2
};

/**
 * optional EouSensitivity type = 1;
 * @return {!proto.speechkit.stt.v3.DefaultEouClassifier.EouSensitivity}
 */
proto.speechkit.stt.v3.DefaultEouClassifier.prototype.getType = function() {
  return /** @type {!proto.speechkit.stt.v3.DefaultEouClassifier.EouSensitivity} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.DefaultEouClassifier.EouSensitivity} value
 * @return {!proto.speechkit.stt.v3.DefaultEouClassifier} returns this
 */
proto.speechkit.stt.v3.DefaultEouClassifier.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 max_pause_between_words_hint_ms = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.DefaultEouClassifier.prototype.getMaxPauseBetweenWordsHintMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.DefaultEouClassifier} returns this
 */
proto.speechkit.stt.v3.DefaultEouClassifier.prototype.setMaxPauseBetweenWordsHintMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.ExternalEouClassifier.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.ExternalEouClassifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.ExternalEouClassifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ExternalEouClassifier.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.ExternalEouClassifier}
 */
proto.speechkit.stt.v3.ExternalEouClassifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.ExternalEouClassifier;
  return proto.speechkit.stt.v3.ExternalEouClassifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.ExternalEouClassifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.ExternalEouClassifier}
 */
proto.speechkit.stt.v3.ExternalEouClassifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.ExternalEouClassifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.ExternalEouClassifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.ExternalEouClassifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ExternalEouClassifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.speechkit.stt.v3.EouClassifierOptions.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.speechkit.stt.v3.EouClassifierOptions.ClassifierCase = {
  CLASSIFIER_NOT_SET: 0,
  DEFAULT_CLASSIFIER: 1,
  EXTERNAL_CLASSIFIER: 2
};

/**
 * @return {proto.speechkit.stt.v3.EouClassifierOptions.ClassifierCase}
 */
proto.speechkit.stt.v3.EouClassifierOptions.prototype.getClassifierCase = function() {
  return /** @type {proto.speechkit.stt.v3.EouClassifierOptions.ClassifierCase} */(jspb.Message.computeOneofCase(this, proto.speechkit.stt.v3.EouClassifierOptions.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.EouClassifierOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.EouClassifierOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.EouClassifierOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.EouClassifierOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultClassifier: (f = msg.getDefaultClassifier()) && proto.speechkit.stt.v3.DefaultEouClassifier.toObject(includeInstance, f),
    externalClassifier: (f = msg.getExternalClassifier()) && proto.speechkit.stt.v3.ExternalEouClassifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.EouClassifierOptions}
 */
proto.speechkit.stt.v3.EouClassifierOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.EouClassifierOptions;
  return proto.speechkit.stt.v3.EouClassifierOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.EouClassifierOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.EouClassifierOptions}
 */
proto.speechkit.stt.v3.EouClassifierOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.DefaultEouClassifier;
      reader.readMessage(value,proto.speechkit.stt.v3.DefaultEouClassifier.deserializeBinaryFromReader);
      msg.setDefaultClassifier(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.ExternalEouClassifier;
      reader.readMessage(value,proto.speechkit.stt.v3.ExternalEouClassifier.deserializeBinaryFromReader);
      msg.setExternalClassifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.EouClassifierOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.EouClassifierOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.EouClassifierOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.EouClassifierOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultClassifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.speechkit.stt.v3.DefaultEouClassifier.serializeBinaryToWriter
    );
  }
  f = message.getExternalClassifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.speechkit.stt.v3.ExternalEouClassifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional DefaultEouClassifier default_classifier = 1;
 * @return {?proto.speechkit.stt.v3.DefaultEouClassifier}
 */
proto.speechkit.stt.v3.EouClassifierOptions.prototype.getDefaultClassifier = function() {
  return /** @type{?proto.speechkit.stt.v3.DefaultEouClassifier} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.DefaultEouClassifier, 1));
};


/**
 * @param {?proto.speechkit.stt.v3.DefaultEouClassifier|undefined} value
 * @return {!proto.speechkit.stt.v3.EouClassifierOptions} returns this
*/
proto.speechkit.stt.v3.EouClassifierOptions.prototype.setDefaultClassifier = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.speechkit.stt.v3.EouClassifierOptions.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.EouClassifierOptions} returns this
 */
proto.speechkit.stt.v3.EouClassifierOptions.prototype.clearDefaultClassifier = function() {
  return this.setDefaultClassifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.EouClassifierOptions.prototype.hasDefaultClassifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExternalEouClassifier external_classifier = 2;
 * @return {?proto.speechkit.stt.v3.ExternalEouClassifier}
 */
proto.speechkit.stt.v3.EouClassifierOptions.prototype.getExternalClassifier = function() {
  return /** @type{?proto.speechkit.stt.v3.ExternalEouClassifier} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.ExternalEouClassifier, 2));
};


/**
 * @param {?proto.speechkit.stt.v3.ExternalEouClassifier|undefined} value
 * @return {!proto.speechkit.stt.v3.EouClassifierOptions} returns this
*/
proto.speechkit.stt.v3.EouClassifierOptions.prototype.setExternalClassifier = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.speechkit.stt.v3.EouClassifierOptions.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.EouClassifierOptions} returns this
 */
proto.speechkit.stt.v3.EouClassifierOptions.prototype.clearExternalClassifier = function() {
  return this.setExternalClassifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.EouClassifierOptions.prototype.hasExternalClassifier = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.RecognitionClassifier.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.RecognitionClassifier.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.RecognitionClassifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.RecognitionClassifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    classifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    triggersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifier}
 */
proto.speechkit.stt.v3.RecognitionClassifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.RecognitionClassifier;
  return proto.speechkit.stt.v3.RecognitionClassifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifier}
 */
proto.speechkit.stt.v3.RecognitionClassifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassifier(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.speechkit.stt.v3.RecognitionClassifier.TriggerType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTriggers(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.RecognitionClassifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.RecognitionClassifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClassifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTriggersList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.RecognitionClassifier.TriggerType = {
  TRIGGER_TYPE_UNSPECIFIED: 0,
  ON_UTTERANCE: 1,
  ON_FINAL: 2,
  ON_PARTIAL: 3
};

/**
 * optional string classifier = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.RecognitionClassifier.prototype.getClassifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifier} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifier.prototype.setClassifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated TriggerType triggers = 2;
 * @return {!Array<!proto.speechkit.stt.v3.RecognitionClassifier.TriggerType>}
 */
proto.speechkit.stt.v3.RecognitionClassifier.prototype.getTriggersList = function() {
  return /** @type {!Array<!proto.speechkit.stt.v3.RecognitionClassifier.TriggerType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.RecognitionClassifier.TriggerType>} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifier} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifier.prototype.setTriggersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.speechkit.stt.v3.RecognitionClassifier.TriggerType} value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.RecognitionClassifier} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifier.prototype.addTriggers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifier} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifier.prototype.clearTriggersList = function() {
  return this.setTriggersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.RecognitionClassifierOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    classifiersList: jspb.Message.toObjectList(msg.getClassifiersList(),
    proto.speechkit.stt.v3.RecognitionClassifier.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierOptions}
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.RecognitionClassifierOptions;
  return proto.speechkit.stt.v3.RecognitionClassifierOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierOptions}
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.RecognitionClassifier;
      reader.readMessage(value,proto.speechkit.stt.v3.RecognitionClassifier.deserializeBinaryFromReader);
      msg.addClassifiers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.RecognitionClassifierOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClassifiersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.speechkit.stt.v3.RecognitionClassifier.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RecognitionClassifier classifiers = 1;
 * @return {!Array<!proto.speechkit.stt.v3.RecognitionClassifier>}
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.prototype.getClassifiersList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.RecognitionClassifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.RecognitionClassifier, 1));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.RecognitionClassifier>} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierOptions} returns this
*/
proto.speechkit.stt.v3.RecognitionClassifierOptions.prototype.setClassifiersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.speechkit.stt.v3.RecognitionClassifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.RecognitionClassifier}
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.prototype.addClassifiers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.speechkit.stt.v3.RecognitionClassifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierOptions} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierOptions.prototype.clearClassifiersList = function() {
  return this.setClassifiersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.SpeechAnalysisOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.SpeechAnalysisOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableSpeakerAnalysis: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    enableConversationAnalysis: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    descriptiveStatisticsQuantilesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.SpeechAnalysisOptions}
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.SpeechAnalysisOptions;
  return proto.speechkit.stt.v3.SpeechAnalysisOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.SpeechAnalysisOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.SpeechAnalysisOptions}
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableSpeakerAnalysis(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableConversationAnalysis(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDescriptiveStatisticsQuantiles(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.SpeechAnalysisOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.SpeechAnalysisOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableSpeakerAnalysis();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEnableConversationAnalysis();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDescriptiveStatisticsQuantilesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      3,
      f
    );
  }
};


/**
 * optional bool enable_speaker_analysis = 1;
 * @return {boolean}
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.getEnableSpeakerAnalysis = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.speechkit.stt.v3.SpeechAnalysisOptions} returns this
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.setEnableSpeakerAnalysis = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool enable_conversation_analysis = 2;
 * @return {boolean}
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.getEnableConversationAnalysis = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.speechkit.stt.v3.SpeechAnalysisOptions} returns this
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.setEnableConversationAnalysis = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated double descriptive_statistics_quantiles = 3;
 * @return {!Array<number>}
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.getDescriptiveStatisticsQuantilesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.speechkit.stt.v3.SpeechAnalysisOptions} returns this
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.setDescriptiveStatisticsQuantilesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.SpeechAnalysisOptions} returns this
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.addDescriptiveStatisticsQuantiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.SpeechAnalysisOptions} returns this
 */
proto.speechkit.stt.v3.SpeechAnalysisOptions.prototype.clearDescriptiveStatisticsQuantilesList = function() {
  return this.setDescriptiveStatisticsQuantilesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.RawAudio.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.RawAudio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.RawAudio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RawAudio.toObject = function(includeInstance, msg) {
  var f, obj = {
    audioEncoding: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sampleRateHertz: jspb.Message.getFieldWithDefault(msg, 2, 0),
    audioChannelCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.RawAudio}
 */
proto.speechkit.stt.v3.RawAudio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.RawAudio;
  return proto.speechkit.stt.v3.RawAudio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.RawAudio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.RawAudio}
 */
proto.speechkit.stt.v3.RawAudio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.speechkit.stt.v3.RawAudio.AudioEncoding} */ (reader.readEnum());
      msg.setAudioEncoding(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSampleRateHertz(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAudioChannelCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.RawAudio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.RawAudio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.RawAudio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RawAudio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioEncoding();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSampleRateHertz();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAudioChannelCount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.RawAudio.AudioEncoding = {
  AUDIO_ENCODING_UNSPECIFIED: 0,
  LINEAR16_PCM: 1
};

/**
 * optional AudioEncoding audio_encoding = 1;
 * @return {!proto.speechkit.stt.v3.RawAudio.AudioEncoding}
 */
proto.speechkit.stt.v3.RawAudio.prototype.getAudioEncoding = function() {
  return /** @type {!proto.speechkit.stt.v3.RawAudio.AudioEncoding} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.RawAudio.AudioEncoding} value
 * @return {!proto.speechkit.stt.v3.RawAudio} returns this
 */
proto.speechkit.stt.v3.RawAudio.prototype.setAudioEncoding = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 sample_rate_hertz = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.RawAudio.prototype.getSampleRateHertz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.RawAudio} returns this
 */
proto.speechkit.stt.v3.RawAudio.prototype.setSampleRateHertz = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 audio_channel_count = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.RawAudio.prototype.getAudioChannelCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.RawAudio} returns this
 */
proto.speechkit.stt.v3.RawAudio.prototype.setAudioChannelCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.ContainerAudio.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.ContainerAudio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.ContainerAudio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ContainerAudio.toObject = function(includeInstance, msg) {
  var f, obj = {
    containerAudioType: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.ContainerAudio}
 */
proto.speechkit.stt.v3.ContainerAudio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.ContainerAudio;
  return proto.speechkit.stt.v3.ContainerAudio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.ContainerAudio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.ContainerAudio}
 */
proto.speechkit.stt.v3.ContainerAudio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.speechkit.stt.v3.ContainerAudio.ContainerAudioType} */ (reader.readEnum());
      msg.setContainerAudioType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.ContainerAudio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.ContainerAudio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.ContainerAudio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ContainerAudio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContainerAudioType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.ContainerAudio.ContainerAudioType = {
  CONTAINER_AUDIO_TYPE_UNSPECIFIED: 0,
  WAV: 1,
  OGG_OPUS: 2,
  MP3: 3
};

/**
 * optional ContainerAudioType container_audio_type = 1;
 * @return {!proto.speechkit.stt.v3.ContainerAudio.ContainerAudioType}
 */
proto.speechkit.stt.v3.ContainerAudio.prototype.getContainerAudioType = function() {
  return /** @type {!proto.speechkit.stt.v3.ContainerAudio.ContainerAudioType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.ContainerAudio.ContainerAudioType} value
 * @return {!proto.speechkit.stt.v3.ContainerAudio} returns this
 */
proto.speechkit.stt.v3.ContainerAudio.prototype.setContainerAudioType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.speechkit.stt.v3.AudioFormatOptions.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.speechkit.stt.v3.AudioFormatOptions.AudioformatCase = {
  AUDIOFORMAT_NOT_SET: 0,
  RAW_AUDIO: 1,
  CONTAINER_AUDIO: 2
};

/**
 * @return {proto.speechkit.stt.v3.AudioFormatOptions.AudioformatCase}
 */
proto.speechkit.stt.v3.AudioFormatOptions.prototype.getAudioformatCase = function() {
  return /** @type {proto.speechkit.stt.v3.AudioFormatOptions.AudioformatCase} */(jspb.Message.computeOneofCase(this, proto.speechkit.stt.v3.AudioFormatOptions.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.AudioFormatOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.AudioFormatOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.AudioFormatOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AudioFormatOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawAudio: (f = msg.getRawAudio()) && proto.speechkit.stt.v3.RawAudio.toObject(includeInstance, f),
    containerAudio: (f = msg.getContainerAudio()) && proto.speechkit.stt.v3.ContainerAudio.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.AudioFormatOptions}
 */
proto.speechkit.stt.v3.AudioFormatOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.AudioFormatOptions;
  return proto.speechkit.stt.v3.AudioFormatOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.AudioFormatOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.AudioFormatOptions}
 */
proto.speechkit.stt.v3.AudioFormatOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.RawAudio;
      reader.readMessage(value,proto.speechkit.stt.v3.RawAudio.deserializeBinaryFromReader);
      msg.setRawAudio(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.ContainerAudio;
      reader.readMessage(value,proto.speechkit.stt.v3.ContainerAudio.deserializeBinaryFromReader);
      msg.setContainerAudio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.AudioFormatOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.AudioFormatOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.AudioFormatOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AudioFormatOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawAudio();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.speechkit.stt.v3.RawAudio.serializeBinaryToWriter
    );
  }
  f = message.getContainerAudio();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.speechkit.stt.v3.ContainerAudio.serializeBinaryToWriter
    );
  }
};


/**
 * optional RawAudio raw_audio = 1;
 * @return {?proto.speechkit.stt.v3.RawAudio}
 */
proto.speechkit.stt.v3.AudioFormatOptions.prototype.getRawAudio = function() {
  return /** @type{?proto.speechkit.stt.v3.RawAudio} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.RawAudio, 1));
};


/**
 * @param {?proto.speechkit.stt.v3.RawAudio|undefined} value
 * @return {!proto.speechkit.stt.v3.AudioFormatOptions} returns this
*/
proto.speechkit.stt.v3.AudioFormatOptions.prototype.setRawAudio = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.speechkit.stt.v3.AudioFormatOptions.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.AudioFormatOptions} returns this
 */
proto.speechkit.stt.v3.AudioFormatOptions.prototype.clearRawAudio = function() {
  return this.setRawAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.AudioFormatOptions.prototype.hasRawAudio = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ContainerAudio container_audio = 2;
 * @return {?proto.speechkit.stt.v3.ContainerAudio}
 */
proto.speechkit.stt.v3.AudioFormatOptions.prototype.getContainerAudio = function() {
  return /** @type{?proto.speechkit.stt.v3.ContainerAudio} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.ContainerAudio, 2));
};


/**
 * @param {?proto.speechkit.stt.v3.ContainerAudio|undefined} value
 * @return {!proto.speechkit.stt.v3.AudioFormatOptions} returns this
*/
proto.speechkit.stt.v3.AudioFormatOptions.prototype.setContainerAudio = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.speechkit.stt.v3.AudioFormatOptions.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.AudioFormatOptions} returns this
 */
proto.speechkit.stt.v3.AudioFormatOptions.prototype.clearContainerAudio = function() {
  return this.setContainerAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.AudioFormatOptions.prototype.hasContainerAudio = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.LanguageRestrictionOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.LanguageRestrictionOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    restrictionType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    languageCodeList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.LanguageRestrictionOptions}
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.LanguageRestrictionOptions;
  return proto.speechkit.stt.v3.LanguageRestrictionOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.LanguageRestrictionOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.LanguageRestrictionOptions}
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.speechkit.stt.v3.LanguageRestrictionOptions.LanguageRestrictionType} */ (reader.readEnum());
      msg.setRestrictionType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguageCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.LanguageRestrictionOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.LanguageRestrictionOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRestrictionType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLanguageCodeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.LanguageRestrictionType = {
  LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED: 0,
  WHITELIST: 1,
  BLACKLIST: 2
};

/**
 * optional LanguageRestrictionType restriction_type = 1;
 * @return {!proto.speechkit.stt.v3.LanguageRestrictionOptions.LanguageRestrictionType}
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.prototype.getRestrictionType = function() {
  return /** @type {!proto.speechkit.stt.v3.LanguageRestrictionOptions.LanguageRestrictionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.LanguageRestrictionOptions.LanguageRestrictionType} value
 * @return {!proto.speechkit.stt.v3.LanguageRestrictionOptions} returns this
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.prototype.setRestrictionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string language_code = 2;
 * @return {!Array<string>}
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.prototype.getLanguageCodeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.speechkit.stt.v3.LanguageRestrictionOptions} returns this
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.prototype.setLanguageCodeList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.LanguageRestrictionOptions} returns this
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.prototype.addLanguageCode = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.LanguageRestrictionOptions} returns this
 */
proto.speechkit.stt.v3.LanguageRestrictionOptions.prototype.clearLanguageCodeList = function() {
  return this.setLanguageCodeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.JsonSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.JsonSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.JsonSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.JsonSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    schema: (f = msg.getSchema()) && proto.speechkit.stt.v3.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.JsonSchema}
 */
proto.speechkit.stt.v3.JsonSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.JsonSchema;
  return proto.speechkit.stt.v3.JsonSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.JsonSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.JsonSchema}
 */
proto.speechkit.stt.v3.JsonSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.Struct;
      reader.readMessage(value,proto.speechkit.stt.v3.Struct.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.JsonSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.JsonSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.JsonSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.JsonSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.speechkit.stt.v3.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional Struct schema = 1;
 * @return {?proto.speechkit.stt.v3.Struct}
 */
proto.speechkit.stt.v3.JsonSchema.prototype.getSchema = function() {
  return /** @type{?proto.speechkit.stt.v3.Struct} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.Struct, 1));
};


/**
 * @param {?proto.speechkit.stt.v3.Struct|undefined} value
 * @return {!proto.speechkit.stt.v3.JsonSchema} returns this
*/
proto.speechkit.stt.v3.JsonSchema.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.JsonSchema} returns this
 */
proto.speechkit.stt.v3.JsonSchema.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.JsonSchema.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.speechkit.stt.v3.SummarizationProperty.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.speechkit.stt.v3.SummarizationProperty.ResponseformatCase = {
  RESPONSEFORMAT_NOT_SET: 0,
  JSON_OBJECT: 2,
  JSON_SCHEMA: 3
};

/**
 * @return {proto.speechkit.stt.v3.SummarizationProperty.ResponseformatCase}
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.getResponseformatCase = function() {
  return /** @type {proto.speechkit.stt.v3.SummarizationProperty.ResponseformatCase} */(jspb.Message.computeOneofCase(this, proto.speechkit.stt.v3.SummarizationProperty.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.SummarizationProperty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.SummarizationProperty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SummarizationProperty.toObject = function(includeInstance, msg) {
  var f, obj = {
    instruction: jspb.Message.getFieldWithDefault(msg, 1, ""),
    jsonObject: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    jsonSchema: (f = msg.getJsonSchema()) && proto.speechkit.stt.v3.JsonSchema.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.SummarizationProperty}
 */
proto.speechkit.stt.v3.SummarizationProperty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.SummarizationProperty;
  return proto.speechkit.stt.v3.SummarizationProperty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.SummarizationProperty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.SummarizationProperty}
 */
proto.speechkit.stt.v3.SummarizationProperty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstruction(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJsonObject(value);
      break;
    case 3:
      var value = new proto.speechkit.stt.v3.JsonSchema;
      reader.readMessage(value,proto.speechkit.stt.v3.JsonSchema.deserializeBinaryFromReader);
      msg.setJsonSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.SummarizationProperty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.SummarizationProperty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SummarizationProperty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstruction();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getJsonSchema();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.speechkit.stt.v3.JsonSchema.serializeBinaryToWriter
    );
  }
};


/**
 * optional string instruction = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.getInstruction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.SummarizationProperty} returns this
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.setInstruction = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool json_object = 2;
 * @return {boolean}
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.getJsonObject = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.speechkit.stt.v3.SummarizationProperty} returns this
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.setJsonObject = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.speechkit.stt.v3.SummarizationProperty.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.speechkit.stt.v3.SummarizationProperty} returns this
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.clearJsonObject = function() {
  return jspb.Message.setOneofField(this, 2, proto.speechkit.stt.v3.SummarizationProperty.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.hasJsonObject = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JsonSchema json_schema = 3;
 * @return {?proto.speechkit.stt.v3.JsonSchema}
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.getJsonSchema = function() {
  return /** @type{?proto.speechkit.stt.v3.JsonSchema} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.JsonSchema, 3));
};


/**
 * @param {?proto.speechkit.stt.v3.JsonSchema|undefined} value
 * @return {!proto.speechkit.stt.v3.SummarizationProperty} returns this
*/
proto.speechkit.stt.v3.SummarizationProperty.prototype.setJsonSchema = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.speechkit.stt.v3.SummarizationProperty.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.SummarizationProperty} returns this
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.clearJsonSchema = function() {
  return this.setJsonSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.SummarizationProperty.prototype.hasJsonSchema = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.SummarizationOptions.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.SummarizationOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.SummarizationOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.SummarizationOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SummarizationOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.speechkit.stt.v3.SummarizationProperty.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.SummarizationOptions}
 */
proto.speechkit.stt.v3.SummarizationOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.SummarizationOptions;
  return proto.speechkit.stt.v3.SummarizationOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.SummarizationOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.SummarizationOptions}
 */
proto.speechkit.stt.v3.SummarizationOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelUri(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.SummarizationProperty;
      reader.readMessage(value,proto.speechkit.stt.v3.SummarizationProperty.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.SummarizationOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.SummarizationOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.SummarizationOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SummarizationOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.speechkit.stt.v3.SummarizationProperty.serializeBinaryToWriter
    );
  }
};


/**
 * optional string model_uri = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.SummarizationOptions.prototype.getModelUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.SummarizationOptions} returns this
 */
proto.speechkit.stt.v3.SummarizationOptions.prototype.setModelUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SummarizationProperty properties = 2;
 * @return {!Array<!proto.speechkit.stt.v3.SummarizationProperty>}
 */
proto.speechkit.stt.v3.SummarizationOptions.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.SummarizationProperty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.SummarizationProperty, 2));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.SummarizationProperty>} value
 * @return {!proto.speechkit.stt.v3.SummarizationOptions} returns this
*/
proto.speechkit.stt.v3.SummarizationOptions.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.speechkit.stt.v3.SummarizationProperty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.SummarizationProperty}
 */
proto.speechkit.stt.v3.SummarizationOptions.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.speechkit.stt.v3.SummarizationProperty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.SummarizationOptions} returns this
 */
proto.speechkit.stt.v3.SummarizationOptions.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.SummarizationPropertyResult.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.SummarizationPropertyResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.SummarizationPropertyResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SummarizationPropertyResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.SummarizationPropertyResult}
 */
proto.speechkit.stt.v3.SummarizationPropertyResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.SummarizationPropertyResult;
  return proto.speechkit.stt.v3.SummarizationPropertyResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.SummarizationPropertyResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.SummarizationPropertyResult}
 */
proto.speechkit.stt.v3.SummarizationPropertyResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.SummarizationPropertyResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.SummarizationPropertyResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.SummarizationPropertyResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SummarizationPropertyResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string response = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.SummarizationPropertyResult.prototype.getResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.SummarizationPropertyResult} returns this
 */
proto.speechkit.stt.v3.SummarizationPropertyResult.prototype.setResponse = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.RecognitionModelOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.RecognitionModelOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionModelOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: jspb.Message.getFieldWithDefault(msg, 1, ""),
    audioFormat: (f = msg.getAudioFormat()) && proto.speechkit.stt.v3.AudioFormatOptions.toObject(includeInstance, f),
    textNormalization: (f = msg.getTextNormalization()) && proto.speechkit.stt.v3.TextNormalizationOptions.toObject(includeInstance, f),
    languageRestriction: (f = msg.getLanguageRestriction()) && proto.speechkit.stt.v3.LanguageRestrictionOptions.toObject(includeInstance, f),
    audioProcessingType: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.RecognitionModelOptions;
  return proto.speechkit.stt.v3.RecognitionModelOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.RecognitionModelOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.AudioFormatOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.AudioFormatOptions.deserializeBinaryFromReader);
      msg.setAudioFormat(value);
      break;
    case 3:
      var value = new proto.speechkit.stt.v3.TextNormalizationOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.TextNormalizationOptions.deserializeBinaryFromReader);
      msg.setTextNormalization(value);
      break;
    case 4:
      var value = new proto.speechkit.stt.v3.LanguageRestrictionOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.LanguageRestrictionOptions.deserializeBinaryFromReader);
      msg.setLanguageRestriction(value);
      break;
    case 5:
      var value = /** @type {!proto.speechkit.stt.v3.RecognitionModelOptions.AudioProcessingType} */ (reader.readEnum());
      msg.setAudioProcessingType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.RecognitionModelOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.RecognitionModelOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionModelOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAudioFormat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.speechkit.stt.v3.AudioFormatOptions.serializeBinaryToWriter
    );
  }
  f = message.getTextNormalization();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.speechkit.stt.v3.TextNormalizationOptions.serializeBinaryToWriter
    );
  }
  f = message.getLanguageRestriction();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.speechkit.stt.v3.LanguageRestrictionOptions.serializeBinaryToWriter
    );
  }
  f = message.getAudioProcessingType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.AudioProcessingType = {
  AUDIO_PROCESSING_TYPE_UNSPECIFIED: 0,
  REAL_TIME: 1,
  FULL_DATA: 2
};

/**
 * optional string model = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions} returns this
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AudioFormatOptions audio_format = 2;
 * @return {?proto.speechkit.stt.v3.AudioFormatOptions}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.getAudioFormat = function() {
  return /** @type{?proto.speechkit.stt.v3.AudioFormatOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.AudioFormatOptions, 2));
};


/**
 * @param {?proto.speechkit.stt.v3.AudioFormatOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions} returns this
*/
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.setAudioFormat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions} returns this
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.clearAudioFormat = function() {
  return this.setAudioFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.hasAudioFormat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TextNormalizationOptions text_normalization = 3;
 * @return {?proto.speechkit.stt.v3.TextNormalizationOptions}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.getTextNormalization = function() {
  return /** @type{?proto.speechkit.stt.v3.TextNormalizationOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.TextNormalizationOptions, 3));
};


/**
 * @param {?proto.speechkit.stt.v3.TextNormalizationOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions} returns this
*/
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.setTextNormalization = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions} returns this
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.clearTextNormalization = function() {
  return this.setTextNormalization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.hasTextNormalization = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LanguageRestrictionOptions language_restriction = 4;
 * @return {?proto.speechkit.stt.v3.LanguageRestrictionOptions}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.getLanguageRestriction = function() {
  return /** @type{?proto.speechkit.stt.v3.LanguageRestrictionOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.LanguageRestrictionOptions, 4));
};


/**
 * @param {?proto.speechkit.stt.v3.LanguageRestrictionOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions} returns this
*/
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.setLanguageRestriction = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions} returns this
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.clearLanguageRestriction = function() {
  return this.setLanguageRestriction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.hasLanguageRestriction = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AudioProcessingType audio_processing_type = 5;
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions.AudioProcessingType}
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.getAudioProcessingType = function() {
  return /** @type {!proto.speechkit.stt.v3.RecognitionModelOptions.AudioProcessingType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.RecognitionModelOptions.AudioProcessingType} value
 * @return {!proto.speechkit.stt.v3.RecognitionModelOptions} returns this
 */
proto.speechkit.stt.v3.RecognitionModelOptions.prototype.setAudioProcessingType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.SpeakerLabelingOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.SpeakerLabelingOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    speakerLabeling: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.SpeakerLabelingOptions}
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.SpeakerLabelingOptions;
  return proto.speechkit.stt.v3.SpeakerLabelingOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.SpeakerLabelingOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.SpeakerLabelingOptions}
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.speechkit.stt.v3.SpeakerLabelingOptions.SpeakerLabeling} */ (reader.readEnum());
      msg.setSpeakerLabeling(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.SpeakerLabelingOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.SpeakerLabelingOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeakerLabeling();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions.SpeakerLabeling = {
  SPEAKER_LABELING_UNSPECIFIED: 0,
  SPEAKER_LABELING_ENABLED: 1,
  SPEAKER_LABELING_DISABLED: 2
};

/**
 * optional SpeakerLabeling speaker_labeling = 1;
 * @return {!proto.speechkit.stt.v3.SpeakerLabelingOptions.SpeakerLabeling}
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions.prototype.getSpeakerLabeling = function() {
  return /** @type {!proto.speechkit.stt.v3.SpeakerLabelingOptions.SpeakerLabeling} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.SpeakerLabelingOptions.SpeakerLabeling} value
 * @return {!proto.speechkit.stt.v3.SpeakerLabelingOptions} returns this
 */
proto.speechkit.stt.v3.SpeakerLabelingOptions.prototype.setSpeakerLabeling = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.StreamingOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.StreamingOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StreamingOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    recognitionModel: (f = msg.getRecognitionModel()) && proto.speechkit.stt.v3.RecognitionModelOptions.toObject(includeInstance, f),
    eouClassifier: (f = msg.getEouClassifier()) && proto.speechkit.stt.v3.EouClassifierOptions.toObject(includeInstance, f),
    recognitionClassifier: (f = msg.getRecognitionClassifier()) && proto.speechkit.stt.v3.RecognitionClassifierOptions.toObject(includeInstance, f),
    speechAnalysis: (f = msg.getSpeechAnalysis()) && proto.speechkit.stt.v3.SpeechAnalysisOptions.toObject(includeInstance, f),
    speakerLabeling: (f = msg.getSpeakerLabeling()) && proto.speechkit.stt.v3.SpeakerLabelingOptions.toObject(includeInstance, f),
    summarization: (f = msg.getSummarization()) && proto.speechkit.stt.v3.SummarizationOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.StreamingOptions}
 */
proto.speechkit.stt.v3.StreamingOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.StreamingOptions;
  return proto.speechkit.stt.v3.StreamingOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.StreamingOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.StreamingOptions}
 */
proto.speechkit.stt.v3.StreamingOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.RecognitionModelOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.RecognitionModelOptions.deserializeBinaryFromReader);
      msg.setRecognitionModel(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.EouClassifierOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.EouClassifierOptions.deserializeBinaryFromReader);
      msg.setEouClassifier(value);
      break;
    case 3:
      var value = new proto.speechkit.stt.v3.RecognitionClassifierOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.RecognitionClassifierOptions.deserializeBinaryFromReader);
      msg.setRecognitionClassifier(value);
      break;
    case 4:
      var value = new proto.speechkit.stt.v3.SpeechAnalysisOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.SpeechAnalysisOptions.deserializeBinaryFromReader);
      msg.setSpeechAnalysis(value);
      break;
    case 5:
      var value = new proto.speechkit.stt.v3.SpeakerLabelingOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.SpeakerLabelingOptions.deserializeBinaryFromReader);
      msg.setSpeakerLabeling(value);
      break;
    case 6:
      var value = new proto.speechkit.stt.v3.SummarizationOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.SummarizationOptions.deserializeBinaryFromReader);
      msg.setSummarization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.StreamingOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.StreamingOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StreamingOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecognitionModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.speechkit.stt.v3.RecognitionModelOptions.serializeBinaryToWriter
    );
  }
  f = message.getEouClassifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.speechkit.stt.v3.EouClassifierOptions.serializeBinaryToWriter
    );
  }
  f = message.getRecognitionClassifier();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.speechkit.stt.v3.RecognitionClassifierOptions.serializeBinaryToWriter
    );
  }
  f = message.getSpeechAnalysis();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.speechkit.stt.v3.SpeechAnalysisOptions.serializeBinaryToWriter
    );
  }
  f = message.getSpeakerLabeling();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.speechkit.stt.v3.SpeakerLabelingOptions.serializeBinaryToWriter
    );
  }
  f = message.getSummarization();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.speechkit.stt.v3.SummarizationOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional RecognitionModelOptions recognition_model = 1;
 * @return {?proto.speechkit.stt.v3.RecognitionModelOptions}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.getRecognitionModel = function() {
  return /** @type{?proto.speechkit.stt.v3.RecognitionModelOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.RecognitionModelOptions, 1));
};


/**
 * @param {?proto.speechkit.stt.v3.RecognitionModelOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
*/
proto.speechkit.stt.v3.StreamingOptions.prototype.setRecognitionModel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.clearRecognitionModel = function() {
  return this.setRecognitionModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.hasRecognitionModel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EouClassifierOptions eou_classifier = 2;
 * @return {?proto.speechkit.stt.v3.EouClassifierOptions}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.getEouClassifier = function() {
  return /** @type{?proto.speechkit.stt.v3.EouClassifierOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.EouClassifierOptions, 2));
};


/**
 * @param {?proto.speechkit.stt.v3.EouClassifierOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
*/
proto.speechkit.stt.v3.StreamingOptions.prototype.setEouClassifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.clearEouClassifier = function() {
  return this.setEouClassifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.hasEouClassifier = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RecognitionClassifierOptions recognition_classifier = 3;
 * @return {?proto.speechkit.stt.v3.RecognitionClassifierOptions}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.getRecognitionClassifier = function() {
  return /** @type{?proto.speechkit.stt.v3.RecognitionClassifierOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.RecognitionClassifierOptions, 3));
};


/**
 * @param {?proto.speechkit.stt.v3.RecognitionClassifierOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
*/
proto.speechkit.stt.v3.StreamingOptions.prototype.setRecognitionClassifier = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.clearRecognitionClassifier = function() {
  return this.setRecognitionClassifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.hasRecognitionClassifier = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SpeechAnalysisOptions speech_analysis = 4;
 * @return {?proto.speechkit.stt.v3.SpeechAnalysisOptions}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.getSpeechAnalysis = function() {
  return /** @type{?proto.speechkit.stt.v3.SpeechAnalysisOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.SpeechAnalysisOptions, 4));
};


/**
 * @param {?proto.speechkit.stt.v3.SpeechAnalysisOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
*/
proto.speechkit.stt.v3.StreamingOptions.prototype.setSpeechAnalysis = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.clearSpeechAnalysis = function() {
  return this.setSpeechAnalysis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.hasSpeechAnalysis = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SpeakerLabelingOptions speaker_labeling = 5;
 * @return {?proto.speechkit.stt.v3.SpeakerLabelingOptions}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.getSpeakerLabeling = function() {
  return /** @type{?proto.speechkit.stt.v3.SpeakerLabelingOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.SpeakerLabelingOptions, 5));
};


/**
 * @param {?proto.speechkit.stt.v3.SpeakerLabelingOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
*/
proto.speechkit.stt.v3.StreamingOptions.prototype.setSpeakerLabeling = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.clearSpeakerLabeling = function() {
  return this.setSpeakerLabeling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.hasSpeakerLabeling = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SummarizationOptions summarization = 6;
 * @return {?proto.speechkit.stt.v3.SummarizationOptions}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.getSummarization = function() {
  return /** @type{?proto.speechkit.stt.v3.SummarizationOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.SummarizationOptions, 6));
};


/**
 * @param {?proto.speechkit.stt.v3.SummarizationOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
*/
proto.speechkit.stt.v3.StreamingOptions.prototype.setSummarization = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingOptions} returns this
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.clearSummarization = function() {
  return this.setSummarization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingOptions.prototype.hasSummarization = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.AudioChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.AudioChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.AudioChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AudioChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.AudioChunk}
 */
proto.speechkit.stt.v3.AudioChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.AudioChunk;
  return proto.speechkit.stt.v3.AudioChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.AudioChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.AudioChunk}
 */
proto.speechkit.stt.v3.AudioChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.AudioChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.AudioChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.AudioChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AudioChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.speechkit.stt.v3.AudioChunk.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.speechkit.stt.v3.AudioChunk.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.AudioChunk.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.speechkit.stt.v3.AudioChunk} returns this
 */
proto.speechkit.stt.v3.AudioChunk.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.SilenceChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.SilenceChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.SilenceChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SilenceChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    durationMs: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.SilenceChunk}
 */
proto.speechkit.stt.v3.SilenceChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.SilenceChunk;
  return proto.speechkit.stt.v3.SilenceChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.SilenceChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.SilenceChunk}
 */
proto.speechkit.stt.v3.SilenceChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDurationMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.SilenceChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.SilenceChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.SilenceChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SilenceChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDurationMs();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 duration_ms = 1;
 * @return {number}
 */
proto.speechkit.stt.v3.SilenceChunk.prototype.getDurationMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.SilenceChunk} returns this
 */
proto.speechkit.stt.v3.SilenceChunk.prototype.setDurationMs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.Eou.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.Eou.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.Eou} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Eou.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.Eou}
 */
proto.speechkit.stt.v3.Eou.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.Eou;
  return proto.speechkit.stt.v3.Eou.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.Eou} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.Eou}
 */
proto.speechkit.stt.v3.Eou.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.Eou.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.Eou.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.Eou} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Eou.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.speechkit.stt.v3.StreamingRequest.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.speechkit.stt.v3.StreamingRequest.EventCase = {
  EVENT_NOT_SET: 0,
  SESSION_OPTIONS: 1,
  CHUNK: 2,
  SILENCE_CHUNK: 3,
  EOU: 4
};

/**
 * @return {proto.speechkit.stt.v3.StreamingRequest.EventCase}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.getEventCase = function() {
  return /** @type {proto.speechkit.stt.v3.StreamingRequest.EventCase} */(jspb.Message.computeOneofCase(this, proto.speechkit.stt.v3.StreamingRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.StreamingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.StreamingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StreamingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionOptions: (f = msg.getSessionOptions()) && proto.speechkit.stt.v3.StreamingOptions.toObject(includeInstance, f),
    chunk: (f = msg.getChunk()) && proto.speechkit.stt.v3.AudioChunk.toObject(includeInstance, f),
    silenceChunk: (f = msg.getSilenceChunk()) && proto.speechkit.stt.v3.SilenceChunk.toObject(includeInstance, f),
    eou: (f = msg.getEou()) && proto.speechkit.stt.v3.Eou.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.StreamingRequest}
 */
proto.speechkit.stt.v3.StreamingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.StreamingRequest;
  return proto.speechkit.stt.v3.StreamingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.StreamingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.StreamingRequest}
 */
proto.speechkit.stt.v3.StreamingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.StreamingOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.StreamingOptions.deserializeBinaryFromReader);
      msg.setSessionOptions(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.AudioChunk;
      reader.readMessage(value,proto.speechkit.stt.v3.AudioChunk.deserializeBinaryFromReader);
      msg.setChunk(value);
      break;
    case 3:
      var value = new proto.speechkit.stt.v3.SilenceChunk;
      reader.readMessage(value,proto.speechkit.stt.v3.SilenceChunk.deserializeBinaryFromReader);
      msg.setSilenceChunk(value);
      break;
    case 4:
      var value = new proto.speechkit.stt.v3.Eou;
      reader.readMessage(value,proto.speechkit.stt.v3.Eou.deserializeBinaryFromReader);
      msg.setEou(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.StreamingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.StreamingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StreamingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.speechkit.stt.v3.StreamingOptions.serializeBinaryToWriter
    );
  }
  f = message.getChunk();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.speechkit.stt.v3.AudioChunk.serializeBinaryToWriter
    );
  }
  f = message.getSilenceChunk();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.speechkit.stt.v3.SilenceChunk.serializeBinaryToWriter
    );
  }
  f = message.getEou();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.speechkit.stt.v3.Eou.serializeBinaryToWriter
    );
  }
};


/**
 * optional StreamingOptions session_options = 1;
 * @return {?proto.speechkit.stt.v3.StreamingOptions}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.getSessionOptions = function() {
  return /** @type{?proto.speechkit.stt.v3.StreamingOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.StreamingOptions, 1));
};


/**
 * @param {?proto.speechkit.stt.v3.StreamingOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingRequest} returns this
*/
proto.speechkit.stt.v3.StreamingRequest.prototype.setSessionOptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.speechkit.stt.v3.StreamingRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingRequest} returns this
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.clearSessionOptions = function() {
  return this.setSessionOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.hasSessionOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AudioChunk chunk = 2;
 * @return {?proto.speechkit.stt.v3.AudioChunk}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.getChunk = function() {
  return /** @type{?proto.speechkit.stt.v3.AudioChunk} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.AudioChunk, 2));
};


/**
 * @param {?proto.speechkit.stt.v3.AudioChunk|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingRequest} returns this
*/
proto.speechkit.stt.v3.StreamingRequest.prototype.setChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.speechkit.stt.v3.StreamingRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingRequest} returns this
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.clearChunk = function() {
  return this.setChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SilenceChunk silence_chunk = 3;
 * @return {?proto.speechkit.stt.v3.SilenceChunk}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.getSilenceChunk = function() {
  return /** @type{?proto.speechkit.stt.v3.SilenceChunk} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.SilenceChunk, 3));
};


/**
 * @param {?proto.speechkit.stt.v3.SilenceChunk|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingRequest} returns this
*/
proto.speechkit.stt.v3.StreamingRequest.prototype.setSilenceChunk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.speechkit.stt.v3.StreamingRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingRequest} returns this
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.clearSilenceChunk = function() {
  return this.setSilenceChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.hasSilenceChunk = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Eou eou = 4;
 * @return {?proto.speechkit.stt.v3.Eou}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.getEou = function() {
  return /** @type{?proto.speechkit.stt.v3.Eou} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.Eou, 4));
};


/**
 * @param {?proto.speechkit.stt.v3.Eou|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingRequest} returns this
*/
proto.speechkit.stt.v3.StreamingRequest.prototype.setEou = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.speechkit.stt.v3.StreamingRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingRequest} returns this
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.clearEou = function() {
  return this.setEou(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingRequest.prototype.hasEou = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.speechkit.stt.v3.RecognizeFileRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.AudiosourceCase = {
  AUDIOSOURCE_NOT_SET: 0,
  CONTENT: 1,
  URI: 2
};

/**
 * @return {proto.speechkit.stt.v3.RecognizeFileRequest.AudiosourceCase}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getAudiosourceCase = function() {
  return /** @type {proto.speechkit.stt.v3.RecognizeFileRequest.AudiosourceCase} */(jspb.Message.computeOneofCase(this, proto.speechkit.stt.v3.RecognizeFileRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.RecognizeFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.RecognizeFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognizeFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: msg.getContent_asB64(),
    uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recognitionModel: (f = msg.getRecognitionModel()) && proto.speechkit.stt.v3.RecognitionModelOptions.toObject(includeInstance, f),
    recognitionClassifier: (f = msg.getRecognitionClassifier()) && proto.speechkit.stt.v3.RecognitionClassifierOptions.toObject(includeInstance, f),
    speechAnalysis: (f = msg.getSpeechAnalysis()) && proto.speechkit.stt.v3.SpeechAnalysisOptions.toObject(includeInstance, f),
    speakerLabeling: (f = msg.getSpeakerLabeling()) && proto.speechkit.stt.v3.SpeakerLabelingOptions.toObject(includeInstance, f),
    summarization: (f = msg.getSummarization()) && proto.speechkit.stt.v3.SummarizationOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.RecognizeFileRequest;
  return proto.speechkit.stt.v3.RecognizeFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.RecognizeFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 3:
      var value = new proto.speechkit.stt.v3.RecognitionModelOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.RecognitionModelOptions.deserializeBinaryFromReader);
      msg.setRecognitionModel(value);
      break;
    case 4:
      var value = new proto.speechkit.stt.v3.RecognitionClassifierOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.RecognitionClassifierOptions.deserializeBinaryFromReader);
      msg.setRecognitionClassifier(value);
      break;
    case 5:
      var value = new proto.speechkit.stt.v3.SpeechAnalysisOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.SpeechAnalysisOptions.deserializeBinaryFromReader);
      msg.setSpeechAnalysis(value);
      break;
    case 6:
      var value = new proto.speechkit.stt.v3.SpeakerLabelingOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.SpeakerLabelingOptions.deserializeBinaryFromReader);
      msg.setSpeakerLabeling(value);
      break;
    case 7:
      var value = new proto.speechkit.stt.v3.SummarizationOptions;
      reader.readMessage(value,proto.speechkit.stt.v3.SummarizationOptions.deserializeBinaryFromReader);
      msg.setSummarization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.RecognizeFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.RecognizeFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognizeFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecognitionModel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.speechkit.stt.v3.RecognitionModelOptions.serializeBinaryToWriter
    );
  }
  f = message.getRecognitionClassifier();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.speechkit.stt.v3.RecognitionClassifierOptions.serializeBinaryToWriter
    );
  }
  f = message.getSpeechAnalysis();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.speechkit.stt.v3.SpeechAnalysisOptions.serializeBinaryToWriter
    );
  }
  f = message.getSpeakerLabeling();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.speechkit.stt.v3.SpeakerLabelingOptions.serializeBinaryToWriter
    );
  }
  f = message.getSummarization();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.speechkit.stt.v3.SummarizationOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes content = 1;
 * @return {!(string|Uint8Array)}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes content = 1;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.setContent = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.speechkit.stt.v3.RecognizeFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.clearContent = function() {
  return jspb.Message.setOneofField(this, 1, proto.speechkit.stt.v3.RecognizeFileRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.hasContent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.setUri = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.speechkit.stt.v3.RecognizeFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.clearUri = function() {
  return jspb.Message.setOneofField(this, 2, proto.speechkit.stt.v3.RecognizeFileRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.hasUri = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RecognitionModelOptions recognition_model = 3;
 * @return {?proto.speechkit.stt.v3.RecognitionModelOptions}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getRecognitionModel = function() {
  return /** @type{?proto.speechkit.stt.v3.RecognitionModelOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.RecognitionModelOptions, 3));
};


/**
 * @param {?proto.speechkit.stt.v3.RecognitionModelOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
*/
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.setRecognitionModel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.clearRecognitionModel = function() {
  return this.setRecognitionModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.hasRecognitionModel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RecognitionClassifierOptions recognition_classifier = 4;
 * @return {?proto.speechkit.stt.v3.RecognitionClassifierOptions}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getRecognitionClassifier = function() {
  return /** @type{?proto.speechkit.stt.v3.RecognitionClassifierOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.RecognitionClassifierOptions, 4));
};


/**
 * @param {?proto.speechkit.stt.v3.RecognitionClassifierOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
*/
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.setRecognitionClassifier = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.clearRecognitionClassifier = function() {
  return this.setRecognitionClassifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.hasRecognitionClassifier = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SpeechAnalysisOptions speech_analysis = 5;
 * @return {?proto.speechkit.stt.v3.SpeechAnalysisOptions}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getSpeechAnalysis = function() {
  return /** @type{?proto.speechkit.stt.v3.SpeechAnalysisOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.SpeechAnalysisOptions, 5));
};


/**
 * @param {?proto.speechkit.stt.v3.SpeechAnalysisOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
*/
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.setSpeechAnalysis = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.clearSpeechAnalysis = function() {
  return this.setSpeechAnalysis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.hasSpeechAnalysis = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SpeakerLabelingOptions speaker_labeling = 6;
 * @return {?proto.speechkit.stt.v3.SpeakerLabelingOptions}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getSpeakerLabeling = function() {
  return /** @type{?proto.speechkit.stt.v3.SpeakerLabelingOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.SpeakerLabelingOptions, 6));
};


/**
 * @param {?proto.speechkit.stt.v3.SpeakerLabelingOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
*/
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.setSpeakerLabeling = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.clearSpeakerLabeling = function() {
  return this.setSpeakerLabeling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.hasSpeakerLabeling = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SummarizationOptions summarization = 7;
 * @return {?proto.speechkit.stt.v3.SummarizationOptions}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.getSummarization = function() {
  return /** @type{?proto.speechkit.stt.v3.SummarizationOptions} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.SummarizationOptions, 7));
};


/**
 * @param {?proto.speechkit.stt.v3.SummarizationOptions|undefined} value
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
*/
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.setSummarization = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognizeFileRequest} returns this
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.clearSummarization = function() {
  return this.setSummarization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognizeFileRequest.prototype.hasSummarization = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.Word.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.Word.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.Word} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Word.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startTimeMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endTimeMs: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.Word}
 */
proto.speechkit.stt.v3.Word.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.Word;
  return proto.speechkit.stt.v3.Word.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.Word} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.Word}
 */
proto.speechkit.stt.v3.Word.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTimeMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTimeMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.Word.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.Word.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.Word} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Word.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEndTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.Word.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.Word} returns this
 */
proto.speechkit.stt.v3.Word.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 start_time_ms = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.Word.prototype.getStartTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.Word} returns this
 */
proto.speechkit.stt.v3.Word.prototype.setStartTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 end_time_ms = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.Word.prototype.getEndTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.Word} returns this
 */
proto.speechkit.stt.v3.Word.prototype.setEndTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.LanguageEstimation.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.LanguageEstimation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.LanguageEstimation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.LanguageEstimation.toObject = function(includeInstance, msg) {
  var f, obj = {
    languageCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    probability: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.LanguageEstimation}
 */
proto.speechkit.stt.v3.LanguageEstimation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.LanguageEstimation;
  return proto.speechkit.stt.v3.LanguageEstimation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.LanguageEstimation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.LanguageEstimation}
 */
proto.speechkit.stt.v3.LanguageEstimation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setProbability(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.LanguageEstimation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.LanguageEstimation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.LanguageEstimation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.LanguageEstimation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProbability();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string language_code = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.LanguageEstimation.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.LanguageEstimation} returns this
 */
proto.speechkit.stt.v3.LanguageEstimation.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double probability = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.LanguageEstimation.prototype.getProbability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.LanguageEstimation} returns this
 */
proto.speechkit.stt.v3.LanguageEstimation.prototype.setProbability = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.Alternative.repeatedFields_ = [1,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.Alternative.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.Alternative.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.Alternative} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Alternative.toObject = function(includeInstance, msg) {
  var f, obj = {
    wordsList: jspb.Message.toObjectList(msg.getWordsList(),
    proto.speechkit.stt.v3.Word.toObject, includeInstance),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startTimeMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    endTimeMs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    languagesList: jspb.Message.toObjectList(msg.getLanguagesList(),
    proto.speechkit.stt.v3.LanguageEstimation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.Alternative}
 */
proto.speechkit.stt.v3.Alternative.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.Alternative;
  return proto.speechkit.stt.v3.Alternative.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.Alternative} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.Alternative}
 */
proto.speechkit.stt.v3.Alternative.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.Word;
      reader.readMessage(value,proto.speechkit.stt.v3.Word.deserializeBinaryFromReader);
      msg.addWords(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTimeMs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTimeMs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConfidence(value);
      break;
    case 6:
      var value = new proto.speechkit.stt.v3.LanguageEstimation;
      reader.readMessage(value,proto.speechkit.stt.v3.LanguageEstimation.deserializeBinaryFromReader);
      msg.addLanguages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.Alternative.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.Alternative.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.Alternative} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Alternative.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.speechkit.stt.v3.Word.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEndTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.speechkit.stt.v3.LanguageEstimation.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Word words = 1;
 * @return {!Array<!proto.speechkit.stt.v3.Word>}
 */
proto.speechkit.stt.v3.Alternative.prototype.getWordsList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.Word>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.Word, 1));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.Word>} value
 * @return {!proto.speechkit.stt.v3.Alternative} returns this
*/
proto.speechkit.stt.v3.Alternative.prototype.setWordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.speechkit.stt.v3.Word=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.Word}
 */
proto.speechkit.stt.v3.Alternative.prototype.addWords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.speechkit.stt.v3.Word, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.Alternative} returns this
 */
proto.speechkit.stt.v3.Alternative.prototype.clearWordsList = function() {
  return this.setWordsList([]);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.speechkit.stt.v3.Alternative.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.Alternative} returns this
 */
proto.speechkit.stt.v3.Alternative.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 start_time_ms = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.Alternative.prototype.getStartTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.Alternative} returns this
 */
proto.speechkit.stt.v3.Alternative.prototype.setStartTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 end_time_ms = 4;
 * @return {number}
 */
proto.speechkit.stt.v3.Alternative.prototype.getEndTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.Alternative} returns this
 */
proto.speechkit.stt.v3.Alternative.prototype.setEndTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double confidence = 5;
 * @return {number}
 */
proto.speechkit.stt.v3.Alternative.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.Alternative} returns this
 */
proto.speechkit.stt.v3.Alternative.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * repeated LanguageEstimation languages = 6;
 * @return {!Array<!proto.speechkit.stt.v3.LanguageEstimation>}
 */
proto.speechkit.stt.v3.Alternative.prototype.getLanguagesList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.LanguageEstimation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.LanguageEstimation, 6));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.LanguageEstimation>} value
 * @return {!proto.speechkit.stt.v3.Alternative} returns this
*/
proto.speechkit.stt.v3.Alternative.prototype.setLanguagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.speechkit.stt.v3.LanguageEstimation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.LanguageEstimation}
 */
proto.speechkit.stt.v3.Alternative.prototype.addLanguages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.speechkit.stt.v3.LanguageEstimation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.Alternative} returns this
 */
proto.speechkit.stt.v3.Alternative.prototype.clearLanguagesList = function() {
  return this.setLanguagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.EouUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.EouUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.EouUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.EouUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeMs: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.EouUpdate}
 */
proto.speechkit.stt.v3.EouUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.EouUpdate;
  return proto.speechkit.stt.v3.EouUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.EouUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.EouUpdate}
 */
proto.speechkit.stt.v3.EouUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.EouUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.EouUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.EouUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.EouUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 time_ms = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.EouUpdate.prototype.getTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.EouUpdate} returns this
 */
proto.speechkit.stt.v3.EouUpdate.prototype.setTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.AlternativeUpdate.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.AlternativeUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.AlternativeUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.AlternativeUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AlternativeUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    alternativesList: jspb.Message.toObjectList(msg.getAlternativesList(),
    proto.speechkit.stt.v3.Alternative.toObject, includeInstance),
    channelTag: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.AlternativeUpdate}
 */
proto.speechkit.stt.v3.AlternativeUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.AlternativeUpdate;
  return proto.speechkit.stt.v3.AlternativeUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.AlternativeUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.AlternativeUpdate}
 */
proto.speechkit.stt.v3.AlternativeUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.Alternative;
      reader.readMessage(value,proto.speechkit.stt.v3.Alternative.deserializeBinaryFromReader);
      msg.addAlternatives(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.AlternativeUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.AlternativeUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.AlternativeUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AlternativeUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlternativesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.speechkit.stt.v3.Alternative.serializeBinaryToWriter
    );
  }
  f = message.getChannelTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Alternative alternatives = 1;
 * @return {!Array<!proto.speechkit.stt.v3.Alternative>}
 */
proto.speechkit.stt.v3.AlternativeUpdate.prototype.getAlternativesList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.Alternative>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.Alternative, 1));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.Alternative>} value
 * @return {!proto.speechkit.stt.v3.AlternativeUpdate} returns this
*/
proto.speechkit.stt.v3.AlternativeUpdate.prototype.setAlternativesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.speechkit.stt.v3.Alternative=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.Alternative}
 */
proto.speechkit.stt.v3.AlternativeUpdate.prototype.addAlternatives = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.speechkit.stt.v3.Alternative, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.AlternativeUpdate} returns this
 */
proto.speechkit.stt.v3.AlternativeUpdate.prototype.clearAlternativesList = function() {
  return this.setAlternativesList([]);
};


/**
 * optional string channel_tag = 2;
 * @return {string}
 */
proto.speechkit.stt.v3.AlternativeUpdate.prototype.getChannelTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.AlternativeUpdate} returns this
 */
proto.speechkit.stt.v3.AlternativeUpdate.prototype.setChannelTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.AudioCursors.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.AudioCursors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.AudioCursors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AudioCursors.toObject = function(includeInstance, msg) {
  var f, obj = {
    receivedDataMs: jspb.Message.getFieldWithDefault(msg, 1, 0),
    resetTimeMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    partialTimeMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    finalTimeMs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    finalIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    eouTimeMs: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.AudioCursors}
 */
proto.speechkit.stt.v3.AudioCursors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.AudioCursors;
  return proto.speechkit.stt.v3.AudioCursors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.AudioCursors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.AudioCursors}
 */
proto.speechkit.stt.v3.AudioCursors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceivedDataMs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResetTimeMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPartialTimeMs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFinalTimeMs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFinalIndex(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEouTimeMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.AudioCursors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.AudioCursors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.AudioCursors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AudioCursors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceivedDataMs();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getResetTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPartialTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFinalTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFinalIndex();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getEouTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 received_data_ms = 1;
 * @return {number}
 */
proto.speechkit.stt.v3.AudioCursors.prototype.getReceivedDataMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.AudioCursors} returns this
 */
proto.speechkit.stt.v3.AudioCursors.prototype.setReceivedDataMs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 reset_time_ms = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.AudioCursors.prototype.getResetTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.AudioCursors} returns this
 */
proto.speechkit.stt.v3.AudioCursors.prototype.setResetTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 partial_time_ms = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.AudioCursors.prototype.getPartialTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.AudioCursors} returns this
 */
proto.speechkit.stt.v3.AudioCursors.prototype.setPartialTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 final_time_ms = 4;
 * @return {number}
 */
proto.speechkit.stt.v3.AudioCursors.prototype.getFinalTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.AudioCursors} returns this
 */
proto.speechkit.stt.v3.AudioCursors.prototype.setFinalTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 final_index = 5;
 * @return {number}
 */
proto.speechkit.stt.v3.AudioCursors.prototype.getFinalIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.AudioCursors} returns this
 */
proto.speechkit.stt.v3.AudioCursors.prototype.setFinalIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 eou_time_ms = 6;
 * @return {number}
 */
proto.speechkit.stt.v3.AudioCursors.prototype.getEouTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.AudioCursors} returns this
 */
proto.speechkit.stt.v3.AudioCursors.prototype.setEouTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.speechkit.stt.v3.FinalRefinement.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.speechkit.stt.v3.FinalRefinement.TypeCase = {
  TYPE_NOT_SET: 0,
  NORMALIZED_TEXT: 2
};

/**
 * @return {proto.speechkit.stt.v3.FinalRefinement.TypeCase}
 */
proto.speechkit.stt.v3.FinalRefinement.prototype.getTypeCase = function() {
  return /** @type {proto.speechkit.stt.v3.FinalRefinement.TypeCase} */(jspb.Message.computeOneofCase(this, proto.speechkit.stt.v3.FinalRefinement.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.FinalRefinement.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.FinalRefinement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.FinalRefinement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.FinalRefinement.toObject = function(includeInstance, msg) {
  var f, obj = {
    finalIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    normalizedText: (f = msg.getNormalizedText()) && proto.speechkit.stt.v3.AlternativeUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.FinalRefinement}
 */
proto.speechkit.stt.v3.FinalRefinement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.FinalRefinement;
  return proto.speechkit.stt.v3.FinalRefinement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.FinalRefinement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.FinalRefinement}
 */
proto.speechkit.stt.v3.FinalRefinement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFinalIndex(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.AlternativeUpdate;
      reader.readMessage(value,proto.speechkit.stt.v3.AlternativeUpdate.deserializeBinaryFromReader);
      msg.setNormalizedText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.FinalRefinement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.FinalRefinement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.FinalRefinement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.FinalRefinement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFinalIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNormalizedText();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.speechkit.stt.v3.AlternativeUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 final_index = 1;
 * @return {number}
 */
proto.speechkit.stt.v3.FinalRefinement.prototype.getFinalIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.FinalRefinement} returns this
 */
proto.speechkit.stt.v3.FinalRefinement.prototype.setFinalIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional AlternativeUpdate normalized_text = 2;
 * @return {?proto.speechkit.stt.v3.AlternativeUpdate}
 */
proto.speechkit.stt.v3.FinalRefinement.prototype.getNormalizedText = function() {
  return /** @type{?proto.speechkit.stt.v3.AlternativeUpdate} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.AlternativeUpdate, 2));
};


/**
 * @param {?proto.speechkit.stt.v3.AlternativeUpdate|undefined} value
 * @return {!proto.speechkit.stt.v3.FinalRefinement} returns this
*/
proto.speechkit.stt.v3.FinalRefinement.prototype.setNormalizedText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.speechkit.stt.v3.FinalRefinement.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.FinalRefinement} returns this
 */
proto.speechkit.stt.v3.FinalRefinement.prototype.clearNormalizedText = function() {
  return this.setNormalizedText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.FinalRefinement.prototype.hasNormalizedText = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.StatusCode.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.StatusCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.StatusCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StatusCode.toObject = function(includeInstance, msg) {
  var f, obj = {
    codeType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.StatusCode}
 */
proto.speechkit.stt.v3.StatusCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.StatusCode;
  return proto.speechkit.stt.v3.StatusCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.StatusCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.StatusCode}
 */
proto.speechkit.stt.v3.StatusCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.speechkit.stt.v3.CodeType} */ (reader.readEnum());
      msg.setCodeType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.StatusCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.StatusCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.StatusCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StatusCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCodeType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional CodeType code_type = 1;
 * @return {!proto.speechkit.stt.v3.CodeType}
 */
proto.speechkit.stt.v3.StatusCode.prototype.getCodeType = function() {
  return /** @type {!proto.speechkit.stt.v3.CodeType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.CodeType} value
 * @return {!proto.speechkit.stt.v3.StatusCode} returns this
 */
proto.speechkit.stt.v3.StatusCode.prototype.setCodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.speechkit.stt.v3.StatusCode.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.StatusCode} returns this
 */
proto.speechkit.stt.v3.StatusCode.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.SessionUuid.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.SessionUuid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.SessionUuid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SessionUuid.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userRequestId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.SessionUuid}
 */
proto.speechkit.stt.v3.SessionUuid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.SessionUuid;
  return proto.speechkit.stt.v3.SessionUuid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.SessionUuid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.SessionUuid}
 */
proto.speechkit.stt.v3.SessionUuid.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserRequestId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.SessionUuid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.SessionUuid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.SessionUuid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SessionUuid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserRequestId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.SessionUuid.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.SessionUuid} returns this
 */
proto.speechkit.stt.v3.SessionUuid.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_request_id = 2;
 * @return {string}
 */
proto.speechkit.stt.v3.SessionUuid.prototype.getUserRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.SessionUuid} returns this
 */
proto.speechkit.stt.v3.SessionUuid.prototype.setUserRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.PhraseHighlight.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.PhraseHighlight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.PhraseHighlight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.PhraseHighlight.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startTimeMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endTimeMs: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.PhraseHighlight}
 */
proto.speechkit.stt.v3.PhraseHighlight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.PhraseHighlight;
  return proto.speechkit.stt.v3.PhraseHighlight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.PhraseHighlight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.PhraseHighlight}
 */
proto.speechkit.stt.v3.PhraseHighlight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTimeMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTimeMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.PhraseHighlight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.PhraseHighlight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.PhraseHighlight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.PhraseHighlight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEndTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.PhraseHighlight.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.PhraseHighlight} returns this
 */
proto.speechkit.stt.v3.PhraseHighlight.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 start_time_ms = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.PhraseHighlight.prototype.getStartTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.PhraseHighlight} returns this
 */
proto.speechkit.stt.v3.PhraseHighlight.prototype.setStartTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 end_time_ms = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.PhraseHighlight.prototype.getEndTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.PhraseHighlight} returns this
 */
proto.speechkit.stt.v3.PhraseHighlight.prototype.setEndTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.RecognitionClassifierLabel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierLabel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: jspb.Message.getFieldWithDefault(msg, 1, ""),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierLabel}
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.RecognitionClassifierLabel;
  return proto.speechkit.stt.v3.RecognitionClassifierLabel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierLabel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierLabel}
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConfidence(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.RecognitionClassifierLabel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierLabel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional string label = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierLabel} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double confidence = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierLabel} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierLabel.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.RecognitionClassifierResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    classifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    highlightsList: jspb.Message.toObjectList(msg.getHighlightsList(),
    proto.speechkit.stt.v3.PhraseHighlight.toObject, includeInstance),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    proto.speechkit.stt.v3.RecognitionClassifierLabel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierResult}
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.RecognitionClassifierResult;
  return proto.speechkit.stt.v3.RecognitionClassifierResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierResult}
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClassifier(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.PhraseHighlight;
      reader.readMessage(value,proto.speechkit.stt.v3.PhraseHighlight.deserializeBinaryFromReader);
      msg.addHighlights(value);
      break;
    case 3:
      var value = new proto.speechkit.stt.v3.RecognitionClassifierLabel;
      reader.readMessage(value,proto.speechkit.stt.v3.RecognitionClassifierLabel.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.RecognitionClassifierResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClassifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHighlightsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.speechkit.stt.v3.PhraseHighlight.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.speechkit.stt.v3.RecognitionClassifierLabel.serializeBinaryToWriter
    );
  }
};


/**
 * optional string classifier = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.getClassifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierResult} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.setClassifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PhraseHighlight highlights = 2;
 * @return {!Array<!proto.speechkit.stt.v3.PhraseHighlight>}
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.getHighlightsList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.PhraseHighlight>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.PhraseHighlight, 2));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.PhraseHighlight>} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierResult} returns this
*/
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.setHighlightsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.speechkit.stt.v3.PhraseHighlight=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.PhraseHighlight}
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.addHighlights = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.speechkit.stt.v3.PhraseHighlight, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierResult} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.clearHighlightsList = function() {
  return this.setHighlightsList([]);
};


/**
 * repeated RecognitionClassifierLabel labels = 3;
 * @return {!Array<!proto.speechkit.stt.v3.RecognitionClassifierLabel>}
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.RecognitionClassifierLabel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.RecognitionClassifierLabel, 3));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.RecognitionClassifierLabel>} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierResult} returns this
*/
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierLabel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierLabel}
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.speechkit.stt.v3.RecognitionClassifierLabel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierResult} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierResult.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.RecognitionClassifierUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startTimeMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endTimeMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    classifierResult: (f = msg.getClassifierResult()) && proto.speechkit.stt.v3.RecognitionClassifierResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierUpdate}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.RecognitionClassifierUpdate;
  return proto.speechkit.stt.v3.RecognitionClassifierUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierUpdate}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.speechkit.stt.v3.RecognitionClassifierUpdate.WindowType} */ (reader.readEnum());
      msg.setWindowType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTimeMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTimeMs(value);
      break;
    case 4:
      var value = new proto.speechkit.stt.v3.RecognitionClassifierResult;
      reader.readMessage(value,proto.speechkit.stt.v3.RecognitionClassifierResult.deserializeBinaryFromReader);
      msg.setClassifierResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.RecognitionClassifierUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStartTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEndTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getClassifierResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.speechkit.stt.v3.RecognitionClassifierResult.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.WindowType = {
  WINDOW_TYPE_UNSPECIFIED: 0,
  LAST_UTTERANCE: 1,
  LAST_FINAL: 2,
  LAST_PARTIAL: 3
};

/**
 * optional WindowType window_type = 1;
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierUpdate.WindowType}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.getWindowType = function() {
  return /** @type {!proto.speechkit.stt.v3.RecognitionClassifierUpdate.WindowType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.RecognitionClassifierUpdate.WindowType} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierUpdate} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.setWindowType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 start_time_ms = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.getStartTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierUpdate} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.setStartTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 end_time_ms = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.getEndTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierUpdate} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.setEndTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional RecognitionClassifierResult classifier_result = 4;
 * @return {?proto.speechkit.stt.v3.RecognitionClassifierResult}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.getClassifierResult = function() {
  return /** @type{?proto.speechkit.stt.v3.RecognitionClassifierResult} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.RecognitionClassifierResult, 4));
};


/**
 * @param {?proto.speechkit.stt.v3.RecognitionClassifierResult|undefined} value
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierUpdate} returns this
*/
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.setClassifierResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.RecognitionClassifierUpdate} returns this
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.clearClassifierResult = function() {
  return this.setClassifierResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.RecognitionClassifierUpdate.prototype.hasClassifierResult = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.DescriptiveStatistics.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.DescriptiveStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.DescriptiveStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.DescriptiveStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    min: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    max: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    mean: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    std: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    quantilesList: jspb.Message.toObjectList(msg.getQuantilesList(),
    proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.DescriptiveStatistics;
  return proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.DescriptiveStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMean(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStd(value);
      break;
    case 5:
      var value = new proto.speechkit.stt.v3.DescriptiveStatistics.Quantile;
      reader.readMessage(value,proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.deserializeBinaryFromReader);
      msg.addQuantiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.DescriptiveStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.DescriptiveStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.DescriptiveStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMin();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMax();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMean();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getStd();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getQuantilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.DescriptiveStatistics.Quantile;
  return proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double level = 1;
 * @return {number}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile} returns this
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.prototype.setLevel = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile} returns this
 */
proto.speechkit.stt.v3.DescriptiveStatistics.Quantile.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double min = 1;
 * @return {number}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics} returns this
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.setMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double max = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics} returns this
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.setMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double mean = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.getMean = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics} returns this
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.setMean = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double std = 4;
 * @return {number}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.getStd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics} returns this
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.setStd = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated Quantile quantiles = 5;
 * @return {!Array<!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile>}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.getQuantilesList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.DescriptiveStatistics.Quantile, 5));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile>} value
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics} returns this
*/
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.setQuantilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics.Quantile}
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.addQuantiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.speechkit.stt.v3.DescriptiveStatistics.Quantile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.DescriptiveStatistics} returns this
 */
proto.speechkit.stt.v3.DescriptiveStatistics.prototype.clearQuantilesList = function() {
  return this.setQuantilesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.AudioSegmentBoundaries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.AudioSegmentBoundaries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTimeMs: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endTimeMs: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.AudioSegmentBoundaries}
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.AudioSegmentBoundaries;
  return proto.speechkit.stt.v3.AudioSegmentBoundaries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.AudioSegmentBoundaries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.AudioSegmentBoundaries}
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTimeMs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTimeMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.AudioSegmentBoundaries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.AudioSegmentBoundaries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEndTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 start_time_ms = 1;
 * @return {number}
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.prototype.getStartTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.AudioSegmentBoundaries} returns this
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.prototype.setStartTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 end_time_ms = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.prototype.getEndTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.AudioSegmentBoundaries} returns this
 */
proto.speechkit.stt.v3.AudioSegmentBoundaries.prototype.setEndTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.SpeakerAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.SpeakerAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SpeakerAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    speakerTag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    windowType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    speechBoundaries: (f = msg.getSpeechBoundaries()) && proto.speechkit.stt.v3.AudioSegmentBoundaries.toObject(includeInstance, f),
    totalSpeechMs: jspb.Message.getFieldWithDefault(msg, 4, 0),
    speechRatio: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    totalSilenceMs: jspb.Message.getFieldWithDefault(msg, 6, 0),
    silenceRatio: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    wordsCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    lettersCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    wordsPerSecond: (f = msg.getWordsPerSecond()) && proto.speechkit.stt.v3.DescriptiveStatistics.toObject(includeInstance, f),
    lettersPerSecond: (f = msg.getLettersPerSecond()) && proto.speechkit.stt.v3.DescriptiveStatistics.toObject(includeInstance, f),
    wordsPerUtterance: (f = msg.getWordsPerUtterance()) && proto.speechkit.stt.v3.DescriptiveStatistics.toObject(includeInstance, f),
    lettersPerUtterance: (f = msg.getLettersPerUtterance()) && proto.speechkit.stt.v3.DescriptiveStatistics.toObject(includeInstance, f),
    utteranceCount: jspb.Message.getFieldWithDefault(msg, 14, 0),
    utteranceDurationEstimation: (f = msg.getUtteranceDurationEstimation()) && proto.speechkit.stt.v3.DescriptiveStatistics.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.SpeakerAnalysis;
  return proto.speechkit.stt.v3.SpeakerAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.SpeakerAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpeakerTag(value);
      break;
    case 2:
      var value = /** @type {!proto.speechkit.stt.v3.SpeakerAnalysis.WindowType} */ (reader.readEnum());
      msg.setWindowType(value);
      break;
    case 3:
      var value = new proto.speechkit.stt.v3.AudioSegmentBoundaries;
      reader.readMessage(value,proto.speechkit.stt.v3.AudioSegmentBoundaries.deserializeBinaryFromReader);
      msg.setSpeechBoundaries(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSpeechMs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpeechRatio(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSilenceMs(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSilenceRatio(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWordsCount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLettersCount(value);
      break;
    case 10:
      var value = new proto.speechkit.stt.v3.DescriptiveStatistics;
      reader.readMessage(value,proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinaryFromReader);
      msg.setWordsPerSecond(value);
      break;
    case 11:
      var value = new proto.speechkit.stt.v3.DescriptiveStatistics;
      reader.readMessage(value,proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinaryFromReader);
      msg.setLettersPerSecond(value);
      break;
    case 12:
      var value = new proto.speechkit.stt.v3.DescriptiveStatistics;
      reader.readMessage(value,proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinaryFromReader);
      msg.setWordsPerUtterance(value);
      break;
    case 13:
      var value = new proto.speechkit.stt.v3.DescriptiveStatistics;
      reader.readMessage(value,proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinaryFromReader);
      msg.setLettersPerUtterance(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUtteranceCount(value);
      break;
    case 15:
      var value = new proto.speechkit.stt.v3.DescriptiveStatistics;
      reader.readMessage(value,proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinaryFromReader);
      msg.setUtteranceDurationEstimation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.SpeakerAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.SpeakerAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.SpeakerAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeakerTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWindowType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSpeechBoundaries();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.speechkit.stt.v3.AudioSegmentBoundaries.serializeBinaryToWriter
    );
  }
  f = message.getTotalSpeechMs();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSpeechRatio();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getTotalSilenceMs();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSilenceRatio();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getWordsCount();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getLettersCount();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getWordsPerSecond();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.speechkit.stt.v3.DescriptiveStatistics.serializeBinaryToWriter
    );
  }
  f = message.getLettersPerSecond();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.speechkit.stt.v3.DescriptiveStatistics.serializeBinaryToWriter
    );
  }
  f = message.getWordsPerUtterance();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.speechkit.stt.v3.DescriptiveStatistics.serializeBinaryToWriter
    );
  }
  f = message.getLettersPerUtterance();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.speechkit.stt.v3.DescriptiveStatistics.serializeBinaryToWriter
    );
  }
  f = message.getUtteranceCount();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getUtteranceDurationEstimation();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.speechkit.stt.v3.DescriptiveStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.WindowType = {
  WINDOW_TYPE_UNSPECIFIED: 0,
  TOTAL: 1,
  LAST_UTTERANCE: 2
};

/**
 * optional string speaker_tag = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getSpeakerTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setSpeakerTag = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional WindowType window_type = 2;
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis.WindowType}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getWindowType = function() {
  return /** @type {!proto.speechkit.stt.v3.SpeakerAnalysis.WindowType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.speechkit.stt.v3.SpeakerAnalysis.WindowType} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setWindowType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional AudioSegmentBoundaries speech_boundaries = 3;
 * @return {?proto.speechkit.stt.v3.AudioSegmentBoundaries}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getSpeechBoundaries = function() {
  return /** @type{?proto.speechkit.stt.v3.AudioSegmentBoundaries} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.AudioSegmentBoundaries, 3));
};


/**
 * @param {?proto.speechkit.stt.v3.AudioSegmentBoundaries|undefined} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
*/
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setSpeechBoundaries = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.clearSpeechBoundaries = function() {
  return this.setSpeechBoundaries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.hasSpeechBoundaries = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 total_speech_ms = 4;
 * @return {number}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getTotalSpeechMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setTotalSpeechMs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double speech_ratio = 5;
 * @return {number}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getSpeechRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setSpeechRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int64 total_silence_ms = 6;
 * @return {number}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getTotalSilenceMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setTotalSilenceMs = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double silence_ratio = 7;
 * @return {number}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getSilenceRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setSilenceRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int64 words_count = 8;
 * @return {number}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getWordsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setWordsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 letters_count = 9;
 * @return {number}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getLettersCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setLettersCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional DescriptiveStatistics words_per_second = 10;
 * @return {?proto.speechkit.stt.v3.DescriptiveStatistics}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getWordsPerSecond = function() {
  return /** @type{?proto.speechkit.stt.v3.DescriptiveStatistics} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.DescriptiveStatistics, 10));
};


/**
 * @param {?proto.speechkit.stt.v3.DescriptiveStatistics|undefined} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
*/
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setWordsPerSecond = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.clearWordsPerSecond = function() {
  return this.setWordsPerSecond(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.hasWordsPerSecond = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional DescriptiveStatistics letters_per_second = 11;
 * @return {?proto.speechkit.stt.v3.DescriptiveStatistics}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getLettersPerSecond = function() {
  return /** @type{?proto.speechkit.stt.v3.DescriptiveStatistics} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.DescriptiveStatistics, 11));
};


/**
 * @param {?proto.speechkit.stt.v3.DescriptiveStatistics|undefined} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
*/
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setLettersPerSecond = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.clearLettersPerSecond = function() {
  return this.setLettersPerSecond(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.hasLettersPerSecond = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DescriptiveStatistics words_per_utterance = 12;
 * @return {?proto.speechkit.stt.v3.DescriptiveStatistics}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getWordsPerUtterance = function() {
  return /** @type{?proto.speechkit.stt.v3.DescriptiveStatistics} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.DescriptiveStatistics, 12));
};


/**
 * @param {?proto.speechkit.stt.v3.DescriptiveStatistics|undefined} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
*/
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setWordsPerUtterance = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.clearWordsPerUtterance = function() {
  return this.setWordsPerUtterance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.hasWordsPerUtterance = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional DescriptiveStatistics letters_per_utterance = 13;
 * @return {?proto.speechkit.stt.v3.DescriptiveStatistics}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getLettersPerUtterance = function() {
  return /** @type{?proto.speechkit.stt.v3.DescriptiveStatistics} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.DescriptiveStatistics, 13));
};


/**
 * @param {?proto.speechkit.stt.v3.DescriptiveStatistics|undefined} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
*/
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setLettersPerUtterance = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.clearLettersPerUtterance = function() {
  return this.setLettersPerUtterance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.hasLettersPerUtterance = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int64 utterance_count = 14;
 * @return {number}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getUtteranceCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setUtteranceCount = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional DescriptiveStatistics utterance_duration_estimation = 15;
 * @return {?proto.speechkit.stt.v3.DescriptiveStatistics}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.getUtteranceDurationEstimation = function() {
  return /** @type{?proto.speechkit.stt.v3.DescriptiveStatistics} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.DescriptiveStatistics, 15));
};


/**
 * @param {?proto.speechkit.stt.v3.DescriptiveStatistics|undefined} value
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
*/
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.setUtteranceDurationEstimation = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.SpeakerAnalysis} returns this
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.clearUtteranceDurationEstimation = function() {
  return this.setUtteranceDurationEstimation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.SpeakerAnalysis.prototype.hasUtteranceDurationEstimation = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.ConversationAnalysis.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.ConversationAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.ConversationAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ConversationAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationBoundaries: (f = msg.getConversationBoundaries()) && proto.speechkit.stt.v3.AudioSegmentBoundaries.toObject(includeInstance, f),
    totalSimultaneousSilenceDurationMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalSimultaneousSilenceRatio: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    simultaneousSilenceDurationEstimation: (f = msg.getSimultaneousSilenceDurationEstimation()) && proto.speechkit.stt.v3.DescriptiveStatistics.toObject(includeInstance, f),
    totalSimultaneousSpeechDurationMs: jspb.Message.getFieldWithDefault(msg, 5, 0),
    totalSimultaneousSpeechRatio: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    simultaneousSpeechDurationEstimation: (f = msg.getSimultaneousSpeechDurationEstimation()) && proto.speechkit.stt.v3.DescriptiveStatistics.toObject(includeInstance, f),
    speakerInterruptsList: jspb.Message.toObjectList(msg.getSpeakerInterruptsList(),
    proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.toObject, includeInstance),
    totalSpeechDurationMs: jspb.Message.getFieldWithDefault(msg, 9, 0),
    totalSpeechRatio: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis}
 */
proto.speechkit.stt.v3.ConversationAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.ConversationAnalysis;
  return proto.speechkit.stt.v3.ConversationAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.ConversationAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis}
 */
proto.speechkit.stt.v3.ConversationAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.AudioSegmentBoundaries;
      reader.readMessage(value,proto.speechkit.stt.v3.AudioSegmentBoundaries.deserializeBinaryFromReader);
      msg.setConversationBoundaries(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSimultaneousSilenceDurationMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalSimultaneousSilenceRatio(value);
      break;
    case 4:
      var value = new proto.speechkit.stt.v3.DescriptiveStatistics;
      reader.readMessage(value,proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinaryFromReader);
      msg.setSimultaneousSilenceDurationEstimation(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSimultaneousSpeechDurationMs(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalSimultaneousSpeechRatio(value);
      break;
    case 7:
      var value = new proto.speechkit.stt.v3.DescriptiveStatistics;
      reader.readMessage(value,proto.speechkit.stt.v3.DescriptiveStatistics.deserializeBinaryFromReader);
      msg.setSimultaneousSpeechDurationEstimation(value);
      break;
    case 8:
      var value = new proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation;
      reader.readMessage(value,proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.deserializeBinaryFromReader);
      msg.addSpeakerInterrupts(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalSpeechDurationMs(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalSpeechRatio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.ConversationAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.ConversationAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ConversationAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationBoundaries();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.speechkit.stt.v3.AudioSegmentBoundaries.serializeBinaryToWriter
    );
  }
  f = message.getTotalSimultaneousSilenceDurationMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTotalSimultaneousSilenceRatio();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSimultaneousSilenceDurationEstimation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.speechkit.stt.v3.DescriptiveStatistics.serializeBinaryToWriter
    );
  }
  f = message.getTotalSimultaneousSpeechDurationMs();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTotalSimultaneousSpeechRatio();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getSimultaneousSpeechDurationEstimation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.speechkit.stt.v3.DescriptiveStatistics.serializeBinaryToWriter
    );
  }
  f = message.getSpeakerInterruptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.serializeBinaryToWriter
    );
  }
  f = message.getTotalSpeechDurationMs();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getTotalSpeechRatio();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.toObject = function(includeInstance, msg) {
  var f, obj = {
    speakerTag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interruptsCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    interruptsDurationMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    interruptsList: jspb.Message.toObjectList(msg.getInterruptsList(),
    proto.speechkit.stt.v3.AudioSegmentBoundaries.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation}
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation;
  return proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation}
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpeakerTag(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInterruptsCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInterruptsDurationMs(value);
      break;
    case 4:
      var value = new proto.speechkit.stt.v3.AudioSegmentBoundaries;
      reader.readMessage(value,proto.speechkit.stt.v3.AudioSegmentBoundaries.deserializeBinaryFromReader);
      msg.addInterrupts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeakerTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterruptsCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getInterruptsDurationMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getInterruptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.speechkit.stt.v3.AudioSegmentBoundaries.serializeBinaryToWriter
    );
  }
};


/**
 * optional string speaker_tag = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.getSpeakerTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.setSpeakerTag = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 interrupts_count = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.getInterruptsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.setInterruptsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 interrupts_duration_ms = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.getInterruptsDurationMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.setInterruptsDurationMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated AudioSegmentBoundaries interrupts = 4;
 * @return {!Array<!proto.speechkit.stt.v3.AudioSegmentBoundaries>}
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.getInterruptsList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.AudioSegmentBoundaries>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.AudioSegmentBoundaries, 4));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.AudioSegmentBoundaries>} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation} returns this
*/
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.setInterruptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.speechkit.stt.v3.AudioSegmentBoundaries=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.AudioSegmentBoundaries}
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.addInterrupts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.speechkit.stt.v3.AudioSegmentBoundaries, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation.prototype.clearInterruptsList = function() {
  return this.setInterruptsList([]);
};


/**
 * optional AudioSegmentBoundaries conversation_boundaries = 1;
 * @return {?proto.speechkit.stt.v3.AudioSegmentBoundaries}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getConversationBoundaries = function() {
  return /** @type{?proto.speechkit.stt.v3.AudioSegmentBoundaries} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.AudioSegmentBoundaries, 1));
};


/**
 * @param {?proto.speechkit.stt.v3.AudioSegmentBoundaries|undefined} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
*/
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setConversationBoundaries = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.clearConversationBoundaries = function() {
  return this.setConversationBoundaries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.hasConversationBoundaries = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 total_simultaneous_silence_duration_ms = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getTotalSimultaneousSilenceDurationMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setTotalSimultaneousSilenceDurationMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double total_simultaneous_silence_ratio = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getTotalSimultaneousSilenceRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setTotalSimultaneousSilenceRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional DescriptiveStatistics simultaneous_silence_duration_estimation = 4;
 * @return {?proto.speechkit.stt.v3.DescriptiveStatistics}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getSimultaneousSilenceDurationEstimation = function() {
  return /** @type{?proto.speechkit.stt.v3.DescriptiveStatistics} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.DescriptiveStatistics, 4));
};


/**
 * @param {?proto.speechkit.stt.v3.DescriptiveStatistics|undefined} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
*/
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setSimultaneousSilenceDurationEstimation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.clearSimultaneousSilenceDurationEstimation = function() {
  return this.setSimultaneousSilenceDurationEstimation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.hasSimultaneousSilenceDurationEstimation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 total_simultaneous_speech_duration_ms = 5;
 * @return {number}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getTotalSimultaneousSpeechDurationMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setTotalSimultaneousSpeechDurationMs = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double total_simultaneous_speech_ratio = 6;
 * @return {number}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getTotalSimultaneousSpeechRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setTotalSimultaneousSpeechRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional DescriptiveStatistics simultaneous_speech_duration_estimation = 7;
 * @return {?proto.speechkit.stt.v3.DescriptiveStatistics}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getSimultaneousSpeechDurationEstimation = function() {
  return /** @type{?proto.speechkit.stt.v3.DescriptiveStatistics} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.DescriptiveStatistics, 7));
};


/**
 * @param {?proto.speechkit.stt.v3.DescriptiveStatistics|undefined} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
*/
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setSimultaneousSpeechDurationEstimation = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.clearSimultaneousSpeechDurationEstimation = function() {
  return this.setSimultaneousSpeechDurationEstimation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.hasSimultaneousSpeechDurationEstimation = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated InterruptsEvaluation speaker_interrupts = 8;
 * @return {!Array<!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation>}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getSpeakerInterruptsList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation, 8));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation>} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
*/
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setSpeakerInterruptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.addSpeakerInterrupts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.speechkit.stt.v3.ConversationAnalysis.InterruptsEvaluation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.clearSpeakerInterruptsList = function() {
  return this.setSpeakerInterruptsList([]);
};


/**
 * optional int64 total_speech_duration_ms = 9;
 * @return {number}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getTotalSpeechDurationMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setTotalSpeechDurationMs = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional double total_speech_ratio = 10;
 * @return {number}
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.getTotalSpeechRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ConversationAnalysis} returns this
 */
proto.speechkit.stt.v3.ConversationAnalysis.prototype.setTotalSpeechRatio = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.ContentUsage.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.ContentUsage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.ContentUsage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ContentUsage.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputTextTokens: jspb.Message.getFieldWithDefault(msg, 1, 0),
    completionTokens: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalTokens: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.ContentUsage}
 */
proto.speechkit.stt.v3.ContentUsage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.ContentUsage;
  return proto.speechkit.stt.v3.ContentUsage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.ContentUsage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.ContentUsage}
 */
proto.speechkit.stt.v3.ContentUsage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInputTextTokens(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCompletionTokens(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalTokens(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.ContentUsage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.ContentUsage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.ContentUsage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.ContentUsage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputTextTokens();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCompletionTokens();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTotalTokens();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 input_text_tokens = 1;
 * @return {number}
 */
proto.speechkit.stt.v3.ContentUsage.prototype.getInputTextTokens = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ContentUsage} returns this
 */
proto.speechkit.stt.v3.ContentUsage.prototype.setInputTextTokens = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 completion_tokens = 2;
 * @return {number}
 */
proto.speechkit.stt.v3.ContentUsage.prototype.getCompletionTokens = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ContentUsage} returns this
 */
proto.speechkit.stt.v3.ContentUsage.prototype.setCompletionTokens = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total_tokens = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.ContentUsage.prototype.getTotalTokens = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.ContentUsage} returns this
 */
proto.speechkit.stt.v3.ContentUsage.prototype.setTotalTokens = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.Summarization.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.Summarization.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.Summarization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.Summarization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Summarization.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.speechkit.stt.v3.SummarizationPropertyResult.toObject, includeInstance),
    contentUsage: (f = msg.getContentUsage()) && proto.speechkit.stt.v3.ContentUsage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.Summarization}
 */
proto.speechkit.stt.v3.Summarization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.Summarization;
  return proto.speechkit.stt.v3.Summarization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.Summarization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.Summarization}
 */
proto.speechkit.stt.v3.Summarization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.SummarizationPropertyResult;
      reader.readMessage(value,proto.speechkit.stt.v3.SummarizationPropertyResult.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.ContentUsage;
      reader.readMessage(value,proto.speechkit.stt.v3.ContentUsage.deserializeBinaryFromReader);
      msg.setContentUsage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.Summarization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.Summarization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.Summarization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.Summarization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.speechkit.stt.v3.SummarizationPropertyResult.serializeBinaryToWriter
    );
  }
  f = message.getContentUsage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.speechkit.stt.v3.ContentUsage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SummarizationPropertyResult results = 1;
 * @return {!Array<!proto.speechkit.stt.v3.SummarizationPropertyResult>}
 */
proto.speechkit.stt.v3.Summarization.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.SummarizationPropertyResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.SummarizationPropertyResult, 1));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.SummarizationPropertyResult>} value
 * @return {!proto.speechkit.stt.v3.Summarization} returns this
*/
proto.speechkit.stt.v3.Summarization.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.speechkit.stt.v3.SummarizationPropertyResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.SummarizationPropertyResult}
 */
proto.speechkit.stt.v3.Summarization.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.speechkit.stt.v3.SummarizationPropertyResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.Summarization} returns this
 */
proto.speechkit.stt.v3.Summarization.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional ContentUsage content_usage = 2;
 * @return {?proto.speechkit.stt.v3.ContentUsage}
 */
proto.speechkit.stt.v3.Summarization.prototype.getContentUsage = function() {
  return /** @type{?proto.speechkit.stt.v3.ContentUsage} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.ContentUsage, 2));
};


/**
 * @param {?proto.speechkit.stt.v3.ContentUsage|undefined} value
 * @return {!proto.speechkit.stt.v3.Summarization} returns this
*/
proto.speechkit.stt.v3.Summarization.prototype.setContentUsage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.Summarization} returns this
 */
proto.speechkit.stt.v3.Summarization.prototype.clearContentUsage = function() {
  return this.setContentUsage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.Summarization.prototype.hasContentUsage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.speechkit.stt.v3.StreamingResponse.oneofGroups_ = [[4,5,6,7,8,10,11,12,13]];

/**
 * @enum {number}
 */
proto.speechkit.stt.v3.StreamingResponse.EventCase = {
  EVENT_NOT_SET: 0,
  PARTIAL: 4,
  FINAL: 5,
  EOU_UPDATE: 6,
  FINAL_REFINEMENT: 7,
  STATUS_CODE: 8,
  CLASSIFIER_UPDATE: 10,
  SPEAKER_ANALYSIS: 11,
  CONVERSATION_ANALYSIS: 12,
  SUMMARIZATION: 13
};

/**
 * @return {proto.speechkit.stt.v3.StreamingResponse.EventCase}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getEventCase = function() {
  return /** @type {proto.speechkit.stt.v3.StreamingResponse.EventCase} */(jspb.Message.computeOneofCase(this, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.StreamingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.StreamingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StreamingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionUuid: (f = msg.getSessionUuid()) && proto.speechkit.stt.v3.SessionUuid.toObject(includeInstance, f),
    audioCursors: (f = msg.getAudioCursors()) && proto.speechkit.stt.v3.AudioCursors.toObject(includeInstance, f),
    responseWallTimeMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    partial: (f = msg.getPartial()) && proto.speechkit.stt.v3.AlternativeUpdate.toObject(includeInstance, f),
    pb_final: (f = msg.getFinal()) && proto.speechkit.stt.v3.AlternativeUpdate.toObject(includeInstance, f),
    eouUpdate: (f = msg.getEouUpdate()) && proto.speechkit.stt.v3.EouUpdate.toObject(includeInstance, f),
    finalRefinement: (f = msg.getFinalRefinement()) && proto.speechkit.stt.v3.FinalRefinement.toObject(includeInstance, f),
    statusCode: (f = msg.getStatusCode()) && proto.speechkit.stt.v3.StatusCode.toObject(includeInstance, f),
    classifierUpdate: (f = msg.getClassifierUpdate()) && proto.speechkit.stt.v3.RecognitionClassifierUpdate.toObject(includeInstance, f),
    speakerAnalysis: (f = msg.getSpeakerAnalysis()) && proto.speechkit.stt.v3.SpeakerAnalysis.toObject(includeInstance, f),
    conversationAnalysis: (f = msg.getConversationAnalysis()) && proto.speechkit.stt.v3.ConversationAnalysis.toObject(includeInstance, f),
    summarization: (f = msg.getSummarization()) && proto.speechkit.stt.v3.Summarization.toObject(includeInstance, f),
    channelTag: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.StreamingResponse}
 */
proto.speechkit.stt.v3.StreamingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.StreamingResponse;
  return proto.speechkit.stt.v3.StreamingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.StreamingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.StreamingResponse}
 */
proto.speechkit.stt.v3.StreamingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.SessionUuid;
      reader.readMessage(value,proto.speechkit.stt.v3.SessionUuid.deserializeBinaryFromReader);
      msg.setSessionUuid(value);
      break;
    case 2:
      var value = new proto.speechkit.stt.v3.AudioCursors;
      reader.readMessage(value,proto.speechkit.stt.v3.AudioCursors.deserializeBinaryFromReader);
      msg.setAudioCursors(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setResponseWallTimeMs(value);
      break;
    case 4:
      var value = new proto.speechkit.stt.v3.AlternativeUpdate;
      reader.readMessage(value,proto.speechkit.stt.v3.AlternativeUpdate.deserializeBinaryFromReader);
      msg.setPartial(value);
      break;
    case 5:
      var value = new proto.speechkit.stt.v3.AlternativeUpdate;
      reader.readMessage(value,proto.speechkit.stt.v3.AlternativeUpdate.deserializeBinaryFromReader);
      msg.setFinal(value);
      break;
    case 6:
      var value = new proto.speechkit.stt.v3.EouUpdate;
      reader.readMessage(value,proto.speechkit.stt.v3.EouUpdate.deserializeBinaryFromReader);
      msg.setEouUpdate(value);
      break;
    case 7:
      var value = new proto.speechkit.stt.v3.FinalRefinement;
      reader.readMessage(value,proto.speechkit.stt.v3.FinalRefinement.deserializeBinaryFromReader);
      msg.setFinalRefinement(value);
      break;
    case 8:
      var value = new proto.speechkit.stt.v3.StatusCode;
      reader.readMessage(value,proto.speechkit.stt.v3.StatusCode.deserializeBinaryFromReader);
      msg.setStatusCode(value);
      break;
    case 10:
      var value = new proto.speechkit.stt.v3.RecognitionClassifierUpdate;
      reader.readMessage(value,proto.speechkit.stt.v3.RecognitionClassifierUpdate.deserializeBinaryFromReader);
      msg.setClassifierUpdate(value);
      break;
    case 11:
      var value = new proto.speechkit.stt.v3.SpeakerAnalysis;
      reader.readMessage(value,proto.speechkit.stt.v3.SpeakerAnalysis.deserializeBinaryFromReader);
      msg.setSpeakerAnalysis(value);
      break;
    case 12:
      var value = new proto.speechkit.stt.v3.ConversationAnalysis;
      reader.readMessage(value,proto.speechkit.stt.v3.ConversationAnalysis.deserializeBinaryFromReader);
      msg.setConversationAnalysis(value);
      break;
    case 13:
      var value = new proto.speechkit.stt.v3.Summarization;
      reader.readMessage(value,proto.speechkit.stt.v3.Summarization.deserializeBinaryFromReader);
      msg.setSummarization(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.StreamingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.StreamingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StreamingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.speechkit.stt.v3.SessionUuid.serializeBinaryToWriter
    );
  }
  f = message.getAudioCursors();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.speechkit.stt.v3.AudioCursors.serializeBinaryToWriter
    );
  }
  f = message.getResponseWallTimeMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPartial();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.speechkit.stt.v3.AlternativeUpdate.serializeBinaryToWriter
    );
  }
  f = message.getFinal();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.speechkit.stt.v3.AlternativeUpdate.serializeBinaryToWriter
    );
  }
  f = message.getEouUpdate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.speechkit.stt.v3.EouUpdate.serializeBinaryToWriter
    );
  }
  f = message.getFinalRefinement();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.speechkit.stt.v3.FinalRefinement.serializeBinaryToWriter
    );
  }
  f = message.getStatusCode();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.speechkit.stt.v3.StatusCode.serializeBinaryToWriter
    );
  }
  f = message.getClassifierUpdate();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.speechkit.stt.v3.RecognitionClassifierUpdate.serializeBinaryToWriter
    );
  }
  f = message.getSpeakerAnalysis();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.speechkit.stt.v3.SpeakerAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getConversationAnalysis();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.speechkit.stt.v3.ConversationAnalysis.serializeBinaryToWriter
    );
  }
  f = message.getSummarization();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.speechkit.stt.v3.Summarization.serializeBinaryToWriter
    );
  }
  f = message.getChannelTag();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional SessionUuid session_uuid = 1;
 * @return {?proto.speechkit.stt.v3.SessionUuid}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getSessionUuid = function() {
  return /** @type{?proto.speechkit.stt.v3.SessionUuid} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.SessionUuid, 1));
};


/**
 * @param {?proto.speechkit.stt.v3.SessionUuid|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setSessionUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearSessionUuid = function() {
  return this.setSessionUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasSessionUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AudioCursors audio_cursors = 2;
 * @return {?proto.speechkit.stt.v3.AudioCursors}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getAudioCursors = function() {
  return /** @type{?proto.speechkit.stt.v3.AudioCursors} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.AudioCursors, 2));
};


/**
 * @param {?proto.speechkit.stt.v3.AudioCursors|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setAudioCursors = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearAudioCursors = function() {
  return this.setAudioCursors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasAudioCursors = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 response_wall_time_ms = 3;
 * @return {number}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getResponseWallTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.setResponseWallTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional AlternativeUpdate partial = 4;
 * @return {?proto.speechkit.stt.v3.AlternativeUpdate}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getPartial = function() {
  return /** @type{?proto.speechkit.stt.v3.AlternativeUpdate} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.AlternativeUpdate, 4));
};


/**
 * @param {?proto.speechkit.stt.v3.AlternativeUpdate|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setPartial = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearPartial = function() {
  return this.setPartial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasPartial = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AlternativeUpdate final = 5;
 * @return {?proto.speechkit.stt.v3.AlternativeUpdate}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getFinal = function() {
  return /** @type{?proto.speechkit.stt.v3.AlternativeUpdate} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.AlternativeUpdate, 5));
};


/**
 * @param {?proto.speechkit.stt.v3.AlternativeUpdate|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearFinal = function() {
  return this.setFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasFinal = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional EouUpdate eou_update = 6;
 * @return {?proto.speechkit.stt.v3.EouUpdate}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getEouUpdate = function() {
  return /** @type{?proto.speechkit.stt.v3.EouUpdate} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.EouUpdate, 6));
};


/**
 * @param {?proto.speechkit.stt.v3.EouUpdate|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setEouUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearEouUpdate = function() {
  return this.setEouUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasEouUpdate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional FinalRefinement final_refinement = 7;
 * @return {?proto.speechkit.stt.v3.FinalRefinement}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getFinalRefinement = function() {
  return /** @type{?proto.speechkit.stt.v3.FinalRefinement} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.FinalRefinement, 7));
};


/**
 * @param {?proto.speechkit.stt.v3.FinalRefinement|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setFinalRefinement = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearFinalRefinement = function() {
  return this.setFinalRefinement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasFinalRefinement = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional StatusCode status_code = 8;
 * @return {?proto.speechkit.stt.v3.StatusCode}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getStatusCode = function() {
  return /** @type{?proto.speechkit.stt.v3.StatusCode} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.StatusCode, 8));
};


/**
 * @param {?proto.speechkit.stt.v3.StatusCode|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setStatusCode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearStatusCode = function() {
  return this.setStatusCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasStatusCode = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RecognitionClassifierUpdate classifier_update = 10;
 * @return {?proto.speechkit.stt.v3.RecognitionClassifierUpdate}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getClassifierUpdate = function() {
  return /** @type{?proto.speechkit.stt.v3.RecognitionClassifierUpdate} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.RecognitionClassifierUpdate, 10));
};


/**
 * @param {?proto.speechkit.stt.v3.RecognitionClassifierUpdate|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setClassifierUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearClassifierUpdate = function() {
  return this.setClassifierUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasClassifierUpdate = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional SpeakerAnalysis speaker_analysis = 11;
 * @return {?proto.speechkit.stt.v3.SpeakerAnalysis}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getSpeakerAnalysis = function() {
  return /** @type{?proto.speechkit.stt.v3.SpeakerAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.SpeakerAnalysis, 11));
};


/**
 * @param {?proto.speechkit.stt.v3.SpeakerAnalysis|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setSpeakerAnalysis = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearSpeakerAnalysis = function() {
  return this.setSpeakerAnalysis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasSpeakerAnalysis = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ConversationAnalysis conversation_analysis = 12;
 * @return {?proto.speechkit.stt.v3.ConversationAnalysis}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getConversationAnalysis = function() {
  return /** @type{?proto.speechkit.stt.v3.ConversationAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.ConversationAnalysis, 12));
};


/**
 * @param {?proto.speechkit.stt.v3.ConversationAnalysis|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setConversationAnalysis = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearConversationAnalysis = function() {
  return this.setConversationAnalysis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasConversationAnalysis = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Summarization summarization = 13;
 * @return {?proto.speechkit.stt.v3.Summarization}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getSummarization = function() {
  return /** @type{?proto.speechkit.stt.v3.Summarization} */ (
    jspb.Message.getWrapperField(this, proto.speechkit.stt.v3.Summarization, 13));
};


/**
 * @param {?proto.speechkit.stt.v3.Summarization|undefined} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
*/
proto.speechkit.stt.v3.StreamingResponse.prototype.setSummarization = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.speechkit.stt.v3.StreamingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.clearSummarization = function() {
  return this.setSummarization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.hasSummarization = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string channel_tag = 9;
 * @return {string}
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.getChannelTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.StreamingResponse} returns this
 */
proto.speechkit.stt.v3.StreamingResponse.prototype.setChannelTag = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.DeleteRecognitionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.DeleteRecognitionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.DeleteRecognitionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.DeleteRecognitionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.DeleteRecognitionRequest}
 */
proto.speechkit.stt.v3.DeleteRecognitionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.DeleteRecognitionRequest;
  return proto.speechkit.stt.v3.DeleteRecognitionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.DeleteRecognitionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.DeleteRecognitionRequest}
 */
proto.speechkit.stt.v3.DeleteRecognitionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.DeleteRecognitionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.DeleteRecognitionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.DeleteRecognitionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.DeleteRecognitionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string operation_id = 1;
 * @return {string}
 */
proto.speechkit.stt.v3.DeleteRecognitionRequest.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechkit.stt.v3.DeleteRecognitionRequest} returns this
 */
proto.speechkit.stt.v3.DeleteRecognitionRequest.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.speechkit.stt.v3.StreamingResponseList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechkit.stt.v3.StreamingResponseList.prototype.toObject = function(opt_includeInstance) {
  return proto.speechkit.stt.v3.StreamingResponseList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechkit.stt.v3.StreamingResponseList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StreamingResponseList.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamingResponsesList: jspb.Message.toObjectList(msg.getStreamingResponsesList(),
    proto.speechkit.stt.v3.StreamingResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechkit.stt.v3.StreamingResponseList}
 */
proto.speechkit.stt.v3.StreamingResponseList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechkit.stt.v3.StreamingResponseList;
  return proto.speechkit.stt.v3.StreamingResponseList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechkit.stt.v3.StreamingResponseList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechkit.stt.v3.StreamingResponseList}
 */
proto.speechkit.stt.v3.StreamingResponseList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.speechkit.stt.v3.StreamingResponse;
      reader.readMessage(value,proto.speechkit.stt.v3.StreamingResponse.deserializeBinaryFromReader);
      msg.addStreamingResponses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechkit.stt.v3.StreamingResponseList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechkit.stt.v3.StreamingResponseList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechkit.stt.v3.StreamingResponseList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechkit.stt.v3.StreamingResponseList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamingResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.speechkit.stt.v3.StreamingResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StreamingResponse streaming_responses = 1;
 * @return {!Array<!proto.speechkit.stt.v3.StreamingResponse>}
 */
proto.speechkit.stt.v3.StreamingResponseList.prototype.getStreamingResponsesList = function() {
  return /** @type{!Array<!proto.speechkit.stt.v3.StreamingResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.speechkit.stt.v3.StreamingResponse, 1));
};


/**
 * @param {!Array<!proto.speechkit.stt.v3.StreamingResponse>} value
 * @return {!proto.speechkit.stt.v3.StreamingResponseList} returns this
*/
proto.speechkit.stt.v3.StreamingResponseList.prototype.setStreamingResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.speechkit.stt.v3.StreamingResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.speechkit.stt.v3.StreamingResponse}
 */
proto.speechkit.stt.v3.StreamingResponseList.prototype.addStreamingResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.speechkit.stt.v3.StreamingResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.speechkit.stt.v3.StreamingResponseList} returns this
 */
proto.speechkit.stt.v3.StreamingResponseList.prototype.clearStreamingResponsesList = function() {
  return this.setStreamingResponsesList([]);
};


/**
 * @enum {number}
 */
proto.speechkit.stt.v3.CodeType = {
  CODE_TYPE_UNSPECIFIED: 0,
  WORKING: 1,
  WARNING: 2,
  CLOSED: 3
};

goog.object.extend(exports, proto.speechkit.stt.v3);
