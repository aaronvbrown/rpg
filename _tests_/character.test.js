import Character from "./../src/character.js"


describe("Character", () => {
  let character;

  beforeEach(() => {
    character = new Character("Neo", 5, 5);
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

  test("should be able to attack a monster", () => {
    const monster = new Character("Killer Bunny", 3, 3);
    character.attack(monster);
    expect(monster.health).toEqual(3);
  });
  
});