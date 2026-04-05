export type SkillMethod = {
  levels: string;
  method: string;
  xpPerAction?: string;
  xpPerHour: string;
  cost: string;
  notes: string;
};

export type SkillData = {
  slug: string;
  name: string;
  emoji: string;
  cap: number;
  category: "combat" | "gathering" | "artisan" | "support";
  color: string;
  description: string;
  unlockQuest?: string;
  priority: number;
  keyMilestones: { level: number; unlock: string; why: string }[];
  methods: SkillMethod[];
  tips: string[];
};

export const skills: SkillData[] = [
  // ── COMBAT SKILLS ──────────────────────────────────────────────────────
  {
    slug: "attack",
    name: "Attack",
    emoji: "\u2694\uFE0F",
    cap: 120,
    category: "combat",
    color: "red",
    description:
      "Determines your melee accuracy and which weapons you can wield. Train alongside Strength through Slayer for best efficiency.",
    priority: 3,
    keyMilestones: [
      { level: 60, unlock: "Dragon weapons", why: "First big melee upgrade" },
      { level: 70, unlock: "Abyssal Whip", why: "Iconic T70 weapon, cheap and strong" },
      { level: 75, unlock: "Godswords", why: "T75 two-handed melee, strong special attacks" },
      { level: 80, unlock: "Chaotic Rapier", why: "T80 from Dungeoneering, free but requires tokens" },
      { level: 85, unlock: "Drygores", why: "T90 dual wield, massive DPS jump" },
      { level: 90, unlock: "Noxious Scythe", why: "T90 halberd range, best Slayer weapon" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Waterfall Quest (skip to 30) or Lumbridge Catacombs",
        xpPerHour: "Instant / 15-20K",
        cost: "Free",
        notes:
          "Waterfall Quest gives 13,750 Attack + Strength XP with zero requirements. Best early skip in the game.",
      },
      {
        levels: "30-50",
        method: "Slayer tasks from Turael/Jacquelyn",
        xpPerHour: "20-35K",
        cost: "Free",
        notes:
          "Train Attack through Slayer to double-dip XP. Use the best Adamant/Rune weapon you can equip.",
      },
      {
        levels: "50-70",
        method: "Fire Giants / Slayer tasks",
        xpPerHour: "40-60K",
        cost: "Free",
        notes:
          "Fire Giants in Waterfall Dungeon are solid AFK. Granite Maul at 50 or Dragon Longsword at 60.",
      },
      {
        levels: "70-90",
        method: "Abyssal Demons / GWD1 bossing / Slayer",
        xpPerHour: "80-150K",
        cost: "Free",
        notes:
          "Abyssal Whip at 70 is a huge upgrade. GWD1 bosses are great money + XP. Always use the best power armour.",
      },
      {
        levels: "90-120",
        method: "GWD2 / Elite Dungeons / High-level Slayer",
        xpPerHour: "150-400K",
        cost: "Free",
        notes:
          "Noxious Scythe at 90 is the best Slayer weapon. Elite Dungeons give 300K+ combat XP/hr with good groups.",
      },
    ],
    tips: [
      "Do Waterfall Quest immediately for a free skip to level 30 Attack and Strength.",
      "Always train through Slayer - never grind Attack at a single monster.",
      "Use Revolution++ combat mode so abilities fire automatically.",
      "Switch between Attack XP and Strength XP mode in combat settings to level them evenly.",
    ],
  },
  {
    slug: "strength",
    name: "Strength",
    emoji: "\uD83D\uDCAA",
    cap: 120,
    category: "combat",
    color: "red",
    description:
      "Determines your melee damage output. Train at the same spots as Attack but switch to Strength XP mode in combat settings.",
    priority: 4,
    keyMilestones: [
      { level: 30, unlock: "Waterfall Quest skip", why: "Free 13,750 Strength XP from the quest" },
      { level: 60, unlock: "Dragon gear access", why: "Can wear Dragon armour pieces" },
      { level: 99, unlock: "Strength Cape", why: "Provides a 2% damage boost while worn" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Waterfall Quest (instant skip to 30)",
        xpPerHour: "Instant",
        cost: "Free",
        notes:
          "Same quest that levels Attack. Both skills hit 30 from one quest with no combat required.",
      },
      {
        levels: "30-50",
        method: "Slayer tasks (Strength XP mode)",
        xpPerHour: "20-35K",
        cost: "Free",
        notes:
          "Toggle combat XP to Strength in settings. Use the same Slayer masters as Attack.",
      },
      {
        levels: "50-70",
        method: "Fire Giants / Slayer tasks (Strength XP mode)",
        xpPerHour: "40-60K",
        cost: "Free",
        notes:
          "Continue alternating between Attack and Strength XP to keep them roughly even.",
      },
      {
        levels: "70-90",
        method: "Abyssal Demons / GWD1 / Slayer",
        xpPerHour: "80-150K",
        cost: "Free",
        notes:
          "Best trained passively. Focus on keeping Strength within 5 levels of Attack.",
      },
      {
        levels: "90-120",
        method: "GWD2 / Elite Dungeons / High-level Slayer",
        xpPerHour: "150-400K",
        cost: "Free",
        notes:
          "At high levels the XP difference between Attack and Strength is negligible. Just Slay.",
      },
    ],
    tips: [
      "Never grind Strength separately - always combine with Slayer.",
      "Waterfall Quest is the single best early-game quest for melee combat.",
      "Strength only affects melee damage, not accuracy. Keep Attack equal or higher.",
    ],
  },
  {
    slug: "defence",
    name: "Defence",
    emoji: "\uD83D\uDEE1\uFE0F",
    cap: 120,
    category: "combat",
    color: "blue",
    description:
      "Determines which armour you can wear. Train last among melee stats - use defensive mode during Slayer once Attack and Strength are high.",
    priority: 5,
    keyMilestones: [
      { level: 40, unlock: "Rune armour", why: "Solid early-game tank gear" },
      { level: 50, unlock: "Granite armour", why: "Budget melee power armour" },
      { level: 60, unlock: "Dragon armour", why: "T60 power armour" },
      { level: 70, unlock: "Bandos / Armadyl armour", why: "T70 power armour - your go-to for a long time" },
      { level: 80, unlock: "Torva armour", why: "T80 melee power armour from Nex" },
      { level: 90, unlock: "Malevolent armour", why: "T90 melee power armour, degrades to dust" },
    ],
    methods: [
      {
        levels: "1-40",
        method: "Train passively during early quests and Slayer",
        xpPerHour: "15-30K",
        cost: "Free",
        notes:
          "Do NOT train Defence first. Get Attack and Strength to 50+ before switching to Defence XP.",
      },
      {
        levels: "40-70",
        method: "Slayer tasks using defensive mode",
        xpPerHour: "30-60K",
        cost: "Free",
        notes:
          "Defensive mode splits XP between Defence and Constitution. Slower but you need the armour tiers.",
      },
      {
        levels: "70-90",
        method: "Slayer / GWD1 with Defence XP mode",
        xpPerHour: "60-120K",
        cost: "Free",
        notes:
          "Once you hit 70 Defence, buy Bandos armour immediately. It is the best value armour in the game.",
      },
      {
        levels: "90-120",
        method: "High-level Slayer and bossing",
        xpPerHour: "120-300K",
        cost: "Free",
        notes:
          "Defence levels beyond 99 give small HP and armour bonuses. Not a priority to rush to 120.",
      },
    ],
    tips: [
      "Always prioritize Attack and Strength before Defence.",
      "Buy Bandos armour the moment you hit 70 Defence - it is cheap and lasts forever.",
      "Power armour (damage bonus) is always better than Tank armour in RS3.",
    ],
  },
  {
    slug: "constitution",
    name: "Constitution",
    emoji: "\u2764\uFE0F",
    cap: 120,
    category: "combat",
    color: "red",
    description:
      "Your hit points. Trains passively with all combat. Every 10 Constitution levels gives a noticeable HP increase.",
    priority: 29,
    keyMilestones: [
      { level: 10, unlock: "1000 HP", why: "Base HP pool" },
      { level: 50, unlock: "5000 HP", why: "Can survive most mid-game content" },
      { level: 92, unlock: "Halfway to 99", why: "92 is half the total XP to 99 in RS3" },
      { level: 99, unlock: "9900 HP", why: "Max HP at 99" },
    ],
    methods: [
      {
        levels: "1-120",
        method: "Trains automatically from all combat",
        xpPerHour: "Passive",
        cost: "Free",
        notes:
          "You cannot directly train Constitution. It gains XP equal to 1/3 of all combat XP earned. It will always be your highest combat stat.",
      },
    ],
    tips: [
      "Constitution is 100% passive. Never worry about training it separately.",
      "Every combat style contributes Constitution XP equally.",
      "Higher Constitution means higher base HP and faster natural regeneration.",
    ],
  },
  {
    slug: "ranged",
    name: "Ranged",
    emoji: "\uD83C\uDFF9",
    cap: 120,
    category: "combat",
    color: "green",
    description:
      "Ranged combat style. Strong against Magic-users, uses bows and crossbows. One of the best styles for bossing due to safe distance.",
    priority: 6,
    keyMilestones: [
      { level: 30, unlock: "Dorgeshuun Crossbow", why: "Cheap T30 weapon with bone bolts (1gp each)" },
      { level: 60, unlock: "Karil's Crossbow", why: "T60 Barrows weapon, affordable" },
      { level: 70, unlock: "Armadyl Crossbow", why: "T70 crossbow from GWD1" },
      { level: 80, unlock: "Ascension Crossbows", why: "T80 dual-wield crossbows, great DPS" },
      { level: 90, unlock: "Noxious Longbow", why: "T90 two-hand bow from Araxxor" },
      { level: 92, unlock: "Eldritch Crossbow", why: "T92 special crossbow from Ambassador" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Training bow + Troll Brutes or Lumbridge Catacombs",
        xpPerHour: "10-20K",
        cost: "Free",
        notes:
          "Use the free training bow and arrows from the combat tutor. Kill trolls north of Burthorpe.",
      },
      {
        levels: "30-70",
        method: "Dorgeshuun Crossbow + Bone Bolts + Slayer",
        xpPerHour: "30-60K",
        cost: "Low",
        notes:
          "Bone bolts cost 1gp each, making this essentially free. Great budget option through Slayer.",
      },
      {
        levels: "70-90",
        method: "Armadyl gear + Slayer / GWD1",
        xpPerHour: "80-150K",
        cost: "Medium",
        notes:
          "Buy Armadyl armour at 70 Defence. Royal Crossbow at 80 is free from QBD.",
      },
      {
        levels: "90-120",
        method: "Sirenic armour + Elite Content / Slayer",
        xpPerHour: "150-400K",
        cost: "High",
        notes:
          "Noxious Longbow or Ascension Crossbows + Sirenic armour. Best for many endgame bosses.",
      },
    ],
    tips: [
      "Dorgeshuun Crossbow with bone bolts is the most cost-effective weapon in early-game.",
      "Always train Ranged through Slayer for double XP value.",
      "Ranged is excellent for safe-spotting bosses from distance.",
      "Buy Royal Crossbow at 80 Ranged - it is free from the Queen Black Dragon fight.",
    ],
  },
  {
    slug: "magic",
    name: "Magic",
    emoji: "\uD83E\uDE84",
    cap: 120,
    category: "combat",
    color: "blue",
    description:
      "Magic combat and utility spells. Strong against melee users. Also provides teleports, alchemy, and enchanting.",
    priority: 7,
    keyMilestones: [
      { level: 60, unlock: "God Staff", why: "T60 staff from Mage Arena" },
      { level: 70, unlock: "Staff of Light", why: "T70 staff, drops from Spiritual Mages" },
      { level: 75, unlock: "Polypore Staff", why: "T75 built-in spell, no rune cost" },
      { level: 80, unlock: "Chaotic Staff", why: "T80 from Dungeoneering" },
      { level: 85, unlock: "Camel Staff", why: "T85 from Camel Warriors" },
      { level: 90, unlock: "Noxious Staff", why: "T90 from Araxxor, best non-elite weapon" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Strike spells + Lumbridge Catacombs",
        xpPerAction: "5-11 XP",
        xpPerHour: "10-20K",
        cost: "Low",
        notes:
          "Buy runes from rune shops. Air staff + mind runes for early levels. Combat Academy gives free runes.",
      },
      {
        levels: "30-60",
        method: "Bolt spells + Slayer tasks",
        xpPerAction: "22-42 XP",
        xpPerHour: "30-50K",
        cost: "Low",
        notes:
          "Use bolt spells on Slayer assignments. Chaos runes are cheap. Staff of Air saves air runes.",
      },
      {
        levels: "60-80",
        method: "Burst/Barrage spells in Abyss or Slayer",
        xpPerHour: "100-250K",
        cost: "Medium",
        notes:
          "AoE spells in the Abyss are extremely fast XP. Expensive but the fastest Magic training method.",
      },
      {
        levels: "80-120",
        method: "High-level Slayer + Bossing",
        xpPerHour: "150-400K",
        cost: "Free",
        notes:
          "At this point Magic training is passive through Slayer and bossing. Focus on unlocking Ancient Magicks.",
      },
    ],
    tips: [
      "Complete Desert Treasure for Ancient Magicks - the best combat spellbook.",
      "High Alchemy is not a good training method anymore. Use combat spells.",
      "Polypore Staff at 75 has built-in spells with no rune cost - great budget option.",
      "Magic is the best style for AoE Slayer tasks thanks to burst/barrage spells.",
    ],
  },
  {
    slug: "necromancy",
    name: "Necromancy",
    emoji: "\uD83D\uDC80",
    cap: 120,
    category: "combat",
    color: "purple",
    description:
      "The newest combat style (2023). Completely self-contained progression through the Kili Row quest chain. Most beginner-friendly combat style.",
    priority: 1,
    keyMilestones: [
      { level: 20, unlock: "T20 Death Guard + Skull Lantern", why: "First weapon upgrade from tutorial" },
      { level: 40, unlock: "T40 gear", why: "Armoured Phantoms become trainable" },
      { level: 60, unlock: "T60 gear", why: "Well of Souls access, strong AoE" },
      { level: 70, unlock: "T70 Deathdealer gear", why: "Power armour equivalent" },
      { level: 80, unlock: "T80 gear", why: "Comparable to Chaotic-tier" },
      { level: 90, unlock: "T90 gear", why: "First Raids-tier Necromancy gear" },
      { level: 95, unlock: "T95 Death Guard", why: "Best-in-slot Necromancy weapon from Rasial" },
    ],
    methods: [
      {
        levels: "1-20",
        method: "Lumbridge Catacombs (tutorial quests)",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Follow the tutorial. It guides you through the entire early Necromancy experience. Cannot be skipped.",
      },
      {
        levels: "20-40",
        method: "Kili Row quest chain + rituals",
        xpPerHour: "25-40K",
        cost: "Free",
        notes:
          "Continue the Necromancy quest chain. Each quest upgrades your gear and teaches new abilities.",
      },
      {
        levels: "40-60",
        method: "Armoured Phantoms",
        xpPerHour: "50-80K",
        cost: "Free",
        notes:
          "Armoured Phantoms in the City of Um are great AFK training. Good for learning Necromancy rotation.",
      },
      {
        levels: "60-80",
        method: "Well of Souls + Slayer tasks",
        xpPerHour: "80-150K",
        cost: "Free",
        notes:
          "Well of Souls offers AoE Necromancy training. Combine with Slayer for maximum efficiency.",
      },
      {
        levels: "80-99",
        method: "Abyssal Lords + high-level Slayer",
        xpPerHour: "150-250K",
        cost: "Free",
        notes:
          "Abyssal Lords drop valuable items. Great XP and GP per hour with Necromancy.",
      },
      {
        levels: "99-120",
        method: "Rasial boss + elite Slayer tasks",
        xpPerHour: "250-400K",
        cost: "Free",
        notes:
          "Rasial drops the T95 Death Guard and Omni Guard. Farm him for both XP and best-in-slot gear.",
      },
    ],
    tips: [
      "Start Necromancy as your very first combat style - it is the most beginner-friendly.",
      "Gear upgrades come from quests, not drops. Follow the Kili Row quest chain.",
      "Necromancy does not use ammunition, making it very cheap to train.",
      "The Necromancy tutorial is mandatory - there is no way to skip it.",
    ],
  },
  {
    slug: "prayer",
    name: "Prayer",
    emoji: "\uD83D\uDE4F",
    cap: 99,
    category: "combat",
    color: "gold",
    description:
      "Provides powerful combat prayers that boost damage, accuracy, and defence. Soul Split at 92 is a game-changer. Expensive to train but essential.",
    priority: 8,
    keyMilestones: [
      { level: 43, unlock: "Protection Prayers", why: "Block 100% of one combat style. Essential for bossing." },
      { level: 70, unlock: "Piety / Rigour / Augury", why: "Best non-curses combat prayers. Major DPS boost." },
      { level: 92, unlock: "Soul Split", why: "Heals you based on damage dealt. THE most important unlock." },
      { level: 95, unlock: "Turmoil / Anguish / Torment", why: "Best DPS prayers in the game" },
      { level: 99, unlock: "T99 prayers", why: "Malevolence, Desolation, Affliction - final upgrades" },
    ],
    methods: [
      {
        levels: "1-43",
        method: "Bury bones from combat / quests",
        xpPerHour: "5-15K",
        cost: "Free",
        notes:
          "Bury every bone you get from Slayer. Do Restless Ghost quest for instant Prayer XP.",
      },
      {
        levels: "43-70",
        method: "Dragon bones on Gilded Altar",
        xpPerAction: "252 XP",
        xpPerHour: "200-350K",
        cost: "High",
        notes:
          "Use a Gilded Altar in a player-owned house with both burners lit. Buy Dragon bones on GE.",
      },
      {
        levels: "70-92",
        method: "Frost Dragon bones on Gilded Altar",
        xpPerAction: "630 XP",
        xpPerHour: "400K+",
        cost: "Very High",
        notes:
          "Frost Dragon bones are expensive but extremely fast. This is the standard path to Soul Split.",
      },
      {
        levels: "92-99",
        method: "Frost Dragon bones or Cleansing Crystals",
        xpPerHour: "300-450K",
        cost: "Very High",
        notes:
          "Continue with bones if you want speed. Cleansing Crystals in Prifddinas are an AFK alternative.",
      },
    ],
    tips: [
      "Soul Split (92) is the single most important unlock in the game. Rush it.",
      "Use a Gilded Altar with both burners lit for 3.5x bone XP.",
      "Cleansing Crystals in Prifddinas are a good AFK alternative if you have the city unlocked.",
      "Protect from Melee/Ranged/Magic prayers at 43 trivialize many quests and bosses.",
    ],
  },
  {
    slug: "summoning",
    name: "Summoning",
    emoji: "\uD83D\uDC3E",
    cap: 99,
    category: "combat",
    color: "gold",
    description:
      "Summon familiar companions that fight, heal, or carry items for you. Requires charm collecting from combat. Train in bulk at Taverley Obelisk.",
    unlockQuest: "Wolf Whistle",
    priority: 9,
    keyMilestones: [
      { level: 67, unlock: "War Tortoise", why: "Carries 18 extra items - great for Slayer" },
      { level: 68, unlock: "Bunyip", why: "Passive healing every 15 seconds" },
      { level: 88, unlock: "Unicorn Stallion", why: "Best healing familiar, heals 15% max HP on scroll" },
      { level: 96, unlock: "Pack Yak", why: "Carries 30 items and can bank them. Best BoB familiar." },
      { level: 99, unlock: "Steel Titan", why: "Highest DPS combat familiar" },
    ],
    methods: [
      {
        levels: "1-16",
        method: "Gold charms + lowest pouch available",
        xpPerHour: "Varies",
        cost: "Low",
        notes:
          "Gold charms are the most common. Use them for early levels. Save better charms for later.",
      },
      {
        levels: "16-40",
        method: "Green charms + Granite Lobster / Ibis pouches",
        xpPerHour: "Varies",
        cost: "Medium",
        notes:
          "Green charms give decent XP. Buy secondary ingredients from the GE.",
      },
      {
        levels: "40-96",
        method: "Crimson charms + best available pouch",
        xpPerHour: "300-500K (during DXP)",
        cost: "Medium",
        notes:
          "Crimson charms are the bread and butter. Collect from Slayer, craft in bulk at Taverley.",
      },
      {
        levels: "96-99",
        method: "Blue charms + Pack Yak pouches",
        xpPerHour: "500K+",
        cost: "High",
        notes:
          "Blue charms give the most XP per charm. Use them for the final push to 99.",
      },
    ],
    tips: [
      "NEVER discard charms. They are untradeable and only come from combat.",
      "Save all your charms for Double XP Week - Summoning is the best DXP skill.",
      "Waterfiends drop the most Crimson charms per hour if you need to farm them.",
      "Pack Yak (96) is a mandatory unlock for high-level bossing.",
    ],
  },
  {
    slug: "slayer",
    name: "Slayer",
    emoji: "\uD83D\uDDE1\uFE0F",
    cap: 120,
    category: "combat",
    color: "red",
    description:
      "Kill assigned monsters for XP, drops, and GP. The core combat training skill - always have a Slayer task active when doing combat.",
    priority: 2,
    keyMilestones: [
      { level: 55, unlock: "Broad arrows", why: "Cheap Fletching training material" },
      { level: 75, unlock: "Gargoyles", why: "Good GP task, requires Rock Hammer" },
      { level: 85, unlock: "Abyssal Demons", why: "Drop Abyssal Whip, great AFK XP" },
      { level: 90, unlock: "Dark Beasts", why: "Good XP task, AFK-friendly" },
      { level: 95, unlock: "Rune Dragons", why: "Excellent GP per hour" },
      { level: 99, unlock: "Soulgazers", why: "Drop Hexhunter Bow (very rare)" },
      { level: 114, unlock: "Corrupted Creatures", why: "Top-tier Slayer XP and GP" },
      { level: 117, unlock: "Dinosaurs (Anachronia)", why: "Endgame Slayer with big drops" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Turael / Jacquelyn tasks (Burthorpe / Lumbridge)",
        xpPerHour: "10-20K",
        cost: "Free",
        notes:
          "Starting Slayer masters. Quick tasks, low-level monsters. Great for building up charms.",
      },
      {
        levels: "30-50",
        method: "Mazchna tasks (Canifis)",
        xpPerHour: "20-40K",
        cost: "Free",
        notes:
          "Step up from Turael. Slightly harder monsters, better XP. Requires Priest in Peril quest.",
      },
      {
        levels: "50-70",
        method: "Duradel tasks (Shilo Village)",
        xpPerHour: "40-80K",
        cost: "Free",
        notes:
          "Duradel assigns profitable monsters. Use Slayer points to block bad tasks.",
      },
      {
        levels: "70-85",
        method: "Kuradal tasks (Ancient Cavern)",
        xpPerHour: "80-150K",
        cost: "Free",
        notes:
          "Kuradal has a dungeon with assigned monsters nearby. Efficient for task streaks.",
      },
      {
        levels: "85-99",
        method: "Morvran / Laniakea tasks",
        xpPerHour: "150-300K",
        cost: "Free",
        notes:
          "Best Slayer masters. Assign high-level profitable monsters like Abyssal Demons, Rune Dragons.",
      },
      {
        levels: "99-120",
        method: "High-level only tasks (Laniakea preferred)",
        xpPerHour: "300-600K",
        cost: "Free",
        notes:
          "Post-99 Slayer is extremely profitable. Corrupted Creatures, Dinosaurs, and Soul Devourers.",
      },
    ],
    tips: [
      "ALWAYS have a Slayer task active when doing any combat. Never train combat without one.",
      "Use Slayer points to block tasks you hate and prefer tasks you enjoy.",
      "Slayer helmet provides a 14.5% damage and accuracy boost on task - always wear it.",
      "The Slayer VIP ticket from Cabbage Facepunch doubles your Slayer task options.",
    ],
  },

  // ── GATHERING SKILLS ───────────────────────────────────────────────────
  {
    slug: "mining",
    name: "Mining",
    emoji: "\u26CF\uFE0F",
    cap: 99,
    category: "gathering",
    color: "orange",
    description:
      "Mine ores from rocks around the world. The 2019 Mining & Smithing rework made this skill AFK-friendly with stamina-based mechanics.",
    priority: 15,
    keyMilestones: [
      { level: 30, unlock: "Coal rocks", why: "Used in Steel+ Smithing" },
      { level: 55, unlock: "Mithril ore", why: "Better AFK mining spot" },
      { level: 70, unlock: "Adamantite ore", why: "Good money and Smithing material" },
      { level: 80, unlock: "Runite ore", why: "Profitable ore to mine" },
      { level: 89, unlock: "Seren Stones (Prifddinas)", why: "Best AFK mining XP in the game" },
    ],
    methods: [
      {
        levels: "1-15",
        method: "Copper / Tin ore at Lumbridge Mine",
        xpPerAction: "17.5 XP",
        xpPerHour: "5-10K",
        cost: "Free",
        notes: "Mine at the south-east Lumbridge mine. Very quick to pass through.",
      },
      {
        levels: "15-30",
        method: "Iron ore at Al Kharid Mine",
        xpPerAction: "35 XP",
        xpPerHour: "15-25K",
        cost: "Free",
        notes: "Al Kharid mine is close to a bank. Iron never depletes, making it consistent.",
      },
      {
        levels: "30-70",
        method: "Iron ore continuous mining",
        xpPerHour: "25-40K",
        cost: "Free",
        notes:
          "Iron is the best XP until high levels due to fast respawn. AFK with Juju Mining Potion at 30.",
      },
      {
        levels: "70-89",
        method: "Granite at Desert Quarry (AFK)",
        xpPerHour: "40-55K",
        cost: "Free",
        notes:
          "Granite quarry south of the Bandit Camp. Bring waterskins. Very AFK with stamina bar.",
      },
      {
        levels: "89-99",
        method: "Seren Stones in Prifddinas",
        xpPerHour: "45-55K",
        cost: "Free",
        notes:
          "Requires Plague's End quest. Most AFK mining method in the game. Click once every 5 minutes.",
      },
    ],
    tips: [
      "Mining is very AFK since the rework. Just keep your stamina bar from depleting.",
      "Seren Stones at 89 are the most AFK training in the game - minimal clicks needed.",
      "Use a Crystal Pickaxe (requires 71 Mining + Song of the Elves) for best results.",
      "Stone spirits from PvM reduce mining costs but are not necessary.",
    ],
  },
  {
    slug: "fishing",
    name: "Fishing",
    emoji: "\uD83C\uDFA3",
    cap: 99,
    category: "gathering",
    color: "blue",
    description:
      "Catch fish from rivers and oceans. Very AFK skill with multiple profitable methods at higher levels. Deep Sea Fishing Hub is the endgame.",
    priority: 16,
    keyMilestones: [
      { level: 40, unlock: "Lobsters", why: "Good food for mid-game combat" },
      { level: 62, unlock: "Monkfish", why: "Requires Swan Song quest, decent food" },
      { level: 68, unlock: "Deep Sea Fishing Hub", why: "Best Fishing location in the game" },
      { level: 80, unlock: "Cavefish", why: "Boosts stats when cooked" },
      { level: 90, unlock: "Rocktails", why: "Best solo food in the game" },
      { level: 93, unlock: "Sailfish", why: "Top-tier combo food for bossing" },
    ],
    methods: [
      {
        levels: "1-20",
        method: "Shrimps / Anchovies at Lumbridge Swamp",
        xpPerAction: "10-40 XP",
        xpPerHour: "5-12K",
        cost: "Free",
        notes: "Grab a small fishing net and head to Lumbridge Swamp fishing spots.",
      },
      {
        levels: "20-40",
        method: "Trout / Salmon at Barbarian Village",
        xpPerAction: "50-70 XP",
        xpPerHour: "15-25K",
        cost: "Free",
        notes: "Fly fishing rod + feathers. Very close to a bank in Edgeville. AFK-friendly.",
      },
      {
        levels: "40-62",
        method: "Lobsters at Karamja",
        xpPerAction: "90 XP",
        xpPerHour: "25-35K",
        cost: "Free",
        notes: "Cage fishing at Karamja dock. Good food drops for Ironmen.",
      },
      {
        levels: "62-76",
        method: "Monkfish at Piscatoris (Swan Song quest)",
        xpPerAction: "120 XP",
        xpPerHour: "30-45K",
        cost: "Free",
        notes: "Requires Swan Song quest completion. Colony has a bank nearby.",
      },
      {
        levels: "68-99",
        method: "Deep Sea Fishing Hub",
        xpPerHour: "40-70K",
        cost: "Free",
        notes:
          "The best overall Fishing location. Random events give bonus XP. Very AFK. Accessible from Fishing Guild.",
      },
      {
        levels: "90-99",
        method: "Rocktails at Living Rock Caverns",
        xpPerAction: "380 XP",
        xpPerHour: "40-60K",
        cost: "Free",
        notes:
          "Rocktails are the best food to sell. Moderate AFK. Living Rock Creatures can be aggressive.",
      },
    ],
    tips: [
      "Deep Sea Fishing Hub at 68 is the best one-stop location for Fishing training.",
      "Fishing is one of the most AFK skills in the game. Great to do while watching videos.",
      "Crystal Fishing Rod from Prifddinas gives bonus XP at higher levels.",
      "Sailfish from Deep Sea Hub are the best bossing food in the game.",
    ],
  },
  {
    slug: "woodcutting",
    name: "Woodcutting",
    emoji: "\uD83E\uDE93",
    cap: 99,
    category: "gathering",
    color: "green",
    description:
      "Chop trees for logs used in Fletching, Firemaking, and Construction. Very AFK skill. Acadia trees in Prifddinas are the endgame method.",
    priority: 17,
    keyMilestones: [
      { level: 30, unlock: "Willow trees", why: "Fast chopping, good early XP" },
      { level: 45, unlock: "Maple trees", why: "Used in Fletching" },
      { level: 60, unlock: "Yew trees", why: "Classic AFK moneymaker" },
      { level: 75, unlock: "Magic trees", why: "Slow but profitable" },
      { level: 85, unlock: "Acadia trees", why: "Best XP with Crystallise in Prifddinas" },
      { level: 94, unlock: "Crystal trees", why: "AFK XP, no logs produced" },
    ],
    methods: [
      {
        levels: "1-15",
        method: "Regular trees anywhere",
        xpPerAction: "25 XP",
        xpPerHour: "5-10K",
        cost: "Free",
        notes: "Chop any regular tree. They are everywhere. Quick to pass through.",
      },
      {
        levels: "15-30",
        method: "Oak trees at Draynor Village",
        xpPerAction: "37.5 XP",
        xpPerHour: "10-18K",
        cost: "Free",
        notes: "Two Oak trees right next to Draynor bank. Very convenient.",
      },
      {
        levels: "30-60",
        method: "Willow then Maple trees",
        xpPerHour: "15-30K",
        cost: "Free",
        notes:
          "Willows near Draynor, Maples at Seers Village. Both are AFK. Drop or bank logs.",
      },
      {
        levels: "60-90",
        method: "Yew trees near Grand Exchange (AFK)",
        xpPerHour: "25-45K",
        cost: "Free",
        notes:
          "Yew trees behind Varrock Palace or at GE. Very AFK. Logs sell for decent money.",
      },
      {
        levels: "85-99",
        method: "Acadia trees in Prifddinas + Crystallise spell",
        xpPerHour: "60-160K",
        cost: "Free",
        notes:
          "Crystallise spell on Acadia trees is the fastest WC XP. Without Crystallise, still 60-80K/hr AFK.",
      },
    ],
    tips: [
      "Woodcutting is extremely AFK. Just click a tree and wait.",
      "Crystal Hatchet is the best hatchet - get it from Prifddinas.",
      "Acadia trees + Crystallise spell is the fastest 99 if you have the Magic level.",
      "Crystal trees at 94 are pure AFK XP with no log drops to manage.",
    ],
  },
  {
    slug: "farming",
    name: "Farming",
    emoji: "\uD83C\uDF31",
    cap: 99,
    category: "gathering",
    color: "green",
    description:
      "Grow herbs, trees, and produce in patches around the world. Unique run-based skill - plant seeds, wait 80 minutes, harvest. Extremely profitable.",
    priority: 12,
    keyMilestones: [
      { level: 32, unlock: "Ranarr herbs", why: "First truly profitable herb to grow" },
      { level: 62, unlock: "Snapdragon herbs", why: "Very profitable herb" },
      { level: 73, unlock: "Lantadyme herbs", why: "Consistent money from herb runs" },
      { level: 82, unlock: "Torstol herbs", why: "Most expensive herb to grow" },
      { level: 85, unlock: "Spirit trees", why: "Free teleport network when planted" },
      { level: 91, unlock: "Morchella mushrooms", why: "Extra farming patch, good money" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Potato / Onion / Cabbage allotment patches",
        xpPerHour: "Runs-based",
        cost: "Free",
        notes:
          "Plant allotments + flowers at every patch. Compost everything. Do a run every 20 min at low level.",
      },
      {
        levels: "30-50",
        method: "Toadflax herbs + Willow trees",
        xpPerHour: "Runs-based",
        cost: "Low",
        notes:
          "Herb runs every 80 minutes. Tree runs every 6-8 hours. Toadflax is cheap to plant.",
      },
      {
        levels: "50-70",
        method: "Lantadyme / Dwarf Weed herbs + Maple / Yew trees",
        xpPerHour: "Runs-based",
        cost: "Medium",
        notes:
          "Tree seeds get expensive. Herb runs are profitable. Do both for balanced XP and GP.",
      },
      {
        levels: "70-99",
        method: "Torstol herbs + Magic / Palm trees + Calquat",
        xpPerHour: "Runs-based",
        cost: "High",
        notes:
          "Magic trees give 13K XP per tree check. Palm trees give 10K. Calquat gives 12K. Daily runs add up fast.",
      },
    ],
    tips: [
      "Farming is a run-based skill - you cannot grind it continuously. Do runs between other activities.",
      "Always use Ultracompost on every patch to maximize yield and prevent disease.",
      "Tree runs are the fastest Farming XP but cost money. Herb runs profit.",
      "Plant Spirit Trees once unlocked - they create a free teleport network.",
    ],
  },
  {
    slug: "hunter",
    name: "Hunter",
    emoji: "\uD83E\uDDA5",
    cap: 99,
    category: "gathering",
    color: "orange",
    description:
      "Track and trap creatures across Gielinor. Profitable at high levels with Grenwalls. Transitions from tedious early game to very rewarding endgame.",
    priority: 18,
    keyMilestones: [
      { level: 53, unlock: "Chinchompas", why: "Decent GP from catching chins" },
      { level: 69, unlock: "Draconic jadinko", why: "Good XP at Herblore Habitat" },
      { level: 77, unlock: "Grenwalls", why: "Best GP from Hunter, great XP" },
      { level: 80, unlock: "Herblore Habitat jadinkos", why: "Diverse training with herb secondaries" },
      { level: 96, unlock: "Ornate tortles", why: "Top-tier XP on Uncharted Isles" },
    ],
    methods: [
      {
        levels: "1-29",
        method: "Crimson swifts + Copper longtails",
        xpPerHour: "5-15K",
        cost: "Free",
        notes:
          "Bird snaring in Feldip Hills. Tedious but quick levels. Move to Copper Longtails at 9.",
      },
      {
        levels: "29-53",
        method: "Swamp lizards",
        xpPerAction: "152 XP",
        xpPerHour: "20-40K",
        cost: "Free",
        notes: "Net trapping at Canifis swamp. More engaging than birds. Bring multiple nets and ropes.",
      },
      {
        levels: "53-77",
        method: "Chinchompas",
        xpPerHour: "40-70K",
        cost: "Profit",
        notes:
          "Catch chinchompas in Feldip Hills. Decent money and good XP. Chin trapping is semi-AFK.",
      },
      {
        levels: "77-99",
        method: "Grenwalls (Tirannwn or Big Chinchompa reward)",
        xpPerHour: "80-120K",
        cost: "Profit",
        notes:
          "Grenwalls drop grenwall spikes worth good GP. Use box traps. Best Hunter money and XP combined.",
      },
    ],
    tips: [
      "Hunter is tedious at low levels but becomes very profitable from 77+.",
      "Big Chinchompa D&D gives bonus Hunter XP and tickets for free grenwall access.",
      "Always use the highest-tier trap you can. More traps = more XP/hr.",
      "Protean traps from Treasure Hunter (legacy) or events are the fastest XP if available.",
    ],
  },
  {
    slug: "divination",
    name: "Divination",
    emoji: "\uD83D\uDD2E",
    cap: 99,
    category: "gathering",
    color: "purple",
    description:
      "Harvest memories and energy from wisps around the world. AFK gathering skill. Required for Invention (80 Divination needed).",
    priority: 13,
    keyMilestones: [
      { level: 50, unlock: "Hall of Memories", why: "Better training location, more engaging" },
      { level: 70, unlock: "Brilliant energy", why: "Good energy to sell" },
      { level: 80, unlock: "Luminous energy + Invention unlock", why: "80 Div required for Invention" },
      { level: 85, unlock: "Radiant energy", why: "Higher tier wisps" },
      { level: 95, unlock: "Incandescent energy", why: "Best energy, most profitable" },
    ],
    methods: [
      {
        levels: "1-50",
        method: "Harvest wisps at each tier (follow the wisp trail)",
        xpPerHour: "10-25K",
        cost: "Free",
        notes:
          "Each tier of wisp has a dedicated location. Harvest memories and convert at the rift. Very AFK.",
      },
      {
        levels: "50-80",
        method: "Hall of Memories (Varrock Dig Site)",
        xpPerHour: "40-60K",
        cost: "Free",
        notes:
          "Better than regular wisps. Requires completion of a short miniquest. More engaging mechanics.",
      },
      {
        levels: "50-99",
        method: "Guthixian Cache (Daily D&D)",
        xpPerHour: "Best XP/time",
        cost: "Free",
        notes:
          "Runs every hour for 10 minutes. Gives massive Divination XP for minimal time. Do this daily.",
      },
      {
        levels: "80-99",
        method: "Incandescent wisps (Tirannwn)",
        xpPerHour: "50-70K",
        cost: "Free",
        notes:
          "Highest level wisps. AFK but slow. Supplement with Guthixian Cache for maximum efficiency.",
      },
    ],
    tips: [
      "Guthixian Cache is the single best Divination XP per time spent. Never skip it.",
      "Divination is required at 80 for Invention. Prioritize it if going for Invention.",
      "Converting memories to enhanced XP is better than converting to energy for money.",
      "Hall of Memories at 50+ is more engaging and faster than regular wisps.",
    ],
  },

  // ── ARTISAN SKILLS ─────────────────────────────────────────────────────
  {
    slug: "cooking",
    name: "Cooking",
    emoji: "\uD83C\uDF73",
    cap: 99,
    category: "artisan",
    color: "orange",
    description:
      "Cook raw food into edible meals. Very fast skill to train. Cook the best food you can without burning for maximum XP. Bonfires reduce burn chance.",
    priority: 19,
    keyMilestones: [
      { level: 30, unlock: "Tuna", why: "Decent food, fast cooking" },
      { level: 43, unlock: "Lobster", why: "Good mid-game food" },
      { level: 62, unlock: "Monkfish", why: "Great food for mid-level PvM" },
      { level: 80, unlock: "Shark", why: "Standard high-level food" },
      { level: 90, unlock: "Rocktail", why: "Best solo food, heals over max HP" },
      { level: 93, unlock: "Sailfish", why: "Top-tier bossing food" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Cook shrimps / trout on range or fire",
        xpPerAction: "30-70 XP",
        xpPerHour: "30-60K",
        cost: "Low",
        notes: "Buy raw fish from GE. Use the Lumbridge range for reduced burn chance.",
      },
      {
        levels: "30-52",
        method: "Tuna / Lobster cooking",
        xpPerAction: "100-120 XP",
        xpPerHour: "80-120K",
        cost: "Low",
        notes: "Buy raw fish, cook at Lumbridge range or portable range. Very fast.",
      },
      {
        levels: "52-80",
        method: "Monkfish / Swordfish cooking",
        xpPerAction: "140-150 XP",
        xpPerHour: "120-180K",
        cost: "Medium",
        notes: "Cooking Gauntlets from Family Crest quest reduce burn rate significantly.",
      },
      {
        levels: "80-90",
        method: "Shark cooking",
        xpPerAction: "210 XP",
        xpPerHour: "150-200K",
        cost: "Medium",
        notes: "Sharks are the standard food. Buy raw, cook, sell cooked for small loss.",
      },
      {
        levels: "90-99",
        method: "Rocktail cooking",
        xpPerAction: "225 XP",
        xpPerHour: "200-280K",
        cost: "Medium",
        notes: "Rocktails heal the most and are always in demand. Small profit possible.",
      },
    ],
    tips: [
      "Cooking is one of the fastest 99s in the game. Can be done in under 15 hours.",
      "Use Cooking Gauntlets from Family Crest quest to stop burning food sooner.",
      "The Lumbridge range has a hidden bonus that reduces burn chance.",
      "Portable ranges from other players give 10% bonus XP - use them at the GE.",
    ],
  },
  {
    slug: "smithing",
    name: "Smithing",
    emoji: "\uD83D\uDD28",
    cap: 99,
    category: "artisan",
    color: "orange",
    description:
      "Smith metal bars into weapons and armour. Reworked in 2019 with new mechanics. The Knight's Sword quest skips the first 29 levels instantly.",
    priority: 14,
    keyMilestones: [
      { level: 29, unlock: "Knight's Sword quest skip", why: "Free skip from level 1 to 29" },
      { level: 40, unlock: "Gold bars (Goldsmith Gauntlets)", why: "Fastest Smithing XP for cheap" },
      { level: 60, unlock: "Mithril items", why: "Mid-tier Smithing products" },
      { level: 70, unlock: "Adamant items", why: "Better Smithing XP" },
      { level: 85, unlock: "Runite items", why: "High-tier Smithing" },
      { level: 89, unlock: "Elder Rune items", why: "Best Smithing products" },
      { level: 99, unlock: "Masterwork armour", why: "T90 melee power armour you can make yourself" },
    ],
    methods: [
      {
        levels: "1-29",
        method: "The Knight's Sword quest (instant skip!)",
        xpPerHour: "Instant",
        cost: "Free",
        notes:
          "This quest gives 12,725 Smithing XP. Skips you straight to level 29. Zero Smithing required.",
      },
      {
        levels: "29-40",
        method: "Iron items at any anvil",
        xpPerHour: "30-50K",
        cost: "Low",
        notes: "Smith iron burial gear at the Artisans Workshop for fastest XP in this range.",
      },
      {
        levels: "40-70",
        method: "Gold ore + Goldsmith Gauntlets at Blast Furnace",
        xpPerAction: "56.2 XP",
        xpPerHour: "100-200K",
        cost: "Medium",
        notes:
          "Goldsmith Gauntlets from Family Crest quest double gold bar XP. Blast Furnace halves coal needed.",
      },
      {
        levels: "70-89",
        method: "Adamant burial items at Artisans Workshop",
        xpPerHour: "100-180K",
        cost: "Medium",
        notes:
          "Burial armour gives 2x XP but consumes the item. Best Smithing XP method per ore.",
      },
      {
        levels: "89-99",
        method: "Elder Rune items (burial sets at Artisans Workshop)",
        xpPerHour: "150-250K",
        cost: "High",
        notes:
          "Elder Rune bars + burial armour. Expensive but very fast. Can also make +5 items for profit.",
      },
    ],
    tips: [
      "Do The Knight's Sword quest before touching Smithing. Free skip to level 29.",
      "Goldsmith Gauntlets + Blast Furnace is the cheapest fast method from 40-70.",
      "Artisans Workshop burial armour gives double XP but you lose the items.",
      "At 99 you can make Masterwork Armour - T90 melee power armour worth millions.",
    ],
  },
  {
    slug: "crafting",
    name: "Crafting",
    emoji: "\uD83E\uDDF5",
    cap: 99,
    category: "artisan",
    color: "gold",
    description:
      "Create jewellery, leather armour, pottery, and glass items. Required at level 80 for Invention. Key money sink skill with clear item progression.",
    priority: 11,
    keyMilestones: [
      { level: 40, unlock: "Gold amulets", why: "Good XP from gold jewellery" },
      { level: 57, unlock: "Green d'hide body", why: "First profitable d'hide armour" },
      { level: 63, unlock: "Red d'hide body", why: "Better XP, moderate cost" },
      { level: 77, unlock: "Black d'hide body", why: "Best XP per hide, 200-300K XP/hr" },
      { level: 80, unlock: "Invention unlock", why: "80 Crafting required for Invention skill" },
    ],
    methods: [
      {
        levels: "1-20",
        method: "Leather items (gloves, boots, bodies)",
        xpPerAction: "13-25 XP",
        xpPerHour: "10-20K",
        cost: "Low",
        notes: "Buy leather and thread from GE. Craft at any spinning wheel or crafting table.",
      },
      {
        levels: "20-40",
        method: "Gold jewellery (bracelets and necklaces)",
        xpPerAction: "30-55 XP",
        xpPerHour: "25-50K",
        cost: "Low",
        notes: "Use a furnace to make gold jewellery. Cut gems first if available for bonus XP.",
      },
      {
        levels: "40-63",
        method: "Gold necklaces or Green d'hide bodies",
        xpPerAction: "55-62 XP",
        xpPerHour: "50-100K",
        cost: "Medium",
        notes:
          "Green d'hide bodies at 57+ are better XP. Buy hides tanned from GE. Use portable crafter if available.",
      },
      {
        levels: "63-77",
        method: "Red d'hide bodies",
        xpPerAction: "78 XP",
        xpPerHour: "150-200K",
        cost: "Medium",
        notes:
          "Buy red dragon leather from GE, craft into bodies. Sell back for partial cost recovery.",
      },
      {
        levels: "77-99",
        method: "Black d'hide bodies",
        xpPerAction: "86 XP",
        xpPerHour: "200-300K",
        cost: "High",
        notes:
          "Best Crafting XP per hour. Buy black dragon leather, craft bodies, sell back. Fast 99.",
      },
    ],
    tips: [
      "Crafting is required at 80 for Invention. Prioritize it if Invention is your goal.",
      "D'hide bodies are the most efficient training method by far. Stick with them from 57+.",
      "Portable crafters give 10% bonus XP - look for them at the GE or W84.",
      "Cut gems for a profitable alternative, though slower than d'hide bodies.",
    ],
  },
  {
    slug: "fletching",
    name: "Fletching",
    emoji: "\uD83C\uDFF9",
    cap: 99,
    category: "artisan",
    color: "green",
    description:
      "Make bows, arrows, and bolts from logs and other materials. One of the cheapest and fastest 99s. Can reach 1M+ XP/hr at high levels.",
    priority: 20,
    keyMilestones: [
      { level: 40, unlock: "Maple shortbows", why: "First decent XP bows to string" },
      { level: 70, unlock: "Yew longbows", why: "Good XP and slight profit potential" },
      { level: 85, unlock: "Elder shortbows", why: "Up to 1M XP/hr - fastest Fletching method" },
    ],
    methods: [
      {
        levels: "1-20",
        method: "Arrow shafts + Bronze arrows",
        xpPerHour: "15-30K",
        cost: "Free",
        notes: "Cut logs into arrow shafts, then add feathers and bronze arrowheads.",
      },
      {
        levels: "20-40",
        method: "Mithril bolts or Oak shortbows (stringing)",
        xpPerHour: "40-80K",
        cost: "Free",
        notes: "Buy unstrung bows from GE, add bowstrings. Very fast and cheap.",
      },
      {
        levels: "40-70",
        method: "Maple shortbows (u) then string them",
        xpPerHour: "200K",
        cost: "Low",
        notes: "Buy maple logs, fletch into bows, add bowstrings. Sell back for partial recovery.",
      },
      {
        levels: "70-85",
        method: "Yew longbows (u) then string them",
        xpPerHour: "350K",
        cost: "Low",
        notes: "Yew longbows are fast XP. Buy yew logs and bowstrings in bulk.",
      },
      {
        levels: "85-99",
        method: "Elder shortbows (u) then string them",
        xpPerHour: "Up to 1M+",
        cost: "Medium",
        notes:
          "Elder shortbows are the fastest Fletching XP in the game. Incredibly fast 99.",
      },
    ],
    tips: [
      "Fletching is essentially a free 99. Buy logs, string bows, sell bows back.",
      "Elder shortbows at 85+ can hit over 1 million XP per hour. One of the fastest skills.",
      "Do Fletching while waiting for other things - it is very click-intensive but fast.",
      "Broad arrows from Slayer are a cheap alternative training method.",
    ],
  },
  {
    slug: "firemaking",
    name: "Firemaking",
    emoji: "\uD83D\uDD25",
    cap: 99,
    category: "artisan",
    color: "orange",
    description:
      "Burn logs on bonfires for XP. Extremely AFK - add logs to a bonfire and click every 5 minutes. One of the easiest 99s in the game.",
    priority: 21,
    keyMilestones: [
      { level: 30, unlock: "Maple bonfires", why: "Decent XP, cheap logs" },
      { level: 50, unlock: "Yew bonfires", why: "Good XP per log" },
      { level: 75, unlock: "Magic bonfires", why: "Great XP, 300K/hr" },
      { level: 85, unlock: "Elder bonfires", why: "Best bonfire XP, 400K+/hr" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Regular, Oak, then Willow logs on bonfires",
        xpPerHour: "20-60K",
        cost: "Low",
        notes:
          "Add logs to any bonfire at the GE. Multiple people at the same fire gives bonus XP.",
      },
      {
        levels: "30-50",
        method: "Maple log bonfires",
        xpPerHour: "100K",
        cost: "Low",
        notes: "Maple logs are very cheap. Just stand at GE bonfire and add logs.",
      },
      {
        levels: "50-75",
        method: "Yew log bonfires",
        xpPerHour: "200K",
        cost: "Low",
        notes: "Yew logs give great XP for their price. AFK and simple.",
      },
      {
        levels: "75-85",
        method: "Magic log bonfires",
        xpPerHour: "300K",
        cost: "Medium",
        notes: "Magic logs are more expensive but very fast XP. Worth it for the speed.",
      },
      {
        levels: "85-99",
        method: "Elder log bonfires or Prifddinas Crystallise method",
        xpPerHour: "400K+",
        cost: "Medium",
        notes:
          "Elder logs are the fastest. Alternatively, Crystallise on Acadia trees for even faster XP.",
      },
    ],
    tips: [
      "Firemaking is the most AFK skill in the game. Add logs to bonfire, click every 5 minutes.",
      "Stand at a crowded bonfire (GE World 2) for a group bonus to XP.",
      "Ring of Fire and Flame Gloves from All Fired Up give bonus Firemaking XP.",
      "This is often the first 99 players get because it is so easy.",
    ],
  },
  {
    slug: "herblore",
    name: "Herblore",
    emoji: "\uD83E\uDDEA",
    cap: 99,
    category: "artisan",
    color: "green",
    description:
      "Mix potions from herbs and secondary ingredients. Essential skill - Overloads at 96 are the most important potion in the game. Expensive to train.",
    unlockQuest: "Druidic Ritual",
    priority: 10,
    keyMilestones: [
      { level: 38, unlock: "Prayer potions", why: "Essential for all combat" },
      { level: 52, unlock: "Super Energy potions", why: "Useful utility potion" },
      { level: 66, unlock: "Super Defence potions", why: "Standard combat potion" },
      { level: 85, unlock: "Super Antifire potions", why: "Required for dragon bosses" },
      { level: 96, unlock: "OVERLOADS", why: "THE most important potion. Boosts all combat stats by +17%." },
      { level: 98, unlock: "Supreme Overloads", why: "Upgraded Overloads with longer duration" },
    ],
    methods: [
      {
        levels: "1-38",
        method: "Attack / Strength potions from quest rewards and basic mixing",
        xpPerHour: "15-30K",
        cost: "Low",
        notes:
          "Druidic Ritual quest unlocks the skill. Mix basic potions. Quest rewards skip many early levels.",
      },
      {
        levels: "38-52",
        method: "Prayer potions",
        xpPerAction: "87.5 XP",
        xpPerHour: "50K",
        cost: "Medium",
        notes: "Ranarr herbs + Snape Grass. Can be slightly profitable depending on prices.",
      },
      {
        levels: "52-66",
        method: "Super Energy potions",
        xpPerHour: "60-80K",
        cost: "Medium",
        notes: "Avantoe + Mort Myre Fungus. Moderate cost, decent XP.",
      },
      {
        levels: "66-88",
        method: "Super Defence potions",
        xpPerAction: "150 XP",
        xpPerHour: "100-150K",
        cost: "Medium",
        notes: "Cadantine + White Berry. Good balance of cost and speed.",
      },
      {
        levels: "88-96",
        method: "Extreme potions (Attack, Strength, Defence, Ranged, Magic)",
        xpPerHour: "200K",
        cost: "High",
        notes:
          "Make all five Extreme potions. You need them as ingredients for Overloads. Untradeable.",
      },
      {
        levels: "96-99",
        method: "Overloads (combination of all Extremes)",
        xpPerAction: "1000 XP",
        xpPerHour: "300K",
        cost: "Very High",
        notes:
          "Overloads are untradeable and the best combat potion. Make as many as you can afford.",
      },
    ],
    tips: [
      "Overloads (96) are the #1 priority unlock in Herblore. Rush to 96 as fast as possible.",
      "Save Herblore training for Double XP Week - it is extremely expensive.",
      "Make Extreme potions yourself - they are untradeable ingredients for Overloads.",
      "Herb runs from Farming can fund most of your Herblore training.",
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    emoji: "\uD83C\uDFE0",
    cap: 99,
    category: "artisan",
    color: "gold",
    description:
      "Build and upgrade your player-owned house. The Gilded Altar at 67 is essential for Prayer training. Expensive but fast to level.",
    priority: 22,
    keyMilestones: [
      { level: 50, unlock: "Portal chambers", why: "Teleport portals in your house" },
      { level: 67, unlock: "Gilded Altar", why: "3.5x bone XP - KEY for Prayer training" },
      { level: 75, unlock: "Prawnbrokers", why: "Best flatpack XP, fastest Construction method" },
      { level: 99, unlock: "Max Guild access", why: "Unlock the Max Guild in Prifddinas" },
    ],
    methods: [
      {
        levels: "1-33",
        method: "Crude wooden chairs then Oak chairs",
        xpPerAction: "58-96 XP",
        xpPerHour: "30-80K",
        cost: "Low",
        notes: "Build and remove furniture. Oak planks from the Sawmill or GE.",
      },
      {
        levels: "33-52",
        method: "Oak larders",
        xpPerAction: "480 XP",
        xpPerHour: "100-200K",
        cost: "Medium",
        notes: "Build in kitchen, remove, repeat. Uses 8 oak planks each. Fast but repetitive.",
      },
      {
        levels: "52-75",
        method: "Mahogany tables",
        xpPerAction: "840 XP",
        xpPerHour: "200-350K",
        cost: "High",
        notes:
          "Mahogany planks are expensive. Build in dining room, remove, repeat. Very fast XP.",
      },
      {
        levels: "75-99",
        method: "Flotsam Prawnbrokers or Mahogany tables",
        xpPerAction: "1100+ XP",
        xpPerHour: "300-500K",
        cost: "Very High",
        notes:
          "Prawnbrokers are the fastest method. Mahogany tables are slightly slower but cheaper. Both are fast 99.",
      },
    ],
    tips: [
      "Gilded Altar at 67 is the #1 reason to train Construction. It makes Prayer training 3.5x faster.",
      "Use a Butler to bring you planks from bank. Much faster than banking yourself.",
      "Construction is very expensive. Save it for Double XP Week if possible.",
      "The Max Guild requires 99 in all skills, not just Construction. But Con 99 is needed.",
    ],
  },
  {
    slug: "runecrafting",
    name: "Runecrafting",
    emoji: "\uD83D\uDD2F",
    cap: 99,
    category: "artisan",
    color: "purple",
    description:
      "Craft runes from essence at altars around the world. Runespan is the AFK method, Abyss is faster and profitable. Becomes profitable at higher levels.",
    unlockQuest: "Rune Mysteries",
    priority: 23,
    keyMilestones: [
      { level: 44, unlock: "Nature runes", why: "First profitable rune to craft" },
      { level: 54, unlock: "Law runes", why: "Always in demand, good money" },
      { level: 77, unlock: "Blood runes", why: "Great profit through the Abyss" },
      { level: 90, unlock: "Soul runes", why: "Top-tier rune, excellent money" },
      { level: 99, unlock: "Omni-talisman staff", why: "Access any altar from one item" },
    ],
    methods: [
      {
        levels: "1-50",
        method: "Runespan (any level, AFK)",
        xpPerHour: "15-30K",
        cost: "Free",
        notes:
          "Enter Runespan from Wizard Tower. Siphon nodes and creatures. Completely AFK. No runes produced.",
      },
      {
        levels: "50-77",
        method: "Runespan upper floors",
        xpPerHour: "30-50K",
        cost: "Free",
        notes:
          "Higher floors have better nodes. Still AFK. Good for passively training while doing other things.",
      },
      {
        levels: "77-90",
        method: "Blood runes through the Abyss or ZMI altar",
        xpPerHour: "50-80K",
        cost: "Profit",
        notes:
          "Running essence through the Abyss to craft Blood runes. Profitable and faster than Runespan.",
      },
      {
        levels: "90-99",
        method: "Soul runes or Blood runes through Abyss",
        xpPerHour: "70-100K",
        cost: "Profit",
        notes:
          "Soul runes give the best XP and excellent profit. Blood runes are a close second.",
      },
    ],
    tips: [
      "Runespan is AFK but gives no runes (no profit). Abyss running gives runes + profit.",
      "Crafting through the Abyss is dangerous (Wilderness). Bring minimal items.",
      "Wicked Hood from Runespan gives free daily essence and teleports to altars.",
      "Runecrafting becomes very profitable at 77+ with Blood runes.",
    ],
  },

  // ── SUPPORT / ELITE SKILLS ─────────────────────────────────────────────
  {
    slug: "agility",
    name: "Agility",
    emoji: "\uD83C\uDFC3",
    cap: 99,
    category: "support",
    color: "blue",
    description:
      "Run agility courses for XP and unlock shortcuts around the world. Required for many quests and useful shortcuts. Hefin course at 77 is the endgame.",
    priority: 24,
    keyMilestones: [
      { level: 21, unlock: "Various useful shortcuts", why: "First meaningful shortcuts" },
      { level: 48, unlock: "Trollheim shortcut", why: "Quick access to God Wars Dungeon" },
      { level: 65, unlock: "Wilderness Agility Course", why: "Best XP before Hefin" },
      { level: 77, unlock: "Hefin Agility Course", why: "Best course in game, AFK-friendly in Prifddinas" },
      { level: 85, unlock: "Various high-level shortcuts", why: "Unlocks shortcuts in Prifddinas and elsewhere" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Gnome Stronghold Agility Course",
        xpPerHour: "8-12K",
        cost: "Free",
        notes: "Starting course. Located in the Tree Gnome Stronghold. Follow the course in a loop.",
      },
      {
        levels: "30-52",
        method: "Barbarian Outpost Agility Course",
        xpPerAction: "46.2 XP per lap",
        xpPerHour: "15-25K",
        cost: "Free",
        notes: "Requires completion of Bar Crawl miniquest. Better XP than Gnome course.",
      },
      {
        levels: "52-65",
        method: "Wilderness Agility Course",
        xpPerHour: "30-45K",
        cost: "Free",
        notes:
          "In the Wilderness so there is PvP risk. Bring nothing valuable. Best XP at this level range.",
      },
      {
        levels: "65-77",
        method: "Ape Atoll Agility Course",
        xpPerHour: "40-55K",
        cost: "Free",
        notes:
          "Requires Monkey Madness quest and Monkey Greegree. Indoor course, no PvP risk.",
      },
      {
        levels: "77-99",
        method: "Hefin Agility Course (Prifddinas)",
        xpPerHour: "60-80K",
        cost: "Free",
        notes:
          "The best Agility course. AFK-friendly with few obstacles. Requires Plague's End quest for Prifddinas.",
      },
    ],
    tips: [
      "Hefin course at 77 is the goal. Everything before it is just getting there.",
      "Agility is required for many quest requirements. Check quest guides.",
      "Silverhawk Boots passively train Agility while doing other skills (if available).",
      "Agility unlocks shortcuts that save hours of travel time throughout the game.",
    ],
  },
  {
    slug: "thieving",
    name: "Thieving",
    emoji: "\uD83E\uDD78",
    cap: 99,
    category: "support",
    color: "purple",
    description:
      "Pickpocket NPCs and loot stalls for XP and GP. Profitable at high levels especially at Prifddinas elves. Blackjacking is the fastest mid-level method.",
    unlockQuest: "Buyers and Cellars",
    priority: 25,
    keyMilestones: [
      { level: 53, unlock: "Rogue outfit", why: "Doubles pickpocket loot" },
      { level: 62, unlock: "TzHaar area pickpocketing", why: "Decent XP and unique items" },
      { level: 71, unlock: "Pyramid Plunder", why: "Best Thieving XP before Prifddinas" },
      { level: 91, unlock: "Prifddinas elves", why: "Best XP and GP in the game for Thieving" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Men/Women in Lumbridge then Cake stalls",
        xpPerHour: "5-15K",
        cost: "Free",
        notes: "Pickpocket men in Lumbridge, then steal from Cake stalls in Ardougne.",
      },
      {
        levels: "30-45",
        method: "HAM Members (Lumbridge cellar)",
        xpPerAction: "22.5 XP",
        xpPerHour: "15-30K",
        cost: "Free",
        notes: "Pickpocket HAM Members for clue scroll pieces and easy jewellery drops.",
      },
      {
        levels: "45-71",
        method: "Blackjacking Bandits in Pollnivneach",
        xpPerHour: "80-150K",
        cost: "Free",
        notes:
          "Knock out then pickpocket. Click intensive but very fast. Requires The Feud quest.",
      },
      {
        levels: "71-91",
        method: "Pyramid Plunder (Sophanem)",
        xpPerHour: "150-250K",
        cost: "Free",
        notes:
          "Minigame in Sophanem. Loot urns and sarcophagi in timed rooms. Great XP, some GP.",
      },
      {
        levels: "91-99",
        method: "Prifddinas elves (pickpocketing)",
        xpPerHour: "200-300K",
        cost: "Profit",
        notes:
          "Pickpocket elves in Prifddinas for great XP and GP. Rotate between clans on cooldown.",
      },
    ],
    tips: [
      "Rogue outfit at 53 doubles all pickpocket loot. Get it from Flash Powder Factory.",
      "Prifddinas elves at 91 are the best Thieving money in the game.",
      "Ardougne cloak boosts pickpocket success rate. Complete Ardougne achievement diary.",
      "Blackjacking is fast but click-intensive. Pyramid Plunder is a good alternative.",
    ],
  },
  {
    slug: "archaeology",
    name: "Archaeology",
    emoji: "\uD83C\uDFDB\uFE0F",
    cap: 120,
    category: "support",
    color: "orange",
    description:
      "Excavate dig sites around the world to discover artefacts and unlock powerful relics. Released in 2020. Relics provide permanent passive buffs.",
    priority: 26,
    keyMilestones: [
      { level: 20, unlock: "Infernal Source access", why: "Second dig site unlocked" },
      { level: 42, unlock: "Everlight access", why: "Third dig site" },
      { level: 58, unlock: "Stormguard Citadel", why: "Fourth dig site" },
      { level: 76, unlock: "Warforge", why: "Fifth dig site" },
      { level: 99, unlock: "Ancient Invention", why: "Unlock Ancient gizmo perks" },
      { level: 118, unlock: "Abyssal Link relic", why: "Removes ammo/rune cost in combat" },
    ],
    methods: [
      {
        levels: "1-20",
        method: "Kharid-et excavation site",
        xpPerHour: "10-20K",
        cost: "Free",
        notes: "Starting dig site accessed through the Archaeology Guild. Follow the tutorial.",
      },
      {
        levels: "20-42",
        method: "Infernal Source excavation",
        xpPerHour: "20-35K",
        cost: "Free",
        notes: "Second dig site near the Wilderness. Excavate and restore artefacts at the bench.",
      },
      {
        levels: "42-58",
        method: "Everlight (Morytania)",
        xpPerHour: "30-50K",
        cost: "Free",
        notes: "Lighthouse dig site in Morytania. Some collections give good rewards.",
      },
      {
        levels: "58-76",
        method: "Stormguard Citadel",
        xpPerHour: "40-60K",
        cost: "Free",
        notes: "Floating citadel dig site. Higher material requirements for restorations.",
      },
      {
        levels: "76-98",
        method: "Warforge (Goblin dig site)",
        xpPerHour: "50-80K",
        cost: "Free",
        notes: "Large underground dig site. Good collections and relics at higher levels.",
      },
      {
        levels: "98-120",
        method: "Orthen (Anachronia) + Research assignments",
        xpPerHour: "70-120K",
        cost: "Free",
        notes:
          "Final dig site on Anachronia. Research assignments give massive XP. Best post-99 method.",
      },
    ],
    tips: [
      "Archaeology is entirely free to train. All materials come from excavation.",
      "Restore artefacts at the workbench for most of the XP. Do not skip restorations.",
      "Relics provide powerful permanent buffs. Check which ones you want and aim for them.",
      "Ancient Invention at 99 Archaeology is a huge upgrade for all augmented gear.",
    ],
  },
  {
    slug: "invention",
    name: "Invention",
    emoji: "\u2699\uFE0F",
    cap: 120,
    category: "support",
    color: "gold",
    description:
      "Augment weapons and armour with perks that boost combat and skilling. Requires 80 Divination, Smithing, and Crafting. Elite skill with no traditional training.",
    priority: 27,
    keyMilestones: [
      { level: 27, unlock: "Augmentor", why: "Can augment weapons and armour" },
      { level: 36, unlock: "Equipment Siphon", why: "Extract item XP without destroying item" },
      { level: 74, unlock: "Precise 5 perk", why: "Major DPS boost perk for weapons" },
      { level: 89, unlock: "Aftershock perk", why: "Best weapon damage perk" },
      { level: 99, unlock: "Scavenging 4 perk", why: "Free components from combat" },
      { level: 120, unlock: "Ancient Gizmos (with Arch)", why: "2 more perk slots per gizmo" },
    ],
    methods: [
      {
        levels: "1-27",
        method: "Invention tutorial + disassembling items",
        xpPerHour: "Varies",
        cost: "Low",
        notes:
          "Complete the Invention tutorial at the Invention Guild. Disassemble cheap items for components and XP.",
      },
      {
        levels: "27-60",
        method: "Augmented combat gear (use in combat then disassemble at level 10)",
        xpPerHour: "Passive (based on combat XP)",
        cost: "Medium",
        notes:
          "Augment your weapon and armour. Use them in combat until item level 10, then disassemble for big XP.",
      },
      {
        levels: "60-99",
        method: "Siphon at level 12 or Disassemble at level 10 loop",
        xpPerHour: "Passive",
        cost: "Medium",
        notes:
          "Siphoning at level 12 keeps your gear. Disassembling at 10 gives more XP but you lose the item.",
      },
      {
        levels: "99-120",
        method: "High-level siphoning with T80+ augmented gear",
        xpPerHour: "Passive",
        cost: "Medium",
        notes:
          "Continue siphoning. Higher tier gear levels up faster. Combine with Slayer for efficiency.",
      },
    ],
    tips: [
      "Invention requires 80 Divination, Smithing, and Crafting to unlock. Plan ahead.",
      "Siphon gear at level 12 to keep it. Disassemble at level 10 for more XP but you lose the item.",
      "Perks from Invention are the biggest DPS boost in the game. Prioritize Precise and Aftershock.",
      "Invention levels passively while doing combat and skilling. No dedicated training needed.",
    ],
  },
  {
    slug: "dungeoneering",
    name: "Dungeoneering",
    emoji: "\uD83D\uDDDD\uFE0F",
    cap: 120,
    category: "support",
    color: "blue",
    description:
      "Explore procedurally generated dungeons in Daemonheim. Earn tokens to buy powerful T80 Chaotic weapons. Best done in groups of 5.",
    priority: 28,
    keyMilestones: [
      { level: 80, unlock: "Chaotic weapons (T80)", why: "Best free weapons in the game, bought with tokens" },
      { level: 85, unlock: "Frost Dragons access", why: "Best bone drops for Prayer training" },
      { level: 99, unlock: "Daemonheim aura", why: "Passive bonuses in Daemonheim" },
      { level: 120, unlock: "True skill mastery", why: "Completionist Cape requirement" },
    ],
    methods: [
      {
        levels: "1-30",
        method: "Small floors solo (rush all)",
        xpPerHour: "10-20K",
        cost: "Free",
        notes: "Do small complexity 1 floors solo. Rush through as fast as possible. Reset at max.",
      },
      {
        levels: "30-60",
        method: "Medium floors with 2-3 people",
        xpPerHour: "30-60K",
        cost: "Free",
        notes: "Group up for better XP. Rush lower floors, complete medium floors thoroughly.",
      },
      {
        levels: "60-99",
        method: "Large floors with 5 people (rush low, complete high)",
        xpPerHour: "80-200K",
        cost: "Free",
        notes:
          "Rush floors below your level in C1 small. Do your highest floors as C6 large 5-person for max XP.",
      },
      {
        levels: "99-120",
        method: "Elite Dungeons token farming or large floor rushing",
        xpPerHour: "200-400K",
        cost: "Free",
        notes:
          "Elite Dungeons (ED1-ED3) give Dungeoneering tokens and XP. Can also continue floor grinding.",
      },
    ],
    tips: [
      "Always do the highest floor available as a large 5-person C6 for maximum XP.",
      "Rush lower floors in C1 small to reset faster. Only complete your highest floors.",
      "Chaotic weapons at 80 are essential if you do not have T80+ weapons from bossing.",
      "Elite Dungeons are a modern alternative to traditional Dungeoneering floors.",
    ],
  },
];

export function getSkillBySlug(slug: string): SkillData | undefined {
  return skills.find((s) => s.slug === slug);
}
