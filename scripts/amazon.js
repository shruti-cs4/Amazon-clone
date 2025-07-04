const products = [{
  image: 'items/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Grey Athletic Cotton Socks-6 Pairs',
  rating: {
    star: 4.5,
    count: 86
  },
  priceCents: 1090 
},{
  image: 'items/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    star: 4.5,
    count: 56
  },
  priceCents: 799
},{
  image: 'items/products/6-piece-white-dinner-plate-set.jpg',
  name: '6 Piece White Dinner Plate Set',
  rating: {
    star: 4,
    count: 37
  },
  priceCents: 2067
}, {
  image: 'items/products/black-2-slot-toaster.jpg',
  name: '2 Slot Toaster - Black',
  rating: {
    star: 5,
    count: 2197
  },
  priceCents: 1899
},{
  image: 'items/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  rating: {
    star: 4,
    count: 127
  },
  priceCents: 2095
},{
  image: 'items/products/6-piece-non-stick-baking-set.webp',
  name: '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set',
  rating: {
    star: 4.5,
    count: 175
  },
  priceCents: 3499
}];


let productHTML = '';

products.forEach((product) => {
  const html = `
      <div class="product-container">
        <div class="product-img-container">
          <img class="product-img" src="${product.image}">
        </div>
        <div class="product-name">
          ${product.name}
        </div>
        <div class="product-rating-container">
          <img class="product-rating-img" src="items/ratings/rating-${product.rating.star * 10}.png">
          <div class="product-rating-count">
            ${product.rating.count}
          </div>
        </div>
        <div class="product-price">
          $ ${(product.priceCents / 100).toFixed(2)}
        </div>
        <div class="product-quantity-container">
          <select class="quantity-selector">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
            <option value="1">10</option>
          </select>
        </div>
      </div>`;
  productHTML += html;
});

document.querySelector('.js-product-grid').innerHTML = productHTML;