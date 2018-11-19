//chosen to have drop down with multiple selectors
$(function() {
    $(".multiselect").chosen();
});

//authentication 
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

//code to flag required input fields. its conficting with the firebase submit fuction
//$('form').submit(function(){
//var valid = true;
 // $('input[required]').each(function(i, el){
   // if(valid && $(el).val()=='' ) valid = false; 
 // })
//return valid;
//})

//creating new database from CreateNewSite.html tab entries

//var mplPortal = firebase.database()
//var siteList = mplPortal.ref('sites')

var siteList = firebase.database().ref('sites')

$('#NewPub').click (function (event){
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
    var contents = $('#contents').val()
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
        contents: contents,
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
    /* meant to make the input tab blank again, not working, investigate
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

//fetching data from firebase and adding to a table once data has been added to CreateNewSite.html
var database = firebase.database().ref().child('sites');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';
        snapshot.forEach(function(data){
            var date=data.val().date;
            var status=data.val().status;
            var siteName=data.val().siteName;
            var SiteId=data.val().SiteId;
            var SiteUUID=data.val().SiteUUID;
            var SiteURL=data.val().SiteURL;
            var SiteDesc=data.val().SiteDesc;
            var parentNetwork=data.val().parentNetwork;
            var accountManager=data.val().accountManager;
            var contactName=data.val().contactName;
            var contactEmail=data.val().contactEmail;
            var currency=data.val().currency;
            var outStream=data.val().outStream;
            var mobileOutStream=data.val().mobileOutStream;
            var inStream=data.val().inStream;
            var mobileInStream=data.val().mobileInStream;
            var inArticle=data.val().inArticle;
            var mobileInArticle=data.val().mobileInArticle;
            var verticalVideo=data.val().verticalVideo;
            var unmissable=data.val().unmissable;
            var gender=data.val().gender;
            var vertical=data.val().vertical;
            var siteOrigin=data.val().siteOrigin;
            var language=data.val().language;
            var ampSite=data.val().ampSite;
            var headerBidding=data.val().headerBidding;
            var approval=data.val().approval;
            var whiteList=data.val().whiteList;
            var newsCorp=data.val().newsCorp;
            var reachExtension=data.val().reachExtension;
            var newsCorpCampagin=data.val().newsCorpCampagin;
            var alcohol=data.val().alcohol;
            var gambling=data.val().gambling;
            var blacklist=data.val().blacklist;
            var brandSafety=data.val().brandSafety;
            var groupM=data.val().groupM;
            var contents=data.val().contents;
            var notes=data.val().notes;
            var ranking=data.val().ranking;
            var comScore=data.val().comScore;
            var format=data.val().format;
            var adsTxt=data.val().adsTxt;
            var exchanges=data.val().exchanges;
            var videoLength=data.val().videoLength;
            var audio=data.val().audio;
            var clickToPlay=data.val().clickToPlay;
            var skippability=data.val().skippability;
            var outOfView=data.val().outOfView;
            var player=data.val().player;
            var user=data.val().user;

            content += '<tr>';
            content += '<td>' + date + '</td>';
            content += '<td>' + status  + '</td>';
            content += '<td>' + siteName  + '</td>';
            content += '<td>' + SiteId  + '</td>';
            content += '<td>' + SiteUUID  + '</td>';
            content += '<td>' + SiteURL  + '</td>';
            content += '<td>' + SiteDesc  + '</td>';
            content += '<td>' + parentNetwork  + '</td>';
            content += '<td>' + accountManager  + '</td>';
            content += '<td>' + contactName + '</td>';
            content += '<td>' + contactEmail + '</td>';
            content += '<td>' + currency + '</td>';
            content += '<td>' + outStream + '</td>';
            content += '<td>' + mobileOutStream + '</td>';
            content += '<td>' + inStream + '</td>';
            content += '<td>' + mobileInStream + '</td>';
            content += '<td>' + inArticle + '</td>';
            content += '<td>' + mobileInArticle + '</td>';
            content += '<td>' + verticalVideo + '</td>';
            content += '<td>' + unmissable + '</td>';
            content += '<td>' + gender + '</td>';
            content += '<td>' + vertical + '</td>';
            content += '<td>' + siteOrigin + '</td>';
            content += '<td>' + language + '</td>';
            content += '<td>' + ampSite + '</td>';
            content += '<td>' + headerBidding + '</td>';
            content += '<td>' + approval + '</td>';
            content += '<td>' + whiteList + '</td>';
            content += '<td>' + newsCorp + '</td>';
            content += '<td>' + reachExtension + '</td>';
            content += '<td>' + newsCorpCampagin + '</td>';
            content += '<td>' + alcohol + '</td>';
            content += '<td>' + gambling + '</td>';
            content += '<td>' + blacklist + '</td>';
            content += '<td>' + brandSafety + '</td>';
            content += '<td>' + groupM + '</td>';
            content += '<td>' + contents + '</td>';
            content += '<td>' + notes + '</td>';
            content += '<td>' + ranking + '</td>';
            content += '<td>' + comScore + '</td>';
            content += '<td>' + format + '</td>';
            content += '<td>' + adsTxt + '</td>';
            content += '<td>' + exchanges + '</td>';
            content += '<td>' + videoLength + '</td>';
            content += '<td>' + audio + '</td>';
            content += '<td>' + clickToPlay + '</td>';
            content += '<td>' + skippability + '</td>';
            content += '<td>' + outOfView + '</td>';
            content += '<td>' + player + '</td>';
            content += '<td>' + user + '</td>';
            content += '</tr>';
        });

        $('#table').append(content);
    }
});


//append data from firebase script editor to the table
var database = firebase.database().ref();
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';
        snapshot.forEach(function(data){
            var date=data.val().date;
            var status=data.val().status;
            var siteName=data.val().siteName;
            var SiteId=data.val().SiteId;
            var SiteUUID=data.val().SiteUUID;
            var SiteURL=data.val().SiteURL;
            var SiteDesc=data.val().SiteDesc;
            var parentNetwork=data.val().parentNetwork;
            var accountManager=data.val().accountManager;
            var contactName=data.val().contactName;
            var contactEmail=data.val().contactEmail;
            var currency=data.val().currency;
            var outStream=data.val().outStream;
            var mobileOutStream=data.val().mobileOutStream;
            var inStream=data.val().inStream;
            var mobileInStream=data.val().mobileInStream;
            var inArticle=data.val().inArticle;
            var mobileInArticle=data.val().mobileInArticle;
            var verticalVideo=data.val().verticalVideo;
            var unmissable=data.val().unmissable;
            var gender=data.val().gender;
            var vertical=data.val().vertical;
            var siteOrigin=data.val().siteOrigin;
            var language=data.val().language;
            var ampSite=data.val().ampSite;
            var headerBidding=data.val().headerBidding;
            var approval=data.val().approval;
            var whiteList=data.val().whiteList;
            var newsCorp=data.val().newsCorp;
            var reachExtension=data.val().reachExtension;
            var newsCorpCampagin=data.val().newsCorpCampagin;
            var alcohol=data.val().alcohol;
            var gambling=data.val().gambling;
            var blacklist=data.val().blacklist;
            var brandSafety=data.val().brandSafety;
            var groupM=data.val().groupM;
            var contents=data.val().contents;
            var notes=data.val().notes;
            var ranking=data.val().ranking;
            var comScore=data.val().comScore;
            var format=data.val().format;
            var adsTxt=data.val().adsTxt;
            var exchanges=data.val().exchanges;
            var videoLength=data.val().videoLength;
            var audio=data.val().audio;
            var clickToPlay=data.val().clickToPlay;
            var skippability=data.val().skippability;
            var outOfView=data.val().outOfView;
            var player=data.val().player;
            var user=data.val().user;
            content += '<tr>';
            content += '<td>' + date + '</td>';
            content += '<td>' + status  + '</td>';
            content += '<td>' + siteName  + '</td>';
            content += '<td>' + SiteId  + '</td>';
            content += '<td>' + SiteUUID  + '</td>';
            content += '<td>' + SiteURL  + '</td>';
            content += '<td>' + SiteDesc  + '</td>';
            content += '<td>' + parentNetwork  + '</td>';
            content += '<td>' + accountManager  + '</td>';
            content += '<td>' + contactName + '</td>';
            content += '<td>' + contactEmail + '</td>';
            content += '<td>' + currency + '</td>';
            content += '<td>' + outStream + '</td>';
            content += '<td>' + mobileOutStream + '</td>';
            content += '<td>' + inStream + '</td>';
            content += '<td>' + mobileInStream + '</td>';
            content += '<td>' + inArticle + '</td>';
            content += '<td>' + mobileInArticle + '</td>';
            content += '<td>' + verticalVideo + '</td>';
            content += '<td>' + unmissable + '</td>';
            content += '<td>' + gender + '</td>';
            content += '<td>' + vertical + '</td>';
            content += '<td>' + siteOrigin + '</td>';
            content += '<td>' + language + '</td>';
            content += '<td>' + ampSite + '</td>';
            content += '<td>' + headerBidding + '</td>';
            content += '<td>' + approval + '</td>';
            content += '<td>' + whiteList + '</td>';
            content += '<td>' + newsCorp + '</td>';
            content += '<td>' + reachExtension + '</td>';
            content += '<td>' + newsCorpCampagin + '</td>';
            content += '<td>' + alcohol + '</td>';
            content += '<td>' + gambling + '</td>';
            content += '<td>' + blacklist + '</td>';
            content += '<td>' + brandSafety + '</td>';
            content += '<td>' + groupM + '</td>';
            content += '<td>' + contents + '</td>';
            content += '<td>' + notes + '</td>';
            content += '<td>' + ranking + '</td>';
            content += '<td>' + comScore + '</td>';
            content += '<td>' + format + '</td>';
            content += '<td>' + adsTxt + '</td>';
            content += '<td>' + exchanges + '</td>';
            content += '<td>' + videoLength + '</td>';
            content += '<td>' + audio + '</td>';
            content += '<td>' + clickToPlay + '</td>';
            content += '<td>' + skippability + '</td>';
            content += '<td>' + outOfView + '</td>';
            content += '<td>' + player + '</td>';
            content += '<td>' + user + '</td>';
            content += '</tr>';
        });
        $('#table').append(content);
    }
});

// in the below example -LRPu29BJqdfQb6fUewR had to be defined to make a change to it. How can we do this without defining it with fixed value?

function update_user(){

var update = firebase.database().ref("sites/-LRQHUajeF-B0t8cv1uq");

update.update ({
   "SiteUUID": $('#user_id').val()
});

}

$('#update').click(update_user);

//the below gives the key i..e -LRQHUajeF-B0t8cv1uq" how can we combine this with the above script to get the key and modify it exactly
var ref = firebase.database().ref().child("sites");

    ref.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        });
    })
