/////////////////////////////////////////////////////////
// Déclaration des données du problème
/////////////////////////////////////////////////////////

const nomAnimaux = ["Antilope","Gnou","Rhinocéros"]
const desJaunes = [0,0]
const desAnimaux = {
    beige: [0,0,0,0,0],
    rouge: [0,0],
    vert: [0]
}

/////////////////////////////////////////////////////////
// ALGORITHME
/////////////////////////////////////////////////////////

// Jeté des dés jaunes, beiges , rouges et vert

desJaunes[0] = getRandomIntInclusive(1,3)
desJaunes[1] = getRandomIntInclusive(1,3)

for(let couleur in desAnimaux) {
    for(let i in desAnimaux[couleur]) {
        desAnimaux[couleur][i] = getRandomIntInclusive(0,2)
    }
}

// Animaux ciblés par les braconniers et par le garde-chasse

let animalTarget
if(desAnimaux.rouge[0]===desAnimaux.rouge[1]) {
    animalTarget = desAnimaux.rouge[0]
}
else {
    animalTarget = 3 - (desAnimaux.rouge[0] + desAnimaux.rouge[1])
}

// Liste finale des animaux : modifiée si les braconniers réussissent

let listeFinaleAnimaux = [...desAnimaux.beige]
let blnListeModifiee = false
if((desAnimaux.vert!=animalTarget)&&(listeFinaleAnimaux.includes(animalTarget))) {
    supprAnimalDansListe(animalTarget,listeFinaleAnimaux)
    blnListeModifiee = true
}

// Calcul du nombre d'animaux identiques à chercher

let nbAnimalsToSearch
if(desJaunes[0]===desJaunes[1]) {
    nbAnimalsToSearch = desJaunes[0]
}
else {
    nbAnimalsToSearch = 6 - (desJaunes[0] + desJaunes[1])
}

// Résolution du problème

let animauxCandidats = []
for(let index in nomAnimaux) {
    if(listeFinaleAnimaux.filter(el => el == index).length == nbAnimalsToSearch) {
        animauxCandidats.push(index)
    }
}

let candidats, solution
switch(animauxCandidats.length) {
    case 0:
        candidats = "Aucun"
        solution = candidats
        break
    case 1:
        candidats = nomAnimaux[animauxCandidats[0]]
        solution = candidats
        break
    case 2:
        candidats = afficheListe(animauxCandidats,true)
        let indiceSolution = (3 - animauxCandidats[0] - animauxCandidats[1])
        solution = nomAnimaux[indiceSolution]
        break
}

/////////////////////////////////////////////////////////
// Affichage de la résolution et de la solution
/////////////////////////////////////////////////////////

let msg = "Données initiales : \n\n"
msg += "Balles : " + desJaunes[0] + " - " + desJaunes[1] +"\n"
msg += "Liste des animaux : " + afficheListe(desAnimaux.beige) + "\n"
msg += "Braconniers : " + afficheListe(desAnimaux.rouge) + "\n"
msg += "Garde chasse : " + afficheListe(desAnimaux.vert) + "\n\n"
msg += "Traitement des données :\n\n"
msg += "-> Animal ciblé par les braconniers : " + nomAnimaux[animalTarget] + "\n"
msg += "-> Animal protégé par le garde-chasse : " + afficheListe(desAnimaux.vert) + "\n"
if(desAnimaux.vert==animalTarget) {
    msg += "-> Les braconniers échouent. L'animal est protégé.\n\n"    
}
else {
    if(blnListeModifiee) {
        msg += "-> Les braconniers réussissent. La liste des animaux est modifiée :\n"
        msg += "-> Liste des animaux : " + afficheListe(listeFinaleAnimaux) + "\n\n"
    }
    else {
        msg += "-> L'animal ciblé par les braconniers n'est pas dans la liste.\n\n"
    }
}
msg += "-> Nombre d'animaux à chercher : " + nbAnimalsToSearch +"\n"
msg += "-> Animaux présents " + nbAnimalsToSearch + " fois : " + candidats + "\n\n"
msg += "Solution : " + solution

console.log(msg)

/////////////////////////////////////////////////////////
// Outils
/////////////////////////////////////////////////////////

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min
}

function supprAnimalDansListe(target,tab) {
    for(let indice in tab) {
        if(target==tab[indice]) {
            tab.splice(indice,1)
            break
        }
    }
}

function afficheListe(tab) {
    let res = ""
    let separateur = ""
    for(let i in tab) {
        res += separateur + nomAnimaux[tab[i]]
        separateur = " - "
    }
    return res
}