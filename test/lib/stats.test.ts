import {
  calculateAbility,
  constructModifiers,
  IAbility,
  IStats,
} from "../../src/lib/stats";

describe.skip("calculateAbility", () => {
  const abilities: IAbility = {
    default: 2,
    increases: [5, 9, 13, 17],
    increase: 1,
  };
  it("calculates ability to equal 2 at level 3", () => {
    expect(calculateAbility(abilities, 3)).toBe(2);
  });
  it("calculates ability to equal 3 at level 5", () => {
    expect(calculateAbility(abilities, 5)).toBe(3);
  });
  it("calculates ability to equal 3 at level 7", () => {
    expect(calculateAbility(abilities, 7)).toBe(3);
  });
  it("calculates ability to equal 4 at level 10", () => {
    expect(calculateAbility(abilities, 10)).toBe(4);
  });
  it("calculates ability to equal 5 at level 15", () => {
    expect(calculateAbility(abilities, 15)).toBe(5);
  });
  it("calculates ability to equal 6 at level 20", () => {
    expect(calculateAbility(abilities, 20)).toBe(6);
  });
  const abilitiesArray: IAbility = {
    default: 30,
    increases: [5, 9, 15],
    increase: [5, 10],
  };
  it("calculates ability to equal 30 at level 1", () => {
    expect(calculateAbility(abilitiesArray, 1)).toBe(30);
  });
  it("calculates ability to equal 35 at level 5", () => {
    expect(calculateAbility(abilitiesArray, 5)).toBe(35);
  });
  it("calculates ability to equal 35 at level 7", () => {
    expect(calculateAbility(abilitiesArray, 7)).toBe(35);
  });
  it("calculates ability to equal 45 at level 10", () => {
    expect(calculateAbility(abilitiesArray, 10)).toBe(45);
  });
  it("calculates ability to equal 55 at level 15", () => {
    expect(calculateAbility(abilitiesArray, 15)).toBe(55);
  });
});

describe("constructModifiers", () => {
  const stats1: IStats[] = [
    [20, [0, 1]],
    [15, [1, 3]],
    [18, [0]],
    [8],
    [12],
    [12, [2]],
  ];
  const ret1 = [
    {
      name: "strength",
      value: 20,
      modifiers: [
        {
          name: "Saving throws",
          proficient: true,
        },
        {
          name: "Athletics",
          proficient: true,
        },
      ],
    },
    {
      name: "dexterity",
      value: 15,
      modifiers: [
        {
          name: "Saving throws",
          proficient: false,
        },
        {
          name: "Acrobatics",
          proficient: true,
        },
        {
          name: "Sleight of hand",
          proficient: false,
        },
        {
          name: "Stealth",
          proficient: true,
        },
      ],
    },
    {
      name: "constitution",
      value: 18,
      modifiers: [
        {
          name: "Saving throws",
          proficient: true,
        },
      ],
    },
    {
      name: "intelligence",
      value: 8,
      modifiers: [
        {
          name: "Saving throws",
          proficient: false,
        },
        {
          name: "Arcana",
          proficient: false,
        },
        {
          name: "History",
          proficient: false,
        },
        {
          name: "Investigation",
          proficient: false,
        },
        {
          name: "Nature",
          proficient: false,
        },
        {
          name: "Religion",
          proficient: false,
        },
      ],
    },
    {
      name: "wisdom",
      value: 12,
      modifiers: [
        {
          name: "Saving throws",
          proficient: false,
        },
        {
          name: "Animal handling",
          proficient: false,
        },
        {
          name: "Insight",
          proficient: false,
        },
        {
          name: "Medicine",
          proficient: false,
        },
        {
          name: "Perception",
          proficient: false,
        },
        {
          name: "Survival",
          proficient: false,
        },
      ],
    },
    {
      name: "charisma",
      value: 12,
      modifiers: [
        {
          name: "Saving throws",
          proficient: false,
        },
        {
          name: "Deception",
          proficient: false,
        },
        {
          name: "Intimidation",
          proficient: true,
        },
        {
          name: "Performance",
          proficient: false,
        },
        {
          name: "Persuation",
          proficient: false,
        },
      ],
    },
  ];
  const stats2: IStats[] = [
    [8],
    [14, [2, 3]],
    [15, [0]],
    [11, [1]],
    [15],
    [20, [0, 4]]
  ];
  const ret2 = [
    {
      name: "strength",
      value: 8,
      modifiers: [
        {
          name: "Saving throws",
          proficient: false,
        },
        {
          name: "Athletics",
          proficient: false,
        },
      ],
    },
    {
      name: "dexterity",
      value: 14,
      modifiers: [
        {
          name: "Saving throws",
          proficient: false,
        },
        {
          name: "Acrobatics",
          proficient: false,
        },
        {
          name: "Sleight of hand",
          proficient: true,
        },
        {
          name: "Stealth",
          proficient: true,
        },
      ],
    },
    {
      name: "constitution",
      value: 15,
      modifiers: [
        {
          name: "Saving throws",
          proficient: true,
        },
      ],
    },
    {
      name: "intelligence",
      value: 11,
      modifiers: [
        {
          name: "Saving throws",
          proficient: false,
        },
        {
          name: "Arcana",
          proficient: true,
        },
        {
          name: "History",
          proficient: false,
        },
        {
          name: "Investigation",
          proficient: false,
        },
        {
          name: "Nature",
          proficient: false,
        },
        {
          name: "Religion",
          proficient: false,
        },
      ],
    },
    {
      name: "wisdom",
      value: 15,
      modifiers: [
        {
          name: "Saving throws",
          proficient: false,
        },
        {
          name: "Animal handling",
          proficient: false,
        },
        {
          name: "Insight",
          proficient: false,
        },
        {
          name: "Medicine",
          proficient: false,
        },
        {
          name: "Perception",
          proficient: false,
        },
        {
          name: "Survival",
          proficient: false,
        },
      ],
    },
    {
      name: "charisma",
      value: 20,
      modifiers: [
        {
          name: "Saving throws",
          proficient: true,
        },
        {
          name: "Deception",
          proficient: false,
        },
        {
          name: "Intimidation",
          proficient: false,
        },
        {
          name: "Performance",
          proficient: false,
        },
        {
          name: "Persuation",
          proficient: true,
        },
      ],
    },
  ];
  it("returns stats for Eldingar", () => {
    expect(constructModifiers(stats1)).toEqual(ret1);
  });
  it("returns stats for Alaina", () => {
    expect(constructModifiers(stats2)).toEqual(ret2);
  });
});
