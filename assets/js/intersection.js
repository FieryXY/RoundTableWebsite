//Intersection Observer API
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
        }
    });
}
let observer = new IntersectionObserver(callback, options);
setupObserver();

function setupObserver() {
    let siteContentEntries = document.getElementsByClassName("description");
    for(let i = 0; i < siteContentEntries.length; i++) {
        observer.observe(siteContentEntries[i]);
    }
}