$(document).ready(function(){
  $('#')
  $('#submit').click(function(evt){
    evt.preventDefault();
    var data = getData();
    console.log(data);
    outputData(data);
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

function outputData(data)
  {
    var inputArray = [
      {'status': 'newStatus'},{'height': 'newHeight'}
    ];
    $.each(inputArray,function(index, field){
      $.each(field, function(origin, destination){
        console.log('Original Field:' + origin, "New Field:" + destination);
      })
    });
  };
