$affichage = $('#zone_affichage');
var nb_affichage;

var recherches_possibles = ["Iron Man", "Iron Man 2", "Radiohead", "Iron Maiden", "The Cure", "Jurassic Park", "Hulk"];

$btn_recherche = $('#btn-lancer-recherche');

$btn_recherche.attr("onclick","recherche()");

function recherche() {
  if ($affichage.val() != '') {
    try {
      var proxy = 'https://cors-anywhere.herokuapp.com/';

      nb_affichage = $(".list_deroulante").val();

      var url_recherche = proxy + 'https://tastedive.com/api/similar?q=' + encodeURIComponent($affichage.val()) + '&limit=' + nb_affichage + '&k=388762-m4103-U30L16B8';

      $.get(url_recherche,afficheElements);

      $(".res").remove();
      $('.info-vide').remove();
      $('#bloc-gif-attente').show();

    } catch (e) {
      alert('Erreur');
    }
  }

}

function afficheElements(obj) {
  $div_resultats = $('#bloc-resultats');

  if (obj.Similar.Results[0] == undefined) {
    $div_resultats.append("<p class=\"info-vide\">( &empty; Aucun résultat trouvé )</p>");
  } else {
    tab_fav.push($affichage.val());
    fillAutocomplete();

    for (var i = 0; i < nb_affichage; i++) {
      var elementReponse = "<p class=\"res\"><a href=\"https://www.google.com/search?q=" + obj.Similar.Results[i].Name + "\" target=\"_blank\">" + obj.Similar.Results[i].Name + "</a></p>";
      $div_resultats.append(elementReponse);
    }
  }

  $('#bloc-gif-attente').hide();
}

function fav_clique(elem) {
  $affichage.val($(elem).text());
  recherche();
  color_Etoile();
}

function recherche_entree() {
  if (event.keyCode == 13) {
    recherche();
  }
}
