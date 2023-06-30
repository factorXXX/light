
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
  lastsavetime:0,
}
function save(cloud=player.cloudsaving) {
  player.lastsavetime=Date.now()
  localStorage.setItem('player', JSON.stringify(player));
  if(cloud)cloudSave()
}

function load() {
  if (!localStorage.getItem("player")) {

    save(false)

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
  //check if there is a cloud save and if it's newer
  window.addEventListener("message", e => {
    if (e.origin === "https://galaxy.click") {
      tmp.ongalaxy=true
      if(e.data.content!==null){
        const incloud = JSON.parse(LZString.decompressFromBase64(e.data.content))
        if(incloud.lastsavetime > player.lastsavetime){
          var locDate = new Date(player.lastsavetime);
          var clDate = new Date(incloud.lastsavetime);
          //need to somehow remove the timezone 
          if(confirm(
          "You have a newer save in Galaxy Cloud™. Do you want to use a save from Galaxy Cloud™?"+
          "\nCloud save: "+ clDate +
          "\nLocal save: "+ locDate
          )){
            importSave(e.data.content)
          }
        }
      }
      else {
        player.cloudsaving=true
      }
    }
  });

  //removing changed levels from completed/beaten
  let levelsArr = Object.entries(level);
  for(let i=0; i< player.perfectbeaten.length; i++){
    if(levelsArr.filter((e)=>e[1].index===player.perfectbeaten[i]).length===0) {
      console.log('level with index ', player.perfectbeaten[i], ' doesnt exist anymore, removing this perfect completion from your save')
      player.perfectbeaten.splice(i, 1)
    }
  }
  for(let i=0; i< player.levelbeaten.length; i++){
    if(levelsArr.filter((e)=>e[1].index===player.levelbeaten[i]).length===0) {
      console.log('level with index ', player.levelbeaten[i], ' doesnt exist anymore, removing this completion from your save')
      player.levelbeaten.splice(i, 1)
    }
  }
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
if(player.cloudsaving){
  /*
  I think cloud saving after every change 
  is unreasonable so there's a 5s cooldown
  edit: nevermind
  */
window.top.postMessage({
  action: "save",
  slot: 0,
  label: getlabel(),
  data: LZString.compressToBase64(JSON.stringify(player)),
}, "https://galaxy.click");
}}
