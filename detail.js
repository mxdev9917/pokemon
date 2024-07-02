//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
var param_array = window.location.href
const str = param_array.split("=")
getpokamon(str[1])
const detailEle = document.querySelector('#detail')
const detailListEle = document.querySelector('#detail-list')
async function getpokamon(search) {
    try {
        // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const res = await fetch(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${search}`)
        const data = await res.json()
        console.log(data);
        const pNmameEle = document.createElement('p')
        pNmameEle.textContent = `Name: ${data.name}`;
        const ptypeEle = document.createElement('p')
        ptypeEle.textContent = `Type: ${data.info.type}`;
        const pHpEle = document.createElement('p')
        pHpEle.textContent = `Hp: ${data.hp}`;
        const pWeaknessEle = document.createElement('p')
        pWeaknessEle.textContent = `Weakness: ${data.info.weakness}`;
        const  pDescriptionEle= document.createElement('p')
        pDescriptionEle.textContent = `Description: ${data.info.description}`;
        detailListEle.append(pNmameEle,ptypeEle,pHpEle,pWeaknessEle, pDescriptionEle)

        const imgEle = document.createElement('img')
        imgEle.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.info.id}.png`
        // contentEle.append(pEle)
        detailEle.append(imgEle)
    } catch (error) {
        console.log('Error', error);
    }

} // hp