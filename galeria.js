<script>
    var duze_zdjecie = document.getElementById('duze_zdjecie');
 
    var miniaturka = document.getElementById('miniaturka');
 
    miniaturka.onclick = function(e) {
      e = e || window.event;
      var target = e.target || e.srcElement;
 
      while(target != this) {
 
        if (target.nodeName == 'A') {
          PokażMiniaturki(target.href, target.title);
          return false;
        }
 
        target = target.parentNode;
      }
    }
 
    function PokażMiniaturki(href, title) {
      duze_zdjecie.src = href;
      duze_zdjecie.alt = title;
    }
 
    var imgs = miniaturka.getElementsByTagName('img');
 
    for(var i=0; i<imgs.length; i++) {
      var url = imgs[i].parentNode.href;
      var img = document.createElement('img');
      img.src = url;
    }

</script>