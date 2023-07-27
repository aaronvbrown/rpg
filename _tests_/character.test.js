import Character from "./../src/character.js"


describe("Character", () => {
  let character;
  
  beforeEach(() => {
    character = new Character("Neo", 5, 5, 5);
    return character;
  });
  
  // beforeEach(() => {
  //   return ops;
  // });
  
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
  
  test("should be able to attack the ops", () => {
    const ops = new Character("Killer Bunny", 5, 5, 5);
    character.attack(ops);
    expect(ops.health).toEqual(0);
  });

});