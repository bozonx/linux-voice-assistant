declare module "vue" {
  export * from "@vue/runtime-core";
}

declare module "vue" {
  export interface GlobalComponents {
    MainInput: typeof import("./components/MainInput.vue")["default"];
    MainInputHistory: typeof import("./components/MainInputHistory.vue")["default"];
    Actions: typeof import("./components/Actions.vue")["default"];
    TransformAndInsertMenu: typeof import("./components/TransformAndInsertMenu.vue")["default"];
    TextEditToolbar: typeof import("./components/TextEditToolbar.vue")["default"];
    VoiceRecognitionProcess: typeof import("./components/VoiceRecognitionProcess.vue")["default"];
  }
}
