function color_Etoile() { // Si un favoris est detecter dans zone affichage mettre etoile en pleine
    if( localStorage.getItem( $("#zone_affichage").val() )  != null ) {
        // image etoile pleine
        $("#etoile_img").attr("src","./images/etoile-pleine.svg");
    } else {
        // image etoile crisé
        $("#etoile_img").attr("src","./images/etoile-vide.svg");
    }
}

function limit() {
  return $(".list_deroulante").val();
}

function save_LS() { // save local storage quand on clique
  // !! attention pas de doublon !!

  // Reccuperer la zone_affichage en Jquery
  var zone_affichage = $("#zone_affichage");
  var content_zone = zone_affichage.val();
  console.log( zone_affichage );
  console.log( content_zone );


}

if(localStorage.getItem("i") == null) {
  localStorage.setItem("i", "0"); // initialiser
}

let i = localStorage.getItem("i");
i++;
var key_LS = "favoris_"+i;


localStorage.setItem(key_LS, "Titanic");
localStorage.setItem("i", i);


/*
if(typeof localStorage!='undefined') {

} else {
  alert("localStorage n'est pas supporté ou vide...");
}
*/
