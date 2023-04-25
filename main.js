// DOM節點
const city = document.querySelector("#city");
const Wx = document.querySelector("#Wx");
const MinT = document.querySelector("#MinT");
const MaxT = document.querySelector("#MaxT");
const PoP = document.querySelector("#PoP");
const select = document.querySelector("#select");

let sourceData =[];

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

select.addEventListener("change",(event)=>{
    
});


// console.log(sourceData);



// select.addEventListener("change",(event)=>{
//     city.textContent = `${}`;
// })


