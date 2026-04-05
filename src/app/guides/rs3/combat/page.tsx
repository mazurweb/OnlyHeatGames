"use client";

import { useState } from "react";

/* ──── tiny accordion hook ──── */
function useAccordion() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((p) => ({ ...p, [id]: !p[id] }));
  return { open, toggle };
}

/* ──── reusable sub-components ──── */
function LBand({
  id,
  range,
  title,
  xp,
  children,
  open,
  toggle,
}: {
  id: string;
  range: string;
  title: string;
  xp?: string;
  children: React.ReactNode;
  open: Record<string, boolean>;
  toggle: (id: string) => void;
}) {
  return (
    <div className="lband">
      <div className="lband-hdr" onClick={() => toggle(id)}>
        <span className="lrange">{range}</span>
        <span className="lband-title">{title}</span>
        {xp && <span className="lband-xp">{xp}</span>}
        <span className={`chevron ${open[id] ? "open" : ""}`}>▼</span>
      </div>
      {open[id] && <div className="lband-body">{children}</div>}
    </div>
  );
}

function TabBar({
  tabs,
  active,
  set,
}: {
  tabs: string[];
  active: string;
  set: (t: string) => void;
}) {
  return (
    <div className="tab-bar">
      {tabs.map((t) => (
        <button
          key={t}
          className={`tab-btn ${active === t ? "active" : ""}`}
          onClick={() => set(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

/* ================================================================
   SECTION CONTENT
   ================================================================ */

/* ──── OVERVIEW ──── */
function Overview() {
  return (
    <>
      <h1>Combat &amp; Fighting Leveling</h1>
      <p>
        RS3 has four distinct combat styles. Each follows its own gear and
        training progression from level 1 to 120. This guide covers training
        spots, gear upgrades, ability unlocks, and potion progression for every
        style.
      </p>

      <div className="g2">
        <div className="card purple">
          <div className="card-title">☠️ Necromancy</div>
          <div className="card-body">
            The newest style (2023). Self-contained progression with its own
            gear, abilities, and rituals. Beginner-friendly and extremely
            powerful at endgame. Uses incantations and conjures.
          </div>
        </div>
        <div className="card gold">
          <div className="card-title">⚔️ Melee</div>
          <div className="card-body">
            Classic close-combat. Uses Attack for accuracy, Strength for damage,
            and Defence for armour. Dual-wield or two-handed. Strong burst
            damage with Berserk.
          </div>
        </div>
        <div className="card green">
          <div className="card-title">🏹 Ranged</div>
          <div className="card-body">
            Safe, flexible combat from distance. Uses Ranged for both accuracy
            and damage. Bows, crossbows, thrown weapons. Death&apos;s Swiftness
            is the damage ultimate.
          </div>
        </div>
        <div className="card blue">
          <div className="card-title">🔮 Magic</div>
          <div className="card-body">
            Versatile spellcasting with Ancient Magicks, utility spells, and
            debuffs. Uses Magic for accuracy and damage. Sunshine is the damage
            ultimate.
          </div>
        </div>
      </div>

      <div className="info-box">
        <strong>Power Armour vs Tank Armour:</strong> Always use Power Armour in
        RS3. It provides offensive bonuses that increase your DPS. Tank Armour
        has no offensive bonus and is only used for tanking specific boss
        mechanics. The extra damage from Power Armour means faster kills and
        more XP/hr.
      </div>

      <h2>General Combat Progression</h2>
      <table className="tbl">
        <thead>
          <tr>
            <th>Level Range</th>
            <th>Phase</th>
            <th>Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">1 – 10</td>
            <td>Tutorial</td>
            <td>
              Complete the tutorial area. Learn basics of combat, abilities, and
              action bar setup.
            </td>
          </tr>
          <tr>
            <td className="td-g">10 – 30</td>
            <td>Early Game</td>
            <td>
              Train on low-level Slayer tasks and quest monsters. Unlock
              Revolution mode. Get basic gear.
            </td>
          </tr>
          <tr>
            <td className="td-g">30 – 50</td>
            <td>Dragon Preparation</td>
            <td>
              Dragon Slayer quest. Start upgrading to Rune/Mystic/Green
              D&apos;hide. Continue Slayer.
            </td>
          </tr>
          <tr>
            <td className="td-g">50 – 70</td>
            <td>GWD1 Era</td>
            <td>
              God Wars Dungeon 1 bosses become accessible. Power armour upgrades.
              Unlock key abilities.
            </td>
          </tr>
          <tr>
            <td className="td-g">70 – 90</td>
            <td>GWD2 / High Slayer</td>
            <td>
              God Wars 2, Abyssal Demons, high-tier Slayer. T70–T80 power
              armour. Learn full manual or Revo++.
            </td>
          </tr>
          <tr>
            <td className="td-g">90 – 120</td>
            <td>Endgame</td>
            <td>
              T90+ weapons and armour. Elite Dungeons, Arch-Glacor, Nex, Telos.
              Bossing for GP and logs.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/* ──── COMBAT TRIANGLE ──── */
function CombatTriangle() {
  return (
    <>
      <h1>The Combat Triangle</h1>
      <p>
        RS3 uses a rock-paper-scissors style advantage system. Attacking with
        the correct style gives you accuracy and damage bonuses, while using the
        wrong style gives penalties.
      </p>

      <div className="g3">
        <div className="card gold">
          <div className="card-title">⚔️ Melee &gt; Ranged</div>
          <div className="card-body">
            Melee has advantage over Ranged. Melee users deal increased damage
            and accuracy against Ranged targets. Ranged users suffer penalties
            against Melee.
          </div>
        </div>
        <div className="card green">
          <div className="card-title">🏹 Ranged &gt; Magic</div>
          <div className="card-body">
            Ranged has advantage over Magic. Ranged users deal increased damage
            and accuracy against Magic targets. Magic users suffer penalties
            against Ranged.
          </div>
        </div>
        <div className="card blue">
          <div className="card-title">🔮 Magic &gt; Melee</div>
          <div className="card-body">
            Magic has advantage over Melee. Magic users deal increased damage
            and accuracy against Melee targets. Melee users suffer penalties
            against Magic.
          </div>
        </div>
      </div>

      <h2>Affinity Table</h2>
      <table className="tbl">
        <thead>
          <tr>
            <th>Your Style</th>
            <th>vs Melee</th>
            <th>vs Ranged</th>
            <th>vs Magic</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">Melee</td>
            <td>Neutral (55)</td>
            <td className="td-gr">Strong (65)</td>
            <td className="td-b">Weak (45)</td>
          </tr>
          <tr>
            <td className="td-g">Ranged</td>
            <td className="td-b">Weak (45)</td>
            <td>Neutral (55)</td>
            <td className="td-gr">Strong (65)</td>
          </tr>
          <tr>
            <td className="td-g">Magic</td>
            <td className="td-gr">Strong (65)</td>
            <td className="td-b">Weak (45)</td>
            <td>Neutral (55)</td>
          </tr>
          <tr>
            <td className="td-p">Necromancy</td>
            <td>Neutral (55)</td>
            <td>Neutral (55)</td>
            <td>Neutral (55)</td>
          </tr>
        </tbody>
      </table>

      <div className="info-box blue">
        <strong>Necromancy Exception:</strong> Necromancy has no weakness and is
        not part of the traditional combat triangle. It deals neutral affinity
        against all styles, making it versatile but unable to exploit weaknesses
        like the other three styles can.
      </div>
    </>
  );
}

/* ──── NECROMANCY ──── */
function NecromancySection() {
  const [tab, setTab] = useState("Training Spots");
  const acc = useAccordion();

  return (
    <>
      <h1>Necromancy</h1>
      <p>
        Necromancy is a standalone combat style released in August 2023. It has
        its own gear, abilities, and leveling path that is largely self-contained
        through the Necromancy quest chain. It is the most beginner-friendly
        combat style and scales well into endgame bossing.
      </p>

      <TabBar
        tabs={["Training Spots", "Gear Progression", "Abilities"]}
        active={tab}
        set={setTab}
      />

      {tab === "Training Spots" && (
        <>
          <LBand
            id="nec-1"
            range="1–20"
            title="Tutorial — Kili Row Introduction"
            xp="~15K XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Complete the Necromancy! tutorial quest in Lumbridge. This
              introduces the basics of the Necromancy skill, conjuring, and
              rituals. You will be guided through basic combat and crafting your
              first Death Guard and Skull Lantern.
            </p>
            <ul className="step-list">
              <li>Start at the Necromancy portal in Lumbridge graveyard</li>
              <li>Follow Kili&apos;s instructions to learn basic abilities</li>
              <li>Craft your first T10 Death Guard and Skull Lantern</li>
              <li>Kill practice spirits in the tutorial area</li>
              <li>Complete the quest for a large chunk of starting XP</li>
            </ul>
          </LBand>

          <LBand
            id="nec-2"
            range="20–40"
            title="Kili Row — City of Um Quests"
            xp="~30K XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Continue the Necromancy quest chain in the City of Um. The quests
              guide you through upgrading your gear and unlocking new abilities.
              Train on Vengeful Spirits and Spectral Horrors between quests.
            </p>
            <ul className="step-list">
              <li>Progress through the City of Um storyline</li>
              <li>Train on Vengeful Spirits (level 20+) in the City of Um</li>
              <li>Upgrade to T30 gear through crafting at the Ritual Site</li>
              <li>Unlock Spectral Scythe and Soul Sap abilities</li>
              <li>Complete Rituals to level Necromancy faster</li>
            </ul>
          </LBand>

          <LBand
            id="nec-3"
            range="40–60"
            title="Armoured Phantoms"
            xp="~65K XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Armoured Phantoms in the Well of Souls offer excellent AFK-friendly
              XP. They have low defence and good XP drops. Upgrade to T50 gear
              through the quest chain or crafting.
            </p>
            <ul className="step-list">
              <li>Location: Well of Souls (accessed from City of Um)</li>
              <li>Use T40–T50 Death Guard and Skull Lantern</li>
              <li>Set up Revolution++ for AFK training</li>
              <li>Use Conjure Skeleton Warrior for extra DPS</li>
              <li>Loot drops are decent GP — pick up everything</li>
            </ul>
          </LBand>

          <LBand
            id="nec-4"
            range="60–80"
            title="Well of Souls — Greater Phantoms"
            xp="~110K XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Greater Phantoms in the deeper Well of Souls provide strong XP
              rates. By now you should have T60 gear and several unlocked
              abilities including Conjure Ghost.
            </p>
            <ul className="step-list">
              <li>Continue deeper into the Well of Souls</li>
              <li>Upgrade to T60 Deathdealer gear</li>
              <li>Unlock and use Command Ghost ability</li>
              <li>Use Soul Split if you have Ancient Curses</li>
              <li>Consider Slayer tasks here for dual XP</li>
            </ul>
          </LBand>

          <LBand
            id="nec-5"
            range="80–99"
            title="Abyssal Lords / Undead Glacytes"
            xp="~200K XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              At level 80+ you unlock powerful abilities and T80 gear. Abyssal
              creatures and undead Glacytes offer excellent XP. This is also
              where Slayer becomes very efficient for Necromancy.
            </p>
            <ul className="step-list">
              <li>Upgrade to T80 gear (Ensouled equipment)</li>
              <li>Use Conjure Zombie + Command Zombie for sustain</li>
              <li>Abyssal Lords at 85 Slayer are top-tier XP and GP</li>
              <li>Living Death ultimate unlocks at level 82 — very powerful</li>
              <li>Run Elite Dungeons for XP + GP combo</li>
            </ul>
          </LBand>

          <LBand
            id="nec-6"
            range="99–120"
            title="Rasial / Endgame Bossing"
            xp="~350K+ XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Rasial is the Necromancy-specific boss that drops the T95 weapons.
              At this level you should be doing high-level bossing for both XP
              and GP. T90+ gear is essential.
            </p>
            <ul className="step-list">
              <li>Complete the Vessel of the Harbinger quest</li>
              <li>Farm Rasial for T95 Soulbound Lantern and Omni Guard</li>
              <li>Use T90 Deathwarden gear until T95 drops</li>
              <li>
                Other bosses: Arch-Glacor (HM), Telos, Zamorak, Nex: AoD
              </li>
              <li>
                120 Necromancy is achievable through bossing and daily rituals
              </li>
            </ul>
          </LBand>
        </>
      )}

      {tab === "Gear Progression" && (
        <>
          <h2>Necromancy Gear Upgrades</h2>
          <table className="tbl">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Weapon</th>
                <th>Armour</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-g">T10</td>
                <td>Death Guard (base)</td>
                <td>Necromancer robes</td>
                <td>Tutorial quest</td>
              </tr>
              <tr>
                <td className="td-g">T20</td>
                <td>Death Guard (u20)</td>
                <td>Ghostly robes</td>
                <td>Kili Row quests</td>
              </tr>
              <tr>
                <td className="td-g">T30</td>
                <td>Death Guard (u30)</td>
                <td>Spectral gear</td>
                <td>Crafting at Ritual Site</td>
              </tr>
              <tr>
                <td className="td-g">T40</td>
                <td>Death Guard (u40)</td>
                <td>Skeletal gear</td>
                <td>Quest chain + crafting</td>
              </tr>
              <tr>
                <td className="td-g">T50</td>
                <td>Death Guard (u50)</td>
                <td>Deathdealer (basic)</td>
                <td>Quest chain + crafting</td>
              </tr>
              <tr>
                <td className="td-g">T60</td>
                <td>Death Guard (u60)</td>
                <td>Deathdealer (medium)</td>
                <td>Quest chain + crafting</td>
              </tr>
              <tr>
                <td className="td-g">T70</td>
                <td>Death Guard (u70)</td>
                <td>Deathdealer (greater)</td>
                <td>Quest chain + crafting</td>
              </tr>
              <tr>
                <td className="td-g">T80</td>
                <td>Death Guard (u80)</td>
                <td>Ensouled gear</td>
                <td>Crafting + drops</td>
              </tr>
              <tr>
                <td className="td-g">T90</td>
                <td>Death Guard (u90)</td>
                <td>Deathwarden gear</td>
                <td>High-level crafting</td>
              </tr>
              <tr>
                <td className="td-g">T95</td>
                <td>Omni Guard + Soulbound Lantern</td>
                <td>First Necromancer&apos;s gear</td>
                <td>Rasial boss drop</td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {tab === "Abilities" && (
        <>
          <h2>Key Necromancy Abilities</h2>
          <table className="tbl">
            <thead>
              <tr>
                <th>Level</th>
                <th>Ability</th>
                <th>Type</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-g">1</td>
                <td>Soul Sap</td>
                <td>Basic</td>
                <td>Core basic ability, generates Necrosis stacks</td>
              </tr>
              <tr>
                <td className="td-g">5</td>
                <td>Touch of Death</td>
                <td>Threshold</td>
                <td>Strong threshold, uses Necrosis stacks for bonus damage</td>
              </tr>
              <tr>
                <td className="td-g">10</td>
                <td>Spectral Scythe</td>
                <td>Basic (AoE)</td>
                <td>AoE basic ability, 3 ranks that improve with levels</td>
              </tr>
              <tr>
                <td className="td-g">20</td>
                <td>Conjure Skeleton Warrior</td>
                <td>Conjure</td>
                <td>Summons a skeleton to fight alongside you</td>
              </tr>
              <tr>
                <td className="td-g">34</td>
                <td>Finger of Death</td>
                <td>Threshold</td>
                <td>
                  Powerful threshold, deals more damage with Necrosis stacks
                </td>
              </tr>
              <tr>
                <td className="td-g">48</td>
                <td>Conjure Vengeful Ghost</td>
                <td>Conjure</td>
                <td>Summons a ghost that damages enemies near it</td>
              </tr>
              <tr>
                <td className="td-g">58</td>
                <td>Death Skulls</td>
                <td>Ultimate</td>
                <td>Bouncing skulls that hit up to 5 targets</td>
              </tr>
              <tr>
                <td className="td-g">70</td>
                <td>Conjure Putrid Zombie</td>
                <td>Conjure</td>
                <td>Summons a zombie with AoE poison effect</td>
              </tr>
              <tr>
                <td className="td-g">76</td>
                <td>Volley of Souls</td>
                <td>Threshold</td>
                <td>Uses Residual Soul stacks for massive damage</td>
              </tr>
              <tr>
                <td className="td-g">82</td>
                <td>Living Death</td>
                <td>Ultimate</td>
                <td>
                  Core DPS ultimate — enhances all abilities for 30 seconds
                </td>
              </tr>
              <tr>
                <td className="td-g">90</td>
                <td>Threads of Fate</td>
                <td>Special</td>
                <td>Links enemies together, damage to one hits all linked</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

/* ──── MELEE ──── */
function MeleeSection() {
  const [tab, setTab] = useState("Training Spots");
  const acc = useAccordion();

  return (
    <>
      <h1>Melee</h1>
      <p>
        Melee uses Attack (accuracy), Strength (damage), and Defence (armour).
        It&apos;s the classic RS combat style with powerful burst damage through
        Berserk. Choose between dual-wield and two-handed based on content.
      </p>

      <TabBar
        tabs={["Training Spots", "Gear Progression"]}
        active={tab}
        set={setTab}
      />

      {tab === "Training Spots" && (
        <>
          <LBand
            id="mel-1"
            range="1–30"
            title="Lumbridge Catacombs & Stronghold of Security"
            xp="~20K XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Start in the Lumbridge Catacombs killing corpse spiders and
              skeletons. Move to the Stronghold of Security for slightly better
              XP. Complete early Slayer tasks from Jacquelyn.
            </p>
            <ul className="step-list">
              <li>Equip bronze/iron gear from shops or drops</li>
              <li>Kill corpse spiders (level 4) in Lumbridge Catacombs</li>
              <li>Move to Stronghold of Security floors 1–2</li>
              <li>Do Slayer tasks from Jacquelyn in Lumbridge</li>
              <li>Upgrade to Steel → Mithril → Adamant as levels allow</li>
            </ul>
          </LBand>

          <LBand
            id="mel-2"
            range="30–50"
            title="Slayer Tasks & Chaos Druids"
            xp="~40K XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Continue Slayer tasks and supplement with Chaos Druids in Taverley
              Dungeon for herb drops. Complete Dragon Slayer quest at 30+.
            </p>
            <ul className="step-list">
              <li>Slayer tasks from Vannaka (Edgeville Dungeon)</li>
              <li>Chaos Druids in Taverley Dungeon — great herb GP</li>
              <li>Upgrade to Adamant armour (T40) and Adamant weapons at 40</li>
              <li>Complete Dragon Slayer for Rune platebody access at 50</li>
              <li>Start using Revolution++ for ability rotations</li>
            </ul>
          </LBand>

          <LBand
            id="mel-3"
            range="50–70"
            title="Slayer & Fire Giants"
            xp="~80K XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Fire Giants in the Waterfall Dungeon are excellent AFK XP. Focus
              on Slayer tasks for dual XP. Upgrade to Dragon/Barrows gear.
            </p>
            <ul className="step-list">
              <li>Fire Giants in Waterfall Dungeon (after Waterfall Quest)</li>
              <li>Slayer tasks from Chaeldar</li>
              <li>Upgrade to Dragon longsword/scimitar at 60 Attack</li>
              <li>Get Barrows gear (T70) as soon as possible</li>
              <li>GWD1 bosses (Bandos/Graardor) at 70+ for drops</li>
            </ul>
          </LBand>

          <LBand
            id="mel-4"
            range="70–90"
            title="Abyssal Demons & GWD1"
            xp="~150K XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Abyssal Demons (85 Slayer) are the bread and butter of melee
              training. GWD1 bosses drop T70 power armour. Start GWD2 at 80+.
            </p>
            <ul className="step-list">
              <li>Abyssal Demons in Slayer Tower (85 Slayer) — best AFK melee XP</li>
              <li>Bandos at GWD1 for Bandos armour (T70 power)</li>
              <li>Upgrade to Abyssal whip (T70) or Blade of Nymora/Avaryss</li>
              <li>Start GWD2 — Vindicta for Dragon Rider Lance (T85)</li>
              <li>Use Berserk ultimate for burst DPS phases</li>
            </ul>
          </LBand>

          <LBand
            id="mel-5"
            range="90–120"
            title="GWD2, Elite Dungeons & Nex"
            xp="~250K+ XP/hr"
            open={acc.open}
            toggle={acc.toggle}
          >
            <p>
              Endgame melee training through bossing. Drygore weapons (T90),
              Masterwork armour (T90/T92). Elite Dungeons for XP and GP.
            </p>
            <ul className="step-list">
              <li>Get Drygore weapons from Kalphite King (T90)</li>
              <li>Craft Masterwork armour (T90) or buy from GE</li>
              <li>Elite Dungeon 1–3 for massive combat XP</li>
              <li>Nex for Torva armour (T80) and Pernix drops</li>
              <li>Trimmed Masterwork (T92) for endgame — very expensive</li>
              <li>Leng swords (T95) from Arch-Glacor HM</li>
            </ul>
          </LBand>
        </>
      )}

      {tab === "Gear Progression" && (
        <>
          <h2>Melee Gear Upgrades</h2>
          <table className="tbl">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Weapon</th>
                <th>Armour (Power)</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-g">T40</td>
                <td>Adamant scimitar</td>
                <td>Adamant armour</td>
                <td>Shops / smithing</td>
              </tr>
              <tr>
                <td className="td-g">T50</td>
                <td>Rune scimitar</td>
                <td>Rune armour</td>
                <td>Shops / smithing / Dragon Slayer</td>
              </tr>
              <tr>
                <td className="td-g">T60</td>
                <td>Dragon longsword</td>
                <td>Dragon armour</td>
                <td>Shops / quests</td>
              </tr>
              <tr>
                <td className="td-g">T70</td>
                <td>Abyssal whip</td>
                <td>Bandos (GWD1)</td>
                <td>Abyssal Demons / GWD1</td>
              </tr>
              <tr>
                <td className="td-g">T80</td>
                <td>Blade of Nymora/Avaryss</td>
                <td>Torva (Nex)</td>
                <td>GWD2 / Nex</td>
              </tr>
              <tr>
                <td className="td-g">T85</td>
                <td>Dragon Rider Lance</td>
                <td>—</td>
                <td>Vindicta (GWD2)</td>
              </tr>
              <tr>
                <td className="td-g">T90</td>
                <td>Drygore weapons</td>
                <td>Masterwork armour</td>
                <td>Kalphite King / Smithing</td>
              </tr>
              <tr>
                <td className="td-g">T92</td>
                <td>Khopesh of Tumeken/Elidinis</td>
                <td>Trimmed Masterwork</td>
                <td>Magister / Smithing</td>
              </tr>
              <tr>
                <td className="td-g">T95</td>
                <td>Dark Shard of Leng + Ice</td>
                <td>—</td>
                <td>Arch-Glacor (HM)</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

/* ──── RANGED ──── */
function RangedSection() {
  const acc = useAccordion();

  return (
    <>
      <h1>Ranged</h1>
      <p>
        Ranged is the safest combat style — attack from a distance and avoid
        damage. Uses bows, crossbows, and thrown weapons. Death&apos;s Swiftness
        is the core damage-boosting ultimate.
      </p>

      <div className="divider">Training Spots</div>
      <LBand
        id="rng-1"
        range="1–30"
        title="Lumbridge & Stronghold"
        xp="~18K XP/hr"
        open={acc.open}
        toggle={acc.toggle}
      >
        <ul className="step-list">
          <li>Kill chickens and cows for early levels (1–10)</li>
          <li>Move to Lumbridge Catacombs spiders</li>
          <li>Use bronze → iron → steel knives or shortbow</li>
          <li>Stronghold of Security floors 1–2 at level 20+</li>
          <li>Slayer tasks from Jacquelyn for dual XP</li>
        </ul>
      </LBand>

      <LBand
        id="rng-2"
        range="30–70"
        title="Slayer & Moss Giants"
        xp="~60K XP/hr"
        open={acc.open}
        toggle={acc.toggle}
      >
        <ul className="step-list">
          <li>Slayer tasks from Vannaka, then Chaeldar</li>
          <li>Use Green d&apos;hide armour at 40, Blue at 50, Red at 60</li>
          <li>Upgrade to Magic shortbow (T50), then Crystal bow (T70)</li>
          <li>Moss Giants and Hill Giants for AFK XP</li>
          <li>Waterfall Quest for big early Ranged XP bonus</li>
        </ul>
      </LBand>

      <LBand
        id="rng-3"
        range="70–90"
        title="Armadyl GWD1 & Slayer"
        xp="~140K XP/hr"
        open={acc.open}
        toggle={acc.toggle}
      >
        <ul className="step-list">
          <li>Armadyl at GWD1 for Armadyl armour (T70 power)</li>
          <li>Use Royal crossbow (T80) — free from Queen Black Dragon</li>
          <li>High-level Slayer: Dark Beasts, Rune Dragons</li>
          <li>GWD2 — Helwyr/Twins for T85 weapons</li>
          <li>Start learning Death&apos;s Swiftness rotations</li>
        </ul>
      </LBand>

      <LBand
        id="rng-4"
        range="90–120"
        title="Nex, Elite Dungeons & Endgame"
        xp="~250K+ XP/hr"
        open={acc.open}
        toggle={acc.toggle}
      >
        <ul className="step-list">
          <li>Ascension crossbows (T90) from Legiones</li>
          <li>Pernix armour (T80) from Nex, or Sirenic (T90) crafting</li>
          <li>Elite Dungeons for massive XP</li>
          <li>Blightbound crossbows (T92) from Nex: AoD</li>
          <li>Bow of the Last Guardian (T95) from Zamorak</li>
        </ul>
      </LBand>

      <div className="divider">Gear Progression</div>
      <table className="tbl">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Weapon</th>
            <th>Armour (Power)</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">T40</td>
            <td>Maple shortbow</td>
            <td>Green d&apos;hide</td>
            <td>Shops / crafting</td>
          </tr>
          <tr>
            <td className="td-g">T50</td>
            <td>Magic shortbow</td>
            <td>Blue d&apos;hide</td>
            <td>Shops / fletching</td>
          </tr>
          <tr>
            <td className="td-g">T60</td>
            <td>Elder shortbow</td>
            <td>Red d&apos;hide</td>
            <td>Fletching / drops</td>
          </tr>
          <tr>
            <td className="td-g">T70</td>
            <td>Crystal bow / Karil&apos;s crossbow</td>
            <td>Armadyl (GWD1)</td>
            <td>Elf quest / GWD1</td>
          </tr>
          <tr>
            <td className="td-g">T80</td>
            <td>Royal crossbow</td>
            <td>Pernix (Nex)</td>
            <td>Queen Black Dragon / Nex</td>
          </tr>
          <tr>
            <td className="td-g">T85</td>
            <td>Shadow glaives</td>
            <td>—</td>
            <td>Gregorovic (GWD2)</td>
          </tr>
          <tr>
            <td className="td-g">T90</td>
            <td>Ascension crossbows</td>
            <td>Sirenic armour</td>
            <td>Legiones / Crafting</td>
          </tr>
          <tr>
            <td className="td-g">T92</td>
            <td>Blightbound crossbows</td>
            <td>Elite Sirenic</td>
            <td>Nex: AoD / Crafting</td>
          </tr>
          <tr>
            <td className="td-g">T95</td>
            <td>Bow of the Last Guardian</td>
            <td>—</td>
            <td>Zamorak boss</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/* ──── MAGIC ──── */
function MagicSection() {
  const acc = useAccordion();

  return (
    <>
      <h1>Magic</h1>
      <p>
        Magic is versatile with damage spells, utility, debuffs, and Ancient
        Magicks. Uses the Magic skill for both accuracy and damage. Sunshine is
        the core DPS ultimate.
      </p>

      <div className="divider">Training Spots</div>
      <LBand
        id="mag-1"
        range="1–30"
        title="Lumbridge & Wizard Tower"
        xp="~18K XP/hr"
        open={acc.open}
        toggle={acc.toggle}
      >
        <ul className="step-list">
          <li>Complete Rune Mysteries quest for rune access</li>
          <li>Kill goblins and spiders with Air Strike/Bolt</li>
          <li>Buy basic runes from Aubury in Varrock</li>
          <li>Use wizard robes (T1 magic armour) from Wizard Tower</li>
          <li>Upgrade to Mystic robes at level 20–30</li>
        </ul>
      </LBand>

      <LBand
        id="mag-2"
        range="30–60"
        title="Slayer & Blue Dragons"
        xp="~55K XP/hr"
        open={acc.open}
        toggle={acc.toggle}
      >
        <ul className="step-list">
          <li>Slayer tasks from Vannaka, then Chaeldar</li>
          <li>Blue Dragons in Taverley Dungeon — safe spot with magic</li>
          <li>Upgrade to Mystic robes (T40), then Grifolic (T50)</li>
          <li>Use Fire Bolt/Blast for training</li>
          <li>Complete Lunar Diplomacy for Lunar spells at 60+</li>
        </ul>
      </LBand>

      <LBand
        id="mag-3"
        range="60–80"
        title="GWD1 & Polypore Dungeon"
        xp="~120K XP/hr"
        open={acc.open}
        toggle={acc.toggle}
      >
        <ul className="step-list">
          <li>Subjugation armour (T70) from Zilyana at GWD1</li>
          <li>Polypore staff (T75) from Polypore Dungeon</li>
          <li>Spiritual mages as Slayer tasks</li>
          <li>Start learning Sunshine rotations</li>
          <li>Desert Treasure for Ancient Magicks (Ice Barrage)</li>
        </ul>
      </LBand>

      <LBand
        id="mag-4"
        range="80–120"
        title="GWD2, Nex & Endgame Bossing"
        xp="~220K+ XP/hr"
        open={acc.open}
        toggle={acc.toggle}
      >
        <ul className="step-list">
          <li>Virtus armour (T80) from Nex</li>
          <li>Wand of the Cywir Elders (T85) from Helwyr</li>
          <li>Seismic wand + singularity (T90) from Vorago</li>
          <li>Tectonic armour (T90) from Vorago drops + crafting</li>
          <li>Fractured Staff of Armadyl (T95) from Zamorak</li>
          <li>Elite Dungeons for massive XP</li>
        </ul>
      </LBand>

      <div className="divider">Gear Progression</div>
      <table className="tbl">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Weapon</th>
            <th>Armour (Power)</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">T40</td>
            <td>Mystic wand</td>
            <td>Mystic robes</td>
            <td>Shops / drops</td>
          </tr>
          <tr>
            <td className="td-g">T50</td>
            <td>Grifolic wand</td>
            <td>Grifolic armour</td>
            <td>Polypore Dungeon</td>
          </tr>
          <tr>
            <td className="td-g">T60</td>
            <td>Dragon battlestaff</td>
            <td>Skeletal armour</td>
            <td>Drops / quests</td>
          </tr>
          <tr>
            <td className="td-g">T70</td>
            <td>Staff of light / Ahrim&apos;s</td>
            <td>Subjugation (GWD1)</td>
            <td>GWD1 / Barrows</td>
          </tr>
          <tr>
            <td className="td-g">T75</td>
            <td>Polypore staff</td>
            <td>—</td>
            <td>Polypore Dungeon</td>
          </tr>
          <tr>
            <td className="td-g">T80</td>
            <td>Chaotic staff</td>
            <td>Virtus (Nex)</td>
            <td>Dungeoneering / Nex</td>
          </tr>
          <tr>
            <td className="td-g">T85</td>
            <td>Wand of the Cywir Elders</td>
            <td>—</td>
            <td>Helwyr (GWD2)</td>
          </tr>
          <tr>
            <td className="td-g">T90</td>
            <td>Seismic wand + singularity</td>
            <td>Tectonic armour</td>
            <td>Vorago / Crafting</td>
          </tr>
          <tr>
            <td className="td-g">T92</td>
            <td>Praesul wand + imperium core</td>
            <td>Elite Tectonic</td>
            <td>Nex: AoD / Crafting</td>
          </tr>
          <tr>
            <td className="td-g">T95</td>
            <td>Fractured Staff of Armadyl</td>
            <td>—</td>
            <td>Zamorak boss</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/* ──── SLAYER ──── */
function SlayerSection() {
  return (
    <>
      <h1>Slayer</h1>
      <p>
        Slayer is the most efficient way to train combat. You earn Slayer XP on
        top of combat XP, and many high-level Slayer monsters drop valuable
        items. Always have a Slayer task active when training combat.
      </p>

      <h2>Slayer Master Progression</h2>
      <table className="tbl">
        <thead>
          <tr>
            <th>Master</th>
            <th>Combat Req</th>
            <th>Slayer Req</th>
            <th>Location</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">Jacquelyn</td>
            <td>None</td>
            <td>None</td>
            <td>Lumbridge</td>
            <td>Starter master. Easy tasks, low XP</td>
          </tr>
          <tr>
            <td className="td-g">Vannaka</td>
            <td>40</td>
            <td>1</td>
            <td>Edgeville Dungeon</td>
            <td>First real master. Decent task variety</td>
          </tr>
          <tr>
            <td className="td-g">Chaeldar</td>
            <td>75</td>
            <td>1</td>
            <td>Zanaris</td>
            <td>Good mid-level tasks</td>
          </tr>
          <tr>
            <td className="td-g">Sumona</td>
            <td>90</td>
            <td>35</td>
            <td>Pollnivneach</td>
            <td>Requires Smoking Kills quest</td>
          </tr>
          <tr>
            <td className="td-g">Duradel</td>
            <td>100</td>
            <td>50</td>
            <td>Shilo Village</td>
            <td>Top-tier master for combat training</td>
          </tr>
          <tr>
            <td className="td-g">Kuradal</td>
            <td>110</td>
            <td>75</td>
            <td>Ancient Cavern</td>
            <td>Best master before Morvran</td>
          </tr>
          <tr>
            <td className="td-g">Morvran</td>
            <td>120</td>
            <td>85</td>
            <td>Prifddinas</td>
            <td>Best master in game. Requires Plague&apos;s End</td>
          </tr>
          <tr>
            <td className="td-g">Laniakea</td>
            <td>120</td>
            <td>90</td>
            <td>Anachronia</td>
            <td>Cluster tasks and special assignments</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Slayer Tasks by Level Range</h2>
      <table className="tbl">
        <thead>
          <tr>
            <th>Slayer Level</th>
            <th>Best Tasks</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">1–30</td>
            <td>Crawling Hands, Cave Bugs, Banshees</td>
            <td>Fast kills, easy mechanics</td>
          </tr>
          <tr>
            <td className="td-g">30–50</td>
            <td>Turoth, Kurask, Infernal Mages</td>
            <td>Decent drops, good XP</td>
          </tr>
          <tr>
            <td className="td-g">50–70</td>
            <td>Gargoyles, Spiritual Warriors, Dust Devils</td>
            <td>AFK-friendly, profitable</td>
          </tr>
          <tr>
            <td className="td-g">70–85</td>
            <td>Abyssal Demons, Dark Beasts, Airut</td>
            <td>High XP/hr, valuable drops (whips, dark bows)</td>
          </tr>
          <tr>
            <td className="td-g">85–99</td>
            <td>Ripper Demons, Moss Golems, Corrupted Creatures</td>
            <td>Top XP/hr, ripper claws worth millions</td>
          </tr>
          <tr>
            <td className="td-g">99–120</td>
            <td>Abyssal Lords, Soul Devourers, Dinosaurs</td>
            <td>Best XP and GP in game</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/* ──── ABILITIES ──── */
function AbilitiesSection() {
  return (
    <>
      <h1>Abilities &amp; Revolution</h1>
      <p>
        RS3 uses an ability-based combat system. Revolution mode automatically
        activates abilities on your action bar, while Full Manual requires you to
        press each ability. Revolution++ is recommended for general training.
      </p>

      <div className="info-box green">
        <strong>Revolution++ Setup:</strong> Enable Revolution++ in
        Combat Settings → Action Bar → Revolution. This mode automatically fires
        basics, thresholds, AND ultimates. For training, it&apos;s the best
        low-effort option. For bossing, switch to Revolution (basics only) or
        Full Manual.
      </div>

      <h2>Key Melee Abilities</h2>
      <table className="tbl">
        <thead>
          <tr>
            <th>Ability</th>
            <th>Type</th>
            <th>Unlock</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">Cleave</td>
            <td>Basic</td>
            <td>Lv 2</td>
            <td>AoE basic, core of any bar</td>
          </tr>
          <tr>
            <td className="td-g">Slice</td>
            <td>Basic</td>
            <td>Lv 1</td>
            <td>Highest damage basic ability</td>
          </tr>
          <tr>
            <td className="td-g">Assault</td>
            <td>Threshold</td>
            <td>Lv 55</td>
            <td>Channelled, 4 hits, massive damage</td>
          </tr>
          <tr>
            <td className="td-g">Destroy</td>
            <td>Threshold</td>
            <td>Lv 37</td>
            <td>Channelled, 4 hits, best DW threshold</td>
          </tr>
          <tr>
            <td className="td-g">Berserk</td>
            <td>Ultimate</td>
            <td>Lv 42</td>
            <td>Doubles damage for 20s — core DPS ultimate</td>
          </tr>
          <tr>
            <td className="td-g">Overpower</td>
            <td>Ultimate</td>
            <td>Lv 70</td>
            <td>Huge single-hit damage</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Ranged Abilities</h2>
      <table className="tbl">
        <thead>
          <tr>
            <th>Ability</th>
            <th>Type</th>
            <th>Unlock</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">Piercing Shot</td>
            <td>Basic</td>
            <td>Lv 1</td>
            <td>Core basic, bleeds the target</td>
          </tr>
          <tr>
            <td className="td-g">Snap Shot</td>
            <td>Threshold</td>
            <td>Lv 37</td>
            <td>Two fast hits, strong threshold</td>
          </tr>
          <tr>
            <td className="td-g">Rapid Fire</td>
            <td>Threshold</td>
            <td>Lv 55</td>
            <td>Channelled, 8 hits, huge damage</td>
          </tr>
          <tr>
            <td className="td-g">Death&apos;s Swiftness</td>
            <td>Ultimate</td>
            <td>Lv 85</td>
            <td>50% damage boost zone for 30s — core DPS ultimate</td>
          </tr>
          <tr>
            <td className="td-g">Bombardment</td>
            <td>Threshold</td>
            <td>Lv 46</td>
            <td>AoE threshold, great for Slayer</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Magic Abilities</h2>
      <table className="tbl">
        <thead>
          <tr>
            <th>Ability</th>
            <th>Type</th>
            <th>Unlock</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">Dragon Breath</td>
            <td>Basic</td>
            <td>Lv 2</td>
            <td>AoE cone basic, hits 3+ targets</td>
          </tr>
          <tr>
            <td className="td-g">Wild Magic</td>
            <td>Threshold</td>
            <td>Lv 55</td>
            <td>Two hits, strongest magic threshold</td>
          </tr>
          <tr>
            <td className="td-g">Asphyxiate</td>
            <td>Threshold</td>
            <td>Lv 37</td>
            <td>Channelled, 4 hits with stun</td>
          </tr>
          <tr>
            <td className="td-g">Sunshine</td>
            <td>Ultimate</td>
            <td>Lv 85</td>
            <td>50% damage boost zone for 30s — core DPS ultimate</td>
          </tr>
          <tr>
            <td className="td-g">Detonate</td>
            <td>Threshold</td>
            <td>Lv 46</td>
            <td>Charged AoE, great for Slayer mobs</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/* ──── POTIONS ──── */
function PotionsSection() {
  return (
    <>
      <h1>Combat Potions</h1>
      <p>
        Potions are essential for combat. They boost your stats, heal you, and
        provide prayer restoration. Always use the best potions you can afford.
      </p>

      <h2>Potion Progression</h2>
      <table className="tbl">
        <thead>
          <tr>
            <th>Potion</th>
            <th>Herblore Req</th>
            <th>Effect</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">Attack / Strength Potion</td>
            <td className="td-xp">3 / 12</td>
            <td>+3–12% stat boost</td>
            <td>Very cheap, use from the start</td>
          </tr>
          <tr>
            <td className="td-g">Combat Potion</td>
            <td className="td-xp">36</td>
            <td>Boosts Attack + Strength</td>
            <td>Combines two potions into one</td>
          </tr>
          <tr>
            <td className="td-g">Super Attack / Strength</td>
            <td className="td-xp">45 / 55</td>
            <td>+5–19% stat boost</td>
            <td>Significant upgrade over basic versions</td>
          </tr>
          <tr>
            <td className="td-g">Super Combat</td>
            <td className="td-xp">90</td>
            <td>Boosts Att + Str + Def</td>
            <td>Great all-in-one before Overloads</td>
          </tr>
          <tr>
            <td className="td-g">Overload</td>
            <td className="td-xp">96</td>
            <td>+17% to all combat stats</td>
            <td>
              Best non-elder potion. Huge DPS boost. Doesn&apos;t drain over time.
            </td>
          </tr>
          <tr>
            <td className="td-g">Supreme Overload</td>
            <td className="td-xp">98</td>
            <td>+19% to all combat stats</td>
            <td>Direct upgrade to Overload</td>
          </tr>
          <tr>
            <td className="td-g">Elder Overload</td>
            <td className="td-xp">106</td>
            <td>+21% to all combat stats</td>
            <td>Best potion in game. Expensive but worth it.</td>
          </tr>
        </tbody>
      </table>

      <div className="info-box purple">
        <strong>Prayer Potions:</strong> Always bring Prayer/Super Restore
        potions when using protection prayers or damage-boosting prayers
        (Turmoil, Anguish, Torment). Super Restores also restore Summoning
        points.
      </div>

      <h2>Utility Potions</h2>
      <table className="tbl">
        <thead>
          <tr>
            <th>Potion</th>
            <th>Herblore Req</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-g">Prayer Potion</td>
            <td className="td-xp">38</td>
            <td>Restores Prayer points</td>
          </tr>
          <tr>
            <td className="td-g">Super Restore</td>
            <td className="td-xp">63</td>
            <td>Restores Prayer + lowered stats + Summoning</td>
          </tr>
          <tr>
            <td className="td-g">Saradomin Brew</td>
            <td className="td-xp">81</td>
            <td>Heals 1000 LP + boosts Defence, lowers offensive stats</td>
          </tr>
          <tr>
            <td className="td-g">Weapon Poison+++</td>
            <td className="td-xp">82</td>
            <td>Poisons your weapon — adds passive DPS</td>
          </tr>
          <tr>
            <td className="td-g">Adrenaline Renewal</td>
            <td className="td-xp">87</td>
            <td>Slowly restores adrenaline — more ultimates</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/* ================================================================
   MAIN PAGE COMPONENT
   ================================================================ */
const SECTIONS = [
  "Overview",
  "Combat Triangle",
  "Necromancy",
  "Melee",
  "Ranged",
  "Magic",
  "Slayer",
  "Abilities",
  "Potions",
] as const;

type Section = (typeof SECTIONS)[number];

const ICONS: Record<Section, string> = {
  Overview: "📋",
  "Combat Triangle": "🔺",
  Necromancy: "☠️",
  Melee: "⚔️",
  Ranged: "🏹",
  Magic: "🔮",
  Slayer: "💀",
  Abilities: "⚡",
  Potions: "🧪",
};

export default function CombatPage() {
  const [section, setSection] = useState<Section>("Overview");

  const content: Record<Section, React.ReactNode> = {
    Overview: <Overview />,
    "Combat Triangle": <CombatTriangle />,
    Necromancy: <NecromancySection />,
    Melee: <MeleeSection />,
    Ranged: <RangedSection />,
    Magic: <MagicSection />,
    Slayer: <SlayerSection />,
    Abilities: <AbilitiesSection />,
    Potions: <PotionsSection />,
  };

  return (
    <div className="page-shell">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sb-label">Combat Guide</div>
        {SECTIONS.map((s) => (
          <button
            key={s}
            className={`sb-btn ${section === s ? "active" : ""}`}
            onClick={() => setSection(s)}
          >
            <span>{ICONS[s]}</span> {s}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="page-content">{content[section]}</main>
    </div>
  );
}
