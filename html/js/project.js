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

/*var restaurantWishList = firebase.database()
  // Create a section for messages data in your db
var restaurantsList = restaurantWishList.ref('restaurants')

$('.buttonTwo').click(function (event){
    event.preventDefault()
        var restaurantName = $('#input').val()
        restaurantsList.push({
            restaurant: restaurantName,
            votes: 0,
            //liked: true,
            user: firebase.auth().currentUser.displayName,
        })

    $('#input').val('')
})
*/

var mplPortal = firebase.database()
var siteList = mplPortal.ref('sites')
$('#NewPub').click(function (event){
  event.preventDefault()

  var date = $('#date').val()
  var status = $('#status').val()
  var siteName = $('#siteName').val()
  var SiteId = $('#siteId').val()
  var SiteUUID = $('#siteUUID').val()
  var SiteURL = $('#siteURL').val()
  var SiteDesc = $('#siteDesc').val()

  var parentNetwork = $('#parentNetwork').val()
  var accountManager = $('#accountManager').val()
  var contactName = $('#contactName').val()
  var contactEmail = $('#contactEmail').val()
  var currency = $('#currency').val()
  var outStream = $('#outStream').val()
  var mobileOutStream = $('#mobileOutStream').val()
  
  var inStream = $('#inStream').val()
  var mobileInStream = $('#mobileInStream').val()
  var inArticle = $('#inArticle').val()
  var mobileInArticle = $('#mobileInArticle').val()
  var verticalVideo = $('#verticalVideo').val()
  var unmissable = $('#unmissable').val()
  var gender = $('#gender').val()
  
  var vertical = $('#vertical').val()
  var siteOrigin = $('#siteOrigin').val()
  var language = $('#language').val()
  var ampSite = $('#ampSite').val()
  var headerBidding = $('#headerBidding').val()
  var approval = $('#approval').val()
  var whiteList = $('#whiteList').val()
  
  var newsCorp = $('#newsCorp').val()
  var reachExtension = $('#reachExtension').val()
  var newsCorpCampagin = $('#newsCorpCampagin').val()
  var alcohol = $('#alcohol').val()
  var gambling = $('#gambling').val()
  var blacklist = $('#blacklist').val()
  var brandSafety = $('#brandSafety').val()
  
  var groupM = $('#groupM').val()
  var content = $('#content').val()
  var notes = $('#notes').val()
  var ranking = $('#ranking').val()
  var comScore = $('#comScore').val()
  var format = $('#format').val()
  var adsTxt = $('#adsTxt').val()
  
  var exchanges = $('#exchanges').val()
  var videoLength = $('#videoLength').val()
  var audio = $('#audio').val()
  var clickToPlay = $('#clickToPlay').val()
  var skippability = $('#skippability').val()
  var outOfView = $('#outOfView').val()
  var player = $('#player').val()

  siteList.push({
    date: date,
    status: status,
    siteName: siteName,
    SiteId:SiteId,
    SiteUUID:SiteUUID,
    SiteURL:SiteURL,
    SiteDesc:SiteDesc,
   
    parentNetwork: parentNetwork,
    accountManager: accountManager,
    contactName: contactName,
    contactEmail:contactEmail,
    currency:currency,
    outStream:outStream,
    mobileOutStream:mobileOutStream,
    
    inStream: inStream,
    mobileInStream: mobileInStream,
    inArticle: inArticle,
    mobileInArticle:mobileInArticle,
    verticalVideo:verticalVideo,
    unmissable:unmissable,
    gender:gender,
    
    vertical: vertical,
    siteOrigin: siteOrigin,
    language: language,
    ampSite:ampSite,
    headerBidding:headerBidding,
    approval:approval,
    whiteList:whiteList,
    
    newsCorp: newsCorp,
    reachExtension: reachExtension,
    newsCorpCampagin: newsCorpCampagin,
    alcohol:alcohol,
    gambling:gambling,
    blacklist:blacklist,
    brandSafety:brandSafety,
    
    groupM: groupM,
    content: content,
    notes: notes,
    ranking:ranking,
    comScore:comScore,
    format:format,
    adsTxt:adsTxt,
    
    exchanges: exchanges,
    videoLength: videoLength,
    audio: audio,
    clickToPlay:clickToPlay,
    skippability:skippability,
    outOfView:outOfView,
    player:player,

    user: firebase.auth().currentUser.displayName,
  })
  /*not working, investigate
    $('#siteName').val('')
    $('#date').val('')
    $('#status').val('')
    $('#siteName').val('')
    $('#SiteId').val('')
    $('#SiteUUID').val('')
    $('#SiteURL').val('')
    $('#SiteDesc').val('')
    $('#parentNetwork').val('')
    $('#accountManager').val('')
    $('#contactName').val('')
    $('#contactEmail').val('')
    $('#currency').val('')
    $('#outStream').val('')
    $('#mobileOutStream').val('')
    $('#inStream').val('')
    $('#mobileInStream').val('')
    $('#inArticle').val('')
    $('#mobileInArticle').val('')
    $('#verticalVideo').val('')
    $('#unmissable').val('')
    $('#gender').val('')
    $('#vertical').val('')
    $('#siteOrigin').val('')
    $('#language').val('')
    $('#ampSite').val('')
    $('#headerBidding').val('')
    $('#approval').val('')
    $('#whiteList').val('')
    $('#newsCorp').val('')
    $('#reachExtension').val('')
    $('#newsCorpCampagin').val('')
    $('#alcohol').val('')
    $('#gambling').val('')
    $('#blacklist').val('')
    $('#brandSafety').val('')
    $('#groupM').val('')
    $('#content').val('')
    $('#notes').val('')
    $('#ranking').val('')
    $('#comScore').val('')
    $('#format').val('')
    $('#adsTxt').val('')
    $('#exchanges').val('')
    $('#videoLength').val('')
    $('#audio').val('')
    $('#clickToPlay').val('')
    $('#skippability').val('')
    $('#outOfView').val('')
    $('#player').val('')*/

})





