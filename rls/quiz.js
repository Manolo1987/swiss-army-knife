#!/usr/bin/env node
// npm install --save readline-sync 
// war die einzige Möglichkeit rls zum laufen zu bringen, vll wegen MACOS


import readlineSync from 'readline-sync';
import chalk from 'chalk';

// Optionen
// const options = ['Passwortgenerator', 'Wortzähler', 'Münzwurf'];
const options = [
    chalk.green.inverse('PASSWORTGENERATOR'),
    chalk.blue.inverse('WORTZÄHLER'),
    chalk.yellowBright.inverse('MÜNZWURF'),
  ];

// anzeige der Optionen + Auswahl
const index = readlineSync.keyInSelect(options, 'Bitte wähle eine Option indem du eine Zahl eingibst und Enter drückst');

switch(index) {
    case 0:
        console.log(chalk.green.inverse('\nPasswortgenerator gewählt:'));
       
        const length = readlineSync.question("\nWie lang soll das Passwort sein? ");
        function passwordGenerator() {
            let buchstaben = 'abcdefghijklmnopqrstuvwxyz';
			let sonderzeichen = '|<>#+*~-_!?§$%&/()=@';
			let nummern = '0123456789';
            let everything = [...buchstaben,...buchstaben.toUpperCase(), ...sonderzeichen, ...nummern]
            let password = "";
            for (let i = 0; i < length; i++) {
                password += everything[Math.floor(Math.random() * everything.length)];
            }
            return password;
        }
        console.log(`\nHier ist dein sicheres Passwort:\n`);
        console.log(chalk.green.inverse(passwordGenerator(),`\n`));
        break;
    case 1:
        console.log(chalk.blue.inverse('\nWortzähler gewählt:'));
        const textLength = readlineSync.question("\nBitte paste deinen Text hier hinein und drücke enter:\n");
        function wortzähler() {
            return textLength.split(" ").length;
        }
        console.log(`\nDie Länge deines Texts beträgt`, chalk.blue.inverse(wortzähler()), `Worte.\n\n`);
        break;
    case 2:
        console.log(chalk.yellowBright.inverse('\nMünzwurf gewählt:\n'));
        const nullKommaFünf = 0.5;
        function münzwurf() {
            const ergebnis = Math.random() < nullKommaFünf ? 'KOPF' : 'ZAHL';
            console.log("Die Münze ist gefallen -->", chalk.cyan.inverse(ergebnis), "\n");
          }
          setTimeout(münzwurf, 3500); // timer für 3,5sec oder 3500ms
          
          console.log(chalk.yellowBright('DIE MÜNZE WIRD GEWORFEN!\n')); 
          // das wird direkt ausgeführt
          
        break;
    case -1:
        console.log('\nAbbruch durch den Benutzer.');
        break;
    default:
        console.log('\nUngültige Auswahl.');
        break;
}


