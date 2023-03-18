function reset() {
    //Chapter 1: Basic
  
    if (tmp.level == 1) {
      tmp.building = [
        [[null], ["light", "down", "green"], [null]],
        [[null], ["box"], [null]],
        [[null], ["sun"], [null]],
      ];
      (tmp.location = [0, 0]),
        (tmp.light = [[0, 1]]),
        (tmp.area = [3, 3]);
    } else if (tmp.level == 2) {
      tmp.building = [
        [[null], ["light", "down", "green"], [null], ["box"]],
        [[null], ["box"], ["box"], [null]],
        [[null], ["sun"], [null], ["box"]],
        [[null], [null], ["box"], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[0, 1]];
      tmp.area = [4, 4];
    } else if (tmp.level == 3) {
      tmp.building = [
        [[null], ["light", "down", "green"], [null]],
        [[null], [null], [null], [null]],
        [[null], ["box"], ["box"]],
        [[null], [null], [null]],
        [[null], ["sun"], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[0, 1]];
      tmp.area = [5, 3];
    } else if (tmp.level == 4) {
      tmp.building = [
        [[null], [null], ["box"], [null], [null]],
        [[null], ["box"], [null], [null], [null]],
        [["light", "right", "green"], ["box"], ["box"], [null], ["sun"]],
        [[null], [null], [null], [null], [null]],
        [[null], [null], [null], [null], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[2, 0]];
      tmp.area = [5, 5];
    } else if (tmp.level == 5) {
      tmp.building = [
        [[null], ["light", "down", "green"], [null], [null]],
        [[null], ["box"], [null], [null]],
        [[null], ["mirror", "left-down"], [null], ["sun"]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[0, 1]];
      tmp.area = [3, 4];
    } else if (tmp.level == 6) {
      tmp.building = [
        [[null], [null], [null], [null], [null]],
        [[null], ["light", "down", "green"], [null], [null], ["sun"]],
        [[null], ["mirror", "left-down"], [null], [null], [null]],
        [[null], [null], [null], ["mirror", "right-down"], [null]],
        [[null], [null], ["box"], [null], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[1, 1]];
      tmp.area = [4, 5];
    } else if (tmp.level == 7) {
      tmp.building = [
        [[null], [null], ["light", "down", "green"], [null], [null]],
        [["sun"], [null], [null], [null], [null]],
        [
          [null],
          [null],
          ["mirror", "left-down"],
          ["mirror", "right-up"],
          ["mirror", "right-down"],
        ],
        [[null], [null], [null], [null], ["box"]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[0, 2]];
      tmp.area = [4, 5];
    } else if (tmp.level == 8) {
      tmp.building = [
        [[null], [null], [null], [null], [null], ["box"]],
        [
          [null],
          ["mirror", "left-up"],
          ["light", "right", "green"],
          ["box"],
          [null],
          ["box"],
        ],
        [[null], [null], ["mirror", "right-up"], [null], [null], [null]],
        [
          [null],
          ["mirror", "left-down"],
          ["mirror", "right-down"],
          [null],
          [null],
          [null],
        ],
        [[null], [null], [null], [null], [null], ["sun"]],
      ];
      tmp.location = [2, 0];
      tmp.light = [[1, 2]];
      tmp.area = [5, 6];
    } else if (tmp.level == 9) {
      tmp.building = [
        [[null], [null], [null], ["sun"]],
        [[null], [null], [null], ["badbox"]],
        [["light", "right", "green"], [null], ["mirror", "right-down"], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[2, 0]];
      tmp.area = [3, 4];
    } else if (tmp.level == 10) {
      tmp.building = [
        [["box"], [null], [null], [null]],
        [["box"], [null], ["mirror", "right-up"], [null]],
        [["box"], [null], ["badbox"], [null]],
        [["light", "right", "green"], [null], [null], ["mirror", "right-down"]],
        [[null], [null], ["sun"], [null]],
      ];
      tmp.location = [2, 1];
      tmp.light = [[3, 0]];
      tmp.area = [5, 4];
    } else if (tmp.level == 11) {
      tmp.building = [
        [
          ["mirror", "left-up"],
          [null],
          [null],
          ["badboxwall"],
          ["mirror", "right-up"],
          [null],
        ],
        [[null], ["boxwall"], [null], ["boxwall"], [null], [null]],
        [[null], [null], [null], ["boxwall"], [null], [null]],
        [[null], ["mirror", "right-down"], [null], ["badbox"], [null], [null]],
        [[null], ["boxwall"], ["boxwall"], [null], [null], [null]],
        [[null], [null], [null], [null], [null], [null]],
        [["sun"], ["light", "right", "green"], [null], [null], [null], [null]],
      ];
      tmp.location = [2, 0];
      tmp.light = [[6, 1]];
      tmp.area = [7, 6];
    } else if (tmp.level == 12) {
      tmp.building = [
        [
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
          ["sun"],
          ["boxwall"],
          ["boxwall"],
        ],
        [
          [null],
          [null],
          ["light", "right", "green"],
          [null],
          [null],
          [null],
          ["box"],
        ],
        [
          [null],
          ["boxwall"],
          ["box"],
          ["boxwall"],
          ["badboxwall"],
          [null],
          [null],
        ],
        [
          [null],
          ["mirror", "left-down"],
          ["badboxwall"],
          [null],
          [null],
          ["mirror", "right-down"],
          [null],
        ],
        [[null], ["box"], [null], [null], ["mirror", "right-up"], [null], [null]],
        [[null], [null], [null], [null], [null], [null], [null]],
      ];
      tmp.location = [5, 6];
      tmp.light = [[1, 2]];
      tmp.area = [6, 7];
    }
  
    //Chapter 2: Portal
    else if (tmp.level == 13) {
      tmp.building = [
        [[null], ["sun"], [null]],
        [["portal", [3, 0]], [null], [null]],
        [["badboxwall"], ["badboxwall"], ["badboxwall"]],
        [["portal", [1, 0]], ["box"], [null]],
        [[null], ["light", "up", "green"], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[4, 1]];
      tmp.area = [5, 3];
    } else if (tmp.level == 14) {
      tmp.building = [
        [[null], [null], [null], [null]],
        [[null], [null], [null], [null]],
        [["light", "down", "green"], ["mirror", "right-down"], [null], [null]],
        [["portal", [3, 1]], ["portal", [3, 0]], [null], [null]],
        [["sun"], ["mirror", "right-up"], [null], [null]],
        [[null], [null], [null], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[2, 0]];
      tmp.area = [6, 4];
    } else if (tmp.level == 15) {
      tmp.building = [
        [[null], [null], [null], [null], [null]],
        [["sun"], [null], ["portal", [3, 2]], ["mirror", "right-down"], [null]],
        [["boxwall"], ["boxwall"], ["boxwall"], [null], [null]],
        [
          [null],
          ["mirror", "left-up"],
          ["portal", [1, 2]],
          ["mirror", "right-up"],
          [null],
        ],
        [["light", "up", "green"], [null], [null], [null], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[4, 0]];
      tmp.area = [5, 5];
    } else if (tmp.level == 16) {
      tmp.building = [
        [[null], ["light", "down", "green"], [null], [null], ["sun"]],
        [[null], ["portal", [3, 0]], ["mirror", "left-up"], [null], [null]],
        [["boxwall"], ["boxwall"], [null], ["boxwall"], ["boxwall"]],
        [["portal", [1, 1]], [null], ["mirror", "right-down"], [null], [null]],
        [[null], ["mirror", "left-down"], [null], [null], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [[0, 1]];
      tmp.area = [5, 5];
    } else if (tmp.level == 17) {
      tmp.building = [
        [[null], [null], [null], [null]],
        [[null], ["mirror", "right-up"], ["mirror", "left-up"], [null]],
        [["portal", [4, 3]], [null], [null], ["portal", [4, 0]]],
        [["boxwall"], ["boxwall"], ["boxwall"], ["boxwall"]],
        [["portal", [2, 3]], [null], [null], ["portal", [2, 0]]],
        [["light", "up", "green"], [null], [null], ["sun"]],
      ];
      tmp.location = [5, 2];
      tmp.light = [[5, 0]];
      tmp.area = [6, 4];
    } else if (tmp.level == 18) {
      tmp.building = [
        [
          [null],
          [null],
          ["boxwall"],
          [null],
          ["portal", [5, 5]],
          ["boxwall"],
          [null],
        ],
        [
          [null],
          [null],
          ["portal", [5, 1]],
          ["mirror", "right-up"],
          ["boxwall"],
          [null],
          [null],
        ],
        [
          ["boxwall"],
          ["light", "right", "green"],
          [null],
          [null],
          ["boxwall"],
          [null],
          ["boxwall"],
        ],
        [
          [null],
          [null],
          [null],
          ["portal", [4, 4]],
          ["boxwall"],
          ["boxwall"],
          [null],
        ],
        [
          [null],
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
          ["portal", [3, 3]],
          [null],
          ["badboxwall"],
        ],
        [
          ["boxwall"],
          ["portal", [1, 2]],
          [null],
          ["boxwall"],
          [null],
          ["portal", [0, 4]],
          ["boxwall"],
        ],
        [
          ["sun"],
          [null],
          ["mirror", "right-down"],
          [null],
          ["badboxwall"],
          ["boxwall"],
          ["boxwall"],
        ],
      ];
      tmp.location = [2, 2];
      tmp.light = [[2, 1]];
      tmp.area = [7, 7];
    } else if (tmp.level == 19) {
      tmp.building = [
        [[null], ["sun"], [null], [null], [null], [null], [null]],
        [
          [null],
          [null],
          ["light", "right", "green"],
          [null],
          ["portal", [1, 5]],
          ["portal", [1, 4]],
          [null],
        ],
        [
          [null],
          ["mirror", "left-down"],
          ["boxwall"],
          ["mirror", "right-up"],
          [null],
          ["portal", [5, 3]],
          [null],
        ],
        [
          [null],
          ["box"],
          ["badboxwall"],
          [null],
          ["badboxwall"],
          [null],
          ["portal", [4, 1]],
        ],
        [
          [null],
          ["portal", [3, 6]],
          [null],
          ["mirror", "right-down"],
          [null],
          ["badboxwall"],
          [null],
        ],
        [
          [null],
          [null],
          ["boxwall"],
          ["portal", [2, 5]],
          ["boxwall"],
          [null],
          [null],
        ],
      ];
      tmp.location = [0, 0];
      tmp.light = [[1, 2]];
      tmp.area = [6, 7];
    } else if (tmp.level == 20) {
      tmp.building = [
        [
          [null],
          [null],
          ["badboxwall"],
          ["portal", [6, 0]],
          ["boxwall"],
          [null],
          ["portal", [3, 3]],
        ],
        [
          ["portal", [3, 2]],
          ["boxwall"],
          [null],
          ["light", "down", "green"],
          [null],
          ["mirror", "right-down"],
          [null],
        ],
        [
          [null],
          ["mirror", "left-down"],
          ["badboxwall"],
          [null],
          ["badbox"],
          [null],
          [null],
        ],
        [
          [null],
          ["boxwall"],
          ["portal", [1, 0]],
          ["portal", [0, 6]],
          [null],
          [null],
          [null],
        ],
        [[null], [null], ["badboxwall"], [null], ["badboxwall"], [null], [null]],
        [
          ["boxwall"],
          ["boxwall"],
          ["mirror", "left-up"],
          ["sun"],
          ["mirror", "right-up"],
          ["boxwall"],
          ["mirror", "right-down"],
        ],
        [["portal", [0, 3]], [null], [null], [null], [null], [null], [null]],
      ];
      tmp.location = [3, 4];
      tmp.light = [[1, 3]];
      tmp.area = [7, 7];
    } else if (tmp.level == 21) {
      tmp.building = [
        [[null], [null], [null], ["boxwall"], [null], [null], [null]],
        [
          [null],
          ["portal", [5, 5]],
          [null],
          ["boxwall"],
          [null],
          ["sun"],
          [null],
        ],
        [[null], ["box"], [null], ["boxwall"], [null], ["box"], [null]],
        [[null], ["box"], [null], ["boxwall"], [null], ["box"], [null]],
        [[null], ["box"], [null], ["boxwall"], [null], ["box"], [null]],
        [
          [null],
          ["light", "up", "green"],
          [null],
          ["boxwall"],
          [null],
          ["badportal"],
          [null],
        ],
        [[null], [null], [null], ["boxwall"], [null], [null], [null]],
      ];
      tmp.location = [0, 1];
      tmp.light = [[5, 1]];
      tmp.area = [7, 7];
    } else if (tmp.level == 22) {
      tmp.building = [
        [[null], [null], [null], ["boxwall"], [null], [null], [null]],
        [
          ["light", "down", "green"],
          [null],
          ["badportal"],
          ["boxwall"],
          ["badportal"],
          [null],
          ["sun"],
        ],
        [[null], [null], ["boxwall"], ["boxwall"], ["boxwall"], [null], [null]],
        [
          [null],
          ["boxwall"],
          ["portal", [1, 2]],
          [null],
          ["portal", [1, 4]],
          ["boxwall"],
          [null],
        ],
        [
          ["mirror", "left-down"],
          ["boxwall"],
          [null],
          [null],
          [null],
          ["boxwall"],
          ["mirror", "right-down"],
        ],
        [[null], [null], ["boxwall"], [null], ["boxwall"], [null], [null]],
        [[null], [null], [null], ["badboxwall"], [null], [null], [null]],
      ];
      tmp.location = [3, 3];
      tmp.light = [[1, 0]];
      tmp.area = [7, 7];
    } else if (tmp.level == 23) {
      tmp.building = [
        [
          [null],
          ["mirror", "left-up"],
          [null],
          [null],
          ["mirror", "right-up"],
          [null],
          ["portal", [2, 1]],
        ],
        [[null], [null], ["boxwall"], [null], ["boxwall"], [null], ["sun"]],
        [
          ["badportal"],
          ["portal", [0, 6]],
          [null],
          [null],
          [null],
          [null],
          ["light", "left", "green"],
        ],
        [
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
          ["mirror", "left-down"],
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
        ],
        [
          [null],
          [null],
          [null],
          ["badboxwall"],
          [null],
          [null],
          ["portal", [2, 0]],
        ],
        [
          [null],
          ["mirror", "left-up"],
          [null],
          ["boxwall"],
          ["badbox"],
          [null],
          [null],
        ],
        [
          ["mirror", "left-down"],
          [null],
          [null],
          [null],
          [null],
          ["light", "left", "green"],
          [null],
        ],
      ];
      tmp.location = [6, 6];
      tmp.light = [
        [6, 5],
        [2, 6],
      ];
      tmp.area = [7, 7];
    } else if (tmp.level == 24) {
      tmp.building = [
        [
          [null],
          [null],
          [null],
          [null],
          ["boxwall"],
          [null],
          [null],
          [null],
          ["portal", [4, 4]],
        ],
        [
          [null],
          [null],
          [null],
          [null],
          ["boxwall"],
          [null],
          ["mirror", "right-down"],
          [null],
          [null],
        ],
        [
          [null],
          ["mirror", "left-up"],
          ["mirror", "right-up"],
          [null],
          ["boxwall"],
          [null],
          ["mirror", "left-up"],
          [null],
          [null],
        ],
        [
          [null],
          [null],
          ["mirror", "left-down"],
          [null],
          ["badboxwall"],
          [null],
          ["boxwall"],
          [null],
          [null],
        ],
        [
          ["badboxwall"],
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
          ["badportal"],
          ["badboxwall"],
          ["boxwall"],
          ["boxwall"],
          ["badboxwall"],
        ],
        [
          [null],
          [null],
          ["mirror", "right-up"],
          [null],
          ["boxwall"],
          [null],
          ["box"],
          [null],
          [null],
        ],
        [
          [null],
          [null],
          ["mirror", "left-down"],
          [null],
          ["boxwall"],
          [null],
          ["mirror", "right-up"],
          [null],
          [null],
        ],
        [
          [null],
          ["light", "up", "green"],
          [null],
          [null],
          ["boxwall"],
          [null],
          ["box"],
          [null],
          [null],
        ],
        [
          ["portal", [4, 4]],
          [null],
          [null],
          [null],
          ["boxwall"],
          ["sun"],
          [null],
          [null],
          ["portal", [4, 4]],
        ],
      ];
      tmp.location = [8, 0];
      tmp.light = [[7, 1]];
      tmp.area = [9, 9];
    }
  
    //Chapter 3: Colour
    else if (tmp.level == 25) {
      tmp.building = [
        [
          [null],
          ["light", "down", "green"],
          [null],
          ["light", "down", "red"],
          [null],
        ],
        [[null], ["box"], [null], ["box"], [null]],
        [[null], ["redpass"], [null], ["redpass"], [null]],
        [
          [null],
          ["mirror", "left-down"],
          [null],
          ["mirror", "right-down"],
          [null],
        ],
        [[null], [null], [null], [null], [null]],
        [[null], [null], ["sun"], [null], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [
        [0, 1],
        [0, 3],
      ];
      tmp.area = [6, 5];
    } else if (tmp.level == 26) {
      tmp.building = [
        [
          [null],
          ["light", "down", "green"],
          [null],
          [null],
          [null],
          ["light", "down", "red"],
          [null],
        ],
        [
          ["boxwall"],
          ["greenpass"],
          [null],
          ["mirror", "right-up"],
          [null],
          ["redpass"],
          ["boxwall"],
        ],
        [[null], [null], [null], ["mirror", "left-down"], [null], [null], [null]],
        [
          ["boxwall"],
          ["redpass"],
          ["boxwall"],
          ["badboxwall"],
          ["boxwall"],
          ["greenpass"],
          ["boxwall"],
        ],
        [
          [null],
          [null],
          ["mirror", "left-up"],
          [null],
          ["mirror", "right-down"],
          [null],
          [null],
        ],
        [
          ["boxwall"],
          ["greenpass"],
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
          ["redpass"],
          ["boxwall"],
        ],
        [
          [null],
          ["mirror", "left-down"],
          [null],
          ["sun"],
          [null],
          [null],
          [null],
        ],
      ];
      tmp.location = [0, 3];
      tmp.light = [
        [0, 1],
        [0, 5],
      ];
      tmp.area = [7, 7];
    } else if (tmp.level == 27) {
      tmp.building = [
        [[null], [null], [null], [null], [null], [null], [null]],
        [[null], [null], [null], [null], [null], [null], [null]],
        [
          [null],
          [null],
          [null],
          ["mirror", "left-up"],
          [null],
          [null],
          ["boxwall"],
        ],
        [
          [null],
          [null],
          ["light", "right", "green"],
          [null],
          ["light", "left", "red"],
          ["greenpass"],
          ["sun"],
        ],
        [
          [null],
          ["mirror", "left-down"],
          ["boxwall"],
          ["mirror", "right-up"],
          ["mirror", "right-down"],
          [null],
          ["greenpass"],
        ],
        [[null], ["badboxwall"], ["redpass"], [null], [null], [null], [null]],
        [[null], [null], [null], [null], [null], [null], [null]],
      ];
      tmp.location = [3, 3];
      tmp.light = [
        [3, 2],
        [3, 4],
      ];
      tmp.area = [7, 7];
    } else if (tmp.level == 28) {
      tmp.building = [
        [
          ["badportal"],
          [null],
          [null],
          ["mirror", "left-up"],
          [null],
          ["redpass"],
          ["sun"],
        ],
        [
          [null],
          [null],
          ["mirror", "right-up"],
          ["mirror", "left-down"],
          [null],
          [null],
          ["boxwall"],
        ],
        [
          ["light", "right", "green"],
          [null],
          ["mirror", "right-up"],
          [null],
          [null],
          [null],
          ["badboxwall"],
        ],
        [
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
          ["boxwall"],
          ["badboxwall"],
          [null],
        ],
        [
          ["light", "right", "red"],
          [null],
          [null],
          ["redpass"],
          [null],
          [null],
          [null],
        ],
        [
          [null],
          [null],
          [null],
          [null],
          ["badboxwall"],
          ["boxwall"],
          ["badboxwall"],
        ],
        [
          ["portal", [0, 0]],
          ["mirror", "left-down"],
          [null],
          ["mirror", "right-down"],
          ["badboxwall"],
          [null],
          [null],
        ],
      ];
      tmp.location = [1, 0];
      tmp.light = [
        [4, 0],
        [2, 0],
      ];
      tmp.area = [7, 7];
    } else if (tmp.level == 29) {
      tmp.building = [
        [[null], ["light", "down", "green"], [null]],
        [[null], ["box"], [null]],
        [[null], ["box"], [null]],
        [[null], ["light", "down", "red"], [null]],
        [[null], ["yellowpass"], [null]],
        [[null], [null], [null]],
        [[null], ["sun"], [null]],
      ];
      (tmp.location = [0, 0]),
        (tmp.light = [
          [0, 1],
          [3, 1],
        ]),
        (tmp.area = [7, 3]);
    } else if (tmp.level == 30) {
      tmp.building = [
        [
          [null],
          ["portal", [0, 3]],
          ["boxwall"],
          ["portal", [0, 1]],
          [null],
          [null],
          ["boxwall"],
        ],
        [
          [null],
          ["light", "right", "green"],
          ["mirror", "right-up"],
          ["light", "down", "red"],
          [null],
          [null],
          [null],
        ],
        [
          [null],
          [null],
          ["mirror", "right-down"],
          [null],
          ["mirror", "left-down"],
          [null],
          [null],
        ],
        [[null], [null], ["yellowpass"], [null], [null], [null], ["boxwall"]],
        [[null], ["boxwall"], ["sun"], ["boxwall"], [null], [null], ["boxwall"]],
      ];
      (tmp.location = [2, 3]),
        (tmp.light = [
          [1, 1],
          [1, 3],
        ]),
        (tmp.area = [5, 7]);
    } else if (tmp.level == 31) {
      tmp.building = [
        [
          [null],
          [null],
          [null],
          [null],
          [null],
          [null],
          ["light", "down", "green"],
          [null],
        ],
        [[null], [null], [null], [null], [null], [null], ["box"], ["box"]],
        [
          [null],
          ["light", "right", "green"],
          [null],
          ["mirror", "right-up"],
          ["mirror", "left-up"],
          ["redpass"],
          [null],
          ["badboxwall"],
        ],
        [
          [null],
          ["light", "right", "red"],
          ["mirror", "left-down"],
          ["mirror", "right-down"],
          [null],
          ["yellowpass"],
          ["badboxwall"],
          ["badboxwall"],
        ],
        [
          [null],
          [null],
          [null],
          [null],
          [null],
          ["greenpass"],
          [null],
          ["badboxwall"],
        ],
        [[null], [null], [null], [null], [null], ["boxwall"], ["sun"], [null]],
        [[null], [null], [null], ["boxwall"], [null], [null], [null], [null]],
      ];
      (tmp.location = [0, 0]),
        (tmp.light = [
          [2, 1],
          [3, 1],
          [0, 6],
        ]),
        (tmp.area = [7, 8]);
    } else if (tmp.level == 32) {
      tmp.building = [
        [
          ["portal", [6, 3]],
          [null],
          [null],
          ["boxwall"],
          ["badportal"],
          ["boxwall"],
          [null],
          ["portal", [6, 5]],
        ],
        [
          [null],
          [null],
          [null],
          ["mirror", "left-up"],
          ["mirror", "right-up"],
          ["mirror", "right-up"],
          [null],
          [null],
          [null],
        ],
        [
          ["boxwall"],
          [null],
          [null],
          ["portal", [2, 5]],
          [null],
          ["portal", [2, 3]],
          [null],
          [null],
          [null],
        ],
        [
          ["sun"],
          ["yellowpass"],
          [null],
          ["mirror", "left-down"],
          [null],
          ["mirror", "right-down"],
          [null],
          [null],
          [null],
        ],
        [
          ["boxwall"],
          [null],
          [null],
          ["light", "up", "green"],
          ["portal", [0, 4]],
          ["light", "up", "red"],
          [null],
          [null],
          [null],
        ],
        [[null], [null], [null], [null], [null], [null], [null], [null], [null]],
        [
          [null],
          [null],
          [null],
          ["portal", [0, 0]],
          [null],
          ["portal", [0, 7]],
          [null],
          [null],
          [null],
        ],
      ];
      (tmp.location = [3, 4]),
        (tmp.light = [
          [4, 3],
          [4, 5],
        ]),
        (tmp.area = [7, 8]);
    } else if (tmp.level == 33) {
      tmp.building = [
        [[null], [null], ["light", "down", "green"], ["light", "down", "red"]],
        [[null], [null], [null], [null]],
        [[null], ["store", null], [null], [null]],
        [[null], [null], [null], [null]],
        [[null], [null], [null], ["yellowpass"]],
        [[null], [null], [null], ["sun"]],
      ];
      tmp.location = [0, 0];
      tmp.light = [
        [0, 2],
        [0, 3],
      ];
      tmp.area = [6, 4];
    } else if (tmp.level == 34) {
      tmp.building = [
        [
          [null],
          [null],
          ["light", "down", "green"],
          ["light", "down", "red"],
          [null],
        ],
        [[null], ["box"], [null], [null], [null]],
        [[null], ["store", null], [null], [null], [null]],
        [[null], [null], [null], [null], [null]],
        [[null], [null], ["yellowpass"], [null], [null]],
        [[null], [null], ["sun"], [null], [null]],
      ];
      tmp.location = [0, 0];
      tmp.light = [
        [0, 2],
        [0, 3],
      ];
      tmp.area = [6, 5];
    } 
     else if (tmp.level == 35) {
      importL2(`W1tbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbbnVsbF0sWyJsaWdodCIsImRvd24iLCJncmVlbiJdLFtudWxsXV0sW1sibGlnaHQiLCJyaWdodCIsImdyZWVuIl0sWyJncmVlbnBhc3MiXSxbbnVsbF0sWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFsiYmFkYm94d2FsbCJdLFtudWxsXSxbImJveCJdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJhZGJveHdhbGwiXSxbImJveHdhbGwiXSxbImJveHdhbGwiXSxbInN1biJdLFsiYm94d2FsbCJdXSxbW251bGxdLFtudWxsXSxbImxvY2F0aW9uIl0sWyJib3h3YWxsIl0sW251bGxdLFsibGlnaHQiLCJyaWdodCIsImdyZWVuIl0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXV0sW1sicG9ydGFsIixbNCw4XV0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJwb3J0YWwiLFs0LDBdXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFsic3RvcmUiLG51bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbbnVsbF1dLFtbImxpZ2h0IiwicmlnaHQiLCJyZWQiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbInJlZHBhc3MiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibWlycm9yIiwicmlnaHQtZG93biJdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImxpZ2h0IiwidXAiLCJyZWQiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dXQ==`,9,9) 
      tmp.area = [9, 9];
      tmp.level=35
      
    }
    else if (tmp.level == 36) {
      importL2(`W1tbImxpZ2h0IiwiZG93biIsImdyZWVuIl0sW251bGxdLFsibGlnaHQiLCJsZWZ0IiwicmVkIl0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sW251bGxdLFsicG9ydGFsIixbMywwXV0sW251bGxdXSxbW251bGxdLFtudWxsXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sW251bGxdLFsic3RvcmUiLG51bGxdLFsieWVsbG93cGFzcyJdLFsic3VuIl1dLFtbIm1pcnJvciIsImxlZnQtZG93biJdLFsibWlycm9yIiwibGVmdC11cCJdLFsieWVsbG93cGFzcyJdLFsibWlycm9yIiwicmlnaHQtZG93biJdLFtudWxsXSxbbnVsbF0sWyJncmVlbnBhc3MiXV0sW1sicG9ydGFsIixbMCw1XV0sW251bGxdLFsibG9jYXRpb24iXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sWyJiYWRib3h3YWxsIl0sWyJib3h3YWxsIl0sW251bGxdXSxbWyJzdW4iXSxbInJlZHBhc3MiXSxbImJhZGJveHdhbGwiXSxbImJhZGJveHdhbGwiXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1sibWlycm9yIiwibGVmdC11cCJdLFtudWxsXSxbIm1pcnJvciIsImxlZnQtZG93biJdLFsieWVsbG93cGFzcyJdLFtudWxsXSxbIm1pcnJvciIsInJpZ2h0LWRvd24iXSxbbnVsbF1dLFtbIm1pcnJvciIsImxlZnQtZG93biJdLFtudWxsXSxbbnVsbF0sWyJtaXJyb3IiLCJsZWZ0LWRvd24iXSxbbnVsbF0sW251bGxdLFsiYm94d2FsbCJdXV0=`)
      tmp.area = [7, 7];
      tmp.level=36
      
    } 
    else if (tmp.level == 37) {
      importL2(`W1tbImxvY2F0aW9uIl0sW251bGxdLFsibGlnaHQiLCJ1cCIsImdyZWVuIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sWyJyb3RhdGUxODAiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbWyJib3h3YWxsIl0sWyJib3h3YWxsIl0sWyJiYWRib3h3YWxsIl0sWyJzdW4iXSxbImJveHdhbGwiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbImxpZ2h0IiwicmlnaHQiLCJncmVlbiJdLFsicm90YXRlMTgwIl0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dXQ==`,9,5)
      tmp.area = [9, 5];
      tmp.level=37
    }
     else if (tmp.level == 38) {
      importL2(`W1tbbnVsbF0sWyJwb3J0YWwiLFszLDJdXSxbbnVsbF0sWyJsaWdodCIsImRvd24iLCJncmVlbiJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sWyJyb3RhdGUxODAiXSxbImJveCJdLFsibWlycm9yIiwibGVmdC11cCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sWyJib3giXSxbbnVsbF0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1sic3VuIl0sW251bGxdLFsicG9ydGFsIixbMCwxXV0sW251bGxdLFsibG9jYXRpb24iXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXV0=`,4,5)
      tmp.area = [4, 5];
      tmp.level=38
    }
    else if (tmp.level==39){
      importL2(`W1tbImxvY2F0aW9uIl0sWyJyb3RhdGUxODAiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sWyJtaXJyb3IiLCJsZWZ0LXVwIl0sW251bGxdLFsibGlnaHQiLCJ1cCIsImdyZWVuIl0sWyJsaWdodCIsInVwIiwicmVkIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFsibWlycm9yIiwibGVmdC11cCJdLFsicm90YXRlMTgwIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1sic3VuIl0sWyJ5ZWxsb3dwYXNzIl0sW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbInJvdGF0ZTE4MCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1sieWVsbG93cGFzcyJdLFtudWxsXSxbbnVsbF0sW251bGxdLFsibWlycm9yIiwicmlnaHQtdXAiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV1d`,6,7)
      tmp.area = [6, 7];
      tmp.level=39
    }
    else if(tmp.level==41){
    importL2(`W1tbInN1biJdLFsiYmFkYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJtaXJyb3IiLCJyaWdodC1kb3duIl0sW251bGxdXSxbWyJib3h3YWxsIl0sWyJsaWdodCIsImRvd24iLCJncmVlbiJdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbImxvY2F0aW9uIl0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJyb3RhdGU5MCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFsicm90YXRlOTAiXSxbInJvdGF0ZTE4MCJdLFsicm90YXRlMjcwIl0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJyb3RhdGUyNzAiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV0sW1siYm94d2FsbCJdLFsibWlycm9yIiwibGVmdC11cCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJtaXJyb3IiLCJsZWZ0LWRvd24iXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXV1d`,8,8)
     tmp.area = [8, 8];
      tmp.level=41
    }
    else if(tmp.level==44){
      importL2(`W1tbIm1pcnJvciIsImxlZnQtdXAiXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJhZGJveHdhbGwiXSxbIm1pcnJvciIsInJpZ2h0LXVwIl0sW251bGxdLFsiYm94d2FsbCJdLFtudWxsXV0sW1tudWxsXSxbIm1pcnJvciIsImxlZnQtdXAiXSxbbnVsbF0sW251bGxdLFsic3RvcmUiLG51bGxdLFtudWxsXSxbbnVsbF0sWyJib3h3YWxsIl0sW251bGxdXSxbWyJiYWRib3giXSxbIm1pcnJvciIsImxlZnQtZG93biJdLFsibG9jYXRpb24iXSxbbnVsbF0sWyJtaXJyb3IiLCJyaWdodC11cCJdLFsibWlycm9yIiwicmlnaHQtZG93biJdLFtudWxsXSxbImJveHdhbGwiXSxbbnVsbF1dLFtbIm1pcnJvciIsImxlZnQtZG93biJdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJsaWdodCIsImRvd24iLCJyZWQiXSxbImJveHdhbGwiXSxbbnVsbF1dLFtbInN1biJdLFsicG9ydGFsIixbNiw2XV0sWyJiYWRib3h3YWxsIl0sWyJiYWRib3h3YWxsIl0sWyJsaWdodCIsInVwIiwiZ3JlZW4iXSxbImJveHdhbGwiXSxbInJvdGF0ZTE4MCJdLFsiYm94d2FsbCJdLFtudWxsXV0sW1sieWVsbG93cGFzcyJdLFsiYmFkYm94d2FsbCJdLFsiYm94d2FsbCJdLFtudWxsXSxbbnVsbF0sWyJyb3RhdGUyNzAiXSxbbnVsbF0sWyJib3h3YWxsIl0sW251bGxdXSxbW251bGxdLFsibWlycm9yIiwibGVmdC1kb3duIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJncmVlbnBhc3MiXSxbInBvcnRhbCIsWzQsMV1dLFsiYm94d2FsbCJdLFtudWxsXV0sW1siYm94d2FsbCJdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdLFsiYm94d2FsbCJdLFtudWxsXV0sW1tudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdXV0=`,7,7)
       tmp.area = [7, 7];
        tmp.level=44
    }
    else if (tmp.level==1001){
      importL2(`W1tbImJveCJdLFsiYm94Il0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJveCJdLFsiYm94Il1dLFtbImJveCJdLFtudWxsXSxbbnVsbF0sWyJsb2NhdGlvbiJdLFsibGlnaHQiLCJkb3duIiwiZ3JlZW4iXSxbbnVsbF0sW251bGxdLFtudWxsXSxbImJveCJdXSxbW251bGxdLFtudWxsXSxbImJveCJdLFsiYm94Il0sW251bGxdLFsiYm94Il0sWyJib3giXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbbnVsbF0sW251bGxdXSxbW251bGxdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbImJveCJdLFtudWxsXSxbbnVsbF1dLFtbbnVsbF0sW251bGxdLFsiYm94Il0sWyJib3giXSxbbnVsbF0sWyJib3giXSxbImJveCJdLFtudWxsXSxbbnVsbF1dLFtbImJveCJdLFtudWxsXSxbbnVsbF0sW251bGxdLFsic3VuIl0sW251bGxdLFtudWxsXSxbbnVsbF0sWyJib3giXV0sW1siYm94Il0sWyJib3giXSxbbnVsbF0sW251bGxdLFtudWxsXSxbbnVsbF0sW251bGxdLFsiYm94Il0sWyJib3giXV1d`,9,9)
      tmp.area = [9, 9];
      tmp.level=1001
    }
    else if (tmp.level == "custom") {
      importL(tmp.store);
    } else {
      tmp.building = [
        [[null], ["light", "down", "green"], [null]],
        [["light", "right", "green"], ["end"], ["light", "left", "green"]],
        [[null], [null], [null]],
      ];
      (tmp.location = [0, 0]),
        (tmp.light = [[0, 1]]),
        (tmp.area = [3, 3]);
    }
    
    calculation2()
    tmp.previous = [];

    save()
  }