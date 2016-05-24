$(function() {

     var pauseTime = 5000;

     $('#slider .pagination li').click(function (e) {
          e.preventDefault();
          //po kliknięciu czyścimy timer
          clearTimeout(timer);

          var $this = $(this);
          var $li = $this.parent().find('li');
          var index = $li.index($this);

          $('#slider .slide').removeClass('active').eq(index).addClass('active');

          $li.removeClass('active');
          $this.addClass('active');

          //włączamy timer do kolejnego kliknięcia
          timer = setTimeout(function() {
               var index = $li.index($li.parent().find('.active'));
               var clickLi = (index>=$li.length-1)? 0 : ++index;

               $('#slider .pagination li').eq(clickLi).click();
          }, pauseTime);
     });

     //po wejściu na stronę odpalamy pierwszy timer, który kliknie na drugi element paginacji
     var timer = setTimeout(function() {
          $('.pagination li').eq(1).click();
     }, pauseTime);

});