// Importatation de files System
import * as fs from 'fs'

// Définition de la fonction
export function getNotes () {
    try {
        // Lecture du fichier note.txt grâce à fileSystem
        const notes = fs.readFileSync('note.txt', 'utf8');

        // Division du contenue en lignes pour obtenir un résultat sous forme de tableau
        const noteArray = notes.split('\n').filter(Boolean);

        // Renvoie du resultat
        return noteArray;
    } catch (error) {
        // Si une erreur ce produit alors on envoie un message d'erreur
        console.error("Une erreur s'est produite")
        return [];
    }
}

// Essaie des function flecher

let getNotesFlecher = () => {
    try {
        // Lecture du fichier note.txt grâce à fileSystem
        const notes = fs.readFileSync('note.txt', 'utf8');

        // Division du contenue en lignes pour obtenir un résultat sous forme de tableau
        const noteArray = notes.split('\n').filter(Boolean);

        // Renvoie du resultat
        return noteArray;
    } catch (error) {
        // Si une erreur ce produit alors on envoie un message d'erreur
        console.error("Une erreur s'est produite")
        return [];
    }
}