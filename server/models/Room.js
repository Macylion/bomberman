export default class Room {
  constructor(args) {
    this.key = args.key ? args.key : Date.now();
    this.players = args.players ? args.players : [];
    this.status = args.status ? args.status : "waiting";
  }
}
