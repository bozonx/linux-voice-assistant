import WebSocket from "ws";
import mic from "mic";

// Константы
const SAMPLE_RATE: number = 8000;

// Интерфейсы
interface VoskResult {
  partial?: string;
  text?: string;
  result?: {
    conf: number;
    end: number;
    start: number;
    word: string;
  }[];
}

interface MicConfig {
  rate: string;
  channels: string;
  debug: boolean;
  device: string;
}

class VoskVoiceRecognition {
  private ws: WebSocket | null = null;
  private micInstance: any; // Тип из библиотеки mic не предоставляется
  private cb?: (text: string) => void;
  private parts: string[] = [];
  private voskWsUrl: string;

  constructor(voskWsUrl: string) {
    this.voskWsUrl = voskWsUrl;
  }

  start(cb: (text: string) => void): void {
    this.cb = cb;

    this.parts = [];
    this.ws = new WebSocket(this.voskWsUrl);
    this.micInstance = mic({
      rate: String(SAMPLE_RATE),
      channels: "1",
      debug: false,
      device: "default",
    } as MicConfig);

    this.ws.on("open", () => {
      const micInputStream = this.micInstance.getAudioStream();

      micInputStream.on("data", (data: Buffer) => {
        if (this.ws) {
          this.ws.send(data);
        }
      });

      micInputStream.on("audioProcessExitComplete", () => {
        if (this.ws) {
          this.ws.send('{"eof" : 1}');
        }
      });
    });

    this.ws.on("message", (data: WebSocket.Data) => {
      this._handleMessage(data);
    });

    this.ws.on("close", () => {
      this.micInstance.stop();
    });

    this.micInstance.start();
  }

  stop(): void {
    this.parts = [];
    this.micInstance.stop();

    if (this.ws) {
      this.ws.close();
    }
  }

  private _handleMessage(data: WebSocket.Data): void {
    const json = JSON.parse(data.toString("utf8")) as VoskResult;

    if (json.text) {
      this.parts.push(json.text);
    } else return;

    const result = this.parts.join(" ").trim();

    this.cb?.(result);
  }
}

export default VoskVoiceRecognition;
