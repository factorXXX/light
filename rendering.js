const machine=document.getElementById("machine")
function playermargin(){
  let pla=document.getElementById("player")
  pla.style.marginTop=(tmp.location[0]*70)+5+"px"
  pla.style.marginLeft=(tmp.location[1]*70)+8.5+"px"
}
function startMachine(){
  let inhtm = ""
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
      inhtm+=('"><div id="b'+getcellnum(r, c)+'" class="'+getclass(r, c)+'"><div></div></div>')
      //laser container
      inhtm+=('<div class="laserContainer" id="las'+getcellnum(r, c)+'">')
        //laser and 90deg laser
          for(layer in tmp.laserwhere[r][c]){
            inhtm+=('<div class="'+getlaserclass(r,c,layer)+'"><div></div></div>')
          }
        //half laser
          for(layer in tmp.halflaserwhere[r][c]){
            inhtm+=('<div class="'+getlaserclass(r,c,layer,false)+'"><div></div></div>')
          }
      inhtm+=('</div>')
      //line beetween portals
      if(tmp.building[r][c][0]==="portal"){
        inhtm+=('<svg style="visibility: hidden; z-index: 25 !important; filter: drop-shadow(0px 0px 2px #000000);"><line id="l'+getcellnum(r, c)+'"stroke-linecap="round" stroke="red" stroke-width="2" x1="35" y1="35" x2="0" y2="0"/></svg>'
      )}
      inhtm+=("</td>")
    }
    inhtm+=("</tr>")
  }
  inhtm+=("</tbody></table>")
  machine.innerHTML=inhtm
  playermargin()
  cacheElements()
}
function getcellnum(r,c){
  return (((r<10)?"0":"")+r+((c<10)?"0":"")+c)
}
let cached_buildings=[]
let cached_laser=[]
let d=document
function cacheElements(){
  cached_buildings=[]
  for(let r=0;r<tmp.area[0];r++){
    for(let c=0;c<tmp.area[1];c++){
      let x = getcellnum(r,c)
      let b = "b".concat(x)
      let las = "las".concat(x)
      cached_buildings["#".concat(x)]=d.getElementById(b)
      cached_laser["#".concat(x)]=d.getElementById(las)
    }
  }
  tmp.rendering.laserDamage.clear()
  tmp.rendering.laserDamagePrev.clear()
}
function renderBuildingDamage(){
  for(const x of tmp.rendering.buildingDamage){
    cached_buildings["#".concat(getcellnum(x[0], x[1]))].classList=getclass(x[0], x[1])
  }
  tmp.rendering.buildingDamage.clear()
}

function renderLaserDamage(){
  //find difference
  let diff = new Set(tmp.rendering.laserDamage)
  for (const elem of tmp.rendering.laserDamagePrev) {
    const operation = (diff.has(elem)) ? 'delete' : 'add';
    diff[operation](elem);
  }
  for(const x of diff){
    i = JSON.parse(x)
    let chtm=""
    //laser and 90 deg laser
    for(layer in tmp.laserwhere[i[0]][i[1]]){
      chtm+=('<div class="'+getlaserclass(i[0],i[1],layer)+'"><div></div></div>')
    }
    //half laser
    for(layer in tmp.halflaserwhere[i[0]][i[1]]){
      chtm+=('<div class="'+getlaserclass(i[0],i[1],layer,false)+'"><div></div></div>')
    }
    
    cached_laser["#".concat(getcellnum(i[0], i[1]))].innerHTML=chtm
  }
  tmp.rendering.laserDamagePrev=new Set(Array.from(tmp.rendering.laserDamage))
  tmp.rendering.laserDamage.clear()
}

function getclass(r,c,h=true){
  let current = [].concat(tmp.building[r][c])
  if(h){
    return(current[0]+' '+(current[1]?current[1]:"")+' '+(current[2]?current[2]:""))
  } 
  else {
  if(['void','horpass','verpass'].includes(current[0])){
    return current[0]
  } else return("") }
}
function getlaserclass(r,c,l,h=true){
  let str = '' 
  if(h){ 
  let current = tmp.laserwhere[r][c][l]
  let build = tmp.building[r][c]
  if (build[0]==='mirror'){//laser90
    str=str.concat(current[1])
    str=str.concat("Laser laser90 "+build[1])
  } else {//laser
    str=str.concat(current[1])
    str=str.concat("Laser laser "+current[0])
  }
  }
  else{ //half lasers
    let current = tmp.halflaserwhere[r][c][l]
    str=str.concat(current[1])
    str=str.concat("Laser laser half "+current[0])
  }
  return str
}
function drawaline(a,b,destroy=false){
  if(tmp.building[a][b][0]==='portal'){
    let line = document.getElementById("l"+getcellnum(a,b))
    if(!destroy){
      let startCell = document.getElementById("c"+getcellnum(a,b)).getBoundingClientRect()
      let endBuildPos = tmp.building[a][b][1]
      let endCell = document.getElementById("c"+getcellnum(endBuildPos[0],endBuildPos[1])).getBoundingClientRect()
      line.x2.baseVal.value = endCell.left - startCell.left + 35
      line.y2.baseVal.value = endCell.top - startCell.top + 35
    line.style.visibility = "visible"
    } else {
    line.style.visibility = "hidden"
    }
}
};