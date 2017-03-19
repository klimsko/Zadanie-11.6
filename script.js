var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
	
function searchCountries() {
	var countryName = $('#country-name').val();
	if (!countryName.length) {
		countryName = "Poland";
	};
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList,
  		error: function(res) { 
  			alert(res.message); 
  			}
  	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(countriesList);
		$('<li>').append('<img src='+item.flag+'>').appendTo(countriesList);
	});
}


$(document).ready(function() {
	searchCountries();
	$('#search').click(function() {
		searchCountries();
	})
});