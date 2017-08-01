

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

$(document).ready(function(){
      $('.accept-t-c').attr('disabled', 'true');
    $(".modal-body").scroll(function(){
       $('.accept-t-c').removeAttr('disabled');
    });

});

// $(document).ready(function(){
//       $('input[name=firstName]').blur(function(){

//       var className = $('input[name=firstName]').attr('class')
//       var className1 = $('input[name=email]').attr('class')
//       console.log(className);
//       var val = className.split(' ')
//       var val1 = className1.split(' ')
//       for(var i = 0; i<val.length; i++){
//             console.log(val[i])
//             if(val[i]=="ng-touched" && val.indexOf("ng-invalid")){
//                   $('.home-banner').css('cssText', 'height:900px !important;');
//             }
//       }
//       });
      
// })