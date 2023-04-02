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
    stringcompressed: `NohECMHsA8HcEMA2jQF0A0wIwctns4kUMsoi9TDcSDyb9gA7AV2SsQEsBzACwBdQ6UABNIsJkNDcATgFM5k0q3aksXPoOEyeAqbIVKCBxQAd4AZwuMViKgE85yceas22duvBH1i79nQw/nZqtsoe4QHMEV4+OH5UvpSBFLRYFixGZPGUoTHRUaCIkADG8PyckFnUCZhhBBp62rpa0vKKwYk5aWFqoKaQMvxIQsAALOgAHKiRngVz9ViOzrCu1rMbdfn9g8MomBMADDN5UYuLoBb8g3JC5/n3hQC2nDIyg1I6mgC0LKadfUarS+TVA8hEnS2Z224LWkPmmwRpwW2xebw+wkQcgAZvxvmIJPDHijnq93jJPi18eIsr1MAioSSmRwWlI/p85BDEcSNjMgA=`,
    string:`W1tbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbbnVsbF0sWyJsaWdodCIsImRvd24iLCJncmVlbiJdLFtudWxsXV0sW1sibGlnaHQiLCJyaWdodCIsImdyZWVuIl0sWyJncmVlbnBhc3MiXSxbbnVsbF0sWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFsiYmFkYm94d2FsbCJdLFtudWxsXSxbImJveCJdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJhZGJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbInN1biJdLFsiYm94d2FsbCJdXSxbW251bGxdLFtudWxsXSxbImxvY2F0aW9uIl0sWyJib3h3YWxsIl0sW251bGxdLFsibGlnaHQiLCJyaWdodCIsImdyZWVuIl0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXV0sW1sicG9ydGFsIixbNCw4XV0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJwb3J0YWwiLFs0LDBdXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFsic3RvcmUiLG51bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbbnVsbF1dLFtbImxpZ2h0IiwicmlnaHQiLCJyZWQiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbInJlZHBhc3MiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibWlycm9yIiwicmlnaHQtZG93biJdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImxpZ2h0IiwidXAiLCJyZWQiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dXQ==`,
    perfect:59,
    index: 35
  },
  36: {
    string:`NohEBsEsHMAsBdQBpQBMD2B3Ads00AnAUyNwF0lhsBXccC4CGBPcIgM0RWNVAdAC2kAgXQFWHeAFpqABz6UadfrLHwAhuGTAAzEgAMZBkvoMqteoov8hIsXgLNpcheeWVQAZ3hiiyE/wAnkR0WLLqnp6uXtTkZoLCouIobJxSGDjRtkkSaS5BIeBhEVE2ifbcTulY5FbubpaMhCTY4ZF88aoEGlqU+kgArEZ1jRDoAMbq8JDotYzZFaCOcM7y/ABG6qjr6AAemJpaG3sHdK4B8Z6x0TxtpR6b2yeH0Y87+y/G1iNfyvELyQgkhkax+HgBuWkGTmoGCoUwd3O33m5UBywQ1Uyv1MlBRdkBqShNSR9QC4NRkMxczJDWOHzORjIQA==`,
    perfect:44,
    index: 36
    
  }, 
  37: {
    string:`NohEBsHsGMEMBcCWkB2oC6AaYKCu5wtgJEBzAC3lE1FwAdrRSAnAU1bSLwK/0KJx9ePbN0KihEngLHDxxZpHgJWARgAcABgxT5smZMEijew/uzEARpAAeAd1gEdV2w6dFQl2ABNr9x+DOoADOuJzYnq4BGAbGsrpyibHyJBRUNMxklIws7OEKSioa2h4AtojMisyM4KwAZvAAtPTO5iDxJokJCcldnd2d6OhAA==`,
    perfect:24,
    index: 37
  },
  38: {
    string:`Noh2FcBtIXQGmAIgA4HsBOAXAhpRCBmOAJhnmAmnMUgEsBzAC030QBNUB3UV+9AU349ylWOQpRYCROlQ5M/AIwAOAAyJqAI1QAPDdIC2tdLPStI/AGaYAtOGT6JVcaK27Hrw8dPmrt+x6SZAhIAM7gwgieSGhYuPjAqnCKwU5SSJCoAMbYmLSowmRAA=`,
    perfect:36,
    index: 38
  },
  39: {
    string:`NohEBsHsGMEMBcCWkB2oC6AaYoBOl4EBTARgA4AGDbFAV3HC2DoaZcZvo+a/SZ9bZQAW0S58uUJghEAZvAC0tAA7UB3CIgDmAC3hTQKg1txEiaJpt37pR6aYAma9m179QATyINIAd2WwAM6BzrxCouKQktLgcopGlviE8KSUoYLqrqzugbQWQl4+/kEhWRoREga42npKqokExORUZa3uhVDFwencLpwZImKV9jXx9f29btiZE62z8zOZfEA=`,
    perfect:78,
    index: 39
  },
  40: {
    string:`NohEGcFcDtQXQDTFAIwIYBMUHsAeB3NAGyPiWkhMWAqvMqOtsfruQFsBLAJ2+29AJQ3TgHMAFgBcAtBmz5YcashwFipaqCJipg0HIV7R3AKYnFSVHkIkyNBkwesW9tsyVJXL95aLYAxmiSnNgWXo5uTuHOHiA+0QnxwtiSQSYAnAAMdvG5Dsp5kWzJqZIZ2Zp8pSYAjAAcFZZVaQBMAOyNifmehd5RSc1l7Z29EYwF/ZNFfdNjc8pWaraaXLz8ekQmAGYykAAOOVMzx3OWq3wCQps7svKKSkA===`,
    perfect:44,
    index: 40
  },
  41:{
    string:`NohEBsHsGMEMBcCWkB2oC6AaYKCu5wsd9Ds8CjzThQBPAUwMgHcAHWAZw421A9zToixCmRKVxY0SOpUidRlDaduQ7DInTQAW0QAnPZD2hMEegDN4AWlyseNQ/AT0AnAAZ7O/YeOnwF61t7OSlCYQhEAHMAC3gTUD0o2PjIvXp6QVD5R2d3TwAjWAATViMncE8c+HoAJgB2D3lwJLi/APi0os9SvXKTYABmTAGhYRCNXl0DI3j/Sxs7bMgnavrGye8ZtvmgzVlxMckHZecARgAOdYnr8YST6ouruUPpcbej99eD9CA===`,
    perfect: 45,
    index: 41
  },
  42: {
    string:`NohEFsEsCdoe2qANKANgUwGYBcC0BXAB1AF0lgA7fVVMy628qmu0AIwEMATNuADwDuHGqXIQY8RCmiQA5gAs8RUfRZ1VjYONgJkaLEuJ1mmk6wDO2BOmRmmDYw/XtuvPiu2S9GHLi5wBCg9UOABjDmxIOCDHFjEoHSlQGQVDDwSvFB88f0CVM2cM3SyDPwCY+ziNWNMHSs00OUU9XKDpdC5SZ3N8Cq1CBGxhZGAANiRRklZOHn4hEWnXOeFUYKbsPWUUWWh0dD72ZYWxeCHsdABGAA4ABi7yLQBPdBoAwg5zcw8Zt3nV6aO/3qNVYpwi6AATAB2O4g9R2LRFJLZMp5EHAjFaHZ7CjvT4eAbQIarcgAFiQFymUyAA`,
    perfect:61,
    index: 42
  },
  43:{
    string:"NohEBsHsGMEMBcCWkB2oC6AaYKCu5wtgJEBzAC3lEwgFMAzKmgJ1oBMNs8CjQAjWGz6QAHgHdYBTjnyEusotzkyeRFcqWKF8ntn6iJUrbuLNI8BLQBMAdgAM00K3rha0eADda4aZrWadZScGV3dySGZfbWJhcUkfYw1ogPV0f2SMkxT9OKNAxIL8tRzDBL1Y0scBIQN4qtq8mIayptyW0ABnXDReCrre5ox0rMykkfGxyYLhoLMLeFoATgdeZ1DPb0cAW0RmM0iaV0YAWlwAB23d/eonMkpTi9WQt3hwyNXzS2WoibTsVPygIBwJSoNGfxAYN+QKhUxhCjSQA===",
    perfect:50,
    index: 43
  },
  44:{
  string:'Noh2FcBtIXQGmBa9FVgp7XI2ln89cdssCVTCSAiSASwHMALAF2rmoBMB7Ad1HbUGAJwCmogSmoBbOsOHdhg4Y1YBacAAdqUsQDNIogMYsmincSzV9hkwDdRkC8BlyFSjob0sN2qfWY2Dh5+ZVFOZwJLGAooygRrUQNjFgcnKisFFgBDFlEAJgB2AAZnWm4jXLpuSQSs3NEATlKM3STbU3NW6NiieP7XeXMOFUC1ENqBgE9HSD5NbIBnRci+wfdBLx8J1ZI48gR+/b646hnoeaWVqUXwSbPZy+XdshO35BigA',
  perfect:48,
  index: 44
  },
  45:{
    string:'NohEFsEsCdoe2qANKANgUwGYBcC0BXAB1AF0lhQAjAQwBNK4APU8quwhba1F4AO3ypUZCqkgBzABbZkoWnADufWdHS1eoDtC49yABiQAmEiIFCRVJgu48LDRtaEatO5MACMSABwnWUWAgqEtIExL5g/vCIKBg4uPJKvGbCrDT0VjZJgikUkYEo0MF4RFnm5Mmm2RYu3G4GAJzhlg6ZleYi/FV+MFGyscVh5V0UqrSE1ADOExqj41OlORWpdPaOtkNlnZsVHUu5PfloWHgJym05oLOT09WcteQAbEgAzE1X8+efGxd50ZdF8UUZ2+4S2i2Ge1A4lU6D4cxurDEUhkMWOsmh6FhGl+QWRoQWFlUmAwAGNsJJAhYcQUAacZnAuNh0O4vHoCR1QABPdBCRTwjSoOAk6jYSBwYH7AJ/Qp4umEhki5msgmsDGw/lUg5/fqAxJfSW9VFxOWseCMpVsz4cib4CVcnmChQa5bpFpOOzsO7rChpVatbpSvrHXV2ibYBDoZB7aMQ4YQLW4kJykxAA==',
    perfect:126,
    index: '45v2'
  },
  46:{
    string:"NohEDcHsEsBNQLoBpgRvZqA20DmALAF1CVACc8iTRcyBTOgO0RTThdSnYU0/Q8YBXLFkxCRmUFkgBjAIaFokZpK4Ze40Sk2T6AMyx0ZhcHSwDhW4Dt6gARpAAeAdzkiO9p6/djLkhy5u5r4SGn7a4ahkkIQKdABMAOwADBYSEaEofNysamlWOrn8PFlsGEU5qADOgioZVmWIPEA=",
    perfect:16,
    index: 46
  },
  47:{
    string:'Noh2FcBtIXQGmBa9gCIBuB7AlgE1SkrAkYVMYuWcipcgqgLbYBOLmLqcqL2A5gAsALgFpwABwIMARgENc0zAA8A7rOhS0kTAGNZQ7JlCbSDSP2FceFoVZYBTfCh6Yh++wEYAHAAYTVWlM6CgwcJxIqCPpg52Y2DjsbMUlqWEDItHY3IXsATj9nLDx/aJdsvIKGBwAzSHsdIXR7SBKKUnTSmrqGppbU/qiQuQVlNQ1nc0Fbbl4pqz4He2N+jraM1ABnIQ57LiCgnnta+sbmzTL3ACYAdkqYwZhVgbRFVXU+h8+X0ffW51exn0nl9UMMAb9nA5cOJZBsNn8QQBPZraFQwuHnDbgZaPIA==',
    perfect:85,
    index:47
},
  49:{
    string:'Noh2FcBtIXQGmBa9FVggRAIwPYA8B3AQ2gxSVhVWQQvLRW32NPuSo0gEsBzACwAuGOBgBOvQcIw9RAU1mgytBsprAmhEpCXVKCXYwC2XUaJyip4/gIC04AA46mhrFJnzFjXJtaq9YFXVIHABjIgEuHE8/L2YtHToqOhiU9W8WbUYAZ3BPGBggA==',
    perfect:29,
    index:49
  },
  50:{
    string:`Noh2FcBtIXQGmBa9gCJIEsDmALALqnKgCYD2A7qIalgE4Cm9VK62+1Zl1djzCSsflFgpEwlAInihyGYLHJRqAEakAHuQCG0VFNkL5kuXpEI0AWwy1apWtUj0AZngC04AA66E6UgGNNeBikfAYsNngB9ACMABwADF4WVjZ2RA7Obp4mMKJGocYF+aG50kUq6lo6LKrmytwMTInlGtqQiZJKlta29k6unCF5eagAzuCDpR0wQA`,
    perfect:14,
    index:50
  },
  51:{
    string:`W1tbInZvaWQiXSxbInZvaWQiXSxbInZvaWQiXSxbInZvaWQiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsiYm9tYiIsImdyZWVuIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJib3h3YWxsIl0sWyJzdW4iXV0sW1sibG9jYXRpb24iXSxbbnVsbF0sWyJsaWdodCIsImRvd24iLCJncmVlbiJdLFtudWxsXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sW251bGxdLFsidm9pZCJdLFsidm9pZCJdXSxbW251bGxdLFsibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFsibWlycm9yIiwicmlnaHQtZG93biJdLFtudWxsXSxbbnVsbF0sWyJ2b2lkIl0sWyJ2b2lkIl1dLFtbbnVsbF0sWyJib3h3YWxsIl0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJ2b2lkIl0sWyJ2b2lkIl1dLFtbbnVsbF0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFsidm9pZCJdLFsidm9pZCJdXSxbW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJ2b2lkIl0sWyJ2b2lkIl1dXQ==`,
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
