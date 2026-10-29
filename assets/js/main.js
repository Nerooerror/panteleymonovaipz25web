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


//обробка
const container = document.querySelector(".products-grid");

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