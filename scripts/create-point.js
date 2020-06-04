//Dados da entidade
const populateUFs = () => {
  const ufSelect = document.querySelector("select[name=uf]");
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( res => res.json() )
  .then( states => {
    for ( const state of states) {
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
    }
  } )
}

populateUFs();

const getCities = (event) => {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("[name=state]")
  const ufValue = event.target.value;
  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy=nome`;
  citySelect.innerHTML = "<option value>Selecione a cidade</option>";
  citySelect.disabled = false;
  fetch(url)
  .then( res => res.json() )
  .then(cities => {
    for ( const city of cities) {
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
    }
    citySelect.disabled = false;
  } )
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities )

//Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li");
for (let item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem)
}


let selectedItems = [];


function handleSelectedItem(event) {
  const itemLi = event.target;
  itemLi.classList.toggle("selected");
  const itemId = itemLi.dataset.id;
  const alreadySelected = selectedItems.findIndex(item => item === itemId);
  if (alreadySelected >= 0) {
    const filteredItems = selectedItems.filter(item => {
      const differentItem = item != itemId
      return differentItem
    })
    selectedItems = filteredItems
  } else {
    selectedItems.push(itemId);
  }
  collectedItems.value = selectedItems;
}

