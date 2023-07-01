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

function startTutorial(forced=true){
  //basic tutorial on lvl 1-1
  if (tmp.level===1&&(!player.tutorial[0]||forced===true)){
    tmp.tutorial.title="Basics"
    tmp.tutorial.images=["./images/tutorials/1-1.png","./images/tutorials/1-2.png"]
    tmp.tutorial.text=[
      "Blocks with triangles output laser",
      "push boxes to connect one of the lasers with the sun"]
    tmp.tutorial.stage=0
    tmp.modalvisible=true
  }
  //store block explanation on lvl 3-9
  if (tmp.level===33&&(!player.tutorial[1]||forced===true)){
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
  if (tmp.level===55&&(!player.tutorial[2]||forced===true)){
    tmp.tutorial.title="Infinite loop and white"
    tmp.tutorial.images=["./images/tutorials/3-1.png","./images/tutorials/3-2.png"]
    tmp.tutorial.text=[
      "When lasers are cycled, infinite loop occurs and the color of the lasers will become white.",
      "Storage will reset its color when it touches white."]
      tmp.tutorial.stage=0
    tmp.modalvisible=true
  }
}
function exittutorial(){
  tmp.modalvisible=false
  player.tutorial[tmp.intutorial-1]=true
  tmp.tutorial.images=[]
  tmp.tutorial.text=[]
  tmp.tutorial.stage=0
}