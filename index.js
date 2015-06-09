$(document).ready(function(){
  $('.staticText').hide();
  $('#submit').click(function(evt){
    evt.preventDefault();
    var data = getData();
    outputData(data);
  });
  $('radio').click(function(evt)){
    evt.preventDefault();
  })
});


function getData()
  {
    var data = {};
    $('.dataPoint').each(function(index, inputData){
      data[inputData.id] = inputData.value;
    });
    return data;
  };

function outputData(data)
  {
    var arr = [
       {'outageID': 'outputOutageID'},
       {'subject': 'outputSubject'},
       {'product': 'outputProduct'},
       {'status': 'outputStatus'},
       {'impact': 'outputImpact'},
       {'startDate': 'outputStartDate'},
       {'startTime': 'outputStartTime'},
       {'reportDate': 'outputReportDate'},
       {'reportTime': 'outputReportTime'},
       {'endDate': 'outputEndDate'},
       {'reporters': 'outputReporters'},
       {'scope': 'outputScope'}
     ];
     $.each(arr, function(index, field) {
       $.each(field, function(origin, destination) {
         $('#' + destination).html(data[origin]);
       })
     });
     $('.staticText').show();
  };
function pinType()
{
  var newPin = $('#newPin').val();
  console.log(newPin);
  if $(newPin) == true
    {
      $('#endDate').hide();
      $('#endTime').hide();
    }
}
