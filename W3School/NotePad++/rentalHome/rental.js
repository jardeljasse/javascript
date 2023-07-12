(function () {

    //Constructor house type

    function TypeHouse(type, price) {
        this.type = type;
        this.price = price;
    }

    const $house1 = new TypeHouse('House type: 3', 3000)
    const $house2 = new TypeHouse('House type: 5', 5000)
    const $house3 = new TypeHouse('House type: 7', 10000)

    const weeksDay = new Array(
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thrusday',
        'Friday',
        'Saturday'
    )
    const monthsDay = new Array(
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Agust',
        'Setember',
        'Octuber',
        'November',
        'December'
    )
    let expireOffer, currentDay, currentWeek, currentMonth, currentYear;

    const dt = new Date()

    currentDay = dt.getDate()
    currentWeek = weeksDay[dt.getDay()]
    currentMonth = monthsDay[dt.getMonth()]
    currentYear = dt.getFullYear()

    let optionHouse = 1;
    const months = 3
    let discount = '10'
    let totalValue
    let mgs = '';

    expireOffer = new Date(dt.getTime() + months * 31 * 24 * 60 * 60 * 1000)

    let elTipoDeCasa = document.querySelector('.tipoDeCasa')

    let months3 = (houseP, houseT) => {

        elTipoDeCasa = document.querySelector('.tipoDeCasa')
        totalValue = (houseP * months) * (100 - discount) / 100

        let dsc = (houseP * months) - totalValue

        msg = 'You paid: '.concat(houseT, '<br /><br />Total Price: ', totalValue, '.00 MZN , discounted: ' + dsc + '.00 MZN, with ' + discount + '%', '<br /><br />Payday: ', 'For ', months, ' month(s) on ', currentDay, ' ', currentWeek, ' ', currentMonth, ' ', currentYear, '<br /><br />Exipire Offer: ', 'On ', monthsDay[expireOffer.getMonth()])

        elTipoDeCasa.innerHTML = msg
    }
    const monthsLess3 = (houseP, houseT) => {
        elTipoDeCasa = document.getElementsByTagName('div')[0]
        totalValue = (houseP * months)

        let dsc = (houseP * months) - totalValue

        msg = 'You paid: '.concat(houseT, '<br />Total Price: ', totalValue, '.00 MZN , discounted: ' + dsc + '.00 MZN', '<br /><br />Payday: ', 'For ', months, ' month(s) on ', currentDay, ' ', currentWeek, ' ', currentMonth, ' ', currentYear, '<br />Exipire Offer: ', 'On ', monthsDay[expireOffer.getMonth()])

        elTipoDeCasa.innerHTML = msg
    }

    switch (optionHouse) {
        case 1:
            if (months >= 3) {

                months3($house1.price, $house1.type)

            } else {
                monthsLess3($house1.price, $house1.type)
            }
            break;
        case 2:
            if (months >= 3) {

                months3($house2.price, $house2.type)

            } else {

                monthsLess3($house2.price, $house2.type)

            }
            break;
        case 3:
            if (months >= 3) {

                months3($house3.price, $house3.type)

            } else {

                monthsLess3($house3.price, $house3.type)

            }
            break;
    }
})();