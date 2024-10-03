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

// pour mettre une valeur dans "choisir une tache" sur la 2nd ligne
document.querySelector('#combolev_2').value = "test3"