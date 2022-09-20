


const apiKey = 'UjBpgbzPLnlxQoht9R4K5yKC7n4gn512';
let query = 'goku';
import '../sass/style.scss'

const obtenerGifs = (query) => {
    const galeria = document.querySelector('#galeria');
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=20&q=${query}`)
    .then(response => response.json())
    .then( ({data}) => {        
        console.log('Mis datos', data);        
        // console.log(document)        
        
        data.forEach( ( {images: { original}, title}, i) => {
            // { images, title  }
            // console.log(i, title, images);            
             
            let item = 
            `<article>
                <img src="${original.url}" />
                <p>${title}</p>
            </article>`
            
            galeria.innerHTML += item;
            // console.log(item)
        })

        // console.log(imgs);

        // document.querySelector('#galeria').innerHTML = imgs;
    })
    
}


window.addEventListener('load', function() {
    console.log('La página cargo');
    const galeria = document.querySelector('#galeria');
    console.log(galeria);
    obtenerGifs('goku');
})



// console.log(result);


