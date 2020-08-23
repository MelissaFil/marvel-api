let contentHTML = '';
let optionSelect = document.querySelector('#creator')
const marvelCreator = {
    getCreator: (hero) => {

        let contentHTM = '';
        fetch(`https://gateway.marvel.com:443/v1/public/creators?&ts=1&apikey=48c27997ef485a4f2ce8f29dc05d15ff&hash=82c6344ac583e67310f753bfb6ef2137`)
            .then(res => res.json()).then((json) => {
                for (let creators of json.data.results) {

                    contentHTML += `
                <option id="creatorsList" value ="${creators.id}">${creators.firstName}${creators.lastName}</option>
                `
                }
                optionSelect.innerHTML = contentHTML;
            })
    }
}
marvelCreator.getCreator();