// array of classes races and alignments

const races = ["Human", "Elf", "Dwarf", "Halfling"];
const classes = ["Fighter", "Wizard", "Rogue", "Cleric"];
const alignments = [
  "Lawful Good", "Neutral Good", "Chaotic Good",
  "Lawful Neutral", "True Neutral", "Chaotic Neutral",
  "Lawful Evil", "Neutral Evil", "Chaotic Evil"
];
// Rolls for ability score 
function rollAbilityScore() {
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => b - a);
  return rolls.slice(0, 3).reduce((acc, val) => acc + val, 0);
}
// calls for array and ability score and gives values
function generateRandomCharacter() {
  return {
    race: races[Math.floor(Math.random() * races.length)],
    class: classes[Math.floor(Math.random() * classes.length)],
    alignment: alignments[Math.floor(Math.random() * alignments.length)],
    abilityScores: {
      Strength: rollAbilityScore(),
      Dexterity: rollAbilityScore(),
      Constitution: rollAbilityScore(),
      Intelligence: rollAbilityScore(),
      Wisdom: rollAbilityScore(),
      Charisma: rollAbilityScore()
    },
    armorClass: Math.floor(Math.random() * (16 - 10 + 1)) + 10
  };
}
// Displays all selected values
function renderCharacter(character) {
  let output = `<strong>Race:</strong> ${character.race}<br>`;
  output += `<strong>Class:</strong> ${character.class}<br>`;
  output += `<strong>Alignment:</strong> ${character.alignment}<br>`;
  output += `<strong>Armor Class:</strong> ${character.armorClass}<br>`;
  output += `<strong>Ability Scores:</strong><br>`;
  for (const [ability, score] of Object.entries(character.abilityScores)) {
    output += `&nbsp;&nbsp;- ${ability}: ${score}<br>`;
  }
  document.getElementById("output").innerHTML = output;
}

function populateDropdown(id, options) {
  const dropdown = document.getElementById(id);
  options.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    dropdown.appendChild(opt);
  });
}

// Initialize dropdowns
populateDropdown("raceSelect", races);
populateDropdown("classSelect", classes);
populateDropdown("alignmentSelect", alignments);


// Event listeners
document.getElementById("randomBtn").addEventListener("click", () => {
  const randomCharacter = generateRandomCharacter();
  renderCharacter(randomCharacter);
});

document.getElementById("customBtn").addEventListener("click", () => {
  document.getElementById("customCharacterForm").style.display = "block";
});

document.getElementById("submitCustom").addEventListener("click", () => {
  const race = document.getElementById("raceSelect").value;
  const classType = document.getElementById("classSelect").value;
  const alignment = document.getElementById("alignmentSelect").value;
  const armorClass = parseInt(document.getElementById("armorClass").value) || 10;

  const customCharacter = {
    race: race || "Unknown",
    class: classType || "Unknown",
    alignment: alignment || "Unknown",
    armorClass: Math.min(Math.max(armorClass, 10), 16),
    abilityScores: {
      Strength: parseInt(document.getElementById("strength").value) || 10,
      Dexterity: parseInt(document.getElementById("dexterity").value) || 10,
      Constitution: parseInt(document.getElementById("constitution").value) || 10,
      Intelligence: parseInt(document.getElementById("intelligence").value) || 10,
      Wisdom: parseInt(document.getElementById("wisdom").value) || 10,
      Charisma: parseInt(document.getElementById("charisma").value) || 10
    }
  };
  renderCharacter(customCharacter);
});

