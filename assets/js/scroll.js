
    document.addEventListener('DOMContentLoaded', function() {
        var elements = document.querySelectorAll('.fade-in-up');
        var windowHeight = window.innerHeight;

        function checkPosition() {
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var positionFromTop = element.getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                    element.classList.add('visible');
                }
            }
        }

        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', function() {
            windowHeight = window.innerHeight;
        });

        checkPosition();
    });
