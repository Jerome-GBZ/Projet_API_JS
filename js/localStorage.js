function save_LS() { // save local storage
  // attention pas de doublon

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
