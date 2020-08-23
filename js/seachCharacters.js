//pesquisar personagens 
let btnHero = document.getElementById('formChar_btnHero');
let heroInput = document.getElementById('formChar_inputHero');

heroInput.addEventListener('keydown', (e) => {

    if (e.keyCode == 13) {
        e.preventDefault();
        let hero = heroInput.value;

        seachHero(hero);
    }
})

btnHero.addEventListener('click', (event) => {
    let inputHero = document.getElementById('hero');
    event.preventDefault();
    let hero = heroInput.value;

    seachHero(hero);
})

function seachHero(hero) {
    let result = document.querySelector('#seachHero');
    let contentHTM = '';
    fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${hero}&ts=1&apikey=48c27997ef485a4f2ce8f29dc05d15ff&hash=82c6344ac583e67310f753bfb6ef2137`)
        .then(res => res.json())
        .then(body => {

            let hero = body.data.results[0];
            result.innerHTML = `
           <div> <img style="margin:50px;" src="${hero.thumbnail.path}.${hero.thumbnail.extension}"></div>
            <div style="margin:50px;" class="seachHero_name"><h1> ${hero.name}</h1>
            <p class="seachHero_description">${hero.description}</p></div>
            `;

        }).catch((erro) => { alert('heroi nao encontrado') })

}