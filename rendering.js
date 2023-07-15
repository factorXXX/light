const machine=document.getElementById("machine")
let canvas 
let ctx 
var mul = 1
let coloures = {
  green:"#B4EB46",
  red:"#CC2218",
  yellow:"#FFC500",
  white:"#fff",
}
function playermargin(){
  let mul=window.getComputedStyle(document.documentElement).getPropertyValue('--mul')
  let pla=document.getElementById("player")
  pla.style.marginTop=(tmp.location[0]*70*mul)+(5*mul)+"px"
  pla.style.marginLeft=(tmp.location[1]*70*mul)+(8.5*mul)+"px"
}
function startMachine(){
  mul = Math.round((Math.min(Math.min(1, window.innerHeight/70/1.3/(tmp.area[0])), window.innerWidth/73/(tmp.area[1])))*100)/100
  let inhtm = ""
  inhtm+=('<canvas width="900" height="900" id="laserCanvas"></canvas>')
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
  canvas =document.getElementById("laserCanvas");
  canvas.height = tmp.building.length*70
  canvas.width = tmp.building[0].length*70
  ctx    =canvas.getContext("2d");
  ctx.lineWidth = 4;
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



function updatecanvas(){
  //find what to update
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
  //loop through what we have found
  for(const x of diff){
    i = JSON.parse(x)
    ctx.clearRect(i[1]*70, i[0]*70, 70, 70)
    build = tmp.building[i[0]][i[1]]
    corX=i[1]*70
    corY=i[0]*70
    //halves first because they can be overdrawn
    if(build[0]!=="void"){
    for(const layer of tmp.halflaserwhere[i[0]][i[1]]){
      ctx.beginPath();
        moveonCanvas(corY, corX, reverse(layer[0]))
        if(["redpass","greenpass","yellowpass"].includes(build[0])){
          if (layer[1]!==(build[0].substring(0,build[0].length-4))){
            if (layer[0]==="down"){
              a=corX+35
              b=corY+65
            }
            else if (layer[0]==="up"){
              a=corX+35
              b=corY+5
            }
            else if (layer[0]==="left"){
              b=corX+5
            }
            else if (layer[0]==="right"){
              a=corX+65
              b=corY+35
            }
            ctx.lineTo(a,b)
          }
        }
        else ctx.lineTo(corX+35,corY+35)
        ctx.strokeStyle = coloures[layer[1]]
        ctx.stroke();
      ctx.closePath()
    }

    for(const layer of tmp.laserwhere[i[0]][i[1]]){
      ctx.beginPath();
        moveonCanvas(corY, corX, layer[0])
        drawline(corY, corX, layer[0],build,layer[1])
        ctx.strokeStyle = coloures[layer[1]]
        ctx.stroke();
      ctx.closePath()
    }}}
  tmp.rendering.laserDamagePrev=new Set(Array.from(tmp.rendering.laserDamage))
  tmp.rendering.laserDamage.clear()
}



function moveonCanvas(y,x,p){
  if (p==="down"){
    x=x+35
  }
  else if (p==="up"){
    x=x+35
    y=y+70
  }
  else if (p==="left"){
    x=x+70
    y=y+35
  }
  else if (p==="right"){
    x=x
    y=y+35
  }
  ctx.moveTo(x,y)
}

function drawline(y,x,p,build,color){
  if(build[0]!=="mirror"){
  if (p==="down"){
    x=x+35
    y=y+70
  }
  else if (p==="up"){
    x=x+35
  }
  else if (p==="left"){
    y=y+35
  }
  else if (p==="right"){
    x=x+70
    y=y+35
  }
  ctx.lineTo(x,y)
  }
  let curx=0
  let cury=0
  if(build[0]==="mirror"){
    if (p==="down"){
      curx=x+35
      cury=y+30
    }
    else if (p==="up"){
      cury=y+40
      curx=x+35
    }
    else if (p==="left"){
      curx=x+40
      cury=y+35
    }
    else if (p==="right"){
      curx=x+30
      cury=y+35
    }

    ctx.lineTo(curx,cury)

    let builder = build[1].split("-")
    builder.splice(builder.indexOf(p),1)
    builder=(reverse(builder[0]))

      if (builder==="down"){
        curx=x+35
        cury=y+40
        ctx.lineTo(curx,cury)
        cury+=30
        ctx.lineTo(curx,cury)
      }
      else if (builder==="up"){
        cury=y+30
        curx=x+35
        ctx.lineTo(curx,cury)
        cury=y
        ctx.lineTo(curx,cury)
      }
      else if (builder==="left"){
        curx=x+30
        cury=y+35
        ctx.lineTo(curx,cury)
        curx=x
        ctx.lineTo(curx,cury)
      }
      else if (builder==="right"){
        curx=x+40
        cury=y+35
        ctx.lineTo(curx,cury)
        curx+=30
        ctx.lineTo(curx,cury)
      }
    }
}