var player={
  levelbeaten:[0],
  key:true,
}
function save() {
  localStorage.setItem('player', JSON.stringify(player));
}

function load() {
  if (!localStorage.getItem("player")) {
    player={
  levelbeaten:[0],
  key:true,
    }
    save()
    window.location.reload();
  }

  player = JSON.parse(localStorage.getItem('player'));
var app = new Vue({
      el: "#app",
      data: {
        player,
        tmp,
      },
  })
  app.$forceUpdate();
  
  
}
//setInterval(function () {save()}, 1000);
window.onload=function(){

  load()
    if(player==null){
  player={  
    levelbeaten:[0],
    key:true,
      }
    save()
    window.location.reload();
  }
  reset()
  tmp.level=1
};

function exportSave() {
  let str = btoa(JSON.stringify(player));
  //wtf is this?? 
/*const el = document.createElement("textarea");	
el.value = str;	document.body.appendChild(el);	
el.select();	el.setSelectionRange(0, 99999); 
document.execCommand("copy"); */
navigator.clipboard.writeText(str)
let btn=document.getElementById("export")
btn.style.background=("#449944")
setTimeout(() => {
  btn.style.background=("")
}, 600);
//document.body.removeChild(el);
}


function importSave(imported = undefined) {
  if (imported === undefined) imported = prompt("paste your save here")
  player =JSON.parse(atob(imported))
  save()
  window.location.reload();
    
}
function hardReset(){
  if(confirm("Are you sure??? It will reset EVERYTHING and you will not get any reward!!!")){
    player={
  levelbeaten:[]
    }
    save()
    window.location.reload();
    
  }
}