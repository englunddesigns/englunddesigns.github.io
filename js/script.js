$(document).ready(function(){

    $(document).on("scroll",function(){
        var header = $(document).scrollTop();
        var headerHeight = $("nav").outerHeight();
        if (header > headerHeight) {
          console.log("Made it Smaller");
          $("nav").addClass("py-0").removeClass("py-4");;
        } else {
          console.log("Made it Bigger");
          $("nav").removeClass("py-0").addClass("py-4");
        }
    });

});