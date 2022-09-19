const workers = [
    {name: 'Benjamin', age: 25, nbHour: 35, alert: function(){ return 'employé : '+this.name+', heures : '+this.nbHour }},
    {name: 'Luc', age: 45, nbHour: 36, alert: function(){ return 'employé : '+this.name+', heures : '+this.nbHour }},
    {name: 'Marie', age: 23, nbHour: 35, alert: function(){ return 'employé : '+this.name+', heures : '+this.nbHour }},
    {name: 'Jeanne', age: 36, nbHour: 30, alert: function(){ return 'employé : '+this.name+', heures : '+this.nbHour }},
    {name: 'Jean', age: 37, nbHour: 35, alert: function(){ return 'employé : '+this.name+', heures : '+this.nbHour }}
  ]


let alerte = '';

workers.forEach(worker => {
    if(worker.nbHour != 35){
        alerte += worker.alert()
        alerte += '\n'
    }
})

alert(alerte);