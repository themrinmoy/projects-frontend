// Assuming you have an array of product objects:
const products = [
    { name: "Helmet X", price: 59.99, image: "shoes.png" },
    // ... more products
];

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
    `;
    productGrid.appendChild(productCard);
});
