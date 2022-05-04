// API
const BASE_URL = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia'

$.ajax({
    url: BASE_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    type: 'get',
    dataType: 'json',
    success: function(result){
        console.log(result)
        $('#confirmed').text(result.positif)
        $('#recovered').text(result.sembuh)
        $('#deaths').text(result.meninggal)
    },
    error: () => {
        $('#title').text('Something wrong happened')
    }
})

$("#nav").click(() => {
    $("#sidebar").animate({
        width: "toggle"
    });
})

$("#close").click(() => {
    $("#sidebar").animate({
        width: "toggle"
    });
})