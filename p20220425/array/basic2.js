// array/basic2.js

let data=
`[{"id":1,"first_name":"Kayla","last_name":"Buffey","email":"kbuffey0@hibu.com","gender":"Female","ip_address":"198.68.189.147"},
{"id":2,"first_name":"Thatch","last_name":"Quilleash","email":"tquilleash1@ed.gov","gender":"Male","ip_address":"243.46.224.4"},
{"id":3,"first_name":"Cherianne","last_name":"Parradine","email":"cparradine2@gov.uk","gender":"Female","ip_address":"212.34.157.10"},
{"id":4,"first_name":"Gunner","last_name":"Casbon","email":"gcasbon3@indiegogo.com","gender":"Male","ip_address":"52.187.165.31"},
{"id":5,"first_name":"Robbert","last_name":"McGirr","email":"rmcgirr4@deliciousdays.com","gender":"Male","ip_address":"13.200.70.171"},
{"id":6,"first_name":"Silas","last_name":"Doumer","email":"sdoumer5@php.net","gender":"Male","ip_address":"211.37.196.35"},
{"id":7,"first_name":"Marita","last_name":"Szymanowski","email":"mszymanowski6@aol.com","gender":"Female","ip_address":"108.33.234.4"},
{"id":8,"first_name":"Loralee","last_name":"Mallalieu","email":"lmallalieu7@seattletimes.com","gender":"Polygender","ip_address":"133.34.199.61"},
{"id":9,"first_name":"Tybie","last_name":"Sessions","email":"tsessions8@loc.gov","gender":"Female","ip_address":"205.95.221.145"},
{"id":10,"first_name":"Trenton","last_name":"Eyckel","email":"teyckel9@dion.ne.jp","gender":"Male","ip_address":"28.201.31.6"},
{"id":11,"first_name":"Gayla","last_name":"Kaubisch","email":"gkaubischa@cornell.edu","gender":"Female","ip_address":"171.124.244.78"},
{"id":12,"first_name":"Steve","last_name":"Canner","email":"scannerb@eepurl.com","gender":"Genderqueer","ip_address":"101.237.80.68"},
{"id":13,"first_name":"Roman","last_name":"Haine","email":"rhainec@over-blog.com","gender":"Male","ip_address":"5.64.230.178"},
{"id":14,"first_name":"Lani","last_name":"Rosone","email":"lrosoned@posterous.com","gender":"Female","ip_address":"161.55.65.86"},
{"id":15,"first_name":"Willy","last_name":"Clery","email":"wclerye@narod.ru","gender":"Male","ip_address":"56.59.255.122"}]`

//find();
let objAry = [];
objAry = JSON.parse(data) // ???????????? ???????????????????????? ?????? (json.parse)

let result = objAry.find(function(elem) {
  return elem.gender=='Female'; //????????? ?????? ??????.
});

console.log(result);