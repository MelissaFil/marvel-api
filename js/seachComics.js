//pesquisar personagens 
let btnCreator = document.getElementById('creator_btn');
let creatorInput = document.getElementById('creator');


btnCreator.addEventListener('click', (event) => {

    event.preventDefault();
    let creator = creatorInput.value;
    console.log(creator);
    seachHero(creator);
})

function seachHero(creator) {
    let result = document.querySelector('#comics');
    let contentHTML = '';
    fetch(`https://gateway.marvel.com:443/v1/public/creators/${creator}/comics?ts=1&apikey=48c27997ef485a4f2ce8f29dc05d15ff&hash=82c6344ac583e67310f753bfb6ef2137`)
        .then(res => res.json())
        .then(body => {


            function getNames(item) {

                const fullname = [item.name].join("");
                return fullname;
            }


            function names() {
                result.innerHTML = body.data.results[0].creators.items.map(getNames);
            }
            names();

            //   for (let comic of body.data.results) {


            //         contentHTML += `
            //    <div>${comic.creators.items[0].name}</div>
            //     `

            //   }

            // result.innerHTML = contentHTML;
        })

}