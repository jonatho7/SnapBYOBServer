var main = function() {
  
  $("#goButton").click(function() {
    
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
           if(xmlhttp.status == 200){
            
              //my code will go here.
              
              //This next line of code works.
              //$("#searchBar").val("7000");
              
              //Now try to get the temperature. Using jQuery to update the searchBar.
              var temperature = xmlhttp.responseText;
              $("#searchBar").val(temperature);
              
              //Now try to get the temperature, this time without jQuery.
              //var temperature = xmlhttp.responseText;
              
              
              //
              //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
           }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400')
           }
           else {
               alert('something else other than 200 was returned')
           }
        }
    }

    xmlhttp.open("GET", "http://127.0.0.1:5000/fakeWeather", false);
    //xmlhttp.open("GET", "http://127.0.0.1:5000/weather", false);
    xmlhttp.send();
    
    
    
  });

}

$(document).ready(main);