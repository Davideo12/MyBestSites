
let myStorage = window.localStorage;

const list = document.getElementById('list');
const btn = document.getElementById('btn');

cargarUrl()

btn.addEventListener('click', () => {
    let url = prompt('Introduce la URL de la pagina que deseas guardar:');
    let nombre = prompt('Escribe el nombre con el que lo deseas guardar:');
    if(nombre == '' || url == '' || nombre == null || url == null) {
        alert('Rellena todos los campos');
    } else {
        guardarUrl(nombre, url);
    }
})

function cargarUrl() {
    let keys = Object.keys(myStorage);
    let tamaño = keys.length;

    let i = 0;
    while(i < tamaño) {
        let item = myStorage.getItem(keys[i]);
        console.log(item);
    
        if(!item.includes('null')) {
            list.innerHTML += `
                <li>
                    <p>${keys[i]}<a id="btn-link" href="${item}">${item}</a></p>
                </li>
            `;
        }
        i++;
    }
}

function guardarUrl(nombre, url) {
    myStorage.setItem(nombre, url);
    cargarUrl();
}