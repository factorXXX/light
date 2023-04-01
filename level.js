function reset(manual=false){
    if(!level[tmp.level]){
      tmp.page=2
      return save()
    } else {
    tmp.page=1;
    tmp.win=false
    tmp.previous= [];
    currentLevel={}
    if (tmp.store!==''&&tmp.level=='custom'){currentLevel = importL(tmp.store)}
    else {currentLevel = JSON.parse(JSON.stringify(level[tmp.level]))}
    let levelNumber = tmp.level
    if (!!currentLevel.string){
      importL(currentLevel.string)
      tmp.level = levelNumber
    } else  {
    tmp.building=currentLevel.building
    tmp.location=currentLevel.location
    tmp.area = [currentLevel.building.length, currentLevel.building[0].length]
    tmp.light = currentLevel.light
    }
    calculation2()
    save()
    }
    save()
  }

  const level = {
  1: {
    building: [
      [[null], ["light", "down", "green"], [null]],
      [[null], ["box"], [null]],
      [[null], ["sun"], [null]],
    ],
    perfect:3,
    location: [0, 0],
    light: [[0, 1]],
    index: 1
  },
  2: {
    building: [
      [[null], ["light", "down", "green"], [null], ["box"]],
      [[null], ["box"], ["box"], [null]],
      [[null], ["sun"], [null], ["box"]],
      [[null], [null], ["box"], [null]],
    ],
    perfect:9,
    location: [0, 0],
    light: [[0, 1]],
    index: 2
  },
  3: {
    building: [
      [[null], ["light", "down", "green"], [null]],
      [[null], [null], [null], [null]],
      [[null], ["box"], ["box"]],
      [[null], [null], [null]],
      [[null], ["sun"], [null]],
    ],
    perfect:6,
    location: [0, 0],
    light: [[0, 1]],
    index: 3
  },
  4: {
    building: [
      [[null], [null], ["box"], [null], [null]],
      [[null], ["box"], [null], [null], [null]],
      [["light", "right", "green"], ["box"], ["box"], [null], ["sun"]],
      [[null], [null], [null], [null], [null]],
      [[null], [null], [null], [null], [null]],
    ],
    perfect:7,
    location: [0, 0],
    light: [[2, 0]],
    index: 4
  },
  5: {
    building: [
      [[null], ["light", "down", "green"], [null], [null]],
      [[null], ["box"], [null], [null]],
      [[null], ["mirror", "left-down"], [null], ["sun"]],
    ],
    perfect:3,
    location: [0, 0],
    light: [[0, 1]],
    index: 5
  },
  6: {
    building: [
      [[null], [null], [null], [null], [null]],
      [[null], ["light", "down", "green"], [null], [null], ["sun"]],
      [[null], ["mirror", "left-down"], [null], [null], [null]],
      [[null], [null], [null], ["mirror", "right-down"], [null]]
    ],
    perfect:14,
    location: [0, 0],
    light: [[1, 1]],
    index: 6
  },
  7: {
    building: [
      [[null], [null], ["light", "down", "green"], [null], [null]],
      [["sun"], [null], [null], [null], [null]],
      [[null],[null],["mirror", "left-down"],["mirror", "right-up"],["mirror", "right-down"],],
      [[null], [null], [null], [null], ["box"]],
    ],
    perfect:15,
    location: [0, 0],
    light: [[0, 2]],
    index: 7
  },
  8: {
    building: [
      [[null], [null], [null], [null], [null], ["box"]],
      [[null],["mirror", "left-up"],["light", "right", "green"],["box"],[null],["box"],],
      [[null], [null], ["mirror", "right-up"], [null], [null], [null]],
      [[null],["mirror", "left-down"],["mirror", "right-down"],[null],[null],[null],],
      [[null], [null], [null], [null], [null], ["sun"]],
    ],
    perfect:17,
    location: [2, 0],
    light: [[1, 2]],
    index: 8
  },
  9: {
    building: [
      [[null], [null], [null], ["sun"]],
      [[null], [null], [null], ["badbox"]],
      [["light", "right", "green"], [null], ["mirror", "right-down"], [null]],
    ],
    perfect:5,
    location: [0, 0],
    light: [[2, 0]],
    index: 9
  },
  10: {
    building: [
      [["box"], [null], [null], [null]],
      [["box"], [null], ["mirror", "right-up"], [null]],
      [["box"], [null], ["badbox"], [null]],
      [["light", "right", "green"], [null], [null], ["mirror", "right-down"]],
      [[null], [null], ["sun"], [null]],
    ],
    perfect:7,
    location: [2, 1],
    light: [[3, 0]],
    index: 10
  },
  11: {
    building: [
      [["mirror", "left-up"],[null],[null],["badboxwall"],["mirror", "right-up"],[null],],
      [[null], ["boxwall"], [null], ["boxwall"], [null], [null]],
      [[null], [null], [null], ["boxwall"], [null], [null]],
      [[null], ["mirror", "right-down"], [null], ["badbox"], [null], [null]],
      [[null], ["boxwall"], ["boxwall"], [null], [null], [null]],
      [[null], [null], [null], [null], [null], [null]],
      [["sun"], ["light", "right", "green"], [null], [null], [null], [null]],
    ],
    perfect:24,
    location: [2, 0],
    light: [[6, 1]],
    index: 11
  },
  12: {
    building: [
      [["boxwall"],["boxwall"],["boxwall"],["boxwall"],["sun"],["boxwall"],["boxwall"],],
      [[null],[null],["light", "right", "green"],[null],[null],[null],["box"],],
      [[null],["boxwall"],["box"],["boxwall"],["badboxwall"],[null],[null],],
      [[null],["mirror", "left-down"],["badboxwall"],[null],[null],["mirror", "right-down"],[null],],
      [[null], ["box"], [null], [null], ["mirror", "right-up"], [null], [null]],
      [[null], [null], [null], [null], [null], [null], [null]],
    ],
    perfect:31,
    location: [5, 6],
    light: [[1, 2]],
    index: 12
  },
   13: {
    building: [
      [[null], ["sun"], [null]],
      [["portal", [3, 0]], [null], [null]],
      [["badboxwall"], ["badboxwall"], ["badboxwall"]],
      [["portal", [1, 0]], ["box"], [null]],
      [[null], ["light", "up", "green"], [null]],
    ],
    perfect:4,
    location: [0, 0],
    light: [[4, 1]],
    index: 13
  },
  14: {
    building: [
      [[null], [null], [null], [null]],
      [[null], [null], [null], [null]],
      [["light", "down", "green"], ["mirror", "right-down"], [null], [null]],
      [["portal", [3, 1]], ["portal", [3, 0]], [null], [null]],
      [["sun"], ["mirror", "right-up"], [null], [null]],
      [[null], [null], [null], [null]],
    ],
    perfect:24,
    location: [0, 0],
    light: [[2, 0]],
    index: 14
  },
  15: {
    building: [
      [[null], [null], [null], [null], [null]],
      [["sun"], [null], ["portal", [3, 2]], ["mirror", "right-down"], [null]],
      [["boxwall"], ["boxwall"], ["boxwall"], [null], [null]],
      [[null],["mirror", "left-up"],["portal", [1, 2]],["mirror", "right-up"],[null],],
      [["light", "up", "green"], [null], [null], [null], [null]],
    ],
    perfect:23,
    location: [0, 0],
    light: [[4, 0]],
    index: 15
  },
  16: {
    building: [
      [[null], ["light", "down", "green"], [null], [null], ["sun"]],
      [[null], ["portal", [3, 0]], ["mirror", "left-up"], [null], [null]],
      [["boxwall"], ["boxwall"], [null], ["boxwall"], ["boxwall"]],
      [["portal", [1, 1]], [null], ["mirror", "right-down"], [null], [null]],
      [[null], ["mirror", "left-down"], [null], [null], [null]],
    ],
    perfect:24,
    location: [0, 0],
    light: [[0, 1]],
    index: 16
  },
  17: {
    building: [
      [[null], [null], [null], [null]],
      [[null], ["mirror", "right-up"], ["mirror", "left-up"], [null]],
      [["portal", [4, 3]], [null], [null], ["portal", [4, 0]]],
      [["boxwall"], ["boxwall"], ["boxwall"], ["boxwall"]],
      [["portal", [2, 3]], [null], [null], ["portal", [2, 0]]],
      [["light", "up", "green"], [null], [null], ["sun"]],
    ],
    perfect:21,
    location: [5, 2],
    light: [[5, 0]],
    index: 17
  },
  18: {
    building: [
      [[null],[null],["boxwall"],[null],["portal", [5, 5]],["boxwall"],[null],],
      [[null],[null],["portal", [5, 1]],["mirror", "right-up"],["boxwall"],[null],[null],],
      [["boxwall"],["light", "right", "green"],[null],[null],["boxwall"],[null],["boxwall"],],
      [[null],[null],[null],["portal", [4, 4]],["boxwall"],["boxwall"],[null],],
      [[null],["boxwall"],["boxwall"],["boxwall"],["portal", [3, 3]],[null],["badboxwall"],],
      [["boxwall"],["portal", [1, 2]],[null],["boxwall"],[null],["portal", [0, 4]],["boxwall"],],
      [["sun"],[null],["mirror", "right-down"],[null],["badboxwall"],["boxwall"],["boxwall"],],
    ],
    perfect:15,
    location: [2, 2],
    light: [[2, 1]],
    index: 18
  },
  19: {
    building: [
      [[null], ["sun"], [null], [null], [null], [null], [null]],
      [[null],[null],["light", "right", "green"],[null],["portal", [1, 5]],["portal", [1, 4]],[null],],
      [[null],["mirror", "left-down"],["boxwall"],["mirror", "right-up"],[null],["portal", [5, 3]],[null],],
      [[null],["box"],["badboxwall"],[null],["badboxwall"],[null],["portal", [4, 1]],],
      [[null],["portal", [3, 6]],[null],["mirror", "right-down"],[null],["badboxwall"],[null],],
      [[null],[null],["boxwall"],["portal", [2, 5]],["boxwall"],[null],[null],],
    ],
    perfect:25,
    location: [0, 0],
    light: [[1, 2]],
    index: 19
  },
  20: {
    building: [
      [[null],[null],["badboxwall"],["portal", [6, 0]],["boxwall"],[null],["portal", [3, 3]],],
      [["portal", [3, 2]],["boxwall"],[null],["light", "down", "green"],[null],["mirror", "right-down"],[null],],
      [[null],["mirror", "left-down"],["badboxwall"],[null],["badbox"],[null],[null],],
      [[null],["boxwall"],["portal", [1, 0]],["portal", [0, 6]],[null],[null],[null],],
      [[null], [null], ["badboxwall"], [null], ["badboxwall"], [null], [null]],
      [["boxwall"],["boxwall"],["mirror", "left-up"],["sun"],["mirror", "right-up"],["boxwall"],["mirror", "right-down"],],
      [["portal", [0, 3]], [null], [null], [null], [null], [null], [null]],
    ],
    perfect:46,
    location: [3, 4],
    light: [[1, 3]],
    index: 20
  },
  21: {
    building: [
      [[null], [null], [null], ["boxwall"], [null], [null], [null]],
      [[null],["portal", [5, 5]],[null],["boxwall"],[null],["sun"],[null],],
      [[null], ["box"], [null], ["boxwall"], [null], ["box"], [null]],
      [[null], ["box"], [null], ["boxwall"], [null], ["box"], [null]],
      [[null], ["box"], [null], ["boxwall"], [null], ["box"], [null]],
      [[null],["light", "up", "green"],[null],["boxwall"],[null],["badportal"],[null],],
      [[null], [null], [null], ["boxwall"], [null], [null], [null]],
    ],
    perfect:24,
    location: [0, 1],
    light: [[5, 1]],
    index: 21
  },
  22: {
    building: [
      [[null], [null], [null], ["boxwall"], [null], [null], [null]],
      [["light", "down", "green"],[null],["badportal"],["boxwall"],["badportal"],[null],["sun"],],
      [[null], [null], ["boxwall"], ["boxwall"], ["boxwall"], [null], [null]],
      [[null],["boxwall"],["portal", [1, 2]],[null],["portal", [1, 4]],["boxwall"],[null],],
      [["mirror", "left-down"],["boxwall"],[null],[null],[null],["boxwall"],["mirror", "right-down"],],
      [[null], [null], ["boxwall"], [null], ["boxwall"], [null], [null]],
      [[null], [null], [null], ["badboxwall"], [null], [null], [null]],
    ],
    perfect:24,
    location: [3, 3],
    light: [[1, 0]],
    index: 22
  },
  23: {
    building: [
      [[null],["mirror", "left-up"],[null],[null],["mirror", "right-up"],[null],["portal", [2, 1]],],
      [[null], [null], ["boxwall"], [null], ["boxwall"], [null], ["sun"]],
      [["badportal"],["portal", [0, 6]],[null],[null],[null],[null],["light", "left", "green"],],
      [["boxwall"],["boxwall"],["boxwall"],["mirror", "left-down"],["boxwall"],["boxwall"],["boxwall"],],
      [[null],[null],[null],["badboxwall"],[null],[null],["portal", [2, 0]],],
      [[null],["mirror", "left-up"],[null],["boxwall"],["badbox"],[null],[null],],
      [["mirror", "left-down"],[null],[null],[null],[null],["light", "left", "green"],[null],],
    ],
    perfect:27,
    location: [6, 6],
    light: [[6, 5],[2, 6]],
    index: 23
  },
  24: {
    building: [
      [[null],[null],[null],[null],["boxwall"],[null],[null],[null],["portal", [4, 4]],],
      [[null],[null],[null],[null],["boxwall"],[null],["mirror", "right-down"],[null],[null],],
      [[null],["mirror", "left-up"],["mirror", "right-up"],[null],["boxwall"],[null],["mirror", "left-up"],[null],[null],],
      [[null],[null],["mirror", "left-down"],[null],["badboxwall"],[null],["boxwall"],[null],[null],],
      [["badboxwall"],["boxwall"],["boxwall"],["boxwall"],["badportal"],["badboxwall"],["boxwall"],["boxwall"],["badboxwall"],],
      [[null],[null],["mirror", "right-up"],[null],["boxwall"],[null],["box"],[null],[null],],
      [[null],[null],["mirror", "left-down"],[null],["boxwall"],[null],["mirror", "right-up"],[null],[null],],
      [[null],["light", "up", "green"],[null],[null],["boxwall"],[null],["box"],[null],[null],],
      [["portal", [4, 4]],[null],[null],[null],["boxwall"],["sun"],[null],[null],["portal", [4, 4]],],
    ],
    perfect:56,
    location: [8, 0],
    light: [[7, 1]],
    index: 24
  },
  25: {
    building: [
      [[null],["light", "down", "green"],[null],["light", "down", "red"],[null],],
      [[null], ["box"], [null], ["box"], [null]],
      [[null], ["redpass"], [null], ["redpass"], [null]],
      [[null],["mirror", "left-down"],[null],["mirror", "right-down"],[null],],
      [[null], [null], [null], [null], [null]],
      [[null], [null], ["sun"], [null], [null]],
    ],
    perfect:32,
    location: [0, 0],
    light: [[0, 1],[0, 3]],
    index: 25
  },
  26: {
    building: [
      [[null],["light", "down", "green"],[null],[null],[null],["light", "down", "red"],[null],],
      [["boxwall"],["greenpass"],[null],["mirror", "right-up"],[null],["redpass"],["boxwall"],],
      [[null], [null], [null], ["mirror", "left-down"], [null], [null], [null]],
      [["boxwall"],["redpass"],["boxwall"],["badboxwall"],["boxwall"],["greenpass"],["boxwall"],],
      [[null],[null],["mirror", "left-up"],[null],["mirror", "right-down"],[null],[null],],
      [["boxwall"],["greenpass"],["boxwall"],["boxwall"],["boxwall"],["redpass"],["boxwall"],],
      [[null],["mirror", "left-down"],[null],["sun"],[null],[null],[null],],
    ],
    perfect:21,
    location: [0, 3],
    light: [[0, 1],[0, 5]],
    index: 26
  },
  27: {
    building: [
      [[null], [null], [null], [null], [null], [null], [null]],
      [[null], [null], [null], [null], [null], [null], [null]],
      [[null],[null],[null],["mirror", "left-up"],[null],[null],["boxwall"],],
      [[null],[null],["light", "right", "green"],[null],["light", "left", "red"],["greenpass"],["sun"],],
      [[null],["mirror", "left-down"],["boxwall"],["mirror", "right-up"],["mirror", "right-down"],[null],["greenpass"],],
      [[null], ["badboxwall"], ["redpass"], [null], [null], [null], [null]],
      [[null], [null], [null], [null], [null], [null], [null]],
    ],
    perfect:94,
    location: [3, 3],
    light: [[3, 2],[3, 4]],
    index: 27
  },
  28: {
    building: [
      [["badportal"],[null],[null],["mirror", "left-up"],[null],["redpass"],["sun"],],
      [[null],[null],["mirror", "right-up"],["mirror", "left-down"],[null],[null],["boxwall"],],
      [["light", "right", "green"],[null],["mirror", "right-up"],[null],[null],[null],["badboxwall"],],
      [["boxwall"],["boxwall"],["boxwall"],["boxwall"],["boxwall"],["badboxwall"],[null],],
      [["light", "right", "red"],[null],[null],["redpass"],[null],[null],[null],],
      [[null],[null],[null],[null],["badboxwall"],["boxwall"],["badboxwall"],],
      [["portal", [0, 0]],["mirror", "left-down"],[null],["mirror", "right-down"],["badboxwall"],[null],[null],],
    ],
    perfect:59,
    location: [1, 0],
    light: [[4, 0], [2, 0]],
    index: 28
  },
  29: {
    building: [
      [[null], ["light", "down", "green"], [null]],
      [[null], ["box"], [null]],
      [[null], ["box"], [null]],
      [[null], ["light", "down", "red"], [null]],
      [[null], ["yellowpass"], [null]],
      [[null], [null], [null]],
      [[null], ["sun"], [null]],
    ],
    perfect:6,
    location: [0, 0],
      light: [[0, 1],[3, 1]],
      index: 29
  },
  30: {
    building: [
      [[null],["portal", [0, 3]],["boxwall"],["portal", [0, 1]],[null],[null],["boxwall"],],
      [[null],["light", "right", "green"],["mirror", "right-up"],["light", "down", "red"],[null],[null],[null],],
      [[null],[null],["mirror", "right-down"],[null],["mirror", "left-down"],[null],[null],],
      [[null], [null], ["yellowpass"], [null], [null], [null], ["boxwall"]],
      [[null], ["boxwall"], ["sun"], ["boxwall"], [null], [null], ["boxwall"]],
    ],
    perfect:39,
    location: [2, 3],
      light: [ [1, 1],[1, 3]],
      index: 30
  },
  31: {
    building: [
      [[null],[null],[null],[null],[null],[null],["light", "down", "green"],[null],],
      [[null], [null], [null], [null], [null], [null], ["box"], ["box"]],
      [[null],["light", "right", "green"],[null],["mirror", "right-up"],["mirror", "left-up"],["redpass"],[null],["badboxwall"],],
      [[null],["light", "right", "red"],["mirror", "left-down"],["mirror", "right-down"],[null],["yellowpass"],["badboxwall"],["badboxwall"],],
      [[null],[null],[null],[null],[null],["greenpass"],[null],["badboxwall"],],
      [[null], [null], [null], [null], [null], ["boxwall"], ["sun"], [null]],
      [[null], [null], [null], ["boxwall"], [null], [null], [null], [null]],
    ],
    perfect:58,
    location: [0, 0],
      light: [[2, 1],[3, 1],[0, 6]],
      index: 31
  },
  32: {
    building: [
      [["portal", [6, 3]],[null],[null],["boxwall"],["badportal"],["boxwall"],[null],["portal", [6, 5]],],
      [[null],[null],[null],["mirror", "left-up"],["mirror", "right-up"],["mirror", "right-up"],[null],[null],[null],],
      [["boxwall"],[null],[null],["portal", [2, 5]],[null],["portal", [2, 3]],[null],[null],[null],],
      [["sun"],["yellowpass"],[null],["mirror", "left-down"],[null],["mirror", "right-down"],[null],[null],[null],],
      [["boxwall"],[null],[null],["light", "up", "green"],["portal", [0, 4]],["light", "up", "red"],[null],[null],[null],],
      [[null], [null], [null], [null], [null], [null], [null], [null], [null]],
      [[null],[null],[null],["portal", [0, 0]],[null],["portal", [0, 7]],[null],[null],[null],],
    ],
    perfect:23,
    location: [3, 4],
      light: [[4, 3],[4, 5]],
      index: 32
  },
  33: {
    building: [
      [[null], [null], ["light", "down", "green"], ["light", "down", "red"]],
      [[null], [null], [null], [null]],
      [[null], ["store", null], [null], [null]],
      [[null], [null], [null], [null]],
      [[null], [null], [null], ["yellowpass"]],
      [[null], [null], [null], ["sun"]],],
      perfect:4,
    location: [0, 0],
    light: [[0, 2],[0, 3]],
    index: 33
  },
  34: {
    building: [
      [[null],[null],["light", "down", "green"],["light", "down", "red"],[null],],
      [[null], ["box"], [null], [null], [null]],
      [[null], ["store", null], [null], [null], [null]],
      [[null], [null], [null], [null], [null]],
      [[null], [null], ["yellowpass"], [null], [null]],
      [[null], [null], ["sun"], [null], [null]],
    ],
    perfect:14,
    location: [0, 0],
    light: [[0, 2],[0, 3]],
    index: 34
  },
  35: {
    string:`W1tbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbbnVsbF0sWyJsaWdodCIsImRvd24iLCJncmVlbiJdLFtudWxsXV0sW1sibGlnaHQiLCJyaWdodCIsImdyZWVuIl0sWyJncmVlbnBhc3MiXSxbbnVsbF0sWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFsiYmFkYm94d2FsbCJdLFtudWxsXSxbImJveCJdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJhZGJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbInN1biJdLFsiYm94d2FsbCJdXSxbW251bGxdLFtudWxsXSxbImxvY2F0aW9uIl0sWyJib3h3YWxsIl0sW251bGxdLFsibGlnaHQiLCJyaWdodCIsImdyZWVuIl0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXV0sW1sicG9ydGFsIixbNCw4XV0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJwb3J0YWwiLFs0LDBdXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFsic3RvcmUiLG51bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbbnVsbF1dLFtbImxpZ2h0IiwicmlnaHQiLCJyZWQiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbInJlZHBhc3MiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibWlycm9yIiwicmlnaHQtZG93biJdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImxpZ2h0IiwidXAiLCJyZWQiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dXQ==`,
    perfect:59,
    index: 35
  },
  36: {
    string:`W1tbImxpZ2h0IiwiZG93biIsImdyZWVuIl0sW251bGxdLFsibGlnaHQiLCJsZWZ0IiwicmVkIl0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sW251bGxdLFsicG9ydGFsIixbMywwXV0sW251bGxdXSxbW251bGxdLFtudWxsXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sW251bGxdLFsic3RvcmUiLG51bGxdLFsieWVsbG93cGFzcyJdLFsic3VuIl1dLFtbIm1pcnJvciIsImxlZnQtZG93biJdLFsibWlycm9yIiwibGVmdC11cCJdLFsieWVsbG93cGFzcyJdLFsibWlycm9yIiwicmlnaHQtZG93biJdLFtudWxsXSxbbnVsbF0sWyJncmVlbnBhc3MiXV0sW1sicG9ydGFsIixbMCw1XV0sW251bGxdLFsibG9jYXRpb24iXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sWyJiYWRib3h3YWxsIl0sWyJib3h3YWxsIl0sW251bGxdXSxbWyJzdW4iXSxbInJlZHBhc3MiXSxbImJhZGJveHdhbGwiXSxbImJhZGJveHdhbGwiXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1sibWlycm9yIiwibGVmdC11cCJdLFtudWxsXSxbIm1pcnJvciIsImxlZnQtZG93biJdLFsieWVsbG93cGFzcyJdLFtudWxsXSxbIm1pcnJvciIsInJpZ2h0LWRvd24iXSxbbnVsbF1dLFtbIm1pcnJvciIsImxlZnQtZG93biJdLFtudWxsXSxbbnVsbF0sWyJtaXJyb3IiLCJsZWZ0LWRvd24iXSxbbnVsbF0sW251bGxdLFsiYm94d2FsbCJdXV0=`,
    perfect:44,
    index: 36
    
  }, 
  37: {
    string:`W1tbImxvY2F0aW9uIl0sW251bGxdLFsibGlnaHQiLCJ1cCIsImdyZWVuIl0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsicm90YXRlMTgwIl0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJhZGJveHdhbGwiXSxbInN1biJdLFsiYm94d2FsbCJdXSxbW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbImxpZ2h0IiwicmlnaHQiLCJncmVlbiJdLFsicm90YXRlMTgwIl0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sW251bGxdXSxbW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dXQ==`,
    perfect:24,
    index: 37
  },
  38: {
    string:`W1tbbnVsbF0sWyJwb3J0YWwiLFszLDJdXSxbbnVsbF0sWyJsaWdodCIsImRvd24iLCJncmVlbiJdLFtudWxsXV0sW1tudWxsXSxbInJvdGF0ZTE4MCJdLFsiYm94Il0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sW251bGxdXSxbW251bGxdLFsiYm94Il0sW251bGxdLFsibWlycm9yIiwibGVmdC11cCJdLFtudWxsXV0sW1sic3VuIl0sW251bGxdLFsicG9ydGFsIixbMCwxXV0sW251bGxdLFsibG9jYXRpb24iXV1d`,
    perfect:36,
    index: 38
  },
  39: {
    string:`W1tbImxvY2F0aW9uIl0sWyJyb3RhdGUxODAiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFsibWlycm9yIiwibGVmdC11cCJdLFtudWxsXSxbImxpZ2h0IiwidXAiLCJncmVlbiJdLFsibGlnaHQiLCJ1cCIsInJlZCJdLFtudWxsXSxbbnVsbF1dLFtbInllbGxvd3Bhc3MiXSxbbnVsbF0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sWyJyb3RhdGUxODAiXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1sic3VuIl0sWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbInJvdGF0ZTE4MCJdLFtudWxsXSxbbnVsbF1dLFtbInllbGxvd3Bhc3MiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV1d`,
    perfect:78,
    index: 39
  },
  40: {
    string:`W1tbInN1biJdLFsiYmFkYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJtaXJyb3IiLCJyaWdodC1kb3duIl1dLFtbImJveHdhbGwiXSxbImxpZ2h0IiwiZG93biIsImdyZWVuIl0sWyJib3h3YWxsIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sWyJsb2NhdGlvbiJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJyb3RhdGU5MCJdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbbnVsbF0sWyJyb3RhdGU5MCJdLFsicm90YXRlMTgwIl0sWyJyb3RhdGUyNzAiXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsicm90YXRlMjcwIl0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbWyJib3h3YWxsIl0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbIm1pcnJvciIsImxlZnQtZG93biJdXV0=`,
    perfect:44,
    index: 40
  },
  41:{
    string:`W1tbImxvY2F0aW9uIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsieWVsbG93cGFzcyJdLFsic3VuIl1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbInllbGxvd3Bhc3MiXV0sW1tudWxsXSxbbnVsbF0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sWyJyb3RhdGU5MCJdLFsibWlycm9yIiwibGVmdC11cCJdLFtudWxsXSxbbnVsbF1dLFtbImxpZ2h0IiwicmlnaHQiLCJncmVlbiJdLFtudWxsXSxbInJvdGF0ZTkwIl0sWyJiYWRwb3J0YWwiXSxbInJvdGF0ZTI3MCJdLFsibGlnaHQiLCJsZWZ0IiwicmVkIl0sWyJwb3J0YWwiLFszLDNdXV0sW1tudWxsXSxbbnVsbF0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sWyJyb3RhdGUyNzAiXSxbIm1pcnJvciIsImxlZnQtdXAiXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFsicm90YXRlMTgwIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJyb3RhdGUxODAiXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dXQ==`,
    perfect: 45,
    index: 41
  },
  42: {
    string:`W1tbIm1pcnJvciIsImxlZnQtdXAiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJhZGJveHdhbGwiXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sW251bGxdXSxbW251bGxdLFsibWlycm9yIiwibGVmdC11cCJdLFtudWxsXSxbbnVsbF0sWyJzdG9yZSIsbnVsbF0sW251bGxdLFtudWxsXV0sW1siYmFkYm94Il0sWyJtaXJyb3IiLCJsZWZ0LWRvd24iXSxbImxvY2F0aW9uIl0sW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbIm1pcnJvciIsImxlZnQtZG93biJdLFtudWxsXV0sW1sibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImxpZ2h0IiwiZG93biIsInJlZCJdXSxbWyJzdW4iXSxbInBvcnRhbCIsWzYsNl1dLFsiYmFkYm94d2FsbCJdLFsiYmFkYm94d2FsbCJdLFsibGlnaHQiLCJ1cCIsImdyZWVuIl0sWyJib3h3YWxsIl0sWyJyb3RhdGUxODAiXV0sW1sieWVsbG93cGFzcyJdLFsiYmFkYm94d2FsbCJdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sWyJyb3RhdGUyNzAiXSxbbnVsbF1dLFtbbnVsbF0sWyJtaXJyb3IiLCJsZWZ0LWRvd24iXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImdyZWVucGFzcyJdLFsicG9ydGFsIixbNCwxXV1dXQ==`,
    perfect:61,
    index: 42
  },
  43:{
    string:"W1tbImxvY2F0aW9uIl0sW251bGxdLFsibGlnaHQiLCJsZWZ0IiwicmVkIl0sW251bGxdLFsiYmFkYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJveHdhbGwiXSxbbnVsbF0sWyJyb3RhdGUyNzAiXSxbInJlZmxlY3R2ZWwiXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsicmVmbGVjdGhvciJdLFtudWxsXSxbImJveHdhbGwiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJib3h3YWxsIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbWyJib3h3YWxsIl0sWyJib3h3YWxsIl0sWyJiYWRib3h3YWxsIl0sWyJib3h3YWxsIl0sWyJib3h3YWxsIl0sWyJib3h3YWxsIl0sWyJzdW4iXSxbImJveHdhbGwiXSxbImJveHdhbGwiXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFsicm90YXRlOTAiXSxbInJlZmxlY3R2ZWwiXSxbIm1pcnJvciIsImxlZnQtdXAiXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sWyJyZWZsZWN0aG9yIl0sWyJyb3RhdGU5MCJdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXV0=",
    perfect:50,
    index: 43
  },
  44:{
  string:'W1tbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbImxpZ2h0IiwiZG93biIsImdyZWVuIl0sWyJtaXJyb3IiLCJyaWdodC11cCJdLFsicmVmbGVjdGhvciJdLFtudWxsXSxbInJlZmxlY3R2ZWwiXSxbIm1pcnJvciIsImxlZnQtdXAiXSxbImxpZ2h0IiwiZG93biIsInJlZCJdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsicmVmbGVjdHZlbCJdLFtudWxsXSxbInJvdGF0ZTI3MCJdLFsibG9jYXRpb24iXSxbInJvdGF0ZTkwIl0sW251bGxdLFsicmVmbGVjdGhvciJdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbIm1pcnJvciIsInJpZ2h0LWRvd24iXSxbbnVsbF0sWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFsibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJ5ZWxsb3dwYXNzIl0sWyJzdW4iXSxbInllbGxvd3Bhc3MiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dXQ==',
  perfect:48,
  index: 44
  },
  45:{
    string:'W1tbIm1pcnJvciIsImxlZnQtdXAiXSxbImJhZGJveCJdLFsiYmFkcG9ydGFsIl0sW251bGxdLFsibGlnaHQiLCJkb3duIiwicmVkIl0sWyJwb3J0YWwiLFswLDJdXSxbbnVsbF0sWyJib3h3YWxsIl0sWyJib3h3YWxsIl0sWyJwb3J0YWwiLFsxLDhdXSxbIm1pcnJvciIsInJpZ2h0LXVwIl1dLFtbIm1pcnJvciIsImxlZnQtZG93biJdLFtudWxsXSxbImJhZGJveHdhbGwiXSxbbnVsbF0sWyJtaXJyb3IiLCJyaWdodC11cCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFsicG9ydGFsIixbMCw5XV0sWyJib3h3YWxsIl0sW251bGxdXSxbW251bGxdLFsibWlycm9yIiwibGVmdC11cCJdLFtudWxsXSxbInJlZHBhc3MiXSxbInJlZHBhc3MiXSxbbnVsbF0sW251bGxdLFsiYmFkYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFsibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFsicmVkcGFzcyJdLFsicG9ydGFsIixbNiwzXV0sWyJyZWRwYXNzIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJtaXJyb3IiLCJyaWdodC1kb3duIl0sW251bGxdXSxbW251bGxdLFtudWxsXSxbbnVsbF0sWyJncmVlbnBhc3MiXSxbImxpZ2h0IiwibGVmdCIsImdyZWVuIl0sWyJtaXJyb3IiLCJyaWdodC11cCJdLFtudWxsXSxbInJlZmxlY3Rob3IiXSxbIm1pcnJvciIsInJpZ2h0LWRvd24iXSxbInJvdGF0ZTE4MCJdLFtudWxsXV0sW1sieWVsbG93cGFzcyJdLFsibG9jYXRpb24iXSxbIm1pcnJvciIsInJpZ2h0LWRvd24iXSxbInJvdGF0ZTE4MCJdLFtudWxsXSxbImdyZWVucGFzcyJdLFsibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFsibWlycm9yIiwibGVmdC1kb3duIl0sWyJyb3RhdGUxODAiXSxbbnVsbF1dLFtbInN1biJdLFsieWVsbG93cGFzcyJdLFsiYmFkYm94d2FsbCJdLFsiYmFkcG9ydGFsIl0sWyJiYWRib3h3YWxsIl0sWyJtaXJyb3IiLCJsZWZ0LWRvd24iXSxbInN0b3JlIixudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbIm1pcnJvciIsInJpZ2h0LWRvd24iXV1d',
    perfect:126,
    index: '45v2'
  },
  46:{
    string:"W1tbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImxpZ2h0IiwicmlnaHQiLCJncmVlbiJdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdXSxbWyJib3h3YWxsIl0sW251bGxdLFtudWxsXSxbImxvY2F0aW9uIl0sWyJib3h3YWxsIl1dLFtbbnVsbF0sW251bGxdLFsicmVmbGVjdHZlbCJdLFtudWxsXSxbbnVsbF1dLFtbImJveHdhbGwiXSxbImJveHdhbGwiXSxbbnVsbF0sWyJib3h3YWxsIl0sW251bGxdXSxbW251bGxdLFtudWxsXSxbInJvdGF0ZTI3MCJdLFtudWxsXSxbbnVsbF1dLFtbImJveHdhbGwiXSxbImJveHdhbGwiXSxbbnVsbF0sW251bGxdLFsiYm94d2FsbCJdXSxbWyJib3h3YWxsIl0sWyJib3h3YWxsIl0sWyJzdW4iXSxbbnVsbF0sWyJib3h3YWxsIl1dXQ==",
    perfect:16,
    index: 46
  },
  47:{
    string:'W1tbbnVsbF0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sWyJtaXJyb3IiLCJyaWdodC11cCJdLFsiYmFkYm94d2FsbCJdLFsibG9jYXRpb24iXSxbbnVsbF0sWyJsaWdodCIsInJpZ2h0IiwicmVkIl0sWyJyb3RhdGUxODAiXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbbnVsbF1dLFtbbnVsbF0sWyJyb3RhdGU5MCJdLFsiYm94d2FsbCJdLFtudWxsXSxbInJvdGF0ZTkwIl0sWyJyZWZsZWN0dmVsIl0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbInJlZmxlY3R2ZWwiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJhZGJveHdhbGwiXSxbImxpZ2h0IiwicmlnaHQiLCJncmVlbiJdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sWyJzdG9yZSIsbnVsbF0sW251bGxdLFsicmVmbGVjdHZlbCJdLFsicm90YXRlMjcwIl0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sWyJib3h3YWxsIl0sW251bGxdLFtudWxsXSxbImJveHdhbGwiXSxbbnVsbF0sWyJib3h3YWxsIl1dLFtbbnVsbF0sW251bGxdLFsiYmFkYm94d2FsbCJdLFsicmVkcGFzcyJdLFtudWxsXSxbbnVsbF0sWyJ5ZWxsb3dwYXNzIl0sWyJzdW4iXV1d',
    perfect:85,
    index:47
},
  49:{
    string:'W1tbbnVsbF0sW251bGxdLFtudWxsXSxbImJveHdhbGwiXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbImJveHdhbGwiXSxbbnVsbF1dLFtbImxpZ2h0IiwicmlnaHQiLCJncmVlbiJdLFtudWxsXSxbbnVsbF0sWyJib3h3YWxsIl0sW251bGxdXSxbW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbImJvbWIiLCJncmVlbiJdLFsiYm94d2FsbCJdLFtudWxsXV0sW1tudWxsXSxbImxvY2F0aW9uIl0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFsiYm94d2FsbCJdLFsic3VuIl1dXQ==',
    perfect:29,
    index:49
  },
  50:{
string:`W1tbbnVsbF0sW251bGxdLFsibGlnaHQiLCJkb3duIiwiZ3JlZW4iXSxbImxpZ2h0IiwiZG93biIsImdyZWVuIl0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbWyJib3h3YWxsIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1sibWlycm9yIiwibGVmdC11cCJdLFsibG9jYXRpb24iXSxbbnVsbF0sWyJyb3RhdGUxODAiXSxbIm1pcnJvciIsImxlZnQtdXAiXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sWyJib3h3YWxsIl0sWyJib21iIiwiZ3JlZW4iXSxbImJveHdhbGwiXSxbbnVsbF1dLFtbIm1pcnJvciIsImxlZnQtZG93biJdLFtudWxsXSxbbnVsbF0sWyJzdW4iXSxbbnVsbF0sW251bGxdXV0=`,
perfect:16,
    index:50
  },
  51:{
    string:`W1tbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1siYm94d2FsbCJdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sWyJib21iIiwiZ3JlZW4iXSxbbnVsbF0sW251bGxdLFtudWxsXSxbInN1biJdXSxbWyJsb2NhdGlvbiJdLFtudWxsXSxbImxpZ2h0IiwiZG93biIsImdyZWVuIl0sW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbbnVsbF0sWyJsaWdodCIsImRvd24iLCJncmVlbiJdXSxbW251bGxdLFsibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFsibWlycm9yIiwicmlnaHQtZG93biJdLFtudWxsXSxbbnVsbF0sWyJsaWdodCIsInVwIiwiZ3JlZW4iXV0sW1tudWxsXSxbImJveHdhbGwiXSxbIm1pcnJvciIsImxlZnQtdXAiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImxpZ2h0IiwiZG93biIsImdyZWVuIl1dLFtbbnVsbF0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibGlnaHQiLCJ1cCIsImdyZWVuIl1dLFtbImJveHdhbGwiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibGlnaHQiLCJkb3duIiwiZ3JlZW4iXV1d`,
    perfect:0,
        index:51
      },
  1001: {
    string:`W1tbImJveCJdLFsiYm94Il0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJveCJdLFsiYm94Il1dLFtbImJveCJdLFtudWxsXSxbbnVsbF0sWyJsb2NhdGlvbiJdLFsibGlnaHQiLCJkb3duIiwiZ3JlZW4iXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJveCJdXSxbW251bGxdLFtudWxsXSxbImJveCJdLFsiYm94Il0sW251bGxdLFsiYm94Il0sWyJib3giXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsiYm94Il0sWyJib3giXSxbbnVsbF0sWyJib3giXSxbImJveCJdLFtudWxsXSxbbnVsbF1dLFtbImJveCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFsic3VuIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJib3giXV0sW1siYm94Il0sWyJib3giXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsiYm94Il0sWyJib3giXV1d`,
    perfect:25,
    index: 1001
  },
  'custom': {
    string:tmp.store,
    perfect:NaN,
    index:-1
  },
  'lobby': {
    string:'W1tbImJveHdhbGwiXSxbInJvdGF0ZTE4MCJdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbInJlZmxlY3R2ZWwiXSxbImJhZGJveHdhbGwiXSxbInBvcnRhbCIsWzAsMF1dLFsiYmFkYm94d2FsbCJdLFsicmVmbGVjdGhvciJdLFsibWlycm9yIiwibGVmdC11cCJdLFsicm90YXRlMTgwIl0sWyJib3h3YWxsIl1dLFtbIm1pcnJvciIsImxlZnQtdXAiXSxbImJveHdhbGwiXSxbImJhZGJveHdhbGwiXSxbInJvdGF0ZTE4MCJdLFsiYmFkYm94d2FsbCJdLFtudWxsXSxbImJhZGJveHdhbGwiXSxbInJvdGF0ZTE4MCJdLFsiYmFkYm94d2FsbCJdLFsiYm94d2FsbCJdLFsibGlnaHQiLCJkb3duIiwicmVkIl1dLFtbImxpZ2h0IiwidXAiLCJncmVlbiJdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbbnVsbF0sWyJib3h3YWxsIl0sWyJib3h3YWxsIl0sWyJiYWRib3h3YWxsIl0sWyJsaWdodCIsImRvd24iLCJyZWQiXSxbImJveHdhbGwiXV0sW1sibWlycm9yIiwibGVmdC1kb3duIl0sWyJsaWdodCIsImxlZnQiLCJncmVlbiJdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJiYWRib3h3YWxsIl0sWyJ5ZWxsb3dwYXNzIl0sWyJzdG9yZSIsbnVsbF1dLFtbbnVsbF0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sWyJsb2NhdGlvbiJdLFtudWxsXSxbbnVsbF0sWyJiYWRib3h3YWxsIl0sWyJtaXJyb3IiLCJyaWdodC1kb3duIl0sW251bGxdXSxbWyJwb3J0YWwiLFswLDBdXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJzdW4iXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJwb3J0YWwiLFswLDBdXV0sW1tudWxsXSxbbnVsbF0sWyJib3h3YWxsIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJveHdhbGwiXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sW251bGxdXSxbWyJtaXJyb3IiLCJsZWZ0LXVwIl0sWyJsaWdodCIsImxlZnQiLCJncmVlbiJdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJib3h3YWxsIl0sWyJ5ZWxsb3dwYXNzIl0sWyJzdG9yZSIsbnVsbF1dLFtbImxpZ2h0IiwiZG93biIsImdyZWVuIl0sWyJtaXJyb3IiLCJyaWdodC1kb3duIl0sWyJib3h3YWxsIl0sWyJib3h3YWxsIl0sWyJib3h3YWxsIl0sW251bGxdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdLFsibGlnaHQiLCJ1cCIsInJlZCJdLFsiYm94d2FsbCJdXSxbWyJtaXJyb3IiLCJsZWZ0LWRvd24iXSxbImJveHdhbGwiXSxbInBvcnRhbCIsWzAsMF1dLFsicG9ydGFsIixbMCwwXV0sWyJib3h3YWxsIl0sW251bGxdLFsiYm94d2FsbCJdLFsiYmFkcG9ydGFsIl0sWyJiYWRwb3J0YWwiXSxbImJveHdhbGwiXSxbImxpZ2h0IiwidXAiLCJyZWQiXV0sW1siYm94d2FsbCJdLFsicG9ydGFsIixbMCwwXV0sWyJwb3J0YWwiLFswLDBdXSxbInBvcnRhbCIsWzAsMF1dLFsiYm94d2FsbCJdLFsicG9ydGFsIixbMCwwXV0sWyJib3h3YWxsIl0sWyJiYWRwb3J0YWwiXSxbImJhZHBvcnRhbCJdLFsiYmFkcG9ydGFsIl0sWyJib3h3YWxsIl1dXQ==',
    perfect:NaN,
    index:2001
  }, /*
  'ch1': {

    building: [
      [[null], [null], [null], [null], [null], ["boxwall"], [null], [null], [null], [null], [null], [null], ["light",'down',"green"], [null], [null]],
      [[null], [null], [null], [null], [null], ["boxwall"], [null], ["mirror","right-down"], [null], [null], [null], [null], [null], [null], [null]],
      [[null], [null], [null], ["boxwall"], ["level",12], ["badboxwall"], [null], ["box"], ["badbox"], [null], [null], ["mirror","left-up"], [null], [null], [null]],
      [[null], [null], [null], ["boxwall"], ["boxwall"], ["badboxwall"], ["level",6], [null], ["boxwall"], ["boxwall"], ["boxwall"], ["level",5], [null], [null], [null]],
      [[null], [null], [null], [null], [null], [null], ["boxwall"], ["boxwall"], [null], [null], [null], ["mirror","right-down"], [null], [null], [null]],
      [[null], [null], [null], [null], [null], [null], [null], [null], [null], ["box"], [null], ["boxwall"], ["boxwall"], [null], [null]],
      [[null], [null], [null], [null], ["boxwall"], [null], [null], [null], ["boxwall"], [null], ["box"], ["level",4], ["boxwall"], [null], [null]],
      [[null], [null], [null], [null], ["boxwall"], [null], ["level",2], ["boxwall"], ["level",3], [null], [null], ["boxwall"], [null], [null], [null]],
      [[null], [null], [null], [null], ["boxwall"], [null], ["box"], [null], ["boxwall"], [null], ["boxwall"], [null], [null], [null], [null]],
      [[null], [null], [null], [null], [null], ["boxwall"], [null], [null], ["boxwall"], [null], [null], [null], [null], [null], [null]],
      [[null], [null], [null], [null], [null], ["boxwall"], ["level",1], ["boxwall"], [null], [null], [null], [null], [null], [null], [null]],
      [[null], [null], [null], [null], [null], ["boxwall"], [null], ["boxwall"], [null], [null], [null], [null], [null], [null], [null]],
      [[null], [null], [null], [null], [null], ["boxwall"], [null], ["boxwall"], [null], [null], [null], [null], [null], [null], [null]],
    ],
    location: [12, 6],
      light: [[0,12]],


  }
  */
}
