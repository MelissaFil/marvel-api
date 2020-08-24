//lista completa de personagens
const marvelCharacters = {
    render: () => {
        let urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=48c27997ef485a4f2ce8f29dc05d15ff&hash=82c6344ac583e67310f753bfb6ef2137';
        let container = document.querySelector('#marvel-row');
        let description = document.querySelector('#description')
        let contentHTML = '';
        let contentNameHtml = '';

        fetch(urlAPI).then(res => res.json()).then((json) => {
            for (let hero of json.data.results) {

                contentHTML += `<li> <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}"></li>`
                contentNameHtml += `
                <section>
                <div><h1>${hero.name}</h1><p>${hero.description}</p></div>
                
                <div class="description_card"><img src="${hero.thumbnail.path}.${hero.thumbnail.extension}">
                <h4>${hero.name}</h4>    
                <p>Nº comics: ${hero.comics.available}</p>   
                <p>Nº series: ${hero.series.available}</p> 
                <p>Nº stories: ${hero.stories.available}</p></div>
               
                </section>
                
                `
            }
            container.innerHTML = contentHTML;
            description.innerHTML = contentNameHtml;
        }).then(() => {
            //mostrar nome, descrição e card ao selecionar personagem na lista
            const itemImg = document.querySelectorAll(".marvel-row li");
            const sectionDescription = document.querySelectorAll(".description section");
            sectionDescription[0].classList.add('active');

            function activate(index) {
                sectionDescription.forEach((item) => {
                    item.classList.remove('active');
                })
                sectionDescription[index].classList.add('active');
            }

            itemImg.forEach((item, index) => {
                item.addEventListener('click', () => { activate(index); });
            })

        })


    }

}

marvelCharacters.render();