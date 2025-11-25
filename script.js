// Daten der Gottheiten
const deities = {
    Angrosch: {
        mirakelPlus: ["KL", "FF", "KO", "KK", "Selbstbeherrschung", "Menschenkenntnis", "Überzeugen", "Gesteinskunde", "Hüttenkunde", "Mechanik", "Rechnen", "Schätzen"],
        mirakelMinus: ["Akrobatik", "Fliegen", "Gaukeleien", "Schwimmen", "Boote Fahren", "Seefahrt"],
        feiertag: "<br>7. Ingerimm – Tag der Abschwörung (siebenjährig, auf der Dracheninsel in Xorlosch)<br>1. Ingerimm – Tag des Feuers<br>8. Ingerimm – Tag des Aufbruchs"
    },
    Aves: {
        mirakelPlus: ["IN", "CH", "GE", "KO", "Ausweichen", "Gefahreninstinkt", "Athletik", "Klettern", "Sinnenschärfe", "Gassenwissen", "Menschenkenntnis", "Überreden", "Überzeugen", "Orientierung", "Wettervorhersage", "Wildnisleben", "Geographie", "Sprachenkunde", "Handel", "Instrumentenbauer", "Kartographie"],
        mirakelMinus: ["Alle bewaffneten Kampftechniken", "Kriegskunst"],
        feiertag: "<br>24. Phex – Glückstag<br>Tag des Aufbruchs (je nach Region und Klima unterschiedlich, z. B. nach der Schneeschmelze oder beim Aufbruch / bei der Rückkehr der Zugvögel)"
    },
    Boron: {
        mirakelPlus: ["MU", "KL", "IN", "CH", "Schleichen", "Selbstbeherrschung", "Lehren", "Menschenkenntnis", "Überzeugen", "Götter/Kulte", "Pflanzenkunde", "Alchimie", "Heilkunde Seele", "Gabe Prophezeihen"],
        mirakelMinus: ["Gaukeleien", "Singen", "Stimmen imitieren", "Tanzen", "Zechen", "Betören", "Schauspielerei", "Glücksspiel", "Instrumentenbauer", "Musizieren"],
        feiertag: "<br>1. Boron  – Totenfest<br>30. Boron – Tag des Großen Schlafs"
    },
    Efferd: {
        mirakelPlus: ["IN", "GE", "KO", "KK", "Schwimmen", "Sinnenschärfe", "Überzeugen", "Fesseln/Entfesseln", "Fischen/Angeln", "Orientierung", "Wettervorhersage", "Boote Fahren", "Seefahrt", "Zimmermann"],
        mirakelMinus: ["Alle Tätigkeiten, die irgendwie mit Feuer zu tun haben", "Alchimie", "Glaskunst (Glasbläserei)", "Grobschmied", "Hüttenkunde", "Kochen", "Metallguss"],
        feiertag: "<br>1. Efferd – Tag des Wassers<br>30. Efferd – Fischerfest"
    },
    Firun: {
        mirakelPlus: ["MU", "GE", "KO", "KK", "Gefahreninstinkt", "Körperbeherrschung", "Schleichen", "Selbstbeherrschung", "Sich Verstecken", "Sinnenschärfe", "Fährtensuchen", "Orientierung", "Wettervorhersage", "Wildnisleben"],
        mirakelMinus: ["Gaukeleien", "Singen", "Tanzen", "Alle Gesellschaftlichen Talente außer Lehren", "Falschspiel", "Musizieren"],
        feiertag: "<br>1. Firun – Tag der Jagd<br>11. Firun – Tag des Hirsches<br>30. Firun – Tag der Ifirn"
    },
    Hesinde: {
        mirakelPlus: ["KL", "IN", "CH", "MR", "Etikette", "Lehren", "Menschenkenntnis", "Überzeugen", "Geschichtswissen", "Götter/Kulte", "Magiekunde", "Pflanzenkunde", "Sternkunde", "Tierkunde", "Alchimie"],
        mirakelMinus: ["Zechen", "Überreden (Lügen)"],
        feiertag: "<br>30. Phex – Versenkungsfest<br>30. Rahja – Reinigungsfest<br>30. Efferd – Prüfungsfest<br>30. Hesinde – Erleuchtungsfest)"
    },
    Ifirn: {
        mirakelPlus: ["MU", "IN", "CH", "GE", "Gefahreninstinkt"],
        mirakelMinus: [],
        feiertag: "<br>30. Firun – Tag der Ifirn"
    },
    Ingerimm: {
        mirakelPlus: ["MU", "FF", "KO", "KK", "Selbstbeherrschung", "Lehren", "Überzeugen", "Gesteinskunde", "Hüttenkunde", "Mechanik", "Rechnen", "Schätzen", "Bergbau", "Steinmetz"],
        mirakelMinus: ["Fischen/Angeln", "Gaukeleien", "Schwimmen", "Seefahrt"],
        feiertag: "<br>21. Ingerimm – Tag der Waffenschmiede"
    },
    Kor: {
        mirakelPlus: ["MU", "GE", "KO", "KK", "Ausweichen", "Athletik", "Körperbeherrschung", "Reiten", "Selbstbeherrschung", "Sinnenschärfe", "Menschenkenntnis", "Überzeugen", "Kriegskunst", "Fahrzeug Lenken (Streitwagen)", "Infanteriewaffen"],
        mirakelMinus: ["Heilkunde-Talente", "Gefahreninstinkt"],
        feiertag: "<br>Nacht vom 15. auf den 16. Rondra – Fest des Schwertes"
    },
    Nandus: {
        mirakelPlus: ["KL", "IN", "CH", "FF", "Lehren", "Menschenkenntnis", "Überreden", "Überzeugen", "Kryptographie", "Philosophie", "Rechnen", "Sternkunde"],
        mirakelMinus: [],
        feiertag: "<br>30. Efferd – Nacht vor Frühlings-Tagundnachtgleiche<br>30. Hesinde – Nacht vor der Wintersonnenwende<br>30. Phex – Nacht vor der Herbst-Tagundnachtgleiche"
    },
    Peraine: {
        mirakelPlus: ["KL", "IN", "CH", "FF", "Ausweichen", "Lehren", "Menschenkenntnis", "Überzeugen", "Pflanzenkunde", "Tierkunde", "Ackerbau", "Hauswirtschaft", "Heilkunde Krankheiten", "Heilkunde Wunden", "Kochen", "Viehzucht"],
        mirakelMinus: ["Alle bewaffneten Kampftechniken", "Betören", "Fallenstellen", "Kriegskunst", "Falschspiel", "Schlösser Knacken"],
        feiertag: "<b>1. Peraine – Saatfest<br>1. - 3. Travia – Fest der eingebrachten Früchte"
    },
    Phex: {
        mirakelPlus: ["MU", "IN", "FF", "GE", "Körperbeherrschung", "Schleichen", "Sich Verstecken", "Gassenwissen", "Menschenkenntnis", "Überreden", "Mechanik", "Rechtskunde", "Sternkunde", "Handel"],
        mirakelMinus: [],
        feiertag: "<br>16. Efferd – Nebelfest<br>16. Phex – Tag des Phex<br>24. Phex – Glückstag"
    },
    Praios: {
        mirakelPlus: ["MU", "IN", "CH", "MR", "Selbstbeherrschung", "Etikette", "Lehren", "Menschenkenntnis", "Überzeugen", "Götter/Kulte", "Rechtskunde", "Staatskunst"],
        mirakelMinus: ["Fliegen", "Gaukeleien", "Schleichen", "Sich Verstecken", "Stimmen Imitieren", "Taschendiebstahl", "Überreden", "Sich verkleiden", "Falschspiel", "Schlösser Knacken"],
        feiertag: "<br>1. Praios – Sommersonnenwende<br>29. Travia – Tag des Heiligen Gilborn"
    },
    Rahja: {
        mirakelPlus: ["MU", "IN", "CH", "GE", "Ausweichen", "Körperbeherrschung", "Reiten", "Sinneschärfe", "Zechen", "Betören", "Lehren", "Menschenkenntnis", "Überreden", "Überzeugen"],
        mirakelMinus: ["Alle bewaffneten Kampftechniken", "Kriegskunst", "Grobes und Unschönes"],
        feiertag: "<br>1.-7. Rahja – Fest der Freuden"
    },
    Rondra: {
        mirakelPlus: ["MU", "GE", "KO", "KK", "Athletik", "Körperbeherrschung", "Reiten", "Selbstbeherrschung", "Kriegskunst"],
        mirakelMinus: ["Alle Fernkampftechniken", "Schleichen", "Sich Verstecken", "Sich verkleiden", "Überreden", "Bogenbau", "Falschspiel"],
        feiertag: "<br>5. Rondra – Tag des Schwurs<br>15./16. Rondra – Tag der Helden<br>4. Travia – Erntefestmassaker<br>4. Peraine – Thalionmeltag"
    },
    Swafnir: {
        mirakelPlus: ["MU", "GE", "KO", "KK", "Körperbeherrschung", "Selbstbeherrschung", "Schwimmen", "Zechen", "Lehren", "Orientierung", "Wettervorhersage", "Seefahrt"],
        mirakelMinus: ["Alle Proben, die mit Lügen, Schmeichelei, Überreden zu tun haben", "Brettspiel", "Etikette (nicht-thorwalsche)", "Kryptographie", "Magiekunde", "Philosophie"],
        feiertag: "<br>1. Efferd – Tag des Wassers, auch Swafnirtag"
    },
    Travia: {
        mirakelPlus: ["MU", "IN", "CH", "FF", "Selbstbeherrschung", "Sinneschärfe", "Zechen", "Lehren", "Menschenkenntnis", "Überzeugen", "Sagen/Legenden", "Hauswirtschaft", "Heilkunde Krankheit", "Heilkunde Seele", "Kochen", "Viehzucht"],
        mirakelMinus: ["Alle Fernkampftalente", "Taschendiebstahl", "Betören", "Bogenbau", "Falschspiel"],
        feiertag: "<br>1.-3. Travia – Tag der Heimkehr (Familienfest)<br>12. Travia – Tag der Treue (beliebter Tag für Hochzeiten)"
    },
    Tsa: {
        mirakelPlus: ["IN", "CH", "FF", "GE", "Sich Verkleiden", "Singen", "Tanzen", "Menschenkenntnis", "Überreden", "Überzeugen", "Philosophie", "Sagen/Legenden"],
        mirakelMinus: ["Alle bewaffneten Kampftechniken", "Fallenstellen", "Fischen/Angeln", "Anatomie", "Kriegskunst", "Alle Waffen herstellenden Handwerkstalente", "Fleischer", "Gerber/Kürschner"],
        feiertag: "<br>30. Tsa - 1. Phex – Tag der Erneuerung"
    }
};

// Aktuelle Werte
let kap = 0;
let worldlyHours = 0;
let sleepHours = 0;

// Funktionen zum Ändern der Werte
function changeKap(delta) {
    kap = Math.max(0, kap + delta);
    document.getElementById("kap-value").textContent = kap;
    calculateEntruckung();
}

function changeWorldlyHours(delta) {
    worldlyHours = Math.max(0, worldlyHours + delta);
    document.getElementById("worldly-hours-value").textContent = worldlyHours;
    calculateEntruckung();
}

function changeSleepHours(delta) {
    sleepHours = Math.max(0, sleepHours + delta);
    document.getElementById("sleep-hours-value").textContent = sleepHours;
    calculateEntruckung();
}

// Berechnung der Entrückung
function calculateEntruckung() {
    const entruckungPoints = Math.max(0, kap - worldlyHours - sleepHours);
    document.getElementById("entruckung-points").textContent = entruckungPoints;
    let mirakelBonus = 0;
    if (entruckungPoints >= 5) {
        mirakelBonus = Math.min(7, Math.round(entruckungPoints / 10));
    }

    // Anzeige mit Vorzeichen
    document.getElementById("mirakel-bonus").textContent = "+" + mirakelBonus;
    const mirakelMalus = mirakelBonus * 2;
    document.getElementById("mirakel-malus").textContent = "-" + mirakelMalus;
    document.getElementById("other-malus").textContent = "-" + mirakelBonus;
    document.getElementById("asp-regen").textContent = "-" + mirakelBonus;

    const specialEffects = document.getElementById("special-effects");
    specialEffects.innerHTML = "";
    if (entruckungPoints >= 50) {
        specialEffects.innerHTML = `<p><strong>Streiter der Götter:</strong><br>Der Geweihte ist nun ein lebendiges Zeichen göttlicher Macht - sein Wesen strahlt mit einer solchen Intensität, dass er Verbündete beflügelt und Feinde erzittern lässt. Seine bloße Anwesenheit entfacht Mut in den Herzen der Gläubigen, während Dämonen und Ketzer von urplötzlicher Furcht erfasst werden. Doch diese göttliche Glut zieht auch die Blicke der Finsternis an: In den Schattenreichen wird er zum unübersehbaren Leuchtfeuer, das die Mächte der Unterwelt herausfordert - ein lebender Sturm, der die Grenzen zwischen Himmel und Hölle berührt. (Änderung der Werte: MU +2, CH +2, Überzeugen erleichtert um 5 Punkte oder MU für Verbündete in Nähe +2, Ketzer, Frevler MU -4, RS+2 gegen dämonische Angriffe)</p>`;
    } else if (entruckungPoints >= 40) {
        specialEffects.innerHTML = `<p><strong>Sprung des Glaubens:</strong><br>Mit unerschütterlichem Vertrauen in seinen Gott vollbringt der Geweihte das Unmögliche - getrieben von der Gewissheit, dass die göttliche Macht ihn trägt und das jeder Logik trotzt: Hier wird Glaube zur übernatürlichen Tat. Ein letzter, alles riskierender Einsatz der Karmaenergie, selbst wenn diese erschöpft sein mag, macht das Undenkbare möglich. (Keine Auswirkung auf Werte des Helden)</p>`;
    } else if (entruckungPoints >= 30) {
        specialEffects.innerHTML = `<p><strong>Göttlicher Fingerzeig:</strong><br>Göttliche Hinweise gehen über flüchtige Erkenntnisse hinaus - der Geweihte empfängt rätselhafte Visionen, Träume oder Botschaften, die von kommenden Ereignissen, seinem Schicksal oder dringenden Warnungen künden. Die Götter sprechen nicht klar, doch ihre Zeichen sind unübersehbar. (Keine Auswirkung auf Werte des Helden)</p>`;
    } else if (entruckungPoints >= 20) {
        specialEffects.innerHTML = `<p><strong>Epiphanie:</strong><br>Im Zustand höchster Entrückung berührt der Geist des Geweihten göttliche Sphären und erhascht flüchtige Einblicke in verborgene Weisheiten. Zwar bleibt das Göttliche unbegreiflich, doch in diesem Moment können plötzliche Erkenntnisse oder intuitive Lösungen aufblitzen. (Keine Auswirkung auf Werte des Helden)</p>`;
    }
}


function calculateModifiers() {
    let liturgieModifier = 0;
    let mirakelModifier = 0;
    let regenModifier = 0;

    // Hilfsfunktion für korrekte Rundung (auch bei negativen Werten)
    function roundHalf(value) {
        return value < 0 ? Math.floor(value) : Math.ceil(value);
    }

    // Motivation
    liturgieModifier += document.getElementById('emergency').checked ? -3 : 0;
    liturgieModifier += parseInt(document.getElementById('divine-mission-value').value || 0);
    liturgieModifier += parseInt(document.getElementById('selfish-motives-value').value || 0);
    liturgieModifier += document.getElementById('magical-influence').checked ? 12 : 0;
    liturgieModifier += document.getElementById('new-convert').checked ? 3 : 0;
    liturgieModifier += document.getElementById('oathbreaker').checked ? 3 : 0;
    liturgieModifier += document.getElementById('blasphemer').checked ? 7 : 0;

    // Mirakel-Modifikatoren (mit korrekter Rundung)
    mirakelModifier += document.getElementById('emergency').checked ? roundHalf(-3 / 2) : 0;
    mirakelModifier += roundHalf(parseInt(document.getElementById('divine-mission-value').value || 0) / 2);
    mirakelModifier += roundHalf(parseInt(document.getElementById('selfish-motives-value').value || 0) / 2);
    mirakelModifier += document.getElementById('magical-influence').checked ? roundHalf(12 / 2) : 0;
    mirakelModifier += document.getElementById('new-convert').checked ? roundHalf(3 / 2) : 0;
    mirakelModifier += document.getElementById('oathbreaker').checked ? roundHalf(3 / 2) : 0;
    mirakelModifier += document.getElementById('blasphemer').checked ? roundHalf(7 / 2) : 0;

    // Ort
    liturgieModifier += document.getElementById('consecrated-ground').checked ? -1 : 0;
    liturgieModifier += document.getElementById('shrine').checked ? -2 : 0;
    liturgieModifier += document.getElementById('temple').checked ? -3 : 0;
    liturgieModifier += document.getElementById('holy-site').checked ? -4 : 0;
    liturgieModifier += parseInt(document.getElementById('unbelievers-value').value || 0);
    liturgieModifier += parseInt(document.getElementById('other-world-value').value || 0);
    liturgieModifier += parseInt(document.getElementById('demonic-territory-value').value || 0);

    // Mirakel-Modifikatoren für Ort (mit korrekter Rundung)
    mirakelModifier += document.getElementById('consecrated-ground').checked ? roundHalf(-1 / 2) : 0;
    mirakelModifier += document.getElementById('shrine').checked ? roundHalf(-2 / 2) : 0;
    mirakelModifier += document.getElementById('temple').checked ? roundHalf(-3 / 2) : 0;
    mirakelModifier += document.getElementById('holy-site').checked ? roundHalf(-4 / 2) : 0;
    mirakelModifier += roundHalf(parseInt(document.getElementById('unbelievers-value').value || 0) / 2);
    mirakelModifier += roundHalf(parseInt(document.getElementById('other-world-value').value || 0) / 2);
    mirakelModifier += roundHalf(parseInt(document.getElementById('demonic-territory-value').value || 0) / 2);

    // Regeneration
    regenModifier += document.getElementById('consecrated-ground').checked ? -1 : 0;
    regenModifier += document.getElementById('shrine').checked ? -2 : 0;
    regenModifier += document.getElementById('temple').checked ? -3 : 0;
    regenModifier += document.getElementById('holy-site').checked ? -4 : 0;
    regenModifier += parseInt(document.getElementById('unbelievers-value').value || 0);
    regenModifier += parseInt(document.getElementById('other-world-value').value || 0);
    regenModifier += parseInt(document.getElementById('demonic-territory-value').value || 0);

    // Zeitpunkt
    liturgieModifier += document.getElementById('holy-month').checked ? -1 : 0;
    liturgieModifier += document.getElementById('holy-day').checked ? -3 : 0;
    liturgieModifier += document.getElementById('nameless-days').checked ? 7 : 0;

    // Mirakel-Modifikatoren für Zeitpunkt (mit korrekter Rundung)
    mirakelModifier += document.getElementById('holy-month').checked ? roundHalf(-1 / 2) : 0;
    mirakelModifier += document.getElementById('holy-day').checked ? roundHalf(-3 / 2) : 0;
    mirakelModifier += document.getElementById('nameless-days').checked ? roundHalf(7 / 2) : 0;

    // Regeneration für Zeitpunkt
    regenModifier += document.getElementById('holy-month').checked ? -1 : 0;
    regenModifier += document.getElementById('holy-day').checked ? -3 : 0;
    regenModifier += document.getElementById('nameless-days').checked ? 7 : 0;

    // Umstände (nur Liturgie)
    liturgieModifier += parseInt(document.getElementById('upgraded-liturgie-value').value || 0);
    liturgieModifier += parseInt(document.getElementById('harmony-value').value || 0);
    liturgieModifier += document.getElementById('target-oathbreaker').checked ? 2 : 0;
    liturgieModifier += document.getElementById('target-blasphemer').checked ? 5 : 0;

    // Regeneration
    const regenTime = document.querySelector('input[name="regen-time"]:checked');
    regenModifier += regenTime ? parseInt(regenTime.value) : 0;

    // Ergebnisse anzeigen mit + für positive Werte
    const liturgieSign = liturgieModifier >= 0 ? '+' : '';
    const regenSign = regenModifier >= 0 ? '+' : '';

    document.getElementById("liturgie-sum").textContent = liturgieSign + liturgieModifier;
    document.getElementById("mirakel-plus-sum").textContent = mirakelModifier >= 0 ? '+' + mirakelModifier : mirakelModifier;
    document.getElementById("mirakel-plusminus-sum").textContent = (mirakelModifier + 6) >= 0 ? '+' + (mirakelModifier + 6) : (mirakelModifier + 6);
    document.getElementById("mirakel-minus-sum").textContent = (mirakelModifier + 18) >= 0 ? '+' + (mirakelModifier + 18) : (mirakelModifier + 18);
    document.getElementById("regen-sum").textContent = regenSign + regenModifier;
}



function resetEntruckung() {
    kap = 0;
    worldlyHours = 0;
    sleepHours = 0;
    document.getElementById("kap-value").textContent = kap;
    document.getElementById("worldly-hours-value").textContent = worldlyHours;
    document.getElementById("sleep-hours-value").textContent = sleepHours;
    calculateEntruckung();
}

function resetLiturgie() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    document.querySelectorAll('select').forEach(select => {
        select.value = "0";
    });
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    document.querySelectorAll('[id$="-value-container"]').forEach(container => {
        container.style.display = 'none';
    });
    calculateModifiers();
}

// Funktion zum Ein- und Ausklappen der Infotexte
function toggleEntruckungInfo() {
    const infoText = document.getElementById('entruckung-info');
    infoText.classList.toggle('show');
}

function toggleAbbauInfo() {
    const infoText = document.getElementById('abbau-info');
    infoText.classList.toggle('show');
}

function toggleErgebnisInfo() {
    const infoText = document.getElementById('ergebnis-info');
    infoText.classList.toggle('show');
}

function toggleErgebnismodInfo() {
    const infoText = document.getElementById('ergebnismod-info');
    infoText.classList.toggle('show');
}

// Aktualisiere Gottheits-Info
function updateDeityInfo() {
    const deity = document.getElementById("deity").value;
    const deityInfo = document.getElementById("deity-info");
    if (deity && deities[deity]) {
        const info = deities[deity];
        deityInfo.innerHTML =
            `<p><strong>${deity} in mir, gewähre mir...</strong></p>
            <p><strong>Mirakel+:</strong> ${info.mirakelPlus.join(", ")}</p>
            <p><strong>Mirakel-:</strong> ${info.mirakelMinus.join(", ")}</p>
            <p><strong>Feiertag(e):</strong> ${info.feiertag}</p>`;
    } else {
        deityInfo.innerHTML = "<p>Die Götter warten auf deine Wahl...</p>";
    }
}

// Funktion für Akkordeons
function setupAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');
        header.addEventListener('click', () => {
            content.classList.toggle('show');
        });
    });
}

// Funktion zum Anzeigen/Ausblenden der Dropdowns
function toggleDropdown(checkboxId, containerId) {
    const checkbox = document.getElementById(checkboxId);
    const container = document.getElementById(containerId);
    if (checkbox.checked) {
        container.style.display = 'block';
        const selectElement = container.querySelector('select');
        if (selectElement) {
            // Setze den ersten Option-Wert als Standardwert
            if (selectElement.options.length > 0) {
                selectElement.value = selectElement.options[0].value;
                calculateModifiers();
            }
        }
    } else {
        container.style.display = 'none';
        const selectElement = container.querySelector('select');
        if (selectElement) {
            selectElement.value = '';
        }
    }
}

// Funktion zum Ein- und Ausklappen der Infotexte für Liturgie wirken
function toggleLiturgieWirkenInfo() {
    const infoText = document.getElementById('liturgie-wirken-info');
    infoText.classList.toggle('show');
}

// Funktion zum Ein- und Ausklappen der Infotexte für Mirakel wirken
function toggleMirakelWirkenInfo() {
    const infoText = document.getElementById('mirakel-wirken-info');
    infoText.classList.toggle('show');
}

// Funktion zum Ein- und Ausklappen der Infotexte für KaP regenerieren
function toggleKapRegenerierenInfo() {
    const infoText = document.getElementById('kap-regenerieren-info');
    infoText.classList.toggle('show');
}



function saveSettings() {
    const checkboxes = {};
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkboxes[checkbox.id] = checkbox.checked;
    });
    const radios = {};
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        radios[radio.name] = radio.id;
    });
    const selects = {};
    document.querySelectorAll('select').forEach(select => {
        selects[select.id] = select.value;
    });
    const settings = {
        kap: kap,
        worldlyHours: worldlyHours,
        sleepHours: sleepHours,
        deity: document.getElementById("deity").value,
        checkboxes: checkboxes,
        radios: radios,
        selects: selects
    };
    localStorage.setItem('dsaSettings', JSON.stringify(settings));
    alert('Einstellungen wurden gespeichert!');
}

function loadSettings() {
    const savedSettings = localStorage.getItem('dsaSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        kap = settings.kap;
        worldlyHours = settings.worldlyHours;
        sleepHours = settings.sleepHours;
        document.getElementById("kap-value").textContent = kap;
        document.getElementById("worldly-hours-value").textContent = worldlyHours;
        document.getElementById("sleep-hours-value").textContent = sleepHours;
        document.getElementById("deity").value = settings.deity;
        updateDeityInfo();
        for (const id in settings.checkboxes) {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = settings.checkboxes[id];
            }
        }
        for (const name in settings.radios) {
            const radio = document.getElementById(settings.radios[name]);
            if (radio) {
                radio.checked = true;
            }
        }
        for (const id in settings.selects) {
            const select = document.getElementById(id);
            if (select) {
                select.value = settings.selects[id];
            }
        }
        calculateEntruckung();
        calculateModifiers();
    }
}

window.onload = function() {
    setupAccordions();
    loadSettings();
};
