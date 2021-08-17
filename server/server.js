import { Server } from "socket.io";
import ConnectionController from "./controllers/ConnectionController.js";

export default class SocketController {
  constructor(port = 8080) {
    this.io = new Server();
    this.io.attach(port, {
      pingInterval: 10000,
      pingTimeout: 5000,
      cookie: false,
    });

    console.log(`Socket io running at localhost:${port}`);

    new ConnectionController(this.io);
  }
}
