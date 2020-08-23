//lista completa de personagens
const marvelCharacters = {
    render: () => {
        let urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=48c27997ef485a4f2ce8f29dc05d15ff&hash=82c6344ac583e67310f753bfb6ef2137';
        let container = document.querySelector('#marvel-row');
        let descricao = document.querySelector('#descricao')
        let contentHTML = '';
        let contentNameHtml = '';

        fetch(urlAPI).then(res => res.json()).then((json) => {
            for (let hero of json.data.results) {

                contentHTML += `<li> <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}"></li>`
                contentNameHtml += `
                <section>
                <div >
                <h1>${hero.name}</h1><p>${hero.description}</p>  
                </div>
                <div class="card">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}">  
                
                <h4>${hero.name}</h4>    
                <p>Nº comics: ${hero.comics.available}</p>   
                <p>Nº series: ${hero.series.available}</p> 
                <p>Nº stories: ${hero.stories.available}</p>  
                
                </div>
                </section>
                
                `


            }
            container.innerHTML = contentHTML;
            descricao.innerHTML = contentNameHtml;
        }).then(() => {
            //mostrar personagem e card ao clicar
            const itemImg = document.querySelectorAll(".marvel-row li");
            const itemDescricao = document.querySelectorAll(".descricao section");
            itemDescricao[0].classList.add('ativo');

            function ativar(index) {
                itemDescricao.forEach((item) => {
                    item.classList.remove('ativo');
                })
                itemDescricao[index].classList.add('ativo');
            }

            itemImg.forEach((item, index) => {
                item.addEventListener('click', () => { ativar(index); });
            })

        })


    }

}

marvelCharacters.render();

//pesquisar personagens 
let btnHero = document.getElementById('btnHero');
btnHero.addEventListener('click', handleClick);

function handleClick(event) {
    let inputHero = document.getElementById('hero');
    event.preventDefault();
    const hero = inputHero.value;
    seachHero(hero);
};

function seachHero(hero) {
    let result = document.querySelector('#seachRow');
    let contentHTM = '';
    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${hero}&ts=1&apikey=48c27997ef485a4f2ce8f29dc05d15ff&hash=82c6344ac583e67310f753bfb6ef2137`)
        .then(res => res.json())
        .then(body => {

            let hero = body.data.results[0];
            result.innerHTML = `
           <div> <img style="margin:50px;" src="${hero.thumbnail.path}.${hero.thumbnail.extension}"></div>
            <div style="margin:50px;" class="seachDescricao"><h1> ${hero.name}</h1>
            <p class="descricao">${hero.description}</p></div>
            `;

        }).catch((erro) => { result.innerHTML = '<p> não encontrado<p>' })

}