const url = new URL('https://api-adresse.data.gouv.fr/search');
const adresseInput = document.getElementById("address");

function manageResearch () {
    console.log('J\'ai été déclenchée')
    Promise.all([checkUsername(), checkCalcul()]).then(success, error);
}

function success(){
    alert("OK");
    searchAddress();
}

function error(){
    console.log("Une erreur est survenue");
}

function checkUsername(){
    let myPromise = new Promise(/*Executeur*/(resolve, reject) => { 
        
        var nom = prompt("Quel est votre nom ?"); //Appel à la fonction asynchrone
    
        if(nom == "admin"){
            //Appel de resolve() si la fonction asynchrone est considérée comme un succès (la Promise est résolue)
            resolve();
        } else {
            //Appel de reject() si la fonction asynchrone est considérée comme un échec (la Promise est rejetée)
            reject();
        }
    });

    return myPromise;
}

function checkCalcul(){
    let myPromise = new Promise(/*Executeur*/(resolve, reject) => { 
        
        var reponse = prompt("Combien font 6*7 ?"); //Appel à la fonction asynchrone
    
        if(42 == parseInt(reponse)){
            //Appel de resolve() si la fonction asynchrone est considérée comme un succès (la Promise est résolue)
            resolve();
        } else {
            //Appel de reject() si la fonction asynchrone est considérée comme un échec (la Promise est rejetée)
            reject();
        }
    });

    return myPromise;
}

function searchAddress(){
    let urlObj = new URLSearchParams({"q": adresseInput.value});
    url.search = urlObj.toString();
    fetch(url)
	.then(response => {
		return response.json();
	})
	.then(response => {
		fillResults(response);
	})
	.catch(error => {
        console.log("erreur : "+error)
    });

}

function fillResults(data) {
    let list = document.getElementById('results')
    list.innerHTML = ''
    if(undefined !== data.features) {
      data.features.forEach(function(element) {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(element.properties.label))
        list.appendChild(li)
      });
    }
  }