$affichage = $('#zone_affichage');

$btn_recherche = $('#btn-lancer-recherche');

$btn_recherche.attr("onclick","recherche()");

function recherche() {
  console.log("OK");
  try {
    var url_recherche = 'https://tastedive.com/api/similar?q=' + $affichage.val() + '&k=388762-m4103gam-DAWFNPJZ';

    $.get(url_recherche,afficheElements);
  } catch (e) {
    alert('Erreur');
  }

}

function afficheElements(str) {
  var obj_json = JSON.parse(str);

  $res1 = $('#res1');

  $res1.val(obj_json.Results[0].Name);
}
