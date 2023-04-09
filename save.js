
var player={
  k:null, //on screen controls
  levelbeaten:[],
  perfectbeaten:[],
  version:1,
  editor:{
    location:[0,0],
    data: [
      [[null], [null]],
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
  //removing changed levels from completed/beaten
  let levelsArr = Object.entries(level);
  for(let i=0; i< player.perfectbeaten.length; i++){
    if(levelsArr.filter((e)=>e[1].index==player.perfectbeaten[i]).length==0) {
      console.log('level with index ', player.perfectbeaten[i], ' doesnt exist anymore, removing this perfect completion from your save')
      player.perfectbeaten.splice(i, 1)
    }
  }
  for(let i=0; i< player.levelbeaten.length; i++){
    if(levelsArr.filter((e)=>e[1].index==player.levelbeaten[i]).length==0) {
      console.log('level with index ', player.levelbeaten[i], ' doesnt exist anymore, removing this completion from your save')
      player.levelbeaten.splice(i, 1)
    }
  }
  //check if user is on Android/IOS and set on screen controls accordingly. I wonder if there's people with some custom OS
  if(navigator.userAgent.indexOf("Android")!==-1 || navigator.userAgent.indexOf("IOS")!==-1){
    tmp.mobile=true
    if (player.k===null){
      player.k=true
    }
  } else { tmp.mobile=false }
  if (player.k===null)player.k=false
};

function exportSave() {
navigator.clipboard.writeText(LZString.compressToBase64(JSON.stringify(player)))
let btn=document.getElementById("export")
  btn.style.background=("#449944")
    setTimeout(() => {
      btn.style.background=("")
    }, 600);
}

function importSave(imported = undefined) {
  if (imported === undefined) imported = prompt("paste your save here")
  player =JSON.parse(LZString.decompressFromBase64(imported))
  save()
  window.location.reload();
    
}
function hardReset(){
  if(confirm("Are you sure??? It will reset EVERYTHING and you will not get any reward!!!")){

    localStorage.removeItem('player');
    window.location.reload();
  }
}