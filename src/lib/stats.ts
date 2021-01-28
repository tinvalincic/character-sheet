export enum abilityNames {
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
}
const modifierNames = [
  ["Saving throws", "Athletics"], // STR
  ["Saving throws", "Acrobatics", "Sleight of hand", "Stealth"], // DEX
  ["Saving throws"], // CON
  ["Saving throws", "Arcana", "History", "Investigation", "Nature", "Religion"], // INT
  [
    "Saving throws",
    "Animal handling",
    "Insight",
    "Medicine",
    "Perception",
    "Survival",
  ], // WIS
  ["Saving throws", "Deception", "Intimidation", "Performance", "Persuation"], // CHR
];
export type IStats = [number, number[]?];

export interface IAbility {
  default: number;
  increases: number[];
  increase: number | number[];
}

export function calculateAbility(ability: IAbility, level: number) {
  const { default: defaultValue, increases, increase } = ability;
  return increases.reduce((value, lvl, i) => {
    if (lvl > level) return value;
    if (Array.isArray(increase)) {
      value += increase[i] || increase[increase.length - 1];
      return value;
    }
    value += increase;
    return value;
  }, defaultValue);
}

export function constructModifiers(stats: IStats[]) {
  return Object.keys(abilityNames)
    .filter((v) => isNaN(+v))
    .map((ability, i) => {
      const [abilityValue, proficiencies = []] = stats[i];
      return {
        name: ability,
        value: abilityValue || 10,
        modifiers: modifierNames[i].map((mod, j) => ({
          name: mod,
          proficient: !!proficiencies.length && proficiencies.includes(j),
        })),
      };
    });
}

function stats(initialStats: IStats) {}

export default stats;

// function initStats(character){
//   const stats = characterStats[character] || characterStats.Def;
//   const abilities = constructAbilities(stats.abilities);
//   const initiative = Math.floor((abilities[1].value - 10) / 2);
//   const { level } = stats.classes[0];
//   const { proficiency, speed, maxRage, rageDamage } = stats.levelAbilities;
//   const temp = {
//     ...stats,
//     abilities,
//     classes: stats.classes,
//     stats: {
//       initiative,
//       maxHP: stats.maxHP,
//       proficiency: calculateAbility(proficiency, level),
//       speed: calculateAbility(speed, level),
//       hitDie: stats.hitDie
//     },
//     weapons: stats.weapons
//   }
//   if(maxRage){
//     temp.stats.rage = {
//       max: calculateAbility(maxRage, level),
//       damage: calculateAbility(rageDamage, level)
//     };
//   }
//   return temp;
// }
