// Tableau contenant les animaux
// Variable recevant le résultat du lancé des dés jaunes : 2 jaunes
// Variable recevant le résultat du lancé des dés animaux: 5 blancs, 2 rouges, 1 vert

const animals = ["Antilope","Gnou","Rhinocéros"]
const dicesYellow = [0,0]
const dicesAnimals = {
    white: [0,0,0,0,0],
    red: [0,0],
    green: [0]
}

// Initialisation aléatoire des dés jaunes : nombre compris entre 1 et 3 inclus
// Calcul du nombre d'animaux (d'une espèce) à chercher

for(let i in dicesYellow) {
    dicesYellow[i] = getRandomIntInclusive(1,3)
}

let nbAnimalsToSearch
if(dicesYellow[0]===dicesYellow[1]) {
    nbAnimalsToSearch = dicesYellow[0]
}
else {
    nbAnimalsToSearch = 6 - (dicesYellow[0] + dicesYellow[1])
}

// Initialisation aléatoire des dés animaux : nombre compris entre 0 et 2 inclus
// Calcul de l'animal ciblé par les braconniers

for(let couleur in dicesAnimals) {
    for(let i in dicesAnimals[couleur]) {
        dicesAnimals[couleur][i] = getRandomIntInclusive(0,2)
    }
}

let animalTarget
if(dicesAnimals.red[0]===dicesAnimals.red[1]) {
    animalTarget = dicesAnimals.red[0]
}
else {
    animalTarget = 3 - (dicesAnimals.red[0] + dicesAnimals.red[1])
}






// Affichage  du résultat du lancé de dés :

let msg = "Résultat du lancé de dés : \n\n"
msg += "Balles : " + afficheBulets(dicesYellow) + " (Nombre d'animaux à chercher : " + nbAnimalsToSearch +")\n"
msg += "Animaux : " + afficheAnimaux(dicesAnimals.white) + "\n"
msg += "Braconniers : " + afficheAnimaux(dicesAnimals.red) + "\n"
msg += "Garde chasse : " + afficheAnimaux(dicesAnimals.green) + "\n\n"
msg += "Traitement des données :\n\n"
msg += "Animal ciblé par les braconniers : " + animals[animalTarget]

console.log(msg)

// Outils

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min
}

function afficheBulets(tab) {
    let res = ""
    let separateur = ""
    for(let i in tab) {
        res += separateur + tab[i]
        separateur = " - "
    }
    return res
}

function afficheAnimaux(tab) {
    let res = ""
    let separateur = ""
    for(let i in tab) {
        res += separateur + animals[tab[i]]
        separateur = " - "
    }
    return res
}