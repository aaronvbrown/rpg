export default class Character {
  constructor(name, strength, intelligence) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.level = 1;
    this.inventory = [];
  }
}