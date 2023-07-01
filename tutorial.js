Vue.component("main_tutorial", {
  template: `
  <div>
  <div class="modalbg"
  @click="exittutorial()">
  </div>
  <div class="modal"
  v-if="tmp.tutorial.type===1"
  >
    <table>
      <tr>
        <td colspan=3>
          <h1 class="modaltitle">Basics</h1>
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
          ><=</button>
        </td>
        <td class="modaltxt">
          <span>{{tmp.tutorial.text[tmp.tutorial.stage]}}</span>
        </td>
        <td class="modalbtn">
          <button v-if="tmp.tutorial.stage < tmp.tutorial.images.length-1"
          @click=tmp.tutorial.stage++
          >=></button>
          <button v-else
          @click=exittutorial()
          >done</button>
        </td>
      </tr>
    </table>
  </div>
</div>
  
    `,
});

function startTutorial(forced=true){
  //basic tutorial on lvl 1
  if (tmp.level===1&&(!player.tutorial[0]||forced===true)){
    tmp.tutorial.images=["/images/tutorials/1-1.png","/images/tutorials/1-2.png"]
    tmp.tutorial.text=[
      "Blocks with triangles output laser",
      "push blocks to connect one of the lasers with the sun"]
    tmp.tutorial.stage=0
    tmp.tutorial.type=1
    tmp.modalvisible=true
  }
  if (tmp.level===33&&(!player.tutorial[1]||forced===true)){
    tmp.tutorial.type=2
    tmp.modalvisible=true
  }
  if (tmp.level===55&&(!player.tutorial[2]||forced===true)){
    tmp.tutorial.type=3
    tmp.modalvisible=true
  }
}
function exittutorial(){
  tmp.modalvisible=false
  player.tutorial[tmp.intutorial-1]=true
  tmp.tutorial.images=[]
  tmp.tutorial.text=[]
  tmp.tutorial.stage=0
  tmp.tutorial.type=0
}