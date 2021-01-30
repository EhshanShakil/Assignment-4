const firstMinusBtn = document.querySelector('.first-class-minus');
const firstPlusBtn = document.querySelector('.first-class-plus');
const economyMinusBtn = document.querySelector('.economy-minus');
const economyPlusBtn = document.querySelector('.economy-plus');
const firstClassTicket = document.querySelector('.first-class-ticket-amount');
const economyTicket = document.querySelector('.economy-ticket-amount');

// First Class Plus Button Click Event
firstPlusBtn.addEventListener('click', function () {
    increaseCounter(firstClassTicket);
    totalPrice();
});

// First Class Minus Button Click Event
firstMinusBtn.addEventListener('click', function () {
    decreaseCounter(firstClassTicket);
    totalPrice();
});

// Economy Plus Button Click Event
economyPlusBtn.addEventListener('click', function () {
    increaseCounter(economyTicket);
    totalPrice();
});

// Economy Minus Button Click Event
economyMinusBtn.addEventListener('click', function () {
    decreaseCounter(economyTicket);
    totalPrice();
});

// Increase Spinner
function increaseCounter(itemPlus) {
    itemPlus.value++;
    itemPlus.value * 150;
}
// Decrease Spinner
function decreaseCounter(itemMinus) {
    let numberOfTicket = Number(itemMinus.value);

    if (!numberOfTicket || numberOfTicket < 0) {
        itemMinus.classList.add('error');
    } else {
        itemMinus.value--;
        itemMinus.value * 150;
    }
}

//Total Price
function totalPrice() {
    let getFirstClassPrice = firstClassTicket.value * 150;
    let getEconomyPrice = economyTicket.value * 100;
    let subTotal = (document.querySelector('.subtotal').textContent = getFirstClassPrice + getEconomyPrice);
    let userSubTotal = (document.querySelector('.user-subtotal').textContent = subTotal);
    let vat = (document.querySelector('.vat').textContent = Math.round(subTotal * 0.1));
    let userVat = (document.querySelector('.user-vat').textContent = vat);
    let total = (document.querySelector('.total').textContent = subTotal + vat);
    let userTotal = (document.querySelector('.user-total').textContent = total);
}

// Booking confirm Area
document.querySelector('.book-now').addEventListener('click', function () {
    const flyingFrom = document.querySelector('.flying-from').value;
    const flyingTo = document.querySelector('.flying-to').value;
    const flyingDeparture = document.querySelector('.flying-departure').value;
    const flyingReturn = document.querySelector('.flying-return').value;
    const firstTicket = document.querySelector('.first-class-ticket-amount').value;
    const economyTicket = document.querySelector('.economy-ticket-amount').value;
    
    document.querySelector('.booking-form').style.display = 'none';
    document.querySelector('.booking-details').style.display = 'block';
    document.querySelector('.user-flying-from').textContent = flyingFrom;
    document.querySelector('.user-flying-to').textContent = flyingTo;
    document.querySelector('.user-departure-date').textContent = flyingDeparture;
    document.querySelector('.user-return-date').textContent = flyingReturn;
    document.querySelector('.user-first-class').textContent = firstTicket;
    document.querySelector('.user-economy-class').textContent = economyTicket;
    totalPrice();

});
