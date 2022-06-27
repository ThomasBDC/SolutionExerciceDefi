createPage = () => {

    createBlocs = (blocs) => {
      const numberBlocks = Math.floor(Math.random() * 5) + 1
      for (let i = 0; i < numberBlocks; i++) {
        blocs.push({id: compteur, blocs: []})
        compteur++;
      }
    }
  
    const page = {blocs: []}
    let compteur = 1;
    createBlocs(page.blocs)
    page.blocs.forEach(bloc => {
      createBlocs(bloc.blocs)
      bloc.blocs.forEach(bloc => {
        createBlocs(bloc.blocs)
        bloc.blocs.forEach(bloc => {
          createBlocs(bloc.blocs)
        })
      })
    })
    return page
  }
  
  
//Je veux un tableau avec tous les id de mon objet page
function getBloc(blocObj, tabIdBloc){
    //J'ouvre mon premier bloc, je sauvegarde donc son id
    tabIdBloc.push(blocObj.id);
    
    blocObj.blocs.forEach(element => {
        getBloc(element, tabIdBloc);
    });
}


const page = createPage();
console.log(page);
  
let tableauId = [];
page.blocs.forEach(bloc => {
    getBloc(bloc, tableauId);
});

let select = document.getElementById("selectBloc");
tableauId.forEach(idbloc =>
    {
        let opt = document.createElement("option");
        opt.value = idbloc;
        opt.text = idbloc;

        select.add(opt, null);
    })

console.log(tableauId);
