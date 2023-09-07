// -----------------------------//
//              A              //
// ---------------------------//

// Lecture - écriture

// Faire apparaître "Hello NodeJS" dans la console
// Utilisation de node app.js

console.log("Hello NodeJS");

// Création du fichier note.txt
// Utilisation de files system

// Importation du module 'fs' (file system) pour la gestion des fichiers
import * as fs from "fs";

// Création du fichier note.txt
fs.writeFileSync("note.txt", "Fichier créé grâce à Node.js");

// Ajout de notes supplémentaires avec des sauts de ligne
fs.appendFileSync("note.txt", "\nAjout de note numéro 1");
fs.appendFileSync("note.txt", "\nAjout de note numéro 2");

// Ajout de plusieurs notes en une seule fois
fs.appendFileSync(
    "note.txt",
    "\nTest ajout de plusieurs notes\nNote 1\nNote 2"
);

// -----------------------------//
//              B              //
// ---------------------------//

// Inclusion de plusieurs fichiers
// Importation de la variable name

import * as name from "./utils.js";
console.log(name.name);

// Nous récupérons par défaut un tableau au format JSON. Il suffit donc d'indiquer une option, en l'occurrence ici "name", pour afficher le prénom souhaité.

// Function getNotes

// Importation des functions
import * as getNote from "./note.js";

// Utilisation de la fonction getNotes
const notes = getNote.getNotes();

// Retour de la fonction
console.log("Notes:", notes);

// Function getNotesFlecher

getNote.getNotesFlecher;
console.log("Flecher:", notes);

// -----------------------------//
//              C              //
// ---------------------------//

// NPM

// On import validator
import validator from "validator";


// On définis l'email
const email = "3thernitydev@gamingandchill.fr";

// On verifie l'addresse mail
if (validator.isEmail(email)) {
    console.log("Adresse email valide !");
} else {
    console.log("Adresse email invalide !");
}




// Chalk écriture en vert dans la console
// On import Chalk
import chalk from "chalk";

// Utilisation de chalk.<couleur> pour afficher un message dans la console de la couleurs de sont choix

console.log(chalk.green("Succes"));

// Rajout du gras
// Rajout du .bold pour l'affichage en gras

console.log(chalk.green.bold("Succes"));

// Nodemon test du live reload

// On import nodemon
import nodemon from "nodemon";
