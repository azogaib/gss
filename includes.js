(function () {

    myHTMLInclude();
    
    function myHTMLInclude() {
      var z, i, a, file, xhttp;
      z = document.getElementsByTagName("*");
      for (i = 0; i < z.length; i++) {
        if (z[i].getAttribute("includes")) {
          a = z[i].cloneNode(false);
          file = z[i].getAttribute("includes");
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
              a.removeAttribute("includes");
              a.innerHTML = xhttp.responseText;
              z[i].parentNode.replaceChild(a, z[i]);
              myHTMLInclude();
            }
          }      
          xhttp.open("GET", file, true);
          xhttp.send();
          return;
        }
      }
    }
    
    })();