// -------- SF -------

// modifier la premiere colonne de la premiere ligne (mettre 5):
// il suffit de concatener le nom des classes dans querySelector
document.querySelector(".f-grid-cell.f-grid-td.f-grid-cell-weekDay1.timecard-notes-cell-ff.f-unselectable").children[0].innerHTML = "5,00"

// pour changer le titre d'un assignement:
document.querySelector("#combo-1140-inputEl").value = "test"

// pour convertir une collection en array:
Array.from(collecction)


// -------- SX -------

// pour changer une valeur de temps:
document.querySelector('[name="plt_02/10/2024_0"]').children[2].selected = true

// pour mettre une valeur dans "choisir une affaire"
document.querySelector('#comboprj_1').value = "test"
document.querySelector('#comboprj_1').value = "ESKER SA INT_OP-ATG-24-0001-ATG Dispositif ESKER 2024"
document.querySelector('#comboprj_1').className = 'x-form-text x-form-field tisCombo'

// pour mettre une valeur dans "choisir une tache" sur la 2nd ligne
document.querySelector('#combolev_1').value = "test3"
document.querySelector('#combolev_1').value = "Dispositif Esker ATG 2024 Ingénieur Etudes et Développement Consultant technique Confirmé"
// afficher la ligne 3 "sous tache"
document.querySelector('#ext-gen222').className = 'x-form-field-wrap' // ald 'x-form-field-wrap  x-hide-offsets'


// la liste des valeur pour "choisir une affaire"
document.querySelector('.x-combo-list-inner')

// pour afficher le combo
document.querySelector('#ext-gen209').className = 'x-form-field-wrap' // ald 'x-form-field-wrap  x-hide-offsets'