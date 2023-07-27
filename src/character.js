export default class Character {
  constructor(name, strength, intelligence, health) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.health = health
    this.level = 1;
    this.inventory = [];
  }
  
  attack(ops) {
    const damage = this.strength * this.level;
    ops.health -= damage;
  }
  
  levelUp() {
  }
}