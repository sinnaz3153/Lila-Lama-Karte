const express = require('express');
const app = express();
const path = require('path');

// Middleware zum Parsen von JSON-Daten
app.use(express.json());

// Statische Dateien bereitstellen (für HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route zum Loggen der Kriegsdaten
app.post('/log-war-data', (req, res) => {
    const { land1, land2 } = req.body;

    // Logging der Daten in der Konsole
    console.log('Land 1:', land1);
    console.log('Land 2:', land2);

    // Generierung des Kriegs-Prompts (für den Textbereich)
    const prompt = generateBattleText(land1, land2);

    // Rückgabe des generierten Prompts an den Client
    res.json({ prompt });
});

// Funktion zur Generierung des Battle-Prompts
function generateBattleText(land1, land2) {
    return `
        **Kriegsbeobachter Hinweis**: Sie sind der Kriegsbeobachter. Basierend auf der militärischen Stärke und den Strategien der Länder entscheidet ChatGPT, wer den Krieg gewinnt.

        **Land 1**: ${land1.name}
        - Boden-Militär: ${land1.ground}
        - Wasser-Militär: ${land1.water}
        - Luft-Militär: ${land1.air}
        - Bomben: ${land1.bombs}
        - Kriegsstrategie: ${land1.strategy}

        **Land 2**: ${land2.name}
        - Boden-Militär: ${land2.ground}
        - Wasser-Militär: ${land2.water}
        - Luft-Militär: ${land2.air}
        - Bomben: ${land2.bombs}
        - Kriegsstrategie: ${land2.strategy}

        Wer wird den Krieg gewinnen, basierend auf militärischer Stärke und Strategie?`;
}

// Server starten
const PORT = 25505;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
