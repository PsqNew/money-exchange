 module.exports =  function makeExchange(currency) {
    let coinValue ={"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};
    let count;
    let purseCoins = {};
    if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    }
    while (currency > 0) {
        for (let i in coinValue){
            count = Math.floor(currency/coinValue[i]);
            if (count >= 1) {
                purseCoins[i] = count;
                currency -= count * coinValue[i];
            }
        }
    }
    return purseCoins;
};