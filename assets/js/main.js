//дані
const products = [
  {
    id: 1,
    title: "Ноутбук Apple MacBook Pro 16",
    price: 99999,
    category: "laptops",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Смартфон Samsung Galaxy S24",
    price: 39999,
    category: "smartphones",
    image: "https://via.placeholder.com/300x200",
  },


  {
    id: 3,
    title: "Планшет Samsung Galaxy Tab A11",
    price: 9999, 
    category: "tablet",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Apple iPhone 17 Pro Max",
    price: 67999,
    category: "smartphones",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Apple Watch SE 3",
    price: 16999,
    category: "smartwatches",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "Монітор 24 Xiaomi Monitor A24i",
    price: 4199,
    category: "monitor",
    image: "https://via.placeholder.com/300x200",
  },

  
];

let cart = [];


//обробка
const container = document.querySelector(".products-grid");

// ФУНКЦІЇ -----------------------------------------------------------------------------------
function updateUI() {
  const cartCounter = document.querySelector(".cart-counter");
  // Практично так само метод reduce для рахунку загальної кількості товарів (включаючи > 1 одного типу)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartCounter) {
    cartCounter.textContent = totalItems;
  }

  console.log("Поточний кошик:", cart);
  console.log("Загальна сума:", calculateTotal(), "грн");
}

function calculateTotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}

function addToCart(product) {
  // Перевіряємо (через метод find) чи існує вже такий товар
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    // Якщо товар вже в кошику, просто збільшуємо кількість у властивості `quantity`
    existingItem.quantity += 1;
  } else {
    // Інакше додаємо новий об'єкт у масив, встановлюючи початкову кількість = 1 (Spread оператор)
    cart.push({ ...product, quantity: 1 });
  }

  updateUI(); // Викликаємо оновлення екрану
}
// -----------------------------------------------------------------------------------

container.addEventListener("click", (event) => {
  // Якщо клік був на елементі з класом 'btn-buy'
  if (event.target.classList.contains("btn-buy")) {
    // 1. Отримуємо ID товару з data-атрибута кнопки (рядок конвертуємо в число)
    const productId = Number(event.target.dataset.id);

    // 2. Шукаємо весь об'єкт товару в оригінальному масиві `products`
    const selectedProduct = products.find((p) => p.id === productId);

    // 3. Додаємо в Кошик
    addToCart(selectedProduct);
  }});


// Використовуємо .map() щоб перетворити масив об'єктів на масив HTML-рядків
const htmlString = products.map((product) => {
    return `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">${product.price} грн</p>
            <button class="btn btn-buy" data-id="${product.id}">Купити</button>
        </article>
    `;
  })
  .join(""); // Об'єднуємо масив рядків в ОДИН великий текст

// Вставляємо згенерований текст на сторінку
container.innerHTML = htmlString;

