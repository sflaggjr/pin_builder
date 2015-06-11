$(document).ready(function(){
  //Speed value for Transitions
  speed = 500;
  //Hiding text that should be hidden by default
  $('#divOutput').hide();
  $('#divEndDate').hide();
  $('#reset').hide();
  //This takes data from the form and stores it in an object, then returns that to the page as text.
  $('#submit').click(function(evt){
    evt.preventDefault();
    var data = getData();
    outputData(data);
  //Hide the input form so the Output text is the only viewable information
  $('#input').hide(speed);
  });
  //functionality to hide or show the end date based on the radio buttons. *Need to work this into a toggle.*
  $('#newPin').click(function(evt){
    $('#divEndDate').hide(speed);
  });
  $('#updatedPin').click(function(evt){
    $('#divEndDate').hide(speed);
  });
  $('#resolvedPin').click(function(evt){
    $('#divEndDate').show(speed);
  });
});


function getData()
  {
    var data = {};
    $('.dataPoint').each(function(index, inputData){
      data[inputData.id] = inputData.value;
    });
    return data;
  };

function outputData(data, speed)
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
     $('#divOutput').show(speed);
     $('#reset').show(speed);
  };
