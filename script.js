//     function GetRupees(){
//         var dolr = document.getElementById('dollar').value;
//         document.getElementById('value').innerHTML = (dolr * 75.86);
//     }


function GetRupees(){
fetch('https://api.exchangerate.host/latest')
.then((ApiData) => {
    console.log(ApiData)
    return ApiData.json();
}).then((RealData)=> {
    var A = document.getElementById('dollar').value;
    var B = A * (RealData.rates.INR);
    document.getElementById('Gtinr').innerHTML = B;
    document.getElementById('value').innerHTML = `${RealData.rates.INR}`;
    
})
}
