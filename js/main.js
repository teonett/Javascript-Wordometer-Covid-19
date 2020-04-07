$(document).ready(function () {

	$('#load_data').click(function () {
	
		$.ajax({
			url: "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
			dataType: "text",
			success: function (data) {
	
				var covid_data = data.split(/\r?\n|\r/);
				var table_head = '<table class="table table-bordered table-striped">';
				var table_data = table_head;
				var resume_data = table_head;
	
				for (var count = 0; count < covid_data.length; count++) {
	
					var cell_data = covid_data[count].split(",");

					table_data += '<tr>';
	
					for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
	
						if (count === 0) {
							table_data += '<th style="text-align: center;">' + cell_data[cell_count] + '</th>';
						}
						else {
							table_data += '<td style="text-align: center;">' + cell_data[cell_count] + '</td>';
						}
	
					}
	
					table_data += '</tr>';

					resume_data += '<tr>';

					if (count == 0) {
						resume_data += '<th>Country / Province</th>';
						resume_data += '<th>Geo</th>';
						resume_data += '<th>' + cell_data[cell_count-7] + '</th>';
						resume_data += '<th>' + cell_data[cell_count-6] + '</th>';
						resume_data += '<th>' + cell_data[cell_count-5] + '</th>';
						resume_data += '<th>' + cell_data[cell_count-4] + '</th>';
						resume_data += '<th>' + cell_data[cell_count-3] + '</th>';
						resume_data += '<th>' + cell_data[cell_count-2] + '</th>';
						resume_data += '<th>' + cell_data[cell_count-1] + '</th>';
						resume_data += '<th> Growth</th>';
					}
					else{
						resume_data += '<td>' + cell_data[1] + " " + cell_data[0] + '</td>';
						resume_data += '<td style="text-align: center;"><a href="https://www.openstreetmap.org/#map=5/' + 
										cell_data[2] + '/' + cell_data[3] + '" target="_blank">' +
										'<i class="fa fa-map-marker" style="font-size:24px;color:blue"></i></a></td>';
						resume_data += '<td style="text-align: right;">' + cell_data[cell_count-7] + '</td>';
						resume_data += '<td style="text-align: right;">' + cell_data[cell_count-6] + '</td>';
						resume_data += '<td style="text-align: right;">' + cell_data[cell_count-5] + '</td>';
						resume_data += '<td style="text-align: right;">' + cell_data[cell_count-4] + '</td>';
						resume_data += '<td style="text-align: right;">' + cell_data[cell_count-3] + '</td>';
						resume_data += '<td style="text-align: right;">' + cell_data[cell_count-2] + '</td>';
						resume_data += '<td style="text-align: right;">' + cell_data[cell_count-1] + '</td>';

						var avgqt = ((((parseFloat(cell_data[cell_count-6]) / parseFloat(cell_data[cell_count-7]))-1)*100) +
									 (((parseFloat(cell_data[cell_count-5]) / parseFloat(cell_data[cell_count-6]))-1)*100) +
									 (((parseFloat(cell_data[cell_count-4]) / parseFloat(cell_data[cell_count-5]))-1)*100) +
									 (((parseFloat(cell_data[cell_count-3]) / parseFloat(cell_data[cell_count-4]))-1)*100) +
									 (((parseFloat(cell_data[cell_count-2]) / parseFloat(cell_data[cell_count-3]))-1)*100) +
									 (((parseFloat(cell_data[cell_count-1]) / parseFloat(cell_data[cell_count-2]))-1)*100))/6;

						resume_data += '<td style="text-align:  right;">' + avgqt.toFixed(2) + '% </td>';
					}
	
					resume_data += '</tr>';
	
				}
	
				table_data += '</table>';
				$('#covid19_table').html(table_data);

				resume_data += '</table>';
				$('#resume_table').html(resume_data);

			}
		});
	});

	$('#reaload_page')

	$(function() {
        /** This code runs when everything has been loaded on the page */
        /* Inline sparklines take their values from the contents of the tag */
        $('.inlinesparkline').sparkline(); 

        /* Sparklines can also take their values from the first argument passed to the sparkline() function */
        var myvalues = [10,8,5,7,4,4,1];
        $('.dynamicsparkline').sparkline(myvalues);

        /* The second argument gives options such as specifying you want a bar chart */
        $('.dynamicbar').sparkline(myvalues, {type: 'bar', barColor: 'green'} );

        /* Use 'html' instead of an array of values to pass options to a sparkline with data in the tag */
        $('.inlinebar').sparkline('html', {type: 'bar', barColor: 'red'} );

	});

});

