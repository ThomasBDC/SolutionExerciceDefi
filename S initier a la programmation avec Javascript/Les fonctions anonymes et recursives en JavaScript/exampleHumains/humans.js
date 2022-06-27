 /*
 object Humains = {
    nom : string;
    enfants: [] // stock une liste d'humains
 }
 */

 const family = [
    {
        nom : "Papi",
        enfants : [
            {
                nom:"Papa",
                enfants:[
                    {
                        nom: "Moi",
                        enfants: []
                    },
                    {
                        nom: "mon frère",
                        enfants: []
                    },
                    {
                        nom: "ma soeur",
                        enfants: [
                            {
                            nom: "Neuveu",
                            enfants: []
                            }
                        ]
                    }
                ]
            },
            {
                nom:"Tonton",
                enfants:[
                    {
                        nom: "Cousin",
                        enfants: []
                    },
                    {
                        nom: "Cousine",
                        enfants: []
                    },
                    {
                        nom: "Cousine qui est mamman",
                        enfants: [
                            {
                            nom: "Fils de ma cousine",
                            enfants: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

function getAllFamily(humain, tableauAPlat){
    tableauAPlat.push(humain.nom);
    humain.enfants.forEach(enfant => {
        getAllFamily(enfant, tableauAPlat);
    });
}

let familleAPlat = [];
family.forEach(ancetre => {
    getAllFamily(ancetre, familleAPlat);
});

console.log(familleAPlat);