$(document).ready(() => {
    let constraintsText = {
        name: 'Le nom d\'un utilisateur ne peut contenir plus de 20 caractères et ne doit contenir que des lettres.',
        email: 'Il doit s\'agir d\'un e-mail valide',
        password: 'Le mot de passe ne peut contenir que des chiffres et des lettres. Il doit disposer d\'au moins 6 caractères',
        birthDate: 'L\'utilisateur doit être une personne majeure',
        comment: 'Le commentaire ne peut excéder plus de 200 caractères'
    }

    $('h1, legend').hide().show(1000);
    $("#form").animate({
        'width':'50%'
    }, 2000);

    $('input').each(function () {
        //Je crée la balise de texte
        let HelpText = constraintsText[$(this).attr('name')];
        HelpText = `<p class="help-text">${HelpText}</p>`;
        //Je l'ajoute sous mon input
        $(this).after(HelpText);
        
        //Je bind l'event sur le focus
        $(this).focus((e) => {
            $(this).next('.help-text').show(600);
        });

        //Quand on perd le focus, cacher l'élément
        $(this).focusout((e) => {
            $(this).next('.help-text').hide(600);
        });
    })

});

