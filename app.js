const gitHubForm = document.getElementById('gitHubForm'); //dohvatanje GitHub username input forme

gitHubForm.addEventListener('submit', (e) => {

    e.preventDefault(); //prevent default form action

    let usernameInput=document.getElementById('usernameInput'); //dohvatanje GitHub username
    let gitHubUsername = usernameInput.value; //dohvatanje vrednosti

    requestUserRepos(gitHubUsername); //pokretanje funkcije
});
