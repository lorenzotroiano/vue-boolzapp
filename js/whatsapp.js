
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto




const { createApp } = Vue;

createApp({
    data() {
    return {

        // creare array con un tot di frasi per farle inserire dal pc dopo un secondo che invio messaggio
        frasiRandom: [
            'Ciao',
            'Come stai?',
            'OK, va benissimo così',
          ],

        //   click risulta null
        click: null,
        // creiamo proprietà vuota da inserire nell'input di cerca o avvia chat
        searchText: "",

        // creiamo proprietà vuota da inserire nell'input dove si inviano messaggi nella chat"
        newMessage: "",

        // creo prorpietà con valore 0 che poi cambierà con il cambiare dell'elemento, all'inizio sarà la proprietà attiva di quel momento
        activeUser: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar2.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar5.jpeg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/img_avatar1.png',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/img_avatar3.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/img_avatar4.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/avatar2.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'img/avatar5.jpeg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'img/avatar2.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
        
    }
    },


    methods: {

        // do un nome alla funzione, che ha come argomento indice, che poi verrà sostituito con index inserito nel v-for in html
      scegliChat(indice){

        // qui dico che activeUser viene settato al valore dell'indice (index in html), quindi il valore cambia in base agli elementi presenti nell'array 
        this.activeUser = indice;
       
      },

    //   do un nome alla funzione senza argomento, serve x aggiungere messaggi
      aggiungiMessage(){

        // creo condizione dove dico che questo new messagge se è diverso da vuoto e se ha spazi vuoti, allora avverrà qualcosa
        if(this.newMessage != "" && this.newMessage.trim()){

            // se newMess è vuoto l'user invia un messaggio che verrà pushato nell'array di obj contenente il newMessage che avrà un nuovo valore che dipenderà da ciò che scrive l'user
            this.contacts[this.activeUser].messages.push({message: this.newMessage, status: 'sent', date: '10/01/2020 15:51:00'});



            // creo funzione a tempo, con il setTimeout usando arrow function
            setTimeout(() => {

                // creo constante per generare frasi random presenti nell'array FRASIRANDOM
                const randomIndex = Math.floor(Math.random() * this.frasiRandom.length);
                const randomPhrase = this.frasiRandom[randomIndex];
                // stessa funziona precedente, solo che in questo caso, riceverò un messaggio fisso "ok"  dopo che l'user ha inviato un messaggio
                this.contacts[this.activeUser].messages.push({
                  message: randomPhrase,
                  status: 'received',
                  date: '10/01/2020 15:51:01'
                });
                // tempo di attesa per la risposta
              }, 1000);
        } 

      
        // azzerro ciò che sta scritto dentro l'input in cui invio messaggio
        this.newMessage = "";
      },

    //   funzione che mi serve x creare il dropdown usando come argomento indice ovvero (index)
      dropDown(indice) {
      // Se l'indice del click è uguale all'indice corrente, allora il click diventa null
        if (this.click === indice) {
          this.click = null;
        } else {
        // Altrimenti, l'indice del click diventa l'indice corrente
          this.click = indice;
        }
        
        
    },

    // creare funzione x cancellare il messaggio cliccato per far aprire il dropdown
    cancellaMessaggio(indice){
          // Rimuove il messaggio dall'array di messaggi del contatto attivo
        this.contacts[this.activeUser].messages.splice(indice, 1);

        // inserire click = null per far scomparire il dropdown
        this.click = null;
    },
    
      
    },

    // è una proprietà "dinamica"/ speciale di vue.js che fa un lavoro al posto nostro, in sostanza si occupa di fare calcoli al posto nostro in modo dinamico e automatico in base a ciò che noi gli diciamo di fare
    computed: {

        // creo proprietà per filtrare array contacts
        filteredContacts() {
        // creo una variabile const che conterrà il valore inserito nell'input che ha il v-model searchText utilizzando metodi .toLowerCase che serve per rendere minuscolo il testo e metodo .trim che serve per togliere gli spazi
          const filterText = this.searchText.toLowerCase().trim();

        //   creo la condizione dicendo che se filtertext non c'è (non viene scritto nulla nell'input) allora ritornerà il valore dell'array obj contacts (l'array totale, principale)
          if (!filterText) {
            return this.contacts;
          } 
        //   altrimenti, se si scrive qualcosa, ritornerà l'array contacts filtrato dove verranno selezionati gli elementi dell'array prendendo la proprietà name resa tutta in minuscolo attraverso il metodo tolowerCase e poi aggiungo il metodo .includes(filtertext)
        // quindi in questo caso, qualsiasi valore inserirò nell'input di cerca contatto mi apparirà quel valore che ha incluso ciò che io ho scritto dentro l'input
          return this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(filterText)
          );
        }
      },

    //   si occupa di osservare i cambiamenti nella proprietà activeUser e di eseguire un'azione quando viene modificata.
      watch: {
        activeUser() {
          this.click = null; // Chiudi la tendina quando cambia la chat attiva
        }
      }

}).mount("#app")





