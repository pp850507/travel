
let data=[];

let xhr = new XMLHttpRequest();
xhr.open('get','https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',true);
xhr.send(null);


xhr.onload = function(){
    data = JSON.parse(xhr.responseText).result.records;
    let str = '';
    for(let i=0;i<data.length;i++){
    str += `
        <li>
            <div class="area_map d-flex" style="background:url(${data[i].Picture1}) no-repeat center center;">
                <h4 class="name">${data[i].Name}</h4>
                <p class="area">${data[i].Zone}</p>        
            </div>
            <div class="area_text d-flex">
                <div class="text">
                <p class="time">${data[i].Opentime}</p>
                <p class="address">${data[i].Add}</p>
                <p class="Telephone">${data[i].Tel}</p>
                </div>
                <div class="fee">
                        <p>${data[i].Ticketinfo}</p>
                </div>
            </div>
        </li>`
    };
datasheet.innerHTML = str;
area.textContent = '全部景點';
}


let changeArea = document.querySelector('.selectionArea_box');
changeArea.addEventListener('change',showData);

let datasheet = document.querySelector('.datasheet');
let area = document.querySelector('.dataArea h3');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let gotop = document.querySelector('top');





btn1.addEventListener('click',showDataBtn);
btn2.addEventListener('click',showDataBtn);
btn3.addEventListener('click',showDataBtn);
btn4.addEventListener('click',showDataBtn);

//四大熱門按鈕
function showDataBtn(e){
    e.preventDefault();
    let str = '';
    for(let i=0;i<data.length;i++){
        if(data[i].Zone == e.target.textContent){
            str += `
                <li>
                    <div class="area_map d-flex" style="background:url(${data[i].Picture1}) no-repeat center center;">
                        <h4 class="name">${data[i].Name}</h4>
                        <p class="area">${data[i].Zone}</p>        
                    </div>
                    <div class="area_text d-flex">
                        <div class="text">
                        <p class="time">${data[i].Opentime}</p>
                        <p class="address">${data[i].Add}</p>
                        <p class="Telephone">${data[i].Tel}</p>
                        </div>
                        <div class="fee">
                                <p>${data[i].Ticketinfo}</p>
                        </div>
                    </div>
                </li>`
            };
        };
    datasheet.innerHTML = str;
    area.textContent = e.target.textContent;
};



function showData(e){
    let str = '';
    for(let i=0;i<data.length;i++){
        if(data[i].Zone == e.target.value){
            str += `
                <li>
                    <div class="area_map d-flex" style="background:url(${data[i].Picture1}) no-repeat center center;">
                        <h4 class="name">${data[i].Name}</h4>
                        <p class="area">${data[i].Zone}</p>        
                    </div>
                    <div class="area_text d-flex">
                        <div class="text">
                        <p class="time">${data[i].Opentime}</p>
                        <p class="address">${data[i].Add}</p>
                        <p class="Telephone">${data[i].Tel}</p>
                         </div>
                        <div class="fee">
                            <p>${data[i].Ticketinfo}</p>
                        </div>
                    </div>
                </li>`
        }
    }
    datasheet.innerHTML = str;
    area.textContent = e.target.value;
};




//TOP
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.top').style.display = "block";
    } else {
        document.querySelector('.top').style.display = "none";
    }
}

$('.top').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0
    },1000);
});





