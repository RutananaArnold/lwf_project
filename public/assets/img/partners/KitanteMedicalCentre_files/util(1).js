// user feedback
function showLoading(show,msg) {
//	if (!msg) msg='Loading ...' 
//	$('#loadingstatus').html(msg);
//        
//	//$('#loadingstatus').aqFloater({attach:'n', duration: 10, opacity: .8});
//	if (show==1) {
//	    $('#loadingstatus').show();
//	} else {	
//	  // change message and set fadeout
//	  $('#loadingstatus').html(msg); 
//	  $('#loadingstatus')
//      .animate({opacity: 1.0}, 1000)
//      .fadeOut('slow', function() { $(this).hide();});
//        }
}
// display an error
function showError(errortext) {
  $("#dlgerrortext").html(errortext);
  $("#dlgerror").dialog("open");
  return false;
}
function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function copyElementHrefToClipboard(l_element) {
   var $l_tempctl = $("<input>")
   $("body").append($l_tempctl);
   var l_link = $(l_element).attr("href");
   l_link = replaceAll(l_link,'&amp;','&');
   if (l_link.substr(0,7) != 'http://') {
       l_link = 'http://' + l_link;
   }
   $l_tempctl.val(l_link).select();
   document.execCommand("copy");
   $l_tempctl.remove();
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}	