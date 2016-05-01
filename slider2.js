$(function() {

     $('#slider .pagination li').click(function (e) {
          e.preventDefault();
          $('.box').toggleClass('active'); //włączenie/wyłączenie klasy
          var $this = $(this);
          var $li = $this.parent().find('li');
          var index = $li.index($this);

          $('#main .slide').removeClass('active').eq(index).addClass('active');

          $li.removeClass('active');
          $this.addClass('active');
     });

})