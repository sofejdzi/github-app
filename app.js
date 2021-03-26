const gitHubForm = document.getElementById('gitHubForm'); //dohvatanje GitHub username input forme

gitHubForm.addEventListener('submit', (e) => {

    e.preventDefault(); //prevent default form action

    let usernameInput=document.getElementById('usernameInput'); //dohvatanje GitHub username
    let gitHubUsername = usernameInput.value; //dohvatanje vrednosti

    requestUserRepos(gitHubUsername); //pokretanje funkcije
});

function requestUserRepos(username){

    const xhr = new XMLHttpRequest(); //novi objekat
    const url = `https://api.github.com/users/${username}/repos`; //github endpoint

    xhr.open('GET', url, true); //nova konekcija koristeci GET

    xhr.onload=function(){

        const data = JSON.parse(this.response); //parsovanje podataka u JSON

        for (let d in data){

            let ul = document.getElementById('userRepos');

            let li = document.createElement('li');

            li.classList.add('list-group-item') //dodavanje bootstrap klase za grupisanje liste

            li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[d].name}</p>
                <p><strong>Description:</strong> ${data[d].description}</p>
                <p><strong>URL:</strong> <a href="${data[d].html_url}">${data[d].html_url}</a></p>
            `); //ispisivanje u HTML

            ul.appendChild(li); //dodaje listi element
        }
    }
    xhr.send();
}