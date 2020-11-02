// initialiser la liste de favoris
init_fav();


function color_Etoile() { // Si un favoris est detecter dans zone affichage mettre etoile en pleine
    if( localStorage.getItem( "key_"+$("#zone_affichage").val() )  != null ) {
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
      /*
        let obj = JSON.parse(localStorage.getItem("fav"));
        let indice = obj.i;
        console.log(obj);
        obj[indice] = {nom:zone_affichage.val()};
        obj.i = indice+1;

        let final_obj = JSON.stringify( obj );
        localStorage.setItem("fav", final_obj);
        */
        localStorage.setItem("key_"+zone_affichage.val(), zone_affichage.val());
    }

    // re Actualiser la liste des favoris à l'écran
    init_fav();
    color_Etoile();
}

function init_fav() {
    // parse le resultat du localStorage
    // let obj = JSON.parse(localStorage.getItem("fav"));

    $("#liste-favoris").text("");
    $("#section-favoris").append('<p class="info-vide"></p>');
    // placer les element d'obj dans les li
    if( localStorage.length < 1 ) {
        $("#section-favoris").append('<p class="info-vide">( &empty; Aucune recherche enregistrée )</p>');
    } else {
        for (var i=0; i < localStorage.length; i++) {
            let clef = localStorage.key(i);
            let nom = localStorage.getItem(clef);
            if(clef.substr(0, 4) == "key_") {
              $("#liste-favoris").append('<li> <span title="Cliquer pour relancer la recherche">'+nom+'</span> <img src="images/croix.svg" id="'+clef+'" onclick="remove_LS(this)" alt="Icone pour supprimer le favori" width=15 title="Cliquer pour supprimer le favori">');
            }
        }
    }
}

function remove_LS(img_click) {
  console.log(img_click);
    console.log(img_click.id);
    console.log( $("#"+img_click.id) );
/*
    $( "#confirm_alert" ).simpleConfirm({
        message: "Etes vous sure de vouloir supprimer: ",
        success: function(){
            console.log("ok");
        },
        cancel: function() {
            console.log("nop");
        }
    });
*/
$.confirm({
    text: "Voulez vous supprimer un element ?",
    color: "black",
    buttons: {
        Yes: {
            text: 'Yes', // With spaces and symbols
            action: function () {
                $.alert('You clicked on "heyThere"');
            }
        },
        No: {
            text: 'No !', // With spaces and symbols
            action: function () {
                $.alert('You clicked on "heyThere"');
            }
        }
    }
});
    /*
    $( "#dialog" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Delete all items": function() {
                console.log( "delete" );
                $( this ).dialog( "close" );
            },
            Cancel: function() {
                console.log( "close" );
                $( this ).dialog( "close" );
            }
        }
    });
    */
    // supprimer element dans le local storage
    // localStorage.removeItem(img_click.id);
    // init_fav();
    // color_Etoile();
}
