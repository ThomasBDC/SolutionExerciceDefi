const maxUser = 50;
const invites = 60;
if (invites > maxUser) {
    console.error("Le nombre d’invités est trop important");
} 
console.log(`Nombre d'invités : ${invites}`);