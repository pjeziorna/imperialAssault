'use strict';
var mongoose = require('mongoose');

var mock = [{
  "_id" : "ARMED_OPERATION",
  "missionType": "Ally",
  "title" : "Armed and Operation",
  "rebelVictoryBonus" : {
  "credits" : 0,
    "other" : "Rebel Saboteur Ally"
},
  "empireVictoryBonus" : {
  "exp":0,
    "influence" : 2,
    "other" : ""
},
  "additionalRewards" : {
  "exp" : 1,
    "credits" : 100,
    "influence" : 1,
    "other" : ""
},
  "deckType" : "hero"
}, {
  "_id" : "BRACE_FOR_IMPACT",
  "missionType": "Ally",
    "title" : "Brace for Impact",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Rebel Trooper Ally"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "HOMECOMING",
  "missionType": "Ally",
    "title" : "Homecoming",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Luke Skywalker (Hero of the Rebellion)"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "SORRY_ABOUT_THE_MESS",
  "missionType": "Ally",
    "title" : "Sorry About the Mess",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Han Solo (Scoundrel)"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "TARGET_OPPORTUNITY",
  "missionType": "Ally",
    "title" : "Target of Opportunity",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Rebel Saboteurs"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "SPICE_JOB",
  "missionType": "Ally",
    "title" : "The Spice Job",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Chewbacca (Loyal Wookiee)"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "SIMPLE_TASK",
  "missionType": "Reward",
    "title" : "A Simple Task",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Adrenal Implant"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "CELEBRATION",
  "missionType": "Reward",
    "title" : "Celebration",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Intimidation"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "GENEROUS_DONATION",
  "missionType": "Reward",
    "title" : "Generous Donations",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 0,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : "100\u00A2 per 3 claimed tokens; 1 inf. per 3 unclaimed tokens"
  },
  "deckType" : "hero"
}, {
  "_id" : "IMPERIAL_ENTANGLEMENTS",
  "missionType": "Reward",
    "title" : "Imperial Entanglements",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Quickdraw Holster"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 0,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "LUXURY_CRUISE",
  "missionType": "Reward",
    "title" : "Luxury Cruise",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Allied Operations"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 0,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "SYMPATHY_FOR_REBELLION",
  "missionType": "Reward",
    "title" : "Sympathy for the Rebellion",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "The Ways of the Force"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 0,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "VIPERS_DEN",
  "missionType": "Reward",
    "title" : "Viper's Den",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Rebel Recon"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 0,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "TEMPTATION",
  "missionType": "Hero - Diala Passil",
    "title" : "Temptation",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Shu Yen's Lightsaber"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "BRUSHFIRE",
  "missionType": "Hero - Fenn Signis",
    "title" : "Brushfire",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Veteran Prowess"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "INDEBTED",
  "missionType": "Hero - Gaarkhan",
    "title" : "Indebted",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Life Debt"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "OLD_FRIENDS",
  "missionType": "Hero - Gideon Argus",
    "title" : "Old Friends",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Fearless Leader Rebel Trooper Ally"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "HIGH_MOON",
  "missionType": "Hero - Jyn Odan",
    "title" : "High Moon",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Peacemaker"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
}, {
  "_id" : "LOOSE_CANNON",
  "missionType": "Hero - Mak Eshka'rey",
    "title" : "Loose Cannon",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 0,
      "other" : "Shadow Suit"
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 2,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "hero"
},{
  "_id" : "AFTERMATH",
  "missionType": "Introduction",
    "title" : "Aftermath",
    "rebelVictoryBonus" : {
    "exp":0,
      "credits" : 100,
      "other":""
  },
  "empireVictoryBonus" : {
    "exp":0,
      "influence" : 1,
      "other":""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other":""
  },
  "deckType" : "hero"
}, {
  "_id" : "NEW_THREAT",
  "missionType": "Story1",
    "title" : "A New Threat",
    "rebelVictoryBonus" : {
    "exp" : 1,
      "credits" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "exp" : 1,
      "influence" : 0,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : "100\u00A2 OR 1 inf."
  },
  "deckType" : "hero"
}, {
  "_id" : "UNDER_SEIGE",
  "missionType": "Story1",
    "title" : "Under Seige",
    "rebelVictoryBonus" : {
    "credits" : 100,
      "exp" : 1,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 1,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : "1 inf. OR 1exp"
  },
  "deckType" : "hero"
},{
  "_id" : "IMPERIAL_HOSPITALITY",
  "missionType": "Story2",
    "title" : "Imperial Hospitality",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 1,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 1,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : "100\u00A2 or 1 inf."
  },
  "deckType" : "hero"
},{
  "_id" : "FLY_SOLO",
  "missionType": "Story2",
    "title" : "Fly Solo",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 1,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 1,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : "100\u00A2 or 1 inf."
  },
  "deckType" : "hero"
},{
  "_id" : "INCOMING",
  "missionType": "Story3",
    "title" : "Incoming",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 1,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 1,
      "other" : "Captured"
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : "100\u00A2 or 1 inf."
  },
  "deckType" : "hero"
},{
  "_id" : "DRAWN_IN",
  "missionType": "Story3",
    "title" : "Drawn In",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 1,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 1,
      "other" : "Captured"
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : "100\u00A2 or 1 inf."
  },
  "deckType" : "hero"
},{
  "_id" : "CHAIN_OF_COMMAND",
  "missionType": "Story4",
    "title" : "Chain Of Command",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 1,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 1,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : "100\u00A2 or 1 inf."
  },
  "deckType" : "hero"
},{
  "_id" : "THE_SOURCE",
  "missionType": "Story4",
    "title" : "The Source",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 1,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 1,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : "100\u00A2 or 1 inf."
  },
  "deckType" : "hero"
},{
  "_id" : "LAST_STAND",
  "missionType": "Finale",
    "title" : "Last Stand",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 0,
      "other" : "Rebel Win"
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 1,
      "other" : "Empire Wins"
  },
  "additionalRewards" : {
    "exp" : 0,
      "credits" : 0,
      "influence" : 0,
      "other" : ""
  },
  "deckType" : "hero"
},{
  "_id" : "DESPERATE_HOUR",
  "missionType": "Finale",
    "title" : "Desperate Hour",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 0,
      "other" : "Rebel Win"
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 1,
      "other" : "Empire Wins"
  },
  "additionalRewards" : {
    "exp" : 0,
      "credits" : 0,
      "influence" : 0,
      "other" : ""
  },
  "deckType" : "hero"
},{
  "_id" : "BREAKING_POINT",
  "missionType": "Reward",
    "title" : "Breaking Point",
    "rebelVictoryBonus" : {
    "credits" : 100,
      "exp" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 0,
      "other" : "Supply Deficit"
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "empire"
},{
  "_id" : "MEANS_OF_PRODUCTION",
  "missionType": "Reward",
    "title" : "Means of Production",
    "rebelVictoryBonus" : {
    "credits" : 100,
      "exp" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 0,
      "other" : "Imperial Industry"
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "empire"
},{
  "_id" : "DARK_OBSESSION",
  "missionType": "Villain",
    "title" : "Dark Obsession",
    "rebelVictoryBonus" : {
    "credits" : 100,
      "exp" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 0,
      "other" : "Darth Vader (Lord of the Sith)"
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "empire"
},{
  "_id" : "BINARY_REVOLUTION",
  "missionType": "Villain",
    "title" : "Binary Revolution",
    "rebelVictoryBonus" : {
    "credits" : 100,
      "exp" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 0,
      "other" : "IG-88 (Assassin Droid)"
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "empire"
},{
  "_id" : "FOREST_AMBUSH",
  "missionType": "Villain",
    "title" : "Forest Ambush",
    "rebelVictoryBonus" : {
    "credits" : 100,
      "exp" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 0,
      "other" : "General Weiss (Field Commander)"
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "empire"
},{
  "_id" : "INFECTION",
  "missionType": "Villain",
    "title" : "Infection",
    "rebelVictoryBonus" : {
    "credits" : 100,
      "exp" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 0,
      "other" : "Imperial Guard Champion"
  },
  "additionalRewards" : {
    "exp" : 1,
      "credits" : 100,
      "influence" : 1,
      "other" : ""
  },
  "deckType" : "empire"
},{
  "_id" : "CAPTURED",
  "missionType": "Forced",
    "title" : "Captured",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 2,
      "exp" : 0,
      "other" : ""
  },
  "additionalRewards" : {
    "exp" : 0,
      "credits" : 0,
      "influence" : 0,
      "other" : ""
  },
  "deckType" : "empire"
},{
  "_id" : "IMPOUNDED",
  "missionType": "Forced (Reward)",
    "title" : "Impounded",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 0,
      "other" : "Special Operations"
  },
  "additionalRewards" : {
    "exp" : 0,
      "credits" : 0,
      "influence" : 0,
      "other" : ""
  },
  "deckType" : "empire"
},{
  "_id" : "WANTED",
  "missionType": "Forced (Reward)",
    "title" : "Wanted",
    "rebelVictoryBonus" : {
    "credits" : 0,
      "exp" : 0,
      "other" : ""
  },
  "empireVictoryBonus" : {
    "influence" : 0,
      "exp" : 0,
      "other" : "Old Wounds"
  },
  "additionalRewards" : {
    "exp" : 0,
      "credits" : 0,
      "influence" : 0,
      "other" : ""
  },
  "deckType" : "empire"
}];

module.exports = mock;
