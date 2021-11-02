// Rifare l’esercizio della to do list come fatto assieme in classe:
// 1) stampare in pagina un item per ogni elemento contenuto in un 
//    array
// 2) ogni item ha una “x” associata: cliccando su di essa, l’item 
//    viene rimosso dalla lista
// 3) predisporre un input per aggiungere un nuovo item alla lista: 
//    digitando il tasto invio oppure ciccando su un pulsante, il 
//    testo digitato viene aggiunto alla lista

// Istanza di VueJs
Vue.config.devtools = true;
new Vue({
    el: "#root",
    // Variabili
    data: {
        // toDoList inizialmente vuota, come le nuove taskToDo
        toDoList: [],
        taskToDo: "",
    },
    methods: {
        // Function -> aggiungi un nuovo taskToDo alla toDoList[]
        addTaskToDo() {
            // Se il campo dell'input è vuoto non fare nulla
            // .trim -> elimina gli spazi vuoti prima e dopo
            if (this.taskToDo.trim() === "") {
                return;
            }
            // .some -> ritorna un booleano in base alle verifiche della funzione
            const alreadyAdd = this.toDoList.some((el) => {
                return el.toLowerCase() === this.taskToDo.trim().toLowerCase();
            })
            // Se è già presente non fare nulla
            if (alreadyAdd) {
                return;
            }
            // .push -> taskToDo in toDoList 
            this.toDoList.push(this.taskToDo.trim());
            // Svuota e mostra di nuovo il placeholder
            this.taskToDo = "";
        },
        // Function -> elimina l'elemento tramite l'index nell'array
        deleteTask(taskToDelete) {
            // .splice -> rimuove elementi già presenti modificando l'array
            this.toDoList.splice(taskToDelete, 1);
        }
    }
});