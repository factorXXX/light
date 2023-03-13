var tmp = {
  color: [],
  a: false,
  b: false,
  page: 2,
  store: "",
  where:[],
  where1:[],
  where2:[],
  diff:0
};
function img(x) {
  return (
    "https://cdn.glitch.global/1c628347-f3a3-4ff6-841d-e401a9fb21ec/" +
    x +
    ".png?v=1678609082279"
  );
}
function music(x) {
  return (
    "https://cdn.glitch.global/1c628347-f3a3-4ff6-841d-e401a9fb21ec/" +
    x +
    ".mp3?v=1671849935460"
  );
}
Vue.component("selectmenu", {
  template: `
    <table style="background-color:#333333; margin:0px auto">
    <tr v-for="c in 1" v-if="tmp.diff==0">
    <td v-for="d in 4">
    <table v-show="(player.levelbeaten.filter(a=>a>((c*3+d-3)*12-24)&&a<=((c*3+d-3)*12-12)).length>=9)||((c*3+d-3)==1)" style="background-color:#333333">
    <tr><td colspan="4" style="height:50px;border-color:#aaaaaa;text-align:center;border-style:solid;">Chapter {{c*3+d-3}}</td></tr>
    <tr v-for="a in 3">
    <td v-for="b in 4" 
    :class="{beaten:player.levelbeaten.includes(((c*3+d-3)*12+(a*4+b-4)-12))}"
    style="border-color:#aaaaaa;text-align:center;border-style:solid;height:50px;width:50px" @click="player.level=((c*3+d-3)*12+(a*4+b-4)-12);reset();tmp.page=1">
    {{a*4+b-4}}
    </td>
    </tr>
    </table>
    <div v-show="!((player.levelbeaten.filter(a=>a>((c*3+d-3)*12-24)&&a<=((c*3+d-3)*12-12)).length>=9)||((c*3+d-3)==1))"  style="border-color:#aaaaaa;text-align:center;border-style:solid;height:226px;width:226px">
    Req<br><br>9 Level beaten in Chapter {{c*3+d-4}} Normal Mode
    </div> 
    </td>
    </tr>

    <tr v-for="c in 1" v-if="tmp.diff==1">
    <td v-for="d in 4">
    <table v-show="(player.levelbeaten.filter(a=>a>((c*3+d-3)*6+988)&&a<=((c*3+d-3)*6+994)).length>=9)||((c*3+d-3)==1)" style="background-color:#333333">
    <tr><td colspan="4" style="height:50px;border-color:#aaaaaa;text-align:center;border-style:solid;">Chapter {{c*3+d-3}}</td></tr>
    <tr v-for="a in 3">
    <td v-for="b in 2" 
    :class="{beaten:player.levelbeaten.includes(((c*3+d-3)*6+(a*2+b-2)+994))}"
    style="border-color:#aaaaaa;text-align:center;border-style:solid;height:50px;width:108px" @click="player.level=((c*3+d-3)*6+(a*2+b-2)+994);reset();tmp.page=1">
    {{a*2+b-2}}
    </td>
    </tr>
    </table>
    <div v-show="!((player.levelbeaten.filter(a=>a>((c*3+d-3)*6+988)&&a<=((c*3+d-3)*6+994)).length>=9)||((c*3+d-3)==1))"  style="border-color:#aaaaaa;text-align:center;border-style:solid;height:226px;width:226px">
    Req<br><br>4 Level beaten in Chapter {{c*3+d-4}} Hard Mode
    </div>
    </td>
    </tr>


    <tr >
    <td colspan="2" style="height:50px;border-color:#aaaaaa;text-align:center;border-style:solid;background-color:#aa6464"
    onclick="tmp.diff=(tmp.diff+1)%2"
    >{{tmp.diff==1?'Hard Mode':'Normal Mode'}}</td>
    <td colspan="2" style="height:50px;border-color:#aaaaaa;text-align:center;border-style:solid"
    onclick="tmp.page=3"
    >Options</td>
    </tr>
    </table>
    `,
});
Vue.component("machine", {
  template: `
    <table class="gamezone" >
    <tr class="rows" height="30px" v-for="a in player.area[0]">
    <td class="columns" v-for="b in player.area[1]"> 
    <img  width="70" height="70" v-bind:src="img((player.location[0]==(a-1)&&player.location[1]==(b-1))?'location':
    player.building[a-1][b-1][0]=='light'?player.building[a-1][b-1][2]+player.building[a-1][b-1][0]:
    player.building[a-1][b-1][0]=='mirror'?'mirror'+(findLightPos(a-1, b-1, true,false,0,true)?tmp.where2.filter((element) => element[0] == a-1 && element[1] == b-1)[tmp.where2.filter((element) => element[0] == a-1 && element[1] == b-1).length-1][3]:''):
    player.building[a-1][b-1][0]=='store'?player.building[a-1][b-1][1]+player.building[a-1][b-1][0]:
    ((findLightPos(a-1,b-1,true))?findLightPos(a-1,b-1,false):
    player.building[a-1][b-1][0]))"
    :class="{trans1:player.building[a-1][b-1][1]=='right'||player.building[a-1][b-1][1]=='left-down',trans2:player.building[a-1][b-1][1]=='up'||player.building[a-1][b-1][1]=='right-down',trans3:player.building[a-1][b-1][1]=='left'||player.building[a-1][b-1][1]=='right-up'}"
    >
    <img width="70" height="70" style="position: relative; bottom: 74px" v-bind:src="img(findLightPos(a-1,b-1,false,true)>=2?findLightPos(a-1,b-1,false,false,1):'null')">
    </td>
    </tr>
    </table>
    `,
});
Vue.component("options", {
  template: `
    <table>
    <tr><td onclick="tmp.page=2" class="control">Back</td><td onclick="exportSave()" class="control">Export</td><td onclick="importSave()" class="control">Import</td></tr>
    </table>
    `,
});
Vue.component("level", {
  template: `
        <table>
    <tr>
    <td colspan="2"><machine></machine></td><br>
      </tr>
   <tr>
     <td style="height: 32px;"><span style="font-size:20px; text-align:center">{{player.level>=1001?"Hard Mode Level "+Math.floor((player.level-1001)/12+1).toString()+"-"+(player.level+8-Math.floor((player.level+7)/12)*12).toString():"Level "+Math.floor((player.level-1)/12+1).toString()+"-"+(player.level-Math.floor((player.level-1)/12)*12).toString()}}</span><br><br>
      Arrows or WASD: Move the Character<br>
      P: Go to Previous level<br>
      E: Enter the Portal if you can<br>
      R: Restart the Level<br>
      U: Undo a move<br>
      H: Hard Reset Once you confirm<br>
      Shift + D: Go to my Discord
    </td> 

    <td style="text-align: right; width:180px">
    <button :class="{portalButton: true, canportal: true}" onclick="reset()">
        Reset
    </button><br><br>
    <button :class="{portalButton: true, canportal: true}" onclick="tmp.page=2">
        Go to Menu
    </button><br><br>
    <button v-if="player.level>=13||player.level=='custom'" :class="{portalButton: true, canportal: player.building[player.location[0]][player.location[1]][0]=='portal', cantportal: player.building[player.location[0]][player.location[1]][0]!='portal'}" onclick="enter()">
        Enter the Portal
    </button>
    </td>
  </tr><br><br>

<tr v-if="player.key">
<td colspan="2">
<table style="margin:0px auto; text-align:center"><tr><td class="control"></td><td class="control" onclick="doSomething('KeyW',false)">W</td><td class="control" onclick="doSomething('KeyU',false)">U</td></tr>
<tr><td class="control" onclick="doSomething('KeyA',false)">A</td><td class="control" onclick="doSomething('KeyS',false)">S</td><td class="control" onclick="doSomething('KeyD',false)">D</td></tr></table>
</td>
</tr>
   </table>  
    `,
});

function findLightPos(a, b, bool = false, amt = false, layer = 0,M=false) {
  let a1=tmp.where
  if(M)a1=tmp.where2
  if (a1.length==0){if(bool)return false;return};
  let res =a1.filter((element) => element[0] == a && element[1] == b);
  if (amt) return res.length;
  if (bool) return res[0] != undefined;
  if (!findLightPos(a, b, true)) return;
  let color = res[layer][3];
  let pos = res[layer][2];
  if (["right", "down"].includes(pos)) pos = reverse(pos);
  return color + pos + "line";
}
function light(win = false, withlight = false, withM = false) {
  let lightL = [];
  for (let i = 0; i <= player.light.length - 1; i++) {
    let pos = player.building[player.light[i][0]][player.light[i][1]][1];

    let color = tmp.color[i];
    let locat = [...player.light[i]];
    let try1 = 0;

    while (true) {
      try1++;
      if (player.building[locat[0]] == null) break;
      if (player.building[locat[0]][locat[1]] == null) break;
      let build = player.building[locat[0]][locat[1]][0];
      if (build == "sun" && win) return true;
      if (["badbox", "badboxwall"].includes(build))
        player.building[locat[0]][locat[1]] = [null];
      if (["store"].includes(build)) {
        if (player.building[locat[0]][locat[1]][1] == null) {
          player.building[locat[0]][locat[1]][1] = color;
        }
        if (player.building[locat[0]][locat[1]][1] != null) {
          if (player.building[locat[0]][locat[1]][1] != color) color = "yellow";
        }
      }
      if (build == "light" && try1 != 1) {
        if (withlight) lightL.push([...locat, pos, color]);
        break;
      }

      if (
        ![
          null,
          "mirror",
          "light",
          "portal",
          "redpass",
          "greenpass",
          "yellowpass",
          "store",
          
        ].includes(build)
      )
        break;

      if (build == "redpass" && color != "red") break;
      if (build == "greenpass" && color != "green") break;
      if (build == "yellowpass" && color != "yellow") break;
      if (JSON.stringify(player.location) == JSON.stringify(locat)) break;

      lightL.push([...locat, pos, color]);
      if (
        ["light", "redpass", "greenpass", "yellowpass", "store"].includes(build)
      )
        lightL.pop();
      if (build == "mirror") {
       if(!withM) lightL.pop();
        let posamt = player.building[locat[0]][locat[1]][1].split("-");

        if (!posamt.includes(pos)) {
          if(withM)lightL.pop();
          break;
        }
        if (pos == posamt[0]) pos = reverse(posamt[1]);
        else pos = reverse(posamt[0]);
      } else if (build == "portal") {
        lightL.pop();
        locat = [...player.building[locat[0]][locat[1]][1]];
        if (JSON.stringify(player.location) == JSON.stringify(locat)) {
          lightL.pop();
          break;
        }
      }
      //console.log(locat)
      switch (pos) {
        case "down":
          locat[0] = locat[0] + 1;
          break;
        case "up":
          locat[0] = locat[0] - 1;
          break;
        case "right":
          locat[1] = locat[1] + 1;
          break;
        case "left":
          locat[1] = locat[1] - 1;
          break;
      }
    }
    // lightL.shift()
  }
  if (win) return false;
  if(withlight)return tmp.where1=lightL;
  else if(withM)return tmp.where2=lightL;
  else return tmp.where=lightL;


 
}
function calcolor() {
  let b = [];
  for (let i = 0; i <= player.light.length - 1; i++) {
    let a = tmp.where1.find(
      (a) => a[0] == player.light[i][0] && a[1] == player.light[i][1]
    );

    if (a != undefined) {
      if (a[3] != player.building[player.light[i][0]][player.light[i][1]][2])
        b.push("yellow");
      else b.push(player.building[player.light[i][0]][player.light[i][1]][2]);
    } else b.push(player.building[player.light[i][0]][player.light[i][1]][2]);
  }

  return (tmp.color = b);
}
document.addEventListener("keydown", (e) => {
  
  let isShift = !!window.event.shiftKey;
  doSomething(e.code,isShift)

});
function doSomething(a,b){
  if (a === "KeyD" && b)
    document.location.href = "https://discord.gg/MXyXdXrC5H";
  if (a === "KeyR") reset();
  if (a === "KeyH") hardReset();
  if (a === "KeyI" && b) importL();
  if (a === "KeyU") {
    if (player.previous.length == 0) return;
    player.building = player.previous[player.previous.length - 1].building;
    player.location = player.previous[player.previous.length - 1].location;
    player.previous.pop();
    return;
  }
  player.previous.push([{}]);
  let locat = [parseInt(player.location[0]), parseInt(player.location[1])];
  if (
   a === "KeyE" &&
    player.building[player.location[0]][player.location[1]][0] == "portal"
  ) {
    enter();
  }

  if (a === "KeyW" || a === "ArrowUp")
    Vue.set(player.location, 0, Math.max(locat[0] - 1, 0));
  else if (a === "KeyS" || a === "ArrowDown")
    Vue.set(player.location, 0, Math.min(player.area[0] - 1, locat[0] + 1));
  else if (a === "KeyA" || a === "ArrowLeft")
    Vue.set(player.location, 1, Math.max(locat[1] - 1, 0));
  else if (a === "KeyD" || a === "ArrowRight")
    Vue.set(player.location, 1, Math.min(player.area[1] - 1, locat[1] + 1));
  if (locat[0] == player.location[0] && locat[1] == player.location[1]) {
    player.previous.pop();
    return;
  }
  player.previous[player.previous.length - 1].location = locat;

  player.previous[player.previous.length - 1].building = JSON.parse(
    JSON.stringify(player.building)
  );

  if (player.building[player.location[0]][player.location[1]][0] != null) {
    let buildtouch = player.building[player.location[0]][player.location[1]];

    if (["box", "badbox", "mirror", "store","rotate180","rotate90","rotate270"].includes(buildtouch[0])) {
      let pos = [0, 0];
      let req = true;
      if (a === "KeyD" || a === "ArrowRight") {
        pos[1] = 1;
        req = !(locat[1] + 1 >= player.area[1] - 1);
      }
      if (a === "KeyS" || a === "ArrowDown") {
        pos[0] = 1;
        req = !(locat[0] + 1 >= player.area[0] - 1);
      }
      if (a === "KeyA" || a === "ArrowLeft") {
        pos[1] = -1;
        req = !(locat[1] - 1 == 0);
      }
      if (a === "KeyW" || a === "ArrowUp") {
        pos[0] = -1;
        req = !(locat[0] - 1 == 0);
      }
      if (!req) {
        player.location = [locat[0], locat[1]];
        player.previous.pop();
        return;
      }
      if ((player.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0] != null)&&buildtouch[0][0]!="r") {
        player.location = [locat[0], locat[1]];
        player.previous.pop();
        return;
      }
      if ((["mirror","light"].includes(player.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]))&&buildtouch[0][0]=="r") {

        let a=player.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2]
        if(a[0]=="light"){
          player.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]= numToPos((posToNum(a[1])+buildtouch[0].split("rotate")[1]/90)%4)
        }
        if(a[0]=="mirror"){
          let r=player.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1].split("-")
          r[0]=numToPos((posToNum(r[0])+buildtouch[0].split("rotate")[1]/90)%4)
          r[1]=numToPos((posToNum(r[1])+buildtouch[0].split("rotate")[1]/90)%4)
          if(posToNum(r[0])%2==0){
            let tmp=r[0]
       r[0]=r[1]
       r[1]=tmp
          }
          player.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]=r[0]+"-"+r[1]
        }
        player.building[locat[0] + pos[0]][locat[1] + pos[1]] = [null];
        player.location = [locat[0] + pos[0], locat[1] + pos[1]];
        return;
      }
      else if ((player.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0] != null)&&buildtouch[0][0]=="r") {
        player.location = [locat[0], locat[1]];
        player.previous.pop();
        return;
      }
      player.building[locat[0] + pos[0]][locat[1] + pos[1]] = [null];
      player.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2] =
        buildtouch;
      player.location = [locat[0] + pos[0], locat[1] + pos[1]];
      calcolor();
      return;
    }
    calcolor();
    if (["portal", "badportal"].includes(buildtouch[0])) return;
    player.location = [...locat];
  }
}
setInterval(function () {
  if (player.location[0] < 0) player.location[0] = 0;
  if (player.location[1] < 0) player.location[1] = 0;

  if (
    player.level != "custom" &&
    (player.bestlevel == undefined || player.level > player.bestlevel)
  )
    player.bestlevel = player.level;
  if (!tmp.b && light(true)) {
    tmp.b = true;
    new Audio(music("win")).play();
    setTimeout(function () {
      if (player.level != "custom") {
        if (!player.levelbeaten.includes(player.level))
          player.levelbeaten.push(player.level);
        if (!(player.level / 12 == Math.floor(player.level / 12)))
          player.level++;
        else tmp.page = 2;
      } else tmp.page = 2;
      reset();
      tmp.b = false;
      player.previous = [];
    }, 1000);
  }
  light(false, true);
  light(false, false, true);
  calcolor();
  light();
   
  if(player.key==undefined)player.key=true
}, 50);

function enter() {
  if (player.building[player.location[0]][player.location[1]][0] != "portal")
    return;
  player.location = [
    ...player.building[player.location[0]][player.location[1]][1],
  ];
}
function reverse(x) {
  return numToPos((posToNum(x)+2)%4)
}
function posToNum(x){
  switch (x) {
    case "up":
      return 0;
    case "right":
      return 1;
    case "down":
      return 2;
    case "left":
      return 3;
  }
}
function numToPos(x){
  switch (x) {
    case 0:
      return "up";
    case 1:
      return "right";
    case 2:
      return "down";
    case 3:
      return "left";
  }
}
function importL(imported = undefined) {
  if (imported === undefined) imported = prompt("paste your save here");
  player.building = JSON.parse(atob(imported));
  player.area = [9, 9];
  let light = [];
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (player.building[i][j][0] == "light") light.push([i, j]);
    }
  }
  player.light = light;
  for (let i = 0; i <= 8; i++) {
    let num1 = player.building[i].findIndex((x) => x[0] == "location");
    if (num1 != -1) {
      player.location = [i, num1];
      player.building[i][num1][0] = null;
    }
  }

  tmp.page = 1;
  player.level = "custom";
  tmp.store = imported;
}
function importL2(imported = undefined,a1=7,a2=7) {
  if (imported === undefined) imported = prompt("paste your save here");
  player.building = JSON.parse(atob(imported));
  player.area = [7, 7];
  let light = [];
  for (let i = 0; i <= a1-1; i++) {
    for (let j = 0; j <= a2-1; j++) {
      if (player.building[i][j][0] == "light") light.push([i, j]);
    }
  }
  player.light = light;
  for (let i = 0; i <= a1-1; i++) {
    let num1 = player.building[i].findIndex((x) => x[0] == "location");
    if (num1 != -1) {
      player.location = [i, num1];
      player.building[i][num1][0] = null;
    }
  }

  //tmp.page = 1;
  player.level = "custom";
  tmp.store = imported;
}