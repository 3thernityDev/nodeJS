// Import de express
import express from "express";
// Fonction pour le serveur express
const app = express();
// Variable pour le port du serveur
const port = 3000;

// Fonction pour la page d'accueil du site (req = request (requête serveur), res = response (réponse serveur))
app.get("/", (req, res) => {
    // Affichage d'un message sur la page
    res.send("Serveur Express :D");
});

// Definition du port du serveur
app.listen(port, () => {
    console.log(`Serveur fonctionnel. Port: ${port}`);
});

// Fonction pour l'affichage dans une page de test
app.get("/test", (req, res) => {
    // Affichage d'un message sur la page
    res.send("Page test");
});
