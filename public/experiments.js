/* ===== Add new work here. One object per experiment. =====
   This is the only file you edit to add or change work.
   Both the landing page and the lab index read from it.

   category: one of the keys in CATEGORIES below
   status:   running | paused | shipped | archived
   link:     URL string, or "" if nothing public yet           */

const CATEGORIES = {
  games:   "Games",
  itch:    "itch.io",
  tools:   "Tools",
  ai:      "AI Experiments",
  plugins: "Engine Plugins"
};

const EXPERIMENTS = [
  {
    id:"EXP-001", title:"Slingshot Ball Platformer", category:"games", status:"running", date:"2026-10",
    question:"Can switching a ball's material carry a whole precision platformer?",
    blurb:"Vertical climber. Slingshot the ball, swap between squishy and rocky mid-flight, and pick which walls you can smash through.",
    tags:["Godot 4.7","Phaser","TypeScript","Tiled"], link:""
  },
  {
    id:"EXP-002", title:"Mushrealm", category:"itch", status:"running", date:"2026-10",
    question:"How much strategy fits in a three-faction tabletop card game?",
    blurb:"A tabletop card game of Trees, Beasts and Mushrooms. Trailer in the works.",
    tags:["Tabletop","Card game"], link:""
  },
  {
    id:"EXP-003", title:"Legends of Orisha: Blood and Water", category:"games", status:"running", date:"2027",
    question:"What does a Yoruba-myth action-adventure feel like in UE5?",
    blurb:"Dimension11's flagship. Third-person action-adventure rooted in Yoruba mythology, built with ID@Xbox.",
    tags:["Unreal Engine 5","C++","GAS"], link:""
  }
];
