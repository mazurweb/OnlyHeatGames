"use client";

import { useState, useEffect, useCallback } from "react";

/* ──── types ──── */
interface Quest {
  id: string;
  name: string;
  reqs: string;
  rewards: string;
  f2p?: boolean;
  members?: boolean;
  length?: "Short" | "Medium" | "Long" | "Very Long";
  combatXP?: boolean;
  skillUnlock?: boolean;
  areaUnlock?: boolean;
  noReqs?: boolean;
}

type Filter =
  | "All"
  | "F2P Only"
  | "Members"
  | "No Requirements"
  | "Combat XP"
  | "Skill Unlock"
  | "Area Unlock";

type Section =
  | "Starter"
  | "Early (10-30)"
  | "Mid (30-60)"
  | "Late (60-80)"
  | "Endgame (80+)"
  | "Quest Chains"
  | "Best XP Quests";

/* ──── localStorage helper ──── */
const STORAGE_KEY = "rs3hub_v1";

function loadChecked(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveChecked(data: Record<string, boolean>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* quota exceeded — ignore */
  }
}

/* ──── quest data ──── */
const STARTER_QUESTS: Quest[] = [
  { id: "cooks_assistant", name: "Cook's Assistant", reqs: "None", rewards: "300 Cooking XP", f2p: true, noReqs: true, length: "Short" },
  { id: "blood_pact", name: "The Blood Pact", reqs: "None", rewards: "100 Attack, Magic, Ranged XP", f2p: true, noReqs: true, combatXP: true, length: "Short" },
  { id: "restless_ghost", name: "The Restless Ghost", reqs: "None", rewards: "1,125 Prayer XP", f2p: true, noReqs: true, length: "Short", skillUnlock: true },
  { id: "myths_white", name: "Myths of the White Lands", reqs: "None", rewards: "500 XP lamp (any skill)", f2p: true, noReqs: true, length: "Short" },
  { id: "unstable_foundations", name: "Unstable Foundations", reqs: "None", rewards: "Starter combat gear + XP", f2p: true, noReqs: true, combatXP: true, length: "Short" },
  { id: "let_them_eat_pie", name: "Let Them Eat Pie", reqs: "None", rewards: "100 Cooking, Thieving XP", f2p: true, noReqs: true, length: "Short" },
  { id: "swept_away", name: "Swept Away", reqs: "None", rewards: "Broomstick (Magic training tool)", f2p: true, noReqs: true, length: "Short" },
  { id: "gunnars_ground", name: "Gunnar's Ground", reqs: "None", rewards: "200 Crafting XP, 300 Attack XP", f2p: true, noReqs: true, combatXP: true, length: "Short" },
  { id: "rune_mysteries", name: "Rune Mysteries", reqs: "None", rewards: "Unlocks Runecrafting skill, Air talisman", f2p: true, noReqs: true, skillUnlock: true, length: "Short" },
  { id: "death_plateau", name: "Death Plateau", reqs: "None", rewards: "Climbing boots, 100 Attack XP", members: true, noReqs: true, combatXP: true, length: "Short" },
  { id: "druidic_ritual", name: "Druidic Ritual", reqs: "None", rewards: "Unlocks Herblore skill, 250 Herblore XP", members: true, noReqs: true, skillUnlock: true, length: "Short" },
  { id: "wolf_whistle", name: "Wolf Whistle", reqs: "None", rewards: "Unlocks Summoning skill, 276 Summoning XP, Gold charms", members: true, noReqs: true, skillUnlock: true, length: "Short" },
  { id: "stolen_hearts", name: "Stolen Hearts / Diamond in the Rough", reqs: "None", rewards: "Combined 2,250 Agility, 2,250 Thieving, 2,250 Constitution XP", members: true, noReqs: true, length: "Medium" },
];

const EARLY_QUESTS: Quest[] = [
  { id: "waterfall", name: "Waterfall Quest", reqs: "None (dangerous area)", rewards: "13,750 Attack XP, 13,750 Strength XP — HUGE!", members: true, noReqs: true, combatXP: true, length: "Medium" },
  { id: "dragon_slayer", name: "Dragon Slayer", reqs: "32 Quest Points, 33 Magic", rewards: "Rune platebody access, 18,650 combined combat XP", f2p: true, combatXP: true, length: "Long" },
  { id: "vampire_slayer", name: "Vampire Slayer", reqs: "None (combat recommended)", rewards: "4,825 Attack XP", f2p: true, combatXP: true, length: "Short" },
  { id: "tree_gnome_village", name: "Tree Gnome Village", reqs: "None (combat recommended)", rewards: "11,450 Attack XP, Spirit tree access", members: true, combatXP: true, areaUnlock: true, length: "Medium" },
  { id: "fight_arena", name: "Fight Arena", reqs: "None", rewards: "12,175 Attack XP, 2,175 Thieving XP", members: true, noReqs: true, combatXP: true, length: "Medium" },
  { id: "grand_tree", name: "The Grand Tree", reqs: "25 Agility, Tree Gnome Village", rewards: "18,400 Attack XP, 7,900 Agility, 2,150 Magic", members: true, combatXP: true, areaUnlock: true, length: "Long" },
  { id: "monkey_madness", name: "Monkey Madness", reqs: "The Grand Tree, Tree Gnome Village", rewards: "Dragon scimitar access, 20K combat XP choices", members: true, combatXP: true, length: "Long" },
  { id: "priest_in_peril", name: "Priest in Peril", reqs: "None (combat recommended)", rewards: "Morytania access, 1,406 Prayer XP", members: true, areaUnlock: true, length: "Medium" },
  { id: "nature_spirit", name: "Nature Spirit", reqs: "Priest in Peril, 18 Crafting", rewards: "3,000 Crafting, 2,000 Defence, 2,000 Constitution XP", members: true, length: "Medium" },
  { id: "lost_city", name: "Lost City", reqs: "31 Crafting, 36 Woodcutting", rewards: "Zanaris access, Dragon dagger/longsword access", members: true, areaUnlock: true, length: "Short" },
];

const MID_QUESTS: Quest[] = [
  { id: "desert_treasure", name: "Desert Treasure", reqs: "53 Thieving, 50 Firemaking, 10 Slayer, 50 Magic", rewards: "Ancient Magicks spellbook (Ice Barrage!), 20K Magic XP", members: true, skillUnlock: true, combatXP: true, length: "Very Long" },
  { id: "underground_pass", name: "Underground Pass", reqs: "25 Ranged, Biohazard", rewards: "Iban's staff access, 3,000 Agility, 3,000 Attack XP", members: true, combatXP: true, length: "Long" },
  { id: "regicide", name: "Regicide", reqs: "56 Agility, Underground Pass", rewards: "Tirannwn access, 13,750 Agility XP", members: true, areaUnlock: true, length: "Long" },
  { id: "lunar_diplomacy", name: "Lunar Diplomacy", reqs: "61 Crafting, 40 Defence, 49 Firemaking, 5 Herblore, 65 Magic, 60 Mining, 55 Woodcutting", rewards: "Lunar spellbook (Vengeance, Cure, NPC Contact)", members: true, skillUnlock: true, length: "Long" },
  { id: "rfd_start", name: "Recipe for Disaster (subquests)", reqs: "Varies per subquest (10+ quests)", rewards: "Barrows Gloves — best-in-slot gloves for a long time", members: true, length: "Very Long" },
  { id: "horror_deep", name: "Horror from the Deep", reqs: "35 Agility", rewards: "God books (damage-boosting pocket slot items)", members: true, length: "Medium" },
  { id: "haunted_mine", name: "Haunted Mine", reqs: "Priest in Peril, 15 Agility, 35 Crafting", rewards: "Salve amulet — 15% damage and accuracy vs undead", members: true, combatXP: true, length: "Medium" },
];

const LATE_QUESTS: Quest[] = [
  { id: "song_of_elves", name: "Song of the Elves", reqs: "75+ in many skills, full Elf quest chain", rewards: "Prifddinas access! Best city in game. Huge XP rewards.", members: true, areaUnlock: true, length: "Very Long" },
  { id: "kings_ransom", name: "King's Ransom", reqs: "65 Defence, multiple quests", rewards: "Piety prayer (massive melee boost), 33K Defence XP", members: true, combatXP: true, skillUnlock: true, length: "Medium" },
  { id: "branches_darkmeyer", name: "Branches of Darkmeyer", reqs: "63 Slayer, many Morytania quests", rewards: "Darkmeyer access, Drakan's medallion, T70 weapons", members: true, areaUnlock: true, combatXP: true, length: "Long" },
  { id: "temple_senntisten", name: "Temple at Senntisten", reqs: "50 Prayer, Desert Treasure", rewards: "Ancient Curses! Turmoil, Soul Split — game-changing prayers", members: true, skillUnlock: true, length: "Medium" },
  { id: "while_guthix_sleeps", name: "While Guthix Sleeps", reqs: "270 Quest Points, 65+ in 5 skills", rewards: "400K XP total across lamps, Dragon platebody", members: true, combatXP: true, length: "Very Long" },
];

const ENDGAME_QUESTS: Quest[] = [
  { id: "world_wakes", name: "The World Wakes", reqs: "140 Combat (recommended), multiple quests", rewards: "450K XP in lamps! Sunshine, Death's Swiftness, Natural Instinct", members: true, combatXP: true, skillUnlock: true, length: "Very Long" },
  { id: "fate_of_gods", name: "Fate of the Gods", reqs: "75 Agility, Divination, Slayer, Summoning", rewards: "Nex access, 375K Divination XP, Zaros lore", members: true, areaUnlock: true, length: "Very Long" },
  { id: "ritual_mahjarrat", name: "Ritual of the Mahjarrat", reqs: "76 Mining, 77 Agility, many quests", rewards: "Glacor Cave, 350K XP across skills, epic quest", members: true, combatXP: true, length: "Very Long" },
  { id: "sliskes_endgame", name: "Sliske's Endgame", reqs: "Many 6th Age quests", rewards: "1.5M total XP across huge lamps!", members: true, length: "Very Long" },
  { id: "river_of_blood", name: "River of Blood", reqs: "78 many skills, full Morytania chain", rewards: "Sunspear weapon (T78, useful for all styles)", members: true, combatXP: true, length: "Very Long" },
  { id: "desperate_times", name: "Desperate Times / Desperate Measures", reqs: "50 Mining, many quests", rewards: "Anachronia access, 250K XP, new Slayer creatures", members: true, areaUnlock: true, length: "Long" },
  { id: "city_senntisten", name: "City of Senntisten", reqs: "Azzanadra's Quest, high skills", rewards: "T80+ ancient spells, access to Elder God Wars Dungeon", members: true, areaUnlock: true, skillUnlock: true, length: "Long" },
];

/* ──── quest chain data ──── */
interface ChainQuest {
  name: string;
  reqs: string;
}

const ELF_CHAIN: ChainQuest[] = [
  { name: "Plague City", reqs: "None" },
  { name: "Biohazard", reqs: "Plague City" },
  { name: "Underground Pass", reqs: "Biohazard, 25 Ranged" },
  { name: "Regicide", reqs: "Underground Pass, 56 Agility" },
  { name: "Roving Elves", reqs: "Regicide" },
  { name: "Mourning's End Part I", reqs: "Roving Elves, 60 Ranged, Thieving" },
  { name: "Mourning's End Part II", reqs: "ME Part I" },
  { name: "Within the Light", reqs: "ME Part II, 69 Agility" },
  { name: "Song of the Elves", reqs: "Within the Light, 75+ in many skills" },
];

const NECRO_CHAIN: ChainQuest[] = [
  { name: "Necromancy!", reqs: "None" },
  { name: "Kili Row", reqs: "Necromancy!" },
  { name: "Rune Mythos", reqs: "Kili Row" },
  { name: "The Spirit of War", reqs: "Rune Mythos" },
  { name: "Vessel of the Harbinger", reqs: "The Spirit of War, high Necromancy" },
];

const MORYTANIA_CHAIN: ChainQuest[] = [
  { name: "Priest in Peril", reqs: "None" },
  { name: "Nature Spirit", reqs: "Priest in Peril, 18 Crafting" },
  { name: "In Aid of the Myreque", reqs: "Nature Spirit, 25 Crafting" },
  { name: "In Search of the Myreque", reqs: "Nature Spirit" },
  { name: "Darkness of Hallowvale", reqs: "In Aid of the Myreque, 5 Construction, 20 Mining, 22 Thieving, 33 Magic, 40 Strength" },
  { name: "Legacy of Seergaze", reqs: "Darkness of Hallowvale, 29 Agility, 31 Crafting, 35 Construction, 49 Firemaking, 47 Mining, 46 Slayer" },
  { name: "The Branches of Darkmeyer", reqs: "Legacy of Seergaze, 63 Slayer" },
  { name: "The Lord of Vampyrium", reqs: "Branches of Darkmeyer" },
  { name: "River of Blood", reqs: "Lord of Vampyrium, 78 in many skills" },
];

const DORGESHUUN_CHAIN: ChainQuest[] = [
  { name: "The Lost Tribe", reqs: "Rune Mysteries, 13 Agility, 13 Thieving, 17 Mining" },
  { name: "Death to the Dorgeshuun", reqs: "The Lost Tribe, 23 Thieving, 23 Agility" },
  { name: "Another Slice of H.A.M.", reqs: "Death to the Dorgeshuun, 15 Attack, 25 Prayer" },
  { name: "The Chosen Commander", reqs: "Another Slice of H.A.M., 46 Mining, 46 Thieving, 46 Agility, 46 Strength" },
];

const FREMENNIK_CHAIN: ChainQuest[] = [
  { name: "The Fremennik Trials", reqs: "25 Fletching, 40 Crafting, 40 Woodcutting" },
  { name: "The Fremennik Isles", reqs: "Fremennik Trials, 20 Construction, 40 Agility, 56 Woodcutting, 46 Crafting" },
  { name: "Glorious Memories", reqs: "Fremennik Isles, Mountain Daughter" },
  { name: "Blood Runs Deep", reqs: "Glorious Memories, Horror from the Deep, 75 Attack, Strength, Defence" },
  { name: "The Fremennik Exiles", reqs: "Blood Runs Deep, Lunar Diplomacy, many skill reqs" },
];

const BEST_XP_QUESTS = [
  { quest: "The World Wakes", skill: "Any (lamps)", xp: "450,000" },
  { quest: "Sliske's Endgame", skill: "Any (lamps)", xp: "1,500,000" },
  { quest: "While Guthix Sleeps", skill: "Any (lamps)", xp: "400,000" },
  { quest: "Waterfall Quest", skill: "Attack + Strength", xp: "27,500" },
  { quest: "Fight Arena", skill: "Attack", xp: "12,175" },
  { quest: "The Grand Tree", skill: "Attack + Agility", xp: "26,300" },
  { quest: "Dragon Slayer", skill: "Combat skills", xp: "18,650" },
  { quest: "Song of the Elves", skill: "Various", xp: "~200,000" },
  { quest: "Fate of the Gods", skill: "Divination", xp: "375,000" },
  { quest: "Temple at Senntisten", skill: "Prayer", xp: "23,000 + Ancient Curses" },
  { quest: "Desert Treasure", skill: "Magic", xp: "20,000 + Ancient Magicks" },
  { quest: "King's Ransom", skill: "Defence", xp: "33,000 + Piety prayer" },
  { quest: "Ritual of the Mahjarrat", skill: "Various", xp: "350,000" },
  { quest: "Desperate Measures", skill: "Various", xp: "250,000" },
];

/* ──── sub-components ──── */
function QuestRow({
  q,
  checked,
  onToggle,
}: {
  q: Quest;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <tr>
      <td style={{ width: 32 }}>
        <div className={`chk ${checked ? "on" : ""}`} onClick={onToggle} />
      </td>
      <td className={checked ? "td-g" : ""} style={checked ? { textDecoration: "line-through", opacity: 0.5 } : {}}>
        {q.name}
      </td>
      <td style={checked ? { opacity: 0.5 } : {}}>{q.reqs}</td>
      <td style={checked ? { opacity: 0.5 } : {}}>{q.rewards}</td>
      <td>
        {q.f2p && <span className="badge badge-green" style={{ marginRight: 4 }}>F2P</span>}
        {q.members && <span className="badge badge-blue" style={{ marginRight: 4 }}>Members</span>}
        {q.length && <span className="badge badge-gold">{q.length}</span>}
      </td>
    </tr>
  );
}

function QuestTable({
  quests,
  checked,
  toggle,
  filter,
}: {
  quests: Quest[];
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
  filter: Filter;
}) {
  const filtered = quests.filter((q) => {
    if (filter === "All") return true;
    if (filter === "F2P Only") return q.f2p === true;
    if (filter === "Members") return q.members === true;
    if (filter === "No Requirements") return q.noReqs === true;
    if (filter === "Combat XP") return q.combatXP === true;
    if (filter === "Skill Unlock") return q.skillUnlock === true;
    if (filter === "Area Unlock") return q.areaUnlock === true;
    return true;
  });

  if (filtered.length === 0) {
    return <p style={{ fontStyle: "italic" }}>No quests match the current filter.</p>;
  }

  return (
    <table className="tbl">
      <thead>
        <tr>
          <th style={{ width: 32 }}></th>
          <th>Quest</th>
          <th>Requirements</th>
          <th>Rewards</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((q) => (
          <QuestRow
            key={q.id}
            q={q}
            checked={!!checked[q.id]}
            onToggle={() => toggle(q.id)}
          />
        ))}
      </tbody>
    </table>
  );
}

function ChainTable({ chain }: { chain: ChainQuest[] }) {
  return (
    <table className="tbl">
      <thead>
        <tr>
          <th>#</th>
          <th>Quest</th>
          <th>Requirements</th>
        </tr>
      </thead>
      <tbody>
        {chain.map((q, i) => (
          <tr key={q.name}>
            <td className="td-g">{i + 1}</td>
            <td>{q.name}</td>
            <td>{q.reqs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ================================================================
   SECTION RENDERERS
   ================================================================ */

function StarterSection({ checked, toggle, filter }: { checked: Record<string, boolean>; toggle: (id: string) => void; filter: Filter }) {
  const done = STARTER_QUESTS.filter((q) => checked[q.id]).length;
  return (
    <>
      <h1>Starter Quests (No Requirements)</h1>
      <p>These quests can be started immediately with a brand-new account. They introduce game mechanics, unlock skills, and provide early XP boosts.</p>
      <div className="info-box green">
        <strong>Progress:</strong> {done} / {STARTER_QUESTS.length} completed
      </div>
      <QuestTable quests={STARTER_QUESTS} checked={checked} toggle={toggle} filter={filter} />
    </>
  );
}

function EarlySection({ checked, toggle, filter }: { checked: Record<string, boolean>; toggle: (id: string) => void; filter: Filter }) {
  const done = EARLY_QUESTS.filter((q) => checked[q.id]).length;
  return (
    <>
      <h1>Early Quests (Levels 10-30)</h1>
      <p>These quests offer massive XP rewards for low-level accounts. Waterfall Quest alone can jump you from level 1 to 30 in Attack and Strength instantly.</p>
      <div className="info-box">
        <strong>Priority:</strong> Do Waterfall Quest FIRST. It gives 13,750 Attack and 13,750 Strength XP with no combat requirements. This is the single best early-game quest in RS3.
      </div>
      <div className="info-box green">
        <strong>Progress:</strong> {done} / {EARLY_QUESTS.length} completed
      </div>
      <QuestTable quests={EARLY_QUESTS} checked={checked} toggle={toggle} filter={filter} />
    </>
  );
}

function MidSection({ checked, toggle, filter }: { checked: Record<string, boolean>; toggle: (id: string) => void; filter: Filter }) {
  const done = MID_QUESTS.filter((q) => checked[q.id]).length;
  return (
    <>
      <h1>Mid-Game Quests (Levels 30-60)</h1>
      <p>These quests unlock game-changing content: Ancient Magicks, Lunar spellbook, Barrows Gloves, and the Salve amulet. Each one is a significant power boost.</p>
      <div className="info-box purple">
        <strong>Priority:</strong> Desert Treasure unlocks Ancient Magicks (Ice Barrage) which is essential for both PvM and Slayer. Do this as soon as you meet the requirements.
      </div>
      <div className="info-box green">
        <strong>Progress:</strong> {done} / {MID_QUESTS.length} completed
      </div>
      <QuestTable quests={MID_QUESTS} checked={checked} toggle={toggle} filter={filter} />
    </>
  );
}

function LateSection({ checked, toggle, filter }: { checked: Record<string, boolean>; toggle: (id: string) => void; filter: Filter }) {
  const done = LATE_QUESTS.filter((q) => checked[q.id]).length;
  return (
    <>
      <h1>Late-Game Quests (Levels 60-80)</h1>
      <p>These quests unlock the most powerful content in the game: Prifddinas, Ancient Curses (Soul Split + Turmoil), and massive XP rewards.</p>
      <div className="info-box">
        <strong>Top Priority:</strong> Temple at Senntisten unlocks Ancient Curses including Soul Split (heal by dealing damage) and Turmoil/Anguish/Torment (massive combat boosts). This is the single biggest upgrade for any account.
      </div>
      <div className="info-box green">
        <strong>Progress:</strong> {done} / {LATE_QUESTS.length} completed
      </div>
      <QuestTable quests={LATE_QUESTS} checked={checked} toggle={toggle} filter={filter} />
    </>
  );
}

function EndgameSection({ checked, toggle, filter }: { checked: Record<string, boolean>; toggle: (id: string) => void; filter: Filter }) {
  const done = ENDGAME_QUESTS.filter((q) => checked[q.id]).length;
  return (
    <>
      <h1>Endgame Quests (Levels 80+)</h1>
      <p>The grandmaster quests with the biggest XP rewards and most important unlocks. The World Wakes alone gives 450K XP in lamps. Sliske&apos;s Endgame gives 1.5M XP total.</p>
      <div className="info-box red">
        <strong>Warning:</strong> These quests have high requirements and often involve difficult boss fights. Make sure you have good gear and food before attempting them.
      </div>
      <div className="info-box green">
        <strong>Progress:</strong> {done} / {ENDGAME_QUESTS.length} completed
      </div>
      <QuestTable quests={ENDGAME_QUESTS} checked={checked} toggle={toggle} filter={filter} />
    </>
  );
}

function QuestChainsSection() {
  return (
    <>
      <h1>Quest Chains</h1>
      <p>Many of RS3&apos;s best rewards are locked behind long quest chains. Here are the most important chains and the order to complete them.</p>

      <h2>Elf Quest Chain (Plague City to Song of the Elves)</h2>
      <div className="info-box">
        <strong>Reward:</strong> Prifddinas — the best city in the game. Contains high-level Slayer, a grand exchange, lodestone, Agility course, and more. This is the most important quest chain in RS3.
      </div>
      <ChainTable chain={ELF_CHAIN} />

      <h2>Necromancy Quest Chain</h2>
      <div className="info-box purple">
        <strong>Reward:</strong> Full Necromancy progression. Each quest unlocks new gear tiers, abilities, and the final quest unlocks the Rasial boss for T95 weapons.
      </div>
      <ChainTable chain={NECRO_CHAIN} />

      <h2>Morytania Quest Chain (Priest in Peril to River of Blood)</h2>
      <div className="info-box red">
        <strong>Reward:</strong> Darkmeyer access, Sunspear weapon (T78 all styles), Drakan&apos;s medallion teleport, and access to endgame Morytania content.
      </div>
      <ChainTable chain={MORYTANIA_CHAIN} />

      <h2>Dorgeshuun Quest Chain</h2>
      <div className="info-box blue">
        <strong>Reward:</strong> Access to the Dorgeshuun mines, bone crossbow, and The Chosen Commander gives great XP rewards plus access to Bandos content.
      </div>
      <ChainTable chain={DORGESHUUN_CHAIN} />

      <h2>Fremennik Quest Chain</h2>
      <div className="info-box">
        <strong>Reward:</strong> Fremennik helm options (Berserker, Archer, Farseer), access to Neitiznot and Jatizso, Lunar Diplomacy prereqs, and eventually The Fremennik Exiles.
      </div>
      <ChainTable chain={FREMENNIK_CHAIN} />
    </>
  );
}

function BestXPSection() {
  return (
    <>
      <h1>Best XP Rewards from Quests</h1>
      <p>These quests give the most XP per time invested. If you want to level fast, prioritize these quests over grinding.</p>

      <table className="tbl">
        <thead>
          <tr>
            <th>Quest</th>
            <th>Skill / Type</th>
            <th>Total XP</th>
          </tr>
        </thead>
        <tbody>
          {BEST_XP_QUESTS.map((q) => (
            <tr key={q.quest}>
              <td className="td-g">{q.quest}</td>
              <td>{q.skill}</td>
              <td className="td-xp">{q.xp}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="info-box green">
        <strong>Pro Tip:</strong> Save XP lamps from quests like The World Wakes and Sliske&apos;s Endgame for expensive or slow skills like Herblore, Prayer, Construction, and Summoning. These skills cost millions of GP to train normally, so free XP from lamps is extremely valuable.
      </div>
    </>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
const SECTIONS: Section[] = [
  "Starter",
  "Early (10-30)",
  "Mid (30-60)",
  "Late (60-80)",
  "Endgame (80+)",
  "Quest Chains",
  "Best XP Quests",
];

const SECTION_ICONS: Record<Section, string> = {
  Starter: "🌱",
  "Early (10-30)": "🗡️",
  "Mid (30-60)": "🛡️",
  "Late (60-80)": "🏰",
  "Endgame (80+)": "👑",
  "Quest Chains": "🔗",
  "Best XP Quests": "⭐",
};

const FILTERS: Filter[] = [
  "All",
  "F2P Only",
  "Members",
  "No Requirements",
  "Combat XP",
  "Skill Unlock",
  "Area Unlock",
];

export default function QuestsPage() {
  const [section, setSection] = useState<Section>("Starter");
  const [filter, setFilter] = useState<Filter>("All");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  /* load from localStorage on mount */
  useEffect(() => {
    setChecked(loadChecked());
  }, []);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      saveChecked(next);
      return next;
    });
  }, []);

  /* count total progress */
  const allQuests = [...STARTER_QUESTS, ...EARLY_QUESTS, ...MID_QUESTS, ...LATE_QUESTS, ...ENDGAME_QUESTS];
  const totalDone = allQuests.filter((q) => checked[q.id]).length;

  const showFilter = !["Quest Chains", "Best XP Quests"].includes(section);

  return (
    <div className="page-shell">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sb-label">Quest Guide</div>
        {SECTIONS.map((s) => (
          <button
            key={s}
            className={`sb-btn ${section === s ? "active" : ""}`}
            onClick={() => setSection(s)}
          >
            <span>{SECTION_ICONS[s]}</span> {s}
          </button>
        ))}

        <div className="sb-label" style={{ marginTop: 20 }}>Progress</div>
        <div style={{ padding: "0 14px" }}>
          <div className="prog-wrap">
            <div className="prog-meta">
              <span className="prog-label">Completed</span>
              <span className="prog-val">{totalDone} / {allQuests.length}</span>
            </div>
            <div className="prog-bar">
              <div
                className="prog-fill"
                style={{ width: `${allQuests.length ? (totalDone / allQuests.length) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="page-content">
        {/* Filter Bar */}
        {showFilter && (
          <div className="filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`fbtn ${filter === f ? "on" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {/* Section content */}
        {section === "Starter" && <StarterSection checked={checked} toggle={toggle} filter={filter} />}
        {section === "Early (10-30)" && <EarlySection checked={checked} toggle={toggle} filter={filter} />}
        {section === "Mid (30-60)" && <MidSection checked={checked} toggle={toggle} filter={filter} />}
        {section === "Late (60-80)" && <LateSection checked={checked} toggle={toggle} filter={filter} />}
        {section === "Endgame (80+)" && <EndgameSection checked={checked} toggle={toggle} filter={filter} />}
        {section === "Quest Chains" && <QuestChainsSection />}
        {section === "Best XP Quests" && <BestXPSection />}
      </main>
    </div>
  );
}
