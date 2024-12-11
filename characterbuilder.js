document.addEventListener("DOMContentLoaded", () => {
    // Predefined data
    const races = ["Dwarf", "Elf", "Halfling", "Human"];
    const subraces = {
        Dwarf: ["Hill Dwarf", "Mountain Dwarf"],
        Elf: ["High Elf", "Wood Elf"],
        Halfling: ["Lightfoot Halfling", "Stout Halfling"],
        Human: ["Human Variant", "Human Regular"]
    };
    const classes = ["Cleric", "Fighter", "Rogue", "Wizard"];
    const alignments = [
        "Lawful Good", "Neutral Good", "Chaotic Good",
        "Lawful Neutral", "True Neutral", "Chaotic Neutral",
        "Lawful Evil", "Neutral Evil", "Chaotic Evil"
    ];
    const sizes = ["Tiny", "Small", "Medium", "Large"];
    const abilityScoreRange = { min: 8, max: 18 };

    // Random helper function
    const getRandomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Assign random values
    const randomizeValues = () => {
        document.getElementById("name").value = `NPC_${Math.floor(Math.random() * 1000)}`;
        document.getElementById("class").value = getRandomValue(classes).toLowerCase();
        const race = getRandomValue(races);
        document.getElementById("race").value = race.toLowerCase();
        document.getElementById("subrace").value = getRandomValue(subraces[race]).toLowerCase();
        document.getElementById("size").value = getRandomValue(sizes).toLowerCase();
        document.getElementById("alignment").value = getRandomValue(alignments).toLowerCase();
        document.getElementById("speed").value = getRandomInt(25, 30); // Typical speed range
        document.getElementById("armor").value = getRandomInt(10, 13); // AC Range
        document.getElementById("hp").value = getRandomInt(6, 12); // HP Range

        // Randomize abilities
        document.getElementById("strength").value = getRandomInt(abilityScoreRange.min, abilityScoreRange.max);
        document.getElementById("dexterity").value = getRandomInt(abilityScoreRange.min, abilityScoreRange.max);
        document.getElementById("constitution").value = getRandomInt(abilityScoreRange.min, abilityScoreRange.max);
        document.getElementById("intelligence").value = getRandomInt(abilityScoreRange.min, abilityScoreRange.max);
        document.getElementById("wisdom").value = getRandomInt(abilityScoreRange.min, abilityScoreRange.max);
        document.getElementById("charisma").value = getRandomInt(abilityScoreRange.min, abilityScoreRange.max);

        // Randomize saving throws
        document.querySelectorAll(".form-check-input-saving").forEach(input => {
            input.checked = Math.random() > 0.90; // Changed chance of saving throw
        });
        document.querySelectorAll('.form-check-input-skills').forEach(input => {
            input.checked = Math.random() > 0.75;
        });
    
    };
    // Added arrays to fill recommended values with race, subrace and class selection. 
    // Assign recommended values
    const recommendedValues = [
        {
            race: "Human",
            subrace: "Human Regular",
            charClass: "Fighter",
            //size: "medium",
            speed: 30,
            armor: 13,
            hp: 12,
            abilities: {
                strength: 16,
                dexterity: 12,
                constitution: 14,
                intelligence: 8,
                wisdom: 12,
                charisma: 10,
            }
        },
        {
            race: "Human",
            subrace: "Human Variant",
            charClass: "Fighter",
            speed: 30,
            armor: 13,
            hp: 11,
            abilities: {
                strength: 15,
                dexterity: 14,
                constitution: 13,
                intelligence: 8,
                wisdom: 12,
                charisma: 10,
            }
        },
        {
            race: "Human",
            subrace: "Human Regular",
            charClass: "Cleric",
            speed: 30,
            armor: 13,
            hp: 9,
            abilities: {
                strength: 14,
                dexterity: 10,
                constitution: 13,
                intelligence: 10,
                wisdom: 15,
                charisma: 10,
            }
        },
        {
            race: "Human",
            subrace: "Human Variant",
            charClass: "Cleric",
            speed: 30,
            armor: 13,
            hp: 10,
            abilities: {
                strength: 13,
                dexterity: 10,
                constitution: 15,
                intelligence: 10,
                wisdom: 14,
                charisma: 10,
            }
        },
        {
            race: "Human",
            subrace: "Human Regular",
            charClass: "Rogue",
            speed: 30,
            armor: 11,
            hp: 10,
            abilities: {
                strength: 8,
                dexterity: 16,
                constitution: 14,
                intelligence: 14,
                wisdom: 12,
                charisma: 12,
            }
        },
        {
            race: "Human",
            subrace: "Human Variant",
            charClass: "Rogue",
            speed: 30,
            armor: 11,
            hp: 10,
            abilities: {
                strength: 8,
                dexterity: 16,
                constitution: 14,
                intelligence: 12,
                wisdom: 12,
                charisma: 14,
            }
        },
        {
            race: "Human",
            subrace: "Human Regular",
            charClass: "Wizard",
            speed: 30,
            armor: 10,
            hp: 8,
            abilities: {
                strength: 8,
                dexterity: 15,
                constitution: 14,
                intelligence: 15,
                wisdom: 8,
                charisma: 10,
            }
        },
        {
            race: "Human",
            subrace: "Human Variant",
            charClass: "Wizard",
            speed: 30,
            armor: 10,
            hp: 7,
            abilities: {
                strength: 8,
                dexterity: 14,
                constitution: 13,
                intelligence: 16,
                wisdom: 9,
                charisma: 10,
            }
        },
        {
            race: "Halfling",
            subrace: "Lightfoot Halfling",
            charClass: "Fighter",
            speed: 25,
            armor: 13,
            hp: 12,
            abilities: {
                strength: 16,
                dexterity: 14,
                constitution: 14,
                intelligence: 8,
                wisdom: 12,
                charisma: 10,
            }
        },
        {
            race: "Halfling",
            subrace: "Stout Halfling",
            charClass: "Fighter",
            speed: 25,
            armor: 13,
            hp: 11,
            abilities: {
                strength: 15,
                dexterity: 14,
                constitution: 13,
                intelligence: 8,
                wisdom: 12,
                charisma: 10,
            } 
        },
        {
            race: "Halfling",
            subrace: "Lightfoot Halfling",
            charClass: "Cleric",
            speed: 25,
            armor: 13,
            hp: 9,
            abilities: {
                strength: 14,
                dexterity: 10,
                constitution: 13,
                intelligence: 10,
                wisdom: 15,
                charisma: 10,
            }   
        },
        {
            race: "Halfling",
            subrace: "Stout Halfling",
            charClass: "Cleric",
            speed: 25,
            armor: 13,
            hp: 10,
            abilities: {
                strength: 13,
                dexterity: 10,
                constitution: 15,
                intelligence: 10,
                wisdom: 14,
                charisma: 10,
            } 
        },
        {
            race: "Halfling",
            subrace: "Lightfoot Halfling",
            charClass: "Rogue",
            speed: 25,
            armor: 11,
            hp: 10,
            abilities: {
                strength: 8,
                dexterity: 16,
                constitution: 14,
                intelligence: 14,
                wisdom: 12,
                charisma: 12,
            }  
        },
        {
            race: "Halfling",
            subrace: "Stout Halfling",
            charClass: "Rogue",
            speed: 25,
            armor: 11,
            hp: 10,
            abilities: {
                strength: 8,
                dexterity: 16,
                constitution: 14,
                intelligence: 12,
                wisdom: 12,
                charisma: 14,
            } 
        },
        {
            race: "Halfling",
            subrace: "Lightfoot Halfling",
            charClass: "Wizard",
            speed: 25,
            armor: 10,
            hp: 8,
            abilities: {
                strength: 8,
                dexterity: 15,
                constitution: 14,
                intelligence: 15,
                wisdom: 8,
                charisma: 10,
            }
        },
        {
            race: "Halfling",
            subrace: "Lightfoot Halfling",
            charClass: "Wizard",
            speed: 25,
            armor: 10,
            hp: 7,
            abilities: {
                strength: 8,
                dexterity: 14,
                constitution: 13,
                intelligence: 16,
                wisdom: 9,
                charisma: 10,
            }
        },
        {
            race: "Dwarf",
            subrace: "Hill Dwarf",
            charClass: "Fighter",
            speed: 25,
            armor: 13,
            hp: 12,
            abilities: {
                strength: 16,
                dexterity: 12,
                constitution: 14,
                intelligence: 8,
                wisdom: 12,
                charisma: 10,
            }
        },
        {
            race: "Dwarf",
            subrace: "Mountain Dwarf",
            charClass: "Fighter",
            speed: 25,
            armor: 13,
            hp: 11,
            abilities: {
                strength: 15,
                dexterity: 14,
                constitution: 13,
                intelligence: 8,
                wisdom: 12,
                charisma: 10,
            }   
        },
        {
            race: "Dwarf",
            subrace: "Hill Dwarf",
            charClass: "Cleric",
            speed: 25,
            armor: 13,
            hp: 9,
            abilities: {
                strength: 14,
                dexterity: 10,
                constitution: 13,
                intelligence: 10,
                wisdom: 15,
                charisma: 10,
            }
        },
        {
            race: "Dwarf",
            subrace: "Mountain Dwarf",
            charClass: "Cleric",
            speed: 25,
            armor: 13,
            hp: 10,
            abilities: {
                strength: 13,
                dexterity: 10,
                constitution: 15,
                intelligence: 10,
                wisdom: 14,
                charisma: 10,
            }
        },
        {
            race: "Dwarf",
            subrace: "Hill Dwarf",
            charClass: "Rogue",
            speed: 25,
            armor: 11,
            hp: 10,
            abilities: {
                strength: 8,
                dexterity: 16,
                constitution: 14,
                intelligence: 14,
                wisdom: 12,
                charisma: 12,
            }
        },
        {
            race: "Dwarf",
            subrace: "Mountian Dwarf",
            charClass: "Rogue",
            speed: 25,
            armor: 11,
            hp: 10,
            abilities: {
                strength: 8,
                dexterity: 16,
                constitution: 14,
                intelligence: 12,
                wisdom: 12,
                charisma: 14,
            }
        },
        {
            race: "Dwarf",
            subrace: "Hill Dwarf",
            charClass: "Wizard",
            speed: 25,
            armor: 10,
            hp: 8,
            abilities: {
                strength: 8,
                dexterity: 15,
                constitution: 14,
                intelligence: 15,
                wisdom: 8,
                charisma: 10,
            } 
        },
        {
            race: "Dwarf",
            subrace: "Mountain Dwarf",
            charClass: "Wizard",
            speed: 25,
            armor: 10,
            hp: 7,
            abilities: {
                strength: 8,
                dexterity: 14,
                constitution: 13,
                intelligence: 16,
                wisdom: 9,
                charisma: 10,
            }
        }

    ];
    // Select a random preset from Array
    const selectRandomPreset = (presetsArray) => {
        const randomSet = Math.floor(Math.random() * presetsArray.length);
        return presetsArray[randomSet];
    };

    // Assign values from recommended preset to form fields
    const assignRecommendedValues = () => {

        const selected = selectRandomPreset(recommendedValues);
        
        document.getElementById("class").value = selected.charClass.toLowerCase();
        document.getElementById("race").value = selected.race.toLowerCase();
        document.getElementById("subrace").value = selected.subrace.toLowerCase();
        //document.getElementById("size").value = selected.size.toLowerCase();   find out why this is breaking the code!!!!!!!!!!!
        document.getElementById("speed").value = Number(selected.speed);
        document.getElementById("armor").value = Number(selected.armor);
        document.getElementById("hp").value = Number(selected.hp);

        document.getElementById("strength").value = Number(selected.abilities.strength);
        document.getElementById("dexterity").value = Number(selected.abilities.dexterity);
        document.getElementById("constitution").value = Number(selected.abilities.constitution);
        document.getElementById("intelligence").value = Number(selected.abilities.intelligence);
        document.getElementById("wisdom").value = Number(selected.abilities.wisdom);
        document.getElementById("charisma").value = Number(selected.abilities.charisma);

    };

    // Event listeners
    document.querySelector(".btn-primary:nth-child(1)").addEventListener("click", assignRecommendedValues);
    document.querySelector(".btn-primary:nth-child(2)").addEventListener("click", randomizeValues);
});
    

const racialAbilities = {
    Human: "Age. Humans reach adulthood in their late teens and live less than a century. Alignment. Humans tend toward no particular alignment. The best and the worst are found among them. Size. Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall.  Also add these depending on human subrace: If Regular Rules: Ability Score Increase. Your ability scores each increase by 1. If Variant Rules: Ability Score Increase. Two different ability scores of your choice increase by 1. Skills. You gain proficiency in one skill of your choice. Feat. You gain one feat of your choice .",
    Dwarf: "Ability Score Increase. Your Constitution score increases by 2. Age. Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years. Alignment. Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order. Size. Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Speed. Your speed is not reduced by wearing heavy armor. Darkvision. Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray. Dwarven Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage. Dwarven Combat Training. You have proficiency with the battleaxe, handaxe, light hammer, and warhammer. Tool Proficiency. You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools. Stonecunning. Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus. If Hill Dwarf: Ability Score Increase. Your Wisdom score increases by 1. Dwarven Toughness. Your hit point maximum increases by 1, and it increases by 1 every time you gain a level. If Mountain Dwarf: Ability Score Increase. Your Strength score increases by 2. Dwarven Armor Training. You have proficiency with light and medium armor.", 
    Elf: "Ability Score Increase. Your Dexterity score increases by 2. Age. Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old. Alignment. Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. Size. Elves range from under 5 to over 6 feet tall and have slender builds.  Darkvision. Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray. Keen Senses. You have proficiency in the Perception skill. Fey Ancestry. You have advantage on saving throws against being charmed, and magic can’t put you to sleep. Trance. Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep. Also add these depending on elf subrace: If High Elf: Ability Score Increase. Your Intelligence score increases by 1. Elf Weapon Training. You have proficiency with the longsword, shortsword, shortbow, and longbow. Cantrip. You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it. Extra Language. You can speak, read, and write one extra language of your choice. If Wood Elf: Ability Score Increase. Your Wisdom score increases by 1. Elf Weapon Training. You have proficiency with the longsword, shortsword, shortbow, and longbow. Fleet of Foot. Your base walking speed increases to 35 feet. Mask of the Wild. You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena. ",
    Halfling: "Ability Score Increase. Your Dexterity score increases by 2. Age. A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century. Alignment. Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways. Size. Halflings average about 3 feet tall and weigh about 40 pounds.  Lucky. When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll. Brave. You have advantage on saving throws against being frightened. Halfling Nimbleness. You can move through the space of any creature that is of a size larger than yours. Also add these depending on halfling subrace: If Lightfoot Halfling: Ability Score Increase. Your Charisma score increases by 1. Naturally Stealthy. You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you. If Stout Halfling: Ability Score Increase. Your Constitution score increases by 1. Stout Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage."
};


document.addEventListener("DOMContentLoaded", () => {
    
    const racialAbilitiesField = document.querySelector("textarea[aria-label='Racial Abilities']");  
    const raceSelect = document.getElementById("race");
    if (racialAbilitiesField && raceSelect) {
        raceSelect.addEventListener("change", () => {
            const selectedRace = raceSelect.value;
            const capitalizedRace = selectedRace.charAt(0).toUpperCase() + selectedRace.slice(1); 
            if (racialAbilities[capitalizedRace]) {
                racialAbilitiesField.value = racialAbilities[capitalizedRace];
            } else {
                racialAbilitiesField.value = ""; 
            }
        });
    } 
});