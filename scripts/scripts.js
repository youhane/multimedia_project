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
        document.write(`Positif ${result.positif} <br>`)
        document.write(`Negatif ${result.negatif} <br>`)
        document.write(`Sembuh ${result.sembuh} <br>`)
    },
    error: () => {
        $('#title').text('Something wrong happened')
    }
})