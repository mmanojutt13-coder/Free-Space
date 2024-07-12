document.addEventListener('DOMContentLoaded', function() {
    var elementsLeft = document.querySelectorAll('.fade-in-left');
    var elementsRight = document.querySelectorAll('.fade-in-right');
    var windowHeight = window.innerHeight;

    function checkPosition() {
        for (var i = 0; i < elementsLeft.length; i++) {
            var elementLeft = elementsLeft[i];
            var positionFromTopLeft = elementLeft.getBoundingClientRect().top;

            if (positionFromTopLeft - windowHeight <= 0) {
                elementLeft.classList.add('visible');
            }
        }

        for (var i = 0; i < elementsRight.length; i++) {
            var elementRight = elementsRight[i];
            var positionFromTopRight = elementRight.getBoundingClientRect().top;

            if (positionFromTopRight - windowHeight <= 0) {
                elementRight.classList.add('visible');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', function() {
        windowHeight = window.innerHeight;
    });

    checkPosition();
});