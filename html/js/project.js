//chosen
$(function() {
    $(".multiselect").chosen();
});


var mainApp = {};

(function () {
	var firebase = app_fireBase
var uid = null
	firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
    	// User is signed in.
      uid = user.uid;
  		} else {
  			//redirect to login page
  			uid = null
  				window.location.replace("Login.html")
  			}
  		});

  function logOut() {
  			firebase.auth().signOut()
  		}
  		mainApp.logOut=logOut;

	})()


//var rootRef= firebase.database().ref().child();
 // rootRef.on("child_added", snap=> {
   // var siteID = snap.child("SiteId").val();
  //  var siteName = snap.child("SiteName").val();

   // $("#table").append("<tr><td>" + siteID + "</td><td>" + siteName + "</td><td><button>Remove</button></td></tr>");

  //});
/* https://www.youtube.com/watch?v=noB98K6A0TY
const preObject= document.getElementByID('object');

const dbRefObject = firebase.database().ref().child('object');


dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
*/


