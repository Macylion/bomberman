import express from "express";

export default class WebServer {
  constructor(port = 3000) {
    this.start(port);
  }

  start(port = 3000) {
    const app = express();
    app.use(express.static("public"));

    app.listen(port, () => {
      console.log(`Serving running at localhost:${port}`);
    });
  }
}
