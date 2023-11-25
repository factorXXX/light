const machine=document.getElementById("machine")
let canvas 
let ctx
let buildcanvas 
let bctx  
let offscreenBuild
let offscreenLaser
let pla
let rendering={
  mul: 1,
  laserwhere:[],
  halflaserwhere:[],
}
function playermargin(){
  pla.style.marginTop=((tmp.location[0]*70+8.5)*rendering.mul)+"px"
  pla.style.marginLeft=((tmp.location[1]*70+8.5)*rendering.mul)+"px"
}
function startMachine(){
	//if mobile controls enabled level should take up to 40% of vertical space (looks fine on phones, didn't test on tablets), 
	//otherwice 70% on desktops (should also be fine assuming 16:9 aspect ratio)
	if(player.k) rendering.mul = Math.round((Math.min(Math.min(1, window.innerHeight*0.4/70/(tmp.area[0])), window.innerWidth/73/(tmp.area[1])))*100)/100
  else rendering.mul = Math.round((Math.min(Math.min(1, window.innerHeight*0.7/70/(tmp.area[0])), window.innerWidth/73/(tmp.area[1])))*100)/100
	let inhtm = ""
  inhtm+=('<canvas  id="buildingsCanvas"></canvas>')
  inhtm+=('<canvas  id="laserCanvas"></canvas>')
  inhtm+=('<div id="player" class="player"><div></div></div>')
  inhtm+=('<table class="gamezone" ><tbody>')
  for(let r=0;r<tmp.area[0];r++){
    inhtm+=("<tr>")
    for(let c=0;c<tmp.area[1];c++){
      //td build
      inhtm+=('<td id="c'+getcellnum(r, c)+'" class="'+getclass(r, c, false)+'" ')
        if(tmp.building[r][c][0]==="portal"){
          inhtm+=('onmouseover="drawaline('+r+','+c+')" onmouseout="drawaline('+r+','+c+',true)"')
        }
        //buildings build
        if(tmp.building[r][c][0]==="badportal"){
          inhtm+=('"><div id="b'+getcellnum(r, c)+'" class="'+getclass(r, c)+'"><div></div></div>')
        }
        else if(tmp.building[r][c][0]==="portal"){
        inhtm+=('"><div id="b'+getcellnum(r, c)+'" class="'+getclass(r, c)+'"><div></div></div>')
        //line beetween portals
          inhtm+=('<svg style="visibility: hidden; z-index: 25 !important; filter: drop-shadow(0px 0px 2px #000000);"><line id="l'+getcellnum(r, c)+'"stroke-linecap="round" stroke="red" stroke-width="2" x1="'+(35*rendering.mul)+'" y1="'+(35*rendering.mul)+'" x2="0" y2="0"/></svg>'
        )}
      inhtm+=("</td>")
    }
    inhtm+=("</tr>")
  }
  inhtm+=("</tbody></table>")
  machine.innerHTML=inhtm


  pla = document.getElementById("player")
  canvas = document.getElementById("laserCanvas");
  buildcanvas = document.getElementById("buildingsCanvas");
  canvas.height = tmp.building.length*70
  canvas.width = tmp.building[0].length*70
  buildcanvas.height = canvas.height
  buildcanvas.width = canvas.width
  offscreenBuild = buildcanvas.transferControlToOffscreen()
  offscreenLaser = canvas.transferControlToOffscreen()
  buildWorker.postMessage({ canvas: offscreenBuild, build: tmp.building }, [offscreenBuild]);
  laserWorker.postMessage({ canvas: offscreenLaser, laser: rendering, build: tmp.building }, [offscreenLaser]);
  playermargin()
  //cacheElements()
  //scale to fit the screen
  document.documentElement.style.setProperty("--mul", rendering.mul)
}
function getcellnum(r,c){
  return (((r<10)?"0":"")+r+((c<10)?"0":"")+c)
}

function getclass(r,c,h=true){
  let current = (tmp.building[r][c])
  if(h){
    return(current[0]+' '+(current[1]?current[1]:"")+' '+(current[2]?current[2]:""))
  } 
  else {
  if(['void','horpass','verpass'].includes(current[0])){
    return current[0]
  } else return("") }
}

function drawaline(a,b,destroy=false){
  if(tmp.building[a][b][0]==='portal'){
    let line = document.getElementById("l"+getcellnum(a,b))
    if(!destroy){
      let startCell = document.getElementById("c"+getcellnum(a,b)).getBoundingClientRect()
      let endBuildPos = tmp.building[a][b][1]
      let endCell = document.getElementById("c"+getcellnum(endBuildPos[0],endBuildPos[1])).getBoundingClientRect()
      line.x2.baseVal.value = endCell.left - startCell.left + (35*rendering.mul)
      line.y2.baseVal.value = endCell.top - startCell.top + (35*rendering.mul)
    line.style.visibility = "visible"
    } else {
    line.style.visibility = "hidden"
    }
}
};



