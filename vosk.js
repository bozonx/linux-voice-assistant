const websocket = require("ws");
const fs = require("fs");

const mic = require("mic");

SAMPLE_RATE = 8000;

class VoiceRecognition {
  ws;
  micInstance;
  callback;
  parts = [];

  constructor(cb) {
    this.callback = cb;
  }

  start() {
    this.parts = [""];
    this.ws = new websocket("ws://localhost:2700");
    this.micInstance = mic({
      rate: String(SAMPLE_RATE),
      channels: "1",
      debug: false,
      device: "default",
    });

    this.ws.on("open", function open() {
      var micInputStream = this.micInstance.getAudioStream();

      micInputStream.on("data", (data) => {
        ws.send(data);
      });

      micInputStream.on("audioProcessExitComplete", function () {
        ws.send('{"eof" : 1}');
      });
    });

    this.ws.on("message", function incoming(data) {
      this._handleMessage(data);
    });

    this.ws.on("close", function close(a, b) {
      //console.log(a, b.toString("utf8"));
      this.micInstance.stop();
    });

    this.micInstance.start();
  }

  stop() {
    this.parts = [];
    this.micInstance.stop();
    this.ws.close();
  }

  _handleMessage(data) {
    const json = JSON.parse(data.toString("utf8"));

    if (json.partial) {
      this.parts[this.parts.length - 1] += json.partial;
    } else if (json.result) {
      this.parts[this.parts.length - 1] = json.result.text;
      this.parts.push("");
    }

    this.callback(this.parts.join(" ").trim());
  }
}
