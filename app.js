// // https://pokeapi.co/api/v2/pokemon/
// // https://pokeapi.co/api/v2/pokemon/weedle

const formEle = document.getElementById('form');
const contentEle = document.querySelector("#show-item")
const query=document.querySelector('#query')

async function getpokamon(search) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const data = await res.json()
        const pEle = document.createElement('p')
        pEle.textContent = data.name;
        const imgEle = document.createElement('img')
        imgEle.src = data.sprites.front_default
        contentEle.append(pEle)
        pEle.append(imgEle)
    } catch (error) {
        console.log('Error', error);
    }

}
fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
        return res.json()
    })
    .then(data => {
        for (const item of data.results) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                .then(ress => {
                    return ress.json()
                }).then(data => {

                    const aEle = document.createElement('a')
                    aEle.textContent = data.name;
                    
                   aEle.href = `/detail.html? name=${data.name}`;
                    const imgEle = document.createElement('img')
                    imgEle.src = data.sprites.front_default
                    console.log(data.sprites.front_default);
                    contentEle.append(aEle)
                    aEle.append(imgEle)
                })
        }
    })
    .catch(err => {
        console.log("Error", err);
    })


formEle.addEventListener('submit', function (e) {
    e.preventDefault()
    const search = formEle.elements.query.value;
    if (search) {
          query.value=null
        getpokamon(search)
      
        contentEle.innerHTML = ""
    } else {
        location.reload();

    }
})
