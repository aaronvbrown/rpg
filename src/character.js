export default class Character {
  constructor(name, strength, intelligence, health) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.health = health
    this.level = 1;
    this.inventory = ['orb'];
  }
  
  attack(ops) {
    const damage = this.strength * this.level;
    ops.health -= damage;
  }
  
  levelUp() {
    this.strength++;
    this.intelligence++;
    this.health++;
    this.level++;
  }
  
  addToInventory(item){
    this.inventory.push(item);
  }
}