$affichage = $('#zone_affichage');

$btn_recherche = $('#btn-lancer-recherche');

$btn_recherche.attr("onclick","recherche()");

$affichage.keypress(function(e) {
  if (e==13) {
    recherhe();
  }
});

function recherche() {
  console.log("OK");
  try {
    var proxy = 'https://cors-anywhere.herokuapp.com/';

    var url_recherche = proxy + 'https://tastedive.com/api/similar?q=' + encodeURIComponent($affichage.val()) + '&k=388762-m4103gam-DAWFNPJZ';

    $.get(url_recherche,afficheElements);

    $(".res").remove();
    $('.info-vide').remove();
    $('#bloc-gif-attente').show();

  } catch (e) {
    alert('Erreur');
  }

}

function afficheElements(obj) {
  $div_resultats = $('#bloc-resultats');

  if (obj.Similar.Results[0] == undefined) {
    $div_resultats.append("<p class=\"info-vide\">( &empty; Aucun résultat trouvé )</p>");
  } else {
    var nb_affichage = $(".list_deroulante").val();

    for (var i = 0; i < nb_affichage; i++) {
      $div_resultats.append("<p class=\"res\">" + obj.Similar.Results[i].Name + "</p>");
    }
  }

  $('#bloc-gif-attente').hide();
}
