// 별 보기 가이드 탭
const tabs = document.querySelectorAll(".guide-tabs li");
const cards = document.querySelectorAll(".guide-content li");

function showGuide(index) {
    // 1. 전부 on 빼기
    tabs.forEach((tab) => tab.classList.remove("on"));
    cards.forEach((card) => card.classList.remove("on"));
    // 2. 선택한 번호에만 on 붙이기
    tabs[index].classList.add("on");
    cards[index].classList.add("on");
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showGuide(index));
});
cards.forEach((card, index) => {
    card.addEventListener("click", () => showGuide(index));
});

const body = document.querySelector('body')
const topBtn = document.querySelector('.top')
const mNavBtn = document.querySelector('.mob-nav-btn')
const navBtns = document.querySelectorAll('nav ul li a')

console.log(navBtns.length)
navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()

        const id = btn.getAttribute('href')
        const target = document.querySelector(id)
        const headerH = document.querySelector('header').offsetHeight
        window.scrollTo({
            top: target.offsetTop - headerH,
            behavior: 'smooth'
        })
        body.classList.remove('m-nav-open')

    })
})






const swiper = new Swiper('.hero-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});






window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        body.classList.add('scroll')

    } else {

        body.classList.remove('scroll')
    }
})

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

mNavBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('m-nav-open')
})
const animateElements = document.querySelectorAll('.post, #guides, .photos li, .profile');

animateElements.forEach(el => {
    el.classList.add('animate-el');
});

const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 화면에 들어오면 애니메이션 실행 (active 추가)
            entry.target.classList.add('active');
        } else {
            // 화면에서 완전히 벗어나면 클래스를 제거해서, 나중에 다시 스크롤할 때 또 애니메이션이 실행되게 함!
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

animateElements.forEach(el => {
    observer.observe(el);
});