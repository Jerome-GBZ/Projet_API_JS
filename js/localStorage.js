// initialiser la liste de favoris
var tab_fav = new Array();
init_fav();
$("#btn-favoris").css('cursor', 'no-drop');

function color_Etoile() { // Si un favoris est detecter dans zone affichage mettre etoile en pleine
    if( $("#zone_affichage").val().length > 0 ) {
        // button cliquable
        $("#btn-favoris").removeAttr("disabled");
        $("#btn-favoris").css('cursor', 'pointer');
        $("#btn-favoris").css('background-color', 'rgb(26, 188, 156)');

        if( localStorage.getItem( "key_"+$("#zone_affichage").val().toLowerCase() ) != null ) {
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
        $("#etoile_img").attr("src","./images/etoile-vide.svg");
    }
}


function save_LS() { // save local storage quand on clique
    // Reccuperer la zone_affichage en Jquery
    let zone_affichage = $("#zone_affichage");
    let nom = zone_affichage.val();
    let clef = "key_"+nom.toLowerCase();
    tab_fav.push(nom);
    fillAutocomplete();

    if( localStorage.getItem(clef) != null ) {
        let obj_clique = document.getElementById( "key_"+$("#zone_affichage").val().toLowerCase() );
        remove_LS(obj_clique);
    } else {
        if( zone_affichage.val().length > 0 ) { // save
            localStorage.setItem("key_"+zone_affichage.val().toLowerCase(), zone_affichage.val());
        }
    }

    // re Actualiser la liste des favoris à l'écran
    init_fav();
    color_Etoile();
}


function init_fav() {
    $("#liste-favoris").text("");
    $("#section-favoris").append('<p class="info-vide-favoris">( &empty; Aucune recherche enregistrée )</p>');
    // placer les element d'obj dans les li
    if( localStorage.length != 0 ) {
        $(".info-vide-favoris").remove();
        for (var i=0; i < localStorage.length; i++) {
            let clef = localStorage.key(i);
            let nom = localStorage.getItem(clef);
            if(clef.substr(0, 4) == "key_") {
                $("#liste-favoris").append('<li> <span onclick="fav_clique(this)" title="Cliquer pour relancer la recherche">'+nom+'</span> <img src="images/croix.svg" id="'+clef+'" onclick="remove_LS(this)" alt="Icone pour supprimer le favori" width=15 title="Cliquer pour supprimer le favori">');
                tab_fav.push(nom);
            }
        }
    }
    fillAutocomplete();
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

                $(this).dialog("close");
            },
            "Annuler": function() {
                // console.log("Annuler");
                $(this).dialog("close");
            }
        }
    });
}

function fillAutocomplete() {
  tab_fav = Array.from(new Set(tab_fav));
  $affichage.autocomplete(
    {
      source: tab_fav
    },
    {
      minLength: 2,
      autofocus: true,
    });
}
