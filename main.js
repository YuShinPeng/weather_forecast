// DOM節點
const city = document.querySelector("#city");
const Wx = document.querySelector("#Wx");
const MinT = document.querySelector("#MinT");
const MaxT = document.querySelector("#MaxT");
const PoP = document.querySelector("#PoP");
const select = document.querySelector("#select");

// const Taipei = document.querySelector("#Taipei");
// const Taoyuan = document.querySelector("#Taoyuan");
// const Taichung = document.querySelector("#Taichung");
// const Tainan = document.querySelector("#Tainan");
// const Kaohsiung = document.querySelector("#Kaohsiung");

let cityList =["Taipei" , "Taoyuan" , "Taichung" , "Tainan" , "Kaohsiung" ]
let sourceData =[];




select.addEventListener("change",function(){
    fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-CEF7D024-39BA-4493-8D04-1A3875E8971A")
// 轉成 json 格式
    .then(function(response){
    return response.json();
    })

// 回傳的資料
    .then(function(data){
    console.log(data);
    sourceData = data;
    console.log(sourceData);
    })

// 錯誤處理
    .catch(function(error){

    })
    
    console.log(select.value);
    console.log(cityList);
    console.log(cityList.includes(select.value));
    
    if(select.value === "Taipei"){
        city.innerHTML = sourceData.records.location[5].locationName;
        Wx.innerHTML = sourceData.records.location[5].weatherElement[0].time[0].parameter.parameterName;
        MinT.innerHTML = "氣溫: " + sourceData.records.location[5].weatherElement[2].time[0].parameter.parameterName;
        MaxT.innerHTML = sourceData.records.location[5].weatherElement[4].time[0].parameter.parameterName;
        PoP.innerHTML = "降雨機率: " + sourceData.records.location[5].weatherElement[1].time[0].parameter.parameterName+"%";
    }   
})
