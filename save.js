
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
  cloudsaving:false,
}
function save() {
  localStorage.setItem('player', JSON.stringify(player));
  cloudSave()
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
  /*load from galaxy if there's no save
   thinking about it again I think it will lead to problems

  if (player.levelbeaten == 0 && player.editor.data.length==2){
    window.addEventListener("message", e => {
      if (e.origin === "https://galaxy.click") {
        if(e.data.content!==null){
          importSave(e.data.content)
        }
      }
    })};
    window.top.postMessage({
      action: "load",
      slot: 0,
    }, "https://galaxy.click");
    */
  //check if user is on Android/iOS and set on screen controls accordingly. I wonder if there's people with some custom OS
  if(navigator.userAgent.indexOf("Android")!==-1 || navigator.userAgent.indexOf("iOS")!==-1){
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
  if(confirm("Are you sure? It will reset EVERYTHING and you will not get any reward!")){

    localStorage.removeItem('player');
    window.location.reload();
  }
}


/* galaxy cloud saving */
function getlabel(){
  return (player.levelbeaten.length + " beaten, " + player.perfectbeaten.length + " perfect")
}
//save
function cloudSave(){
if(tmp.cloudsaved==false && player.cloudsaving==true){
  /*
  I think cloud saving after every change 
  is unreasonable so there's a 30s cooldown
  */
  tmp.cloudsaved=true
  setTimeout(() => {
    tmp.cloudsaved=false
  }, 30000);
  
window.top.postMessage({
  action: "save",
  slot: 0,
  label: getlabel(),
  data: LZString.compressToBase64(JSON.stringify(player)),
}, "https://galaxy.click");
}}
