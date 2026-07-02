const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const slider = document.querySelector('.nav-slider'); 

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            
            navLinks.forEach(link => link.classList.remove('active'));
            
            const activeLink = document.querySelector(`nav a[href="#${currentId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                
                if (slider) {
                    slider.style.width = `${activeLink.offsetWidth}px`;
                    slider.style.height = `${activeLink.offsetHeight}px`;
                    slider.style.left = `${activeLink.offsetLeft}px`;
                    slider.style.top = `${activeLink.offsetTop}px`;
                }
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

window.addEventListener('scroll', function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
});