function fnCallAPI(){
    var xmlRequest = new XMLHttpRequest();

    xmlRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            //console.log(response);
            fnFillList(response);
        }
    }
    xmlRequest.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xmlRequest.send();
}

function fnFillList(response){
    var output='';

    for(i=0;i< response.length; i++){
        output += '<div class="row MLeft5"> ';
        output += `<div class="col-sm-4"> ${response[i].id} </div>`; 
        output += `<div class="col-sm-4"> ${response[i].title} </div>`; 
        output += '<div class="col-sm-4"><input type="checkbox"'+ (response[i].completed == true ? 'checked disabled': '') + ' onclick="fnSetCount(this)"></div>'; 
        output += '</div>';
    }
    document.getElementById('divTaskList').innerHTML = output;
}

//alert on completing 5 tasks

var count=0;

function fnSetCount(element){
    //console.log('fnSetCount');
    if (element.checked == true){
        count = count + 1;
        //console.log('checked');
      } 
      else {
        count = count - 1;
        //console.log('not checked');
      }
      //console.log(count);
      checkCounter();
}
function checkCounter(){
    let promise = new Promise(function(resolve, reject){
        if(count == 5){
            resolve('Congrats. 5 Tasks have been Successfully Completed');
        }
    })
    promise.then(function(msg){
        alert(msg);
    })
}