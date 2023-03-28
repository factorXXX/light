var player={
  levelbeaten:[0],
  perfectbeaten:[],
  version:1,
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

    save()

  }
  player = {...player, ...JSON.parse(localStorage.getItem('player'))} 
  var app = new Vue({
      el: "#app",
      data: {
        player,
        tmp,
      },
  })
  
  
}
window.onload = () => { 

  load()
   
};

function exportSave() {
navigator.clipboard.writeText(btoa(JSON.stringify(player)))
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

    localStorage.removeItem('player');
    window.location.reload();
  }
}