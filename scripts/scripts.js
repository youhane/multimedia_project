const BASE_URL = 'https://disease.sh/v3/covid-19/all'

$(document).ready(() => {
    $("body").fadeIn(700);

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
            $("#sound-toggle").fadeOut();
        } else {
            $('#nav').fadeOut();
            $("#sound-toggle").fadeIn();
        }
    })

    $("#audio-yes").click(() => {
        $("#sound-prompt").fadeOut(1000);
        $("video").prop("muted", false);
        $('#sound-icon').addClass('fa-volume-high')
    })
    
    $("#audio-no").click(() => {
        $("#sound-prompt").fadeOut(1000);
        $("video").prop("muted", true);
        $('#sound-icon').addClass('fa-volume-xmark')
    })

    $("#sound-toggle").click(() => {
        let sound = $("video").prop('muted');
        $("video").prop("muted", !sound); 
        toggleSound();
    })

    const toggleSound = () => {
        if($('#sound-icon').hasClass('fa-volume-high')){
            $('#sound-icon').removeClass('fa-volume-high')
            $('#sound-icon').addClass('fa-volume-xmark')
        } else {
            $('#sound-icon').removeClass('fa-volume-xmark')
            $('#sound-icon').addClass('fa-volume-high')
        }
    }
})