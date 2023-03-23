// Tableau contenant les animaux et les variables recevant le résultat du lancé des dés

const animaux = ["Antilope","Gnou","Rhinocéros"]
const desJaunes = [0,0]
const desAnimaux = {
    blancs: ["","","","",""],
    rouges: ["",""],
    vert: ""
}

// Initialisation des dés jaunes et calcul du nombre d'animaux (d'une espèce) à chercher

for(let i=0; i<2; i++) desJaunes[i] = getRandomIntInclusive(1,3)
let nbAnimauxAChercher = (desJaunes[0]===desJaunes[1] ? desJaunes[0] : 6-(desJaunes[0]+desJaunes[1]))

// Initialisation des dés animaux

for(let couleur in desAnimaux) {
console.log(desAnimaux[couleur])
    // for(let i in desAnimaux[couleur]){
    //     console.log(i)
    //     desAnimaux.couleur[i] = animaux[getRandomIntInclusive(0,2)]
    //     console.log(desAnimaux.couleur[i])
    // }
}



// for(let i=0; i<5; i++) {
//     lanceDeDes.désBlancs[i] = animaux[getRandomIntInclusive(0,2)]
// }
// for(let i=0; i<2; i++) {
//     lanceDeDes.désRouges[i] = animaux[getRandomIntInclusive(0,2)]
// }
// lanceDeDes.déVert = animaux[getRandomIntInclusive(0,2)]

// Calcul du nombre d'animaux à chercher



// Affichage  du résultat du lancé de dés :

console.log("Balles : ", afficheTableau(desJaunes), "(Nombre d'animaux à chercher : ", nbAnimauxAChercher,")")
console.log("Animaux : ", afficheTableau(desAnimaux.blancs))
console.log("Braconniers : ", afficheTableau(desAnimaux.rouges))
console.log("Garde chasse : ", desAnimaux.vert)

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