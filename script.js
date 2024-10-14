// DEVO CALCOLARE IL PREZZO DEL BIGLIETTO DEL TRENO IN BASE ALL'ETA ED AL NUMERO DI KM PERCORSI 

// CHIEDO AL NOSTRO UTENTE DI INSERIRE KM PERCORSI ED ETA 

const expectedKm = parseInt(prompt("Inserisci i Km che prevedi di percorrere nel tuo viaggio"))
const yourAge = parseInt(prompt("Inserisci la tua Età"))

console.log(expectedKm , yourAge)

// CALCOLO IL PREZZO BASE DEL BIGLIETTO

const basePrice = 0.21 * expectedKm
console.log ('Il prezzo base del tuo viaggio è di €' + basePrice)

// CALCOLO LE VARIE SCONTISTICHE 

let discountTwenty = basePrice * (20 / 100)
let discountFourty = basePrice * (40 / 100)
console.log ('Lo sconto se si è minorenni è di €' + discountTwenty + ',' + 'lo sconto se si è over65 è di €' + discountFourty)

// CALCOLO IL PREZZO SCONTATO CHE SI ANDRA' A PAGARE 

let finalPrice = ''

if ( yourAge < 18) {
    finalPrice = basePrice - discountTwenty
} else if (yourAge>65) {
    finalPrice = basePrice - discountFourty
} else {
    finalPrice = basePrice
}

console.log ('Gentile passeggero, il prezzo finale del tuo biglietto è di €' + finalPrice)