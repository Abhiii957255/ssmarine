function showGallery(category) {

    let html = "";

    if (category === "interior") {
        for (let i = 1; i <= 5; i++) {
            html += `<img src="Interior-${i}.jpg" alt="Interior ${i}" onclick="openLightbox(this.src)">`;
        }
    }

    if (category === "insulation") {
        for (let i = 1; i <= 5; i++) {
            html += `<img src="Insulation-${i}.jpg" alt="Insulation ${i}" onclick="openLightbox(this.src)">`;
        }
    }

    if (category === "accommodation") {
        for (let i = 1; i <= 5; i++) {
            html += `<img src="Accomodation-${i}.jpg" alt="Accommodation ${i}" onclick="openLightbox(this.src)">`;
        }
    }

    if (category === "furniture") {
        for (let i = 1; i <= 5; i++) {
            html += `<img src="Furniture-${i}.jpg" alt="Furniture ${i}" onclick="openLightbox(this.src)">`;
        }
    }

    if (category === "building") {
        for (let i = 1; i <= 5; i++) {
            html += `<img src="Building-${i}.jpg" alt="Building ${i}" onclick="openLightbox(this.src)">`;
        }
    }

    document.getElementById("gallery-images").innerHTML = html;
}

// Default gallery
showGallery("interior");
function openLightbox(src){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}