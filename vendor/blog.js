(function($) {
    // TODO callback support
    function load(selector,url){
        $.get(url, function(data) {

            $(selector).html(marked(data));
        });

    }

    function init() {
        load('#sidebar-page','/MZ-Home/p/sidebar.md');
        load('#main-page','/MZ-Home/p/home.md');
    }

    init();

    var path = '';
    if(location.search){
        console.log(location.search);
        path = location.search.slice(1,location.search.length);
        if(path){
            load('#main-page','/MZ-Home/p/'+path);
        }
    }

    console.log(location);
    
})(jQuery);
