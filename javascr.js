//json
function information() {
    const url = "https://api.covid19api.com/summary";

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const dade =data.Global;
            document.getElementById("newconfirmed").innerHTML = dade.NewConfirmed;
            document.getElementById("totalconfirmed").innerHTML = dade.TotalConfirmed;
            document.getElementById("newdeaths").innerHTML = dade.NewDeaths;
            document.getElementById("totaldeaths").innerHTML = dade.TotalDeaths;
            document.getElementById("newrecovered").innerHTML = dade.NewRecovered;
            document.getElementById("totalrecovered").innerHTML = dade.TotalRecovered;
        });
}

//search box
var s = $('input'),
    f  = $('form'),
    a = $('.after'),
    m = $('h4');

s.focus(function(){
    if( f.hasClass('open') ) return;
    f.addClass('in');
    setTimeout(function(){
        f.addClass('open');
        f.removeClass('in');
    }, 1300);
});

a.on('click', function(e){
    e.preventDefault();
    if( !f.hasClass('open') ) return;
    s.val('');
    f.addClass('close');
    f.removeClass('open');
    setTimeout(function(){
        f.removeClass('close');
    }, 1300);
})

f.submit(function(e){
    e.preventDefault();
    m.html('').addClass('show');
    f.addClass('explode');
    setTimeout(function(){
        s.val('');
        f.removeClass('explode');
        m.removeClass('show');
    }, 3000);
})
//search country
function myFunction() {
    let obj = [
        {"Country": "ALA Aland Islands", "CountryCode": "AX","id":0},
        {"Country": "Afghanistan", "CountryCode": "AF","id":1},
        {"Country": "Albania", "CountryCode": "AL","id":2},
        {"Country": "Algeria", "CountryCode": "DZ","id":3},
        {"Country": "American Samoa", "CountryCode": "AS","id":4},
        {"Country": "Andorra", "CountryCode": "AD","id":5},
        {"Country": "Angola", "CountryCode": "AO","id":6},
        {"Country": "Anguilla", "CountryCode": "AI","id":7},
        {"Country": "Antarctica", "CountryCode": "AQ","id":8},
        {"Country": "Antigua and Barbuda", "CountryCode": "AG","id":9},
        {"Country": "Argentina", "CountryCode": "AR","id":10},
        {"Country": "Armenia", "CountryCode": "AM","id":11},
        {"Country": "Aruba", "CountryCode": "AW","id":12},
        {"Country": "Australia", "CountryCode": "AU","id":13},
        {"Country": "Austria", "CountryCode": "AT","id":14},
        {"Country": "Azerbaijan", "CountryCode": "AZ","id":15},
        {"Country": "Bahamas", "CountryCode": "BS","id":16},
        {"Country": "Bahrain", "CountryCode": "BH","id":17},
        {"Country": "Bangladesh", "CountryCode": "BD","id":18},
        {"Country": "Barbados", "CountryCode": "BB","id":19},
        {"Country": "Belarus", "CountryCode": "BY","id":20},
        {"Country": "Belgium", "CountryCode": "BE","id":21},
        {"Country": "Belize", "CountryCode": "BZ","id":22},
        {"Country": "Benin", "CountryCode": "BJ","id":23},
        {"Country": "Bermuda", "CountryCode": "BM","id":24},
        {"Country": "Bhutan", "CountryCode": "BT","id":25},
        {"Country": "Bolivia", "CountryCode": "BO","id":26},
        {"Country": "Bosnia and Herzegovina", "CountryCode": "BA","id":27},
        {"Country": "Botswana", "CountryCode": "BW","id":28},
        {"Country": "Bouvet Island", "CountryCode": "BV","id":29},
        {"Country": "Brazil", "CountryCode": "BR","id":30},
        {"Country": "British Indian Ocean Territory", "CountryCode": "IO","id":31},
        {"Country": "British Virgin Islands", "CountryCode": "VG","id":32},
        {"Country": "Brunei Darussalam", "CountryCode": "BN","id":33},
        {"Country": "Bulgaria", "CountryCode": "BG","id":34},
        {"Country": "Burkina Faso", "CountryCode": "BF","id":35},
        {"Country": "Burundi", "CountryCode": "BI","id":36},
        {"Country": "Cambodia", "CountryCode": "KH","id":37},
        {"Country": "Cameroon", "CountryCode": "CM","id":38},
        {"Country": "Canada", "CountryCode": "CA","id":39},
        {"Country": "Cape Verde", "CountryCode": "CV","id":40},
        {"Country": "Cayman Islands", "CountryCode": "KY","id":41},
        {"Country": "Central African Republic", "CountryCode": "CF","id":42},
        {"Country": "Chad", "CountryCode": "TD","id":43},
        {"Country": "Chile", "CountryCode": "CL","id":44},
        {"Country": "China", "CountryCode": "CN","id":45},
        {"Country": "Christmas Island", "CountryCode": "CX","id":46},
        {"Country": "Cocos (Keeling) Islands", "CountryCode": "CC","id":47},
        {"Country": "Colombia", "CountryCode": "CO","id":48},
        {"Country": "Comoros", "CountryCode": "KM","id":49},
        {"Country": "Congo (Brazzaville)", "CountryCode": "CG","id":50},
        {"Country": "Congo (Kinshasa)", "CountryCode": "CD","id":51},
        {"Country": "Cook Islands", "CountryCode": "CK","id":52},
        {"Country": "Costa Rica", "CountryCode": "CR","id":53},
        {"Country": "Croatia", "CountryCode": "HR","id":54},
        {"Country": "Cuba", "CountryCode": "CU","id":55},
        {"Country": "Cyprus", "CountryCode": "CY","id":56},
        {"Country": "Czech Republic", "CountryCode": "CZ","id":57},
        {"Country": "Côte d'Ivoire", "CountryCode": "CI","id":58},
        {"Country": "Denmark", "CountryCode": "DK","id":59},
        {"Country": "Djibouti", "CountryCode": "DJ","id":60},
        {"Country": "Dominica", "CountryCode": "DM","id":61},
        {"Country": "Dominican Republic", "CountryCode": "DO","id":62},
        {"Country": "Ecuador", "CountryCode": "EC","id":63},
        {"Country": "Egypt", "CountryCode": "EG","id":64},
        {"Country": "El Salvador", "CountryCode": "SV","id":65},
        {"Country": "Equatorial Guinea", "CountryCode": "GQ","id":66},
        {"Country": "Eritrea", "CountryCode": "ER","id":67},
        {"Country": "Estonia", "CountryCode": "EE","id":68},
        {"Country": "Ethiopia", "CountryCode": "ET","id":69},
        {"Country": "Falkland Islands (Malvinas)", "CountryCode": "FK","id":70},
        {"Country": "Faroe Islands", "CountryCode": "FO","id":71},
        {"Country": "Fiji", "CountryCode": "FJ","id":72},
        {"Country": "Finland", "CountryCode": "FI","id":73},
        {"Country": "France", "CountryCode": "FR","id":74},
        {"Country": "French Guiana", "CountryCode": "GF","id":75},
        {"Country": "French Polynesia", "CountryCode": "PF","id":76},
        {"Country": "French Southern Territories", "CountryCode": "TF","id":77},
        {"Country": "Gabon", "CountryCode": "GA","id":78},
        {"Country": "Gambia", "CountryCode": "GM","id":79},
        {"Country": "Georgia", "CountryCode": "GE","id":80},
        {"Country": "Germany", "CountryCode": "DE","id":81},
        {"Country": "Ghana", "CountryCode": "GH","id":82},
        {"Country": "Gibraltar", "CountryCode": "GI","id":83},
        {"Country": "Greece", "CountryCode": "GR","id":84},
        {"Country": "Greenland", "CountryCode": "GL","id":85},
        {"Country": "Grenada", "CountryCode": "GD","id":86},
        {"Country": "Guadeloupe", "CountryCode": "GP","id":87},
        {"Country": "Guam", "CountryCode": "GU","id":88},
        {"Country": "Guatemala", "CountryCode": "GT","id":89},
        {"Country": "Guernsey", "CountryCode": "GG","id":90},
        {"Country": "Guinea", "CountryCode": "GN","id":91},
        {"Country": "Guinea-Bissau", "CountryCode": "GW","id":92},
        {"Country": "Guyana", "CountryCode": "GY","id":93},
        {"Country": "Haiti", "CountryCode": "HT","id":94},
        {"Country": "Heard and Mcdonald Islands", "CountryCode": "HM","id":95},
        {"Country": "Holy See (Vatican City State)", "CountryCode": "VA","id":96},
        {"Country": "Honduras", "CountryCode": "HN","id":97},
        {"Country": "Hong Kong, SAR China", "CountryCode": "HK","id":98},
        {"Country": "Hungary", "CountryCode": "HU","id":99},
        {"Country": "Iceland", "CountryCode": "IS","id":100},
        {"Country": "India", "CountryCode": "IN","id":101},
        {"Country": "Indonesia", "CountryCode": "ID","id":102},
        {"Country": "Iran", "CountryCode": "IR","id":103},
        {"Country": "Iraq", "CountryCode": "IQ","id":104},
        {"Country": "Ireland", "CountryCode": "IE","id":105},
        {"Country": "Isle of Man", "CountryCode": "IM","id":106},
        {"Country": "Israel", "CountryCode": "IL","id":107},
        {"Country": "Italy", "CountryCode": "IT","id":108},
        {"Country": "Jamaica", "CountryCode": "JM","id":109},
        {"Country": "Japan", "CountryCode": "JP","id":110},
        {"Country": "Jersey", "CountryCode": "JE","id":111},
        {"Country": "Jordan", "CountryCode": "JO","id":112},
        {"Country": "Kazakhstan", "CountryCode": "KZ","id":113},
        {"Country": "Kenya", "CountryCode": "KE","id":114},
        {"Country": "Kiribati", "CountryCode": "KI","id":115},
        {"Country": "Korea (North)", "CountryCode": "KP","id":116},
        {"Country": "Korea (South)", "CountryCode": "KR","id":117},
        {"Country": "Kuwait", "CountryCode": "KW","id":118},
        {"Country": "Kyrgyzstan", "CountryCode": "KG","id":119},
        {"Country": "Lao PDR", "CountryCode": "LA","id":120},
        {"Country": "Latvia", "CountryCode": "LV","id":121},
        {"Country": "Lebanon", "CountryCode": "LB","id":122},
        {"Country": "Lesotho", "CountryCode": "LS","id":123},
        {"Country": "Liberia", "CountryCode": "LR","id":124},
        {"Country": "Libya", "CountryCode": "LY","id":125},
        {"Country": "Liechtenstein", "CountryCode": "LI","id":126},
        {"Country": "Lithuania", "CountryCode": "LT","id":127},
        {"Country": "Luxembourg", "CountryCode": "LU","id":128},
        {"Country": "Macao, SAR China", "CountryCode": "MO","id":129},
        {"Country": "Macedonia, Republic of", "CountryCode": "MK","id":130},
        {"Country": "Madagascar", "CountryCode": "MG","id":131},
        {"Country": "Malawi", "CountryCode": "MW","id":132},
        {"Country": "Malaysia", "CountryCode": "MY","id":133},
        {"Country": "Maldives", "CountryCode": "MV","id":134},
        {"Country": "Mali", "CountryCode": "ML","id":135},
        {"Country": "Malta", "CountryCode": "MT","id":136},
        {"Country": "Marshall Islands", "CountryCode": "MH","id":137},
        {"Country": "Martinique", "CountryCode": "MQ","id":138},
        {"Country": "Mauritania", "CountryCode": "MR","id":139},
        {"Country": "Mauritius", "CountryCode": "MU","id":140},
        {"Country": "Mayotte", "CountryCode": "YT","id":141},
        {"Country": "Mexico", "CountryCode": "MX","id":142},
        {"Country": "Micronesia, Federated States of", "CountryCode": "FM","id":143},
        {"Country": "Moldova", "CountryCode": "MD","id":144},
        {"Country": "Monaco", "CountryCode": "MC","id":145},
        {"Country": "Mongolia", "CountryCode": "MN","id":146},
        {"Country": "Montenegro", "CountryCode": "ME","id":147},
        {"Country": "Montserrat", "CountryCode": "MS","id":148},
        {"Country": "Morocco", "CountryCode": "MA","id":149},
        {"Country": "Mozambique", "CountryCode": "MZ","id":150},
        {"Country": "Myanmar", "CountryCode": "MM","id":151},
        {"Country": "Namibia", "CountryCode": "NA","id":152},
        {"Country": "Nauru", "CountryCode": "NR","id":153},
        {"Country": "Nepal", "CountryCode": "NP","id":154},
        {"Country": "Netherlands", "CountryCode": "NL","id":155},
        {"Country": "Netherlands Antilles", "CountryCode": "AN","id":156},
        {"Country": "New Caledonia", "CountryCode": "NC","id":157},
        {"Country": "New Zealand", "CountryCode": "NZ","id":158},
        {"Country": "Nicaragua", "CountryCode": "NI","id":159},
        {"Country": "Niger", "CountryCode": "NE","id":160},
        {"Country": "Nigeria", "CountryCode": "NG","id":161},
        {"Country": "Niue", "CountryCode": "NU","id":162},
        {"Country": "Norfolk Island", "CountryCode": "NF","id":163},
        {"Country": "Northern Mariana Islands", "CountryCode": "MP","id":164},
        {"Country": "Norway", "CountryCode": "NO","id":165},
        {"Country": "Oman", "CountryCode": "OM","id":166},
        {"Country": "Pakistan", "CountryCode": "PK","id":167},
        {"Country": "Palau", "CountryCode": "PW","id":168},
        {"Country": "Panama", "CountryCode": "PA","id":169},
        {"Country": "Papua New Guinea", "CountryCode": "PG","id":170},
        {"Country": "Paraguay", "CountryCode": "PY","id":171},
        {"Country": "Peru", "CountryCode": "PE","id":172},
        {"Country": "Philippines", "CountryCode": "PH","id":173},
        {"Country": "Pitcairn", "CountryCode": "PN","id":174},
        {"Country": "Poland", "CountryCode": "PL","id":175},
        {"Country": "Portugal", "CountryCode": "PT","id":176},
        {"Country": "Puerto Rico", "CountryCode": "PR","id":177},
        {"Country": "Qatar", "CountryCode": "QA","id":178},
        {"Country": "Republic of Kosovo", "CountryCode": "XK","id":179},
        {"Country": "Romania", "CountryCode": "RO","id":180},
        {"Country": "Yemen", "CountryCode": "YE","id":244},
        {"Country": "Viet Nam", "CountryCode": "VN","id":240},
        {"Country": "Venezuela", "CountryCode": "VE","id":239},
        {"Country": "Uzbekistan", "CountryCode": "UZ","id":237},
        {"Country": "America", "CountryCode": "US","id":235},
        {"Country": "United Kingdom", "CountryCode": "GB","id":234},
        {"Country": "United Arab Emirates", "CountryCode": "AE","id":233},
        {"Country": "Ukraine", "CountryCode": "UA","id":232},
        {"Country": "Turkmenistan", "CountryCode": "TM","id":227},
        {"Country": "Turkey", "CountryCode": "TR","id":226},
        {"Country": "Tanzania", "CountryCode": "TZ","id":218},
        {"Country": "Tajikistan", "CountryCode": "TJ","id":217},
        {"Country": "Switzerland", "CountryCode": "CH","id":214},
        {"Country": "Sweden", "CountryCode": "SE","id":213},
        {"Country": "Swaziland", "CountryCode": "SZ","id":212},
        {"Country": "Sudan", "CountryCode": "SD","id":209},
        {"Country": "Spain", "CountryCode": "ES","id":207},
        {"Country": "South Africa", "CountryCode": "ZA","id":204},
        {"Country": "Somalia", "CountryCode": "SO","id":203},
        {"Country": "Singapore", "CountryCode": "SG","id":199},
        {"Country": "Serbia", "CountryCode": "RS","id":196},
        {"Country": "Saudi Arabia", "CountryCode": "SA","id":194},



    ];

// the country you're looking for
    var country = document.getElementById("search").value;
// iterate over each element in the array
    for (let i = 0; i < obj.length; i++){
        // look for the entry with a matching value
        if (obj[i].Country == country){
            result(country,obj[i].id)
        }else {
            document.getElementById("name").innerHTML = "کشور مورد نظر یافت نشد";
        }
    }
}
function result(country,id) {
    const url = "https://api.covid19api.com/summary"

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const dade =data.Countries[id];
            document.getElementById("newconfirmed").innerHTML = dade.NewConfirmed;
            document.getElementById("totalconfirmed").innerHTML = dade.TotalConfirmed;
            document.getElementById("newdeaths").innerHTML = dade.NewDeaths;
            document.getElementById("totaldeaths").innerHTML = dade.TotalDeaths;
            document.getElementById("newrecovered").innerHTML = dade.NewRecovered;
            document.getElementById("totalrecovered").innerHTML = dade.TotalRecovered;
            document.getElementById("name").innerHTML = country +":آمار کشور ";
            if (dade.NewConfirmed>1000){
                document.getElementById("card").style.backgroundColor = "#ff7979";
            }else if (dade.NewConfirmed<1000){
                document.getElementById("card").style.backgroundColor = "#7bed9f";
            }

        });
}

