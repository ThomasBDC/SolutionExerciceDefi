const colorpicker = document.getElementById('colorpicker');

//liste (tableau) de H1
const titles = document.getElementsByTagName("h1");
const uls = document.getElementsByTagName("ul"); 
const articles = document.getElementsByTagName("article");
const actives = document.getElementsByClassName("active");
const badges = document.getElementsByClassName("circle");

changeColor = (ev) => {
   const color = ev.target.value;
   console.log(color)
   // votre code ici

   //Je veux changer la couleur du H1
   for(const MonTitre of titles) {
      MonTitre.style.color = color;
   };

   for(const ul of uls){
      ul.style.backgroundColor = color;
   }
   
   for(const article of articles){
      article.style.borderColor = color;
   }

   for(const active of actives){
      active.firstChild.style.color = color;
   }

   for(const badge of badges){
      badge.style.backgroundColor= color;
   }
}

colorpicker.addEventListener('change', changeColor);