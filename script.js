// Zamienia <i data-lucide="..."> na ikonki z biblioteki Lucide
lucide.createIcons();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


// ===== JĘZYK (EN / PL) =====

const meta = {
    en: {
        title: 'Jakub Serafin — Applied Computer Science student',
        description: 'Portfolio of Jakub Serafin, Applied Computer Science student at Jagiellonian University in Kraków. Projects, skills and contact.'
    },
    pl: {
        title: 'Jakub Serafin — student Informatyki Stosowanej',
        description: 'Portfolio Jakuba Serafina, studenta Informatyki Stosowanej na Uniwersytecie Jagiellońskim w Krakowie. Projekty, umiejętności i kontakt.'
    }
};

function setLanguage(lang) {
    // CSS sam chowa teksty w drugim języku na podstawie <html lang="...">
    document.documentElement.lang = lang;

    document.title = meta[lang].title;
    document.querySelector('meta[name="description"]').setAttribute('content', meta[lang].description);

    // Opisy obrazków i etykiety dla czytników ekranu
    document.querySelectorAll('[data-alt-en]').forEach(function (img) {
        img.alt = img.dataset['alt' + (lang === 'pl' ? 'Pl' : 'En')];
    });
    document.querySelectorAll('[data-label-en]').forEach(function (el) {
        el.setAttribute('aria-label', el.dataset['label' + (lang === 'pl' ? 'Pl' : 'En')]);
    });

    try {
        localStorage.setItem('lang', lang);
    } catch (e) {
        // prywatne okno: wybór się po prostu nie zapamięta
    }

    restartRotatingText();
}

document.querySelectorAll('[data-set-lang]').forEach(function (button) {
    button.addEventListener('click', function () {
        setLanguage(button.dataset.setLang);
    });
});


// ===== ZMIENIAJĄCE SIĘ SŁOWA („I build ...”) =====

const rotating = document.getElementById('rotatingText');
let wordIndex = 0;

function getWords() {
    const lang = document.documentElement.lang;
    return rotating.dataset['words' + (lang === 'pl' ? 'Pl' : 'En')].split('|');
}

function restartRotatingText() {
    wordIndex = 0;
    rotating.textContent = getWords()[0];
}

function showNextWord() {
    const words = getWords();
    wordIndex = (wordIndex + 1) % words.length;

    if (reduceMotion) {
        rotating.textContent = words[wordIndex];
        return;
    }

    // słowo znika w górę, podmieniamy tekst, nowe słowo się pojawia
    rotating.classList.add('hide');
    setTimeout(function () {
        rotating.textContent = words[wordIndex];
        rotating.classList.remove('hide');
    }, 300);
}

setInterval(showNextWord, 2600);


// ===== PASEK POSTĘPU =====

const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', function () {
    const scrolled = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = (scrolled / height) * 100 + '%';
});


// ===== AKTYWNA SEKCJA W MENU =====

const sections = document.querySelectorAll('main section');
const navs = document.querySelectorAll('.nav');
let activeId = 'start';

// Przesuwa pigułkę pod link aktywnej sekcji (w menu na górze i na dole na telefonie)
function moveSliders() {
    navs.forEach(function (nav) {
        const slider = nav.querySelector('.nav-slider');
        const activeLink = nav.querySelector('a[href="#' + activeId + '"]');

        nav.querySelectorAll('.nav-link').forEach(function (link) {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });

        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'true');

        slider.style.left = activeLink.offsetLeft + 'px';
        slider.style.top = activeLink.offsetTop + 'px';
        slider.style.width = activeLink.offsetWidth + 'px';
        slider.style.height = activeLink.offsetHeight + 'px';
    });
}

// Sekcja jest aktywna, gdy przecina pas na wysokości ok. 40% ekranu
const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            activeId = entry.target.id;
            moveSliders();
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(function (section) {
    sectionObserver.observe(section);
});

window.addEventListener('resize', moveSliders);
// po załadowaniu czcionek linki mogą mieć inną szerokość
document.fonts.ready.then(moveSliders);


// ===== WJEŻDŻANIE ELEMENTÓW PRZY PRZEWIJANIU =====

const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
});


// ===== PRZYCISKI PRZYCIĄGANE DO KURSORA =====

const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (hasMouse && !reduceMotion) {
    document.querySelectorAll('.magnetic').forEach(function (button) {
        button.addEventListener('mousemove', function (e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            button.style.transform = 'translate(' + x * 0.25 + 'px, ' + y * 0.25 + 'px)';
        });

        button.addEventListener('mouseleave', function () {
            button.style.transform = '';
        });
    });
}


// ===== KOPIOWANIE ADRESU E-MAIL =====

const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', function () {
    navigator.clipboard.writeText(copyButton.dataset.email).then(function () {
        copyButton.classList.add('copied');
        setTimeout(function () {
            copyButton.classList.remove('copied');
        }, 2000);
    });
});


// ===== START =====

document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(document.documentElement.lang);
moveSliders();
