$affichage = $('#zone_affichage');

$btn_recherche = $('#btn-lancer-recherche');

$btn_recherche.attr("onclick","recherche()");

$nb_affichage = 3;

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
    $resultats = $('.res');

    $resultats.each(function(i) {
      $(this).text(obj.Similar.Results[i].Name);
    });
}
