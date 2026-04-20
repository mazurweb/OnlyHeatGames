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
        levels: "1-10",
        method: "Combat Academy (Burthorpe) or Cows at Lumbridge",
        xpPerHour: "5-10K",
        cost: "Free",
        notes:
          "Grab a free bronze/iron scimitar from the combat tutor. Cow pen east of Lumbridge castle is the cleanest early spot. Switch to Iron scimitar at level 1 and Steel scimitar at 5.",
      },
      {
        levels: "10-20",
        method: "Giant Rats + Lumbridge Catacombs ground floor",
        xpPerHour: "10-15K",
        cost: "Free",
        notes:
          "Catacombs entrance is under the Lumbridge graveyard. Rats and skeletons are aggressive and fast respawn. Upgrade to Black scimitar at 10, Mithril scimitar at 20.",
      },
      {
        levels: "20-30",
        method: "Waterfall Quest (INSTANT skip to 30)",
        xpPerHour: "Instant — 13,750 XP",
        cost: "Free",
        notes:
          "The BEST use of this level range. Zero stat requirements. Teleport to Baxtorian Falls via the quest tab. Also gives 13,750 Strength XP. Skip straight to 30 in both.",
      },
      {
        levels: "30-40",
        method: "Hill Giants (Edgeville Dungeon) or Turael Slayer tasks",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Hill Giants drop Big Bones (Prayer XP) + Limpwurt roots. Enter through the Edgeville skull trapdoor. Alternative: ask Turael in Burthorpe for easy Slayer tasks (Cave Crawlers, Banshees in Slayer Tower basement). Use Adamant scimitar.",
      },
      {
        levels: "40-50",
        method: "Flesh Crawlers (Stronghold of Security level 2)",
        xpPerHour: "25-35K",
        cost: "Free",
        notes:
          "Go to Barbarian Village ladder, down to level 2 (Catacomb of Famine). Flesh Crawlers are low-defence, aggressive, always clumped. Best AFK spot in this range. Rune scimitar at 50.",
      },
      {
        levels: "50-60",
        method: "Fire Giants (Waterfall Dungeon) or Mazchna Slayer tasks",
        xpPerHour: "35-55K",
        cost: "Free",
        notes:
          "Fire Giants under Baxtorian Falls are safe, aggressive, and drop mid-tier loot. Mazchna in Canifis gives better Slayer tasks (needs Priest in Peril). Dragon scimitar at 60 from Monkey Madness quest.",
      },
      {
        levels: "60-70",
        method: "Duradel Slayer (Shilo Village) + Dragon weapons",
        xpPerHour: "50-75K",
        cost: "Free",
        notes:
          "Shilo Village requires Shilo Village quest. Duradel gives harder tasks (Bloodvelds, Dust Devils, Jungle Strykewyrms). Equip Dragon longsword or Dragon scimitar. Save Slayer points for blocks.",
      },
      {
        levels: "70-80",
        method: "Abyssal Whip + Kuradal Slayer (Ancient Cavern)",
        xpPerHour: "80-140K",
        cost: "Free",
        notes:
          "Abyssal Whip at 70 is the iconic upgrade — buy from GE. Kuradal's dungeon has Dark Beasts, Mithril Dragons, Abyssal Demons in walking distance. Bandos armour at 70 Defence.",
      },
      {
        levels: "80-90",
        method: "Drygores (85) + Morvran Slayer / GWD2 bosses",
        xpPerHour: "120-200K",
        cost: "Free",
        notes:
          "Drygore rapiers/maces at 85 are a massive DPS jump — can rent them temporarily from the GE. Morvran assigns Ripper Demons, Camel Warriors, Acheron Mammoths. Elite Dungeon 1 in duo groups works too.",
      },
      {
        levels: "90-99",
        method: "Noxious Scythe (90) + Araxxi / High-level Slayer",
        xpPerHour: "150-280K",
        cost: "Free",
        notes:
          "Noxious Scythe has halberd range — kills 3 Slayer monsters per tick on tight tasks (Ghosts, Banshees stacked). Araxxi farming funds the scythe. Soul Devourers at 99 for post-99 push.",
      },
      {
        levels: "99-120",
        method: "Laniakea Slayer + Elite Dungeons + Corrupted Creatures (114)",
        xpPerHour: "300-500K",
        cost: "Free",
        notes:
          "Laniakea (Anachronia) assigns only high-tier tasks. ED3 duo runs with T92 gear hit 500K+/hr. Corrupted Creatures unlock at 114 — best post-99 XP outside raids. Telos/Arch-Glacor add variety.",
      },
    ],
    tips: [
      "Do Waterfall Quest immediately — no requirements, instant skip to 30 Attack AND Strength.",
      "Always train through Slayer from 30 onward. Never grind a single monster for pure XP.",
      "Use Revolution++ combat mode so abilities auto-fire — it's not cheating, Jagex endorses it.",
      "Toggle 'Attack XP' in the combat settings gear icon to send all combat XP to Attack specifically.",
      "Buy Bandos at 70 Defence — cheap, and power armour beats tank armour in RS3.",
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
        levels: "1-10",
        method: "Cows at Lumbridge (Strength XP mode)",
        xpPerHour: "5-10K",
        cost: "Free",
        notes:
          "Same spot as Attack — just toggle combat XP to Strength in the combat settings. Cows never retaliate for long and respawn instantly.",
      },
      {
        levels: "10-20",
        method: "Lumbridge Catacombs (Strength XP mode)",
        xpPerHour: "10-15K",
        cost: "Free",
        notes:
          "Rats and skeletons under the Lumbridge graveyard. Aggressive, so you can AFK between kills. Mithril scimitar at 20 Attack.",
      },
      {
        levels: "20-30",
        method: "Waterfall Quest (INSTANT skip to 30)",
        xpPerHour: "Instant — 13,750 XP",
        cost: "Free",
        notes:
          "Same quest as Attack, gives 13,750 to BOTH skills simultaneously. No combat required during the quest.",
      },
      {
        levels: "30-40",
        method: "Hill Giants (Edgeville Dungeon) or Turael Slayer",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Swap combat XP setting to Strength. Hill Giants are AFK with Big Bone drops for Prayer. Granite Maul at 50 Strength is the next weapon upgrade goal.",
      },
      {
        levels: "40-50",
        method: "Flesh Crawlers (Stronghold of Security lvl 2)",
        xpPerHour: "25-35K",
        cost: "Free",
        notes:
          "Best AFK Strength spot for this range. Low defence, aggressive, always 5-6 on screen. Granite Maul at 50 is a big jump in damage output.",
      },
      {
        levels: "50-60",
        method: "Fire Giants (Waterfall Dungeon) + Mazchna Slayer",
        xpPerHour: "35-55K",
        cost: "Free",
        notes:
          "Use Granite Maul until 60 Attack, then Dragon weapons. Mazchna in Canifis gives mid-tier Slayer tasks that match this level.",
      },
      {
        levels: "60-70",
        method: "Duradel Slayer (Shilo Village) + Dragon Longsword",
        xpPerHour: "50-75K",
        cost: "Free",
        notes:
          "Strength XP mode through Slayer. Duradel assigns Bloodvelds, Dust Devils, Jungle Strykewyrms. Alternate Attack and Strength every other task.",
      },
      {
        levels: "70-80",
        method: "Abyssal Whip + Kuradal Slayer",
        xpPerHour: "80-140K",
        cost: "Free",
        notes:
          "Whip is a Strength weapon too (it's fastest-attack style). Bandos armour at 70 Def. Kuradal's dungeon clusters tasks together for task streak bonuses.",
      },
      {
        levels: "80-90",
        method: "Drygores (85) + Morvran Slayer",
        xpPerHour: "120-200K",
        cost: "Free",
        notes:
          "Drygores boost both accuracy and Strength equivalents via their T90 damage. Switch combat XP back to Strength mode. GWD2 bosses for variety.",
      },
      {
        levels: "90-99",
        method: "Noxious Scythe + Araxxor + High-level Slayer",
        xpPerHour: "150-280K",
        cost: "Free",
        notes:
          "Scythe is halberd-range, making it king for multi-target Slayer. Post-92 Prayer (Soul Split) turns this into pure AFK.",
      },
      {
        levels: "99-120",
        method: "Laniakea Slayer + Elite Dungeons + Corrupted Creatures",
        xpPerHour: "300-500K",
        cost: "Free",
        notes:
          "ED3 duos with T92 gear, Corrupted Scorpions at 114, Soul Devourers. Strength caps its usefulness at 99 for damage — 99-120 is purely cosmetic/completionist.",
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
        levels: "1-10",
        method: "Do NOTHING yet — train Attack/Strength first",
        xpPerHour: "Passive only",
        cost: "Free",
        notes:
          "Defence will creep up naturally from early combat. Rushing it here is a newbie trap — you'll over-level Defence and miss out on pure/efficient combat pathing.",
      },
      {
        levels: "10-20",
        method: "Lumbridge Catacombs (Defence XP mode)",
        xpPerHour: "10-15K",
        cost: "Free",
        notes:
          "Only start dedicated Defence training once Attack and Strength are 20+. Toggle combat XP to Defence and kill the same Catacombs mobs.",
      },
      {
        levels: "20-30",
        method: "Cows and Giant Spiders (Stronghold of Security lvl 1)",
        xpPerHour: "15-20K",
        cost: "Free",
        notes:
          "Stronghold of Security gives a GP reward for reaching the bottom and is safe AFK. Catacomb of Aenigmata for spiders.",
      },
      {
        levels: "30-40",
        method: "Hill Giants (Edgeville Dungeon)",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Same spot as Attack/Strength — just swap combat XP to Defence. Rune armour unlocks at 40 Defence, a major power spike for free content.",
      },
      {
        levels: "40-50",
        method: "Flesh Crawlers (Stronghold level 2) + Rune armour",
        xpPerHour: "25-35K",
        cost: "Free",
        notes:
          "Rune armour is the first serious armour tier. Buy full Rune set on GE. Granite armour at 50 is a budget alternative.",
      },
      {
        levels: "50-60",
        method: "Fire Giants (Waterfall Dungeon) + Mazchna Slayer",
        xpPerHour: "35-55K",
        cost: "Free",
        notes:
          "Fire Giants hit hard enough to actually train Defence meaningfully. Equip Granite armour (50 Def + 50 Str) for best value in this range.",
      },
      {
        levels: "60-70",
        method: "Duradel Slayer + Dragon armour pieces",
        xpPerHour: "50-75K",
        cost: "Free",
        notes:
          "Dragon platebody from Letomania (Dragon Slayer II). At 70 Defence, immediately buy Bandos — the best GP-per-stat armour in the game.",
      },
      {
        levels: "70-80",
        method: "Kuradal Slayer + Bandos armour",
        xpPerHour: "80-140K",
        cost: "Free",
        notes:
          "Bandos at 70 Def should be your very first purchase. It lasts until 80 Defence. Armadyl (Ranged) and Subjugation (Magic) unlock at 70 too.",
      },
      {
        levels: "80-90",
        method: "Morvran Slayer + Torva armour / Sirenic / Tectonic",
        xpPerHour: "120-200K",
        cost: "Free",
        notes:
          "T80 power armour unlocks: Torva (melee), Pernix/Sirenic (ranged), Virtus/Tectonic (magic). Nex is the source. Rent from GE until you can afford full sets.",
      },
      {
        levels: "90-99",
        method: "High-level Slayer + Malevolent / Sirenic / Tectonic",
        xpPerHour: "150-280K",
        cost: "Free",
        notes:
          "T90 power armour via Raksha and Telos. Expensive and degrades to dust. Only buy when you're bossing consistently.",
      },
      {
        levels: "99-120",
        method: "Laniakea Slayer + Elite Dungeons",
        xpPerHour: "300-500K",
        cost: "Free",
        notes:
          "Defence 99→120 gives ~5% damage reduction bonus. Mostly for completionist cape. Keep training passively via Slayer.",
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
        levels: "1-10",
        method: "Combat Academy training bow + Chickens/Cows",
        xpPerHour: "5-10K",
        cost: "Free",
        notes:
          "Grab the free training bow and unlimited arrows from the Burthorpe combat tutor. Shoot chickens in Lumbridge or cows in Falador.",
      },
      {
        levels: "10-20",
        method: "Troll Brutes north of Burthorpe",
        xpPerHour: "10-15K",
        cost: "Free",
        notes:
          "Walk north through Death Plateau. Troll Brutes are aggressive and you can safespot from the ledge. Use an Oak shortbow with iron arrows.",
      },
      {
        levels: "20-30",
        method: "Lumbridge Catacombs (Ranged mode)",
        xpPerHour: "15-20K",
        cost: "Free",
        notes:
          "Kill skeletons and rats from range. Mithril arrows + Willow shortbow. Catacombs mobs are low defence so arrows rarely miss.",
      },
      {
        levels: "30-40",
        method: "Dorgeshuun Crossbow + Bone Bolts (Moss Giants)",
        xpPerHour: "20-30K",
        cost: "Low",
        notes:
          "Dorgeshuun Crossbow from Lost Tribe quest + Bone Bolts (1 gp each on GE). Moss Giants on Crandor island or Varrock sewers. Essentially free training.",
      },
      {
        levels: "40-50",
        method: "Flesh Crawlers (Stronghold of Security level 2)",
        xpPerHour: "25-35K",
        cost: "Low",
        notes:
          "Safespot Flesh Crawlers from behind a wall with Dorgeshuun Cbow + Bone Bolts. Extremely AFK and efficient.",
      },
      {
        levels: "50-60",
        method: "Turael/Mazchna Slayer + Broad arrows",
        xpPerHour: "35-55K",
        cost: "Low",
        notes:
          "Unlock Broad arrows at 55 Slayer — they're cheap bulk ammo. Rune Crossbow from GE. Kharid Warriors or Fire Giants for solo grinding.",
      },
      {
        levels: "60-70",
        method: "Duradel Slayer + Karil's Crossbow",
        xpPerHour: "50-75K",
        cost: "Low",
        notes:
          "Karil's Crossbow is T60 Barrows, cheap on GE. Duradel assigns Bloodvelds, Dust Devils, Waterfiends — all safespot-friendly.",
      },
      {
        levels: "70-80",
        method: "Armadyl Crossbow + Armadyl armour + Slayer",
        xpPerHour: "80-140K",
        cost: "Medium",
        notes:
          "Armadyl Crossbow from Kree'arra at GWD1 — can duo him at 70. Armadyl armour from Kree's minions. Use Royal bolts.",
      },
      {
        levels: "80-90",
        method: "Ascension Crossbows + Pernix / Sirenic + Kuradal",
        xpPerHour: "120-200K",
        cost: "Medium",
        notes:
          "Ascension Crossbows from Legio bosses (Monastery of Ascension). Royal Crossbow at 80 is FREE from Queen Black Dragon — always take it first if you don't have Ascensions.",
      },
      {
        levels: "90-99",
        method: "Noxious Longbow + Sirenic armour + Morvran",
        xpPerHour: "150-280K",
        cost: "High",
        notes:
          "Noxious Longbow from Araxxi. Sirenic from hides sold by other players. Ranged is the BEST style for most bossing due to safe distance.",
      },
      {
        levels: "99-120",
        method: "Eldritch Crossbow + Elite Dungeons + Laniakea",
        xpPerHour: "300-500K",
        cost: "High",
        notes:
          "Eldritch Cbow from the Ambassador boss — best-in-slot pre-raids. ED1 Mini boss rush with Ranged is ~400K/hr. Corrupted Scorpions at 114 Slayer.",
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
        levels: "1-10",
        method: "Wind Strike on Chickens/Cows",
        xpPerAction: "5.5 XP",
        xpPerHour: "5-10K",
        cost: "Low",
        notes:
          "Staff of Air + Mind runes from the Mage tutor. Chickens in Lumbridge farm. One cast per kill. Combat Academy gives unlimited free runes.",
      },
      {
        levels: "10-20",
        method: "Water/Earth Strike + Giant Rats (Varrock sewer)",
        xpPerHour: "10-15K",
        cost: "Low",
        notes:
          "Staff of Water, Mind + Water runes. Rats in the sewer entrance die in 1-2 casts. Buy runes from the Varrock mage shop.",
      },
      {
        levels: "20-30",
        method: "Fire Strike + Fire Bolt at Varrock Palace guards",
        xpPerAction: "11-22 XP",
        xpPerHour: "15-20K",
        cost: "Low",
        notes:
          "Palace guards have low Magic defence and drop casting runes. Fire Bolt unlocks at 35. Elemental staff saves runes.",
      },
      {
        levels: "30-40",
        method: "Air Bolt + Ghosts (Lumbridge Catacombs / Draynor Manor)",
        xpPerAction: "25 XP",
        xpPerHour: "20-30K",
        cost: "Low",
        notes:
          "Bolt spells at 35 are a big XP jump. Draynor Manor ghosts are aggressive and respawn fast. Chaos runes from GE are cheap.",
      },
      {
        levels: "40-50",
        method: "Fire Blast + Ogres at Combat Training Camp",
        xpPerAction: "34.5 XP",
        xpPerHour: "30-45K",
        cost: "Low",
        notes:
          "Ogres west of Yanille have high HP, so you get multiple casts per kill. Death runes + Fire runes. Turael Slayer tasks also work here.",
      },
      {
        levels: "50-60",
        method: "Slayer tasks (Mazchna) + Fire Blast / Water Surge",
        xpPerHour: "40-60K",
        cost: "Low",
        notes:
          "Use Blast/Surge spells on Slayer tasks like Bloodvelds (weak to Magic). Staff of Air + Chaos/Death runes.",
      },
      {
        levels: "60-70",
        method: "Polypore Staff (75 req) or Slayer + Blast spells",
        xpPerHour: "50-80K",
        cost: "Low",
        notes:
          "Polypore Staff at 75 has built-in spells with no rune cost. Until then, Mud/Lava Battlestaffs save rune costs on Water/Earth/Fire spells.",
      },
      {
        levels: "70-80",
        method: "Burst/Barrage spells in Abyss (AoE farming)",
        xpPerHour: "100-250K",
        cost: "High",
        notes:
          "Ancient Magicks from Desert Treasure quest. Enter Abyss via Mage of Zamorak in Edgeville. AoE spells hit 3-5 creatures. Fastest Magic XP in the game.",
      },
      {
        levels: "80-90",
        method: "Chaotic Staff + Morvran Slayer + Burst/Barrage",
        xpPerHour: "150-280K",
        cost: "Medium",
        notes:
          "Chaotic Staff from Dungeoneering (200k tokens). Kuradal dungeon has Dark Beasts and Waterfiends weak to Magic. Blood barrage heals you too.",
      },
      {
        levels: "90-99",
        method: "Noxious Staff + Tectonic armour + High-level Slayer",
        xpPerHour: "200-350K",
        cost: "High",
        notes:
          "Noxious Staff from Araxxi. Tectonic from Seren stones drops. Magic is THE best style for AoE Slayer tasks thanks to chain-cast bursts.",
      },
      {
        levels: "99-120",
        method: "Elite Dungeons + Laniakea + Corrupted Creatures (114)",
        xpPerHour: "300-500K",
        cost: "Free",
        notes:
          "ED2 Magic is especially strong. Corrupted Workers at 114 Slayer. Alternatively, Wyverns at Warforge via Fire spells for pure AFK 200K+/hr.",
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
        levels: "1-10",
        method: "Necromancy Tutorial (City of Um)",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Start at the Ectofuntus/Death Altar. The tutorial teaches the ritual system and gives you the Skull Lantern + T20 Death Guard.",
      },
      {
        levels: "10-20",
        method: "Rituals + Tutorial Ghosts",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Rituals at your Ritual Altar give chunks of XP each cycle. Fight tutorial ghosts in the City of Um.",
      },
      {
        levels: "20-30",
        method: "Lumbridge Catacombs (Death Guard T20)",
        xpPerHour: "25-40K",
        cost: "Free",
        notes:
          "Revolution++ with T20 Death Guard. Catacombs mobs are low-defence and let you practice rotations.",
      },
      {
        levels: "30-40",
        method: "Kili Row quest chain + Armoured Phantoms (early)",
        xpPerHour: "30-50K",
        cost: "Free",
        notes:
          "'The Spirit of War' quest gives big chunks of XP. Armoured Phantoms unlock at 40 — start them one level early with prayer support.",
      },
      {
        levels: "40-50",
        method: "Armoured Phantoms (City of Um basement)",
        xpPerHour: "50-80K",
        cost: "Free",
        notes:
          "AFK the Phantoms with Deathguard + basic conjures. Great for learning the Necromancy rotation. Charm drops for Summoning.",
      },
      {
        levels: "50-60",
        method: "Armoured Phantoms + Well of Souls (60)",
        xpPerHour: "60-100K",
        cost: "Free",
        notes:
          "Finish Phantoms until 60, then unlock Well of Souls AoE. Start the 'Zemouregal's Fate' quest at 55.",
      },
      {
        levels: "60-70",
        method: "Well of Souls (City of Um) + Soul Strike AoE",
        xpPerHour: "80-130K",
        cost: "Free",
        notes:
          "Well of Souls is a dense AoE training zone — Death Skulls + Necromancy Conjures melt packs. Best AFK spot mid-game.",
      },
      {
        levels: "70-80",
        method: "Well of Souls + T70 Deathdealer gear + Slayer",
        xpPerHour: "100-160K",
        cost: "Free",
        notes:
          "Deathdealer robes from 'The Light Within' questline. Swap to Slayer for profit — Necromancy is very strong on Slayer tasks.",
      },
      {
        levels: "80-90",
        method: "Abyssal Lords + Morvran Slayer tasks",
        xpPerHour: "150-220K",
        cost: "Free",
        notes:
          "Abyssal Lords drop rare Abyssal Scourges and First Ages. T80 Deathdealer gear + Omni Guard/T80 Death Guard from Croesus.",
      },
      {
        levels: "90-99",
        method: "T90 gear (Raksha) + Elite Slayer tasks",
        xpPerHour: "200-300K",
        cost: "Free",
        notes:
          "T90 First Necromancer robes from Rasial or shard trading. Raksha drops Blood Essence and T92 hilts. Solo Rasial becomes viable.",
      },
      {
        levels: "99-120",
        method: "Rasial boss farming + ED3 + Corrupted Creatures",
        xpPerHour: "300-450K",
        cost: "Free",
        notes:
          "Rasial drops the T95 Death Guard / Omni Guard (best Necromancy weapons). ED3 with Necromancy is top-3 XP in the game. Corrupted Creatures at 114.",
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
        levels: "1-10",
        method: "Restless Ghost quest + Regular bones",
        xpPerAction: "4.5-35 XP",
        xpPerHour: "5-10K",
        cost: "Free",
        notes:
          "Restless Ghost gives 1,125 XP (level 9 from 1). Bury every bone you get from combat. Keep a stack for buffer.",
      },
      {
        levels: "10-20",
        method: "Bones + Big Bones from Hill Giants",
        xpPerAction: "15 XP",
        xpPerHour: "10-15K",
        cost: "Free",
        notes:
          "Hill Giants at Edgeville dungeon drop Big Bones (15 XP each). Double-dip combat + Prayer XP.",
      },
      {
        levels: "20-30",
        method: "Big Bones at Hill/Moss Giants + Ectofuntus",
        xpPerAction: "60 XP at Ectofuntus",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Ectofuntus (Port Phasmatys) gives 4x burying XP. Requires Ghosts Ahoy quest. More setup but best free method.",
      },
      {
        levels: "30-43",
        method: "Dragon Bones at Ectofuntus OR save for altar",
        xpPerHour: "25-50K",
        cost: "Low",
        notes:
          "Dragon bones at Ectofuntus give 288 XP each. Alternatively save them — at 43 Prayer with Gilded Altar they give 252 XP at 350K/hr. Building the altar pays off fast.",
      },
      {
        levels: "43-52",
        method: "Dragon Bones on Gilded Altar (POH, both burners lit)",
        xpPerAction: "252 XP",
        xpPerHour: "200-350K",
        cost: "High",
        notes:
          "Build a Gilded Altar in your POH Chapel (75 Construction needed OR ask a friend with one). Light both burners with marrentill + tinderbox for 3.5x XP.",
      },
      {
        levels: "52-70",
        method: "Dragon Bones on Gilded Altar (continue)",
        xpPerHour: "200-350K",
        cost: "High",
        notes:
          "Sustained 250K/hr. Use a preset with Dragon Bones + Marrentills. Run to the altar, click altar, right-click-use bones. ~3,500 bones per hour.",
      },
      {
        levels: "70-80",
        method: "Frost Dragon Bones on Gilded Altar",
        xpPerAction: "630 XP",
        xpPerHour: "400-550K",
        cost: "Very High",
        notes:
          "Frost Dragons drop their own bones at the Asgarnian Ice Dungeon (85 Dungeoneering). Buy on GE. Fastest route to 92 Prayer.",
      },
      {
        levels: "80-92",
        method: "Frost Dragon Bones (rush to Soul Split at 92)",
        xpPerAction: "630 XP",
        xpPerHour: "400-550K",
        cost: "Very High",
        notes:
          "THIS is the most important push in RS3. Soul Split at 92 heals you from damage dealt — trivializes most combat. Burn bones fast.",
      },
      {
        levels: "92-99",
        method: "Frost Dragon Bones OR Cleansing Crystals (Prifddinas)",
        xpPerHour: "400K bones / 200K crystals AFK",
        cost: "Very High / Free",
        notes:
          "Cleansing Crystals in Prifddinas Cadarn clan district are the AFK alternative. Free but slower. Bones if you want speed, crystals if you want passive.",
      },
      {
        levels: "99",
        method: "Prayer is capped at 99 — no 120 extension",
        xpPerHour: "N/A",
        cost: "N/A",
        notes:
          "Unlike Attack/Strength/Magic/Ranged, Prayer caps at 99. After 99 the only upgrade is the Cape of Accomplishment perk — restores prayer at altars.",
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
        levels: "1-10",
        method: "Wolf Whistle quest + Gold charm pouches",
        xpPerHour: "Instant quest XP",
        cost: "Free",
        notes:
          "Wolf Whistle gives 276 XP (level 4 instant). Then make Spirit Wolf pouches at the Taverley obelisk: Gold charm + Wolf bones + spirit shard.",
      },
      {
        levels: "10-20",
        method: "Dreadfowl / Spirit Spider pouches (Gold charms)",
        xpPerHour: "Batch-based",
        cost: "Low",
        notes:
          "Spirit Spider at 17 is efficient. Use Gold charms — they drop from almost every monster. Buy spirit shards from any pet shop (25 gp each).",
      },
      {
        levels: "20-30",
        method: "Thorny Snail / Granite Crab pouches (Gold charms)",
        xpPerHour: "Batch-based",
        cost: "Low",
        notes:
          "Thorny Snail (28) gives good XP/charm. Craft 50-100 pouches per trip to Taverley. Teleport with Amulet of Glory.",
      },
      {
        levels: "30-40",
        method: "Spirit Kalphite / Granite Lobster (Gold + Green charms)",
        xpPerHour: "Batch-based",
        cost: "Low",
        notes:
          "Granite Lobster at 39 is a popular pouch. Switch Gold charms to lower pouches, save Green/Crimson charms for mid-game.",
      },
      {
        levels: "40-50",
        method: "Ibis / Spirit Kyatt (Green charms)",
        xpPerHour: "Batch-based",
        cost: "Medium",
        notes:
          "Ibis (43) gives solid XP per Green charm. Collect charms passively from Slayer (Aberrant Spectres, Waterfiends are great).",
      },
      {
        levels: "50-60",
        method: "Bronze Minotaur / Bull Ant / Spirit Larupia (Crimson charms)",
        xpPerHour: "Batch-based",
        cost: "Medium",
        notes:
          "Crimson charms carry you from 50-96. Best spot to farm them: Waterfiends (Ancient Cavern) or Airut (Mazcab). Craft pouches in bulk.",
      },
      {
        levels: "60-70",
        method: "War Tortoise (67) / Lava Titan / Iron Minotaur (Crimson)",
        xpPerHour: "Batch-based",
        cost: "Medium",
        notes:
          "War Tortoise at 67 is a key unlock — +18 inventory space BoB, huge for Slayer. Make a stack for your own use AND extras to continue training.",
      },
      {
        levels: "70-80",
        method: "Bunyip (68) / Unicorn Stallion / Geyser Titan (Crimson)",
        xpPerHour: "Batch-based",
        cost: "Medium",
        notes:
          "Bunyip heals you passively — rent or make a stack. Geyser Titan (77) is popular for bulk XP from Crimson charms.",
      },
      {
        levels: "80-90",
        method: "Unicorn Stallion (88) / Abyssal Lurker (Crimson)",
        xpPerHour: "Batch-based",
        cost: "Medium",
        notes:
          "Unicorn Stallion scroll heals 15% max HP — best healing familiar in the game. Abyssal Lurker has high looting range.",
      },
      {
        levels: "90-96",
        method: "Nightmare Muspah / Blood Reaver (Crimson)",
        xpPerHour: "Batch-based",
        cost: "High",
        notes:
          "Blood Reaver at 93 is the top DPS familiar pre-Steel Titan. Save remaining Crimson charms for the push to 96 Pack Yak.",
      },
      {
        levels: "96-99",
        method: "Pack Yak (96) / Steel Titan (99) pouches — Blue charms",
        xpPerHour: "500K+ during DXP",
        cost: "High",
        notes:
          "Pack Yak is the #1 endgame BoB — 30 slots + banks from anywhere. Blue charms (rarest) give the most XP per charm — always save them for this push.",
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
        levels: "1-10",
        method: "Turael / Jacquelyn tasks (Burthorpe lodestone)",
        xpPerHour: "8-15K",
        cost: "Free",
        notes:
          "Turael assigns easy tasks — Cows, Rats, Goblins, Bears. Jacquelyn in Lumbridge is the same tier. Quick task for early momentum.",
      },
      {
        levels: "10-20",
        method: "Turael (skip tasks cheaply, chase charms)",
        xpPerHour: "10-20K",
        cost: "Free",
        notes:
          "Build up Slayer points here (15 pts per 10th task). You'll need points later to block tasks.",
      },
      {
        levels: "20-30",
        method: "Spria (Draynor Village) for variety",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Spria is a Turael-tier master with slightly different task options. Good for charm farming and quick tasks.",
      },
      {
        levels: "30-40",
        method: "Mazchna tasks (Canifis — Priest in Peril req)",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Step up from Turael. Mazchna assigns Banshees, Crawling Hands, Cave Bugs. Slayer Tower just west of Canifis has most tasks.",
      },
      {
        levels: "40-50",
        method: "Mazchna → Vannaka (Edgeville)",
        xpPerHour: "25-40K",
        cost: "Free",
        notes:
          "Vannaka at 40 Combat. Assigns Cockatrice, Basilisks (need mirror shields). Slayer Tower mid floors.",
      },
      {
        levels: "50-60",
        method: "Vannaka → Chaeldar (Zanaris)",
        xpPerHour: "35-55K",
        cost: "Free",
        notes:
          "Chaeldar in Zanaris (via fairy ring DIS or Lost City quest). Gives Bloodvelds, Aberrant Spectres, Turoth, Kurasks.",
      },
      {
        levels: "60-70",
        method: "Duradel (Shilo Village — Shilo Village quest req)",
        xpPerHour: "50-75K",
        cost: "Free",
        notes:
          "Duradel is your main master from 60-85. Gives Dust Devils, Dark Beasts, Nechryael, Waterfiends. Use Slayer points to block Mogres.",
      },
      {
        levels: "70-80",
        method: "Kuradal (Ancient Cavern — Duradel preferred if ironman)",
        xpPerHour: "80-130K",
        cost: "Free",
        notes:
          "Kuradal has her own dungeon with Abyssal Demons, Mithril Dragons, Waterfiends, Dark Beasts in walking distance. Task streaking bonus.",
      },
      {
        levels: "80-90",
        method: "Morvran (Prifddinas — Plague's End req)",
        xpPerHour: "130-220K",
        cost: "Free",
        notes:
          "Morvran is the best Slayer master for sub-99. Assigns high-value tasks: Rune Dragons, Ripper Demons, Camel Warriors, Acheron Mammoths.",
      },
      {
        levels: "90-99",
        method: "Morvran + Slayer Codex unlocks",
        xpPerHour: "180-300K",
        cost: "Free",
        notes:
          "Unlock Nechryael → Greater Nechryael, Muspahs, Soulgazers via Slayer points. Rune Dragons give 500K+ GP per task.",
      },
      {
        levels: "99-114",
        method: "Laniakea (Anachronia — 95 Slayer req)",
        xpPerHour: "250-400K",
        cost: "Free",
        notes:
          "Laniakea assigns ONLY high-level tasks: Soulgazers, Acheron Mammoths, Dinosaurs, Kalphite King. Highest XP Slayer master in the game.",
      },
      {
        levels: "114-120",
        method: "Laniakea Corrupted Creatures + Dinosaurs",
        xpPerHour: "400-600K",
        cost: "Free",
        notes:
          "Corrupted Scorpions/Workers unlock at 114. Dinosaurs (Asciatops, Bagrada Rex, etc.) at 95-120. Top XP/GP combo in the game.",
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
        levels: "1-10",
        method: "Copper / Tin at Lumbridge Swamp Mine",
        xpPerAction: "17.5 XP",
        xpPerHour: "5-10K",
        cost: "Free",
        notes:
          "South-east of Lumbridge castle. Bronze pickaxe from the mining tutor. Upgrade to Iron at 5, Steel at 6.",
      },
      {
        levels: "10-20",
        method: "Iron ore at Al Kharid mine (south)",
        xpPerAction: "35 XP",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Al Kharid bank is ~30 seconds away. Mithril pickaxe at 21. Iron respawns instantly with the rework — drop or bank ores.",
      },
      {
        levels: "20-30",
        method: "Iron ore at Dwarven Mines (Ice Mountain)",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Falador Dwarven Mines has 8+ iron rocks clustered. Take the shortcut back to Falador for quick banking.",
      },
      {
        levels: "30-40",
        method: "Coal at Mining Guild (Falador) + Juju Mining Potion",
        xpPerAction: "50 XP",
        xpPerHour: "30-45K",
        cost: "Free",
        notes:
          "Juju Mining Potion from Herblore Habitat gives a chance to double ore. Falador Mining Guild is AFK. Upgrade to Adamant pickaxe at 31.",
      },
      {
        levels: "40-50",
        method: "Coal or continue Iron (AFK mode)",
        xpPerHour: "35-50K",
        cost: "Free",
        notes:
          "Mining stamina in the rework means just click and wait. Coal at Mining Guild is the cleanest AFK. Rune pickaxe at 41.",
      },
      {
        levels: "50-60",
        method: "Mithril at Al Kharid / Crafting Guild",
        xpPerAction: "80 XP",
        xpPerHour: "30-45K",
        cost: "Free",
        notes:
          "Mithril at 55 is a new rock type. Crafting Guild (40 Crafting req) has mithril clusters. Al Kharid also works.",
      },
      {
        levels: "60-70",
        method: "Concentrated Coal (Living Rock Caverns)",
        xpPerHour: "40-60K",
        cost: "Free",
        notes:
          "Deposits under Falador. AFK-friendly since concentrated rocks don't deplete until fully mined. Avoid Living Rock Striker aggro.",
      },
      {
        levels: "70-80",
        method: "Granite at Desert Quarry (AFK)",
        xpPerAction: "50 XP",
        xpPerHour: "40-55K",
        cost: "Free",
        notes:
          "South of Bandit Camp in the Kharidian Desert. Bring full waterskins + desert robes. Incredibly AFK — click once every 5 min.",
      },
      {
        levels: "80-89",
        method: "Concentrated Gold (Living Rock Caverns) or Runite",
        xpPerHour: "45-60K",
        cost: "Free",
        notes:
          "Concentrated Gold is safe AFK. Runite at 80 sells for great money but slow XP. Dragon pickaxe at 61, Crystal pickaxe at 71.",
      },
      {
        levels: "89-99",
        method: "Seren Stones in Prifddinas (Cadarn district)",
        xpPerHour: "45-60K",
        cost: "Free",
        notes:
          "Requires Plague's End. THE most AFK mining method in the game — click once per ~5 min. Gives Harmonic Dust for Crystal tools.",
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
        levels: "1-10",
        method: "Shrimps + Anchovies at Lumbridge Swamp",
        xpPerAction: "10-40 XP",
        xpPerHour: "5-10K",
        cost: "Free",
        notes:
          "Grab a small fishing net from the Lumbridge fishing tutor. Swamp spots give both shrimps and anchovies. Drop the catch — no banking needed.",
      },
      {
        levels: "10-20",
        method: "Sardines + Herring at Draynor Village pier",
        xpPerAction: "20-30 XP",
        xpPerHour: "10-15K",
        cost: "Free",
        notes:
          "Fishing rod + bait. Draynor pier is right next to the Draynor bank. Good for passing through the 10-20 range quickly.",
      },
      {
        levels: "20-30",
        method: "Trout at Barbarian Village (fly fishing)",
        xpPerAction: "50 XP",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Fly fishing rod + feathers. River spot south of Barbarian Village. Very AFK. Walk to Edgeville bank to deposit.",
      },
      {
        levels: "30-40",
        method: "Salmon + Trout at Barbarian Village",
        xpPerAction: "50-70 XP",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Same spot — at 30 you start catching Salmon too. Same AFK loop. Feather consumption is low.",
      },
      {
        levels: "40-50",
        method: "Lobsters at Karamja dock (cage fishing)",
        xpPerAction: "90 XP",
        xpPerHour: "25-35K",
        cost: "Free",
        notes:
          "Bring a Lobster Pot + 30 gp for return boat. Karamja bank nearby (Ironman-friendly).",
      },
      {
        levels: "50-62",
        method: "Swordfish + Tuna at Catherby / Karamja",
        xpPerAction: "80-100 XP",
        xpPerHour: "25-40K",
        cost: "Free",
        notes:
          "Harpoon + Lobster Pot. Catherby has bank nearby. AFK training window.",
      },
      {
        levels: "62-70",
        method: "Monkfish at Piscatoris (Swan Song quest req)",
        xpPerAction: "120 XP",
        xpPerHour: "30-45K",
        cost: "Free",
        notes:
          "Swan Song has requirements but the quest XP skip is worth it. Piscatoris Colony has a bank inside.",
      },
      {
        levels: "68-80",
        method: "Deep Sea Fishing Hub (Fishing Guild → ferry)",
        xpPerHour: "40-60K",
        cost: "Free",
        notes:
          "THE best overall Fishing spot. Random events (whirlpools, fish frenzies) give bonus XP. Unlock perks with contribution points.",
      },
      {
        levels: "80-90",
        method: "Cavefish or Deep Sea Fishing Hub continued",
        xpPerAction: "300 XP (cavefish)",
        xpPerHour: "45-65K",
        cost: "Free",
        notes:
          "Cavefish in Deep Sea Hub or Rellekka Slayer Cave. Hub is more AFK; cavefish give more XP/action.",
      },
      {
        levels: "90-99",
        method: "Rocktails (Deep Sea Hub) or Living Rock Caverns",
        xpPerAction: "380 XP",
        xpPerHour: "50-70K",
        cost: "Free",
        notes:
          "Deep Sea Hub Rocktails are the best combo of XP + GP. LRC has aggressive mobs but same XP. Crystal Fishing Rod boost at 85.",
      },
      {
        levels: "99",
        method: "Fishing caps at 99",
        xpPerHour: "N/A",
        cost: "N/A",
        notes:
          "No 120 extension for Fishing. Post-99 is purely GP farming (Sailfish, Rocktails, Seerfish).",
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
        levels: "1-10",
        method: "Regular trees anywhere (Lumbridge)",
        xpPerAction: "25 XP",
        xpPerHour: "5-10K",
        cost: "Free",
        notes:
          "Bronze hatchet from Bob's Axes (Lumbridge). Chop any regular tree. Free hatchet upgrades at 6 (Iron), 11 (Steel).",
      },
      {
        levels: "10-20",
        method: "Oak trees at Draynor Village",
        xpPerAction: "37.5 XP",
        xpPerHour: "10-15K",
        cost: "Free",
        notes:
          "Two oak trees right next to Draynor bank. Cleanest 15→30 location in the game. Mithril hatchet at 21.",
      },
      {
        levels: "20-30",
        method: "Oak trees at Draynor or Varrock castle",
        xpPerHour: "12-18K",
        cost: "Free",
        notes:
          "Same oaks — or switch to the Varrock castle courtyard oaks. Adamant hatchet at 31.",
      },
      {
        levels: "30-40",
        method: "Willows at Draynor bank (south-west of bank)",
        xpPerAction: "67.5 XP",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Four willow trees right at Draynor bank — drop or bank logs. Rune hatchet at 41.",
      },
      {
        levels: "40-50",
        method: "Willows continued or Teak trees (Tai Bwo Wannai)",
        xpPerHour: "25-35K",
        cost: "Free",
        notes:
          "Willows are still great XP/hr at this range. Teaks give more XP/action but farther from bank.",
      },
      {
        levels: "50-60",
        method: "Maple trees at Seers Village bank",
        xpPerAction: "100 XP",
        xpPerHour: "25-40K",
        cost: "Free",
        notes:
          "Maples north of Seers bank. Complete Kandarin Achievement Diary for tree-chopping boost. Used in Fletching.",
      },
      {
        levels: "60-70",
        method: "Yew trees behind Grand Exchange (AFK)",
        xpPerAction: "175 XP",
        xpPerHour: "25-45K",
        cost: "Free",
        notes:
          "Three yews in the corner outside GE — bank is 10 steps away. Drop logs or sell for decent GP. Dragon hatchet at 61.",
      },
      {
        levels: "70-80",
        method: "Yews at Edgeville or Magic trees (Seers Village)",
        xpPerHour: "30-50K",
        cost: "Free",
        notes:
          "Crystal hatchet at 71 (Plague's End req) is a huge XP boost. Magic trees at 75 are slower but higher XP/log.",
      },
      {
        levels: "80-85",
        method: "Magic trees at Mage Training Arena or Sorcerer's Tower",
        xpPerAction: "250 XP",
        xpPerHour: "35-55K",
        cost: "Free",
        notes:
          "Magic trees are slow but XP-dense. MTA has 5+ clustered. AFK. Logs sell for great money.",
      },
      {
        levels: "85-94",
        method: "Acadia trees in Prifddinas + Crystallise spell",
        xpPerHour: "80-160K",
        cost: "Free",
        notes:
          "Crystallise (Lunar Spellbook, 76 Magic) on Acadia trees is THE fastest WC XP. Use divine charges as fuel. Without Crystallise, still 80K/hr AFK.",
      },
      {
        levels: "94-99",
        method: "Crystal trees in Prifddinas (pure AFK)",
        xpPerHour: "60-100K",
        cost: "Free",
        notes:
          "Crystal trees give no logs — just pure XP + Crystal tool seeds. Completely AFK. Cadarn district in Prifddinas.",
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
        levels: "1-10",
        method: "Potatoes + Onions + Cabbages (allotments)",
        xpPerHour: "Run-based",
        cost: "Free",
        notes:
          "Start at Falador farm (north gate). Plant 3 allotment patches + flower + compost bin. Do quick runs every 20 min. 5 XP per seed planted + harvest XP.",
      },
      {
        levels: "10-20",
        method: "Tomatoes (12) + Oak saplings (15) + Marrentill herbs (14)",
        xpPerHour: "Run-based",
        cost: "Low",
        notes:
          "Oak saplings give 14K XP per tree at maturity — plant one at every tree patch. Marrentill is cheap herb farming.",
      },
      {
        levels: "20-30",
        method: "Sweetcorn (20) + Willow saplings (30) + Tarromin (19)",
        xpPerHour: "Run-based",
        cost: "Low",
        notes:
          "Willow trees give 25K XP per tree check — big XP boost in tree runs. Start doing full herb runs.",
      },
      {
        levels: "30-40",
        method: "Strawberries (31) + Ranarr (32!) + Apple trees (27)",
        xpPerHour: "Run-based",
        cost: "Low",
        notes:
          "RANARR at 32 is your first profitable herb — clean Ranarrs sell for 10K+ ea. Do every herb run. Apple trees for XP.",
      },
      {
        levels: "40-50",
        method: "Watermelon (47) + Maple saplings (45) + Irit (44)",
        xpPerHour: "Run-based",
        cost: "Low",
        notes:
          "Keep planting Ranarr for GP. Maple trees give 45K XP per check. Cadava berries help with Herblore secondaries.",
      },
      {
        levels: "50-60",
        method: "Snapdragon (62 → plant Avantoe 50) + Yew sapling (60)",
        xpPerHour: "Run-based",
        cost: "Medium",
        notes:
          "Avantoe at 50 replaces Ranarr for XP. Yew trees give 81K XP per check and sell for 10M+ in logs long-term.",
      },
      {
        levels: "60-70",
        method: "Snapdragon (62) + Cactus (55) + Spirit Tree (83 prep)",
        xpPerHour: "Run-based",
        cost: "Medium",
        notes:
          "Snapdragon is the top herb for profit. Cactus patch in Al Kharid gives decent XP. Spirit tree seed prep from Monkey bones + Summoning.",
      },
      {
        levels: "70-80",
        method: "Torstol (85 → Lantadyme 73) + Magic saplings (75)",
        xpPerHour: "Run-based",
        cost: "High",
        notes:
          "Magic trees give 140K XP per check — always plant one per run. Lantadyme is bridge herb until Torstol.",
      },
      {
        levels: "80-90",
        method: "Torstol herbs + Palm trees (68) + Calquat (72)",
        xpPerHour: "Run-based",
        cost: "High",
        notes:
          "Torstol at 85 — Overload ingredient, great profit. Palm trees give 100K XP, Calquat 130K XP per check.",
      },
      {
        levels: "90-99",
        method: "Torstol + Elder saplings (90) + Spirit Trees",
        xpPerHour: "Run-based",
        cost: "Very High",
        notes:
          "Elder trees give 216K XP per check — the best tree. Plant one per daily run. Morchella mushrooms at 91 for extra patch.",
      },
      {
        levels: "99",
        method: "Farming caps at 99 — dailies continue giving XP/GP",
        xpPerHour: "Run-based",
        cost: "N/A",
        notes:
          "Post-99 = daily profit routine. Torstol + Elder + Spirit trees every 80 min / daily. Set up Farming Guild patches and Harmony Island for efficiency.",
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
        levels: "1-10",
        method: "Crimson Swifts (Feldip Hills)",
        xpPerAction: "34 XP",
        xpPerHour: "5-12K",
        cost: "Free",
        notes:
          "Bird snaring south of Yanille. Grab bird snares from Hunter tutor. Set 1 trap at level 1, 2 at level 20.",
      },
      {
        levels: "10-20",
        method: "Copper Longtails (Feldip Hills)",
        xpPerAction: "61 XP",
        xpPerHour: "10-18K",
        cost: "Free",
        notes:
          "Further south in Feldip. Same bird snare mechanic, more XP/action. Tedious but fast levels.",
      },
      {
        levels: "20-30",
        method: "Ruby Harvest butterflies OR Tropical Wagtails",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Butterflies on Karamja — use a Butterfly Net. Released butterflies give healing to other players. Wagtails at Ape Atoll (if unlocked) are better.",
      },
      {
        levels: "30-40",
        method: "Swamp Lizards (Canifis net trapping)",
        xpPerAction: "152 XP",
        xpPerHour: "25-40K",
        cost: "Free",
        notes:
          "Canifis swamp has 5+ trap spots — set rope + small fishing net traps. Best upgrade from birds. Lizards also used as weapons (Salamander).",
      },
      {
        levels: "40-50",
        method: "Orange Salamanders or Spined Larupia (box traps)",
        xpPerHour: "30-45K",
        cost: "Free",
        notes:
          "Uzer Desert for orange salamanders. Box traps at 27. Bring teasing stick.",
      },
      {
        levels: "50-60",
        method: "Red Chinchompas (Feldip Hills)",
        xpPerAction: "265 XP",
        xpPerHour: "40-60K",
        cost: "Profit",
        notes:
          "Red chins are a profitable bread-and-butter method. They also sell for Ranged training ammo. Set up 5 box traps once 60.",
      },
      {
        levels: "60-70",
        method: "Red Chinchompas + Herblore Habitat jadinkos",
        xpPerHour: "45-70K",
        cost: "Profit",
        notes:
          "Herblore Habitat jadinkos (draconic at 69) need specific bait herbs. More complex but big XP. Chins still competitive.",
      },
      {
        levels: "70-80",
        method: "Grenwalls (Tirannwn) or Prayer Scrolls hunting",
        xpPerHour: "70-100K",
        cost: "Profit",
        notes:
          "Grenwalls at 77 drop grenwall spikes (50 gp ea x hundreds). Best XP + GP combo. Ground Poko jadinkos also good.",
      },
      {
        levels: "80-90",
        method: "Grenwalls or Ornate Tortles (Uncharted Isles)",
        xpPerHour: "80-120K",
        cost: "Profit",
        notes:
          "Ornate Tortles at 96 are endgame — worth pushing to. Grenwalls stay solid until 99 if you don't want Uncharted Isle travel.",
      },
      {
        levels: "90-99",
        method: "Ornate Tortles on Uncharted Isles (Player Ports)",
        xpPerHour: "150-200K",
        cost: "Profit",
        notes:
          "Requires 90 Port upgrades. Best XP/GP in Hunter. Each voyage is an isolated instance of premium hunting.",
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
        levels: "1-10",
        method: "Pale wisps (Draynor) + Flickering wisps (10)",
        xpPerAction: "2-3 XP",
        xpPerHour: "10-15K",
        cost: "Free",
        notes:
          "Pale wisps just outside Draynor (north). Harvest memories → convert at rift. Use 'Enhanced' conversion for more XP.",
      },
      {
        levels: "10-20",
        method: "Flickering wisps (Gunnarsgrunn)",
        xpPerAction: "3.2 XP",
        xpPerHour: "15-20K",
        cost: "Free",
        notes:
          "North of the GE. Memory springs give bonus XP chunks randomly. Very AFK.",
      },
      {
        levels: "20-30",
        method: "Bright wisps (Mount Karuulm / 20)",
        xpPerHour: "18-25K",
        cost: "Free",
        notes:
          "North of Falador. Same AFK flow — harvest + convert. Do Guthixian Cache daily for bonus XP.",
      },
      {
        levels: "30-40",
        method: "Glowing wisps (30)",
        xpPerHour: "20-28K",
        cost: "Free",
        notes:
          "West of Yanille. Convert memories to divine energy for moderate profit or enhanced XP.",
      },
      {
        levels: "40-50",
        method: "Sparkling wisps (Trollheim area)",
        xpPerHour: "25-35K",
        cost: "Free",
        notes:
          "Just above Trollheim. Bring Trollheim teleport for quick access.",
      },
      {
        levels: "50-60",
        method: "Hall of Memories (50) — memory strands",
        xpPerHour: "40-55K",
        cost: "Free",
        notes:
          "Varrock Dig Site entrance. Complete Memorial to Guthix miniquest. More engaging than regular wisps + ~2x XP.",
      },
      {
        levels: "60-70",
        method: "Vibrant wisps (60, Feldip Hills) or continue Hall",
        xpPerHour: "35-50K",
        cost: "Free",
        notes:
          "Vibrant wisps are AFK solo method. Hall of Memories still dominant for XP/hr.",
      },
      {
        levels: "70-80",
        method: "Brilliant wisps (70) or Hall of Memories",
        xpPerHour: "40-55K",
        cost: "Profit",
        notes:
          "Brilliant energy sells well on GE. Prioritize Invention unlock at 80 Divination.",
      },
      {
        levels: "80-85",
        method: "Luminous wisps (80, Haunted Woods)",
        xpPerHour: "45-60K",
        cost: "Profit",
        notes:
          "Luminous energy is profitable. Invention unlocks at 80 — you can start augmenting gear now.",
      },
      {
        levels: "85-95",
        method: "Radiant wisps (85, Prifddinas)",
        xpPerHour: "50-65K",
        cost: "Profit",
        notes:
          "Radiant energy is in high demand for Invention. Prifddinas wisps right next to a bank.",
      },
      {
        levels: "95-99",
        method: "Incandescent wisps (95, Tirannwn)",
        xpPerHour: "55-75K",
        cost: "Profit",
        notes:
          "Highest tier wisps, north of Prifddinas. Best Divination money per hour. Supplement with Guthixian Cache daily.",
      },
      {
        levels: "ALL LEVELS",
        method: "Guthixian Cache (hourly D&D) — do this daily",
        xpPerHour: "Massive lump XP",
        cost: "Free",
        notes:
          "Runs every hour on the half-hour for 10 minutes. One of the best XP-per-time activities in the game. NEVER skip this.",
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
        levels: "1-10",
        method: "Shrimps on Lumbridge range",
        xpPerAction: "30 XP",
        xpPerHour: "30-45K",
        cost: "Low",
        notes:
          "Buy raw shrimps from GE (cheap). Cook on the Lumbridge range (has hidden burn-reduction). 1 min to 10.",
      },
      {
        levels: "10-20",
        method: "Sardines / Herring / Trout on range",
        xpPerAction: "40-70 XP",
        xpPerHour: "40-60K",
        cost: "Low",
        notes:
          "Trout unlocks at 15. Buy raw on GE. Lumbridge range still preferred for burn reduction.",
      },
      {
        levels: "20-30",
        method: "Salmon (25) / Pike (20)",
        xpPerAction: "80-90 XP",
        xpPerHour: "60-80K",
        cost: "Low",
        notes:
          "Bank-adjacent: Al Kharid range or Lumbridge range. Burn rate drops quickly.",
      },
      {
        levels: "30-40",
        method: "Tuna",
        xpPerAction: "100 XP",
        xpPerHour: "80-110K",
        cost: "Low",
        notes:
          "Raw tuna is cheap. Can cook 2,000+/hr at GE with bank-preset.",
      },
      {
        levels: "40-50",
        method: "Lobsters (40) / Swordfish (45)",
        xpPerAction: "120-140 XP",
        xpPerHour: "90-130K",
        cost: "Low",
        notes:
          "Get Cooking Gauntlets (Family Crest quest) BEFORE cooking lobsters — they drastically reduce burn.",
      },
      {
        levels: "50-62",
        method: "Swordfish / Bass (46)",
        xpPerAction: "140-150 XP",
        xpPerHour: "120-150K",
        cost: "Medium",
        notes:
          "Bass and Swordfish are the standard mid-game food cook. Portable range from TH/events gives +10% XP.",
      },
      {
        levels: "62-80",
        method: "Monkfish",
        xpPerAction: "150 XP",
        xpPerHour: "140-180K",
        cost: "Medium",
        notes:
          "Monkfish cook fast and barely burn with Cooking Gauntlets. Requires Swan Song to fish but you can just buy raw.",
      },
      {
        levels: "80-90",
        method: "Shark",
        xpPerAction: "210 XP",
        xpPerHour: "160-200K",
        cost: "Medium",
        notes:
          "Shark is the standard 90+ food. Buy raw, cook, resell cooked for small loss. Portable range stacking.",
      },
      {
        levels: "90-93",
        method: "Rocktail",
        xpPerAction: "225 XP",
        xpPerHour: "200-240K",
        cost: "Medium",
        notes:
          "Rocktail heals more than max HP (overheal). Always in demand. Small profit margin possible.",
      },
      {
        levels: "93-99",
        method: "Sailfish (top-tier bossing food)",
        xpPerAction: "350 XP",
        xpPerHour: "250-300K",
        cost: "Medium",
        notes:
          "Sailfish is the best combo food in the game. Fastest XP/hr. Use a Portable Range + Cooking Gauntlets.",
      },
      {
        levels: "99",
        method: "Cooking caps at 99 — no 120 extension",
        xpPerHour: "N/A",
        cost: "N/A",
        notes:
          "Cooking is one of the fastest 99s — can be done in <15 hours with Sailfish at 93+.",
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
        method: "The Knight's Sword quest (INSTANT skip to 29)",
        xpPerHour: "12,725 XP lump",
        cost: "Free",
        notes:
          "Zero requirements. Talk to Sir Vyvin's squire in Falador castle. Gives 12,725 Smithing XP. Skip the grind entirely.",
      },
      {
        levels: "29-40",
        method: "Iron burial armour (Artisans Workshop, Falador)",
        xpPerAction: "50 XP per bar",
        xpPerHour: "30-50K",
        cost: "Low",
        notes:
          "Burial armour = 2x XP vs regular smithing. Use the four anvils downstairs. Sacrifice the item after smithing (you lose the bars).",
      },
      {
        levels: "40-50",
        method: "Steel burial armour (Artisans Workshop)",
        xpPerHour: "50-80K",
        cost: "Low",
        notes:
          "Step up from iron. Steel bars from the Blast Furnace. Same workshop loop.",
      },
      {
        levels: "50-60",
        method: "Mithril burial armour OR Gold at Blast Furnace",
        xpPerHour: "80-130K",
        cost: "Medium",
        notes:
          "Gold bars + Goldsmith Gauntlets (Family Crest quest) at Blast Furnace = very fast cheap XP. Mithril burial if going ironman route.",
      },
      {
        levels: "60-70",
        method: "Adamant burial armour OR Gold at Blast Furnace",
        xpPerHour: "100-150K",
        cost: "Medium",
        notes:
          "Adamant burial at the workshop for bar efficiency. Goldsmith Gauntlets gold bars for pure speed.",
      },
      {
        levels: "70-80",
        method: "Rune burial armour (Artisans Workshop)",
        xpPerHour: "120-180K",
        cost: "Medium",
        notes:
          "Rune burial is the mid-to-late game standard. Rune bars from GE or Blast Furnace (cheaper).",
      },
      {
        levels: "80-89",
        method: "Necronium / Bane burial armour",
        xpPerHour: "130-200K",
        cost: "Medium",
        notes:
          "Necronium at 70, Bane at 80. Both use Seren Stones ore (AFK mining at 89). Burial bonus stacks.",
      },
      {
        levels: "89-92",
        method: "Elder Rune burial armour",
        xpPerAction: "200+ XP/bar",
        xpPerHour: "180-240K",
        cost: "High",
        notes:
          "Elder Rune bars (89 req) are expensive but fast. Use +1 or +2 burial variants for better XP/bar.",
      },
      {
        levels: "92-99",
        method: "Elder Rune +3 / +4 burial armour",
        xpPerHour: "220-280K",
        cost: "High",
        notes:
          "Higher plus-variants need more ore but give 2x XP stack. Artisans Workshop is the required location.",
      },
      {
        levels: "99",
        method: "Make Masterwork armour (T90) for profit/use",
        xpPerHour: "Passive",
        cost: "Very High",
        notes:
          "At 99 you can make full Masterwork Armour set — T90 melee power armour worth millions. Best long-term goal for smiths.",
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
        levels: "1-10",
        method: "Leather gloves + boots",
        xpPerAction: "13-16 XP",
        xpPerHour: "10-18K",
        cost: "Low",
        notes:
          "Buy leather + thread from GE. Use the Crafting table at Lumbridge or any spinning wheel. Gloves first (13 XP), boots (16 XP).",
      },
      {
        levels: "10-20",
        method: "Leather body + Cowhide tanning",
        xpPerAction: "25 XP",
        xpPerHour: "20-30K",
        cost: "Low",
        notes:
          "Tan cowhides at the Al Kharid tanner (1 gp each). Turn into leather bodies. Used to prep for d'hides later.",
      },
      {
        levels: "20-30",
        method: "Gold bracelets + necklaces (furnace)",
        xpPerAction: "30-40 XP",
        xpPerHour: "25-40K",
        cost: "Low",
        notes:
          "Furnace required — Al Kharid furnace is closest to bank. Use the necklace mould. Cheap gold bars.",
      },
      {
        levels: "30-40",
        method: "Gold amulets / Sapphire necklaces",
        xpPerAction: "55-65 XP",
        xpPerHour: "40-60K",
        cost: "Medium",
        notes:
          "Cut gems first at 20+ Crafting for extra XP. Sapphire necklaces (40) are a solid jump.",
      },
      {
        levels: "40-50",
        method: "Emerald jewellery / Green d'hide vambraces",
        xpPerAction: "62 XP",
        xpPerHour: "60-90K",
        cost: "Medium",
        notes:
          "Green d'hide vambraces at 57 Crafting. Tan hides at Al Kharid tanner. GE portable crafter gives +10%.",
      },
      {
        levels: "50-63",
        method: "Green d'hide bodies (best XP/hide)",
        xpPerAction: "186 XP",
        xpPerHour: "100-150K",
        cost: "Medium",
        notes:
          "Buy tanned green d'hides from GE. Bank preset → body → resell for partial recovery. Same loop used through 99.",
      },
      {
        levels: "63-73",
        method: "Blue d'hide bodies",
        xpPerAction: "210 XP",
        xpPerHour: "130-170K",
        cost: "Medium",
        notes:
          "Same loop, higher XP/action. Buy tanned blue d'hides. Sell back for ~80% cost recovery.",
      },
      {
        levels: "73-77",
        method: "Red d'hide bodies",
        xpPerAction: "234 XP",
        xpPerHour: "160-200K",
        cost: "Medium",
        notes:
          "Brief band — rush through to Black d'hide at 77. Keep the bank loop going.",
      },
      {
        levels: "77-80",
        method: "Black d'hide bodies (Invention unlock prep)",
        xpPerAction: "258 XP",
        xpPerHour: "200-260K",
        cost: "High",
        notes:
          "80 Crafting unlocks Invention (with 80 Div and 80 Smith). Best Crafting XP/hr. Portable crafter stacks +10%.",
      },
      {
        levels: "80-90",
        method: "Black d'hide bodies (continue) + portable crafter",
        xpPerHour: "200-280K",
        cost: "High",
        notes:
          "Same method carries you. Portable crafters at W84 GE regularly. Dragonhide bodies (81) for ironmen.",
      },
      {
        levels: "90-99",
        method: "Black d'hide bodies OR Gem enchanting",
        xpPerHour: "240-300K",
        cost: "High",
        notes:
          "Stick with black d'hide — it's the fastest. Alternative: Portable well + Dragonstone bracelets during events.",
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
        levels: "1-10",
        method: "Arrow shafts from regular logs",
        xpPerAction: "5 XP",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Cut logs into arrow shafts with a knife. 15 shafts per log. Free training, no materials needed.",
      },
      {
        levels: "10-20",
        method: "Shortbows (u) from regular logs + stringing",
        xpPerAction: "5-10 XP",
        xpPerHour: "20-40K",
        cost: "Low",
        notes:
          "Fletch regular logs into shortbows (u) then string them. Bowstrings from GE are cheap.",
      },
      {
        levels: "20-30",
        method: "Oak shortbows (u) + stringing",
        xpPerAction: "16.5 XP + 25 XP",
        xpPerHour: "40-60K",
        cost: "Low",
        notes:
          "Oak logs + bowstrings. Fletch in a batch, then string all at once. Much faster than alternating.",
      },
      {
        levels: "30-40",
        method: "Willow shortbows (u) + stringing",
        xpPerAction: "33.3 XP + 66.6 XP",
        xpPerHour: "70-100K",
        cost: "Low",
        notes:
          "Willow logs are cheap. Stringing gives more XP than cutting. Always do both steps.",
      },
      {
        levels: "40-50",
        method: "Maple shortbows (u) + stringing",
        xpPerAction: "50 XP + 50 XP",
        xpPerHour: "100-140K",
        cost: "Low",
        notes:
          "Maple logs from Seers. Inventory full of logs + bowstrings, batch both steps.",
      },
      {
        levels: "50-60",
        method: "Maple longbows OR Magic shieldbows",
        xpPerHour: "120-160K",
        cost: "Low",
        notes:
          "Maple longbows (55) are efficient. Same stringing loop.",
      },
      {
        levels: "60-70",
        method: "Yew shortbows (u) + stringing",
        xpPerAction: "67.5 XP + 67.5 XP",
        xpPerHour: "150-200K",
        cost: "Low",
        notes:
          "Yew logs from Edgeville/GE. Stringing yew bows is where the real XP rolls in.",
      },
      {
        levels: "70-80",
        method: "Yew longbows (70) + Magic shortbows (75)",
        xpPerAction: "75-83 XP",
        xpPerHour: "250-350K",
        cost: "Low",
        notes:
          "Yew longbows and Magic shortbows both crush XP. Yew longbow = slight profit sometimes.",
      },
      {
        levels: "80-85",
        method: "Magic longbows (85) — start Elder at 85",
        xpPerHour: "300-400K",
        cost: "Low",
        notes:
          "Magic longbows bridge to Elder. Only a brief band — push to 85 for the real XP.",
      },
      {
        levels: "85-92",
        method: "Elder shortbows (u) + stringing",
        xpPerAction: "93.7 XP + 93.7 XP",
        xpPerHour: "700K-1M",
        cost: "Medium",
        notes:
          "THE fastest Fletching method — nearly 1M XP/hr. Elder logs + Crystal bowstrings (85 Cr req for bowstring).",
      },
      {
        levels: "92-99",
        method: "Elder shortbows (continue)",
        xpPerHour: "800K-1.1M",
        cost: "Medium",
        notes:
          "Can hit 99 in under 5 hours of clicking. Fletching is often the first 99 cape for this reason.",
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
        levels: "1-10",
        method: "Regular log bonfires (GE World 2)",
        xpPerAction: "45 XP",
        xpPerHour: "15-30K",
        cost: "Low",
        notes:
          "Bring a tinderbox + regular logs. Join a bonfire at GE — crowds give group XP bonus. Light your own if none.",
      },
      {
        levels: "10-20",
        method: "Oak log bonfires",
        xpPerAction: "67.5 XP",
        xpPerHour: "40-60K",
        cost: "Low",
        notes:
          "Oak logs cheap on GE. Add to an existing bonfire. Truly AFK — one click every 5 min.",
      },
      {
        levels: "20-30",
        method: "Willow log bonfires",
        xpPerAction: "135 XP",
        xpPerHour: "60-85K",
        cost: "Low",
        notes:
          "Willow logs ~30 gp each. Great XP/cost ratio. Ring of Fire gives +2% Firemaking XP.",
      },
      {
        levels: "30-40",
        method: "Maple log bonfires",
        xpPerAction: "202.5 XP",
        xpPerHour: "80-110K",
        cost: "Low",
        notes:
          "Maple logs are the sweet spot of cheap + fast. Stand at a crowded bonfire for bonus.",
      },
      {
        levels: "40-50",
        method: "Maple continued → Teak bonfires (35)",
        xpPerHour: "100-130K",
        cost: "Low",
        notes:
          "Teak logs give more XP/log. Tropical Wagtails is good alt if Firemaking gets boring.",
      },
      {
        levels: "50-60",
        method: "Yew log bonfires",
        xpPerAction: "303.8 XP",
        xpPerHour: "140-180K",
        cost: "Low",
        notes:
          "Yew bonfire is the bread-and-butter mid-game. AFK while you do dailies. Clan avatar for +3% XP.",
      },
      {
        levels: "60-75",
        method: "Yew bonfires (continue) or Mahogany (50)",
        xpPerHour: "160-220K",
        cost: "Low",
        notes:
          "Mahogany logs give higher XP. Yew is cheaper. Depends on your GP budget.",
      },
      {
        levels: "75-85",
        method: "Magic log bonfires",
        xpPerAction: "455 XP",
        xpPerHour: "250-320K",
        cost: "Medium",
        notes:
          "Magic logs are fast + fairly expensive. Flame Gloves + Ring of Fire (All Fired Up) for +4% XP total.",
      },
      {
        levels: "85-92",
        method: "Elder log bonfires OR Prifddinas Crystallise",
        xpPerAction: "607.5 XP",
        xpPerHour: "350-450K",
        cost: "Medium",
        notes:
          "Elder logs are the fastest bonfire. Alternatively: Crystallise (Lunar) + Acadia trees = both WC + FM at once.",
      },
      {
        levels: "92-99",
        method: "Elder bonfires + Portable Brazier stacking",
        xpPerHour: "400-550K",
        cost: "Medium",
        notes:
          "Portable Braziers (Treasure Hunter / events) give +10% XP. Stack with Ring of Fire + Flame Gloves for max speed.",
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
        levels: "1-10",
        method: "Druidic Ritual quest (INSTANT to 4) + basic Attack pots",
        xpPerHour: "Instant + 10-20K",
        cost: "Low",
        notes:
          "Druidic Ritual unlocks Herblore + gives 250 XP (level 4 start). Mix Attack potions (Guam + Eye of Newt) for quick levels.",
      },
      {
        levels: "10-20",
        method: "Attack potions (Guam + Eye of Newt)",
        xpPerAction: "25 XP",
        xpPerHour: "20-30K",
        cost: "Low",
        notes:
          "Clean Guam → add to Vial of Water → add Eye of Newt. Portable wells for +10%. Very cheap method.",
      },
      {
        levels: "20-30",
        method: "Antipoison (Marrentill + Unicorn Horn Dust)",
        xpPerAction: "37.5 XP",
        xpPerHour: "30-40K",
        cost: "Low",
        notes:
          "Marrentill + Unicorn Horn Dust. Antipoisons are cheap and always useful.",
      },
      {
        levels: "30-38",
        method: "Strength potions / Harralander potions",
        xpPerAction: "50 XP",
        xpPerHour: "35-45K",
        cost: "Low",
        notes:
          "Strength potions (Tarromin + Limpwurt Root). Bridge band to Prayer pots at 38.",
      },
      {
        levels: "38-50",
        method: "Prayer potions (Ranarr + Snape Grass)",
        xpPerAction: "87.5 XP",
        xpPerHour: "50-70K",
        cost: "Medium",
        notes:
          "Prayer pots are always profitable due to high demand. Start your Farming herb runs to offset costs.",
      },
      {
        levels: "50-60",
        method: "Super Attack (45) / Super Strength (55)",
        xpPerAction: "100-125 XP",
        xpPerHour: "60-80K",
        cost: "Medium",
        notes:
          "Super potions are staple combat. Irit + Eye of Newt, Kwuarm + Limpwurt. Moderate cost.",
      },
      {
        levels: "60-66",
        method: "Super Defence (66) setup + Anti-fires (69 prep)",
        xpPerHour: "70-100K",
        cost: "Medium",
        notes:
          "Cadantine + White Berry. Super Defence bridges to Overload ingredients prep.",
      },
      {
        levels: "66-80",
        method: "Super Defence potions (continue)",
        xpPerAction: "150 XP",
        xpPerHour: "100-140K",
        cost: "Medium",
        notes:
          "Best cost/XP mid-game. Do big batches (5000+ potions) at portable well.",
      },
      {
        levels: "80-88",
        method: "Super Ranging (82) / Super Magic (76) potions",
        xpPerHour: "130-180K",
        cost: "Medium",
        notes:
          "Dwarf Weed + Wine of Zamorak. Prep for Extreme potions at 88.",
      },
      {
        levels: "88-96",
        method: "Extreme potions (all 5 — untradeable, for Overloads)",
        xpPerAction: "150-200 XP",
        xpPerHour: "150-220K",
        cost: "High",
        notes:
          "Make Extreme Attack, Strength, Defence, Ranging, Magic. All 5 are Overload ingredients. Save them all.",
      },
      {
        levels: "96-99",
        method: "Overloads (combine all 5 Extremes + Torstol)",
        xpPerAction: "1000 XP",
        xpPerHour: "250-350K",
        cost: "Very High",
        notes:
          "Overloads = 17% boost to all combat stats. Untradeable, you make them for yourself. Save for Double XP Week.",
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
        levels: "1-10",
        method: "Buy a house (Rimmington), build Crude Wooden Chairs",
        xpPerAction: "58 XP",
        xpPerHour: "15-30K",
        cost: "Low",
        notes:
          "Buy POH from Estate Agent (1,000 gp in Varrock). Use Plank Sack + Butler for fast plank delivery. Regular planks cheap at sawmill.",
      },
      {
        levels: "10-20",
        method: "Wooden Bookcases",
        xpPerAction: "115 XP",
        xpPerHour: "25-45K",
        cost: "Low",
        notes:
          "Need 4 planks each. Build → remove → build loop in Study. Butler fetches 24 planks per trip.",
      },
      {
        levels: "20-33",
        method: "Oak Larders (33 req — start Oak tables at 20)",
        xpPerAction: "240-480 XP",
        xpPerHour: "50-100K",
        cost: "Medium",
        notes:
          "Oak tables at 20, Larders at 33. Demon Butler (40 Con) is faster than Butler. Buy Oak planks from GE (2 gp + 500 sawmill cost each).",
      },
      {
        levels: "33-52",
        method: "Oak Larders (Kitchen)",
        xpPerAction: "480 XP",
        xpPerHour: "100-180K",
        cost: "Medium",
        notes:
          "8 oak planks each. Demon Butler brings 24 at a time. Build → remove → rebuild. AFK-ish once you get the rhythm.",
      },
      {
        levels: "52-74",
        method: "Mahogany Tables (Dining Room)",
        xpPerAction: "840 XP",
        xpPerHour: "200-300K",
        cost: "High",
        notes:
          "6 mahogany planks each. Expensive — save for DXP. Build → remove loop in dining room.",
      },
      {
        levels: "74-99",
        method: "Prawnbrokers (flatpacks) in POH workbench",
        xpPerAction: "1100+ XP",
        xpPerHour: "500-700K",
        cost: "Very High",
        notes:
          "Flotsam Prawnbrokers are the fastest Construction XP. Build flatpacks — no tearing down required. Very click-intensive but incredibly fast.",
      },
      {
        levels: "99",
        method: "Caps at 99 — Gilded Altar + Max Guild access",
        xpPerHour: "N/A",
        cost: "N/A",
        notes:
          "Construction caps at 99. Most important unlock: Gilded Altar (67) for Prayer training. Max Guild unlocks at 2,475 total level.",
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
        levels: "1-10",
        method: "Rune Mysteries quest + early Runespan (Wizard Tower)",
        xpPerHour: "10-20K",
        cost: "Free",
        notes:
          "Rune Mysteries unlocks the skill. Enter Runespan from the top of Wizard's Tower. Siphon Pale wisps. Completely AFK.",
      },
      {
        levels: "10-20",
        method: "Runespan ground floor (Flickering wisps)",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Same floor — siphon different tiers as you level. Earn Runespan points to buy Wicked Hood + Runecrafting robes.",
      },
      {
        levels: "20-30",
        method: "Runespan ground floor (Bright wisps)",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Move between islands by using the airship nodes. The hood piece from Runespan gives daily rune teleports.",
      },
      {
        levels: "30-40",
        method: "Runespan middle floor (Glowing/Sparkling)",
        xpPerHour: "25-35K",
        cost: "Free",
        notes:
          "Floor 2 via the airship. Better XP rates. Grab the Wicked Hood if you haven't already.",
      },
      {
        levels: "40-50",
        method: "Runespan middle (Sparkling/Vibrant)",
        xpPerHour: "30-40K",
        cost: "Free",
        notes:
          "Vibrant wisps start at 50. Nature runes (44) are the first profitable rune for Abyss running if you want GP.",
      },
      {
        levels: "50-60",
        method: "Runespan upper floor (Vibrant/Brilliant)",
        xpPerHour: "35-50K",
        cost: "Free",
        notes:
          "Floor 3 via the upper airship. Brilliant wisps at 60. Still AFK.",
      },
      {
        levels: "60-70",
        method: "Runespan upper (Brilliant) + Law runes (Abyss)",
        xpPerHour: "40-60K",
        cost: "Profit",
        notes:
          "At 54+ Law runes via Abyss = serious GP. Runespan for pure AFK. Abyss is risky (Wilderness) but profitable.",
      },
      {
        levels: "70-77",
        method: "Runespan upper (Luminous) or Nature through Abyss",
        xpPerHour: "45-65K",
        cost: "Profit",
        notes:
          "Luminous wisps at 80, but 70+ still good on floor 3. Abyss running for GP if you want it.",
      },
      {
        levels: "77-85",
        method: "Blood runes via Abyss (77)",
        xpPerHour: "50-70K",
        cost: "Profit",
        notes:
          "Blood altar in the Abyss. Use Pouches (small→giant) for more essence per trip. 10M+ GP/hr at 77+.",
      },
      {
        levels: "85-90",
        method: "Blood / Death runes via Abyss",
        xpPerHour: "55-75K",
        cost: "Profit",
        notes:
          "Bring Wicked Hood + Runecrafting robes for XP bonuses. Each trip = 28+ essence via pouches.",
      },
      {
        levels: "90-99",
        method: "Soul runes via Abyss (90)",
        xpPerAction: "33 XP/essence",
        xpPerHour: "70-100K",
        cost: "Profit",
        notes:
          "Soul runes are the highest-tier runes. Best XP + best profit combo. The Great Orb Project minigame gives RC XP lumps too.",
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
        levels: "1-10",
        method: "Gnome Stronghold Agility Course",
        xpPerAction: "86.5 XP per lap",
        xpPerHour: "8-12K",
        cost: "Free",
        notes:
          "Tree Gnome Stronghold (spirit tree or teleport). Starting course. Slow XP but required until you unlock better.",
      },
      {
        levels: "10-20",
        method: "Gnome Stronghold + Silverhawk Boots (passive)",
        xpPerHour: "10-18K",
        cost: "Free",
        notes:
          "Silverhawk Boots (if owned) give passive Agility XP while skilling. Equip them while doing anything else.",
      },
      {
        levels: "20-30",
        method: "Gnome Course + Shortcuts unlocking",
        xpPerHour: "10-15K",
        cost: "Free",
        notes:
          "Unlock useful shortcuts (Crumbling Wall at 5, Gnome rope at 21). Keep doing Gnome laps.",
      },
      {
        levels: "30-40",
        method: "Barbarian Outpost Course (Bar Crawl miniquest)",
        xpPerAction: "153.2 XP per lap",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Barbarian Outpost (north of Gnome Stronghold). Required: complete Bar Crawl miniquest first. Big XP jump.",
      },
      {
        levels: "40-52",
        method: "Barbarian Outpost (continue)",
        xpPerHour: "22-32K",
        cost: "Free",
        notes:
          "Same course until Wilderness opens at 52. Pick up Mark of Grace rewards randomly.",
      },
      {
        levels: "52-65",
        method: "Wilderness Agility Course",
        xpPerAction: "571 XP per lap",
        xpPerHour: "35-50K",
        cost: "Free",
        notes:
          "In deep Wilderness — PvP risk. Bring nothing valuable, use lodestone teleport to leave. Biggest XP jump pre-Hefin.",
      },
      {
        levels: "65-77",
        method: "Ape Atoll Course (Monkey Madness req)",
        xpPerAction: "580 XP per lap",
        xpPerHour: "45-60K",
        cost: "Free",
        notes:
          "Requires Monkey Madness + Monkey Greegree. Indoor (no PvP). Better than Wild at 65+.",
      },
      {
        levels: "77-85",
        method: "Hefin Agility Course (Prifddinas)",
        xpPerAction: "780 XP per lap",
        xpPerHour: "60-80K",
        cost: "Free",
        notes:
          "THE endgame course. Requires Plague's End. Very few obstacles — nearly AFK between jumps.",
      },
      {
        levels: "85-99",
        method: "Hefin Course + Voice of Seren bonus",
        xpPerHour: "70-95K",
        cost: "Free",
        notes:
          "Hefin District Voice of Seren week doubles XP — check daily. Advanced Hefin pads unlock bonus XP per lap.",
      },
      {
        levels: "99",
        method: "Agility caps at 99 — shortcut unlocks continue",
        xpPerHour: "N/A",
        cost: "N/A",
        notes:
          "Continue laps for Graceful outfit. Various high-level shortcuts save hours of travel time across the game.",
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
        levels: "1-10",
        method: "Buyers and Cellars quest + Pickpocket Men (Lumbridge)",
        xpPerHour: "5-10K",
        cost: "Free",
        notes:
          "BaC unlocks Thieving + gives ~1K XP. Pickpocket Men in Lumbridge. Don't wear armour — it increases fail rate.",
      },
      {
        levels: "10-20",
        method: "Cake Stall (East Ardougne)",
        xpPerAction: "16 XP",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Cake Stall in Ardougne market. Guards chase you — run into the bank to reset. Great early XP.",
      },
      {
        levels: "20-30",
        method: "Silk Stall (Al Kharid)",
        xpPerAction: "24 XP",
        xpPerHour: "20-35K",
        cost: "Profit",
        notes:
          "Al Kharid silk stall is AFK-friendly. Silk sells for ~120 gp each to Silk merchant.",
      },
      {
        levels: "30-40",
        method: "HAM Members (Lumbridge cellar)",
        xpPerAction: "22.5 XP",
        xpPerHour: "25-40K",
        cost: "Free",
        notes:
          "Enter HAM cellar via trapdoor north of Lumbridge. Pickpocket for jewellery + clue scroll pieces. AFK with guards.",
      },
      {
        levels: "40-50",
        method: "Warriors (Ardougne) or Master Farmers",
        xpPerAction: "26-44 XP",
        xpPerHour: "30-50K",
        cost: "Free",
        notes:
          "Master Farmers drop herb seeds — great for Farming. Ardougne Warriors respawn fast.",
      },
      {
        levels: "50-60",
        method: "Rogue outfit farm + Blackjacking Bandits (Pollnivneach)",
        xpPerHour: "60-100K",
        cost: "Free",
        notes:
          "Rogue outfit (53) doubles pickpocket loot — get from Flash Powder Factory. Blackjacking at The Feud quest = knockout + pickpocket loop.",
      },
      {
        levels: "60-71",
        method: "Menaphite Thugs (Pollnivneach) — knockout + pickpocket",
        xpPerAction: "134 XP per cycle",
        xpPerHour: "100-180K",
        cost: "Free",
        notes:
          "Higher blackjacking tier. Click-intensive — knock out then pickpocket twice. Fastest pre-Pyramid.",
      },
      {
        levels: "71-80",
        method: "Pyramid Plunder (Sophanem)",
        xpPerHour: "150-220K",
        cost: "Free",
        notes:
          "Minigame in Sophanem. Loot urns and sarcophagi across 8 rooms in 5 minutes. No quest req. Artefacts sell to collector.",
      },
      {
        levels: "80-91",
        method: "Pyramid Plunder + Prifddinas (early 85)",
        xpPerHour: "180-250K",
        cost: "Free",
        notes:
          "Pyramid Plunder carries to 91. Dorgeshuun Dungeon pickpocketing is an alt.",
      },
      {
        levels: "91-99",
        method: "Prifddinas Elves (all 4 clans rotate)",
        xpPerAction: "353 XP",
        xpPerHour: "220-320K",
        cost: "Profit",
        notes:
          "Pickpocket Cadarn/Iorwerth/Amlodd/Ithell elves. Rotate between Voice of Seren districts for +100% XP. Excellent GP from crystal triskelions.",
      },
      {
        levels: "99",
        method: "Thieving caps at 99 — Prifddinas stays optimal",
        xpPerHour: "N/A",
        cost: "N/A",
        notes:
          "Ardougne Cloak 4 + Rogue outfit + Gloves of Silence stack to max XP. Dungeoneering outfit pieces also stack.",
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
        levels: "1-10",
        method: "Kharid-et dig site (tutorial excavation hotspots)",
        xpPerHour: "10-18K",
        cost: "Free",
        notes:
          "Archaeology Guild in Varrock → Kharid-et. Follow the tutorial. Restore Roman-era artefacts at the nearby workbench.",
      },
      {
        levels: "10-20",
        method: "Kharid-et (higher-tier hotspots) + Collections",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Unlock more hotspots at Kharid-et. Complete Collections (grouped artefact sets) for lump-sum XP bonuses.",
      },
      {
        levels: "20-30",
        method: "Infernal Source (Lumbridge swamp cave)",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Entrance in Lumbridge swamp. Second dig site — demonic artefacts. Big step up in XP/hr.",
      },
      {
        levels: "30-42",
        method: "Infernal Source (deeper hotspots)",
        xpPerHour: "25-40K",
        cost: "Free",
        notes:
          "Unlock Ancient Summoning relics here. Infernal Source is dense — minimize walking time.",
      },
      {
        levels: "42-50",
        method: "Everlight dig site (Morytania lighthouse)",
        xpPerHour: "30-45K",
        cost: "Free",
        notes:
          "Third dig site — Saradomin/Zaros artefacts. Requires Priest in Peril for Morytania access.",
      },
      {
        levels: "50-58",
        method: "Everlight (advanced hotspots) + Research",
        xpPerHour: "35-50K",
        cost: "Free",
        notes:
          "Research at Archaeology Guild unlocks passive level-up XP chunks. Submit Research assignments to Reiniger.",
      },
      {
        levels: "58-70",
        method: "Stormguard Citadel (floating sky-fortress)",
        xpPerHour: "40-60K",
        cost: "Free",
        notes:
          "Fourth dig site — access via airship in Falador. Armadyl/Bandos era. Higher material requirements for restoration.",
      },
      {
        levels: "70-76",
        method: "Stormguard (top floors) + Mysteries/Collections",
        xpPerHour: "45-65K",
        cost: "Free",
        notes:
          "Collections and Mysteries give big lump XP. Check the Codex for which are worth chasing.",
      },
      {
        levels: "76-85",
        method: "Warforge (underground Goblin dig site)",
        xpPerHour: "55-75K",
        cost: "Free",
        notes:
          "Fifth dig site — Goblin/Bandos era. Dense hotspots. Chronotes (currency) accumulate fast here for relic purchases.",
      },
      {
        levels: "85-98",
        method: "Warforge (deeper) + Research daily",
        xpPerHour: "60-85K",
        cost: "Free",
        notes:
          "Research assignments (submit 3 per day) give massive passive XP. Relic: Font of Life at 70 Arch = permanent 1% HP recovery.",
      },
      {
        levels: "98-110",
        method: "Orthen (Anachronia) + Research + daily",
        xpPerHour: "70-100K",
        cost: "Free",
        notes:
          "Final dig site on Anachronia. Dino-era artefacts. Best post-99 XP. Collections here unlock powerful relics.",
      },
      {
        levels: "110-120",
        method: "Orthen + Research + High-tier relics",
        xpPerHour: "90-130K",
        cost: "Free",
        notes:
          "Abyssal Link (118) removes rune/ammo costs in combat — probably the best combat relic in the game.",
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
        levels: "1-10",
        method: "Invention tutorial (Falador Invention Guild)",
        xpPerHour: "Tutorial lump",
        cost: "Free",
        notes:
          "Required: 80 Div/Smith/Crafting. Complete the tutorial for ~4K XP. Learn to disassemble and augment.",
      },
      {
        levels: "10-20",
        method: "Disassemble cheap items (Planks / Arrows / Bows)",
        xpPerHour: "20-35K",
        cost: "Low",
        notes:
          "Bulk-disassemble cheap items from GE for component XP. Oak planks give simple parts + XP. Auto-disassemble option speeds it up.",
      },
      {
        levels: "20-27",
        method: "Disassemble + Make Augmentors",
        xpPerHour: "25-40K",
        cost: "Low",
        notes:
          "Augmentor unlocks at 27 Invention — the main tool. Make a few as components from your materials cache.",
      },
      {
        levels: "27-40",
        method: "Augment T60 combat gear + use in combat",
        xpPerHour: "Passive (with combat)",
        cost: "Medium",
        notes:
          "Augment Dragon weapons/armour. Combat XP = Invention XP via the gear. Disassemble at gear level 10 for massive XP chunk.",
      },
      {
        levels: "40-50",
        method: "T70 gear loop (Whip, Armadyl, Subjugation)",
        xpPerHour: "Passive + 30-50K",
        cost: "Medium",
        notes:
          "Augmented T70 gear levels faster. Disassemble or use Equipment Siphons (36+) to preserve item.",
      },
      {
        levels: "50-60",
        method: "T80 gear (Drygores/Ascension/Virtus) augmented",
        xpPerHour: "Passive + 50-80K",
        cost: "High",
        notes:
          "T80 gear levels quickly during Slayer. Siphon at level 12 to keep the gear, disassemble at 10 for more XP.",
      },
      {
        levels: "60-74",
        method: "T80 gear + Perks unlock (Precise 5 at 74)",
        xpPerHour: "Passive + 70-120K",
        cost: "High",
        notes:
          "Precise 5 perk at 74 = massive DPS. Keep siphoning loops going. Chase materials for perk rolls.",
      },
      {
        levels: "74-89",
        method: "T90 gear augmented (Noxious, Drygores, Tectonic)",
        xpPerHour: "Passive + 100-180K",
        cost: "Very High",
        notes:
          "T90 gear levels very fast. Aftershock perk unlocks at 89 — THE best DPS perk for weapons.",
      },
      {
        levels: "89-99",
        method: "T90/T92 siphoning + Ancient Gizmos",
        xpPerHour: "Passive + 150-250K",
        cost: "Very High",
        notes:
          "Ancient Invention at 99 Arch adds 2 more perk slots. Rush this unlock.",
      },
      {
        levels: "99-110",
        method: "T92 gear siphoning + ED3 / high-tier Slayer",
        xpPerHour: "Passive + 200-350K",
        cost: "Very High",
        notes:
          "ED3 is top-tier Invention XP via T92 gear levelling. Elite Dungeons triple-dip Slayer + combat + Invention.",
      },
      {
        levels: "110-120",
        method: "Continued T92 siphoning + all Slayer/PvM",
        xpPerHour: "Passive + 300-450K",
        cost: "Very High",
        notes:
          "Invention is purely passive at endgame — your combat XP automatically contributes. Scavenging 4 perk at 99 = free components from combat.",
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
        levels: "1-10",
        method: "Small C1 floors solo (Daemonheim)",
        xpPerHour: "10-18K",
        cost: "Free",
        notes:
          "Daemonheim is in north-east Morytania (use Ring of Kinship to teleport). Solo small floors, rush bosses. Complexity 1 = combat only.",
      },
      {
        levels: "10-20",
        method: "Small C1 solo (rush floors 1-10)",
        xpPerHour: "15-25K",
        cost: "Free",
        notes:
          "Keep rushing small floors, reset progression at your current max. Binding items (arrows/staves) persist across floors.",
      },
      {
        levels: "20-30",
        method: "Small C1/C2 solo (floors 10-15)",
        xpPerHour: "20-30K",
        cost: "Free",
        notes:
          "Complexity 2 adds skilling. Small C2 solo is fastest XP in this range. Don't waste time looting low-value items.",
      },
      {
        levels: "30-40",
        method: "Medium floors 2-3 person groups",
        xpPerHour: "30-45K",
        cost: "Free",
        notes:
          "Find friends or W77 LFG. Medium floors with a duo is the sweet spot 30-60. Rush low, complete high.",
      },
      {
        levels: "40-50",
        method: "Medium C1 floors duo/trio",
        xpPerHour: "40-60K",
        cost: "Free",
        notes:
          "Stick to complexity 1 for pure combat speed. Rotate gatestones for efficient pathing.",
      },
      {
        levels: "50-60",
        method: "Large C1 floors 4-5 person groups",
        xpPerHour: "60-90K",
        cost: "Free",
        notes:
          "Large maps with 5 players = maximum XP bonuses for teamwork. Bonecrusher + Herbicide speed up runs.",
      },
      {
        levels: "60-70",
        method: "Large C1 floors 5-person (highest floor)",
        xpPerHour: "90-140K",
        cost: "Free",
        notes:
          "Always do your highest floor as C1 large 5-person for best XP. Reset path every 3-4 floors.",
      },
      {
        levels: "70-80",
        method: "Large floors + save tokens for Chaotic weapons",
        xpPerHour: "120-180K",
        cost: "Free",
        notes:
          "Chaotic weapons (T80) at 80 cost 200K+ tokens each. Save tokens — they're the best free weapons in RS3.",
      },
      {
        levels: "80-90",
        method: "Large floors (10-42 range) + Frost Dragons",
        xpPerHour: "150-220K",
        cost: "Free",
        notes:
          "Frost Dragons unlock in Daemonheim dungeon at 85 Dungeoneering. Best F2P Prayer bone source outside POH.",
      },
      {
        levels: "90-99",
        method: "Large floors 5-person (max XP) + Elite Dungeon tokens",
        xpPerHour: "180-280K",
        cost: "Free",
        notes:
          "Elite Dungeons (ED1-3) give Dungeoneering tokens + XP. Good alternative to floor grinding.",
      },
      {
        levels: "99-110",
        method: "Elite Dungeons + Large floors",
        xpPerHour: "250-400K",
        cost: "Free",
        notes:
          "ED3 is the top XP zone. Rotate floors and EDs for variety. Daemonheim aura at 99 gives Dungeoneering bonus.",
      },
      {
        levels: "110-120",
        method: "ED3 token farming + Large floors",
        xpPerHour: "350-500K",
        cost: "Free",
        notes:
          "ED3 5-minute kills at T92 gear = ~400K/hr. Compulsory for Trimmed Completionist cape.",
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
