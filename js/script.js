

function spoller() {
    let currentPositionWidth = 0;
    let spoller = document.querySelector('.slider__items');
    let item = document.querySelector('.slider__item');
    let items = document.querySelectorAll('.slider__item');
    let previosItem = document.querySelector('.slider__body_next-item');
    let nextItem = document.querySelector('.slider__body_previos-item');
    let stepWidth = Number((item.getBoundingClientRect().width).toFixed(3));

    function nextSlide() {
        currentPositionWidth = currentPositionWidth - stepWidth;
        spoller.style.right = currentPositionWidth + 'px';
        jumpItemBack()
    }
    function previosSlide() {
        currentPositionWidth = currentPositionWidth + stepWidth;
        spoller.style.right = currentPositionWidth + 'px';
    }

    function jumpItemBack() {
        let positionSlider = (Number((spoller.style.right).slice(0,-2))).toFixed(3);
        let currentElementPosition = Math.round(Number((Number(positionSlider) / stepWidth) % items.length));
        let currentRatio = Math.abs(Math.round(Math.floor(Number(positionSlider)/Number(stepWidth)/items.length)));
        console.log([items.length + currentElementPosition]);
        console.log(currentElementPosition);
        console.log(currentRatio);
        
        if (currentElementPosition  == 0){
            currentElementPosition = currentElementPosition - items.length;
        }
        console.log(currentElementPosition);

        
        
        items[items.length + currentElementPosition].style.right = (Number(stepWidth * (items.length)) * currentRatio).toFixed(3) + 'px';

        
        }

    function scroll() {
    document.addEventListener("click",function (e){
        const targetElement = e.target;
        // console.log(targetElement);

            if(targetElement === previosItem){
                nextSlide();
            }
            if(targetElement === nextItem){
                previosSlide()
            }
        });
    };
    scroll();
}
spoller()





