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
      inhtm+=('<td id="'+getcellid(r, c)+'" class="'+getclass(r, c, false)+'" ')
        if(tmp.building[r][c][0]==="portal"){
          inhtm+=('onmouseover="drawaline('+r+','+c+')" onmouseout="drawaline('+r+','+c+',true)"')
        }
      //buildings build
      inhtm+=('"><div id="'+getcellid(r, c, true, "b")+'" class="'+getclass(r, c)+'"><div></div></div>')
      //laser and 90deg laser
      for(layer in tmp.laserwhere[r][c]){
        inhtm+=('<div class="'+getlaserclass(r,c,layer)+'"><div></div></div>')
      }
      //half laser
      for(layer in tmp.halflaserwhere[r][c]){
        inhtm+=('<div class="'+getlaserclass(r,c,layer,false)+'"><div></div></div>')
      }
      //line beetween portals
      if(tmp.building[r][c][0]==="portal"){
        inhtm+=('<svg style="visibility: hidden; z-index: 25 !important; filter: drop-shadow(0px 0px 2px #000000);"><line id="'+getcellid(r, c,false)+'"stroke-linecap="round" stroke="red" stroke-width="2" x1="35" y1="35" x2="0" y2="0"/></svg>'
      )}
      inhtm+=("</td>")
    }
    inhtm+=("</tr>")
  }
  inhtm+=("</tbody></table>")
  machine.innerHTML=inhtm
  playermargin()
}

function renderBuildingDamage(){
  let d=document
  for(const x of tmp.rendering.buildingDamage){
    d.getElementById(getcellid(x[0], x[1], true, "b")).classList=getclass(x[0], x[1])
  }
  tmp.rendering.buildingDamage.clear()
}

function renderLaserDamage(){
  tmp.rendering.laserDamage[0]=tmp.rendering.laserDamage[0].concat(tmp.rendering.laserDamage[1])
  let d=document
  for(i in tmp.rendering.laserDamage[0]){
    let chtm=""
    //theory - tmp.rendering.laserDamage[i]=[1,1] and without duplicates
    let x=tmp.rendering.laserDamage[0][i]
    //preserving building
    let el=d.getElementById(getcellid(x[0], x[1]))
    chtm+=el.firstChild.outerHTML
    //laser and 90 deg laser
    for(layer in tmp.laserwhere[x[0]][x[1]]){
      chtm+=('<div class="'+getlaserclass(x[0],x[1],layer)+'"><div></div></div>')
    }
    //half laser
    for(layer in tmp.halflaserwhere[x[0]][x[1]]){
      chtm+=('<div class="'+getlaserclass(x[0],x[1],layer,false)+'"><div></div></div>')
    }
    
    el.innerHTML=chtm
  }
  tmp.rendering.laserDamage[0]=tmp.rendering.laserDamage[1]
  tmp.rendering.laserDamage[1]=[]
}