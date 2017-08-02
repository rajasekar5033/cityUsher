

// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();   
// });

// $(document).ready(function(){
//     $(".modal-body").scroll(function(){
//        $(".modal-footer button").attr("disabled", "none")
//     });
// });

 $( window ).on( "load", function(){

       $('input').removeAttr('placeholder');
});

// $(document).ready(function(){
//       $('.accept-t-c').attr('disabled', 'true');
//       $('.accept-t-c').css('opacity', '0.5');
//     $(".modal-body").scroll(function(){
//        $('.accept-t-c').removeAttr('disabled');
//        $('.accept-t-c').css('opacity', '1');
//     });

//});

$(document).ready(function(){
      var showAlert = true;
    $('button.accept-t-c').prop('disabled', true);
    $('button.accept-t-c').css({'background': 'rgba(255, 41, 93, 0.5)'});
    $('button.accept-t-c').addClass('disable');
    $('.modal-body-custom').on('scroll', function() {
        if(showAlert){
            if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                $('button.accept-t-c').prop('disabled', false);
                $('button.accept-t-c').css({'background': '#ff295d'});
                $('button.accept-t-c').removeClass('disable');
                showAlert = false;
            }
        }
        
    });
});

