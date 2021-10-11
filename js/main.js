

//Chiedere all utente la sua età
const user_age = parseInt(prompt('Quanti anni hai?'));
console.log(user_age)


//Chiedere all utente quanti km vuole percorrere
const distance = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
//console.log(distance)


//Calcolare il prezzo del biglietto 
const priceForKm = 0.21;
const priceTicket = (distance * priceForKm)
//console.log(priceTicket)

//Applicare uno sconto in base all età
if (user_age < 18) {
    underageSale = (priceTicket * 25 / 100)
    //console.log(underageSale)
    priceSaleTicket = (priceTicket - underageSale)
    //console.log(priceSaleTicket)
}
else if (user_age > 65) {
    seniorSale = (priceTicket * 40 / 100)
    //console.log(seniorSale)
    priceSaleTicket = (priceTicket - seniorSale)
   //console.log(priceSaleTicket)
}

//Generare un output per l utente