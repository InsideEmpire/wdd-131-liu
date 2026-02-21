const form = document.getElementById("payment");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cardNumber = document.querySelector("#card-num").value.trim();
    const month = document.querySelector('#exp-month').value.trim();
    const year = document.querySelector('#exp-year').value.trim();
    const cvv = document.querySelector("#card-cvv").value.trim();
    const holder = document.querySelector("#card-hld").value.trim();

    const cardRegex = /^\d{16}$/;
    const monthRegex = /^(0[1-9]|1[0-2])$/;
    const yearRegex = /^\d{2}$/;
    const cvvRegex = /^\d{3}$/;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!cardRegex.test(cardNumber)) {
        alert("Card number must be 16 digits.");
        return;
    }

    if (!nameRegex.test(holder)) {
        alert("Card holder name is invalid.");
        return;
    }

    if (!monthRegex.test(month) || !yearRegex.test(year)) {
        alert("Expiration date format is invalid.");
        return;
    }

    if (!cvvRegex.test(cvv)) {
        alert("CVV must be 3 digits.");
        return;
    }

    if (cardNumber !== "1234123412341234") {
        alert("Invalid credit card number.");
        return;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    const inputMonth = parseInt(month);
    const inputYear = parseInt(year);

    if (
        inputYear < currentYear ||
        (inputYear === currentYear && inputMonth < currentMonth)
    ) {
        alert("Card is expired.");
        return;
    }

    alert("Payment Successful! 🎉");
    form.reset();
});