function updateName(){
    let name = document.getElementById("name").value || "NPC";
    return name;
}

$(function() {

    const npc = updateName();
    // Populate using an object literal

    WTF.init({
        heading: [
            "It's a fucking",
            "Check this shit out, a fucking"
        ],
    
        response: [
            "Already fucking seen one",
            "Give me a-fucking-nother one",
            "Don't really give a fuck"
        ],
    
        template: [`${npc} was born @birthplace, and lived with @parentage. Their family lived a @familyLifestyle in @childhoodHome. During their early years, ${npc} experienced life as a @background.  
            As they grew older, ${npc} took up work as a @occupation. Over the course of their life, they encountered several significant events that shaped their character.  
            ${npc}’s personality was most affected by these two life events. @lifeEvent1 @lifeEvent2`  
            ],
        birthplace: [
            "at home",
            "at the home of a family friend",
            "at the home of a healer",
            "at the home of a midwife",
            "Carriage",
            "Cart",
            "Wagon",
            "Barn",
            "Shed",
            "Cave",
            "Field",
            "Forest",
            "Temple",
            "Battlefield",
            "Alley",
            "Street",
            "Brothel",
            "Tavern",
            "Inn",
            "Castle",
            "Keep",
            "Tower",
            "Palace",
            "Sewer",
            "Rubbish heap",
            "Among people of a different race",
            "On board a boat or a ship",
            "In a prison",
            "The HQ of a secret organization",
            "In a sage's laboratory",
            "In the Feywild",
            "In the Shadowfell",
            "On the Astral Plane",
            "On the Ethereal Plane",
            "On an Inner Plane",
            "On an Outer Plane"
        ],
        parentage: [
            "No Family",
            "An Institution",
            "Temple",
            "Orphanage",
            "Guardian",
            "An Aunt",
            "An Uncle",
            "An Aunt and Uncle",
            "A Grandparent",
            "Grandparents",
            "Adoptive family",
            "Single Father",
            "Single Stepfather",
            "Single Mother ",
            "Single Stepmother",
            "Mother and Father"
        ],
        familyLifestyle: [
            "Wretched",
            "Squalid",
            "Poor",
            "Modest",
            "Comfortable",
            "Wealthy",
            "Aristocratic"
        ],
        childhoodHome: [
            "On the streets",
            "Rundown shack",
            "No permanent residence",
            "An Encampment",
            "Treehouse",
            "A village in the wilderness",
            "Rundown Apartment",
            "Beautiful Apartment",
            "Small house",
            "Large house",
            "Mansion",
            "Small house",
            "Large house",
            "Mansion",
            "Palace",
            "Castle"
        ],
        background: [
            "Criminal, often spending time picking pockets.",
            "Spy, often spending time .",
            "Entertainer, often spending time .",
            "Gladiator, often spending time .",
            "Folk Hero, often spending time .",
            "Guild Artisan, often spending time .",
            "Guild Merchant, often spending time .",
            "Noble, often spending time .",
            "Knight, often spending time .",
            "Outlander, often spending time hunting in the deep woods.",
            "Sailor, often spending time on the high seas.",
            "Pirate, often spending time on the high seas.",
            "Urchin, often spending time scavenging the streets for food."
        ],
        occupation: [
            "Blacksmith",
            "Tailor",
            "Merchant",
            "Trader",
            "Hunter",
            "Sailor",
            "Cobbler",
            "Farmer",
            "Maid",
            "Bartender",
            "Innkeep",
            "Steward",
            "Butcher",
            "Baker",
            "Cook"
        ],
        lifeEvent1: [
            `${npc} nearly died. ${npc} has nasty scars on their body, and is missing an ear.`,
            `A friendly wizard gave ${npc} a spell scroll containing one cantrip.`,
            `A Celestial visited ${npc} in their dreams to give a warning of dangers to come.`
        ],
        lifeEvent2: [
            `${npc} was terribly frightened by something they encountered and ran away, abandoning their companions to their fate.`,
            `${npc} witnessed a powerful spell being cast by a wizard.`,
            `${npc} committed the crime, but nonetheless the authorities found ${npc} not guilty.`
        ]
    });
    

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});