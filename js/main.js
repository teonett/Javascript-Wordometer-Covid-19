$(document).ready(function () {

	$('#load_data').click(function () {
	
		$.ajax({
			url: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
			dataType: "text",
			success: function (data) {
	
				var covid_data = data.split(/\r?\n|\r/);
				var table_data = '<table class="table table-bordered table-striped">';
	
				for (var count = 0; count < covid_data.length; count++) {
	
					var cell_data = covid_data[count].split(",");
					table_data += '<tr>';
	
					for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
	
						if (count === 0) {
							table_data += '<th>' + cell_data[cell_count] + '</th>';
						}
						else {
							table_data += '<td>' + cell_data[cell_count] + '</td>';
						}
	
					}
	
					table_data += '</tr>';
	
				}
	
				table_data += '</table>';
	
				$('#covid19_table').html(table_data);

			}
		});
	});

	$('#reaload_page')

});