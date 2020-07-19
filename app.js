function check_class(classN1,classN,tas,zal){
  if(hasClass(classN1,zal) ==true){
    $(classN).removeClass(tas);
    $(classN).addClass(zal);
  }
}
function zalgah(id){
    $('.'+id).removeClass('tasarhai');
    $('.'+id).addClass('zalgaatai');
}
function taslah(id){
      $('.'+id).removeClass('zalgaatai');
      $('.'+id).addClass('tasarhai');
}

$( "button" ).click(function() {
  var id = $(this).attr('data-id');
  var type = $(this).attr('data-value');
  if(type == 'zalgah'){
    zalgah(id);
    if(id =='103shus'){
        check_class('.ash103','.gt103','tasarhai','zalgaatai');
      }
    } 
  if(type == 'taslah'){
       taslah(id);
      $('#toissh110kv').removeClass('shinzalgaatai');
      $('#toissh110kv').addClass('shin');
      if(id =='103shus'){

        $('#110kv1rssh').removeClass('shinzalgaatai');
        $('#110kv1rssh').addClass('shin');

      if(hasClass('.ash103','zalgaatai') ==true){
        $('.gt103').removeClass('zalgaatai');
        $('.gt103').addClass('tasarhai');
        $('#shinsghtai103').removeClass('zalgaatai');
        $('#shinsghtai103').addClass('tasarhai');
      }

    }
      if(id =='ash103'){
      if(hasClass('.gt103','zalgaatai') ==true){
        $('.gt103').removeClass('zalgaatai');
        $('.gt103').addClass('tasarhai');

      }
      if(hasClass('#shinsghtai103','zalgaatai') ==true){
   
        $('#shinsghtai103').removeClass('zalgaatai');
        $('#shinsghtai103').addClass('tasarhai');
      }
    }
  }
  if(type == 'zalguur'){
      $('.'+id).removeClass('salguur');
      $('.'+id).addClass('salgzalgaatai');
          if(id == 'tois103'){
          $('#toissh110kv').removeClass('shin');
          $('#toissh110kv').addClass('shinzalgaatai');
    }
        if(id == 'shins103'){
      if(hasClass('.ash103','zalgaatai') ==true){
        $('#110kv1rssh').removeClass('shin');
        $('#110kv1rssh').addClass('shinzalgaatai');

      }
    }
  }
    if(type == 'salguur'){
      $('.'+id).removeClass('salgzalgaatai');
      $('.'+id).addClass('salguur');
    if(id == 'tois103'){
      $('#toissh110kv').removeClass('shinzalgaatai');
      $('#toissh110kv').addClass('shin');
    }
  }
   if(type == 'tasluurzalgah'){

      $('.'+id).removeClass('ettasarhai');
      $('.'+id).addClass('etzalgaatai');
      if(hasClass('.ash103','zalgaatai')==true && hasClass('.103shus','zalgaatai')==true){
      
          $('#shinsghtai103').removeClass('tasarhai');
          $('#shinsghtai103').addClass('zalgaatai');
      }
      else{
        alert();
      }
   }
   if(type == 'tasluurtaslah'){
    if(id == 'tasluur103'){
              $('#110kv1rssh').removeClass('shinzalgaatai');
        $('#110kv1rssh').addClass('shin');
    }
      $('.'+id).addClass('ettasarhai');
      $('.'+id).removeClass('etzalgaatai');

   }
  
});

function hasClass(element, cls) {
    return $(element).hasClass(cls);
}


