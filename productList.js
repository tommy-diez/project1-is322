(function() {

let mockDB = [

    {pID: 123, name: "Hoodie", price: '35.00', img: "images/basichoodie.png", inStock: true, category: "sweatShirts"},
    {pID: 124, name: "Tee", price: '27.50', img: "images/basictee.png", inStock: true, category: "shirts"},
    {pID: 125, name: "Tank", price: '15.00', img: 'images/basictank.png', inStock: true, category: "shirts"},
    {pID: 126, name: "Woman's Tee", price: '25.00', img: 'images/basicteeW.png', inStock: true, category: "shirts"},
    {pID: 127, name: "Watch", price: '50.00', img: 'images/basicwatch.png', inStock: true, category: "accessories"},
    {pID: 128, name: "Long Sleeve", price: '25.00', img: 'images/longsleeve.png', inStock: false, category: "sweatShirts"},
    {pID: 126, name: "Woman's Tee", price: '25.00', img: 'images/basicteeW.png', inStock: true, category: "shirts"},
    {pID: 127, name: "Watch", price: '50.00', img: 'images/basicwatch.png', inStock: true, category: "accessories"},
    {pID: 128, name: "Long Sleeve", price: '25.00', img: 'images/longsleeve.png', inStock: false, category: "sweatShirts"},

];

document.querySelector('#inStock').addEventListener('change', function(event){
    let value = event.target.value === 'true';
    toggleInStock(value);
});

function generateProductCard(name, price, img, inStock) {

    let product = document.createElement('div');
    product.className = "card";
    let productImage = document.createElement('img');
    productImage.src = img;
    productImage.className = "card-img-top";
    product.appendChild(productImage);
    let productBody = document.createElement('div');
    productBody.className = "card-body";
    product.appendChild(productBody);
    let productName = document.createElement('h5');
    productName.className = "card-text";
    productName.innerHTML = name;
    productBody.appendChild(productName);

    if(!inStock) {
        let notInStockText = document.createElement('p');
        notInStockText.className = "card-text bg-danger";
        notInStockText.innerHTML = "Not in stock";
        productBody.appendChild(notInStockText)
    } else {
        let productPrice = document.createElement('p');
        productPrice.className = "card-text";
        productPrice.innerHTML = price;
        productBody.appendChild(productPrice);
    }

    return product;

}

function generateCards(results) {

    let productCards = document.querySelectorAll('.product-card');
    for(let x=0; x<productCards.length; x++) {
        productCards.item(x).innerHTML = "";
    }

    for(let x=0; x<results.length; x++) {
        let currentCard = productCards.item(x);
        currentCard.appendChild(generateProductCard(results[x].name, results[x].price, results[x].img, results[x].inStock));
    }

}

function toggleInStock(showInStock) {

    let filteredResults = mockDB.filter((result)=> {
        return showInStock || result.inStock;
    });

    generateCards(filteredResults);

}

generateCards(mockDB);

})();