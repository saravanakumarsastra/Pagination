/**
 * getting data via XMLHttpRequest
 */

let request = new XMLHttpRequest();
request.open('GET', "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();

request.onload=function(){
    let data;
    data = JSON.parse(request.response);
    console.log(data);
    
    let tb = document.createElement("tbody");
    table.append(tb);
    let tbr = [];
    let tbd = [];
    for(let i=0;i<10;i++){
        tbr[i] = document.createElement("tr");
        tbr[i].setAttribute("id",i);
        tb.append(tbr[i]);
        for(let j=0;j<3;j++){
            tbd[j] = document.createElement("td");
            tbd[j].setAttribute('id',i+String((j+1)));
            if(j===0)
                tbd[j].innerText = data[i].id;
            else if(j===1)
                tbd[j].innerText = data[i].name;
            else
                tbd[j].innerText = data[i].email;
            tbr[i].append(tbd[j]);
        }
    }
    document.body.addEventListener('click', function(e){
        if(e.target.id === "First"){
            for(let i=0; i<10; i++){
                document.getElementById(i + "1").innerText = data[i].id;
                document.getElementById(i + "2").innerText = data[i].name;
                document.getElementById(i + "3").innerText = data[i].email;
            } 
        }
        else if(e.target.id === "Last"){
            for(let i=0; i<10; i++){
                document.getElementById(i + "1").innerText = data[90+i].id;
                document.getElementById(i + "2").innerText = data[90+i].name;
                document.getElementById(i + "3").innerText = data[90+i].email;
            } 
        }
        else if(e.target.id === "Prev"){
            let temp = Number(document.getElementById("01").innerText);
            
            for(let i=0;  i<10; i++){
                document.getElementById(i + "1").innerText = data[(temp- 11)+i].id;
                document.getElementById(i + "2").innerText = data[(temp- 11)+i].name;
                document.getElementById(i + "3").innerText = data[(temp- 11)+i].email;
            }
        }
        else if(e.target.id === "Next"){
            let temp = Number(document.getElementById("01").innerText);
            for(let i=0;  i<10; i++){
                document.getElementById(i + "1").innerText = data[(temp+ 9)+i].id;
                document.getElementById(i + "2").innerText = data[(temp+ 9)+i].name;
                document.getElementById(i + "3").innerText = data[(temp+ 9)+i].email;
            }
        }
        else{
            for(let i=0; i<10; i++){
                document.getElementById(i + "1").innerText = data[(e.target.id-1)*10 + i].id;
                document.getElementById(i + "2").innerText = data[(e.target.id-1)*10 + i].name;
                document.getElementById(i + "3").innerText = data[(e.target.id-1)*10 + i].email;
            } 
        }
    });
}

let div = document.createElement("div");
let table = document.createElement("table");
table.setAttribute("class", "table");

let th = document.createElement("thead");
th.setAttribute("class","thead-dark");
let thr = document.createElement("tr");
th.append(thr);
let thdID = createTableHeaderDefinition("ID");
thr.append(thdID);
let thdName = createTableHeaderDefinition("NAME");
thr.append(thdName);
let thdEmail = createTableHeaderDefinition("EMAIL");
thr.append(thdEmail);


/**====================Table body is handled here ===================== */



/** Table footer handled here - Button creation and adding it to table footer */

let tf = document.createElement("tfoot");
let tfr = document.createElement("tr");
let tfd = document.createElement("td");

tfd.setAttribute("colspan",'3');
let btnFirst = createButton("btn btn-primary", "First");
tfd.append(btnFirst);
let btnPrev = createButton("btn btn-info", "Prev");
tfd.append(btnPrev);

let btnSeries = [];
for(let i=0;i<10;i++){
    btnSeries[i] = createButton("btn btn-light", i+1);
    tfd.append(btnSeries[i]);
}

let btnNext = createButton("btn btn-info", "Next");
tfd.append(btnNext);
let btnLast = createButton("btn btn-primary", "Last");
tfd.append(btnLast);


tf.append(tfr);
tfr.append(tfd);
document.body.append(div);
div.append(table);
table.append(th);
table.append(tf);


/**---------------------Function portion ---------------------------------*/

function createButton(className,text){
    let btn = document.createElement("button");
    btn.setAttribute("class",className);
    btn.innerText = text;
    btn.id=text;
    return btn;
}

function createTableHeaderDefinition(heading){
    let thd= document.createElement("th");
    thd.setAttribute("scope","col");
    thd.innerText = heading;
    return thd;
}



