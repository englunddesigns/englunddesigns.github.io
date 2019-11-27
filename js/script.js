$(document).ready(function(){

    $(document).on("scroll",function(){
        var header = $(document).scrollTop();
        var headerHeight = $("nav").outerHeight();
        if (header > headerHeight) {
          $("nav").addClass("py-0").removeClass("py-4");;
        } else {
          $("nav").removeClass("py-0").addClass("py-4");
        }
    });

});