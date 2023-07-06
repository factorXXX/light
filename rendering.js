const machine=document.getElementById("machine")
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
      inhtm+=('"><div class="'+getclass(r, c)+'"><div></div></div>')
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
}

function renderDamage(){
  
}