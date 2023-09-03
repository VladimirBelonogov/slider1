function spoller() {
    let currentPositionslider = 0;
    let spoller = document.querySelector('.slider__items');
    let item = document.querySelector('.slider__item');
    let items = document.querySelectorAll('.slider__item');
    let scrollLeft = document.querySelector('.slider__body_scrollLeft');
    let scrollRight = document.querySelector('.slider__body_scrollRight');
    let widthStep = Number((item.getBoundingClientRect().width).toFixed(3));
    let steps = 0;

    function nextSlide() {
        currentPositionslider = currentPositionslider - widthStep;
        spoller.style.right = currentPositionslider + 'px';
        jumpItemBack();
    }
    function previosSlide() {
        currentPositionslider = currentPositionslider + widthStep;
        spoller.style.right = currentPositionslider + 'px';
        jumpItemNext();
    }

    function jumpItemBack() {
        let stepSlaider = Number(widthStep * (items.length));
        let stepConvert = steps % items.length;

        if (steps < 0) {
            let element = ((items.length - 1) + stepConvert);

            items[element].style.right = stepSlaider * Math.abs(Math.floor(currentPositionslider / stepSlaider).toFixed(3)) + 'px';
        }

        if (steps == 0) {
            let element = ((items.length - 1) + stepConvert);

            items[element].style.right = stepSlaider.toFixed(3) + 'px';
        }

        if (steps > 0) {
            let stepConvert2 = steps - 1;
            stepConvert = stepConvert2 % items.length;
            let element = ((items.length - 1) - ((items.length - 1) - stepConvert));
            let coefficient = Math.floor(steps / items.length - 0.01);

            items[element].style.right = (-stepSlaider * coefficient).toFixed(3) + 'px';
        }
        console.log(steps);
        steps = steps - 1;

        }

        function jumpItemNext() {
            let stepSlaider = Number(widthStep * (items.length));
            let stepConvert = steps % items.length;
            
            if (steps < 0) {
                let element = (stepConvert + (items.length - 1));
                let coefficient = Math.ceil(steps / items.length);

                items[element].style.right = (-stepSlaider * coefficient).toFixed(3) + 'px';
            }
    
            if (steps == 0) {
                let element = ((items.length - 1) + stepConvert);
    
                items[element].style.right = 0;
            }
    
            if (steps > 0) {
                let stepConvert2 = steps - 1;
                let stepConvert = stepConvert2 % items.length;
                let element = ((items.length - 1) + (stepConvert - (items.length - 1)));
                let coefficient = Math.ceil(stepConvert2 / items.length + 0.01);
                
                items[element].style.right = (-stepSlaider * coefficient).toFixed(3) + 'px';
            }

            steps = steps + 1;
            }

    function scroll() {
        document.querySelector('.main__slider').addEventListener("click",function (e){
        const targetElement = e.target;

            if(targetElement === scrollLeft){
                nextSlide();
            }
            if(targetElement === scrollRight){
                previosSlide()
            }
        });
    };
    scroll();
}

spoller();





