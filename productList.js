(function() {

let mockDB = [

    {pID: 123, name: "Hoodie", price: '35.00', img: "images/basichoodie.png", inStock: true, category: "sweatShirts"},
    {pID: 124, name: "Tee", price: '27.50', img: "images/basictee.png", inStock: true, category: "shirts"},
    {pID: 125, name: "Tank", price: '15.00', img: 'images/basictank.png', inStock: true, category: "shirts"},
    {pID: 126, name: "Woman's Tee", price: '25.00', img: 'images/basicteeW.png', inStock: true, category: "shirts"},
    {pID: 127, name: "Watch", price: '50.00', img: 'images/basicwatch.png', inStock: true, category: "accessories"},
    {pID: 128, name: "Long Sleeve", price: '25.00', img: 'images/longsleeve.png', inStock: false, category: "sweatShirts"},

];

function generateProductCard(name, price, img, inStock) {

    let card = document.createElement('div');
    card.className = "card";
    let cardImage = document.createElement('img');
    cardImage.src = img;
    cardImage.className = "card-img-top";
    card.appendChild(cardImage);
    let cardBody = document.createElement('div');
    cardBody.className = "card-body";
    card.appendChild(cardBody);
    let cardName = document.createElement('h5');
    cardName.className = "card-text";
    cardName.innerHTML = name;
    cardBody.appendChild(cardName);

    return card;

}

function generateCards(results) {

    let productCards = document.querySelectorAll('.product-card');

    for(let x=0; x<productCards.length; x++) {
        let currentCard = productCards.item(x);
        currentCard.innerHTML = "";
        currentCard.appendChild(generateProductCard(results[x].name, results[x].price, results[x].img, results[x].inStock));
    }

}

generateCards(mockDB);

})();