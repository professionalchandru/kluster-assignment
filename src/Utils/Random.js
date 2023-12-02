export class Randoms {
  static Price() {
    return Math.floor(Math.random() * 1000 + 1);
  }

  static Description() {
    return Math.random().toString(36);
  }
}
