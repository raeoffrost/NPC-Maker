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
            "Check this shit out",
            "This one is fucking crazy",
            "Have you heard of"
        ],
    
        response: [
            "Already fucking seen one",
            "Give me a-fucking-nother one",
            "Don't really give a fuck"
        ],
    
        template: [`${npc} was born @birthplace, and was raised by @parentage. Their family lived a @familyLifestyle livestyle at first then ended up living @childhoodHome. During their early years, ${npc} experienced life as a @background.  
            As they grew older, ${npc} took up work as a @occupation. Over the course of their life, they encountered several significant events that shaped their character.  
            ${npc}’s personality was most affected by these two life events. @lifeEvent1 @lifeEvent2`  
            ],
        birthplace: [
            "at home",
            "at the home of a family friend",
            "at the home of a healer",
            "at the home of a midwife",
            "in a carriage",
            "in a cart",
            "in a wagon",
            "in a barn",
            "in a shed",
            "in a cave",
            "in a field",
            "in a forest",
            "in a temple",
            "on a battlefield",
            "in an alley",
            "on the street",
            "in a brothel",
            "in a tavern",
            "in an inn",
            "in a castle",
            "in a keep",
            "in a tower",
            "in a palace",
            "in a sewer",
            "in a rubbish heap",
            "among people of a different race",
            "on board a ship",
            "in a prison",
            "in the HQ of a secret organization",
            "in a sage's laboratory",
            "in the Feywild",
            "in the Shadowfell",
            "on the Astral Plane",
            "on the Ethereal Plane",
            "on an Inner Plane",
            "on an Outer Plane"
        ],
        parentage: [
            "themselves",
            "an Institution",
            "a Temple",
            "an Orphanage",
            "a guardian",
            "an aunt",
            "an uncle",
            "an aunt and uncle",
            "a grandparent",
            "grandparents",
            "an adoptive family",
            "a single father",
            "a single Stepfather",
            "a single mother ",
            "a single stepmother",
            "a mother and father"
        ],
        familyLifestyle: [
            "wretched",
            "squalid",
            "poor",
            "modest",
            "comfortable",
            "wealthy",
            "aristocratic"
        ],
        childhoodHome: [
            "in the streets",
            "in a rundown shack",
            "without permanent residence",
            "in an encampment",
            "in a treehouse",
            "in a village in the wilderness",
            "in a rundown apartment",
            "in a beautiful apartment",
            "in a small house",
            "in a large house",
            "in a mansion",
            "in a small house",
            "in a large house",
            "in a mansion",
            "in a palace",
            "in a castle"
        ],
        background: [
            "criminal",
            "spy",
            "entertainer",
            "gladiator",
            "folk hero",
            "guild artisan",
            "guild merchant",
            "noble",
            "knight",
            "outlander",
            "sailor",
            "pirate",
            "urchin"
        ],
        occupation: [
            "blacksmith",
            "tailor",
            "merchant",
            "trader",
            "hunter",
            "sailor",
            "cobbler",
            "farmer",
            "maid",
            "bartender",
            "innkeep",
            "steward",
            "butcher",
            "baker",
            "cook",
            "brewer",
            "butler",
            "guide",
            "writer",
            "teacher",
            "bounty hunter"
        ],
        lifeEvent1: [
            `${npc} nearly died. ${npc} has nasty scars on their body, and is missing an ear.`,
            `A friendly wizard gave ${npc} a spell scroll containing one cantrip.`,
            `A Celestial visited ${npc} in their dreams to give a warning of dangers to come.`,
            `${npc} briefly visited the Feywild.`,
            `${npc} briefly visited the Shadowfell.`,
            `A lover disappeared without a trace. ${npc} has been looking for that person ever since.`,
            `A terrible blight in ${npc}'s home community caused crops to fail, and many starved. ${npc} lost a dear friend.`,
            `${npc} was turned into a toad and remained in that form for weeks.`,
            `A dragon held ${npc} as a prisoner for months until adventurers killed it.`,
            `${npc} ran away from a battle to save their life, but still feels shame for their cowardice.`
        ],
        lifeEvent2: [
            `${npc} was terribly frightened by something they encountered and ran away, abandoning their companions to their fate.`,
            `${npc} witnessed a powerful spell being cast by a wizard.`,
            `${npc} committed the crime, but nonetheless the authorities found ${npc} not guilty.`,
            `${npc} lost all their possessions in a disaster, and had to rebuild their life.`,
            `For a reason they were never told, ${npc} was exiled from their community. They then either wandered in the wilderness for a time before finding a new place to live.`,
            `${npc} went insane for years and recently regained their sanity. A tic or some other bit of odd behavior still lingers.`,
            `${npc} found a treasure map and has yet to locate the treasure.`,
            `A distant relative recently left ${npc} a stipend that will enable them to live the comfortable lifestyle for at least 20 years.`,
            `${npc} woke up one morning miles from their home, with no idea how they got there.`,
            `${npc} found a portal that they believe leads to another plane of existence.`
        ]
    });
    

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
