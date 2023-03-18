var tmp = {
  building:[
    [[null],["light","down","green"],[null]],
    [[null],["box"],[null]],
    [[null],["sun"],[null]],
  ],
  location:[0,0],
  area:[3,3],
  light:[[0,1]],
  level:1,
  previous:[1],
  
  win: false,
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
    x +".png?v=1678609082279"
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
  <table class="selectmenu">
  <tr v-for="c in 1" v-if="tmp.diff==0">
  <td v-for="d in 4" style="padding:0px">
    <table>
      <div class="unlocked" v-if="(player.levelbeaten.filter(a=>a>((c*3+d-3)*12-24)&&a<=((c*3+d-3)*12-12)).length>=9)||((c*3+d-3)==1)">
      <tr><td colspan="4" style='vertical-align: middle'>Chapter {{c*3+d-3}}</td></tr>
      <tr v-for="a in 3">
        <td v-for="b in 4" 
          :class="{
            perfect:player.perfectbeaten.includes(((c*3+d-3)*12+(a*4+b-4)-12)),
            beaten:player.levelbeaten.includes(((c*3+d-3)*12+(a*4+b-4)-12)),
            unbeaten:!player.levelbeaten.includes(((c*3+d-3)*12+(a*4+b-4)-12))
          }"
          @click="tmp.level=((c*3+d-3)*12+(a*4+b-4)-12);reset();tmp.page=1">
          {{a*4+b-4}}
        </td>
      </tr>
      </div>
      <div v-else class="locked">
        Req<br><br>9 Level beaten in Chapter {{c*3+d-4}} Normal Mode
      </div>
    </table>
 
  </td>
  </tr>

  <tr v-for="c in 1" v-if="tmp.diff==1">
  <td v-for="d in 4">
  <table>
    <div v-if="(player.levelbeaten.filter(a=>a>((c*3+d-3)*6+988)&&a<=((c*3+d-3)*6+994)).length>=9)||((c*3+d-3)==1)">
      <tr><td colspan="4" style='vertical-align: middle'>Chapter {{c*3+d-3}}</td></tr>
      <tr v-for="a in 3">
        <td v-for="b in 2"
          :class="{
            wide: true,
            perfect:player.perfectbeaten.includes(((c*3+d-3)*6+(a*2+b-2)+994)),
            beaten:player.levelbeaten.includes(((c*3+d-3)*6+(a*2+b-2)+994)),
            unbeaten:!player.levelbeaten.includes(((c*3+d-3)*6+(a*2+b-2)+994))
          }"
          @click="tmp.level=((c*3+d-3)*6+(a*2+b-2)+994);reset();tmp.page=1">
            {{a*2+b-2}}
        </td>
      </tr>
    </div>
    <div v-else class="locked">
      Req<br><br>4 Level beaten in Chapter {{c*3+d-4}} Hard Mode
    </div>
  </table>
  </td>
  </tr>


    <tr style="margin-top: 2px;">
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
    <tr class="rows" height="30px" v-for="a in tmp.area[0]">
    <td class="columns" v-for="b in tmp.area[1]"> 
    <img  width="60" height="60" v-bind:src="img((tmp.location[0]==(a-1)&&tmp.location[1]==(b-1))?'location':
    tmp.building[a-1][b-1][0]=='light'?tmp.building[a-1][b-1][2]+tmp.building[a-1][b-1][0]:
    tmp.building[a-1][b-1][0]=='mirror'?'mirror'+(findLightPos(a-1, b-1, true,false,0,true)?tmp.where2.filter((element) => element[0] == a-1 && element[1] == b-1)[tmp.where2.filter((element) => element[0] == a-1 && element[1] == b-1).length-1][3]:''):
    tmp.building[a-1][b-1][0]=='store'?tmp.building[a-1][b-1][1]+tmp.building[a-1][b-1][0]:
    ((findLightPos(a-1,b-1,true))?findLightPos(a-1,b-1,false):
    tmp.building[a-1][b-1][0]))"
    :class="{trans1:tmp.building[a-1][b-1][1]=='right'||tmp.building[a-1][b-1][1]=='left-down',trans2:tmp.building[a-1][b-1][1]=='up'||tmp.building[a-1][b-1][1]=='right-down',trans3:tmp.building[a-1][b-1][1]=='left'||tmp.building[a-1][b-1][1]=='right-up'}"
    >
    <img width="60" height="60" style="position: relative; bottom: 64px" v-bind:src="img(findLightPos(a-1,b-1,false,true)>=2?findLightPos(a-1,b-1,false,false,1):'null')">
    </td>
    </tr>
    </table>
    `,
});
Vue.component("options", {
  template: `
    <table>
    <tr>
      <td onclick="tmp.page=2" class="opts">Back</td>
      <td onclick="exportSave()" class="opts" id="export">Export</td>
      <td onclick="importSave()" class="opts">Import</td>
    </tr>
    <tr>
      <td></td>
      <td @click="document.location.href = 'https://discord.gg/MXyXdXrC5H'" class="opts" style="background-color: #5865F2">Discord</td>
      <td onclick="hardReset()" style="background-color: #b44949" class="opts">Hard Reset</td>
    </tr>
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
     <td style="height: 32px;"><span style="font-size:20px; text-align:center">{{tmp.level>=1001?"Hard Mode Level "+Math.floor((tmp.level-1001)/12+1).toString()+"-"+(tmp.level+8-Math.floor((tmp.level+7)/12)*12).toString():"Level "+Math.floor((tmp.level-1)/12+1).toString()+"-"+(tmp.level-Math.floor((tmp.level-1)/12)*12).toString()}}</span><br><br>
      Arrows or WASD: Move the Character<br>
      <span v-if="tmp.level>=13">E: Enter the Portal if you can<br></span>
      Shift + R: Restart the Level<br>
      U: Undo a move
    </td> 

    <td style="text-align: right; width:180px"><br>
    <button :class="{portalButton: true, canportal: true}" onclick="reset()">
        Reset
    </button><br><br>
    <button :class="{portalButton: true, canportal: true}" onclick="tmp.page=2">
        Go to Menu
    </button><br><br>
    <button v-if="tmp.level>=13||tmp.level=='custom'" :class="{portalButton: true, canportal: tmp.building[tmp.location[0]][tmp.location[1]][0]=='portal', cantportal: tmp.building[tmp.location[0]][tmp.location[1]][0]!='portal'}" onclick="enter()">
        Enter the Portal
    </button>
    </td>
  </tr><br><br>

<tr>
<td colspan="2">
<table class="control">
  <tr>
  <td onclick="doSomething('KeyU',false)">U</td>
  <td onclick="doSomething('KeyW',false)">&#8593;</td>
  <td v-if="tmp.level>=13" onclick="doSomething('KeyE',false)">E</td>
  </tr>
  <tr>
    <td onclick="doSomething('KeyA',false)">&#8592;</td>
    <td onclick="doSomething('KeyS',false)">&#8595;</td>
    <td onclick="doSomething('KeyD',false)">&#8594;</td>
  </tr></table>
  </td>
</tr>
<br>
<tr>
<td colspan="2">
Total moves: {{tmp.previous.length}} Perfect requirement: {{perfect[tmp.level]}}
</td>
</tr>
   </table>  
    `,
});

function findLightPos(a, b, bool = false, amt = false, layer = 0,M=false, times=1) {
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
function calculation2() {
  calcolor()
  light(false, true);
  calcolor();
  light(false, false, true);
  light(true);
  calcolor();
  light()
  light(false, false, true);
}
function light(win = false, withlight = false, withM = false) {
  let lightL = [];
  for (let i = 0; i <= tmp.light.length - 1; i++) {
    let pos = tmp.building[tmp.light[i][0]][tmp.light[i][1]][1];

    let color = tmp.color[i];
    let locat = [...tmp.light[i]];
    let try1 = 0;

    while (true) {
      try1++;
      if (tmp.building[locat[0]] == null) break;
      if (tmp.building[locat[0]][locat[1]] == null) break;
      let build = tmp.building[locat[0]][locat[1]][0];
      if (build == "sun" && win) {tmp.win = true};
      if (!withlight) {if (["badbox", "badboxwall"].includes(build))
        tmp.building[locat[0]][locat[1]] = [null];
      if (["store"].includes(build)) {
        if (tmp.building[locat[0]][locat[1]][1] == null) {
          tmp.building[locat[0]][locat[1]][1] = color;
        }
        if (tmp.building[locat[0]][locat[1]][1] != null) {
          if (tmp.building[locat[0]][locat[1]][1] != color) color = "yellow";
        }
      }}
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
      if (JSON.stringify(tmp.location) == JSON.stringify(locat)) break;

      lightL.push([...locat, pos, color]);
      if (
        ["light", "redpass", "greenpass", "yellowpass", "store"].includes(build)
      )
        lightL.pop();
      if (build == "mirror") {
       if(!withM) lightL.pop();
        let posamt = tmp.building[locat[0]][locat[1]][1].split("-");

        if (!posamt.includes(pos)) {
          if(withM)lightL.pop();
          break;
        }
        if (pos == posamt[0]) pos = reverse(posamt[1]);
        else pos = reverse(posamt[0]);
      } else if (build == "portal") {
        lightL.pop();
        locat = [...tmp.building[locat[0]][locat[1]][1]];
        if (JSON.stringify(tmp.location) == JSON.stringify(locat)) {
          //lightL.pop();
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
  for (let i = 0; i <= tmp.light.length - 1; i++) {
    let a = tmp.where1.find(
      (a) => a[0] == tmp.light[i][0] && a[1] == tmp.light[i][1]
    );

    if (a != undefined) {
      if (a[3] != tmp.building[tmp.light[i][0]][tmp.light[i][1]][2])
        b.push("yellow");
      else b.push(tmp.building[tmp.light[i][0]][tmp.light[i][1]][2]);
    } else b.push(tmp.building[tmp.light[i][0]][tmp.light[i][1]][2]);
  }

  return (tmp.color = b);
}
document.addEventListener("keydown", (e) => {
  let isShift = !!window.event.shiftKey;
  doSomething(e.code,isShift)

});
function doSomething(a,b){
    if (a === "KeyR" && b) reset();
  if (a === "KeyI" && b) importL();
  if (a === "KeyU") {
    if (tmp.previous.length == 0) return;
    tmp.building = tmp.previous[tmp.previous.length - 1].building;
    tmp.location = tmp.previous[tmp.previous.length - 1].location;
    tmp.previous.pop();
    calculation2()
    return;
  }
  tmp.previous.push([{}]);
  let locat = [parseInt(tmp.location[0]), parseInt(tmp.location[1])];
  if (
   a === "KeyE" &&
    tmp.building[tmp.location[0]][tmp.location[1]][0] == "portal"
  ) {
    enter();
    tmp.previous[tmp.previous.length - 1].location = locat;

    tmp.previous[tmp.previous.length - 1].building = JSON.parse(
      JSON.stringify(tmp.building))
  }


  if (a === "KeyW" || a === "ArrowUp")
    Vue.set(tmp.location, 0, Math.max(locat[0] - 1, 0));
  else if (a === "KeyS" || a === "ArrowDown")
    Vue.set(tmp.location, 0, Math.min(tmp.area[0] - 1, locat[0] + 1));
  else if (a === "KeyA" || a === "ArrowLeft")
    Vue.set(tmp.location, 1, Math.max(locat[1] - 1, 0));
  else if (a === "KeyD" || a === "ArrowRight")
    Vue.set(tmp.location, 1, Math.min(tmp.area[1] - 1, locat[1] + 1));
    if (["wall","redpass","yellowpass","greenpass","light","badboxwall","wall","sun"].includes(tmp.building[tmp.location[0]][tmp.location[1]][0])){
      tmp.location[0] = locat[0]
      tmp.location[1] = locat[1]
    };
    //console.log(tmp.building[tmp.location[0]][tmp.location[1]][0])
    //console.log("locat = ",locat[0],locat[1],"  of player =", tmp.location[0],tmp.location[1])
  if (locat[0] == tmp.location[0] && locat[1] == tmp.location[1]) {
    tmp.previous.pop();
    return;
  }
  tmp.previous[tmp.previous.length - 1].location = locat;

  tmp.previous[tmp.previous.length - 1].building = JSON.parse(
    JSON.stringify(tmp.building)
  );

  if (tmp.building[tmp.location[0]][tmp.location[1]][0] != null) {
    let buildtouch = tmp.building[tmp.location[0]][tmp.location[1]];
    if (["box", "badbox", "mirror", "store","rotate180","rotate90","rotate270"].includes(buildtouch[0])) {
      let pos = [0, 0];
      let req = true;
      if (a === "KeyD" || a === "ArrowRight") {
        pos[1] = 1;
        req = !(locat[1] + 1 >= tmp.area[1] - 1);
      }
      if (a === "KeyS" || a === "ArrowDown") {
        pos[0] = 1;
        req = !(locat[0] + 1 >= tmp.area[0] - 1);
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
        tmp.location = [locat[0], locat[1]];
        tmp.previous.pop();
        calculation2()
        return;
      }
      if ((tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0] != null)&&buildtouch[0][0]!="r") {
        tmp.location = [locat[0], locat[1]];
        tmp.previous.pop();
        calculation2()
        return;
      }
      if ((["mirror","light"].includes(tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]))&&buildtouch[0][0]=="r") {

        let a=tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2]
        if(a[0]=="light"){
          tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]= numToPos((posToNum(a[1])+buildtouch[0].split("rotate")[1]/90)%4)
        }
        if(a[0]=="mirror"){
          let r=tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1].split("-")
          r[0]=numToPos((posToNum(r[0])+buildtouch[0].split("rotate")[1]/90)%4)
          r[1]=numToPos((posToNum(r[1])+buildtouch[0].split("rotate")[1]/90)%4)
          if(posToNum(r[0])%2==0){
            let tmp=r[0]
       r[0]=r[1]
       r[1]=tmp
          }
          tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]=r[0]+"-"+r[1]
        }
        tmp.building[locat[0] + pos[0]][locat[1] + pos[1]] = [null];
        tmp.location = [locat[0] + pos[0], locat[1] + pos[1]];
        return calculation2();
      }
      else if ((tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0] != null)&&buildtouch[0][0]=="r") {
        tmp.location = [locat[0], locat[1]];
        tmp.previous.pop();
        return calculation2();
      }
      tmp.building[locat[0] + pos[0]][locat[1] + pos[1]] = [null];
      tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2] =
        buildtouch;
      tmp.location = [locat[0] + pos[0], locat[1] + pos[1]];
      calculation2()
      return;
    }
    calculation2()
    if (["portal", "badportal"].includes(buildtouch[0])) return;
    tmp.location = [...locat];
  }
  calculation2()
}
setInterval(function () {
  if (tmp.location[0] < 0) tmp.location[0] = 0;
  if (tmp.location[1] < 0) tmp.location[1] = 0;

  if (
    tmp.level != "custom" &&
    (player.bestlevel == undefined || tmp.level > player.bestlevel)
  )
    player.bestlevel = tmp.level;
  if (!tmp.b && tmp.win) {
    tmp.b = true;
    new Audio(music("win")).play();
    setTimeout(function () {
      if (tmp.level != "custom") {
        if (!player.levelbeaten.includes(tmp.level))
          player.levelbeaten.push(tmp.level);
          if(perfect[tmp.level]!=undefined){
            if(tmp.previous.length<=perfect[tmp.level]&&!player.perfectbeaten.includes(tmp.level)){
              player.perfectbeaten.push(tmp.level);
            }

          }
          
        if (!(tmp.level / 12 == Math.floor(tmp.level / 12)))
          tmp.level++;
        else tmp.page = 2;
      } else tmp.page = 2;
      reset();
      tmp.b = false;
      tmp.win = false
      tmp.previous = [];
    }, 1000);
  }

  //calcolor()
  if(player.key==undefined)player.key=true
  if(player.perfectbeaten==undefined)player.perfectbeaten=[]
}, 50);

function enter() {
  if (tmp.building[tmp.location[0]][tmp.location[1]][0] != "portal")
    return;
  tmp.location = [
    ...tmp.building[tmp.location[0]][tmp.location[1]][1],
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
  tmp.building = JSON.parse(atob(imported));
  tmp.area = [9, 9];
  let light = [];
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (tmp.building[i][j][0] == "light") light.push([i, j]);
    }
  }
 
 tmp.light = light;
  for (let i = 0; i <= 8; i++) {
    let num1 = tmp.building[i].findIndex((x) => x[0] == "location");
    if (num1 != -1) {
      tmp.location = [i, num1];
      tmp.building[i][num1][0] = null;
    }
  }

  tmp.page = 1;
  tmp.level = "custom";
  tmp.store = imported;
}
function importL2(imported = undefined,a1=7,a2=7) {
  if (imported === undefined) imported = prompt("paste your save here");
  tmp.building = JSON.parse(atob(imported));
  tmp.area = [7, 7];
  let light = [];
  for (let i = 0; i <= a1-1; i++) {
    for (let j = 0; j <= a2-1; j++) {
      if (tmp.building[i][j][0] == "light") light.push([i, j]);
    }
  }
  tmp.light = light;
  for (let i = 0; i <= a1-1; i++) {
    let num1 = tmp.building[i].findIndex((x) => x[0] == "location");
    if (num1 != -1) {
      tmp.location = [i, num1];
      tmp.building[i][num1][0] = null;
    }
  }

  //tmp.page = 1;
  tmp.level = "custom";
  tmp.store = imported;
}
const perfect= [null,3,9,6,7,3,14,15,17,5,7,24,31,4,24,23,24,21,15,25,46,24,24,27,90,32,21,96,59,6,39,58,23,4,14,61,44]
