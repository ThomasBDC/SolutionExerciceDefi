const apiUrl = 'https://geo.api.gouv.fr/communes?codePostal='
const zipcode = document.getElementById("zipcode")
const city = document.getElementById("city")
const boutonTester = document.getElementById("tester")

boutonTester.addEventListener("click", (event)=>{
    event.preventDefault() // évite que la page ne recharge
    const code = zipcode.value;
    const url = apiUrl+code;
    // votre code ici 
    var xhr = new XMLHttpRequest();
    var verb = 'GET';
    var result;

    xhr.open(verb, url);

    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4) {
            //Si le status n'est pas 200 (HTTP.OK), on alerte l'utilisateur.
            if(xhr.status !== 200) {
                alert('An error occured. Code: ' + xhr.status + ', Message : ' + xhr.statusText);
            } else {
                result = JSON.parse(xhr.response);

                if(result.length == 0){
                    alert("Ville introuvable, code postal erroné ?")
                }
                else{

                    city.innerHTML = '';

                    //Pour chaque ville
                    result.forEach(ville => {
                        //ajouter la ville dans le select
                        let nomVille = ville.nom;
                        let code = ville.code;

                        let libelle = `${nomVille} (${code})`;
                        let option = document.createElement("option");
                        option.text = libelle;
                        option.value = libelle;

                        city.appendChild(option);
                    });
                }

            }
        };
    });

    xhr.send();
})