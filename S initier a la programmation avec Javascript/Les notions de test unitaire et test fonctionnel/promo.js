function promo (price, percent) { 
    if (isNaN(price) || isNaN(percent)) {
        return false
    }
    if (price == 0 || percent == 0) {
        return price
    }
    return price -(percent/100*price)
}
module.exports = promo