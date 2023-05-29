//Selectionner les éléments du formulaire d'entrée
var conteneur = document.getElementById("contchamp");
var champ = document.getElementById('valeur')
var bouton = document.getElementById('ajout')
var listes = document.getElementById('contache')

// Ajouter un écouteur d'evenement sur le bouton d'ajout des taches
bouton.addEventListener('click', ajouter);

//fonction d'ajout des taches
function ajouter() {
  //Récuperer le texte saisie dans le champ de saisie
  var nomtache = champ.value;
  var taches = document.createElement('li')
  taches.classList.add('list-group-item', 'list-group-item-danger', 'd-flex', 'justify-content-between', 'align-items-center');
  var supp = document.createElement('span')
  taches.innerHTML = `
      ${nomtache}
      <div class="btn-group" role="group" id="lbouton">
          <button type="button" class="btn btn-danger mx-3 rounded-0" data-action="todo">to do</button>
          <button type="button" class="btn btn-warning mx-3 rounded-0" data-action="doing">doing</button>
          <button type="button" class="btn btn-success mx-3 rounded-0" data-action="done">done</button> 
      </div>
  `;
   supp.innerHTML = `<span  class="icone">
   <button type="button" class="btn rounded-0 text-danger" data-action="sup">X</button></span>`;
  // ajouter un effet sur le bouton supprimer
   supp.onclick = () => supprimer(taches);
   taches.appendChild(supp);
  //ajout d'ecouteur sur les bouttons
  const actionbtn = taches.querySelectorAll('button');
  actionbtn.forEach(button => button.addEventListener('click', gestionclick));

   listes.appendChild(taches);
   champ.value = '';
}
  //fonction pour changer la couleur des taches
  function chagecouleur(task, color) {
    task.classList.remove('list-group-item-danger', 'list-group-item-warning', 'list-group-item-success');
    task.classList.add(color);
  }

  // Fonction pour gérer les clics sur les boutons d'action
  function gestionclick(event) {
    const action = event.target.dataset.action;
    const task = event.target.closest('.list-group-item');

    switch (action) {
      case 'todo':
        chagecouleur(task, 'list-group-item-danger');
        break;
      case 'doing':
        chagecouleur(task, 'list-group-item-warning');
        break;
      case 'done':
        chagecouleur(task, 'list-group-item-success');
        break;
    }
  }
  // fonction pour gérer le bouton supprimer
  function supprimer(element){
    element.remove()
  }

