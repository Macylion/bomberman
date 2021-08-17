export default class Player {
  constructor(args) {
    this.key = args.key ? args.key : Date.now();
    this.name = args.name ? args.name : "ノーネーム";
  }
}
