const STYLE_ID = `wildling-card-styles`;

const ensureStyles = () => {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement(`style`);
    style.id = STYLE_ID;
    style.textContent = `
        .wildling-card {
            position: relative;
            width: 600px;
            height: 400px;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 14px 40px rgba(0,0,0,0.28);
            border: 6px solid #000;
            color: #0a0a0a;
            font-family: "Segoe UI", sans-serif;
            background: radial-gradient(circle at top left, #2d2f33 0%, #ffffff 75%);
            background-size: cover;
            background-position: center;
        }

        .wildling-card::before {
            content: none;
        }

        .wildling-card__content {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            height: 100%;
            padding: 14px 16px;
            gap: 12px;
        }

        .wildling-card__left {
            display: grid;
            grid-template-rows: auto auto auto 1fr;
            gap: 8px;
        }

        .wildling-card__title {
            margin: 0;
            font-size: 24px;
            font-weight: 800;
            letter-spacing: 0.5px;
            color: #ffffff;
            text-shadow:
                -1px -1px 0 #000,
                1px -1px 0 #000,
                -1px 1px 0 #000,
                1px 1px 0 #000,
                0 0 6px rgba(0,0,0,0.35);
        }

        .wildling-card__types {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .wildling-card__pill {
            background: #ffffff;
            border: 1px solid #d0d0d0;
            color: #0a0a0a;
            padding: 2px 10px;
            border-radius: 999px;
            font-size: 10.8px;
            font-weight: 700;
            letter-spacing: 0.4px;
            text-transform: uppercase;
        }

        .wildling-card__stat-grid {
            border: 1px solid rgba(0,0,0,0.18);
            border-radius: 10px;
            background: #e0e0e0;
            width: 100%;
            box-sizing: border-box;
            border-collapse: separate;
            border-spacing: 0;
            table-layout: fixed;
            overflow: hidden;
            font-size: 9px;
            height: 100px;
            max-height: 100px;
            padding: 12px 8px;
        }

        .wildling-card__stat-grid th,
        .wildling-card__stat-grid td {
            border: 1px solid rgba(0,0,0,0.18);
            padding: 5px 7px;
            line-height: 1.1;
            text-align: left;
        }

        .wildling-card__stat-grid tbody td {
            padding: 8px 6px;
            line-height: 1.05;
        }

        .wildling-card__stat-grid tr + tr th,
        .wildling-card__stat-grid tr + tr td {
            border-top: 2px solid rgba(0,0,0,0.2);
        }

        .wildling-card__stat-head {
            font-weight: 800;
            font-size: 10.35px;
            letter-spacing: 0.3px;
            text-transform: uppercase;
            color: #0a0a0a;
        }

        .wildling-card__stat-label {
            font-weight: 700;
            font-size: 10.35px;
            color: #0a0a0a;
        }

        .wildling-card__stat-value {
            font-weight: 800;
            font-size: 10.35px;
            color: #0a0a0a;
            text-align: left;
        }

        .wildling-card__weak-resist {
            border: 1px solid rgba(0,0,0,0.18);
            border-radius: 10px;
            background: #e0e0e0;
            padding: 4px 6px;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-template-rows: repeat(2, auto);
            gap: 3px 4px;
            position: relative;
            top: -20px;
        }

        .wildling-card__section-title {
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.3px;
            text-transform: uppercase;
            color: #0a0a0a;
        }

        .wildling-card__list {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .wildling-card__list--compact {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 4px;
        }

        .wildling-card__pill--compact {
            padding: 1px 4px;
            font-size: 6.5px;
        }

        .wildling-card__right {
            display: flex;
            flex-direction: column;
            gap: 1px;
            height: 100%;
            min-height: 0;
            overflow: hidden;
        }

        .wildling-card__ability {
            border: 1px solid rgba(0,0,0,0.2);
            border-radius: 12px;
            background: #e0e0e0;
            padding: 8px 10px;
            font-size: 11.8px;
            line-height: 1.4;
            color: #0a0a0a;
            min-height: 60px;
            flex: 0 0 auto;
        }

        .wildling-card__note {
            border: 1px solid rgba(0,0,0,0.28);
            border-radius: 10px;
            background: #e0e0e0;
            padding: 4px 5px;
            min-height: 0;
            max-height: 90px;
            font-size: 10px;
            line-height: 1.05;
            overflow: hidden;
            flex: 1 1 0;
            position: relative;
        }

        .wildling-card__note::before,
        .wildling-card__note::after {
            content: "";
            position: absolute;
            left: 6px;
            right: 6px;
            height: 1px;
            background: rgba(0,0,0,0.25);
        }

        .wildling-card__note::before { top: 33%; }
        .wildling-card__note::after { top: 66%; }

        .wildling-card__levelxp {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 6px;
        }

        .wildling-card__field {
            border: 1px solid rgba(0,0,0,0.3);
            border-radius: 10px;
            background: #e0e0e0;
            padding: 4px 6px;
            min-height: 28px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            letter-spacing: 0.2px;
            font-size: 11px;
            color: #0a0a0a;
        }
    `;

    document.head.appendChild(style);
};

const typeColors = {
    Fire: { bg: `#e25822`, border: `#c54a1d`, color: `#0a0a0a` },
    Water: { bg: `#2f6de1`, border: `#285dc0`, color: `#0a0a0a` },
    Air: { bg: `#2fa8a8`, border: `#279090`, color: `#0a0a0a` },
    Earth: { bg: `#b86b3c`, border: `#9c5b33`, color: `#0a0a0a` },
    Dark: { bg: `#3b1d5a`, border: `#31184b`, color: `#ffffff` },
    Light: { bg: `#f4e7c5`, border: `#d9cfae`, color: `#0a0a0a` },
    Dragon: { bg: `#6b5bd5`, border: `#5a4db5`, color: `#0a0a0a` },
    Metal: { bg: `#d2d8d2`, border: `#b9c1b9`, color: `#0a0a0a` },
    Magic: { bg: `#dba7e8`, border: `#c48fcc`, color: `#0a0a0a` },
    Plant: { bg: `#7acb6f`, border: `#67ad5e`, color: `#0a0a0a` },
    Poison: { bg: `#7a6b9a`, border: `#6a5b88`, color: `#0a0a0a` },
    Electric: { bg: `#f3e15f`, border: `#d6c749`, color: `#0a0a0a` },
};

const getTypeStyle = (name) => {
    const key = typeof name === `string` ? name.trim() : ``;
    return typeColors[key] ?? { bg: `#ffffff`, border: `#d0d0d0`, color: `#0a0a0a` };
};

const lightenHex = (hex, percent) => {
    const clean = hex.replace(`#`, ``);
    const num = parseInt(clean.length === 3 ? clean.split(``).map((c) => c + c).join(``) : clean, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    const factor = percent / 100;
    const lr = Math.min(255, Math.round(r + (255 - r) * factor));
    const lg = Math.min(255, Math.round(g + (255 - g) * factor));
    const lb = Math.min(255, Math.round(b + (255 - b) * factor));
    return `#${((1 << 24) + (lr << 16) + (lg << 8) + lb).toString(16).slice(1)}`;
};

const buildPills = (values = [], emptyText = `None`, showEmpty = true) => {
    const list = document.createElement(`div`);
    const compact = values.length >= 4;
    list.className = `wildling-card__list${compact ? ` wildling-card__list--compact` : ``}`;

    if (!values.length) {
        if (!showEmpty) return null;
        const pill = document.createElement(`span`);
        const style = getTypeStyle(emptyText);
        pill.className = `wildling-card__pill${compact ? ` wildling-card__pill--compact` : ``}`;
        pill.textContent = emptyText;
        pill.style.background = style.bg;
        pill.style.borderColor = style.border;
        pill.style.color = style.color;
        list.appendChild(pill);
        return list;
    }

    values.forEach((value) => {
        const pill = document.createElement(`span`);
        pill.className = `wildling-card__pill${compact ? ` wildling-card__pill--compact` : ``}`;
        pill.textContent = value;
        const style = getTypeStyle(value);
        pill.style.background = style.bg;
        pill.style.borderColor = style.border;
        pill.style.color = style.color;
        list.appendChild(pill);
    });

    return list;
};

export const renderCard = (entry) => {
    ensureStyles();

    const card = document.createElement(`article`);
    card.className = `wildling-card`;

    const primaryTypeStyle = getTypeStyle(entry.types?.[0] ?? ``);
    const titleColor = lightenHex(primaryTypeStyle.bg, 30);

    const bg = entry.image
        ? `radial-gradient(circle at top left, ${titleColor} 0%, #ffffff 80%), url(${entry.image})`
        : `radial-gradient(circle at top left, ${titleColor} 0%, #ffffff 80%)`;
    card.style.backgroundImage = bg;
    card.style.backgroundSize = `cover`;
    card.style.backgroundPosition = `center`;

    const content = document.createElement(`div`);
    content.className = `wildling-card__content`;

    const left = document.createElement(`div`);
    left.className = `wildling-card__left`;

    const title = document.createElement(`h2`);
    title.className = `wildling-card__title`;
    title.textContent = entry.name ?? `Unknown`;
    title.style.color = titleColor;

    const types = document.createElement(`div`);
    types.className = `wildling-card__types`;
    types.appendChild(buildPills(entry.types, `No types`));

    const levelXp = document.createElement(`div`);
    levelXp.className = `wildling-card__levelxp`;
    const levelField = document.createElement(`div`);
    levelField.className = `wildling-card__field`;
    levelField.textContent = `Level:`;
    const xpField = document.createElement(`div`);
    xpField.className = `wildling-card__field`;
    xpField.textContent = `XP:`;
    const statField = document.createElement(`div`);
    statField.className = `wildling-card__field`;
    statField.textContent = `Stat Points:`;
    levelXp.appendChild(levelField);
    levelXp.appendChild(xpField);
    levelXp.appendChild(statField);

    const stats = document.createElement(`table`);
    stats.className = `wildling-card__stat-grid`;

    const thead = document.createElement(`thead`);
    const headRow = document.createElement(`tr`);
    const statHeadings = [`Stat`, `Base`, `Bonus`, `Total`];
    statHeadings.forEach((heading) => {
        const th = document.createElement(`th`);
        th.className = `wildling-card__stat-head`;
        th.textContent = heading;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    stats.appendChild(thead);

    const tbody = document.createElement(`tbody`);
    const statEntries = [
        [`HP`, entry.hp],
        [`Power`, entry.power],
        [`Defense`, entry.defense],
        [`Speed`, entry.speed],
    ];

    statEntries.forEach(([label, value]) => {
        const row = document.createElement(`tr`);

        const labelCell = document.createElement(`td`);
        labelCell.className = `wildling-card__stat-label`;
        labelCell.textContent = label;

        const baseCell = document.createElement(`td`);
        baseCell.className = `wildling-card__stat-value`;
        baseCell.textContent = value ?? ``;

        const bonusCell = document.createElement(`td`);
        bonusCell.className = `wildling-card__stat-value`;
        bonusCell.textContent = ``;

        const totalCell = document.createElement(`td`);
        totalCell.className = `wildling-card__stat-value`;
        totalCell.textContent = ``;

        row.appendChild(labelCell);
        row.appendChild(baseCell);
        row.appendChild(bonusCell);
        row.appendChild(totalCell);
        tbody.appendChild(row);
    });

    stats.appendChild(tbody);

    const weakRes = document.createElement(`div`);
    weakRes.className = `wildling-card__weak-resist`;

    const titles = [
        `Weak 2x`,
        `Weak 4x`,
        `Resist 2x`,
        `Resist 4x`,
    ];
    const lists = [
        entry.weaknesses_2x,
        entry.weaknesses_4x,
        entry.resistances_2x,
        entry.resistances_4x,
    ];

    titles.forEach((label) => {
        const titleEl = document.createElement(`div`);
        titleEl.className = `wildling-card__section-title`;
        titleEl.textContent = label;
        weakRes.appendChild(titleEl);
    });

    lists.forEach((values) => {
        const listWrap = document.createElement(`div`);
        const pills = buildPills(values || [], `None`, false);
        if (pills) listWrap.appendChild(pills);
        weakRes.appendChild(listWrap);
    });

    left.appendChild(title);
    left.appendChild(types);
    left.appendChild(levelXp);
    left.appendChild(stats);
    left.appendChild(weakRes);

    const right = document.createElement(`div`);
    right.className = `wildling-card__right`;

    const ability = document.createElement(`div`);
    ability.className = `wildling-card__ability`;
    const abilityText = entry.ability ?? `No ability specified.`;
    const colonIndex = abilityText.indexOf(`:`);
    if (colonIndex > 0) {
        const bold = document.createElement(`strong`);
        bold.textContent = abilityText.slice(0, colonIndex + 1);
        const rest = document.createTextNode(abilityText.slice(colonIndex + 1));
        ability.appendChild(bold);
        ability.appendChild(rest);
    } else {
        ability.textContent = abilityText;
    }

    right.appendChild(ability);
    for (let i = 0; i < 3; i += 1) {
        const note = document.createElement(`div`);
        note.className = `wildling-card__note`;
        right.appendChild(note);
    }

    content.appendChild(left);
    content.appendChild(right);

    card.appendChild(content);

    return card;
};
