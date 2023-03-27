var player={
  levelbeaten:[0],
  perfectbeaten:[],
  version:1,
  editor:{
    data: [
      [["boxwall"], [null]],
      [[null], [null]],
    ]
  },
}
function save() {
  localStorage.setItem('player', JSON.stringify(player));
}

function load() {
  //player is already assigned to this exact value 17 lines above this one
  if (!localStorage.getItem("player")) {
/*    player={
      levelbeaten:[0],
      perfectbeaten:[],
      version:1,
      editor:{
        data: [
          [["boxwall"], [null]],
          [[null], [null]],
        ]
      },
        }*/
    save()
    //window.location.reload(); //why?
  }
//vvvv this line is what makes you not need to manually push things into player in case of an update that adds something to player
  player = {...player, ...JSON.parse(localStorage.getItem('player'))} 
//^^^^
  var app = new Vue({
      el: "#app",
      data: {
        player,
        tmp,
      },
  })
  //app.$forceUpdate(); //I think it updates without it just fine
  
  
}
window.onload = () => { //it looks cooler with this syntaxis :sunglasses:

  load()
    /*if(player==null){ //it can't possibly be null because player var is assigned right above in this file
  player={  
    levelbeaten:[0],
    perfectbeaten:[],
    version:1,
    editor:{
      data: [
        [["boxwall"], [null]],
        [[null], [null]],
      ]
    },
      }
    save()
    window.location.reload();
  }*/
};

function exportSave() {
navigator.clipboard.writeText(btoa(JSON.stringify(player)))
let btn=document.getElementById("export")
  btn.style.background=("#449944")
    setTimeout(() => {
      btn.style.background=("")
    }, 600);
}


function importSave(imported = undefined) {
  if (imported === undefined) imported = prompt("paste your save here")
  player =JSON.parse(atob(imported))
  save()
  window.location.reload();
    
}
function hardReset(){
  if(confirm("Are you sure??? It will reset EVERYTHING and you will not get any reward!!!")){
    //straight up delete it instead of making it empty
   /* player={
  levelbeaten:[],
  perfectbeaten:[],
    }
    save()*/
    localStorage.removeItem('player');
    window.location.reload();
  }
}