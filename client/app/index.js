//Referencia de campo do form
let campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

//Referencia tbody
let tbody = document.querySelector('table tbody');

console.log(tbody);

//Verificando envto submit
document.querySelector('.form').addEventListener('submit', event => {
  //cancelando comportamento padrão do submit
  event.preventDefault();
  //criando novo elemento
  let tr = document.createElement('tr');

  //Passar por cada elemento do array
  campos.forEach(argCampo => {
    //cria td sem infos
    let td = document.createElement('td');

    //Atribui valor a td criada
    td.textContent = argCampo.value;
    //Insere com filho do tr
    tr.appendChild(td);
  });

  //Cria td que armazena dados de volume
  let tdVolume = document.createElement('td');
  //Insere na td criada a operação
  tdVolume.textContent = campos[1].value * campos[2].value;
  //Insere como filho o td criado no tr
  tr.appendChild(tdVolume);

  //Insere como filho do tbody
  tbody.appendChild(tr);

  //limpando campos
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus();
});
