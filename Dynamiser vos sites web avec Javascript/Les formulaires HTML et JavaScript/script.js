const form = document.getElementById("monformulaire");

function validateRequired(id, nomDuChamps){
    let value = document.getElementById(id).value;
    let errorMessageSpan = document.getElementById(id+"ErrorMessage");
    if(value == ''){
        let errorText =nomDuChamps+' obligatoire \n'; 
        errorMessageSpan.innerHTML=errorText;
        return errorText;
    }
    else{
        errorMessageSpan.innerHTML = '';
        return '';
    }
}

function validateMinimumLength(id, minimumLength, nomDuChamps){
    let value = document.getElementById(id).value;
    let errorMessageSpan = document.getElementById(id+"ErrorMessage");
 
    if(value.length < minimumLength){
        let errorText =nomDuChamps +' doit avoir une taille de plus de '+minimumLength+' caractères \n';
        errorMessageSpan.innerHTML=errorText;
        return errorText;
    }
    else{
        errorMessageSpan.innerHTML = '';
        return '';
    }
}

function validateDuplicate(id, idDuplicate, nomDuChamps){
    let value = document.getElementById(id).value;
    let valueDuplicate = document.getElementById(idDuplicate).value;
    let errorMessageSpan = document.getElementById(idDuplicate+"ErrorMessage");
    if(value != valueDuplicate){
        let errorText =nomDuChamps +' et '+nomDuChamps+' de confirmation doivent être identiques \n';
        errorMessageSpan.innerHTML=errorText;
        return errorText;
    }
    else{
        errorMessageSpan.innerHTML = '';
        return '';
    }
}

form.addEventListener("submit", (event => {
    let errorMessage = validateRequired("identifiant", "Identifiant");
    errorMessage += validateMinimumLength("password", 6, "Mot de passe");
    errorMessage += validateRequired("email", "Email");
    errorMessage += validateRequired("email-confirm", "Email de confirmation");
    errorMessage += validateDuplicate("email", "email-confirm", "Email");
    if(errorMessage != ''){
        event.preventDefault();
    }
}));