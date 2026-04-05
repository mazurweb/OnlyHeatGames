"use client";

import { useState, useEffect, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Storage helpers                                                    */
/* ------------------------------------------------------------------ */
const STORAGE_KEY = "rs3hub_v1";

function loadStore(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveStore(store: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

/* ------------------------------------------------------------------ */
/*  ChecklistItem                                                      */
/* ------------------------------------------------------------------ */
function ChecklistItem({
  id,
  label,
  store,
  onToggle,
}: {
  id: string;
  label: React.ReactNode;
  store: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const checked = !!store[id];
  return (
    <li className={checked ? "done" : ""} onClick={() => onToggle(id)}>
      <span className={`chk${checked ? " on" : ""}`} />
      <span>{label}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  ProgressBar                                                        */
/* ------------------------------------------------------------------ */
function ProgressBar({
  label,
  ids,
  store,
}: {
  label: string;
  ids: string[];
  store: Record<string, boolean>;
}) {
  const done = ids.filter((id) => store[id]).length;
  const pct = ids.length ? Math.round((done / ids.length) * 100) : 0;
  return (
    <div className="prog-wrap">
      <div className="prog-meta">
        <span className="prog-label">{label}</span>
        <span className="prog-val">
          {done}/{ids.length}
        </span>
      </div>
      <div className="prog-bar">
        <div className="prog-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const SIDEBAR_SECTIONS = [
  { group: "Roadmap", items: ["Overview", "Quest Cape", "Max Cape", "Completionist Cape", "Trimmed Comp", "Master Comp"] },
  { group: "Collection Logs", items: ["Boss Log", "Slayer Log", "Clue Log", "Area Tasks", "Prestige Titles"] },
];

const QUEST_ITEMS = [
  { id: "cq_lumbridge", label: "Lumbridge quests" },
  { id: "cq_varrock", label: "Varrock quests" },
  { id: "cq_karamja", label: "Karamja quests" },
  { id: "cq_elf", label: "Elf chain (Plague City \u2192 Song of the Elves)" },
  { id: "cq_morytania", label: "Morytania chain (Priest in Peril \u2192 River of Blood)" },
  { id: "cq_dorgeshuun", label: "Dorgeshuun (The Lost Tribe \u2192 The Mighty Fall)" },
  { id: "cq_fremennik", label: "Fremennik (The Fremennik Trials \u2192 Ritual of the Mahjarrat)" },
  { id: "cq_necromancy", label: "Necromancy (Kili Row \u2192 Necromancy! finale)" },
  { id: "cq_godwars", label: "God Wars (The World Wakes, Missing Presumed Death, Fate of the Gods)" },
  { id: "cq_pirate", label: "Pirate / Void Knight (Cabin Fever \u2192 A Void Dance)" },
  { id: "cq_desert", label: "Desert series (The Jack of Spades \u2192 'Phite Club)" },
  { id: "cq_gnome", label: "Gnome series (Tree Gnome Village \u2192 The Prisoner of Glouphrie)" },
  { id: "cq_rfd", label: "Recipe for Disaster (all sub-quests)" },
  { id: "cq_dod", label: "Dimension of Disaster" },
  { id: "cq_ouat", label: "Once Upon a Time (Fairy Tale chain)" },
  { id: "cq_mini", label: "Miniquests (all required)" },
  { id: "cq_grandmaster", label: "Grandmaster quests (Sliske's Endgame, Desperate Times, etc.)" },
  { id: "cq_fort", label: "Fort Forinthry questline" },
  { id: "cq_holiday", label: "Holiday quests (all available)" },
  { id: "cq_mqc", label: "Master Quest Cape requirements" },
];

const SKILLS = [
  { id: "sk_attack", label: "Attack", cap: 99 },
  { id: "sk_strength", label: "Strength", cap: 99 },
  { id: "sk_defence", label: "Defence", cap: 99 },
  { id: "sk_ranged", label: "Ranged", cap: 99 },
  { id: "sk_prayer", label: "Prayer", cap: 99 },
  { id: "sk_magic", label: "Magic", cap: 99 },
  { id: "sk_constitution", label: "Constitution", cap: 99 },
  { id: "sk_crafting", label: "Crafting", cap: 99 },
  { id: "sk_mining", label: "Mining", cap: 99 },
  { id: "sk_smithing", label: "Smithing", cap: 99 },
  { id: "sk_fishing", label: "Fishing", cap: 99 },
  { id: "sk_cooking", label: "Cooking", cap: 99 },
  { id: "sk_firemaking", label: "Firemaking", cap: 99 },
  { id: "sk_woodcutting", label: "Woodcutting", cap: 99 },
  { id: "sk_runecrafting", label: "Runecrafting", cap: 99 },
  { id: "sk_dungeoneering", label: "Dungeoneering", cap: 120 },
  { id: "sk_fletching", label: "Fletching", cap: 99 },
  { id: "sk_agility", label: "Agility", cap: 99 },
  { id: "sk_herblore", label: "Herblore", cap: 120 },
  { id: "sk_thieving", label: "Thieving", cap: 99 },
  { id: "sk_farming", label: "Farming", cap: 120 },
  { id: "sk_construction", label: "Construction", cap: 99 },
  { id: "sk_hunter", label: "Hunter", cap: 99 },
  { id: "sk_summoning", label: "Summoning", cap: 99 },
  { id: "sk_divination", label: "Divination", cap: 99 },
  { id: "sk_invention", label: "Invention", cap: 120 },
  { id: "sk_archaeology", label: "Archaeology", cap: 120 },
  { id: "sk_necromancy", label: "Necromancy", cap: 120 },
  { id: "sk_slayer", label: "Slayer", cap: 120 },
];

const COMP_ITEMS = [
  { id: "comp_quests", label: "All quests completed" },
  { id: "comp_maxed", label: "All skills maxed (99/120)" },
  { id: "comp_lumby", label: "Lumbridge & Draynor area tasks (all tiers)" },
  { id: "comp_varrock", label: "Varrock area tasks (all tiers)" },
  { id: "comp_karamja", label: "Karamja area tasks (all tiers)" },
  { id: "comp_falador", label: "Falador area tasks (all tiers)" },
  { id: "comp_seers", label: "Seers' Village area tasks (all tiers)" },
  { id: "comp_fremmy", label: "Fremennik area tasks (all tiers)" },
  { id: "comp_ardy", label: "Ardougne area tasks (all tiers)" },
  { id: "comp_desert", label: "Desert area tasks (all tiers)" },
  { id: "comp_morytania", label: "Morytania area tasks (all tiers)" },
  { id: "comp_tirannwn", label: "Tirannwn area tasks (all tiers)" },
  { id: "comp_daemonheim", label: "Daemonheim area tasks (all tiers)" },
  { id: "comp_100boss", label: "100 boss kills (any bosses)" },
  { id: "comp_minigames", label: "All minigame completions" },
  { id: "comp_reaper", label: "Reaper crew (kill each boss at least once)" },
  { id: "comp_ports", label: "Ports completion (all storylines)" },
  { id: "comp_livid", label: "Livid Farm spells (all unlocked)" },
  { id: "comp_champion", label: "Champion's Challenge (all champion scrolls)" },
];

const TRIMMED_ITEMS = [
  { id: "trim_cw", label: "Castle Wars: Profound decorative armour (5,000+ games)" },
  { id: "trim_music", label: "All music tracks unlocked" },
  { id: "trim_pets", label: "All boss pets obtained" },
  { id: "trim_dg_journals", label: "All Dungeoneering journals found" },
  { id: "trim_ba", label: "Barbarian Assault: All roles at level 5" },
  { id: "trim_champions", label: "Champion's Challenge: All scrolls + final fight" },
  { id: "trim_livid_all", label: "Livid Farm: All rewards purchased" },
  { id: "trim_salty", label: "Salty title (The Arc completionist)" },
  { id: "trim_sandy", label: "Sandy title (Menaphos completionist)" },
  { id: "trim_ports_all", label: "Ports: All adventurers, storylines, and trade goods" },
  { id: "trim_soul_reaper", label: "Soul Reaper: 200+ points accumulated" },
  { id: "trim_clue_totals", label: "Clue scrolls: Minimum completions per tier" },
];

const BOSS_TABLE = [
  { name: "Giant Mole", lvl: "50+", style: "Any", drops: "Mole skin, Mole claw" },
  { name: "King Black Dragon", lvl: "60+", style: "Ranged/Magic", drops: "KBD heads, Dragon rider lance pieces" },
  { name: "Barrows Brothers", lvl: "70+", style: "Magic/Necromancy", drops: "Barrows armour sets" },
  { name: "General Graardor (Bandos)", lvl: "80+", style: "Melee/Ranged", drops: "Bandos armour" },
  { name: "Kree'arra (Armadyl)", lvl: "80+", style: "Ranged", drops: "Armadyl armour" },
  { name: "Commander Zilyana (Sara)", lvl: "80+", style: "Melee", drops: "Saradomin hilt, ACB" },
  { name: "K'ril Tsutsaroth (Zammy)", lvl: "80+", style: "Melee/Magic", drops: "Zamorak spear, Staff of darkness" },
  { name: "Helwyr (GWD2)", lvl: "85+", style: "Melee", drops: "Wand of the Cywir elders, Crest of Seren" },
  { name: "Vindicta (GWD2)", lvl: "85+", style: "Melee", drops: "Dragon Rider lance, Crest of Zaros" },
  { name: "Gregorovic (GWD2)", lvl: "85+", style: "Ranged", drops: "Shadow glaives, Crest of Sliske" },
  { name: "Twin Furies (GWD2)", lvl: "85+", style: "Melee", drops: "Blade of Avaryss/Nymora, Crest of Zamorak" },
  { name: "Nex", lvl: "90+", style: "Ranged", drops: "Torva/Pernix/Virtus armour, Zaryte bow" },
  { name: "Araxxor", lvl: "90+", style: "Ranged/Melee", drops: "Araxxi fang/eye/web, Noxious weapons" },
  { name: "Telos", lvl: "95+", style: "Magic", drops: "Dormant anima armour, Orb of pure/corrupted/volcanic anima" },
  { name: "Vorago", lvl: "90+", style: "Magic/Ranged", drops: "Seismic wand/singularity, Tectonic energy" },
  { name: "Solak", lvl: "95+", style: "Magic/Melee", drops: "Blightbound crossbow, Erethdor's grimoire" },
  { name: "Rasial", lvl: "90+", style: "Necromancy", drops: "First Necromancer robes, Omni guard, Soulbound lantern" },
];

const SLAYER_TABLE = [
  { creature: "Abyssal Demons", lvl: "85 Slayer", drops: "Abyssal whip, Abyssal wand/orb" },
  { creature: "Dark Beasts", lvl: "90 Slayer", drops: "Dark bow, Death talisman" },
  { creature: "Edimmu", lvl: "115 Dungeoneering, 90 Slayer", drops: "Edimmu pet, Blood necklace shard" },
  { creature: "Ripper Demons", lvl: "96 Slayer", drops: "Ripper claw, Cursed amulet of magic" },
  { creature: "Camel Warriors", lvl: "96 Slayer", drops: "Camel staff components" },
  { creature: "Acheron Mammoths", lvl: "96 Slayer", drops: "Mammoth tusk" },
  { creature: "Nightmare Creatures", lvl: "80 Slayer", drops: "Nightmare gauntlets, Nightmare mace" },
  { creature: "Living Wyverns", lvl: "96 Slayer", drops: "Wyvern crossbow" },
  { creature: "Gemstone Dragons", lvl: "95 Slayer", drops: "Gemstone armour components" },
  { creature: "Soul Devourers", lvl: "105 Slayer", drops: "Keys to the Crossing, Magister's phylactery" },
  { creature: "Dinosaurs (BGH)", lvl: "75+ Hunter/Slayer", drops: "Blowpipe components, Dinosaur rib bone" },
  { creature: "Moss Golems", lvl: "112 Slayer", drops: "Cinderbane gloves" },
];

const CLUE_TABLE = [
  { tier: "Easy", source: "Pickpocketing, low-level monsters", notables: "Suitcases, Berets, Wizard boots" },
  { tier: "Medium", source: "Mid-level monsters, Hellhounds", notables: "Ranger boots, Holy sandals, Wizard boots" },
  { tier: "Hard", source: "High-level monsters, Hellhounds", notables: "Third-age armour, Backstab cape" },
  { tier: "Elite", source: "Boss drops, Skilling", notables: "Third-age dye, Shadow dye, Barrows dye" },
  { tier: "Master", source: "Completing lower-tier clues", notables: "Orlando Smith's hat, Explosive barrel, Effigy incubator" },
];

const AREA_TASKS = [
  { area: "Lumbridge & Draynor", reward: "Explorer's ring (unlimited low-alchemy, run energy restore)" },
  { area: "Varrock", reward: "Varrock armour (mining bonus, Smithing chance)" },
  { area: "Karamja", reward: "Karamja gloves (agility course bonus, gem mining)" },
  { area: "Falador", reward: "Falador shield (prayer restore, Mole locator)" },
  { area: "Seers' Village", reward: "Enhanced Excalibur (healing, combat boost)" },
  { area: "Fremennik Province", reward: "Fremennik sea boots (Dagannoth Kings tele, Lunar Isle)" },
  { area: "Ardougne", reward: "Ardougne cloak (thieving bonus, farm tele)" },
  { area: "Desert", reward: "Desert amulet (Nardah tele, Kalphite lair)" },
  { area: "Morytania", reward: "Morytania legs (bone-crushing, Slayer Tower bonus)" },
  { area: "Tirannwn", reward: "Tirannwn quiver (Ranged bonus, crystal equipment)" },
  { area: "Wilderness", reward: "Wilderness sword (Wilderness obelisk control)" },
  { area: "Daemonheim", reward: "Daemonheim aura (Dungeoneering token bonus)" },
];

const PRESTIGE_TITLES = [
  { title: "The Completionist", how: "Wear the Completionist Cape (all comp achievements)" },
  { title: "The Trimmed Completionist", how: "Wear the Trimmed Completionist Cape" },
  { title: "The Insane Final Boss", how: "Kill every boss 100 times + all boss pets + golden Reaper title" },
  { title: "Salty", how: "Complete all Arc content (uncharted isle exploration, contracts, etc.)" },
  { title: "Sandy", how: "Complete all Menaphos content (reputation, journal, and achievements)" },
  { title: "Warden", how: "Defeat Telos at 100% enrage or higher" },
  { title: "Daredevil", how: "Complete all Elite Dungeon boss challenges" },
  { title: "Golden Reaper", how: "Kill every Reaper-eligible boss at least once per Reaper cycle" },
  { title: "Master Quest Cape", how: "Complete all quest-related achievements beyond standard quest completion" },
  { title: "Jack of All Trades", how: "Reach level 99 in all skills" },
  { title: "True Trim", how: "Community-defined ultimate completion (every achievement, all logs, all pets)" },
  { title: "Of the Praesul", how: "Defeat Nex: Angel of Death" },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function CompletionistPage() {
  const [section, setSection] = useState("Overview");
  const [store, setStore] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setStore(loadStore());
  }, []);

  const toggle = useCallback((id: string) => {
    setStore((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      saveStore(next);
      return next;
    });
  }, []);

  /* ---- renderers ---- */

  const renderOverview = () => (
    <>
      <h1>Completionist Roadmap</h1>
      <p>The full endgame journey from Quest Cape to Master Completionist Cape. Track your progress with persistent checklists across every major milestone in RuneScape 3.</p>

      <div className="stat-row">
        <div className="stat-box"><div className="sv">270</div><div className="sl">Total Quests</div></div>
        <div className="stat-box"><div className="sv">29</div><div className="sl">Skills to Max</div></div>
        <div className="stat-box"><div className="sv">4,048</div><div className="sl">Total Achievements</div></div>
        <div className="stat-box"><div className="sv">281</div><div className="sl">Comp Achievements</div></div>
      </div>

      <h2>Achievement Ladder</h2>

      <div className="milestone">
        <div className="ms-num" style={{ color: "var(--green)", borderColor: "var(--green)" }}>1</div>
        <div className="ms-body">
          <div className="ms-title" style={{ color: "var(--green)" }}>Quest Cape</div>
          <div className="ms-req">Complete all 270 quests</div>
          <div className="ms-desc">The first major milestone. Completing every quest unlocks massive XP rewards, critical areas, and essential abilities. Many quests are required for later comp achievements.</div>
        </div>
      </div>

      <div className="milestone">
        <div className="ms-num" style={{ color: "var(--gold)", borderColor: "var(--gold)" }}>2</div>
        <div className="ms-body">
          <div className="ms-title" style={{ color: "var(--gold)" }}>Max Cape</div>
          <div className="ms-req">Level 99+ in all 29 skills (120 in elite skills)</div>
          <div className="ms-desc">Achieve mastery in every skill. Elite skills (Dungeoneering, Invention, Herblore, Farming, Archaeology, Necromancy, Slayer) require level 120. The Max Cape combines all skillcape perks.</div>
        </div>
      </div>

      <div className="milestone">
        <div className="ms-num" style={{ color: "var(--blue)", borderColor: "var(--blue)" }}>3</div>
        <div className="ms-body">
          <div className="ms-title" style={{ color: "var(--blue)" }}>Completionist Cape</div>
          <div className="ms-req">Complete all 100 comp achievements</div>
          <div className="ms-desc">Beyond maxing, complete all area tasks, Reaper crew, minigame requirements, Ports, Livid Farm, and more. The Comp Cape is the ultimate statement of a well-rounded account.</div>
        </div>
      </div>

      <div className="milestone">
        <div className="ms-num" style={{ color: "var(--purple)", borderColor: "var(--purple)" }}>4</div>
        <div className="ms-body">
          <div className="ms-title" style={{ color: "var(--purple)" }}>Trimmed Comp</div>
          <div className="ms-req">All achievements including grace-period requirements</div>
          <div className="ms-desc">The trimmed variant requires everything from base comp plus Castle Wars Profound armour, all music tracks, all boss pets, all Dungeoneering journals, and Barbarian Assault mastery.</div>
        </div>
      </div>

      <div className="milestone">
        <div className="ms-num" style={{ color: "var(--orange)", borderColor: "var(--orange)" }}>5</div>
        <div className="ms-body">
          <div className="ms-title" style={{ color: "var(--orange)" }}>Master Comp</div>
          <div className="ms-req">Trimmed Comp + Master Quest Cape</div>
          <div className="ms-desc">The absolute pinnacle. Requires Trimmed Completionist Cape combined with the Master Quest Cape, which demands in-depth exploration of every quest&apos;s lore, hidden dialogues, and post-quest content.</div>
        </div>
      </div>

      <div className="info-box">
        <strong>Time Estimates:</strong> Quest Cape takes roughly 200-400 hours depending on efficiency. Max Cape requires 1,500-3,000 hours. Completionist Cape adds another 200-500 hours on top of Max. Trimmed Comp is 5,000+ hours due to Castle Wars alone. These are rough estimates and vary enormously based on methods, bonus XP, and play style.
      </div>
    </>
  );

  const renderQuestCape = () => {
    const ids = QUEST_ITEMS.map((q) => q.id);
    return (
      <>
        <h1>Quest Cape</h1>
        <p>Complete all 270 quests in RuneScape 3. Track the 20 major quest chain groups below. Each group represents a chain of related quests that should be completed together for the best experience.</p>

        <ProgressBar label="Quest Chain Progress" ids={ids} store={store} />

        <ul className="checklist">
          {QUEST_ITEMS.map((q) => (
            <ChecklistItem key={q.id} id={q.id} label={q.label} store={store} onToggle={toggle} />
          ))}
        </ul>
      </>
    );
  };

  const renderMaxCape = () => {
    const ids = SKILLS.map((s) => s.id);
    return (
      <>
        <h1>Max Cape</h1>
        <p>Reach level 99 in all standard skills and level 120 in elite skills (Dungeoneering, Invention, Herblore, Farming, Archaeology, Necromancy, Slayer). The Max Cape combines the perks of every individual skillcape.</p>

        <ProgressBar label="Skills Maxed" ids={ids} store={store} />

        <ul className="checklist">
          {SKILLS.map((s) => (
            <ChecklistItem
              key={s.id}
              id={s.id}
              label={
                <span>
                  {s.label} <span className="badge badge-gold" style={{ marginLeft: 6 }}>{s.cap}</span>
                </span>
              }
              store={store}
              onToggle={toggle}
            />
          ))}
        </ul>

        <div className="divider" style={{ marginTop: 24 }}>Efficient Max Cape Route</div>
        <div className="card gold">
          <div className="card-title">Recommended Training Order</div>
          <div className="card-body">
            <ul className="step-list">
              <li>Complete all quests first for massive free XP (Quest Cape first approach)</li>
              <li>Train Dungeoneering early for Charming Imp and resource dungeon access</li>
              <li>Start daily Farming runs and Player-Owned Ports as early as possible</li>
              <li>Train Slayer alongside combat skills for efficient dual-progression</li>
              <li>Unlock Invention at level 80 Crafting, Divination, and Smithing</li>
              <li>Train Archaeology for relic powers that boost other skill training</li>
              <li>Use Necromancy for early PvM income to fund buyable skills</li>
              <li>Do buyable skills (Herblore, Prayer, Construction, Summoning) during DXP events</li>
              <li>Leave AFK skills (Fishing, Woodcutting, Mining) for when you need a break</li>
              <li>Train Agility through Silverhawk boots passively while doing other content</li>
            </ul>
          </div>
        </div>

        <div className="info-box blue">
          <strong>Tip:</strong> Many skills can be trained semi-AFK. Prioritise active training for skills that benefit most from it (like Dungeoneering and Slayer), and use AFK methods for Fishing, Woodcutting, and Mining while watching videos or doing other activities.
        </div>
      </>
    );
  };

  const renderCompCape = () => {
    const ids = COMP_ITEMS.map((c) => c.id);
    return (
      <>
        <h1>Completionist Cape</h1>
        <p>The Completionist Cape requires all quests, all skills maxed, all area task sets, and a wide range of additional achievements. Below are the major requirement categories to track.</p>

        <ProgressBar label="Comp Requirements" ids={ids} store={store} />

        <ul className="checklist">
          {COMP_ITEMS.map((c) => (
            <ChecklistItem key={c.id} id={c.id} label={c.label} store={store} onToggle={toggle} />
          ))}
        </ul>

        <div className="info-box purple">
          <strong>Note:</strong> The Completionist Cape has 281 total achievements. The checklist above covers the major categories. Within each category (such as area tasks), there are dozens of individual sub-tasks. Check the in-game Achievement interface for the full breakdown.
        </div>
      </>
    );
  };

  const renderTrimmedComp = () => {
    const ids = TRIMMED_ITEMS.map((t) => t.id);
    return (
      <>
        <h1>Trimmed Completionist Cape</h1>
        <p>The Trimmed Completionist Cape requires everything from the base Comp Cape plus additional prestige achievements. These are some of the most time-intensive requirements in the game.</p>

        <ProgressBar label="Trimmed Comp Requirements" ids={ids} store={store} />

        <ul className="checklist">
          {TRIMMED_ITEMS.map((t) => (
            <ChecklistItem key={t.id} id={t.id} label={t.label} store={store} onToggle={toggle} />
          ))}
        </ul>

        <div className="info-box red">
          <strong>Warning:</strong> Castle Wars Profound armour alone requires approximately 800-1,000 hours of Castle Wars games. This is by far the longest single requirement for Trimmed Comp. Plan accordingly and start early if this is your goal.
        </div>
      </>
    );
  };

  const renderMasterComp = () => (
    <>
      <h1>Master Completionist</h1>
      <p>The absolute pinnacle of RuneScape 3 achievement. Master Completionist status requires the Trimmed Completionist Cape combined with the Master Quest Cape.</p>

      <div className="card orange">
        <div className="card-title">The Ultimate Goal</div>
        <div className="card-body">
          Master Completionist is not a single cape but the combination of two of the hardest achievements in the game. You must hold both the <strong>Trimmed Completionist Cape</strong> and the <strong>Master Quest Cape</strong> simultaneously.
          <br /><br />
          The Master Quest Cape requires completing every quest-related achievement, including hidden dialogues, post-quest content, lore books, NPC conversations, and exploration tasks that go far beyond simply finishing each quest.
          <br /><br />
          Only a handful of players in the entire game have achieved true Master Completionist status. It represents thousands of hours of dedicated play and encyclopedic knowledge of RuneScape&apos;s lore and mechanics.
        </div>
      </div>

      <div className="divider">Requirements Summary</div>
      <ul className="step-list">
        <li><strong>Trimmed Completionist Cape</strong> &mdash; All base comp + trimmed requirements</li>
        <li><strong>Master Quest Cape</strong> &mdash; All quest-related achievements and lore exploration</li>
        <li><strong>All boss kills</strong> &mdash; Every Reaper-eligible boss defeated</li>
        <li><strong>All collection logs</strong> &mdash; Boss, Slayer, and Clue logs substantially filled</li>
        <li><strong>All area content</strong> &mdash; Every area fully explored and completed</li>
      </ul>

      <div className="info-box">
        <strong>Time Estimate:</strong> Master Completionist realistically takes 10,000+ hours of gameplay. Most players who achieve this have been playing consistently for many years. It is a marathon, not a sprint.
      </div>
    </>
  );

  const renderBossLog = () => (
    <>
      <h1>Boss Collection Log</h1>
      <p>Key bosses in RuneScape 3, their recommended combat levels, preferred styles, and notable drops. Completing the boss collection log is essential for Reaper crew and Insane Final Boss title.</p>

      <table className="tbl">
        <thead>
          <tr>
            <th>Boss</th>
            <th>Combat Level</th>
            <th>Style</th>
            <th>Notable Drops</th>
          </tr>
        </thead>
        <tbody>
          {BOSS_TABLE.map((b) => (
            <tr key={b.name}>
              <td className="td-g">{b.name}</td>
              <td>{b.lvl}</td>
              <td className="td-b">{b.style}</td>
              <td>{b.drops}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="info-box green">
        <strong>Reaper Crew:</strong> To earn the Reaper crew achievement (required for Comp Cape), you must kill each group boss at least once. This includes all GWD1, GWD2, Nex, Araxxor, Vorago, and Rasial. Telos and Solak are not required for base comp but are for Insane Final Boss.
      </div>
    </>
  );

  const renderSlayerLog = () => (
    <>
      <h1>Slayer Collection Log</h1>
      <p>Key Slayer creatures and their unique drops. High-level Slayer creatures are some of the best money-makers in the game and are required for various collection log completions.</p>

      <table className="tbl">
        <thead>
          <tr>
            <th>Creature</th>
            <th>Requirement</th>
            <th>Notable Drops</th>
          </tr>
        </thead>
        <tbody>
          {SLAYER_TABLE.map((s) => (
            <tr key={s.creature}>
              <td className="td-g">{s.creature}</td>
              <td>{s.lvl}</td>
              <td>{s.drops}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="info-box blue">
        <strong>Tip:</strong> Use a Slayer Helmet (or its upgraded variants) when on task for a significant damage and accuracy boost. Prefer Morvran or Laniakea as your Slayer Master for the highest-level assignments and best points per task.
      </div>
    </>
  );

  const renderClueLog = () => (
    <>
      <h1>Clue Scroll Collection Log</h1>
      <p>Clue scrolls come in five tiers. Each tier has its own collection log with unique cosmetic rewards. Completing clue log milestones contributes to Trimmed Comp requirements.</p>

      <table className="tbl">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Source</th>
            <th>Notable Rewards</th>
          </tr>
        </thead>
        <tbody>
          {CLUE_TABLE.map((c) => (
            <tr key={c.tier}>
              <td className="td-g">{c.tier}</td>
              <td>{c.source}</td>
              <td>{c.notables}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="info-box">
        <strong>Dyes:</strong> Shadow, Barrows, Third-age, Blood, and Ice dyes are extremely rare rewards from Hard, Elite, and Master clue scrolls. They are purely cosmetic but are among the most valuable items in the game, worth hundreds of millions to billions of GP.
      </div>
    </>
  );

  const renderAreaTasks = () => (
    <>
      <h1>Area Task Sets</h1>
      <p>Each area has four difficulty tiers: Easy, Medium, Hard, and Elite. Completing all tiers of an area&apos;s task set upgrades the reward item to its highest version. All area tasks are required for the Completionist Cape.</p>

      <table className="tbl">
        <thead>
          <tr>
            <th>Area</th>
            <th>Reward &amp; Benefits</th>
          </tr>
        </thead>
        <tbody>
          {AREA_TASKS.map((a) => (
            <tr key={a.area}>
              <td className="td-g">{a.area}</td>
              <td>{a.reward}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="divider">Difficulty Tiers</div>
      <div className="g2">
        <div className="card green">
          <div className="card-title">Easy &amp; Medium</div>
          <div className="card-body">Low-level tasks requiring minimal stats (usually under level 40). These introduce the area&apos;s core content and can be completed early in your account&apos;s life.</div>
        </div>
        <div className="card red">
          <div className="card-title">Hard &amp; Elite</div>
          <div className="card-body">Require high stats (often 80+), quest completions, and significant game knowledge. Elite tasks frequently require boss kills or high-level Slayer creatures within the area.</div>
        </div>
      </div>

      <div className="info-box green">
        <strong>Priority:</strong> Complete Varrock tasks early for the Varrock armour mining bonus. Morytania tasks are crucial for the bone-crushing effect at Slayer Tower. Seers&apos; Village Elite unlocks the Enhanced Excalibur, one of the best free healing items in the game.
      </div>
    </>
  );

  const renderPrestigeTitles = () => (
    <>
      <h1>Prestige Titles</h1>
      <p>Prestigious titles that demonstrate mastery of specific content areas. These are displayed before or after your character name and are some of the most sought-after achievements in the game.</p>

      <table className="tbl">
        <thead>
          <tr>
            <th>Title</th>
            <th>How to Earn</th>
          </tr>
        </thead>
        <tbody>
          {PRESTIGE_TITLES.map((t) => (
            <tr key={t.title}>
              <td className="td-g">{t.title}</td>
              <td>{t.how}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="info-box purple">
        <strong>The Insane Final Boss</strong> is considered one of the hardest titles to obtain. It requires killing every boss at least 100 times, obtaining every boss pet, and completing the Golden Reaper title. This demonstrates mastery of all PvM content in the game.
      </div>
    </>
  );

  /* ---- section map ---- */
  const SECTIONS: Record<string, () => React.ReactNode> = {
    Overview: renderOverview,
    "Quest Cape": renderQuestCape,
    "Max Cape": renderMaxCape,
    "Completionist Cape": renderCompCape,
    "Trimmed Comp": renderTrimmedComp,
    "Master Comp": renderMasterComp,
    "Boss Log": renderBossLog,
    "Slayer Log": renderSlayerLog,
    "Clue Log": renderClueLog,
    "Area Tasks": renderAreaTasks,
    "Prestige Titles": renderPrestigeTitles,
  };

  return (
    <div className="page-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        {SIDEBAR_SECTIONS.map((g) => (
          <div key={g.group}>
            <div className="sb-label">{g.group}</div>
            {g.items.map((name) => (
              <button
                key={name}
                className={`sb-btn${section === name ? " active" : ""}`}
                onClick={() => setSection(name)}
              >
                {name}
              </button>
            ))}
          </div>
        ))}
      </aside>

      {/* Content */}
      <main className="page-content">
        {(SECTIONS[section] || renderOverview)()}
      </main>
    </div>
  );
}
