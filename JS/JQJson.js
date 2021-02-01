$(document).ready(function(){
    $.getJSON("https://restcountries.eu/rest/v2/all",function(data){
        var employee_data = "";
        $.each(data,function(key,value){
            employee_data +=`<tr>
                                <td>${value.name}</td>
                                <td>${value.capital}</td>
                                <td>${value.region}</td>
                                <td><img src="` +value.flag+ `" width="80px" height="50px"/></td>
                                </tr>`
                                
                            
        });
        $("#Table").append(employee_data);
    });
  
});
$(document).ready(function () {
$("#search2").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#Table tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
});
