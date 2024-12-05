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
    console.log (donnee)

    // donnee.produits est un tableau
    // je le parcours : 
    // pour chacun des produit du tableau je l'affiche :
    donnee.produits.forEach(prod=>{
          afficheUnProduit(prod)
    })
    // donnee.services est un tableau
    // je le parcours : 
    // pour chacun des services du tableau je l'affiche :
    donnee.services.forEach(serv=>{
        AfficheService(serv)
    })

    // donnee.temoignages est un tableau
    // je le parcours : 
    // pour chacun des temoignages du tableau je l'affiche :
    donnee.temoignages.forEach(temoignages=>{
        AfficheTemoignage(temoignages)
    })

    // avantagesClients est un tableau
    // je le parcours : 
    // pour chacun des services du tableau je l'affiche :
    donnee.avantagesClients.forEach(tag=>{
        AfficheavantagesClients(tag)
    })
});
// Rôle : Afficher un produit dans la page HTML sous forme de carte
// Paramètre : "recette",  un objet représentant un produit contenant les informations du produit
// Retour : Cette fonction ne retourne rien 

function afficheLesInfos(TouBon) {
    console.log (TouBon.nomCommercial)
    document.querySelector("h1").innerHTML = TouBon.nomCommercial
    console.log (TouBon.phraseAccroche)
    document.querySelector("h2").innerHTML = TouBon.phraseAccroche
    console.log (TouBon.texteAppelAction)
    document.querySelector("a").innerHTML = TouBon.texteAppelAction
}

function afficheUnProduit(produit){
    // Role: afficher un produit dans la div qui a l'id divProduit
    // parametre: un produit du jeu de donnée
    // retour : rien
    console.log(produit.nom)
    console.log(produit.description)
    console.log(produit.imageurl)
}
    // Role: afficher un service dans la div qui a l'id divService
    // parametre: un service du jeu de donnée
    // retour : rien
function AfficheService(Serv){
    console.log(Serv.nom)
    console.log(Serv.description)
}
    // Role: afficher le témoignage dans la div qui a l'id divTemoignage
    // parametre: témoignage du jeu de donnée
    // retour : rien

function AfficheTemoignage (temoignages){
    console.log(temoignages.prenom)
    console.log(temoignages.typeExperience)
    console.log(temoignages.commentaire)
    console.log(temoignages.note)
}

function AfficheavantagesClients (tag){
    console.log(tag.icon)
    console.log(tag.avantage)
}
