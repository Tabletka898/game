function findNextBone(){
  var bone =  document.getElementsByClassName("bone")[0];
  if(bone === undefined){
  var div = document.getElementById("yard");
  yard.innerHTML = "<h1>" + "GAME OVER" + "</h1>";
  yard.firstElementChild.style.color = "red";
  yard.firstElementChild.style.textAlign = "center";
}else{
  bone.className = "bone-found";
}

  // Algoritmul functiei:
  // * sa se caute primul element "div" dupa clasa "bone" puteti utilizat querySelector() sau getElementsByClassName()
  // * sa se schimbe clasa acestui element - daca a fost gasit, in "bone-found"
  // * atentie!!! in cazul in care elementul nu poate fi gasit querySelector() returneaza null, iar getElementsByClassName() returneaza o colectie cu zero elemente 0 proprietatea .length
  // * in cazul in care nu mai sunt gasit oase, sa se afiseze mesajul "GAME OVER" care va inlocui toate elementele DIV din interiorul "#yard", puteti utiliza proprietatea .innerHTML
}
