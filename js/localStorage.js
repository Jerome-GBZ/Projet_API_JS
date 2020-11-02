// initialiser la liste de favoris
init_fav();
$("#btn-favoris").css('cursor', 'no-drop');


function color_Etoile() { // Si un favoris est detecter dans zone affichage mettre etoile en pleine
    if( $("#zone_affichage").val().length > 0 ){
        // button cliquable
        $("#btn-favoris").removeAttr("disabled");
        $("#btn-favoris").css('cursor', 'pointer');
        $("#btn-favoris").css('background-color', 'rgb(26, 188, 156)');

        if( localStorage.getItem( "key_"+$("#zone_affichage").val().toLowerCase() )  != null ) {
            // image etoile pleine
            $("#etoile_img").attr("src","./images/etoile-pleine.svg");
        } else {
            // image etoile crisé
            $("#etoile_img").attr("src","./images/etoile-vide.svg");

        }
    } else {
        // button cliquable
        $("#btn-favoris").css('cursor', 'no-drop');
        $("#btn-favoris").attr("disabled","true");
        $("#btn-favoris").css('background-color', '#bebebe');
    }
}


function save_LS() { // save local storage quand on clique
    // !! attention pas de doublon !!

    // Reccuperer la zone_affichage en Jquery
    let zone_affichage = $("#zone_affichage");
    let clef = "key_"+zone_affichage.val();

    if( localStorage.getItem(clef) != null ) {
        let obj_clique = document.getElementById( "key_"+$("#zone_affichage").val().toLowerCase() );
        // console.log( obj_clique );

        remove_LS(obj_clique);
    } else {
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
            localStorage.setItem("key_"+zone_affichage.val().toLowerCase(), zone_affichage.val());
        }
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
              $("#liste-favoris").append('<li> <span onclick="fav_clique(this)" title="Cliquer pour relancer la recherche">'+nom+'</span> <img src="images/croix.svg" id="'+clef+'" onclick="remove_LS(this)" alt="Icone pour supprimer le favori" width=15 title="Cliquer pour supprimer le favori">');
            }
        }
    }
}

function remove_LS(img_click) {
    $("#dialog-confirm").text("En cliquant sur 'Supprimer' vous supprimerez votre favoris : "+localStorage.getItem(img_click.id));

    $( "#dialog-confirm" ).dialog({
        height: "auto",
        width: 400,
        title: "Voulez vous supprimer un element ?",
        buttons: {
            "Supprimer": function() {
                // supprimer element dans le local storage
                localStorage.removeItem(img_click.id);
                init_fav();
                color_Etoile();

                // console.log("Supprimer");

                $( this ).dialog( "close" );
            },
            "Annuler": function() {
                // console.log("Annuler");
                $( this ).dialog( "close" );
            }
        }
    });
}
