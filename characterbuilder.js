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
        document.querySelectorAll(".form-check-input").forEach(input => {
            input.checked = Math.random() > 0.15; // 33% chance for saving throw proficiency
        });
    };
    //Added arrays to fill recommended values with race, subrace and class selection. 
    // Assign recommended values
    const recommendedValues = [
        {
            race: "Human",
            subrace: "Human Regular",
            class: "Fighter",
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
            class: "Fighter",
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
            class: "Cleric",
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
            class: "Cleric",
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
            class: "Rogue",
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
            class: "Rogue",
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
            class: "Wizard",
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
            class: "Wizard",
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
            class: "Fighter",
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
            class: "Fighter",
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
            class: "Cleric",
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
            class: "Cleric",
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
            class: "Rogue",
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
            class: "Rogue",
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
            class: "Wizard",
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
            class: "Wizard",
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
            class: "Fighter",
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
            class: "Fighter",
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
            class: "Cleric",
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
            class: "Cleric",
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
            class: "Rogue",
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
            class: "Rogue",
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
            class: "Wizard",
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
            class: "Wizard",
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

    const assignRecommendedValues = () => {
        
        const userRace = document.getElementById("race").value.toLowerCase();
        const userSubrace = document.getElementById("subrace").value.toLowerCase();
        const userClass = document.getElementById("class").value.toLowerCase();

        const selected = recommendedValues.find(item =>
            item.race.toLowerCase() === userRace &&
            item.subrace.toLowerCase() === userSubrace &&
            item.class.toLowerCase() === userClass
        ); 

        document.getElementById("class").value = selected.class.toLowerCase();
        document.getElementById("race").value = selected.race.toLowerCase();
        document.getElementById("subrace").value = selected.subrace.toLowerCase();
        document.getElementById("size").value = selected.size.toLowerCase();
        document.getElementById("speed").value = selected.speed;
        document.getElementById("armor").value = selected.armor;
        document.getElementById("hp").value = selected.hp;

        document.getElementById("strength").value = selected.abilities.strength;
        document.getElementById("dexterity").value = selected.abilities.dexterity;
        document.getElementById("constitution").value = selected.abilities.constitution;
        document.getElementById("intelligence").value = selected.abilities.intelligence;
        document.getElementById("wisdom").value = selected.abilities.wisdom;
        document.getElementById("charisma").value = selected.abilities.charisma;

    };

    // Event listeners
    document.querySelector(".btn-primary:nth-child(1)").addEventListener("click", assignRecommendedValues);
    document.querySelector(".btn-primary:nth-child(2)").addEventListener("click", randomizeValues);
});
