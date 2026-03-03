const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cards = document.querySelectorAll('.card');


function filterSkins() {
    const text = searchInput.value.toLowerCase();
   
    cards.forEach(card => {
        const name = card.getAttribute('data-name');
        // Якщо назва містить текст з пошуку - показуємо, якщо ні - ховаємо
        if (name.includes(text)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


searchBtn.addEventListener('click', filterSkins);
searchInput.addEventListener('input', filterSkins); // Живий пошук під час друку




const cartList = document.getElementById('cartList');
const totalPriceElement = document.getElementById('totalPrice');
let total = 0;


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const name = card.querySelector('p').innerText;
        const price = parseFloat(card.getAttribute('data-price'));


        // Створюємо рядок у кошику
        const li = document.createElement('li');
        li.innerText = `✔️ ${name} - ${price}$`;
        cartList.appendChild(li);


        // Рахуємо ціну
        total += price;
        totalPriceElement.innerText = total.toFixed(2);
       
        // Повідомлення для новачка
        console.log("Додано в кошик: " + name);
    });
});
