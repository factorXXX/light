var player={
  building:[
    [[null],["light","down","green"],[null]],
    [[null],["box"],[null]],
    [[null],["sun"],[null]],
  ],
  location:[0,0],
  area:[3,3],
  light:[[0,1]],
  level:1,
  levelbeaten:[0],
  previous:[
    1
  ],
  
}
function save() {
  localStorage.setItem('player', JSON.stringify(player));
}

function load() {
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
      building:[
    [[null],["light","down","green"],[null]],
    [[null],["box"],[null]],
    [[null],["sun"],[null]],
  ],
  location:[0,0],
  area:[3,3],
  light:[[0,1]],
  level:1,
  levelbeaten:[0],
          previous:[
    1
  ]
    }
    save()
    window.location.reload();
  }
  reset()
  player.level=1
};

function exportSave() {
  let str = btoa(JSON.stringify(player)); 
const el = document.createElement("textarea");	
el.value = str;	document.body.appendChild(el);	
el.select();	el.setSelectionRange(0, 99999);
document.execCommand("copy");
document.body.removeChild(el); 
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
      building:[
    [[null],["light","down","green"],[null]],
    [[null],["box"],[null]],
    [[null],["sun"],[null]],
  ],
  location:[0,0],
  area:[3,3],
  light:[[0,1]],
  level:1,
  levelbeaten:[]
    }
    save()
    window.location.reload();
    
  }
}