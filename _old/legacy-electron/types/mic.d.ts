declare module "mic" {
  interface MicConfig {
    rate: string;
    channels: string;
    debug: boolean;
    device: string;
  }

  interface MicInstance {
    start(): void;
    stop(): void;
    getAudioStream(): {
      on(event: string, callback: (data: any) => void): void;
    };
  }

  function mic(config: MicConfig): MicInstance;
  export = mic;
}
