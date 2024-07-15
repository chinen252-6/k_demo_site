document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider__track');
    const slides = document.querySelectorAll('.slider__track__slide');
    const slideCount = slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
    const interval = 3000;

    // 最初と最後のスライドのクローンを作成
    const firstSlideClone = slides[0].cloneNode(true);
    const lastSlideClone = slides[slideCount - 1].cloneNode(true);
    track.appendChild(firstSlideClone);
    track.insertBefore(lastSlideClone, slides[0]);

    // 初期位置を調整
    track.style.transform = `translateX(${-slideWidth}px)`;
    currentIndex++;

    function moveToNextSlide() {
        currentIndex++;
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

        // 最後のスライドに到達したら
        if (currentIndex === slideCount +1) {
            setTimeout(() => {
                track.style.transition = 'none';
                track.style.transform = `translateX(${-slideWidth}px)`;
                currentIndex = 1;
            }, 3000); // スライドのトランジション時間に合わせる
        }
    }

        setInterval(moveToNextSlide, interval);
    });

