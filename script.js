var tmp={
    page:2
}
function img(x){
    return "https://cdn.glitch.global/1c628347-f3a3-4ff6-841d-e401a9fb21ec/"+x+".png?1770592701418"
  } 
  Vue.component('selectmenu', {
    template: `
    <table style="background-color:#555555">
    <tr v-for="a in 3">
    <td v-for="b in 4"  style="border-color:#aaaaaa; text-align:center;border-style:solid;height:50px;width:50px"">
    {{a*4+b-4}}
    </td>
    </tr>
    </table>
    `
  })
  Vue.component('machine', {
    template: `
    <table style="background-color:#555555">
    <tr v-for="a in player.area[0]">
    <td v-for="b in player.area[1]"  style="border-color:#aaaaaa; border-style:solid"">
    <img width="100" height="100" v-bind:src="img((player.location[0]==(a-1)&&player.location[1]==(b-1))?'location':
    ((findLight(a-1,b-1))?
    findLightPos(a-1,b-1)+'line':
    player.building[a-1][b-1][0]=='light'?player.building[a-1][b-1][0]+player.building[a-1][b-1][1]:
    player.building[a-1][b-1][0]=='mirror'?player.building[a-1][b-1][1]+player.building[a-1][b-1][0]:
    player.building[a-1][b-1][0]
    ))">
    </td>
    </tr>
    </table>
    `
  })
  Vue.component('next', {
    template: `
    <button v-show="win()" onclick="player.level++;player.bestlevel++;reset()">
        Next Level
        </button>
    `
  })
  Vue.component('enter', {
    template: `
    <button v-show="player.building[player.location[0]][player.location[1]][0]=='portal'"
    onclick="enter()">
        Enter the portal
        </button>
    `
  })
  function reset(){
//Chapter 1: Intro

    if(player.level==1){
        player.building=[
      [[null],["light","down",true],[null]],
      [[null],["box"],[null]],
      [[null],["sun"],[null]],
    ]
    player.location=[0,0],
    player.light=[0,1],
    player.area=[3,3]
    }
    else if(player.level==2){
              player.building=[
          [[null],["light","down",true],[null],['box']],
        [[null],['box'],['box'],[null]],
       [[null],['sun'],[null],['box']],
       [[null],[null],['box'],[null]],
    ]
    player.location=[0,0]
    player.light=[0,1]
      player.area=[4,4]
    }
    else if(player.level==3){
       player.building=[
      [[null],["light","down",true],[null]],
       [[null],[null],[null],[null]],   
      [[null],["box"],["box"]],
      [[null],[null],[null]],  
      [[null],["sun"],[null]],
    ]
    player.location=[0,0]
    player.light=[0,1]
      player.area=[5,3]
    }
    else if(player.level==4){
              player.building=[
      [[null],[null],["box"],[null],[null]],
       [[null],["box"],[null],[null],[null]],   
      [["light","right",true],["box"],["box"],[null],["sun"]],
      [[null],[null],[null],[null],[null]],  
      [[null],[null],[null],[null],[null]],
    ]
    player.location=[0,0]
    player.light=[2,0]
      player.area=[5,5]
    }
    else if(player.level==5){
              player.building=[
      [[null],["light","down",true],[null],[null]],
       [[null],["box"],[null],[null]],   
      [[null],["mirror","left-down"],[null],["sun"]],
    ]
    player.location=[0,0]
    player.light=[0,1]
      player.area=[3,4]
    }
    else if(player.level==6){
      player.building=[
        [[null],[null],[null],[null],[null]],
      [[null],["light","down",true],[null],[null],["sun"]],
        [[null],["mirror","left-down"],[null],[null],[null]],
        [[null],[null],[null],["mirror","right-down"],[null]],
        [[null],[null],["box"],[null],[null]],
  
    ]
    player.location=[0,0]
    player.light=[1,1]
      player.area=[4,5]
    }
    else if(player.level==7){
      player.building=[
        [[null],[null],["light","down",true],[null],[null]],
      [["sun"],[null],[null],[null],[null]],
        [[null],[null],["mirror","left-down"],["mirror","right-up"],["mirror","right-down"]],
        [[null],[null],[null],[null],["box"]],
    ]
    player.location=[0,0]
    player.light=[0,2]
      player.area=[4,5]
    }
    else if(player.level==8){
      player.building=[
       [[null],[null],[null],[null],[null],["box"]],
         [[null],["mirror","left-up"],["light","right",true],["box"],[null],["box"]],
       [[null],[null],["mirror","right-up"],[null],[null],[null]],
       [[null],["mirror","left-down"],["mirror","right-down"],[null],[null],[null]],
       [[null],[null],[null],[null],[null],["sun"]],
    ]
    player.location=[2,0]
    player.light=[1,2]
      player.area=[5,6]
    }
    else if(player.level==9){
      player.building=[
        [[null],[null],[null],["sun"]],
       [[null],[null],[null],["badbox"]],
         [["light","right",true],[null],["mirror","right-down"],[null]],
    ]
    player.location=[0,0]
    player.light=[2,0]
      player.area=[3,4]
    }
    else if(player.level==10){
      player.building=[
        [["box"],[null],[null],[null]],
        [["box"],[null],["mirror","right-up"],[null]],
       [["box"],[null],["badbox"],[null]],
         [["light","right",true],[null],[null],["mirror","right-down"]],
         [[null],[null],["sun"],[null]],
    ]
    player.location=[2,1]
    player.light=[3,0]
      player.area=[5,4]
    }
    else if(player.level==11){
      player.building=[
         [["mirror","left-up"],[null],[null],["badboxwall"],["mirror","right-up"],[null]],
        [[null],["boxwall"],[null],["boxwall"],[null],[null]],
        [[null],[null],[null],["boxwall"],[null],[null]],
       [[null],["mirror","right-down"],[null],["badbox"],[null],[null]],
         [[null],["boxwall"],["boxwall"],[null],[null],[null]],
        [[null],[null],[null],[null],[null],[null]],
        [["sun"],["light","right",true],[null],[null],[null],[null]],
    ]
    player.location=[2,0]
    player.light=[6,1]
      player.area=[7,6]
    }
    else if(player.level==12){
      player.building=[
    [["boxwall"],["boxwall"],["boxwall"],["boxwall"],["sun"],["boxwall"],["boxwall"]],
    [[null],[null],["light","right",true],[null],[null],[null],["box"]],
    [[null],["boxwall"],["box"],["boxwall"],["badboxwall"],[null],[null]],
    [[null],["mirror","left-down"],["badboxwall"],[null],[null],["mirror","right-down"],[null]],
    [[null],["box"],[null],[null],["mirror","right-up"],[null],[null]],
    [[null],[null],[null],[null],[null],[null],[null]],
    ]
    player.location=[5,6]
    player.light=[1,2]
      player.area=[6,7]
    }

//Chapter 2: Portal

    else if(player.level==13){
        player.building=[
               [[null],["sun"],[null]],
               [["portal",[3,0]],[null],[null]],
               [["badboxwall"],["badboxwall"],["badboxwall"]],
               [["portal",[1,0]],["box"],[null]],
               [[null],["light","up",true],[null]],
      ]
      player.location=[0,0]
      player.light=[4,1]
        player.area=[5,3]
    }
    else if(player.level==14){
        player.building=[
            [[null],[null],[null],[null]],
            [[null],[null],[null],[null]],
            [["light","down",true],["mirror","right-down"],[null],[null]],
            [["portal",[3,1]],["portal",[3,0]],[null],[null]],
            [["sun"],["mirror","right-up"],[null],[null]],
            [[null],[null],[null],[null]],
    ]
      player.location=[0,0]
      player.light=[2,0]
        player.area=[6,4]
    }
    else if(player.level==15){
        player.building=[
               [[null],["light","down",true],[null],[null],["sun"]],
               [[null],["portal",[3,0]],["mirror","left-up"],[null],[null]],
               [["boxwall"],["boxwall"],[null],["boxwall"],["boxwall"]],
               [["portal",[1,1]],[null],["mirror","right-down"],[null],[null]],
               [[null],["mirror","left-down"],[null],[null],[null]],
      ]
      player.location=[0,0]
      player.light=[0,1]
        player.area=[5,5]
    }
    else if(player.level==16){
      player.building=[
             [[null],[null],[null],[null],[null]],
             [["sun"],[null],["portal",[3,2]],["mirror","right-down"],[null]],
             [["boxwall"],["boxwall"],["boxwall"],[null],[null]],
             [[null],["mirror","left-up"],["portal",[1,2]],["mirror","right-up"],[null]],
             [["light","up",true],[null],[null],[null],[null]],
    ]
    player.location=[0,0]
    player.light=[4,0]
      player.area=[5,5]
  }
    else if(player.level==17){
      player.building=[
              [[null],[null],["light","down",true],[null],[null]],
              [[null],["light","right",true],["end"],["light","left",true],[null]],
             [[null],[null],["light","up",true],[null],[null]],
    ]
    player.location=[0,0]
    player.light=[1,2]
      player.area=[3,5]
    }
    else {
        player.building=[
      [[null],["light","down",true],[null]],
      [[null],["box"],[null]],
      [[null],["sun"],[null]],
    ]
    player.location=[0,0],
    player.light=[0,1],
    player.area=[3,3]
    } 
    
    save()
  }
  function findLight(a,b){
    let ans=false
    if(light().length==0)return false;
    for(let i=0;i<=light().length-1;i++){
      if(a==light()[i][0]&&b==light()[i][1])ans=true
    }
    return ans
  }
  function findLightPos(a,b){
    if(!findLight(a,b))return;
    let ans=0
    for(let i=0;i<=light().length-1;i++){
      if(a==light()[i][0]&&b==light()[i][1]){return light()[i][2]}
    }
    
  }
  function light(){
    let pos=player.building[player.light[0]][player.light[1]][1]
    let locat=[...player.light]
    let lightL=[]
    let try1=0
    while(true){
      try1++
          if(player.building[locat[0]]==null)break;
       if(player.building[locat[0]][locat[1]]==null)break;
      if(["badbox","badboxwall"].includes(player.building[locat[0]][locat[1]][0]))player.building[locat[0]][locat[1]]=[null]
      if(![null,"mirror","light","portal"].includes(player.building[locat[0]][locat[1]][0]))break;
      if(player.building[locat[0]][locat[1]][0]=="light"&&try1!=1)break;
      if(player.location[0]==locat[0]&&player.location[1]==locat[1])break;
      

      lightL.push([...locat,pos])
      
      if(player.building[locat[0]][locat[1]][0]=="mirror"){
        lightL.pop()
        let posamt=player.building[locat[0]][locat[1]][1].split("-")
        if(!posamt.includes(pos))break;
        if(pos==posamt[0])pos=reverse(posamt[1])
        else pos=reverse(posamt[0])
      }
      if(player.building[locat[0]][locat[1]][0]=="portal"){
        lightL.pop()
        locat=[...player.building[locat[0]][locat[1]][1]]
        if(player.location[0]==locat[0]&&player.location[1]==locat[1]){lightL.pop();break;}
    }
    //console.log(locat)
      if(pos=="down")locat[0]=locat[0]+1
      if(pos=="up")locat[0]=locat[0]-1
      if(pos=="right")locat[1]=locat[1]+1
      if(pos=="left")locat[1]=locat[1]-1
    }
    
    lightL.shift()
    return lightL
  }
  function win(){
      let pos=player.building[player.light[0]][player.light[1]][1]
    let locat=[...player.light]
    while(true){
              if(player.building[locat[0]]==null)break;
       if(player.building[locat[0]][locat[1]]==null)break;
      if(player.building[locat[0]][locat[1]][0]=="sun")return true;
  
      if(![null,"mirror","light","portal"].includes(player.building[locat[0]][locat[1]][0]))break;
      if(player.location[0]==locat[0]&&player.location[1]==locat[1])break;
     
      
      if(player.building[locat[0]][locat[1]][0]=="mirror"){
        let posamt=player.building[locat[0]][locat[1]][1].split("-")
        if(!posamt.includes(pos))break;
        if(pos==posamt[0])pos=reverse(posamt[1])
        else pos=reverse(posamt[0])
      }
      if(player.building[locat[0]][locat[1]][0]=="portal"){
        locat=[...player.building[locat[0]][locat[1]][1]]
      }
      if(pos=="down")locat[0]=locat[0]+1
      if(pos=="up")locat[0]=locat[0]-1
      if(pos=="right")locat[1]=locat[1]+1
      if(pos=="left")locat[1]=locat[1]-1
    }
    return false
  }
  document.addEventListener('keydown', (e) => {
  
      let locat=[parseInt(player.location[0]),parseInt(player.location[1])]
    if (e.code === "KeyW"||e.code === "ArrowUp")   Vue.set(player.location, 0, Math.max(0,player.location[0]-1))
    else if (e.code === "KeyS"||e.code === "ArrowDown") Vue.set(player.location, 0, Math.min(player.area[0]-1,player.location[0]+1))
    else if (e.code === "KeyA"||e.code === "ArrowLeft")   Vue.set(player.location, 1, Math.max(0,player.location[1]-1))
    else if (e.code === "KeyD"||e.code === "ArrowRight") Vue.set(player.location, 1, Math.min(player.area[1]-1,player.location[1]+1))
    if (e.code === "KeyR") reset()
    if (e.code === "KeyH") hardReset()
    if (e.code === "KeyN"&&win()) {player.level++;reset()}
    if (e.code === "KeyP") tmp.page=tmp.page%2+1
      if(player.building[player.location[0]][player.location[1]][0]!=null){
        let buildtouch=player.building[player.location[0]][player.location[1]]
        
        if(["box","badbox","mirror"].includes(buildtouch[0])){
          if(e.code === "KeyD"||e.code==="ArrowRight"&&!((locat[1]+1)>=(player.area[1]-1))){
            if(![null].includes(player.building[locat[0]][locat[1]+2][0]))return player.location=[locat[0],locat[1]];
            player.building[locat[0]][locat[1]+1]=[null]
            player.building[locat[0]][locat[1]+2]=buildtouch
            player.location=[locat[0],locat[1]+1]
            return;
          }
          if(e.code === "KeyS"||e.code==="ArrowDown"&&!((locat[0]+1)>=(player.area[0]-1))){
            if(![null].includes(player.building[locat[0]+2][locat[1]][0]))return player.location=[locat[0],locat[1]];
            player.building[locat[0]+1][locat[1]]=[null]
            player.building[locat[0]+2][locat[1]]=buildtouch
            player.location=[locat[0]+1,locat[1]]
            return;
          }
          if(e.code === "KeyA"||e.code==="ArrowLeft"&&!((locat[1]-1)==0)){
            if(![null].includes(player.building[locat[0]][locat[1]-2][0]))return player.location=[locat[0],locat[1]];
            player.building[locat[0]][locat[1]-1]=[null]
            player.building[locat[0]][locat[1]-2]=buildtouch
            player.location=[locat[0],locat[1]-1]
            return;
          }
          if(e.code === "KeyW"||e.code==="ArrowUp"&&!((locat[0]-1)==0)){
            if(![null].includes(player.building[locat[0]-2][locat[1]][0]))return player.location=[locat[0],locat[1]];
            player.building[locat[0]-1][locat[1]]=[null]
            player.building[locat[0]-2][locat[1]]=buildtouch
            player.location=[locat[0]-1,locat[1]]
            return;
          }
        }
        if (e.code === "KeyE"&&player.building[player.location[0]][player.location[1]][0]=='portal') {enter()}
        if(buildtouch[0]=="portal")return;
        player.location=[...locat]
      }
  
    
    
  });
  setInterval(function(){
    if(player.location[0]<0)player.location[0]=0
    if(player.location[1]<0)player.location[1]=0
    document.title="Light|Level "+Math.floor((player.level-1)/12+1).toString()+"-"+(player.level-Math.floor((player.level-1)/12)*12).toString()
    
   //if(win()){alert("You Win!");player.level++;reset()}
  },50)
  function enter(){
    player.location=[...player.building[player.location[0]][player.location[1]][1]]
  }
  function reverse(x){
    switch(x){
        case "up":return "down";
        case "down":return "up";
        case "left":return "right";
        case "right":return "left";
    }
  }