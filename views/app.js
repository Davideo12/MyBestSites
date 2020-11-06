
let myStorage = window.localStorage;

const list = document.getElementById('list');
const btn = document.getElementById('btn');
const btn_del = document.getElementById('btn-del');

cargarUrl()

btn_del.addEventListener('click', async () => {
    let key = prompt('Ingresa el nombre del objeto que deseas eliminar:')

    if(key == '' || key == null || key == undefined) {
        console.log('null')
    } else {
        console.log(key)
        await eliminar(key)
    }
})
btn.addEventListener('click', () => {
    let url = prompt('Introduce la URL de la pagina que deseas guardar:');
    if(url.split('http:' || 'https:', 0)) {
        let nombre = prompt('Escribe el nombre con el que lo deseas guardar:');
        if(nombre == '' || nombre == null) {
            console.log('')
        } else {
            guardarUrl(nombre, url);
            cargarUrl();
        }
    }
})

function cargarUrl() {
    let keys = Object.keys(myStorage);
    let tamaño = keys.length;

    let i = 0;
    while(i < tamaño) { 
        let item = myStorage.getItem(keys[i]);
    
        if(!item.includes('null')) {
            let domain = new URL(item).host
            let domain_ref = domain.slice(0,30) + '...'
            list.innerHTML += `
                <a id="btn-link" href="${item}" class = "btn-container">
                    <img class="icon" src=${`https://s2.googleusercontent.com/s2/favicons?domain=${domain}`}></img>
                    <p class="url-ref">${domain_ref}</p>
                    <p>${keys[i]}</p>
                </a>
            `;
        }
        i++;
    }
}

async function eliminar(key) {
    await myStorage.removeItem(key);
    cargarUrl()
    location.reload()
}

async function guardarUrl(nombre, url) {
    await myStorage.setItem(nombre, url);
    cargarUrl()
    location.reload()
}