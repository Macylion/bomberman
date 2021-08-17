import Player from "../models/player.js";
import Room from "../models/room.js";

export default class ConnectionController {
  rooms = [];
  players = [];

  constructor(server) {
    server.on("connection", this.connection);
  }

  connection(socket) {
    socket.on("init-player", (data) => this.initPlayer(data, socket));
    socket.on("join-room", (data) => this.joinRoom(data, socket));
  }

  initPlayer(data, socket) {
    const player = new Player({
      socketId: socket.id,
      name: data.name,
    });
    socket.emit("me", player);
    this.players.push(player);

    console.log("players", this.players);
  }

  joinRoom(data, socket) {
    let room = d.find((x) => x.id == 14);
    if (!room) {
      room = new Room({
        players: [this.players.find((player) => player.socketId === socket.id)],
      });
      this.rooms.push(room);
    }

    socket.join(room.key);

    console.log("rooms", this.rooms);
  }
}
