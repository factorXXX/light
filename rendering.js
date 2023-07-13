const machine=document.getElementById("machine")
var mul = 1
function playermargin(){
  let mul=window.getComputedStyle(document.documentElement).getPropertyValue('--mul')
  let pla=document.getElementById("player")
  pla.style.marginTop=(tmp.location[0]*70*mul)+(5*mul)+"px"
  pla.style.marginLeft=(tmp.location[1]*70*mul)+(8.5*mul)+"px"
}
function startMachine(){
  mul = Math.round((Math.min(1, window.innerWidth/73/1.07/tmp.area[0]))*100)/100
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
      inhtm+=('<div class="laserContainer" id="las'+getcellnum(r, c)+'"></div>')
      //line beetween portals
      if(tmp.building[r][c][0]==="portal"){
        inhtm+=('<svg style="visibility: hidden; z-index: 25 !important; filter: drop-shadow(0px 0px 2px #000000);"><line id="l'+getcellnum(r, c)+'"stroke-linecap="round" stroke="red" stroke-width="2" x1="'+(35*mul)+'" y1="'+(35*mul)+'" x2="0" y2="0"/></svg>'
      )}
      inhtm+=("</td>")
    }
    inhtm+=("</tr>")
  }
  inhtm+=("</tbody></table>")
  machine.innerHTML=inhtm
  playermargin()
  cacheElements()
  //scale to fit the screen
  document.documentElement.style.setProperty("--mul", mul)
}
function getcellnum(r,c){
  return (((r<10)?"0":"")+r+((c<10)?"0":"")+c)
}
let cached_buildings=[]
//let cached_laser=[]
let d=document
function cacheElements(){
  cached_buildings=[]
  for(let r=0;r<tmp.area[0];r++){
    for(let c=0;c<tmp.area[1];c++){
      let x = getcellnum(r,c)
      let b = "b"+(x)
      let las = "las"+(x)
      cached_buildings["#"+(x)]=d.getElementById(b)
      //cached_laser["#"+(x)]=d.getElementById(las)
    }
  }
  tmp.rendering.laserDamagePrev.clear()
  tmp.rendering.laserDamage.clear()
}
function renderBuildingDamage(){
  for(const x of tmp.rendering.buildingDamage){
    cached_buildings["#"+(getcellnum(x[0], x[1]))].classList=getclass(x[0], x[1])
  }
  tmp.rendering.buildingDamageHistory.push(Array.from(tmp.rendering.buildingDamage))
  tmp.rendering.buildingDamage.clear()
}
function getPosition(string, index) {
  return string.split(',', index).join(',').length;
}
function renderLaserDamage(){
  //find difference
  let diff = new Set()
  for(const elem of tmp.rendering.laserDamage){
    if(!tmp.rendering.laserDamagePrev.has(elem)){
      x=elem.substring(0,getPosition(elem, 2))+"]"
      if(x.includes("]]"))x=x.slice(0,-1)
      diff.add(x);
    }
  }

  for (const elem of tmp.rendering.laserDamagePrev) {
    if(!tmp.rendering.laserDamage.has(elem)){
      x=elem.substring(0,getPosition(elem, 2))+"]"
      if(x.includes("]]"))x=x.slice(0,-1)
      diff.add(x);
    }
  }
  //log current prev and diff
  //console.log("diff: ",diff,"\nprev: ",tmp.rendering.laserDamagePrev,"\ncurr: ",tmp.rendering.laserDamage)
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
    //cached_laser["#"+(getcellnum(i[0], i[1]))].innerHTML = chtm
    let el = document.getElementById("las"+(getcellnum(i[0], i[1])))
    el = replaceHtml(el,chtm)
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
    str=str+(current[1])
    str=str+("Laser laser90 "+build[1])
  } else {//laser
    str=str+(current[1])
    str=str+("Laser laser "+current[0])
  }
  }
  else{ //half lasers
    let current = tmp.halflaserwhere[r][c][l]
    str=str+(current[1])
    str=str+("Laser laser half "+current[0])
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
      line.x2.baseVal.value = endCell.left - startCell.left + (35*mul)
      line.y2.baseVal.value = endCell.top - startCell.top + (35*mul)
    line.style.visibility = "visible"
    } else {
    line.style.visibility = "hidden"
    }
}
};

function replaceHtml(el, html) {
	var newEl = el.cloneNode(false);
	newEl.innerHTML = html;
	el.parentNode.replaceChild(newEl, el);
	return newEl;
};