let cart = []
let total = 0;

function addToCart(name, price, inputId) {
    let quantity = parseInt(document.getElementById(inputId).value);

    if (!isNaN(quantity) && quantity > 0) {
        let item = {
            name: name,
            price: price,
            quantity: quantity
        };

        let existingItem = cart.find(i => i.name === item.name);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push(item);
        }

        total += price * quantity;
        updateCart();
    }
}

function removeFromCart(index) {
    total -= cart[index].price * cart[index].quantity;
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cartitem");
    let totalElement = document.getElementById("carttotal");

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.quantity} = SEK${(item.price * item.quantity).toFixed(2)}`;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Ta Bort";
        removeButton.onclick = function () { removeFromCart(index); };

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });

    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert("Tack för dit köp!");
}