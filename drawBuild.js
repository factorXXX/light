let canvas
let ctx
let build
onmessage = (evt) => {
 if (evt.data.canvas){
  canvas = evt.data.canvas
  ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.strokeWidth=2
 }

  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  let buildinge = evt.data.build
  build
  ctx.clearRect(0,0,canvas.width,canvas.height)
  for(r in buildinge){
    for(c in buildinge[0]){
      build = buildinge[r][c]
      buildings[build[0]](c*70,r*70)
    }
  }
};

const colors = {
    green:"#B4EB46",
    red:"#CC2218",
    yellow:"#FFC500",
    white:"#fff",
    null:"#bfbfbf",
    black:"#000",
    blue:"#47AFE3",
    grey:"#768492",
  }
/* rules for myself
  line width 4
  outer boxes start at 6x6 and have size of 58x58 (end at 64x64)
  inner patterns start at 15x15 and have size of 40x40 (end at 55x55)
*/
const buildings = {
  null:()=>{
  },
  portal:()=>{
  },
  badportal:()=>{
  },
  void:()=>{
  },
  horpass:()=>{
  },
  verpass:()=>{
  },
  //passes are on the laser canvas
  greenpass:()=>{
  },
  redpass:()=>{
  },
  yellowpass:()=>{
  },
  //default box shape for pretty much every building
  box:(c,r,col="green")=>{
    ctx.strokeStyle="black"
    ctx.fillStyle=colors[col]
    ctx.beginPath();
      ctx.moveTo(c+6,r+6)
      ctx.lineTo(c+64,r+6)
      ctx.lineTo(c+64,r+64)
      ctx.lineTo(c+6,r+64)
      ctx.lineTo(c+6,r+6)
    ctx.closePath();
    ctx.fill()
    ctx.stroke()
  },
  light:(c,r)=>{
    ctx.strokeStyle="black"
    buildings.box(c,r,"blue")
    //triangle
    ctx.save()
    ctx.translate(c+35,r+35)
    ctx.rotate((posToRotate(build[1])*Math.PI)/180)
    ctx.beginPath();
    ctx.moveTo(-20,-20)
    ctx.lineTo(20, -20)
    ctx.lineTo(0,23)
    ctx.fillStyle=colors[build[2]]
    ctx.closePath();
    ctx.fill()
    ctx.restore()
  },
  sun:(c,r)=>{
    buildings.box(c,r,"blue")
    //lines
    ctx.fillStyle=colors.green
    ctx.beginPath();
    //top-left -> bottom right
      ctx.moveTo(c+19,r+15)
      ctx.lineTo(c+15,r+15)
      ctx.lineTo(c+15,r+19)
      ctx.lineTo(c+51,r+55)
      ctx.lineTo(c+55,r+55)
      ctx.lineTo(c+55,r+51)
      ctx.lineTo(c+19,r+15)
    //vertical
      ctx.moveTo(c+38,r+15)
      ctx.lineTo(c+32,r+15)
      ctx.lineTo(c+32,r+55)
      ctx.lineTo(c+38,r+55)
    //top right -> bottom left
      ctx.moveTo(c+51,r+15)
      ctx.lineTo(c+55,r+15)
      ctx.lineTo(c+55,r+19)
      ctx.lineTo(c+19,r+55)
      ctx.lineTo(c+15,r+55)
      ctx.lineTo(c+15,r+51)
      ctx.lineTo(c+51,r+15)
    //horizontal
      ctx.moveTo(c+15,r+38)
      ctx.lineTo(c+15,r+32)
      ctx.lineTo(c+55,r+32)
      ctx.lineTo(c+55,r+38)
    ctx.closePath();
    ctx.fill()
    ctx.beginPath();
      ctx.arc(c+35,r+35,12,0,2*Math.PI,false)
    ctx.closePath();
    ctx.fill()
  },
  mirror:(c,r)=>{
    ctx.strokeStyle="black"
    ctx.fillStyle="#fff"
   
    ctx.save()
    ctx.translate(c+35,r+35)
    ctx.rotate((posToRotate(build[1])*Math.PI)/180)

    ctx.beginPath();
      ctx.moveTo(-29,29)
      ctx.lineTo(29,-29)
      ctx.lineTo(29,29)
      ctx.lineTo(-29,29)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    ctx.restore()

  },
  boxwall:(c,r)=>{
    buildings.box(c,r)
    ctx.beginPath();
    //inner box 1
    ctx.moveTo(c+15,r+15)
    ctx.lineTo(c+55,r+15)
    ctx.lineTo(c+55,r+55)
    ctx.lineTo(c+15,r+55)
    ctx.lineTo(c+15,r+15)
    //inner box 2
    ctx.moveTo(c+24,r+24)
    ctx.lineTo(c+46,r+24)
    ctx.lineTo(c+46,r+46)
    ctx.lineTo(c+24,r+46)
    ctx.lineTo(c+24,r+24)
    ctx.closePath();
    ctx.stroke()
  },
  badbox:(c,r)=>{
    buildings.box(c,r)
    ctx.beginPath();
    ctx.moveTo(c+6,r+40)
    ctx.lineTo(c+18,r+29)
    ctx.lineTo(c+30,r+40)
    ctx.lineTo(c+41,r+32)
    ctx.lineTo(c+52,r+40)
    ctx.lineTo(c+64,r+30)
    ctx.stroke()
  },
  badboxwall:(c,r)=>{
    buildings.boxwall(c,r)
    ctx.beginPath();
    ctx.moveTo(c+6,r+40)
    ctx.lineTo(c+18,r+29)
    ctx.lineTo(c+30,r+40)
    ctx.lineTo(c+41,r+32)
    ctx.lineTo(c+52,r+40)
    ctx.lineTo(c+64,r+30)
    ctx.stroke()
  },
  store:(c,r)=>{
    buildings.box(c,r,"black")
    ctx.clearRect(c+10,r+32,15,6)
    ctx.clearRect(c+45,r+32,15,6)
    ctx.clearRect(c+32,r+10,6,15)
    ctx.clearRect(c+32,r+45,6,15)
    //core
    ctx.fillStyle=colors[build[1]]
    ctx.beginPath()
    ctx.roundRect(c+32,r+28,6,14,2)
    ctx.roundRect(c+28,r+32,14,6,2)
    ctx.closePath()
    ctx.fill()
  },
  rotate180:(c,r)=>{
    buildings.box(c,r,"blue")
    ctx.strokeStyle=colors.green
    ctx.fillStyle=colors.green
    //arrow head
    ctx.beginPath()
    ctx.moveTo(c+37, r+33)
    ctx.lineTo(c+54, r+16)
    ctx.lineTo(c+56, r+36)
    ctx.lineTo(c+37, r+33)
    ctx.closePath()
    ctx.fill()
    //half circle
    ctx.lineCap = "square";
    ctx.lineWidth=10
    ctx.beginPath()
    ctx.arc(c+35, r+35, 15, Math.PI * 0.75, Math.PI * 1.75,false);
    ctx.stroke()
    ctx.lineWidth=4
    ctx.lineCap = "round";
    ctx.textAlign = "center";
    //180 text
    ctx.font = "bolder 19px Veranda"
    ctx.fillText("180", c+45, r+50);
  },
  rotate90:(c,r)=>{
    buildings.box(c,r,"blue")
    ctx.strokeStyle=colors.green
    ctx.fillStyle=colors.green
    //arrow head
    ctx.beginPath()
    ctx.moveTo(c+37, r+33)
    ctx.lineTo(c+54, r+16)
    ctx.lineTo(c+56, r+36)
    ctx.lineTo(c+37, r+33)
    ctx.closePath()
    ctx.fill()
    //quarter circle
    ctx.lineCap = "square";
    ctx.lineWidth=10
    ctx.beginPath()
    ctx.arc(c+35, r+35, 15, Math.PI * 1.1, Math.PI * 1.75,false);
    ctx.stroke()
    ctx.lineWidth=4
    ctx.lineCap = "round";
    ctx.textAlign = "center";
    //90 text
    ctx.font = "bolder 19px Veranda"
    ctx.fillText("90", c+40, r+50);
  },
  rotate270:(c,r)=>{
    buildings.box(c,r,"blue")
    ctx.strokeStyle=colors.green
    ctx.fillStyle=colors.green
    //arrow head
    ctx.beginPath()
    ctx.moveTo(c+33, r+33)
    ctx.lineTo(c+16, r+16)
    ctx.lineTo(c+14, r+36)
    ctx.lineTo(c+33, r+33)
    ctx.closePath()
    ctx.fill()
    //quarter circle
    ctx.lineCap = "square";
    ctx.lineWidth=10
    ctx.beginPath()
    ctx.arc(c+35, r+35, 15, Math.PI * 1.25, Math.PI * 1.9,false);
    ctx.stroke()
    ctx.lineWidth=4
    ctx.lineCap = "round";
    ctx.textAlign = "center";
    //180 text
    ctx.font = "bolder 19px Veranda"
    ctx.fillText("90", c+30, r+50);
  },
  reflectvel:(c,r,ver=true)=>{
    buildings.box(c,r,"blue")
    ctx.fillStyle=colors["green"]
    ctx.save()
    ctx.translate(c+35,r+35)
    if(!ver)ctx.rotate(Math.PI/2)
    ctx.beginPath()
    ctx.moveTo(-14,-7)
    ctx.lineTo(0,-20)
    ctx.lineTo(14,-7)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(-14,7)
    ctx.lineTo(0,20)
    ctx.lineTo(14,7)
    ctx.closePath()
    ctx.fill()
    ctx.fillRect(-3,-7,6,14)
    ctx.restore()
  },
  reflecthor:(c,r)=>{
    buildings.reflectvel(c,r,false)
  },
  bomb:(c,r)=>{
    ctx.fillStyle=colors[build[1]]
    ctx.strokeStyle=colors["black"]
    ctx.beginPath()
      ctx.moveTo(c+45,r+25) 
      ctx.lineTo(c+50,r+20)
      ctx.lineTo(c+58,r+28)
      ctx.lineTo(c+53,r+33)
      ctx.arc(c+35,r+42,18,-Math.PI/7,-Math.PI/3,false)
      ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.beginPath()
      ctx.arc(c+46,r+24,11,-Math.PI*0.75,-Math.PI*0.1,false)
    ctx.stroke()
    ctx.closePath()
  },
  moving:(c,r)=>{
    buildings.box(c,r,"grey")
    ctx.save()
    //rotate if it's horpass
    ctx.translate(c+35,r+35)
    ctx.rotate((posToRotate(build[1])*Math.PI)/180)
    //triangles
    ctx.beginPath();
    ctx.moveTo(-20,-20)
    ctx.lineTo(20, -20)
    ctx.lineTo(0,6)

    ctx.moveTo(-20,-3)
    ctx.lineTo(20, -3)
    ctx.lineTo(0,23)
    ctx.closePath();
    ctx.fillStyle="black"
    ctx.fill()
    ctx.restore()  
  }
}

function posToRotate(x){
  switch (x) {
    case "up":
      return 180;
    case "right":
      return 270;
    case "down":
      return 0;
    case "left":
      return 90;
    case "left-down":
      return 90;
    case "left-up":
      return 180;
    case "right-up":
      return 270;
    case "right-down":
      return 0;
  }
}