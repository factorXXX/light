var player={
  levelbeaten:[0],
  perfectbeaten:[],
  editor:{
    data: [
      [["boxwall"], [null]],
      [[null], [null]],
    ]
  },
}
function save() {
  localStorage.setItem('player', JSON.stringify(player));
}

function load() {
  if (!localStorage.getItem("player")) {
    player={
  levelbeaten:[0],
  perfectbeaten:[],
  editor:{
    data: [
      [["boxwall"], [null]],
      [[null], [null]],
    ]
  },
    }
    save()
    window.location.reload();
  }

  player = {...player, ...JSON.parse(localStorage.getItem('player'))} 
  var app = new Vue({
      el: "#app",
      data: {
        player,
        tmp,
      },
  })
  app.$forceUpdate();
  
  
}
window.onload=function(){

  load()
    if(player==null){
  player={  
    levelbeaten:[0],
    perfectbeaten:[],
    editor:{
      data: [
        [["boxwall"], [null]],
        [[null], [null]],
      ]
    },
      }
    save()
    window.location.reload();
  }
  reset()
  tmp.level=1
};

function exportSave() {
  let str = btoa(JSON.stringify(player));
navigator.clipboard.writeText(str)
let btn=document.getElementById("export")
btn.style.background=("#449944")
setTimeout(() => {
  btn.style.background=("")
}, 600);
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
  levelbeaten:[],
  perfectbeaten:[],
    }
    save()
    window.location.reload();
    
  }
}