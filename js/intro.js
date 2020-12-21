<script>
        $(document).ready(function() {
            $(window).scroll(function() {
                var positionTop = $(document).scrollTop();

                console.log(positionTop);

                if ((positionTop > 250) && (positionTop > 500)) {
                    $('#welcome').addClass('animate__animated animate__fadeInLeft');
                }
            })
        })
    </script>