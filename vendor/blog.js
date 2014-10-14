(function($) {
    // $('#sidebar-page').load('/p/sidebar.md',function(data){
    //     console.log(data);
    // });

    function init() {
        $.get('/MZ-home/p/sidebar.md', function(data) {

            $('#sidebar-page').html(marked(data));
        });

        $.get('/MZ-home/p/home.md', function(data) {

            $('#main-page').html(marked(data));
        });
    }

    init();

})(jQuery);
