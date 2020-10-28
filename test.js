// promesa que hace que tarde 3 segundos
const promesa1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        getDatos();
        resolve("Información Enviada")
    },3000)
})

//promesa que busca los titulos y se lo entrega a la primera promesa
const getDatos = async () => {
    for (var i = 0; i < 20; i++) {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        try {
            const response = await fetch(url);
            const datos = await response.json();
            console.log(datos[i].title);
        }
        catch (err) {
            console.log(err);
        }
    }
}

//funcion que llama a la primera promesa para que se ejecute y entrega los resultados
const getData = async () => {
    const resp = await promesa1();
    console.log(resp)
}
getData();