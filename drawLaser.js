let canvas
let ctx
let build
let corHalf
let corLas
let corHalf2
let corLas2
let currentBuilding
let rendering
let mirr = []
onmessage = (evt) => {
  if(evt.data.canvas){
    canvas=evt.data.canvas
    ctx = canvas.getContext("2d");
    ctx.lineWidth = 4;
  }
  ctx.clearRect(0,0,canvas.width,canvas.height)
  rendering = (evt.data.laser)
  building = evt.data.build
    for(r in building){
      for(c in building[0]){
        currentBuilding = building[r][c]
        corHalf = rendering.halflaserwhere[r][c]
        corLas = rendering.laserwhere[r][c]
        corLas2 = [].concat(corLas)
        corHalf2 = [].concat(corHalf)
        x=c*70
        y=r*70

      //make white last and yellow before it
      let a1=[] //yellows
      let b1=[] //whites
      for(let a2=0; a2<corHalf.length; a2++ ){
        if(corHalf[a2][1]==="yellow"){
          a1.push(corHalf[a2])
          corHalf2.splice(a2 ,1)
        }
        else if(corHalf[a2][1]==="white"){
          b1.push(corHalf[a2])
          corHalf2.splice(a2 ,1)
        }
      }
      corHalf = corHalf2.concat(a1).concat(b1)
      a1=[] //yellows
      b1=[] //whites
      for(a2 in corLas){
        if(corLas[a2][1]==="yellow"){
          a1.push(corLas[a2])
          corLas2.splice(a2 ,1)
        }
        else if(corLas[a2][1]==="white"){
          b1.push(corLas[a2])
          corLas2.splice(a2 ,1)
        }
      }
      corLas = corLas2.concat(a1).concat(b1)
      
      if(currentBuilding[0]!=="void"){
        if(["redpass","greenpass","yellowpass"].includes(currentBuilding[0])){
          //get color of pass
          passcol=currentBuilding[0].substring(0, currentBuilding[0].length - 4);
          ctx.lineJoin = "round";
          ctx.lineCap = "round";
          ctx.strokeStyle="black"
          ctx.fillStyle=colors[passcol]
          //draw box
          ctx.beginPath();
            ctx.moveTo(x+6,y+6)
            ctx.lineTo(x+64,y+6)
            ctx.lineTo(x+64,y+64)
            ctx.lineTo(x+6,y+64)
            ctx.lineTo(x+6,y+6)
          ctx.closePath();
          ctx.fill()
          ctx.stroke()
          //draw cross
          ctx.fillStyle="#00000050"
          ctx.beginPath()
          ctx.rect(x+30.5,y+6,8,58)
          ctx.rect(x+6,y+30.5,58,8)
          ctx.closePath()
          ctx.fill()
          ctx.lineJoin = "miter";
          ctx.lineCap = "miter";


          //done with the build now draw full lasers
          
          for(const layer of corLas){
            //full laser is always of the same color
            ctx.beginPath()
            ctx.strokeStyle=colors[layer[1]]
            if (layer[0]==="down"||layer[0]==="up"){
              ctx.moveTo(x+35,y)
              ctx.lineTo(x+35,y+70)
            }
            else /*if (layer[0]==="left"||layer[0]==="right")*/{
              ctx.moveTo(x,y+35)
              ctx.lineTo(x+70,y+35)
            }
            ctx.closePath()
            ctx.stroke()
          } 
          for(const layer of corHalf){
            //half laser always isnt
            ctx.beginPath()
            if (layer[0]==="up"){
              ctx.moveTo(x+35,y)
              ctx.lineTo(x+35,y+4)
            }
            else if (layer[0]==="down"){
              ctx.moveTo(x+35,y+70)
              ctx.lineTo(x+35,y+66)
            } 
            else if (layer[0]==="left"){
              ctx.moveTo(x,y+35)
              ctx.lineTo(x+4,y+35)
            } 
            else{
              ctx.moveTo(x+70,y+35)
              ctx.lineTo(x+66,y+35)
            }

            ctx.strokeStyle=colors[layer[1]]
            ctx.closePath()
            ctx.stroke()
          } 
      }
      else if(currentBuilding[0]==="mirror"){
        for(const layer of corLas){
          //full laser is always laser 90
          ctx.beginPath()
          if (layer[0]==="down"){
            ctx.moveTo(x+35,y)
            ctx.lineTo(x+35,y+30)
          }
          else if (layer[0]==="up"){
            ctx.moveTo(x+35,y+70)
            ctx.lineTo(x+35,y+40)
          } 
          else if (layer[0]==="right"){
            ctx.moveTo(x,y+35)
            ctx.lineTo(x+30,y+35)
          } 
          else{
            ctx.moveTo(x+70,y+35)
            ctx.lineTo(x+40,y+35)
          }
          mirr = currentBuilding[1].split("-")
          mirr.splice(mirr.indexOf(layer[0]),1)
          mirr = mirr[0]
          if (mirr==="up"){
            ctx.lineTo(x+35,y+40)
            ctx.lineTo(x+35,y+70)
          }
          else if (mirr==="down"){
            ctx.lineTo(x+35,y+30)
            ctx.lineTo(x+35,y)
          } 
          else if (mirr==="left"){
            ctx.lineTo(x+40,y+35)
            ctx.lineTo(x+70,y+35)
          } 
          else{
            ctx.lineTo(x+30,y+35)
            ctx.lineTo(x,y+35)
          }
          ctx.strokeStyle = colors[layer[1]]
          ctx.stroke()
        }
        for(const layer of corHalf){
          //half laser always isnt
          ctx.beginPath()
          if (layer[0]==="up"){
            ctx.moveTo(x+35,y)
            ctx.lineTo(x+35,y+4)
          }
          else if (layer[0]==="down"){
            ctx.moveTo(x+35,y+70)
            ctx.lineTo(x+35,y+66)
          } 
          else if (layer[0]==="left"){
            ctx.moveTo(x,y+35)
            ctx.lineTo(x+4,y+35)
          } 
          else{
            ctx.moveTo(x+70,y+35)
            ctx.lineTo(x+66,y+35)
          }

          ctx.strokeStyle=colors[layer[1]]
          ctx.closePath()
          ctx.stroke()
        } 
      }
      //if it is not a pass or a mirror
      else{
        for(const layer of corHalf){
          //half laser
          ctx.beginPath()
          if (layer[0]==="down"){
            ctx.moveTo(x+35,y+70)
          }
          else if (layer[0]==="up"){
            ctx.moveTo(x+35,y)
          } 
          else if (layer[0]==="right"){
            ctx.moveTo(x+70,y+35)
          } 
          else{
            ctx.moveTo(x,y+35)
          }
          ctx.lineTo(x+35,y+35)
          ctx.closePath()
          ctx.strokeStyle=colors[layer[1]]
          ctx.stroke()
        } 
        for(const layer of corLas){
          //laser
          ctx.beginPath()
          if (layer[0]==="down"||layer[0]==="up"){
            ctx.moveTo(x+35,y)
            ctx.lineTo(x+35,y+70)
          } else {
            ctx.moveTo(x,y+35)
            ctx.lineTo(x+70,y+35)
          }
          ctx.closePath()
          ctx.strokeStyle=colors[layer[1]]
          ctx.stroke()
        } 
      }
      }
    }
  }
}
const colors = {
  green:"#B4EB46",
  red:"#CC2218",
  yellow:"#FFC500",
  white:"#fff",
  null:"#bfbfbf",
  black:"#000",
  blue:"#47AFE3",
}
function getPosition(string, index) {
  return string.split(',', index).join(',').length;
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