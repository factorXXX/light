Vue.component("main_tutorial", {
  template: `
  <div>
  <div class="modalbg"
  @click="exittutorial()">
  </div>
  <div class="modal"
  >
  <div style="width:0px;heigth:0px;overflow:hidden;position:absolute">
    <img v-for="n in tmp.tutorial.images" :src=tmp.tutorial.images[n-1]>
  </div>
    <table>
      <tr>
        <td colspan=3>
          <h1 class="modaltitle">{{tmp.tutorial.title}}</h1>
        </td>
      </tr>
      <tr>
        <td colspan=3>
          <img class="modalimg"
          :src=tmp.tutorial.images[tmp.tutorial.stage]>
        </td>
      </tr>
      <tr>
        <td class="modalbtn">
          <button v-if="tmp.tutorial.stage!==0"
          @click=tmp.tutorial.stage--
          ><span>&#8592;</span></button>
        </td>
        <td class="modaltxt">
          <span>{{tmp.tutorial.text[tmp.tutorial.stage]}}</span>
        </td>
        <td class="modalbtn">
          <button v-if="tmp.tutorial.stage < tmp.tutorial.images.length-1"
          @click=tmp.tutorial.stage++
          ><span>&#8594;</span></button>
          <button v-else
          @click=exittutorial()
          ><span>&#10004;</span></button>
        </td>
      </tr>
    </table>
  </div>
</div>
  
    `,
});

Vue.component("tutorials_tab", {
  template: `
  <div id="tutortab">
    <button @click="tmp.page=2" style="position:absolute; width:100px;height: 40px;margin: 0px;">Exit</button>
    <button @click="startTutorial(true, 1)"><h2>Basics</h2></button>
    <button @click="startTutorial(true, 4)" v-if="player.tutorial[3]"><h2>Portals</h2></button>
    <button @click="startTutorial(true, 2)" v-if="player.tutorial[1]"><h2>Storage block</h2></button>
    <button @click="startTutorial(true, 3)" v-if="player.tutorial[2]"><h2>Infinite loop and white</h2></button>
  </div>
    `,
});

function startTutorial(forced=false, type=0){
  //basic tutorial on lvl 1-1
  if ((tmp.level===1||type===1)&&(!player.tutorial[0]||forced===true)){
    tmp.tutorial.type=1
    tmp.tutorial.title="Basics"
    tmp.tutorial.images=["./images/tutorials/1-1.png","./images/tutorials/1-2.png"]
    tmp.tutorial.text=[
      "Blocks with triangles output laser",
      "push boxes to connect one of the lasers with the sun"]
    tmp.tutorial.stage=0
    tmp.modalvisible=true
  }
  //store block explanation on lvl 3-9
  if ((tmp.level===33||type===2)&&(!player.tutorial[1]||forced===true)){
    tmp.tutorial.type=2
    tmp.tutorial.title="Storage block"
    tmp.tutorial.images=["./images/tutorials/2-1.png","./images/tutorials/2-2.png","./images/tutorials/2-3.png"]
    tmp.tutorial.text=[
      "Storage keeps the first color it interacted with",
      "Storage keeps the first color it interacted with",
      "It will not be not overwritten by other colors and it can be used to mix them"]
    tmp.tutorial.stage=0
    tmp.modalvisible=true
  }
  //loop explanation on lvl 5-7
  if ((tmp.level===55||type===3)&&(!player.tutorial[2]||forced===true)){
    tmp.tutorial.type=3
    tmp.tutorial.title="Infinite loop and white"
    tmp.tutorial.images=["./images/tutorials/3-1.png","./images/tutorials/3-2.png"]
    tmp.tutorial.text=[
      "When lasers are cycled, infinite loop occurs and the color of the lasers will become white.",
      "Storage will reset its color when it touches white."]
      tmp.tutorial.stage=0
    tmp.modalvisible=true
  }
  if ((tmp.level===13||type===4)&&(!player.tutorial[3]||forced===true)){
    tmp.tutorial.type=4
    tmp.tutorial.title="Portals"
    tmp.tutorial.images=["./images/tutorials/4-1.png"]
    if(player.k)tmp.tutorial.text=["Tap on the portal to see where it leads to"]
    else tmp.tutorial.text=["Hover over the portal to see where it leads to"]
    tmp.tutorial.stage=0
    tmp.modalvisible=true
  }
}
function exittutorial(){
  tmp.modalvisible=false
  player.tutorial[tmp.tutorial.type-1]=true
  tmp.tutorial.images=[]
  tmp.tutorial.text=[]
  tmp.tutorial.stage=0
  tmp.tutorial.type=0
}