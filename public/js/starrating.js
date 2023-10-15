//source: https://stackoverflow.com/questions/29530054/showing-selection-on-5-star-rating


$('.star').on('click', function(){
    $('.star').addClass('selected');
    var count = $(this).attr('name'); 
    for (var i=0; i<count-1; i++){        
        $('.star').eq(i).removeClass('selected');
    }
  });