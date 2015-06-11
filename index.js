$(document).ready(function(){
  //Speed value for Transitions
  speed = 500;
  //Hiding text that should be hidden by default
  $('#divOutput').hide();
  $('#endDate').hide();
  $('#endTime').hide();
  //This takes data from the form and stores it in an object, then returns that to the page as text.
  $('#submit').click(function(evt){
    evt.preventDefault();
    var data = getData();
    outputData(data);
  //Clicking Reset will reset the form back to original state and hide the Output text
  $('#reset').click(function(evt){
    $('#divOutput').hide(speed);
  }
  )
  //Hide the input form so the Output text is the only viewable information
    $('#divOutput').show(speed);
    $('#input').hide(speed);
  });
  $('#reset').click(function() {
    $('#divOutput').hide(speed);
    $('#input').show(speed);
  })
  //functionality to hide or show the end date based on the radio buttons. *Need to work this into a toggle.*
  $('#newPin').click(function(evt){
    $('#endDate').hide(speed);
    $('#endTime').hide(speed);
  });
  $('#updatedPin').click(function(evt){
    $('#endDate').hide(speed);
    $('#endTime').hide(speed);
  });
  $('#resolvedPin').click(function(evt){
    $('#endDate').show(speed);
    $('#endTime').show(speed);
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
  };
