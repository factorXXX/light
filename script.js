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
  color: [],
  a: false,
  b: false,
  page: 2,
  store: "",
  where:[],
  where1:[],
  where2:[],
  where3:[],
  diff:0,
  editor: {
    fromEditor: false,
    brush: [null],
    selectedPortal: null,
  },
  galaxy:{
    ongalaxy:false,
    loggedin:false,
  },
  modalvisible:false,
  tutorial:{
    type:0,
    images:[],
    stage:0,
    text:[],
    title:"",
  },
  
  
};
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
  <tr v-for="c in 1" v-if="tmp.diff===0">
  <td v-for="d in 5" style="padding:0px">
    <table>
      <div class="unlocked" v-if="isunlocked(c, d, tmp.diff)">
      <tr><td colspan="4" style='vertical-align: middle' @click='tmp.level="ch1";reset()'>Chapter {{c*3+d-3}}</td></tr>
      <tr v-for="a in 3">
        <td v-for="b in 4" 
          :class="{
            [getClassOfMenuCell((c*3+d-3)*12+(a*4+b-4)-12)]:true,
          }"
          @click='tmp.level=((c*3+d-3)*12+(a*4+b-4)-12);reset()'>
            {{level[(((c*3+d-3)*12+(a*4+b-4)-12))]===undefined?"wip":(a*4+b-4)}}
        </td>
      </tr>
      </div>
      <div v-else class="locked">
        Req<br><br>9 Levels beaten in Chapter {{c*3+d-4}} Normal Mode
      </div>
    </table>
 
  </td>
  </tr>

  <tr v-for="c in 1" v-if="tmp.diff===1">
  <td v-for="d in 5">
  <table>
    <div v-if="isunlocked(c, d, tmp.diff)">
      <tr><td colspan="5" style='vertical-align: middle'>Chapter {{c*3+d-3}}</td></tr>
      <tr v-for="a in 3">
        <td v-for="b in 2"
          :class="{
            wide: true,
            [getClassOfMenuCell(((c*3+d-3)*6+(a*2+b-2)+994))]:true,
          }"
          @click="tmp.level=((c*3+d-3)*6+(a*2+b-2)+994);reset()">
          {{level[(((c*3+d-3)*12+(a*4+b-4)-12))+1000]===undefined?"wip":(a*4+b-4)}}
        </td>
      </tr>
    </div>
    <div v-else class="locked">
      Req<br><br>4 Levels beaten in Chapter {{c*3+d-4}} Hard Mode
    </div>
  </table>
  </td>
  </tr>


    <tr style="margin-top: 2px;">
    <td colspan="1" style="height:50px;border-color:#aaaaaa;text-align:center;border-style:solid;background-color:#aa6464"
    @click="tmp.diff=(tmp.diff+1)%2"
    >{{tmp.diff===1?'Hard Mode':'Normal Mode'}}</td>
    <td colspan="1" style="height:50px;border-color:#aaaaaa;text-align:center;border-style:solid;"
    @click="tmp.page=5"
    >Tutorials</td>
    <td style="height:50px;border-color:#aaaaaa;text-align:center;border-style:solid"
    @click="tmp.page=3"
    >Options</td><td colspan="2" style="height:50px;border-color:#aaaaaa;text-align:center;border-style:solid"
    @click="tmp.page=4"
    >Level Editor</td>
    </tr>
</table>
    `,
});
function drawaline(a,b,destroy=false){
  if(tmp.building[a][b][0]==='portal'){
    let line = document.getElementById(getcellid(a,b,false))
    if(!destroy){
      let startCell = document.getElementById(getcellid(a,b)).getBoundingClientRect()
      let endBuildPos = tmp.building[a][b][1]
      let endCell = document.getElementById(getcellid(endBuildPos[0],endBuildPos[1])).getBoundingClientRect()
      line.x2.baseVal.value = endCell.left - startCell.left + 35
      line.y2.baseVal.value = endCell.top - startCell.top + 35
    line.style.visibility = "visible"
    } else {
    line.style.visibility = "hidden"
    }
}
};
Vue.component("machine", {
  template: `
    <table class="gamezone" >
    <tr v-for="a in tmp.area[0]">
    <td v-for="b in tmp.area[1]"
    :id="[getcellid(a-1, b-1)]"
    @mouseover="drawaline(a-1,b-1)"
    @mouseout="drawaline(a-1,b-1,true)"
    :class="{
      [getclass(a-1, b-1, false)]:true
    }" >
    <!--player-->
    <div v-if="tmp.location[0]===a-1 && tmp.location[1]===b-1" class="player"><div></div></div>
    <!--buildings-->
    <div :class="{
      [getclass(a-1, b-1)]:true
    }"><div></div></div>
    <!--laser and 90 deg leser-->
    <div v-for="layer in tmp.where2.filter((element) => element[0] === a-1 && element[1] === b-1).length" 
    :class="{
      [getlaserclass(a-1,b-1,layer-1)]:true
      }"><div></div></div>
    <!--half-laser-->
    <div v-for="layer in tmp.where3.filter((element) => element[0] === a-1 && element[1] === b-1).length" :class="{
      [getlaserclass(a-1,b-1,layer-1,false)]:true
    }"><div></div></div>
    <!--line between portals-->
    <svg v-if="tmp.building[a-1][b-1][0]==='portal'"
    style="
    visibility: hidden;
    z-index: 25 !important;
    filter: drop-shadow(0px 0px 2px #000000);">
    <line :id="[getcellid(a-1, b-1,false)]"
      stroke-linecap="round"
      stroke="red"
      stroke-width="2"
        x1="35" y1="35" x2="0" y2="0"/>
    </svg>
    </td>
    </tr>
    </table>
    `,
});
Vue.component("options", {
  template: `
    <table>
    <tr>
    <td style="width=200px"></td>
      <td @click="tmp.page=2" class="opts">Back</td>
      <td @click="exportSave()" class="opts" id="export">Export</td>
      <td @click="importSave()" class="opts">Import</td>
      <td @click="player.k=!player.k" class="opts">On-screen controls: {{player.k?"ON":"OFF"}}</td>
      <td style="width=200px"></td>
    </tr>
    <tr>
    <td style="width=200px"></td>
      <td style="background-color: #5865F2" @click="document.location.href = 'https://discord.gg/MXyXdXrC5H'" class="opts">Discord</td>
      <td style="background-color: #b44949" @click="hardReset()"  class="opts">Hard Reset</td>
      <td v-if="tmp.galaxy.ongalaxy && tmp.galaxy.loggedin" style="background-color: #090417" @click="player.cloudsaving=!player.cloudsaving"  class="opts">Galaxy Cloud Saving: {{player.cloudsaving?"ON":"OFF"}}</td>
      <td v-if="tmp.galaxy.ongalaxy && !tmp.galaxy.loggedin"style="background-color: #090417" @click="player.cloudsaving=!player.cloudsaving"  class="opts">Login to Galaxy</td>
      <td style="width=200px"></td>
    </tr>
    <tr>
    <td colspan=6><br><br><br><br><br><br>Coder: 3^3=7 (Discord: 3pow3equals7) and wrab (Discord: wrab)<br><br>Level Creator: 3^3=7, wrab, yyyy7089 (Discord: yyyy7089) and Onionoi (Discord: onionboii)
      </td>
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
     <td style="height: 32px;">
      <span v-if="tmp.level!=='custom'" style="font-size:20px; text-align:center">
        {{tmp.level>=1001?"Hard Mode Level "+Math.floor((tmp.level-1001)/12+1).toString()+"-"+(tmp.level+8-Math.floor((tmp.level+7)/12)*12).toString():"Level "+Math.floor((tmp.level-1)/12+1).toString()+"-"+(tmp.level-Math.floor((tmp.level-1)/12)*12).toString()}}
      </span>        
      <span v-else style="font-size:20px; text-align:center">
        Custom Level
      </span>
      <span style="font-size:20px"
      :class="{
        greenCounter:(tmp.previous.length<=level[tmp.level].perfect),
        redCounter:!(tmp.previous.length<=level[tmp.level].perfect)
        }">
      [{{tmp.previous.length}}/{{level[tmp.level].perfect}}]</span>
      <br><br>
      <span v-if="tmp.mobile && !player.k">You can enable on-screen controls in options!<br></span>
      Arrows or WASD: Move the Character<br>
      <span v-if="(tmp.level>=13||tmp.level==='custom')">E: Enter the Portal if you can<br></span>
      Shift + R: Restart the Level<br>
      U: Undo a move
    </td> 

    <td style="text-align: right; width:180px"><br>
    <button :class="{portalButton: true, canportal: true}" @click="reset()">
        Reset
    </button><br><br>
    <button :class="{portalButton: true, canportal: true}" 
    @click="{
      if(tmp.editor.fromEditor){
        tmp.page=4 
        tmp.editor.fromEditor=false
      }else{tmp.page=2}
    }">
        Go to the {{tmp.editor.fromEditor?'Editor':'Menu'}}
    </button><br><br>
    <button v-if="(tmp.level>=13||tmp.level==='custom')" :class="{portalButton: true, canportal: tmp.building[tmp.location[0]][tmp.location[1]][0]==='portal'||tmp.building[tmp.location[0]][tmp.location[1]][0]==='level', cantportal: tmp.building[tmp.location[0]][tmp.location[1]][0]!=='portal'&&tmp.building[tmp.location[0]][tmp.location[1]][0]!=='level'}" @click="doSomething('KeyE',false)">
        Enter the {{tmp.level>=13||tmp.level==='custom'?'portal':'level'}}
    </button>
    </td>
  </tr><br><br>

<tr>
<td colspan="2">
<table class="control" v-if="player.k">
  <tr>
  <td @click="doSomething('KeyU',false)">U</td>
  <td @click="doSomething('KeyW',false)">&#8593;</td>
  <td v-if="(tmp.level>=13||tmp.level==='custom')" @click="doSomething('KeyE',false)">E</td>
  </tr>
  <tr>
    <td @click="doSomething('KeyA',false)">&#8592;</td>
    <td @click="doSomething('KeyS',false)">&#8595;</td>
    <td @click="doSomething('KeyD',false)">&#8594;</td>
  </tr></table>
  </td>
</tr>
   </table>  
    `,
});
function calculation2() {
  //calcolor()
  light(false, true);
  calcolor();
  light(false, false, true);
  //light(true);
  //calcolor();
  //light()
  light(true, false, true, true);
  dedup()
}
function dedup(){ //if you have red/green and yellow edges overlaped it can cause yellow to not take priority
  for (let i = 0; i<tmp.where3.length; i++){
    if (tmp.where3[i][3]==='yellow'){
      let cur = tmp.where3[i]
      if(tmp.where3.filter((e) => (e[0] === cur[0] && e[1] === cur[1] && e[2]===cur[2] && e[3]!==cur[3])).length!==0){  
      tmp.where3.splice(tmp.where3.findIndex((e) => (e[0] === cur[0] && e[1] === cur[1] && e[2]===cur[2] && e[3]!==cur[3])),1)
      }
  }}
}
function getclass(r,c,h=true){ //!h means it's a class of a cell rather than a div inside of it
  let current = JSON.parse(JSON.stringify(tmp.building[r][c]))
  if(h){
  if (['store', 'bomb'].includes(current[0])){
    return (current[0]+' '+current[1])
  }
  else if (current[0]==='mirror'){
    if(current[1]==='left-down'){
      return ('mirror'+' '+'trans1')
    }
    if(current[1]==='right-down'){
      return ('mirror'+' '+'trans2')
    }
    if(current[1]==='right-up'){
      return ('mirror'+' '+'trans3')
    }
    if(current[1]==='left-up'){
      return ('mirror')
    }
  }
  else if (current[0]==='light'){
    if(current[1]==='right'){
      return ('light'+' '+'trans1'+' '+current[2])
    }
    else if(current[1]==='up'){
      return ('light'+' '+'trans2'+' '+current[2])
    }
    else if(current[1]==='left'){
      return ('light'+' '+'trans3'+' '+current[2])
    }
    else if(current[1]==='down'){
      return ('light'+' '+current[2])
    }
  }
  else {
    return current[0]
  }
  } else {
    if(['void','horpass','verpass'].includes(current[0])){return current[0]}
  }
}
function getlaserclass(r,c,l,h=true){ //h means that it's an edge from tmp.where3
  let str = '' 
  if(h){
  let current = tmp.where2.filter((element) => element[0] === r && element[1] === c)[l]
  let build = tmp.building[r][c]
  if (build[0]==='mirror'){
    str=str.concat(current[3])
    str=str.concat("Laser laser90")
    if (build[1]==='left-down')str=str.concat(" trans1")
    else if (build[1]==='right-down')str=str.concat(" trans2")
    else if (build[1]==='right-up')str=str.concat(" trans3")
  } else {
    str=str.concat(current[3])
    str=str.concat("Laser laser")
  if (current[2]==='right')str=str.concat(" trans1")
  else if (current[2]==='up')str=str.concat(" trans2")
  else if (current[2]==='left')str=str.concat(" trans3")
  }
  }else{
    let current = tmp.where3.filter((element) => element[0] === r && element[1] === c)[l]
    str=str.concat(current[3])
    str=str.concat("Laser laser half")
    if (current[2]==='right')str=str.concat(" trans1")
    else if (current[2]==='up')str=str.concat(" trans2")
    else if (current[2]==='left')str=str.concat(" trans3")
  }
  return str
}
function getcellid(a,b,c=true){ //c means that it's id of a cell, !c means that it's id of a line
  let str = ''
  if(c)str=str.concat('c')
    if (a<=9)str=str.concat(0)
    str=str.concat(a)
    if (b<=9)str=str.concat(0)
    str=str.concat(b)
    return str
}
function isunlocked(c, d, diff){//for chapters in menu
  if ((c*3+d-3)===1) return true
  let chapterlevels = Object.entries(level).filter((a)=>a[0]>((c*3+d-3)*12-24)&&a[0]<=((c*3+d-3)*12-12))
  if (tmp.diff===1){chapterlevels = Object.entries(level).filter((a)=>a[0]>((c*3+d-3)*6+988)&&a<=((c*3+d-3)*6+994))}
  let beaten = 0 
  for (let i=0; i<player.levelbeaten.length; i++){
    if(chapterlevels.filter(((e)=>e[1].index===player.levelbeaten[i])).length!==0){
      beaten++
      if (diff===1 && beaten >= 4) return true
      else if (beaten >= 9) return true
    } 
  }
  return false
}
function getClassOfMenuCell(levelNum) {
  if (level[levelNum]){
    if (player.perfectbeaten.includes(level[levelNum].index)) return 'perfect'
    if (player.levelbeaten.includes(level[levelNum].index)) return 'beaten'
  }
  return 'unbeaten'
}
function light(win = false, withlight = false, withM = false, final=false) {
  let lightL = [];
  if(final)tmp.where3 = []
  for (let i = 0; i < tmp.light.length; i++) {
    let pos = tmp.building[tmp.light[i][0]][tmp.light[i][1]][1];
    let color = tmp.color[i];
    if(tmp.color[i]===undefined){
      color=tmp.building[tmp.light[i][0]][tmp.light[i][1]][2]
    } //Find the color of light if tmp.color is undefined

    let locat = [...tmp.light[i]];
    let try1 = 0;

    while (true) {
      try1++
      
      let buildDetail = tmp.building[locat[0]][locat[1]];
      let build = buildDetail[0];
      if (build === "sun" && win && !tmp.b){
        tmp.b = true;
        new Audio(music("win")).play();
        setTimeout(function () {
          if (tmp.level !== "custom") {
            if (!player.levelbeaten.includes(level[tmp.level].index))
              player.levelbeaten.push(level[tmp.level].index);
                if(tmp.previous.length<=level[tmp.level].perfect&&!player.perfectbeaten.includes(level[tmp.level].index)){
                  player.perfectbeaten.push(level[tmp.level].index);
                }
            if (tmp.level%12===0)tmp.page = 2;
            else {tmp.level++;reset()};
          }
          else reset()
          tmp.b = false;
          tmp.previous = [];
        }, 1000);
      };
      if (!withlight) {
      if (["badbox", "badboxwall"].includes(build))
        {tmp.building[locat[0]][locat[1]] = [null];
          build = null
        }
      if (build==='store') {
        if (buildDetail[1]===null)  {
          tmp.building[locat[0]][locat[1]][1] = color;
          buildDetail[1] = color
        }

      }
      if (build==='bomb') {
        if (color===buildDetail[1]){
        for(let i=-1;i<=1;i++){
          for(let j=-1;j<=1;j++){
            if((tmp.building[locat[0]+i]&&tmp.building[locat[0]+i][locat[1]+j])&&!(["portal","light","void","horpass","verpass"].includes(tmp.building[locat[0]+i][locat[1]+j][0])))tmp.building[locat[0]+i][locat[1]+j]=[null]
          }
     
        }
        build = null
        return calculation2()
       
        }
      }
    }
      if (build === "light" && try1 !== 1) {
        if (withlight) lightL.push([...locat, pos, color]);
        if(final)tmp.where3.push([...locat, reverse(pos), color,'half'])
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
          "bluepass",
          "store",
          "horpass",
          "verpass"
        ].includes(build)
      ){ 
        if(final)tmp.where3.push([...locat, reverse(pos), color,'half']);
        break}
        if(build==='horpass'){
          if (pos==='up'||pos==='down')break}
        if(build==='verpass'){
          if (pos==='right'||pos==='left')break}
        else if (build==='store') {
          if(final)tmp.where3.push([...locat, reverse(pos), color,'half']);

          if (buildDetail[1] !== null) {
            
      if (color==="white"){
          tmp.building[locat[0]][locat[1]][1] = null;
          buildDetail[1]=null
      }
      else {let colors=[buildDetail[1] ,color]
      if (colors.includes('red')&&   colors.includes('green')) color="yellow"
      else if (colors.includes('yellow')&&colors.includes('red'))   color="yellow"
      else if (colors.includes('yellow')&&colors.includes('green')) color="yellow"
      else if (colors.includes('blue')&&  colors.includes('green')) color="lightBlue"
      else if (colors.includes('blue')&&  colors.includes('red'))   color="purple"}
          }
          if(final)tmp.where3.push([...locat, pos, color,'half']);
        }
      if (build === "redpass" && color !== "red") {if(final)tmp.where3.push([...locat, reverse(pos), color,'half']);break};
      if (build === "greenpass" && color !== "green") {if(final)tmp.where3.push([...locat, reverse(pos), color,'half']);break};
      if (build === "yellowpass" && color !== "yellow") {if(final)tmp.where3.push([...locat, reverse(pos), color,'half']);break};
      if (build === "bluepass" && color !== "blue") {if(final)tmp.where3.push([...locat, reverse(pos), color,'half']);break};
      if (JSON.stringify(tmp.location) === JSON.stringify(locat)) {
        if(final)tmp.where3.push([...locat, reverse(pos), color,'half'])  
        break
      };
      //infinite loop then white//
      if(JSON.stringify(lightL).indexOf(JSON.stringify([...locat, pos, color]))>0){
       if(color==="white") break;
        color="white"
        //what does it do
        //if(final)tmp.where3.push([...locat, pos, color])
      }
      lightL.push([...locat, pos, color]);
      if (["light",  "store"].includes(build)){
        if(final)tmp.where3.push([...locat, pos, color,'half']);
       lightL.pop();
      }
      if (build === "mirror") {
       if(!withM) lightL.pop();
        let posamt = buildDetail[1].split("-");

        if (!posamt.includes(pos)) {
          tmp.where3.push([...locat, reverse(pos), color,'half'])
          if(withM)lightL.pop();
          break;
        }
        if (pos === posamt[0]) pos = reverse(posamt[1]);
        else pos = reverse(posamt[0]);
      } else if (build === "portal") {
        if(final)tmp.where3.push([...locat, reverse(pos), color,'half']);
        lightL.pop();
        locat = [...buildDetail[1]];
        if(final && !(JSON.stringify(tmp.location) === JSON.stringify(locat)))tmp.where3.push([...locat, pos, color,'half']);
        if (JSON.stringify(tmp.location) === JSON.stringify(locat)) {
          break;
        }
      }
      if (pos==="down") {
        locat[0]++
        if (locat[0]>=tmp.area[0]) break
      }
      else if (pos==="up")   {
        locat[0]--
        if (locat[0]<0) break
      }
      else if (pos==="right"){
        locat[1]++
        if (locat[1]>=tmp.area[1]) break
      }
      else if (pos==="left") {
        locat[1]--
        if (locat[1]<0) break
      }
    }
  }
  if (win) return false;

  if(withlight)return tmp.where1=lightL;
  else if(withM)return tmp.where2=lightL;
}
function calcolor() {
  let b = [];
  for (let i = 0; i <= tmp.light.length - 1; i++) {
    let a = tmp.where1.find(
      (a) => a[0] === tmp.light[i][0] && a[1] === tmp.light[i][1]
    );

    if (a !== undefined) {
      let color=[a[3],tmp.building[tmp.light[i][0]][tmp.light[i][1]][2]]
      if (color.includes('red')&&color.includes('green')) b.push("yellow")
      else if (color.includes('yellow')&&color.includes('green')) b.push("yellow")
      else if (color.includes('yellow')&&color.includes('red')) b.push("yellow")
      else if (color.includes('blue')&&color.includes('green')) b.push("lightBlue")
      else if (color.includes('blue')&&color.includes('red')) b.push("purple")
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
  if (tmp.modalvisible){
    if ((a === "KeyA"||a==="ArrowLeft") && tmp.tutorial.stage>0) tmp.tutorial.stage--;
    if((a === "KeyD"||a==="ArrowRight"||a==="Enter")&&(tmp.tutorial.stage+1)===(tmp.tutorial.text.length)){exittutorial()}
    if ((a === "KeyD"||a==="ArrowRight"||a==="Enter") && (tmp.tutorial.stage+1)<(tmp.tutorial.text.length)) tmp.tutorial.stage++;
  }
  else{
  if (a === "KeyR" && b && tmp.page===1 && !tmp.b) reset();
  if (a === "KeyI" && b && tmp.page===2) importL();
  if (a === "KeyU" && tmp.page===1 && !tmp.b) {
    if (tmp.previous.length === 0) return;
    tmp.building = tmp.previous[tmp.previous.length - 1].building;
    tmp.location = tmp.previous[tmp.previous.length - 1].location;
    tmp.previous.pop();
    calculation2()
    return;
  }
  tmp.previous.push([{}]);
  let locat = [parseInt(tmp.location[0]), parseInt(tmp.location[1])];
  if (
   a === "KeyE" && tmp.page===1  && !tmp.b
  ) {
    enter();
    tmp.previous[tmp.previous.length - 1].location = locat;

    tmp.previous[tmp.previous.length - 1].building = JSON.parse(
      JSON.stringify(tmp.building))
  }


  if ((a === "KeyW" || a === "ArrowUp")&& tmp.page===1 && !tmp.b)
    Vue.set(tmp.location, 0, Math.max(locat[0] - 1, 0));
  else if ((a === "KeyS" || a === "ArrowDown")&& tmp.page===1 && !tmp.b)
    Vue.set(tmp.location, 0, Math.min(tmp.area[0] - 1, locat[0] + 1));
  else if ((a === "KeyA" || a === "ArrowLeft")&& tmp.page===1 && !tmp.b)
    Vue.set(tmp.location, 1, Math.max(locat[1] - 1, 0));
  else if ((a === "KeyD" || a === "ArrowRight")&& tmp.page===1 && !tmp.b)
    Vue.set(tmp.location, 1, Math.min(tmp.area[1] - 1, locat[1] + 1));
    if (["boxwall","redpass","yellowpass","greenpass","light","badboxwall","sun","void","horpass","verpass"].includes(tmp.building[tmp.location[0]][tmp.location[1]][0])){
      tmp.location[0] = locat[0]
      tmp.location[1] = locat[1]
    };
  if (locat[0] === tmp.location[0] && locat[1] === tmp.location[1]) {
    tmp.previous.pop();
    return;
  }
  tmp.previous[tmp.previous.length - 1].location = locat;

  tmp.previous[tmp.previous.length - 1].building = JSON.parse(
    JSON.stringify(tmp.building)
  );

  if (tmp.building[tmp.location[0]][tmp.location[1]][0] !== null) {
    let buildtouch = tmp.building[tmp.location[0]][tmp.location[1]];
    if (["box", "badbox", "mirror", "store","rotate180","rotate90","rotate270","reflecthor","reflectvel","bomb"].includes(buildtouch[0])) {
      let pos = [0, 0];
      let req = true;
      if ((a === "KeyD" || a === "ArrowRight")&& tmp.page===1 && !tmp.b) {
        pos[1] = 1;
        req = !(locat[1] + 1 >= tmp.area[1] - 1);
      }
      if ((a === "KeyS" || a === "ArrowDown")&& tmp.page===1 && !tmp.b) {
        pos[0] = 1;
        req = !(locat[0] + 1 >= tmp.area[0] - 1);
      }
      if ((a === "KeyA" || a === "ArrowLeft")&& tmp.page===1 && !tmp.b) {
        pos[1] = -1;
        req = !(locat[1] - 1 === 0);
      }
      if ((a === "KeyW" || a === "ArrowUp")&& tmp.page===1 && !tmp.b) {
        pos[0] = -1;
        req = !(locat[0] - 1 === 0);
      }
      if (!req) {
        tmp.location = [locat[0], locat[1]];
        tmp.previous.pop();
        calculation2()
        return;
      }
      if ((tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0] !== null)&&buildtouch[0][0]!=="r") {
        tmp.location = [locat[0], locat[1]];
        tmp.previous.pop();
        calculation2()
        return;
      }
      if ((["mirror","light","reflecthor","reflectvel"].includes(tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]))&&buildtouch[0][0]+buildtouch[0][1]==="ro") {

        let a=tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2]
        if(a[0]==="light"){
          tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]= numToPos((posToNum(a[1])+buildtouch[0].split("rotate")[1]/90)%4)
        }
        if(a[0]==="mirror"){
          let r=tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1].split("-")
          r[0]=numToPos((posToNum(r[0])+buildtouch[0].split("rotate")[1]/90)%4)
          r[1]=numToPos((posToNum(r[1])+buildtouch[0].split("rotate")[1]/90)%4)
          if(posToNum(r[0])%2===0){
            let tmp=r[0]
       r[0]=r[1]
       r[1]=tmp
          }
          tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]=r[0]+"-"+r[1]
        }
        if(a[0][0]+a[0][1]==="re"){
          if(buildtouch[0]!=="rotate180"){
            if(a[0]==="reflecthor")tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]="reflectvel"
            else tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]="reflecthor"
          }
        }
        tmp.building[locat[0] + pos[0]][locat[1] + pos[1]] = [null];
        tmp.location = [locat[0] + pos[0], locat[1] + pos[1]];
        return calculation2();
      }
      else if ((tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0] !== null)&&buildtouch[0][0]+buildtouch[0][1]==="ro") {
        tmp.location = [locat[0], locat[1]];
        tmp.previous.pop();
        return calculation2();
      }


      else if ((["mirror","light","rotate90","rotate180","rotate270"].includes(tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]))&&buildtouch[0][0]+buildtouch[0][1]==="re"){


let a=tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2]
if((["mirror","light","rotate90","rotate180","rotate270"].includes(tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]))&&buildtouch[0].split("reflect")[1]==="hor"){
  if(a[0]==="light"){

    if((posToNum(tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1])%2)!==0)tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]= numToPos((posToNum(a[1])+2)%4)
  }
  if(a[0]==="mirror"){
    let r=tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1].split("-")
    r[0]=numToPos((posToNum(r[0])+2)%4)
    tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]=r[0]+"-"+r[1]
  }
  if(a[0]==="rotate90"){tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]="rotate270"}

 else if(a[0]==="rotate270"){tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]="rotate90"}
}
else if((["mirror","light","rotate90","rotate180","rotate270"].includes(tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]))&&buildtouch[0].split("reflect")[1]==="vel"){
  if(a[0]==="light"){

    if((posToNum(tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1])%2)!==1)tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]= numToPos((posToNum(a[1])+2)%4)
  }
  if(a[0]==="mirror"){
    let r=tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1].split("-")
    r[1]=numToPos((posToNum(r[1])+2)%4)
    tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][1]=r[0]+"-"+r[1]
  }
  if(a[0]==="rotate90"){tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]="rotate270"}

  else if(a[0]==="rotate270"){tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0]="rotate90"}
}
        tmp.building[locat[0] + pos[0]][locat[1] + pos[1]] = [null];
        tmp.location = [locat[0] + pos[0], locat[1] + pos[1]];
        return calculation2();
      }
      else {
        if ((tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2][0] !== null)&&buildtouch[0][0]+buildtouch[0][1]==="re") {
          tmp.location = [locat[0], locat[1]];
          tmp.previous.pop();
          return calculation2();
        }
      }
      tmp.building[locat[0] + pos[0]][locat[1] + pos[1]] = [null];
      tmp.building[locat[0] + pos[0] * 2][locat[1] + pos[1] * 2] =
        buildtouch;
      tmp.location = [locat[0] + pos[0], locat[1] + pos[1]];
      calculation2()
      return;
    }
    calculation2()
    if (["portal", "badportal", "level"].includes(buildtouch[0])) return;
    tmp.location = [...locat];
  }
  calculation2()
}}

function enter() {
  if (tmp.building[tmp.location[0]][tmp.location[1]][0] !== "portal"&&tmp.building[tmp.location[0]][tmp.location[1]][0] !== "level")
    return;
    if(tmp.building[tmp.location[0]][tmp.location[1]][0]==='level'){
      tmp.level=tmp.building[tmp.location[0]][tmp.location[1]][1]
      reset()
    }
    else 
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
  tmp.previous=[]
  let decomp=JSON.parse(LZString.decompressFromBase64(imported))
  tmp.building = JSON.parse(JSON.stringify(decomp.data));
  tmp.location = decomp.location;
  tmp.area = [tmp.building.length, tmp.building[0].length];
  let light = [];
  for (let i = 0; i < tmp.area[0]; i++) {
    for (let j = 0; j < tmp.area[1]; j++) {
      if (tmp.building[i][j][0] === "light") light.push([i, j]);
    }
  }
 
 tmp.light = light;

  tmp.page = 1;
  tmp.level = "custom";
  tmp.store = imported;
  calculation2()
}
