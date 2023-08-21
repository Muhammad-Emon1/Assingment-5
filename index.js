let total = 0;

function eventHaldler(target) {
    const selectedItemsContainer = document.getElementById('product-list');

    const count = selectedItemsContainer.childElementCount

    // Showing Item name in the cart section
    const itemName = target.childNodes[1].childNodes[5].childNodes[1].innerText;
    const li = document.createElement("li");
    li.innerHTML = `
    <p class="text-2xl font-medium">${count + 1}. ${itemName}</p>
    `;
    li.classList.add('list-none')
    selectedItemsContainer.appendChild(li);

    // Calculating the price
    const price = target.childNodes[1].childNodes[5].childNodes[3].innerText.split(" ")[0];
    const totalPrice = document.getElementById("total-price-value");
    const finalPrice = document.getElementById("final-price-value");
    console.log(finalPrice.innerText);
    total = parseFloat(total) + parseFloat(price);
    totalPrice.innerText = total;
    finalPrice.innerText = total;

    const applyButton = document.getElementById('apply-btn');
    // Checking if elegible for discount
    console.log(applyButton);
    if (total >= 200) {
        console.log(applyButton);
        applyButton.removeAttribute('disabled')
    }
}

function discountMaker() {
    const couponInput = document.getElementById("coupon-input");
    const discountAmount = document.getElementById("discount-price-value");
    const finalAmount = document.getElementById("final-price-value");


    if (couponInput.value !== "SELL200") {
        alert("Invalid coupon");
        couponInput.value = "";
        return;
    }

    const previousTotalPrice = document.getElementById("total-price-value").innerText;

    const discount = parseFloat(previousTotalPrice) * 0.2;
    const discountTwoDecimal = discount.toFixed(2);

    const finalAmountAfterDiscount = parseFloat(finalAmount.innerText) - discountTwoDecimal;

    discountAmount.innerText = discountTwoDecimal;
    finalAmount.innerText = finalAmountAfterDiscount.toFixed(2);
    couponInput.value = "";

}