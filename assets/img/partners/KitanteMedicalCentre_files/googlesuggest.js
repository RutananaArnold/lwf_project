/*
var google_auto_suggest_url = "http://suggestqueries.google.com/complete/search?client=chrome&gl=za&q=";
$('#auto_suggest').typeahead({
	source: function(query, process) {
		var temp_arr = query.split(/[.,]+/); // Regex to find only the sentences after a full stop or comma.
		var search_sentence = temp_arr[temp_arr.length-1];
		return jQuery.ajax({
			dataType: "jsonp",
			url: google_auto_suggest_url+search_sentence,
			success: function (json) {
				process(process_callback(json));
			}
		});
	},

	updater: function(item) {
		var query = jQuery("#auto_suggest").val();
		var temp_arr = query.split(this.$element.val());
		return this.$element.val().replace(/[^,]*$/,' ')+item;
	},

	matcher: function(item) {
		return item;
	}
});

function process_callback(json) {
    return json[1];
}
*/