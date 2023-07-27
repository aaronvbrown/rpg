import Character from "./../src/character.js"


describe("Character", () => {
  let character;

  beforeEach(() => {
    character = new Character("Neo", 5, 5, 5);
    return character;
  });


  test("should have a name", () => {
    expect(character.name).toEqual("Neo");
  });

  test("should have a strength attribute", () => {
    expect(character.strength).toEqual(5);
  });

  test("should have a intelligence attribute", () => {
    expect(character.intelligence).toEqual(5);
  });

  test("should have a health attribute", () => {
    expect(character.health).toEqual(5);
  });

  test("should have a level attribute", () => {
    expect(character.level).toEqual(1);
  });

  test("should be able to attack the ops", () => {
    const ops = new Character("Killer Bunny", 5, 5, 5);
    character.attack(ops);
    expect(ops.health).toEqual(0);
  });

  test("should be able to level up", () => {
    character.levelUp();
    expect(character.strength).toEqual(6);
    expect(character.intelligence).toEqual(6);
    expect(character.health).toEqual(6);
    expect(character.level).toEqual(2);
  })

  test("should be able to add to inventory", () => {
    character.addToInventory("sniper");
    expect(character.inventory.length).toEqual(2);
  })
});