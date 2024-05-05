const tarjetas = [
    { id:1,
      name:'Bariloche',
      price:'$ 601.606',
      descrption:'Bariloche 3 noches - ¡Con Circuito Chico!, 01 sep. 2024 a 04 sep. 2024',
      Image:'./imagenes/bariloche.jpg'
    },

    { id:2,
        name:'Calafate',
        price:'$ 695.132',
        descrption:'Calafate Imponente 4 Dias, Junio 2024, Julio 2024',
        Image:'./imagenes/calafate.jpg'
      },

      { id:3,
        name:'Iguazu',
        price:'$ 398.885',
        descrption:'Iguazú Magico 4 días , Junio 2024, Julio 2024',
        Image:'./imagenes/iguazu.jpg'
      },

      { id:4,
        name:'Purmamarca',
        price:'$ 449.954',
        descrption:'Purmamarca con salinas grandes y Jujuy 5 días , Junio 2024',
        Image:'./imagenes/purmamarca.jpg'
      },

      { id:5,
        name:'Mendoza',
        price:'$  637.333',
        descrption:'3 NOCHES EN MENDOZA , Junio 2024',
        Image:'./imagenes/mendoza.jpg'
      },

      { id:6,
        name:'Cordoba',
        price:'$  610.658',
        descrption:'Córdoba, una ciudad fascinante, Junio 2024',
        Image:'./imagenes/cordoba.jpg'
      },
]
    
const container = document.querySelector ('#container1');

    tarjetas.forEach(tarjeta =>{
    const card= document.createElement ('div')
    card.innerHTML = `
    <img src='${tarjeta.Image}' alt='${tarjeta.descrption}'>
    <h3>${tarjeta.price}</h3>
    <h4>${tarjeta.descrption}</h4>
    <button id='${tarjeta.id} class='button'>Consultar</button>
    `
  container.appendChild(card)
})