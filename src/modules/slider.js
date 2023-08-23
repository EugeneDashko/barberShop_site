
export const startSlider = () => {
    const sliderList = document.querySelector('.slider__list');
    const sliderItems = document.querySelectorAll('.slider__item');
    const btnPrevSlide = document.querySelector('.slider__arrow_left');
    const btnNextSlide = document.querySelector('.slider__arrow_right');

    let activeSlide = 1;
    let position = 0;

    const checkSlider = () => {
        console.log('activeSlide + 2: ',activeSlide + 2);
        console.log('sliderItems.length: ', sliderItems.length);
        if ((activeSlide + 2 === sliderItems.length && document.documentElement.offsetWidth > 560) ||
            activeSlide === sliderItems.length) {
            btnNextSlide.style.display = "none";
        } else {
            btnNextSlide.style.display = "";
        }

        if (activeSlide === 1) {
            btnPrevSlide.style.display = "none";
        } else {
            btnPrevSlide.style.display = "";
        }
    };

    checkSlider(); // ПРИ ЗАГРУЗКЕ СТРАНИЦЫ УДАЛЯЮ ЛЕВУЮ СТРЕЛКУ

    const nextSlide = () => {
        sliderItems[activeSlide]?.classList.remove('slider__item_active');
        position = -sliderItems[0].clientWidth * activeSlide;
        sliderList.style.transform = `translateX(${position}px)`;

        sliderItems[activeSlide+=1]?.classList.add('slider__item_active');

        checkSlider();

    }

    const prevSlide = () => {
        sliderItems[activeSlide]?.classList.remove('slider__item_active');
        position = -sliderItems[0].clientWidth * (activeSlide-2);
        sliderList.style.transform = `translateX(${position}px)`;

        sliderItems[activeSlide-=1]?.classList.add('slider__item_active');

        checkSlider();
    }

    btnPrevSlide.addEventListener('click',prevSlide );
    btnNextSlide.addEventListener('click',nextSlide );




//чтобы слайдер не ломался при resize:
    window.addEventListener('resize', () => {
        if(activeSlide + 2 > sliderItems.length && document.documentElement.offsetWidth > 560) {
            activeSlide = sliderItems.length - 2;
            sliderItems[activeSlide]?.classList.add('slider__item_active')
        }

        position = -sliderItems[0].clientWidth * (activeSlide-1);
        sliderList.style.transform = `translateX(${position}px)`;
        checkSlider();
    })
}