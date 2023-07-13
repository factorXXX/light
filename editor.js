
  const brushes = [
    ['clear'],
    ['tiePortals'],
    ['player'],
    ['void'],
    ['box'], 
    ['boxwall'], 
    ['badbox'], 
    ['badboxwall'], 
    ['mirror', 'left-up'],
    ['mirror', 'right-down'],
    ['mirror', 'left-down'],
    ['mirror', 'right-up'],
    ['sun'],
    ['light','down','green'],
    ['light','left','green'],
    ['light','up','green'],
    ['light','right','green'],
    ['light','down','red'],
    ['light','left','red'],
    ['light','up','red'],
    ['light','right','red'],
/*    ['light','down','blue'],
    ['light','left','blue'],
    ['light','up','blue'],
    ['light','right','blue'], */
    ['portal',[0,0]],
    ['badportal'],
    ['horpass'],
    ['verpass'],
    ['greenpass'],
    ['redpass'],
    ['yellowpass'],
    ['bluepass'],
    ['store','null'],
    ['store','green'],
    ['store','red'],
    ['store','yellow'],
    ['rotate180'],
    ['rotate90'],
    ['rotate270'],
    ['reflecthor'],
    ['reflectvel'],
    ['bomb','green'],
    ['bomb','red'],
//    ['bomb','blue'],
    ['bomb','yellow'],
    ['moving','down'],
    ['moving','left'],
    ['moving','up'],
    ['moving','right'],
  ]
  tmp.editor.brush = brushes[0]
  
  Vue.component('editor', {
    template: `
  <div>
    <table class="editor">
      <tr style="min-height: 300px; height: 300px">
        <td>
          <editor-field/>
        </td>
        <td style="vertical-align: top;">
          <div style="width: max-content;">
            <span >
              <button id="rmrow" class="up" @click="removeRow(true)"></button>
              <button id="addrow" class="up" @click="addRow(true)"></button>
               <span id="radd"> {{player.editor.data.length}} </span>
              <button id="addrow" @click="addRow()"></button>
              <button id="rmrow" @click="removeRow()"></button>
            </span><br>
            <span>
              <button id="rmrow" class="left" @click="removeCol(true)"></button>
              <button id="addrow" class="left" @click="addCol(true)"></button>
              <span id="radd"> {{player.editor.data[0].length}} </span>
              <button id="addrow" class="right" @click="addCol()"></button>
              <button id="rmrow" class="right" @click="removeCol()"></button>
            </span>
            <br><br>
            <table id="editorControls">
              <tr>
                <td colspan=2><button @click="clearEditor()">Clear editor</button></td>
              </tr>
              <tr>
                <td><button id="edexpbtn" @click="exportEditor()">Export</button></td>
                <td><button @click="importEditor()">Import</button></td>
              </tr>
              <tr>
                <td><button @click="importL(LZString.compressToBase64(JSON.stringify(player.editor))); tmp.editor.fromEditor=true">Playtest</button></td>
                <td><button @click="tmp.page=2">Exit</button></td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    <div>
      <selectors/>
    </div>
  </div>
        `,
  });
  Vue.component('editor-field',{
    template: `
    <table class="gamezone">
      <tr v-for="r in player.editor.data.length">
      <td v-for="c in player.editor.data[0].length"
          :class="{
            [geteditorclass(r-1, c-1, false)]:true
          }"  
          @click="setTo(r-1,c-1)">
          <span 
          style="position:absolute; width: 70px; height: 70px"
          :class="{player: player.editor.location[0]==r-1&&player.editor.location[1]==c-1}">
          </span>
          <span :class="{
            [geteditorclass(r-1, c-1)]:true
          }"><div></div>
          </span>
          
          <p v-if="player.editor.data[r-1][c-1][0]==='portal'" style="position: absolute; font-weight: 900; color:white; margin-bottom:0px; min-width:max-content">{{player.editor.data[r-1][c-1][1]}}</p>
        </td>
      </tr>
    </table>
    `
  })
  
  Vue.component('selectors',{
    template: `
    <div id="selectors" style="margin-top:10px;">
  <table>
    <tr >
      <td v-for="i in brushes.length" 
          :class="{
            selected:tmp.editor.brush===brushes[i-1]
          }"
          @click="tmp.editor.brush=brushes[i-1]" 
      >
        <div 
          :title="brushes[i-1].toString().replace(/[,0]/g,' ')"
          :class="{
            [brushes[i-1][0]]:true,
            [brushes[i-1][1]]:true,
            [brushes[i-1][2]]:true,
          }"><div></div>
      </td>
    </tr>
  </table>
    </div>
    `
  })
  function geteditorclass(r, c, h=true){
    let current = player.editor.data[r][c]
    if(h){
    if (current[0]==='location'){return 'player'}
    else {
        return (current[0]+' '+(current[1]?current[1]:"")+' '+(current[2]?current[2]:""))
    }
  } else {
    if(['void','horpass','verpass'].includes(current[0]))return current[0]
  }
  }
  
  function addRow(top=false) {
    if(player.editor.data.length < 25) {
      if (!top){
        player.editor.data.push([])
        for(let i=0; i<player.editor.data[0].length; i++)
          player.editor.data[player.editor.data.length -1].push([null])
      }else{
        player.editor.data.unshift([])
        player.editor.location[0]++
        for(let i=0; i<player.editor.data[1].length; i++)
          player.editor.data[0].push([null])
        
        for (let i=0; i<player.editor.data.length; i++){
          for (let c=0; c<player.editor.data[0].length; c++){
            if (player.editor.data[i][c][0]==='portal'){
              player.editor.data[i][c][1][0]++
            }
          }
        }
      }
    }
  save()
  }
  function removeRow(top=false) {
    if(player.editor.data.length > 2){
      if (!top){
        player.editor.data.pop()
        if (player.editor.location[0]>=player.editor.data.length) player.editor.location = [0,0]
      } else {
        player.editor.location[0]--
        player.editor.data.shift()
        if (player.editor.location[0]< 0) player.editor.location = [0,0]

        for (let i=0; i<player.editor.data.length; i++){
          for (let c=0; c<player.editor.data[0].length; c++){
            if (player.editor.data[i][c][0]==='portal'){
              player.editor.data[i][c][1][0]--
            }
          }
        }
      }
    }
  save()
  }
  
  function addCol(left=false) {
    if(player.editor.data[0].length < 25) {
      if(!left){
      for (let i=0; i<player.editor.data.length; i++){
          player.editor.data[i].push([null])
        }
      } else {
        player.editor.location[1]++
      for (let i=0; i<player.editor.data.length; i++){
          player.editor.data[i].unshift([null])
          for (let c=0; c<player.editor.data[0].length; c++){
            if (player.editor.data[i][c][0]==='portal'){
              player.editor.data[i][c][1][1]++
            }
          }
        }
      }
  }
  save()
  }
  function removeCol(left=false) {
    if(player.editor.data[0].length > 2) {
      if (!left){
      for (let i=0; i<player.editor.data.length; i++){
        player.editor.data[i].pop()
      }
      if (player.editor.location[1]>=player.editor.data[0].length) player.editor.location = [0,0]
      } else {
        player.editor.location[1]--
      for (let i=0; i<player.editor.data.length; i++){
        player.editor.data[i].shift()
        for (let c=0; c<player.editor.data[0].length; c++){
          if (player.editor.data[i][c][0]==='portal'){
            player.editor.data[i][c][1][1]--
          }
        }
      }
      
      if (player.editor.location[1]< 0) player.editor.location = [0,0]
      }
    }
  save()
  }
  function setTo(r, c) {
    let selected = JSON.parse(JSON.stringify(tmp.editor.brush))
    if (selected[0]==='tiePortals'){
      if (player.editor.data[r][c][0]==='portal'&&tmp.editor.selectedPortal===null){
        tmp.editor.selectedPortal=[r,c]
      return
      }
      else if (tmp.editor.selectedPortal!==null){
        player.editor.data[tmp.editor.selectedPortal[0]][tmp.editor.selectedPortal[1]][1]=[r,c]
        tmp.editor.selectedPortal=null
      }
      player.editor.data[0].push([null])
      player.editor.data[0].pop()
      save()
      return;
    }
    else if (selected[0] === 'player'){player.editor.location = [r,c];save(); return}
    else if (selected[0] === 'clear'){selected = [null]}
    player.editor.data[r][c] = selected
    player.editor.data[0].push([null])
    player.editor.data[0].pop() //This is a piss tier solution but I give up I don't know how to make it auto update otherwice ~Wrab
    save()
  }
  function clearEditor(){
    if(confirm("Are you sure you want to delete everything in the editor?")){
    for (let r=0; r<player.editor.data.length; r++){
      for (let c=0; c<player.editor.data[0].length; c++){
        player.editor.data[r][c]=[null]
      }
    }
    player.editor.data[0].push(null)
    player.editor.data[0].pop()
    player.editor.location=[0,0]
  }
}
  function exportEditor(){
   navigator.clipboard.writeText(LZString.compressToBase64(JSON.stringify(player.editor)))
   let btn=document.getElementById("edexpbtn")
   btn.style.background=("#449944")
   btn.innerHTML="Copied!"
   setTimeout(() => {
     btn.style.background=("")
     btn.innerHTML="Export"
   }, 600);
  }
  function importEditor(imported = undefined) {
    if (imported === undefined) imported = prompt("paste your level here")
    let importedData = JSON.parse(LZString.decompressFromBase64(imported))
    player.editor.data = importedData.data
    player.editor.location = importedData.location
    save()
  }