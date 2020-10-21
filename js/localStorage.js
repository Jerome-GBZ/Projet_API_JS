// initialiser localStorage
if(localStorage.getItem("fav") == null) {
  let obj = JSON.stringify( {i:0} );
  localStorage.setItem("fav", obj);
}

init_fav();


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

    if( zone_affichage.val().length > 0 ) { // save
        let obj = JSON.parse(localStorage.getItem("fav"));
        let indice = obj.i;


        obj[indice] = {non:zone_affichage.val()};
        obj.i = indice+1;

        let final_obj = JSON.stringify( obj );
        localStorage.setItem("fav", final_obj);
    }
}

function init_fav() {
    // recup le localstorage
    var zone_affichage = $("#zone_affichage");

    // parse le resultat du localStorage
    let obj = JSON.parse(localStorage.getItem("fav"));

    // placer les element d(obj dans les li 
    console.log(obj);
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
