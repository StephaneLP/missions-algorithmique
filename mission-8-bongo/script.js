// Tableau contenant les animaux et variable recevant le résultat du lancé de tous les dés

const animaux = ["Antilope","Gnou","Rhinocéros"]
const lanceDeDes = {
    désJaunes: [0,0],
    désBlancs: ["","","","",""],
    désRouges: ["",""],
    déVert: ""
}

// Initialisation de la variable lanceDes

for(let i=0; i<2; i++) {
    lanceDeDes.désJaunes[i] = getRandomIntInclusive(1,3)
}
for(let i=0; i<5; i++) {
    lanceDeDes.désBlancs[i] = animaux[getRandomIntInclusive(0,2)]
}
for(let i=0; i<2; i++) {
    lanceDeDes.désRouges[i] = animaux[getRandomIntInclusive(0,2)]
}
lanceDeDes.déVert = animaux[getRandomIntInclusive(0,2)]

// Calcul du nombre d'animaux à chercher

let nbAnimauxAChercher
if(lanceDeDes.désJaunes[0]===lanceDeDes.désJaunes[1]) {
    nbAnimauxAChercher = lanceDeDes.désJaunes[0]
}
else {
    nbAnimauxAChercher = 6-(lanceDeDes.désJaunes[0]+lanceDeDes.désJaunes[1])
}

// Affichage  du résultat du lancé de dés :

console.log("Balles : ", afficheTableau(lanceDeDes.désJaunes), "(Nombre d'animaux à chercher : ", nbAnimauxAChercher,")")
console.log("Animaux : ", afficheTableau(lanceDeDes.désBlancs))
console.log("Braconniers : ", afficheTableau(lanceDeDes.désRouges))
console.log("Garde chasse : ", lanceDeDes.déVert)

// Outils

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min
}

function afficheTableau(tab) {
    let res = ""
    let separateur = ""
    for(let i in tab) {
        res += separateur + tab[i]
        separateur = " - "
    }
    return res
}