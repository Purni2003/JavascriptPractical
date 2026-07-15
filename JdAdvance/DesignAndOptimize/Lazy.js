//Lazy Loading Images(with IntersectionObserver)
let image = document.querySelectorAll(".container img");

const observer = new IntersectionObserver(
    function ( entries, observer) {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add("loaded");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        root: null,
        threshold:0.1,
    }
);

image.forEach((img) => {
    observer.observe(img);
});