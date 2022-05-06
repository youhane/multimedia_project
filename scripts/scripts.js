const BASE_URL = 'https://disease.sh/v3/covid-19/all'

$.ajax({
    url: BASE_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    type: 'get',
    dataType: 'json',
    success: function(result){
        $('#confirmed').text(result.cases.toLocaleString())
        $('#recovered').text(result.recovered.toLocaleString())
        $('#deaths').text(result.deaths.toLocaleString())
        
        $('#new-positive').text(result.todayCases.toLocaleString())
        $('#new-recovered').text(result.todayRecovered.toLocaleString())
        $('#new-deaths').text(result.todayDeaths.toLocaleString())
    },
    error: () => {
        $('#title').text('Something wrong happened')
    }
})

$("#nav").click(() => {
    $("#sidebar").show("slide",{
        direction: "right",
    });
})

$("#close").click(() => {
    $("#sidebar").hide("slide",{
        direction: "right",
    });
})

$("#nav-choice").click(() => {
    $("#sidebar").hide("slide",{
        direction: "right",
    });
})

$('#nav').hide();

$(window).scroll(() => {
    if ($(this).scrollTop() > 720) {
        $('#nav').fadeIn();
    } else {
        $('#nav').fadeOut();
    }
})