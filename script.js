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
        feiertag: "<br>1.-7. Rahja – Fest der Freuden"
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
        mirakelPlus: ["MU", "IN", "CH", "FF", "Selbstbeherrschung", "Sinneschärfe", "Zechen", "Lehren", "Menschenkenntnis", "Überzeugen", "Sagen/Legenden", "Hauswirtschaft", "Heilkunde Krankheit", "Heilkunde Seele", "Kochen", "Viehzucht"],
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
        specialEffects.innerHTML = `<p><strong>Streiter der Goetter:</strong> Der Geweihte ist nun ein lebendiges Zeichen goettlicher Macht - sein Wesen strahlt mit einer solchen Intensitaet, dass er Verbündete beflügelt und Feinde erzittern laesst. Seine blossse Anwesenheit entfacht Mut in den Herzen der Gläubigen, waehrend Daemonen und Ketzer von urploetzlicher Furcht erfasst werden. Doch diese goettliche Glut zieht auch die Blicke der Finsternis an: In den Schattenreichen wird er zum unuebersehbaren Leuchtfeuer, das die Maechte der Unterwelt herausfordert - ein lebender Sturm, der die Grenzen zwischen Himmel und Hoelle beruehrt. (Aenderung der Werte: MU +2, CH +2, Ueberzeugen erleichtert um 5 Punkte oder MU fuer Verbündete in Naehe +2, Ketzer, Frevler MU -4, RS+2 gegen daemonische Angriffe)</p>`;
    } else if (entruckungPoints >= 40) {
        specialEffects.innerHTML = `<p><strong>Sprung des Glaubens:</strong> Mit unerschuetterlichem Vertrauen in seinen Gott vollbringt der Geweihte das Unmoegliche - getrieben von der Gewissheit, dass die goettliche Macht ihn traegt und das jeder Logik trotzt: Hier wird Glaube zur uebernatuerlichen Tat. Ein letzter, alles riskierender Einsatz der Karmaenergie, selbst wenn diese erschöpft sein mag, macht das Undenkbare moeglich. (Keine Auswirkung auf Werte des Helden)</p>`;
    } else if (entruckungPoints >= 30) {
        specialEffects.innerHTML = `<p><strong>Goettlicher Fingerzeig:</strong> Goettliche Hinweise gehen ueber fluechtige Erkenntnisse hinaus - der Geweihte empfaengt raetselhafte Visionen, Traeume oder Botschaften, die von kommenden Ereignissen, seinem Schicksal oder dringenden Warnungen kuenden. Die Goetter sprechen nicht klar, doch ihre Zeichen sind unuebersehbar. (Keine Auswirkung auf Werte des Helden)</p>`;
    } else if (entruckungPoints >= 20) {
        specialEffects.innerHTML = `<p><strong>Epiphanie:</strong> Im Zustand hoechster Entrueckung beruehrt der Geist des Geweihten goettliche Sphären und erhascht fluechtige Einblicke in verborgene Weisheiten. Zwar bleibt das Goettliche unbegreiflich, doch in diesem Moment koennen ploetzliche Erkenntnisse oder intuitive Loesungen aufblitzen. (Keine Auswirkung auf Werte des Helden)</p>`;
    }
}

function calculateModifiers() {
    let liturgieModifier = 0;
    let mirakelModifier = 0;
    let regenModifier = 0;

    // Motivation
    liturgieModifier += document.getElementById('emergency').checked ? -3 : 0;
    liturgieModifier += parseInt(document.getElementById('divine-mission-value').value);
    liturgieModifier += parseInt(document.getElementById('selfish-motives-value').value);
    liturgieModifier += document.getElementById('magical-influence').checked ? 12 : 0;
    liturgieModifier += document.getElementById('new-convert').checked ? 3 : 0;
    liturgieModifier += document.getElementById('oathbreaker').checked ? 3 : 0;
    liturgieModifier += document.getElementById('blasphemer').checked ? 7 : 0;

    mirakelModifier += document.getElementById('emergency').checked ? Math.round(-3 / 2) : 0;
    mirakelModifier += Math.round(parseInt(document.getElementById('divine-mission-value').value) / 2);
    mirakelModifier += Math.round(parseInt(document.getElementById('selfish-motives-value').value) / 2);
    mirakelModifier += document.getElementById('magical-influence').checked ? Math.round(12 / 2) : 0;
    mirakelModifier += document.getElementById('new-convert').checked ? Math.round(3 / 2) : 0;
    mirakelModifier += document.getElementById('oathbreaker').checked ? Math.round(3 / 2) : 0;
    mirakelModifier += document.getElementById('blasphemer').checked ? Math.round(7 / 2) : 0;

    // Ort
    liturgieModifier += document.getElementById('consecrated-ground').checked ? -1 : 0;
    liturgieModifier += document.getElementById('shrine').checked ? -2 : 0;
    liturgieModifier += document.getElementById('temple').checked ? -3 : 0;
    liturgieModifier += document.getElementById('holy-site').checked ? -4 : 0;
    liturgieModifier += parseInt(document.getElementById('unbelievers-value').value);
    liturgieModifier += parseInt(document.getElementById('other-world-value').value);
    liturgieModifier += parseInt(document.getElementById('demonic-territory-value').value);

    mirakelModifier += document.getElementById('consecrated-ground').checked ? Math.round(-1 / 2) : 0;
    mirakelModifier += document.getElementById('shrine').checked ? Math.round(-2 / 2) : 0;
    mirakelModifier += document.getElementById('temple').checked ? Math.round(-3 / 2) : 0;
    mirakelModifier += document.getElementById('holy-site').checked ? Math.round(-4 / 2) : 0;
    mirakelModifier += Math.round(parseInt(document.getElementById('unbelievers-value').value) / 2);
    mirakelModifier += Math.round(parseInt(document.getElementById('other-world-value').value) / 2);
    mirakelModifier += Math.round(parseInt(document.getElementById('demonic-territory-value').value) / 2);

    regenModifier += document.getElementById('consecrated-ground').checked ? -1 : 0;
    regenModifier += document.getElementById('shrine').checked ? -2 : 0;
    regenModifier += document.getElementById('temple').checked ? -3 : 0;
    regenModifier += document.getElementById('holy-site').checked ? -4 : 0;
    regenModifier += parseInt(document.getElementById('unbelievers-value').value);
    regenModifier += parseInt(document.getElementById('other-world-value').value);
    regenModifier += parseInt(document.getElementById('demonic-territory-value').value);

    // Zeitpunkt
    liturgieModifier += document.getElementById('holy-month').checked ? -1 : 0;
    liturgieModifier += document.getElementById('holy-day').checked ? -3 : 0;
    liturgieModifier += document.getElementById('nameless-days').checked ? 7 : 0;

    mirakelModifier += document.getElementById('holy-month').checked ? Math.round(-1 / 2) : 0;
    mirakelModifier += document.getElementById('holy-day').checked ? Math.round(-3 / 2) : 0;
    mirakelModifier += document.getElementById('nameless-days').checked ? Math.round(7 / 2) : 0;

    regenModifier += document.getElementById('holy-month').checked ? -1 : 0;
    regenModifier += document.getElementById('holy-day').checked ? -3 : 0;
    regenModifier += document.getElementById('nameless-days').checked ? 7 : 0;

    // Umstände (nur Liturgie)
    liturgieModifier += parseInt(document.getElementById('upgraded-liturgie-value').value);
    liturgieModifier += parseInt(document.getElementById('harmony-value').value);
    liturgieModifier += document.getElementById('target-oathbreaker').checked ? 2 : 0;
    liturgieModifier += document.getElementById('target-blasphemer').checked ? 5 : 0;

    // Regeneration
    const regenTime = document.querySelector('input[name="regen-time"]:checked');
    regenModifier += regenTime ? parseInt(regenTime.value) : 0;

    // Ergebnisse anzeigen
    document.getElementById("liturgie-sum").textContent = liturgieModifier;
    document.getElementById("mirakel-sum").textContent = mirakelModifier;
    document.getElementById("regen-sum").textContent = regenModifier;
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
    // Alle Checkboxen zurücksetzen
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    // Alle Select-Elemente zurücksetzen
    document.querySelectorAll('select').forEach(select => {
        select.value = "0";
    });
    // Radio-Buttons zurücksetzen
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    // Dropdown-Container ausblenden
    document.querySelectorAll('[id$="-value-container"]').forEach(container => {
        container.style.display = 'none';
    });
    calculateModifiers();
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
        deityInfo.innerHTML = "<p>Die Götter warten auf deine Wahl ...</p>";
    }
}


// Funktion zum Ein- und Ausklappen des Infotexts
function toggleInfo() {
    const infoText = document.getElementById('entruckung-info');
    infoText.classList.toggle('show');
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
    } else {
        container.style.display = 'none';
        // Setze den Wert des Dropdowns zurück, wenn die Checkbox deaktiviert wird
        const selectElement = container.querySelector('select');
        if (selectElement) {
            selectElement.value = '0';
            calculateModifiers();
        }
    }
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



window.onload = function() {
    setupAccordions();
    loadSettings();
};

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

        // Checkboxen wiederherstellen
        for (const id in settings.checkboxes) {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = settings.checkboxes[id];
            }
        }

        // Radio-Buttons wiederherstellen
        for (const name in settings.radios) {
            const radio = document.getElementById(settings.radios[name]);
            if (radio) {
                radio.checked = true;
            }
        }

        // Select-Elemente wiederherstellen
        for (const id in settings.selects) {
            const select = document.getElementById(id);
            if (select) {
                select.value = settings.selects[id];
            }
        }

        // Berechnungen durchführen
        calculateEntruckung();
        calculateModifiers();
    }
}


