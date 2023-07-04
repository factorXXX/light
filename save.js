
var player={
  k:null, //on screen controls
  levelbeaten:[],
  perfectbeaten:[],
  //version:1,
  //first lvl, store block and infinite loop
  tutorial:[false,false,false,false,false],
  editor:{
    location:[0,0],
    data: [
      [[null], [null]],
      [[null], [null]],
    ]
  },
  galaxy:{
    cloudsaving:false,
    lastsavetime:0,
  }
}
const baseplayer={
  k:null, //on screen controls
  levelbeaten:[],
  perfectbeaten:[],
  //version:1,
  //first lvl, store block and infinite loop
  tutorial:[false,false,false,false,false],
  editor:{
    location:[0,0],
    data: [
      [[null], [null]],
      [[null], [null]],
    ]
  },
  galaxy:{
    cloudsaving:false,
    lastsavetime:0,
  }
}
function save(loading=false) {
  if(!loading)player.galaxy.lastsavetime=Date.now()
  localStorage.setItem('player', JSON.stringify(player));
  //save to cloud
  if(!loading&&tmp.galaxy.ongalaxy&&tmp.galaxy.loggedin&&player.galaxy.cloudsaving)cloudSave()
}

function load() {
  if (!localStorage.getItem("player")) {
    //make a save without saving current time
    save(true)
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
/*this was used to display save timestamp during cloud loading but it didn't work
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let t   = undefined
let hrs = undefined
let min = undefined
let day = undefined
let mon = undefined
let yer = undefined
function getTimestr(x){
  t = new Date(x)
  hrs = t.getHours()
  min = t.getMinutes()
  day = t.getDate()
  mon = months[t.getMonth()]
  yer = t.getFullYear()
  return(((hrs<10)?"0":"")+hrs+":"+((min<10)?"0":"")+min+" "+mon+" "+day+", "+yer)
}
*/
window.onload = () => {
  load()
  //check if there is a cloud save and if it's newer
  window.addEventListener("message", e => {
    if (e.origin === "https://galaxy.click") {
      tmp.galaxy.ongalaxy=true
      if(e.data){
      if(e.data.content && e.data.content!==null){
        tmp.galaxy.loggedin=true
        const incloud = JSON.parse(LZString.decompressFromBase64(e.data.content))
        if(incloud.galaxy.lastsavetime > player.galaxy.lastsavetime){
          //load with no confirmation if there's no save
          if(player.galaxy.lastsavetime===0){importSave(e.data.content)}
          //confirm loading if there is a save
          else if(confirm(
          "You have a newer save in Galaxy Cloud™. Do you want to use a save from Galaxy Cloud™?"+
          "\nCloud save: "+e.data.label +/*", made on "+ getTimestr(incloud.lastsavetime) +*/
          "\nLocal save: "+ getlabel() /*+", made on "+ getTimestr(player.lastsavetime)*/
          )){
            importSave(e.data.content)
          }
        }
      }
      //is player logged in
      else if(e.data.error===true){
        if(e.data.message==="no_account") tmp.galaxy.loggedin = false
        else {tmp.galaxy.loggedin=true}
      }
      //if there's no errors and no save enable cloudsaving by default
      else {
        tmp.galaxy.loggedin=true
        player.galaxy.cloudsaving=true
      }
  }}});
  window.top.postMessage({
    action: "load",
    slot: 0,
  }, "https://galaxy.click");
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
  btn.innerHTML="Copied!"
    setTimeout(() => {
      btn.style.background=("")
      btn.innerHTML="Export"
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
    player=JSON.parse(JSON.stringify(baseplayer));
    save()
    window.location.reload();
  }
}


/* galaxy cloud saving */
function getlabel(){
  return (player.levelbeaten.length + " beaten, " + player.perfectbeaten.length + " perfect")
}
//save
function cloudSave(){
window.top.postMessage({
  action: "save",
  slot: 0,
  label: getlabel(),
  data: LZString.compressToBase64(JSON.stringify(player)),
}, "https://galaxy.click");
}
