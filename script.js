// Daten der Gottheiten
const deities = {
    Angrosch: {
        mirakelPlus: ["KL", "FF", "KO", "KK", "Selbstbeherrschung", "Menschenkenntnis", "Überzeugen", "Gesteinskunde", "Hüttenkunde", "Mechanik", "Rechnen", "Schätzen"],
        mirakelMinus: ["Akrobatik", "Fliegen", "Gaukeleien", "Schwimmen", "Boote Fahren", "Seefahrt"],
        feiertag: "1. Angrosch"
    },
    Aves: {
        mirakelPlus: ["IN", "CH", "GE", "KO", "Ausweichen", "Gefahreninstinkt", "Athletik", "Klettern", "Sinnenschärfe", "Gassenwissen", "Menschenkenntnis", "Überreden", "Überzeugen", "Orientierung", "Wettervorhersage", "Wildnisleben", "Geographie", "Sprachenkunde", "Handel", "Instrumentenbauer", "Kartographie"],
        mirakelMinus: ["Alle bewaffneten Kampftechniken", "Kriegskunst"],
        feiertag: "2. Aves"
    },
    Boron: {
        mirakelPlus: ["MU", "KL", "IN", "CH", "Schleichen", "Selbstbeherrschung", "Lehren", "Menschenkenntnis", "Überzeugen", "Götter/Kulte", "Pflanzenkunde", "Alchimie", "Heilkunde Seele", "Gabe Prophezeihen"],
        mirakelMinus: ["Gaukeleien", "Singen", "Stimmen imitieren", "Tanzen", "Zechen", "Betören", "Schauspielerei", "Glücksspiel", "Instrumentenbauer", "Musizieren"],
        feiertag: "3. Boron"
    },
    Efferd: {
        mirakelPlus: ["IN", "GE", "KO", "KK", "Schwimmen", "Sinnenschärfe", "Überzeugen", "Fesseln/Entfesseln", "Fischen/Angeln", "Orientierung", "Wettervorhersage", "Boote Fahren", "Seefahrt", "Zimmermann"],
        mirakelMinus: ["Alle Tätigkeiten, die irgendwie mit Feuer zu tun haben", "Alchimie", "Glaskunst (Glasbläserei)", "Grobschmied", "Hüttenkunde", "Kochen", "Metallguss"],
        feiertag: "4. Efferd"
    },
    Firun: {
        mirakelPlus: ["MU", "GE", "KO", "KK", "Gefahreninstinkt", "Körperbeherrschung", "Schleichen", "Selbstbeherrschung", "Sich Verstecken", "Sinnenschärfe", "Fährtensuchen", "Orientierung", "Wettervorhersage", "Wildnisleben"],
        mirakelMinus: ["Gaukeleien", "Singen", "Tanzen", "Alle Gesellschaftlichen Talente außer Lehren", "Falschspiel", "Musizieren"],
        feiertag: "5. Firun"
    },
    Hesinde: {
        mirakelPlus: ["KL", "IN", "CH", "MR", "Etikette", "Lehren", "Menschenkenntnis", "Überzeugen", "Geschichtswissen", "Götter/Kulte", "Magiekunde", "Pflanzenkunde", "Sternkunde", "Tierkunde", "Alchimie"],
        mirakelMinus: ["Zechen", "Überreden (Lügen)"],
        feiertag: "6. Hesinde"
    },
    Ifirn: {
        mirakelPlus: ["MU", "IN", "CH", "GE", "Gefahreninstinkt"],
        mirakelMinus: [],
        feiertag: "7. Ifirn"
    },
    Ingerimm: {
        mirakelPlus: ["MU", "FF", "KO", "KK", "Selbstbeherrschung", "Lehren", "Überzeugen", "Gesteinskunde", "Hüttenkunde", "Mechanik", "Rechnen", "Schätzen", "Bergbau", "Steinmetz"],
        mirakelMinus: ["Fischen/Angeln", "Gaukeleien", "Schwimmen", "Seefahrt"],
        feiertag: "8. Ingerimm"
    },
    Kor: {
        mirakelPlus: ["MU", "GE", "KO", "KK", "Ausweichen", "Athletik", "Körperbeherrschung", "Reiten", "Selbstbeherrschung", "Sinnenschärfe", "Menschenkenntnis", "Überzeugen", "Kriegskunst", "Fahrzeug Lenken (Streitwagen)", "Infanteriewaffen"],
        mirakelMinus: ["Heilkunde-Talente", "Gefahreninstinkt"],
        feiertag: "9. Kor"
    },
    Nandus: {
        mirakelPlus: ["KL", "IN", "CH", "FF", "Lehren", "Menschenkenntnis", "Überreden", "Überzeugen", "Kryptographie", "Philosophie", "Rechnen", "Sternkunde"],
        mirakelMinus: [],
        feiertag: "10. Nandus"
    },
    Peraine: {
        mirakelPlus: ["KL", "IN", "CH", "FF", "Ausweichen", "Lehren", "Menschenkenntnis", "Überzeugen", "Pflanzenkunde", "Tierkunde", "Ackerbau", "Hauswirtschaft", "Heilkunde Krankheiten", "Heilkunde Wunden", "Kochen", "Viehzucht"],
        mirakelMinus: ["Alle bewaffneten Kampftechniken", "Betören", "Fallenstellen", "Kriegskunst", "Falschspiel", "Schlösser Knacken"],
        feiertag: "11. Peraine"
    },
    Phex: {
        mirakelPlus: ["MU", "IN", "FF", "GE", "Körperbeherrschung", "Schleichen", "Sich Verstecken", "Gassenwissen", "Menschenkenntnis", "Überreden", "Mechanik", "Rechtskunde", "Sternkunde", "Handel"],
        mirakelMinus: [],
        feiertag: "12. Phex"
    },
    Praios: {
        mirakelPlus: ["MU", "IN", "CH", "MR", "Selbstbeherrschung", "Etikette", "Lehren", "Menschenkenntnis", "Überzeugen", "Götter/Kulte", "Rechtskunde", "Staatskunst"],
        mirakelMinus: ["Fliegen", "Gaukeleien", "Schleichen", "Sich Verstecken", "Stimmen Imitieren", "Taschendiebstahl", "Überreden", "Sich verkleiden", "Falschspiel", "Schlösser Knacken"],
        feiertag: "13. Praios"
    },
    Rahja: {
        mirakelPlus: ["MU", "IN", "CH", "GE", "Ausweichen", "Körperbeherrschung", "Reiten", "Sinneschärfe", "Zechen", "Betören", "Lehren", "Menschenkenntnis", "Überreden", "Überzeugen"],
        mirakelMinus: ["Alle bewaffneten Kampftechniken", "Kriegskunst", "Grobes und Unschönes"],
        feiertag: "14. Rahja"
    },
    Rondra: {
        mirakelPlus: ["MU", "GE", "KO", "KK", "Athletik", "Körperbeherrschung", "Reiten", "Selbstbeherrschung", "Kriegskunst"],
        mirakelMinus: ["Alle Fernkampftechniken", "Schleichen", "Sich Verstecken", "Sich verkleiden", "Überreden", "Bogenbau", "Falschspiel"],
        feiertag: "15. Rondra"
    },
    Swafnir: {
        mirakelPlus: ["MU", "GE", "KO", "KK", "Körperbeherrschung", "Selbstbeherrschung", "Schwimmen", "Zechen", "Lehren", "Orientierung", "Wettervorhersage", "Seefahrt"],
        mirakelMinus: ["Alle Proben, die mit Lügen, Schmeichelei, Überreden zu tun haben", "Brettspiel", "Etikette (nicht-thorwalsche)", "Kryptographie", "Magiekunde", "Philosophie"],
        feiertag: "16. Swafnir"
    },
    Travia: {
        mirakelPlus: ["MU", "IN", "CH", "FF", "Selbstbeherrschung", "Sinnenschärfe", "Zechen", "Lehren", "Menschenkenntnis", "Überzeugen", "Sagen/Legenden", "Hauswirtschaft", "Heilkunde Krankheit", "Heilkunde Seele", "Kochen", "Viehzucht"],
        mirakelMinus: ["Alle Fernkampftalente", "Taschendiebstahl", "Betören", "Bogenbau", "Falschspiel"],
        feiertag: "17. Travia"
    },
    Tsa: {
        mirakelPlus: ["IN", "CH", "FF", "GE", "Sich Verkleiden", "Singen", "Tanzen", "Menschenkenntnis", "Überreden", "Überzeugen", "Philosophie", "Sagen/Legenden"],
        mirakelMinus: ["Alle bewaffneten Kampftechniken", "Fallenstellen", "Fischen/Angeln", "Anatomie", "Kriegskunst", "Alle Waffen herstellenden Handwerkstalente", "Fleischer", "Gerber/Kürschner"],
        feiertag: "18. Tsa"
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
    let modifier = 0;

    // Modifikatoren aus Checkboxen summieren
    if (document.getElementById('emergency').checked) modifier -= 3;
    if (document.getElementById('divine-mission').checked) modifier -= 7;
    if (document.getElementById('selfish-motives').checked) modifier += 7;
    if (document.getElementById('magical-influence').checked) modifier += 12;
    if (document.getElementById('new-convert').checked) modifier += 3;
    if (document.getElementById('oathbreaker').checked) modifier += 5;
    if (document.getElementById('consecrated-ground').checked) modifier -= 1;
    if (document.getElementById('shrine').checked) modifier -= 2;
    if (document.getElementById('temple').checked) modifier -= 3;
    if (document.getElementById('holy-site').checked) modifier -= 4;
    if (document.getElementById('unbelievers').checked) modifier += 3;
    if (document.getElementById('other-world').checked) modifier += 7;
    if (document.getElementById('demonic-territory').checked) modifier += 7;
    if (document.getElementById('holy-month').checked) modifier -= 2;
    if (document.getElementById('nameless-days').checked) modifier += 7;

    // Summe der Modifikationen anzeigen
    document.getElementById("modifiers-sum").textContent = modifier;

    // Berechnung der Entrückung
    const entruckungPoints = Math.max(0, kap - worldlyHours - sleepHours);
    document.getElementById("entruckung-points").textContent = entruckungPoints;

    // Bonus/Malus auf Mirakel-Talente erst ab 5 KaP
    let mirakelBonus = 0;
    if (entruckungPoints >= 5) {
        mirakelBonus = Math.min(7, Math.round(entruckungPoints / 10));
    }
    document.getElementById("mirakel-bonus").textContent = mirakelBonus;

    const mirakelMalus = mirakelBonus * 2;
    document.getElementById("mirakel-malus").textContent = mirakelMalus;

    document.getElementById("other-malus").textContent = mirakelBonus;
    document.getElementById("asp-regen").textContent = -mirakelBonus;

    // Spezialeffekte
    const specialEffects = document.getElementById("special-effects");
    specialEffects.innerHTML = "";
    if (entruckungPoints >= 50) {
        specialEffects.innerHTML = "<p><strong>Streiter der Götter:</strong> MU +2, CH +2, Überzeugen +5, Gläubige MU +2, Feinde MU -4</p>";
    } else if (entruckungPoints >= 40) {
        specialEffects.innerHTML = "<p><strong>Sprung des Glaubens:</strong> Übermenschliches möglich</p>";
    } else if (entruckungPoints >= 30) {
        specialEffects.innerHTML = "<p><strong>Göttlicher Fingerzeig:</strong> Visionen</p>";
    } else if (entruckungPoints >= 20) {
        specialEffects.innerHTML = "<p><strong>Epiphanie:</strong> Plötzliche Erkenntnisse</p>";
    }
}

// Aktualisiere Gottheits-Info
function updateDeityInfo() {
    const deity = document.getElementById("deity").value;
    const deityInfo = document.getElementById("deity-info");

    if (deity && deities[deity]) {
        const info = deities[deity];
        deityInfo.innerHTML = `
            <p><strong>Mirakel des ${deity}:</strong></p>
            <p><strong>Mirakel+:</strong> ${info.mirakelPlus.join(", ")}</p>
            <p><strong>Mirakel–:</strong> ${info.mirakelMinus.join(", ")}</p>
            <p><strong>Feiertag:</strong> ${info.feiertag}</p>
        `;
    } else {
        deityInfo.innerHTML = "";
    }
}

// Funktion zum Ein- und Ausklappen des Infotexts
function toggleInfo() {
    const infoText = document.getElementById('entruckung-info');
    infoText.classList.toggle('show');
}
