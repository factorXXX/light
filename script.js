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
  where1:[],
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
  tutorial:{
    type:0,
    images:[],
    stage:0,
    text:[],
    title:"",
  },
  modalvisible:false,
  rendering:{
    buildingDamageHistory:[],
    buildingDamage:new Set(),
    laserDamage:new Set(),
    laserDamagePrev:new Set()
  },
  laserwhere:[],
  halflaserwhere:[],
  counterforTest:0,
  move:[],
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
  <div id=mainmenu>
    <!--World 1-->
    <div v-for="d in (window.innerWidth < 1136)?6:5" class="menuCard">
      <!--if chapter is unlocked-->
      <div v-if="d<6&&(isunlocked(d, tmp.diff))">
        <table>
          <tbody>
            <tr><td colspan="4"><h1 class="menuCardTitle">Chapter {{(d+(tmp.diff*5))}}</h1></td></tr>
              <tr v-for="a in 3" class="menuLevels">
                <td v-for="b in 4"
                  :class="{[getClassOfMenuCell((d+(tmp.diff*5))*12+(a*4+b-4)-12)]:true,}"
                  @click='tmp.level=((d+(tmp.diff*5))*12+(a*4+b-4)-12);reset()'>
                  <span>
                    {{level[(((d+(tmp.diff*5))*12+(a*4+b-4)-12))]===undefined?"wip":(a*4+b-4)}}
                  </span>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      <!--if chapter is locked-->
      <div v-if="d<6 && !(isunlocked(d, tmp.diff))">
        <table class="menuLocked"><tbody><tr><td>
          <span>Requires 9 Levels beaten in Chapter {{d-1}}</span>
        </td></tr></tbody></table>
      </div>
      <!--options if screen is too thin-->
      <div v-if="d===6 && window.innerWidth < 1136">
        <table class="optsCard">
          <tbody>
          <tr>
            <td @click="tmp.diff=(tmp.diff+1)%2"><span>{{tmp.diff===1?'World 2':'World 1'}}</span></td>
            <td @click="tmp.page=5"><span>Tutorials</span></td>
          </tr>
          <tr>
            <td @click="tmp.page=3"><span>Options</span></td>
            <td @click="tmp.page=4"><span>Level Editor</span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--options if screen is normal width-->
    <div v-if="(window.innerWidth > 1136)" class="wideopts">
      <table><tbody><tr>
      <td @click="tmp.diff=(tmp.diff+1)%2"><span>{{tmp.diff===1?'World 2':'World 1'}}</span></td>
      <td @click="tmp.page=5"><span>Tutorials</span></td>
      <td @click="tmp.page=3"><span>Options</span></td>
      <td @click="tmp.page=4"><span>Level Editor</span></td>
      </tr></tbody></table>
    </div>
  </div>
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
      <td style="background-color: #5865F2" @click="document.location.href = 'https://discord.gg/nXgBxd7PyS'" class="opts">Discord</td>
      <td style="background-color: #b44949" @click="hardReset()"  class="opts">Hard Reset</td>
      <td v-if="tmp.galaxy.ongalaxy && tmp.galaxy.loggedin" style="background-color: #090417" @click="player.cloudsaving=!player.cloudsaving"  class="opts">Galaxy Cloud Saving: {{player.cloudsaving?"ON":"OFF"}}</td>
      <td v-if="tmp.galaxy.ongalaxy && !tmp.galaxy.loggedin"style="background-color: #090417" class="opts">Login to Galaxy</td>
      <td style="width=200px"></td>
    </tr>
    <tr>
    <td colspan=6><br><br><br><br><br><br>Developers: 3^3=7 (Discord: 3^3=7#4019) and Wrab (Discord: wrab)<br><br>Level Makers: 3^3=7, Wrab, yyyy7089 (Discord: yyyy7089) and Onionoi (Discord: onionboii)
      </td>
    </tr>
    </table>
    `,
});
Vue.component("level", {
  template: `
        <table>
    <tr>
     <td style="height: 32px;">
      <span v-if="tmp.level!=='custom'" style="font-size:20px; text-align:center">
        {{tmp.level>=1001?"Level "+Math.floor((tmp.level-1001)/12+6).toString()+"-"+(tmp.level+8-Math.floor((tmp.level+7)/12)*12).toString():"Level "+Math.floor((tmp.level-1)/12+1).toString()+"-"+(tmp.level-Math.floor((tmp.level-1)/12)*12).toString()}}
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
      Q: Undo a move
    </td> 

    <td style="text-align: right; width:180px"><br>
    <button :class="{portalButton: true, canportal: true}" @click="tmp.b=false; reset()">
        Reset
    </button><br><br>
    <button :class="{portalButton: true, canportal: true}" 
    @click="{
      document.getElementById('machine').innerHTML=''
      tmp.b=false;
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
  <td @click="doSomething('KeyQ',false)">Q</td>
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
  tmp.laserwhere=[]
  for (let i = 0; i < tmp.area[0]; i++) {
    tmp.laserwhere.push([])
    for (let j = 0; j < tmp.area[1]; j++) {
      tmp.laserwhere[i].push([])
    }
  }
  tmp.halflaserwhere=[]
  for (let i = 0; i < tmp.area[0]; i++) {
    tmp.halflaserwhere.push([])
    for (let j = 0; j < tmp.area[1]; j++) {
      tmp.halflaserwhere[i].push([])
    }
  }
  light(false, true);
  calcolor();
  light(false, false, true);
  light(true, false, true, true);
  playermargin()
  renderBuildingDamage()
  renderLaserDamage()
}

function moveMoving(){
  tmp.previous[tmp.previous.length - 1].move = tmp.move;
  
let truemove=tmp.move
tmp.move=[]
  for(let i=0;i<truemove.length;i++){
    tmp.rendering.buildingDamage.add([truemove[i][0],truemove[i][1]])
        let bD=tmp.building[truemove[i][0]][truemove[i][1]]
        if(bD[1]=='up'){
          if((truemove[i][0]-1)<0){
            tmp.building[truemove[i][0]][truemove[i][1]][1]="down";tmp.move.push([truemove[i][0],truemove[i][1]])}
          else if(tmp.building[truemove[i][0]-1][truemove[i][1]][0]!=null||((tmp.location[0]==truemove[i][0]-1)&&(tmp.location[1]==truemove[i][1]))){tmp.building[truemove[i][0]][truemove[i][1]][1]="down";
            tmp.move.push([truemove[i][0],truemove[i][1]])
          }
          else {
            tmp.building[truemove[i][0]-1][truemove[i][1]]=tmp.building[truemove[i][0]][truemove[i][1]];tmp.building[truemove[i][0]][truemove[i][1]]=[null];tmp.move.push([truemove[i][0]-1,truemove[i][1]])
            tmp.rendering.buildingDamage.add(tmp.move[tmp.move.length-1])
          }
        }
        else if(bD[1]=='down'){
          if((truemove[i][0]+1)>=tmp.area[0]){tmp.building[truemove[i][0]][truemove[i][1]][1]="up";tmp.move.push([truemove[i][0],truemove[i][1]])}
          else if(tmp.building[truemove[i][0]+1][truemove[i][1]][0]!=null||((tmp.location[0]==truemove[i][0]+1)&&(tmp.location[1]==truemove[i][1]))){tmp.building[truemove[i][0]][truemove[i][1]][1]="up";tmp.move.push([truemove[i][0],truemove[i][1]])}
          else {tmp.building[truemove[i][0]+1][truemove[i][1]]=tmp.building[truemove[i][0]][truemove[i][1]];tmp.building[truemove[i][0]][truemove[i][1]]=[null];tmp.move.push([truemove[i][0]+1,truemove[i][1]])
            tmp.rendering.buildingDamage.add(tmp.move[tmp.move.length-1])}
        }
        else if(bD[1]=='left'){
          if((truemove[i][1]-1)<0){tmp.building[truemove[i][0]][truemove[i][1]][1]="right";tmp.move.push([truemove[i][0],truemove[i][1]])}
          else if(tmp.building[truemove[i][0]][truemove[i][1]-1][0]!=null||((tmp.location[0]==truemove[i][0])&&(tmp.location[1]==truemove[i][1]-1))){tmp.building[truemove[i][0]][truemove[i][1]][1]="right";tmp.move.push([truemove[i][0],truemove[i][1]])}
          else {tmp.building[truemove[i][0]][truemove[i][1]-1]=tmp.building[truemove[i][0]][truemove[i][1]];tmp.building[truemove[i][0]][truemove[i][1]]=[null];tmp.move.push([truemove[i][0],truemove[i][1]-1])
            tmp.rendering.buildingDamage.add(tmp.move[tmp.move.length-1])}
        }
        else if(bD[1]=='right'){
          if((truemove[i][1]+1)>=tmp.area[1]){tmp.building[truemove[i][0]][truemove[i][1]][1]="left";tmp.move.push([truemove[i][0],truemove[i][1]])}
          else if(tmp.building[truemove[i][0]][truemove[i][1]+1][0]!=null||((tmp.location[0]==truemove[i][0])&&(tmp.location[1]==truemove[i][1]+1))){tmp.building[truemove[i][0]][truemove[i][1]][1]="left";tmp.move.push([truemove[i][0],truemove[i][1]])}
          else {tmp.building[truemove[i][0]][truemove[i][1]+1]=tmp.building[truemove[i][0]][truemove[i][1]];tmp.building[truemove[i][0]][truemove[i][1]]=[null];tmp.move.push([truemove[i][0],truemove[i][1]+1])
            tmp.rendering.buildingDamage.add(tmp.move[tmp.move.length-1])}
        }
  }
//  calculation2()
}
function pushingEdges(rev=false,lo1,lo2,pos,color){
    tmp.halflaserwhere[lo1][lo2].push([(rev?reverse(pos):pos),color])
    tmp.rendering.laserDamage.add(JSON.stringify([lo1,lo2]))
    let x = tmp.halflaserwhere[lo1][lo2]
    if(x.length>=2){
      for(let i=0;i<(x.length-1);i++){
         if(x[i][1]=="yellow" && x[x.length-1][1]!="white"){
          tmp.halflaserwhere[lo1][lo2].pop()
         }
      }
    }
}
function isunlocked(d, diff){//for chapters in menu
  if ((d)===1&&diff==0) return true
  let chapterlevels = Object.entries(level).filter((a)=>a[0]>((d)*12-24)&&a[0]<=((d)*12-12))
  if (tmp.diff===1){chapterlevels = Object.entries(level).filter((a)=>a[0]>((d)*12+988)&&a<=((d)*12+1000))}
  if(tmp.diff===1&&d==1){chapterlevels = Object.entries(level).filter((a)=>a[0]>0&&a[0]<=60)}
  let beaten = 0 
  for (let i=0; i<player.levelbeaten.length; i++){
    if(chapterlevels.filter(((e)=>e[1].index===player.levelbeaten[i])).length!==0){
      beaten++
      if (d!=1&&beaten >= 9) return true
    } 
  }
  if(diff===1&&d==1){
    beaten = 0 
    for (let i=0; i<player.levelbeaten.length; i++){
      if(chapterlevels.filter(((e)=>e[1].index===player.levelbeaten[i])).length!==0){
        beaten++
        if (beaten >= 57) return true
      } 
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
      tmp.rendering.laserDamage.add(JSON.stringify([locat[0],locat[1],pos,color,buildDetail[0],(JSON.stringify(tmp.location) === JSON.stringify(locat))]))
      if (build === "sun" && win && !tmp.b){
        tmp.b = true;
        if(tmp.level===60)startTutorial(false, 5, true)
        new Audio(music("win")).play();
        //give completion
        if (tmp.level !== "custom") {
          if (!player.levelbeaten.includes(level[tmp.level].index)) 
            player.levelbeaten.push(level[tmp.level].index);
        //give perfect completion
          if(tmp.previous.length<=level[tmp.level].perfect&&!player.perfectbeaten.includes(level[tmp.level].index)) 
            player.perfectbeaten.push(level[tmp.level].index); 
            save()
        }
        setTimeout(function () {
          if(tmp.b){
            tmp.previous = [];
            if (tmp.level !== "custom") {
            if (tmp.level%12===0){tmp.b=false; tmp.page = 2;document.getElementById('machine').innerHTML=''}
            else {tmp.level++};
            }
          if(tmp.b)reset()
          }
          tmp.b = false;
        }, 1000);
      };
      if (!withlight) {
      if (["badbox", "badboxwall"].includes(build))
        {tmp.building[locat[0]][locat[1]] = [null];
          build = null
          tmp.rendering.buildingDamage.add([locat[0],locat[1]])
        }
      if (build==='store') {
        if (buildDetail[1]==='null')  {
          tmp.building[locat[0]][locat[1]][1] = color;
          buildDetail[1] = color
          tmp.rendering.buildingDamage.add([locat[0],locat[1]])
        }

      }
      if (build==='bomb') {
        if (color===buildDetail[1]){
        for(let i=-1;i<=1;i++){
          for(let j=-1;j<=1;j++){
            if((tmp.building[locat[0]+i]&&tmp.building[locat[0]+i][locat[1]+j])&&!(["portal","light","void","horpass","verpass",null].includes(tmp.building[locat[0]+i][locat[1]+j][0])))
            { tmp.building[locat[0]+i][locat[1]+j]=[null]
              tmp.rendering.buildingDamage.add([locat[0]+i,locat[1]+j])
            }
          }
     
        }
        build = null
        return calculation2()
       
        }
      }
    }
      if (build === "light" && try1 !== 1) {
        if (withlight) lightL.push([...locat, pos, color]);
        if(final){
          pushingEdges(true,locat[0],locat[1],pos,color)
        }
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
        if(final){
          pushingEdges(true,locat[0],locat[1],pos,color)
        }
        break}
        if(build==='horpass'){
          if (pos==='up'||pos==='down')break}
        if(build==='verpass'){
          if (pos==='right'||pos==='left')break}
        else if (build==='store') {
          if(final){
            pushingEdges(true,locat[0],locat[1],pos,color)
          }

          if (buildDetail[1] !== 'null') {
            
      if (color==="white"){
          tmp.building[locat[0]][locat[1]][1] = 'null';
          buildDetail[1]='null'
      }
      else {let colors=[buildDetail[1] ,color]
      if (colors.includes('red')&&   colors.includes('green')) color="yellow"
      else if (colors.includes('yellow')&&colors.includes('red'))   color="yellow"
      else if (colors.includes('yellow')&&colors.includes('green')) color="yellow"
      else if (colors.includes('blue')&&  colors.includes('green')) color="lightBlue"
      else if (colors.includes('blue')&&  colors.includes('red'))   color="purple"}
          }
          if(final){
            pushingEdges(false,locat[0],locat[1],pos,color)
          }
        }
      if (build === "redpass" && color !== "red") {
        if(final){
          pushingEdges(true,locat[0],locat[1],pos,color)
      }
      break;
    };
      if (build === "greenpass" && color !== "green") {
        if(final){
          pushingEdges(true,locat[0],locat[1],pos,color)
      }
      break;
    };
      if (build === "yellowpass" && color !== "yellow") {
        if(final){
          pushingEdges(true,locat[0],locat[1],pos,color)
      }
      break;
    };
      if (build === "bluepass" && color !== "blue") {
        if(final){
          pushingEdges(true,locat[0],locat[1],pos,color)
      }
      break;
    };
      if (JSON.stringify(tmp.location) === JSON.stringify(locat)) {
        if(final){
          pushingEdges(true,locat[0],locat[1],pos,color)
      }
      break;
    };
      if(JSON.stringify(lightL).indexOf(JSON.stringify([...locat, pos, color]))>0){
       if(color==="white") break;
        color="white"
      }
      lightL.push([...locat, pos, color]);
      if (["light",  "store"].includes(build)){
        if(final){
          pushingEdges(false,locat[0],locat[1],pos,color)
        }
       lightL.pop();
      }
      if (build === "mirror") {
       if(!withM) lightL.pop();
        let posamt = buildDetail[1].split("-");

        if (!posamt.includes(pos)) {
          pushingEdges(true,locat[0],locat[1],pos,color)
          if(withM)lightL.pop();
          break;
        }
        if (pos === posamt[0]) pos = reverse(posamt[1]);
        else pos = reverse(posamt[0]);
      } else if (build === "portal") {
        if(final){pushingEdges(true,locat[0],locat[1],pos,color)
      }
        lightL.pop();
        locat = [...buildDetail[1]];
        if(final && !(JSON.stringify(tmp.location) === JSON.stringify(locat))){
          pushingEdges(false,locat[0],locat[1],pos,color)
          tmp.rendering.laserDamage.add(JSON.stringify([locat[0],locat[1]]))
        }
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
  else if(withM){
    return lightL.forEach(laserposition=>tmp.laserwhere[laserposition[0]][laserposition[1]].push([laserposition[2],laserposition[3]]))
  };
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
  if (a === "KeyQ" && tmp.page===1 && !tmp.b) {
    if (tmp.previous.length === 0) return;
    tmp.building = tmp.previous[tmp.previous.length - 1].building;
    tmp.location = tmp.previous[tmp.previous.length - 1].location;
    tmp.move = tmp.previous[tmp.previous.length - 1].move;
    tmp.previous.pop();
    tmp.rendering.buildingDamage=new Set(Array.from(tmp.rendering.buildingDamageHistory[tmp.rendering.buildingDamageHistory.length-1]))
    tmp.rendering.buildingDamageHistory.pop()
    tmp.rendering.buildingDamageHistory.pop()
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
    if (["boxwall","redpass","yellowpass","greenpass","light","badboxwall","sun","void","horpass","verpass",'moving'].includes(tmp.building[tmp.location[0]][tmp.location[1]][0])){
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
      tmp.rendering.buildingDamage.add([tmp.location[0],tmp.location[1]])
      let pos = [0, 0];
      let req = true;
      if ((a === "KeyD" || a === "ArrowRight")&& tmp.page===1 && !tmp.b) {
        pos[1] = 1;
        req = !(locat[1] + 1 >= tmp.area[1] - 1);
      }
      else if ((a === "KeyS" || a === "ArrowDown")&& tmp.page===1 && !tmp.b) {
        pos[0] = 1;
        req = !(locat[0] + 1 >= tmp.area[0] - 1);
      }
      else if ((a === "KeyA" || a === "ArrowLeft")&& tmp.page===1 && !tmp.b) {
        pos[1] = -1;
        req = !(locat[1] - 1 === 0);
      }
      else if ((a === "KeyW" || a === "ArrowUp")&& tmp.page===1 && !tmp.b) {
        pos[0] = -1;
        req = !(locat[0] - 1 === 0);
      }
      if (!req) {
        tmp.location = [locat[0], locat[1]];
        tmp.previous.pop();
        calculation2()
        return;
      }
      tmp.rendering.buildingDamage.add([(locat[0]+pos[0]*2),(locat[1]+pos[1]*2)])
      if(buildtouch[0]==="mirror")tmp.rendering.laserDamage.add(JSON.stringify([(locat[0]+pos[0]*2),(locat[1]+pos[1]*2)]))
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
          moveMoving()
          calculation2()
          return;
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
        moveMoving()
          calculation2()
          return;
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
      moveMoving()
      calculation2()
      return;
    }
    
    calculation2()
    if (["portal", "badportal"].includes(buildtouch[0])) return moveMoving();
    tmp.location = [...locat];
  }
  moveMoving()
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
  let move = [];
  for (let i = 0; i < tmp.area[0]; i++) {
    for (let j = 0; j < tmp.area[1]; j++) {
      if (tmp.building[i][j][0] === "light") light.push([i, j]);
      if (tmp.building[i][j][0] === "moving") move.push([i, j]);
    }
  }
  tmp.laserwhere=[]
  for (let i = 0; i < tmp.area[0]; i++) {
    tmp.laserwhere.push([])
    for (let j = 0; j < tmp.area[1]; j++) {
      tmp.laserwhere[i].push([])
    }
  }
  tmp.halflaserwhere=[]
  for (let i = 0; i < tmp.area[0]; i++) {
    tmp.halflaserwhere.push([])
    for (let j = 0; j < tmp.area[1]; j++) {
      tmp.halflaserwhere[i].push([])
    }
  }
 tmp.light = light;
 tmp.move = move;
  tmp.page = 1;
  tmp.level = "custom";
  tmp.store = imported;
  startMachine();
  calculation2()
}
