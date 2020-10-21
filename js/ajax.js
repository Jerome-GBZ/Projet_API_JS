$affichage = $('#zone_affichage');

$btn_recherche = $('#btn-lancer-recherche');

$btn_recherche.attr("onclick","recherche()");

function recherche() {
  console.log("OK");
  try {
    var proxy = 'https://cors-anywhere.herokuapp.com/';

    var url_recherche = proxy + 'https://tastedive.com/api/similar?q=' + encodeURIComponent($affichage.val()) + '&k=388762-m4103gam-DAWFNPJZ';

    $.get(url_recherche,afficheElements);
  } catch (e) {
    alert('Erreur');
  }

}

function afficheElements(obj) {
    $(".res").remove();

    var nb_affichage = $(".list_deroulante").val();

    $div_resultats = $('#bloc-resultats');

    for (var i = 0; i < nb_affichage; i++) {
      $div_resultats.append("<p class=\"res\">" + obj.Similar.Results[i].Name + "</p>");
    }
}
