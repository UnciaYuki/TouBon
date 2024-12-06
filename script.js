/*
Etape 1 : J'analyse la donnée
Etape 2 : Je créer mon modèle de carte en HTML
Etape 3 : Je récupère la donnée et je l'affiche en console
Etape 4 : Je stock le chemin vers la donnée dans des variables
Etape 5 : Je créer les cartes remplies dynamiquement 
6. Je les envois dans le DOM
*/

//on donne l'url du site à appeller
fetch('data.json')
    .then((rep) =>
        rep.json())
    .then(donnee => {
        // Affiche les données
        afficheLesInfos(donnee);
        console.log(donnee)

        // donnee.produits est un tableau
        // je le parcours : 
        // pour chacun des produit du tableau je l'affiche :
        donnee.produits.forEach(prod => {
            afficheUnProduit(prod)
        })
        // donnee.services est un tableau
        // je le parcours : 
        // pour chacun des services du tableau je l'affiche :
        donnee.services.forEach(serv => {
            AfficheService(serv)
        })

        // donnee.temoignages est un tableau
        // je le parcours : 
        // pour chacun des temoignages du tableau je l'affiche :
        donnee.temoignages.forEach(temoignages => {
            AfficheTemoignage(temoignages)
        })

        // avantagesClients est un tableau
        // je le parcours : 
        // pour chacun des services du tableau je l'affiche :
        donnee.avantagesClients.forEach(tag => {
            AfficheavantagesClients(tag)
        })
    });
// Rôle : Afficher un produit dans la page HTML sous forme de carte
// Paramètre : "recette",  un objet représentant un produit contenant les informations du produit
// Retour : Cette fonction ne retourne rien 

function afficheLesInfos(TouBon) {
    console.log(TouBon.nomCommercial)
    document.querySelector("h1").innerHTML = TouBon.nomCommercial
    console.log(TouBon.phraseAccroche)
    document.querySelector("h2").innerHTML = TouBon.phraseAccroche
    console.log(TouBon.texteAppelAction)
    document.querySelector("a").innerHTML = TouBon.texteAppelAction
}

function afficheUnProduit(produit) {
    // Role: afficher un produit dans la div qui a l'id divProduit
    // parametre: un produit du jeu de donnée
    // retour : rien
    let nom = produit.nom
    let description = produit.description
    let img = produit.imageurl
    document.querySelector("#divProduit").innerHTML += 

    `
    <div class="card">
                        <img src="${img}" alt="">
                        <div>
                            <h3>${nom}</h3>
                            <p>${description}</p>
                        </div>
    </div>
    `

}
// Role: afficher un service dans la div qui a l'id divService
// parametre: un service du jeu de donnée
// retour : rien
function AfficheService(Serv) {
    let nom = Serv.nom
    let description = Serv.description
    let img = Serv.icon
    document.querySelector("#divServ").innerHTML += 

    `
    <div class="flex spaceBetween center alignCenter margin card">
        <img src="${img}" alt=""><i class=""></i>
        <h4>${nom}</h4>
        <p>${description}</p>
    </div>
 `
}
// Role: afficher le témoignage dans la div qui a l'id divTemoignage
// parametre: témoignage du jeu de donnée
// retour : rien

function AfficheTemoignage(temoignages) {
    let prenom = temoignages.prenom
    let typeExperience = temoignages.typeExperience
    let commentaire = temoignages.commentaire
    let note = temoignages.note
    document.querySelector("#divtemoignages").innerHTML +=
`
    <div class="cardT">
                        <p>${prenom}</p>
                        <p>★ ${note}</p>
                        <p>${typeExperience}</p>
                        <p>${commentaire}</p>
                    </div>
    `
}

function AfficheavantagesClients(tag) {
    let icon = (tag.icon)
    let avantage = (tag.avantage)

document.querySelector("#divtag").innerHTML +=
`
<div class="tag">
                        <img src="${icon}" alt="">
                        <p>${avantage}</p>
                    </div>
`
}