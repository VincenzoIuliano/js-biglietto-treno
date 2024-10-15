// DEVO CALCOLARE IL PREZZO DEL BIGLIETTO DEL TRENO IN BASE ALL'ETA ED AL NUMERO DI KM PERCORSI 

// CHIEDO AL NOSTRO UTENTE DI INSERIRE KM PERCORSI ED ETA 

const expectedKm = parseInt(prompt("Inserisci i Km che prevedi di percorrere nel tuo viaggio"))
const yourAge = parseInt(prompt("Inserisci la tua Età"))

console.log(expectedKm , yourAge)


// CONTROLLO CHE KM ED ETA SIANO VALIDI 

const dataIsValid = !isNaN(expectedKm) && !isNaN(yourAge) // boolean
const dataIsBiggerThanZero = expectedKm >= 0 && yourAge >= 0 // boolean

// RIASSEGNO BASE PRICE, CALCOLANDO GLI SCONTI PER FASCIA D'ETA'

if (dataIsValid && dataIsBiggerThanZero) {
    // CALCOLO IL PREZZO BASE DEL BIGLIETTO

    let basePrice = 0.21 * expectedKm
    console.log ('Il prezzo base del tuo viaggio è di €' + basePrice)

    // CALCOLO GLI SCONTI 
    
    if ( yourAge < 18) {
        let discountTwenty = basePrice * (20 / 100)
        basePrice = basePrice - discountTwenty
    } else if (yourAge>65) {
        let discountFourty = basePrice * (40 / 100)
        basePrice = basePrice - discountFourty
    } 
    
    // MOSTRO AL NOSTRO UTENTE QUALE PREZZO DOVRA' PAGARE IN BASE ALLA SCONTISTICA SPETTANTE
    
    console.log ('Gentile passeggero, il prezzo finale del tuo biglietto è di €' + basePrice.toFixed(2) )
} else {
    console.log ('I dati inseriti non sono validi')
}