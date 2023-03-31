
  const brushes = [
    ['clear'],
    ['tiePortals'],
    ['player'],
    ['box'], 
    ['boxwall'], 
    ['badbox'], 
    ['badboxwall'], 
    ['mirror', 'left-up'],
    ['mirror', 'right-down'],
    ['mirror', 'left-down'],
    ['mirror', 'right-up'],
    ['portal',[0,0]],
    ['badportal'],
    ['light','down','green'],
    ['light','left','green'],
    ['light','up','green'],
    ['light','right','green'],
    ['light','down','red'],
    ['light','left','red'],
    ['light','up','red'],
    ['light','right','red'],
    ['sun'],
    ['greenpass'],
    ['redpass'],
    ['yellowpass'],
    ['store',null],
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
    ['bomb','yellow'],
  ]
  
  
  
  Vue.component('editor', {
    template: `
  <div>
    <table>
      <tr>
        <td>
          <editor-field/>
        </td>
        <td style="vertical-align: top;">
          <div style="width: max-content;">
            <span>Rows: 
              <button @click="removeRow()">-</button>
                {{player.editor.data.length}}
              <button @click="addRow()">+</button>
            </span><br>
            <span>Columns:
              <button @click="removeCol()">-</button>
                {{player.editor.data[0].length}}
              <button @click="addCol()">+</button>
            </span><br>
            <span>
              <button @click="clearEditor()">Clear editor</button>
            </span><br>
            <span>
              <button @click="exportEditor()">Export to Clipboard</button>
            </span><br>            
            <span>
              <button @click="importEditor()">Import</button>
            </span><br>
            <span>
              <button @click="importL(btoa(JSON.stringify(player.editor.data)))">Playtest in the game</button>
            </span><br>
            <span>
              <button @click="tmp.page=2">Back</button>
            </span>
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
          @click="setTo(r-1,c-1)">
          <span :class="{
            [geteditorclass(r-1, c-1)]:true
          }"><div></div>
          </span>
          <p v-if="player.editor.data[r-1][c-1][0]=='portal'" style="position: absolute; font-weight: 900; color:white; margin-bottom:0px">{{player.editor.data[r-1][c-1][1]}}</p>
        </td>
      </tr>
    </table>
    `
  })
  
  Vue.component('selectors',{
    template: `
    <div id="selectors" >
  <table>
    <tr>
      <td>selected:
        <div
          :class="{
            [tmp.editor.brush[0]]:true,
            [tmp.editor.brush[1]]:['store','bomb'].includes(tmp.editor.brush[0]),
            [tmp.editor.brush[2]]:true,
            trans1:tmp.editor.brush[1]=='right'||tmp.editor.brush[1]=='left-down'||tmp.editor.brush[0]=='reflectvel',
            trans2:tmp.editor.brush[1]=='up'||tmp.editor.brush[1]=='right-down',
            trans3:tmp.editor.brush[1]=='left'||tmp.editor.brush[1]=='right-up'
          }"><div></div>
        </div>
      </td>
    </tr>
    <tr>
      <td v-for="i in brushes.length" >
        <div @click="tmp.editor.brush=brushes[i-1]" 
          :class="{
            [brushes[i-1][0]]:true,
            [brushes[i-1][1]]:['store','bomb'].includes(brushes[i-1][0]),
            [brushes[i-1][2]]:true,
            trans1:brushes[i-1][1]=='right'||brushes[i-1][1]=='left-down'||brushes[i-1][0]=='reflectvel',
            trans2:brushes[i-1][1]=='up'||brushes[i-1][1]=='right-down',
            trans3:brushes[i-1][1]=='left'||brushes[i-1][1]=='right-up'
          }"><div></div>
      </td>
    </tr>
  </table>
    </div>
    `
  })
  function geteditorclass(r, c){
    let current = player.editor.data[r][c]
    if (current[0]=='location'){return 'player'}
    else if (current[0]=='mirror'){
      if(current[1]=='left-down'){
        return ('mirror'+' '+'trans1')
      }
      if(current[1]=='right-down'){
        return ('mirror'+' '+'trans2')
      }
      if(current[1]=='right-up'){
        return ('mirror'+' '+'trans3')
      }
      if(current[1]=='left-up'){
        return ('mirror')
      }
    }
    else if (current[0]=='light'){
      if(current[1]=='right'){
        return ('light'+' '+'trans1'+' '+current[2])
      }
      else if(current[1]=='up'){
        return ('light'+' '+'trans2'+' '+current[2])
      }
      else if(current[1]=='left'){
        return ('light'+' '+'trans3'+' '+current[2])
      }
      else if(current[1]=='down'){
        return ('light'+' '+current[2])
      }
    }
    else if (['store', 'bomb'].includes(current[0])){
      return (current[0] +' '+ current[1])
    }
    else return (current[0]+' '+ current[1])
  }
  
  function addRow() {
    if(player.editor.data.length < 25) {
      player.editor.data.push([])
      for(let i=0; i<player.editor.data[0].length; i++)
      player.editor.data[player.editor.data.length -1].push([null])
    }
  }
  function removeRow() {
    if(player.editor.data.length > 2) player.editor.data.pop()
  }
  
  function addCol() {
    if(player.editor.data[0].length < 25) {
      for (let i=0; i<player.editor.data.length; i++){
        player.editor.data[i].push([null])
      }
    }
  }
  function removeCol() {
    if(player.editor.data[0].length > 2) {
      for (let i=0; i<player.editor.data.length; i++){
        player.editor.data[i].pop()
      }
    }
  }
  function setTo(r, c) {
    let selected = JSON.parse(JSON.stringify(tmp.editor.brush))
    if (selected=='tiePortals'){
      if (player.editor.data[r][c][0]=='portal'&&tmp.editor.selectedPortal==null){
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
    else if (selected == 'player'){selected = ['location']}
    else if (selected == 'clear'){selected = [null]}
    player.editor.data[r][c] = selected
    player.editor.data[0].push([null])
    player.editor.data[0].pop() //This is a piss tier solution but I give up I don't know how to make it auto update otherwice
    save()
  }
  function clearEditor(){
    if(confirm("Are you sure?")){
    for (let r=0; r<player.editor.data.length; r++){
      for (let c=0; c<player.editor.data[0].length; c++){
        player.editor.data[r][c]=[null]
      }
    }
    player.editor.data[0].push(null)
    player.editor.data[0].pop()
  }}
  function exportEditor(){
   navigator.clipboard.writeText(btoa(JSON.stringify(player.editor.data)))
  }
  function importEditor(imported = undefined) {
    if (imported === undefined) imported = prompt("paste your level here")
    player.editor.data = JSON.parse(atob(imported))
    save()
      
  }