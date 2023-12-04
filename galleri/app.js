const popup = document.getElementById("popup");
const popupImage = document.getElementById("imgPopup");
const imageCount = [1,2,3,4,5,6];
const galleri = document.getElementById("galleri");

imageCount.forEach(imageNumber => {
    const image = document.createElement("img");
    //image.src = `images/${imageNumber}.jpg`;
    image.src = `images/Placeholder.svg`;
    image.classList.add("hidden");
    galleri.appendChild(image);
    console.log(image);

    image.addEventListener("click", (e) => {
        e.preventDefault();

        popup.style.transform = "translateY(0)";
        //popupImage.src = `images/${imageNumber}.jpg`;
        popupImage.src = "images/Placeholder.svg";
        console.log("works")
    });
});

popup.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.transform = "translateY(-100%)";
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {threshold: 0.4});
    
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));