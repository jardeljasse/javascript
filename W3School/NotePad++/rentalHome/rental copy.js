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

    currentDay = [dt.getDate()]
    currentWeek = weeksDay[dt.getDay()]
    currentMonth = monthsDay[dt.getMonth()]
    currentYear = dt.getFullYear()
    
    const months = 5
    let discount = 10
    let totalValue 
    let optionHouse = 1;
    let mgs = '';
    
    expireOffer = new Date(dt.getTime() + months * 31 * 24 * 60 * 60 * 1000)
    
    

    let elTipoDeCasa = document.querySelector('.tipoDeCasa')
    
    switch (optionHouse) {
        case 1:
            if (months >= 3) {
                elTipoDeCasa = document.querySelector('.tipoDeCasa')
                totalValue = ($house1.price * months) * (100 - discount) / 100

                let dsc = ($house1.price * months)  - totalValue

                msg = 'You paid: '.concat($house1.type, '<br /><br />Total Price: ', totalValue, '.00 MZN , discounted: '+dsc+'.00 MZN, with '+discount+'%', '<br /><br />Payday: ', 'For ', months ,' month(s) on ', currentDay, ' ', currentWeek, ' ', currentMonth, ' ', currentYear, '<br /><br />Exipire Offer: ', 'On ', monthsDay[expireOffer.getMonth()])

                elTipoDeCasa.innerHTML = msg
            } else {
                elTipoDeCasa = document.getElementsByTagName('div')[0]
                totalValue = ($house1.price * months)
                
                let dsc = ($house1.price * months)  - totalValue

                msg = 'You paid: '.concat($house1.type, '<br />Total Price: ', totalValue, '.00 MZN , discounted: '+dsc+'.00 MZN', '<br /><br />Payday: ', 'For ', months ,' month(s) on ', currentDay, ' ', currentWeek, ' ', currentMonth, ' ', currentYear, '<br />Exipire Offer: ', 'On ', monthsDay[expireOffer.getMonth()])

                elTipoDeCasa.innerHTML = msg
            }
            break;
        case 2:
            if (months >= 3) {
                totalValue = ($house2.price * months) * (100 - discount) / 100
                elTipoDeCasa.textContent = totalValue

                let dsc = ($house2.price * months)  - totalValue

                msg = 'You paid: '.concat($house2.type, '<br /><br />Total Price: ', totalValue, '.00 MZN , discounted: '+dsc+'.00 MZN, with '+discount+'%', '<br /><br />Payday: ', 'For ', months ,' month(s) on ', currentDay, ' ', currentWeek, ' ', currentMonth, ' ', currentYear, '<br /><br />Exipire Offer: ', 'On ', monthsDay[expireOffer.getMonth()])

                elTipoDeCasa.innerHTML = msg
            } else {
                elTipoDeCasa = document.getElementsByTagName('div')[0]
                totalValue = ($house2.price * months)
                
                let dsc = ($house2.price * months)  - totalValue

                msg = 'You paid: '.concat($house2.type, '<br />Total Price: ', totalValue, '.00 MZN , discounted: '+dsc+'.00 MZN', '<br /><br />Payday: ', 'For ', months ,' month(s) on ', currentDay, ' ', currentWeek, ' ', currentMonth, ' ', currentYear, '<br />Exipire Offer: ', 'On ', monthsDay[expireOffer.getMonth()])


                elTipoDeCasa.innerHTML = msg
            }
            break;
        case 3:
            if (months >= 3) {
                elTipoDeCasa = document.querySelector('.tipoDeCasa')
                totalValue = ($house3.price * months) * (100 - discount) / 100
                elTipoDeCasa.textContent = totalValue

                let dsc = ($house3.price * months)  - totalValue

                msg = 'You paid: '.concat($house3.type, '<br /><br />Total Price: ', totalValue, '.00 MZN , discounted: '+dsc+'.00 MZN, with '+discount+'%', '<br /><br />Payday: ', 'For ', months ,' month(s) on ', currentDay, ' ', currentWeek, ' ', currentMonth, ' ', currentYear, '<br /><br />Exipire Offer: ', 'On ', monthsDay[expireOffer.getMonth()])

                elTipoDeCasa.innerHTML = msg
            } else {
                elTipoDeCasa = document.getElementsByTagName('div')[0]
                totalValue = ($house3.price * months)
                
                let dsc = ($house3.price * months)  - totalValue

                msg = 'You paid: '.concat($house3.type, '<br />Total Price: ', totalValue, '.00 MZN , discounted: '+dsc+'.00 MZN', '<br /><br />Payday: ', 'For ', months ,' month(s) on ', currentDay, ' ', currentWeek, ' ', currentMonth, ' ', currentYear, '<br />Exipire Offer: ', 'On ', monthsDay[expireOffer.getMonth()])


                elTipoDeCasa.innerHTML = msg
            }
            break;
    }
})();