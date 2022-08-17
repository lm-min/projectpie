$(document).ready(function(){

  // deposit-modal
  // $('.tracking-modal .item3 .btn-control').on('click', function(){
  //   if($(this).hasClass('on')){
  //   }else{
  //   }
  // });

  $('.recharge .write').on('keyup', function() {
    $(this).val( $(this).val().replace(/[^0-9]/g, ""));
  });



});