// npm install --save readline-sync 
// war die einzige Möglichkeit rls zum laufen zu bringen, vll wegen MACOS

import readlineSync from 'readline-sync';

// Definiere die Optionen
const options = ['Passwortgenerator', 'Wortzähler', 'Münzwurf'];

// Zeige die Optionen an und lass den Benutzer eine Auswahl treffen
const index = readlineSync.keyInSelect(options, 'Bitte wählen Sie eine Option mit den Pfeiltasten und drücken Sie Enter:');

// Überprüfe die Auswahl des Benutzers
switch(index) {
    case 0:
        console.log('\nPasswortgenerator gewählt.');
        const length = readlineSync.question("\nWie lang soll das Passwort sein? ");
        function passwordGenerator() {
            let buchstaben = 'abcdefghijklmnopqrstuvwxyz';
			let sonderzeichen = '|<>#+*~-_!?§$%&/()=@';
			let nummern = '0123456789';
            let everything = [...buchstaben,...buchstaben.toUpperCase(), ...sonderzeichen, ...nummern]
            let password = "";
            for (let i = 0; i < length; i++) {
                // password += everything[Math.random(everything.length+1)]
                password += everything[Math.floor(Math.random() * everything.length)];
            }
            return password;
        }
        console.log(`\nHier ist dein sicheres Passwort:\n`,passwordGenerator(),"\n");
        break;
    case 1:
        console.log('Wortzähler gewählt.');
        console.log((Math.random().toString(36).slice(2, 10)));
        break;
    case 2:
        console.log('Münzwurf gewählt.');
        // Führe hier den Code für Option 3 aus
        break;
    case -1:
        console.log('Abbruch durch den Benutzer.');
        // Führe hier den Code für Abbruch aus
        break;
    default:
        console.log('Ungültige Auswahl.');
        // Führe hier den Code für eine ungültige Auswahl aus
        break;
}

