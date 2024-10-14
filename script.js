// DEVO CALCOLARE IL PREZZO DEL BIGLIETTO DEL TRENO IN BASE ALL'ETA ED AL NUMERO DI KM PERCORSI 

// CHIEDO AL NOSTRO UTENTE DI INSERIRE KM PERCORSI ED ETA 

const expectedKm = parseInt(prompt("Inserisci i Km che prevedi di percorrere nel tuo viaggio"))
const yourAge = parseInt(prompt("Inserisci la tua Età"))

console.log(expectedKm , yourAge)

// CALCOLO IL PREZZO BASE DEL BIGLIETTO

const basePrice = 0.21 * expectedKm
console.log ('Il prezzo base del tuo viaggio è di €' + basePrice)