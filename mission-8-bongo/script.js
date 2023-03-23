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

for(let i in dicesYellow) {
    dicesYellow[i] = getRandomIntInclusive(1,3)
}

// Calcul du nombre d'animaux (d'une espèce) à chercher

let nbAnimalsToSearch
if(dicesYellow[0]===dicesYellow[1]) {
    nbAnimalsToSearch = dicesYellow[0]
}
else {
    nbAnimalsToSearch = 6 - (dicesYellow[0] + dicesYellow[1])
}

// Initialisation aléatoire des dés animaux : nombre compris entre 0 et 2 inclus


for(let couleur in dicesAnimals) {
    for(let i in dicesAnimals[couleur]) {
        dicesAnimals[couleur][i] = getRandomIntInclusive(0,2)
    }
}

// Calcul de l'animal ciblé par les braconniers

let animalTarget
if(dicesAnimals.red[0]===dicesAnimals.red[1]) {
    animalTarget = dicesAnimals.red[0]
}
else {
    animalTarget = 3 - (dicesAnimals.red[0] + dicesAnimals.red[1])
}






// Affichage du résultat du lancé des dés, de leur traitement et de la solution :

let msg = "Algorithme : \n\n"
msg += "Balles : " + afficheBulets(dicesYellow) +"\n"
msg += " -> Nombre d'animaux à chercher : " + nbAnimalsToSearch +"\n\n"
msg += "Liste initiale des animaux :\n" + afficheAnimaux(dicesAnimals.white) + "\n\n"
msg += "Braconniers : " + afficheAnimaux(dicesAnimals.red) + "\n"
msg += " -> Animal ciblé par les braconniers : " + animals[animalTarget] + "\n\n"
msg += "Garde chasse : " + afficheAnimaux(dicesAnimals.green) + "\n"

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