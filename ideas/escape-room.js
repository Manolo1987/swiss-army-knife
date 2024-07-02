const readline = require('readline');

// Funktion zum Erstellen der Eingabeaufforderung
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function escapeRoom() {
    console.log("Willkommen zum Escape Room!");
    console.log("Du musst eine Reihe von Rätseln lösen, um zu entkommen.\n");

    console.log("Du befindest dich in einem dunklen Raum. Du siehst ein verschlossenes Schloss mit einer Zahlenkombination.");

    let codeCorrect = false;
    while (!codeCorrect) {
        let code = await askQuestion("Gib den 3-stelligen Code ein, um das Schloss zu öffnen: ");
        if (code === "123") {
            codeCorrect = true;
            console.log("Das Schloss klickt auf und öffnet sich. Du trittst in den nächsten Raum.\n");
        } else {
            console.log("Falscher Code. Versuche es erneut.\n");
        }
    }

    console.log("Im nächsten Raum siehst du einen Zettel mit einem Rätsel:");
    console.log(`
    Was hat Hände, kann aber nicht klatschen?

        1) Ein Stuhl
        2) Eine Uhr
        3) Ein Baum
    `);

    let riddleSolved = false;
    while (!riddleSolved) {
        let answer = await askQuestion("Wähle die richtige Antwort (1, 2 oder 3): ");
        if (answer === "2") {
            riddleSolved = true;
            console.log("Richtig! Eine Uhr hat Hände, kann aber nicht klatschen. Ein weiteres Schloss öffnet sich und du trittst in den letzten Raum.\n");
        } else {
            console.log("Falsch. Versuche es erneut.\n");
        }
    }

    console.log("Im letzten Raum siehst du eine verschlossene Tür mit einem Zahlenschloss und einen Hinweis:");
    console.log("Der Hinweis lautet: Die Summe der ersten drei Primzahlen.\n");

    let doorOpened = false;
    while (!doorOpened) {
        let finalCode = await askQuestion("Gib den Code ein, um die Tür zu öffnen: ");
        if (finalCode === "10") {
            doorOpened = true;
            console.log("Die Tür öffnet sich und du hast den Escape Room erfolgreich verlassen! Glückwunsch!\n");
        } else {
            console.log("Falscher Code. Versuche es erneut.\n");
        }
    }

    rl.close();
}

escapeRoom();
