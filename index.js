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
    var inputArray = [data];
    var outputFields = {};
    $.each(inputArray,function(index, field){
      $('.output').each(function(origin, destination){
        console.log('Original Field:' + origin, "New Field:" + destination.id);

      })
    });
  };
