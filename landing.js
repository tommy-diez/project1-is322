var activeImageIndex = 0;

function changeActiveImage(activeImage) {

    var images = document.querySelectorAll('img');
    images.item(activeImageIndex).classList.remove('active');
    changeImageIndex();
    images.item(activeImageIndex).className = 'active';

}

function changeImageIndex() {
    if(activeImageIndex !== 2) {
        activeImageIndex = activeImageIndex + 1
    } else {
        activeImageIndex = 0;
    }
}


setInterval(changeActiveImage, 3000);