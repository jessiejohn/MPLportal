//$("#NewPub").click(function () {           

  //var selectedVal = $('#input').val();

  //$('#list').append('<li>'+selectedVal+'</li>')

//});


//$("#NewPub").click(function () {  
//	console.log("working")
//});

//window.onload = function() {
 //   if (window.jQuery) {  
        // jQuery is loaded  
       // alert("Yeah!");
  //  } else {
        // jQuery is not loaded
      //  alert("Doesn't Work");
    //}
//}


function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("DisplayAllPub").innerHTML = text;
}