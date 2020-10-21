// initialiser localStorage
if(localStorage.getItem("fav") == null) {
  localStorage.setItem("fav", "{}");
}

function color_Etoile() { // Si un favoris est detecter dans zone affichage mettre etoile en pleine
    if( localStorage.getItem( $("#zone_affichage").val() )  != null ) {
        // image etoile pleine
        $("#etoile_img").attr("src","./images/etoile-pleine.svg");
    } else {
        // image etoile crisé
        $("#etoile_img").attr("src","./images/etoile-vide.svg");
    }
}

function save_LS() { // save local storage quand on clique
    // !! attention pas de doublon !!

    // Reccuperer la zone_affichage en Jquery
    var zone_affichage = $("#zone_affichage");
    var content_zone = zone_affichage.val();


    if( zone_affichage.val().length > 0 ) { // save
        //
        localStorage.setItem("fav", zone_affichage.val());
    }
}

// if(localStorage.getItem("i") == null) {
  // localStorage.setItem("i", "0"); // initialiser
// }

// let i = localStorage.getItem("i");
// i++;
// var key_LS = "favoris_"+i;


// localStorage.setItem("Titanic");
// localStorage.setItem("i", i);


/*
if(typeof localStorage!='undefined') {

} else {
  alert("localStorage n'est pas supporté ou vide...");
}
*/
