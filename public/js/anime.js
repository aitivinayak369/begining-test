function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;var c=0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        pos=0;
        c=c+1;
        if(c==3)
        {
          clearInterval(id);c=0;
        }
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
  };
  