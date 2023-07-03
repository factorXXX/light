function reset(){
  save()
    if(!level[tmp.level]){
      tmp.page=2
      return 
    } else {
    tmp.page=1;
    tmp.b=false
    tmp.previous= [];
    currentLevel={}
    if (tmp.store!==''&&tmp.level==='custom'){currentLevel = importL(tmp.store)}
    else {currentLevel = JSON.parse(JSON.stringify(level[tmp.level]))}
    let levelNumber = tmp.level
      importL(currentLevel.string)
      tmp.level = levelNumber
    calculation2()
    startTutorial()
    }
  }

  const level = {
  1: {
    string:`N4IgJghgLhIFwG0kDsCuAbdBdANAk6AlgOYAWUIO4A9gO7KUjEBOApqw7gmpll9xmx4QAI2oAPEFx7Z+MriADOqTnnl8q6agGNohag0QAGHEawBfIA==`,
    perfect:3,
    index: 1
  },
  2: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEbgIDmAFnCEcRAO6pHMATgFNhqBjToMQAIwgAPEPgYZJ9HIzmLpWpRrXKNq2usYBnauP0mdCpSoPWpG2XYk3lAXyA=`,
    perfect:9,
    index: 2
  },
  3: {
    string: `N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEbgIDmAFnCEcRAO6pHMATgFNhqBjTr4GGSfRyza8xVJlyGIAEYQAHiA3a90hSuXqF6tUo0BnauIvXpAXyA`,
    perfect:6,
    index: 3
  },
  4: {
    string: `N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10MgBGEAHiA0/To7XoMBzfm07d+vHoJnNh4BAHMAFnBBEATsrUaQSzQFNDqFuy5mJcvhhABnaqeHSps16JE3pzt5+v/3IXwAXyA=`,
    perfect:7,
    index: 4
  },
  5: {
    string: `N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEbgIDmAFnCEcRAO6pHMATgFNhqBjToTa9Bhkn0cjAEYQAHiGlSlC/HN1KQAWwSDBEQZ3DCAZnAC03Ppp0yGIAM7VxegL5A`,
    perfect:3,
    index: 5
  },
  6: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10NP06O1sfMPdfgIA5gAs4IIsQgB3VEUEAnAKaLULTmubsQAZ2qrerBiAC2CefIjzx4RQDM4AWkkyQGrofaGD6zz75HTc0treSFRJ2lVXx58AF8gA===`,
    perfect:14,
    index: 6
  },
  7: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10PgIDmAFnCEcRAO6oibAE4BTMagZN6ORrXoMMIAM7UpcmdIXbmmnUq369ygLYIRIiCJ7gxAMzgBaPoJAtzl67ZHsuT6gAHdzkQTysbIl9OZ1cpQx1jWXkTI2UAIwgAD3d8fABfIA===`,
    perfect:15,
    index: 7
  },
  8: {
    string: `N4IgNg9gxghgLgSwgOxALgNoCYA0AGAXRxABN4Z0MrkBXMMIjW+x5hnJu9zljkAIwgAPEAUY9uIALYIATrIiyQxMAFMAZnAC0NAA6i+YBAHMAFnGUhZJ85eOzVq1IwHCDEl4JFiOHjmxcZeUVLazNtPXcA/y5WWPFojGk5BSUVDW0SCAB3Zz4g1NCbTJy8v3KAhNiY3grq8pAAZxpnMQBfIA`,
    perfect:17,
    index: 8
  },
  9: {
    string: `N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10NP04YgDO1q+DjtNgObtWDEACMYxCRAAeIPuw5gEAcwAWcEEQBO6rTpBrdAU1O9Rg8QFsEu3RF1H9muAFpiEAO6Xh9PgBfIA===`,
    perfect:5,
    index: 9
  },
  10: {
    string: `N4IgJghgLhIFwG0kgG4HsCWYQF0A0CAdgK4A2p+RZFBJ5OlCqm2ldNTAthgE49o8QeEDwwBzABZQAtMQAOuWtQYEm6LIqr0CIAEYQwutAA9N7FclLipQkdai2xPAKbPCZ5Uu1de/QcNFJGTA0AHd3Cy0Ocx0AZ2IIrwoVEFI0AGNoDDR3RAAmPABGHABfIA=`,
    perfect:7,
    index: 10
  },
  11: {
    string:`N4IgNg9gxghgLgSwgOxALgNoCYA0AGAXRxABN4Z0MqQBbBAJ3onpGLAFMAzOAWgFcADiCIZkfMGBFiJIkACMYJORAAeAdxgThODLQZMWxeggDmAC16Dto8ZJE2ZO6ZKe3Zy9ZrDXnUt/d9XRwcXXQ8NLT9g3wC3HT1GZlYQY3NeEgg1VCjQ+UUPHziQgljg+VUI73cKr0LoopidYqDQwOb2xuoAZz5s+LBTC2TUoeITenZ2Po6G2ZkSgF8gA`,
    perfect:24,
    index: 11
  },
  12: {
    string:`N4IgNg9gxghgLgSwgOxALgNoFYA0A2AXRxABN4Z0MqQAjCADwHcYwwQiNaHnX2dO6TFmw5chvUQGcArqlGCeI/mMXsOGZNNYdN25WAQBzABZwQxAE5HT5kIYsBTB3P66wOre9ef5DNfw0fZQVhPgE/X3ElARgSEIlvPUDtdTdRAFsECwsIC1swBwAzOABaEghGFxi47lCPJLTlTOzc2ysTUvLKsLTUoPD6Hv7GzmacvMtrUukAByGGnz6F5a9k1ZGNxYIAXyA===`,
    perfect:31,
    index: 12
  },
   13: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEYgDO1qDNd+DjADhAE5wYYEDgwBmPFzEd6M2vW4gARjGLKIADwDuwkQxVqNOvSAOr1W3XTNK+g4aIwBGKea1n5nbrINgEAOYAFnCiINQ8YQH8AKYxbF6K+AC+QA===`,
    perfect:4,
    index: 13
  },
  14: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10NP06O30MfPusucBzbuAQBzABZwQRYhADuqImIBOAUzWoGIALYIVKiCpkgV4qQFo5ikELY8u7DCAAORuDDAyMAZhwBGfG03FQ8vdj8CO2iRAGdqLXZdfUNjIjNJOAtqF1s+QXzhJ35C+xKHIPwAXyA=`,
    perfect:24,
    index: 14
  },
  15: {
    string:`N4IgJghgLhIFwG0kDsCuAbdBdANAtmu+G2eBpxhRCIAzqsiEeUSAA4D2ATjOiHgGYcAJiysAtgEsuXbvxBdJAcwAWUALRgOAd0bMSYvDQBuHSWCZ4Qp85ZNmL+wmQPUWVqTLk4Q6AKYAZhqobHbs3Lz8CACMIoY0nrJc8oqqwaFO2NS+ymryIfJKXH5+ei7OlBTulWK4vhwAxtCSHIyIAAw47VgAvkA=`,
    perfect:23,
    index: 15
  },
  16: {
    string:`N4IgJghgLhIFwG0kDsCuAbdBdANAk6AlgOYAWUIO4A9gO7KUjEBOApqw7gmplz9nhABnVJy7cMA/AAdqzGOkoIAzDgAMWLiAC2hZszmN0rAGZQAtKmkg+k273EgAbtUJgbgl248Ten1+5aXoGOsvIQingAjDhRmnj8Wrr6hlTMJOTmYHScCXZ5Dni+Ujp6BsxGphbZ9D6JBVKJ8QTUAMbQhNQMiGrqWAC+QA`,
    perfect:24,
    index: 16
  },
  17: {
    string:`N4IgNg9gxghgLgSwgOxALgNoFYA0AmAXRxABN4Z0MrkBXMMIjW+x5hnJuhxzljkALYIATsIjCQxYQgDmACzgBaGgAcQjQSLETiYAKYAzJavUc2BHiBXi4MMJIwAWHAGYLZrq0/9rw2/Y5nAAYLSwA3CAQSUwwQCKiYuMjojXiUy19/BzxXd152fI1Mu2ycELzYsFkFSRATYhlhPT1ULz5C/gBnGlaLAF8gA=`,
    perfect:21,
    index: 17
  },
  18: {
    string:`N4IgNg9gxghgLgSwgOxALgNoCYA0WC6OIAJvDOhpcgK5hiEY10MgBuECxIDT9OGIAA4QATnBhgQ/AKw5p+FgCMIADwDuEyT1r0GA9p279eLYWIlSMsgIwL+IALYIRI0VJAiEAcwAWcALTUgkYCyuqaISbGOnaUbBxcLGDefu6evnDuXiIApjmo2szRRaGqGnSRMfYGiXpRjFUNJUKi4pL8ACw4HbEgYeVa9v0RLDXcevGGowkhk4nVM6atFvwAzDirsfV9ZSMTY0vm7RjWeFuNc5XNZm2WAAzdvQcTAM7UBcV8Ak4ubkTpfn8xAgag+TS+fRgxGGFWmUwWUwUAF8gA==`,
    perfect:15,
    index: 18
  },
  19: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEYgDO1qDNd7t9OGHPfbl04NBnXvwbgEAcwAWcEEQBOshUpAzlAU21sJQ3iAAOEZXBhglGAIw4ArPimnzl63YAsTgyN5iBIAC2CMrKZhpg2gBmcAC0xBAA7vqMAEYQAB6JllZSwaHhKmpx1MYgwgEuFla89jgAzN7+Tc1G6RnlbTDE7dl0na1p3b05A5JGVW68Hjg2TqLjjJM1GPU4AGxNi0EhYcoaqvJxCcljhkM9mX25PvQL59sAbhAIxAMmZtXWAEwOTSDPV5ncTNJwAXyAA`,
    perfect:25,
    index: 19
  },
  20: {
    string:`N4IgNg9gxghgLgSwgOxALgNoGYA0AWAXRxABN4Z0MrkBXMMIjW+xkAIxhLYgA8B3GPRCsADhABOcQSBwYAbDgAMBVt36Cww2cwayQYydNm4sKxhn0Spm4zgBMKvQDcICElqZ1dFsAgDmABZwMqQQfKjEfuIAptGojDqsALYI4uISIeL+QQC0JGHx2l6O1MV6KWkZxGDRAGZweQUe7JxqAkIJZRYcXLweiUUs5gMWLm7NBtYyGACMSiWWhjYYijhyJSObxcNdIy296h2D3vttGv2727Kjru6sY3flqeniITX1OTQizQDONIUWCovTLZBpfZoPZpAqogLKBBr5cLCcyLKayVamTosY5Y7xbbGeIYEAC+QA`,
    perfect:46,
    index: 20
  },
  21: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0BGAXRxABN4Z0MrkBXMMIjW+x5hnDEANwgRJFZ12TIYJaMRLDiAAOEAE5wYYEBwCsONQTHDuvfjsYgAzjVSGJbIwCMIADwEcr0nn0eTdthxY4eb992dOVwMnUWkvQNFLcM5Iwxd9KKk4gJ9qWPAEAHMACzhVEBoZQuz5AFNy8zCUvTcEuJgSOUVlZIYYlKCgutC/GuErbQBfIA===`,
    perfect:24,
    index: 21
  },
  22: {
    string:`N4IgNg9gxghgLgSwgOxALgNoGYA0WC6OIAJvDOhpeAgOYAWcIRxEA7qkTQE4CmPqhDMgCuYMIJFjBIAG4QExEBNHicQldIDOwgYPVS1k1RhAAjGMQAOELnBhgla2fMXTzVm3YfKD+8XqNpOQVHE2DXJ3DQ5xCgl1DAgI1I+OlrW3smDABGHAAmfB9jEHSvLNyAFkKU2MMNPRAAWwQuLhsmcB4AMzgAWhZ2aKi42r8RiLDUp2bW9qIuWgZ+tl01MbrfGInAmu3ksaTfHfWTd1MIAA9We28N42PE/ABfIA`,
    perfect:24,
    index: `22v2`
  },
  23: {
    string:`N4IgNg9gxghgLgSwgOxALgNoDYA0WC6OIAJvDOhpcgK5hiEYgC2CATqxKyEWAKYBmcALTUADiAY06k2vRyMW7TtxCsEAcwAWwsRPlS5jUZzgww3DACYcARnz35GAzOnyQAIwgAPAO5nzLoYe3n50ek6yDCAAztSoDpQeMMTGrKYBbqnpFgAMeAnO+pFFrhGl4BraKnyCKuqsvLzxDIwAbhAIxOEg7Z3dvV1RihxcPALCxBA+8W4D/R2DswsSLYVlhmtJxJ6+/uFrm1lmFtY59qvFCmwj1eMi4oFRO6EZjO7JO/uXzi3M18pjQRCSbTL6lA7fS4VLRwW61Ij1RozdbnAC+QA=`,
    perfect:27,
    index: 23
  },
  24: {
    string:`N4IgNg9gxghgLgSwgOxALgNoA4A0AGAXRxABN4Z0MrkBXMMIjW+x5hnJu9jEANwgQkQrLiJYc2jEAAcIAJzgwwIDgBYcqglo6dxu7pImiOfAULHcQAWwRy58lSDkIA5gAs4AWhIQA7qgtAxn0pGzsHYjAAUwAzLxppYRMw+zlHZ3d4xMCTfkEkkOTbVMdouM8EgsMQ4Orq62KI8FivH38q4x4AIxgSLogAD18lZRyePPMjPUlgkB6+weH6ArnFkZX+ofWpTaXRk3nZBSUN3t3t3LMVieur7WpO+pSmjI8K7KnLG7HVgY7p0S1R6dBrhNKRFrePwBT5Sb6wopg9KuN6VMYzHT1MAouCOSrEFxyKJRGGFMmmfI/Tb/AyAnQyeSKZRqDT3OrAvQUyY8ADONFJ7M5RyZKgw6k0WgIAF8gA==`,
    perfect:56,
    index: 24
  },
  25: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEbgIDmAFnCEcRAO6pHMATgFNhqBjToMmbDl178QI4iAm16DDJPo5GAIwgAPVbu3SDxtVM1ndS4cQAOMAM4uTW9dOXO3HszZedgC2CIKCEIKc4MIAZnAAtNx8/kGMoeGR0YIs7EkKqda6nlKmabYlOpX4gaXVdi7U4mV1AfgAvkA===`,
    perfect:32,
    index: 25
  },
  26: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0BmAXRxABN4Z0MrkBXMMIjcBAcwAs4RiSIB3VYiwBOAUxGpGtepLoMcGKXKZhWHLqT4CQokiBnTGTAG4QEuxiGFjkABxgBne3vmKLAWwRChEIeqGq4AFoaG2cFWQsdO0cwkBMzPUNXFwiU6XkQDy8fdTARADMgnn4w5PD08oZDONNzDKiHJwsAIwgAD14YeljmmBJWjq6wHvbO7osrcWimjPjzJNTK909vX2I8wuDQ/SVMlZzif3YizVLF12q52MnbRpHB8YyBseGW0aHYhpiLK4IFir22TW4AKJxKOws9hoEjSSjKFwIAF8gA===`,
    perfect:21,
    index: 26
  },
  27: {
    string:`N4IgNg9gxghgLgSwgOxALgNoGYA0WC6OIAJvDOhpcgK5hiEY10NP06O1sfPusuf4G3Ln14CxPYf0l8hoqRK4gAtggBOaiGpBEwAUwBmcALTUADiGkjxGEACMIADwDuMOpbk354BAHMAFnA6IGp+gcG+anp6qFYMPgFBuoZJIXrEluwgkdHIZjAAzgWZtgXUsZ6SKuqa2slGxsQQzrFZDi5uYCXVGlrBoYmmFvGqvXUhYSZNLSXeOTH5RR7sCrZ2MMTtru7xUcSLxXGKR1KV1jJelxfX9IIAvkA==`,
    perfect:94,
    index: 27
  },
  28: {
    string:`N4IgNg9gxghgLgSwgOxALgNoEYA0AGAXRxABN4Z0MqQAjGEgBwgCc4YwQiNkBXMMLr35cQAWwTNmLEMTABTAGZwAtDwacc3PgM0hmcxjADORjRhBGeqAly3DNQnefGTpxZggDmACxVqzYhJSzDLgiiokEADu1g7agvG6NBAAHlHsHDaa5mBevqEePnChnvpysXZOga4h7nl+6gn2lU1VdCTJaRmctiAAbhAIJAEDQyODwyKjk7rTAe2d6fxmjlnUuUUF9QUGK4ktuvqGJnvNq3HCtucHN9e09IvdIo/Lzw+pS5m9TKzsMhh4fBrarBULyJTKSIxU5VFygupFSHRCr3DofJ4XJyrGwAXyAA==`,
    perfect:59,
    index: 28
  },
  29: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEbgIDmAFnCEcRAO6pHMATgFNhqBjTr4GGSfRyMARhAAeICbXoy5DEMrUap2zbrAt2nEr34gRxdQp3GpCkAE9hdXgAcYAZz8HWRNneWCXcK0FSN0/anFHEPwAXyA===`,
    perfect:6,
    index: 29
  },
  30: {
    string:`N4IgNg9gxghgLgSwgOxALgNoCYA0BmAXRxABN4Z0MrkBXMMIjEABwgCc4YwQcMAGfAUYgAbhAQkQw1hy49+OAIxDeteozUNeo8ZJXU6WpmAQBzABZweINmcvXTbAKZPUwgLYI2bdtdsW4AFoaZiltEwDrEggAd1RiZz1VQw0U5PVGDE1U9W1Pb18EuyDouLCstKZ8nzZrMCcAMxLYt3SjbMzstuEATyd6WOYYAGdh8q6K3MmjHQkpTsrZpKZhmlamMTmc9sXNvSEAXyA`,
    perfect:39,
    index: 30
  },
  31: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10NP06O1sfPusPgIA5gAs4IIsQgB3VEUEAnAKaLULTvgbcufXut08tagyABGEAB4h+ZyxvaH2AkWKLyho8SAXLV+riABbBHl5CHlPN2cAWmoABytHIJCwzzBFADM4GPj+JWJYmABnQoSHDFMYYhspGDorTR1ysHcXEEiPV0ViUsDg0PCiNMyoyRkepP6IlpHpXzKQAE9FOmkC4p6TSurasA2tixq6uyo9Msbz068lFTWSo39NqoOd+vsLg3ftS+2jx0LqOZ8BqnT78ABuEAQ3XuML8MI0AF8gA==`,
    perfect:58,
    index: 31
  },
  32: {
    string:`N4IgNg9gxghgLgSwgOxALgNoGYA0AWAXRxABN4Z0MqQA3CBEkIjW+x55AVzDGdYaY4WAIxgkADhABOcGGEEs6AvkvbNFbBf3ZCuPPgFsEUqdJDEwAUwBmcALSdxWoybPEpCAOYALe4+fGplLmIB4+fk4c3LzqIMIQAB4A7nLyUfq60XySMnLmGABMOACsBOm8QiA5svJCRVhlmfqxAM6cqHwAnpY8EEniMC0tCnoVLC5BIVa2diR9HU1jIBNuoV6+s/MjWbHxyanbGRijfGDrcCH+xJ5SlpYLLNV5QgAM+I0sZ+GXTu6WOscdgQAL5AA`,
    perfect:23,
    index: `32v2`
  },
  33: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10PgIDmAFnCEcRAO6oibAE4BTMahZh2XHiQFCQ44iHwNGtejk3MdTbbvoaDLAM5wI4nqf1aGpjSABuEBKpav3au3qPqdDBc3Dx1g7wd7MIBPMToBAAcYMzM1Jy9QoIyffzCzail1AF8gA===`,
    perfect:4,
    index: 33
  },
  34: {
    string:`N4IgJghgLhIFwG0kDsCuAbdBdANAtmuCI6AlgOYAWUIO4A9gO7K0jkBOAppy0SRdVZgmLOlzAg+AN3qkJWIvgzY8IAEb0AHpLwEVSwruUK8xALal27eu1bpOAMygBaVAAcdxAM5QbnWnpEgUaGxDJykorBBvrR0SAWVjas7AIu7pGm8eHyqlKc7G4QXl6eIDll+YXFpSYoxnmyueaW1rZ09k7OwsxllDZFJWWJbSlp3SKZSAmtyR2OLj28IfogAJ6cmEyDtar91UN8Xqi8JiT0AMbQpPQsiAAMOPdYAL5AA=`,
    perfect:11,
    index: '34v2'
  },
  35: {
    string:`N4IgNg9gxghgLgSwgOxALgNoGYA0AmAXRxABN4Z0MqQAjCADwHcYwwQiNaHnX2dO6TFmw5chvUYJ4j+Y6XwzIArq1FgEAcwAWcEMRIRGqYhoBOAU3OoOy1R07rtu4qc069IM5euyvVgA4wAM5BCrZgogCe5qyGgSFhKhGyNDAkUsKJqikMWRH24TZJRdmKxSlpGRI54jIC3JmiQUo+9bXsBeVlpYU18iXJDm7OIK5OHn6tvW39/IX2IP4QpnAsehgALDgAHAQD+3NdINGxjPGhB92D04vLq2z8WwAMe509XTdBcMvmetP/HyOAFsEKZTMsPGMdABaJT+PJ7fhDcYuYaQ8wkBGHd6lUYY85Yq6XeZIgG4kFgiHEMDmABmcGhBiMhLJ12BoPBpkhw0ZhimxTebJxQsG4DRxDh6MxxMBwteAF8gA===`,
    perfect:59,
    index: 35
  },
  36: {
    string:`N4IgNg9gxghgLgSwgOxALgNoGYA0AmAXRxABN4Z0MrwEBzACzhGJIgHdVjaAnAU19REMyAK5gwQmgybEwvAGYyQfEiEkBbBN24RuzcArgBaEQAc1OYWImWQp3XBhhm2HAAYCQ0eM+WrPy28bDBBNbV19bjpGE3Mva0kAZzhdXmYgyQBPXnF2UxhExIsQxJFBIRCwnT1ZQyNWDmLQrWr9OUVYpuzctnzCpqqI4ijpevZBQITJgJCefmQ+ot9qe25HZ0s3HABWZYzp4ObwmuVo4zMmgCMYEkuIAA82J2dJO8fn4oyKkFKJkJVFlcbm8nuIgbcHqCXgd4jMvn4jq1ah0LrDDoMTu1jA0/iBupBegUljDbBjImcxo00ctKi0hgYOjjPlN/Oi6Zi6kzqSSQgA3CAIVSeAgAXyAA==`,
    perfect:44,
    index: 36
    
  }, 
  37: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10PgIDmAFnCEdQA48QbAE4BTUagZN6ORrXoM5zWdKny1ypQtlaNMjCGEQ48UQEYAHFhB7bi1SvWPND3YpAA3CAmI3Zn718WACMYYmCIAA8Adxg6PwMAZ2pJfy8fG3snXWd9V1UszVZObiJhdi5BEXFUgyMTOHMrBJAAWwRhI2FBMFEAMzgAWn4Egp187ImXdUK8yfnp5nx8AF8gA`,
    perfect:24,
    index: 37
  },
  38: {
    string:`N4IgNg9gxghgLgSwgOxALgNoGYA0AWAXRxABN4Z0MrkBXMMIjEABwgCc4YwQdscAmAo1r1G4BAHMAFnB6kIAd1TEJbAKZrUwug0YYRDXiDYROcNQEYAHAAYQYgEYQAHvaMBbBGxNs5YNQBmcAC0NMxu+jpCvJGiRk6u2nFMnt7sfoEhYREG0VQgAM40Wry5RqwcXDwYNjgWeWWxugQAvkA==`,
    perfect:36,
    index: 38
  },
  39: {
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEYgBOEc8ApgIwAcWIDNOgNr0cGQaPEjhQhlKFiQAWwRMWTEETDsAZnAC01AA78xEhuAQBzABZxNIYw6tN27VBbDW7Dp0VfEpvKS5nIgAJ7sdBAA7kYwAM4JQeaKKmoQGlq6Bk4WLGxwXLwp0mZlwfhhCdQeipHRcYnJMpLKquoOTN65JvmsHDx8rSNhDZBNSaUKleUz7RlZzD2GfXMh0nKpszvbexWh+AC+QA=`,
    perfect:78,
    index: 39
  },
  40: {
    string:`N4IgNg9gxghgLgSwgOxALgNoCYA0WC6OIAJvDOhpSAM4CuqhGIARjMcxAB4DuMYYIRslr8hIsGNE4MwqTPGMQAWwQAnVRFUgiqhAHMAFnAC0xCNwaMmHHnwGKw+o9pLnURPaoCmXhtJZcvPyC0rISoQoRcmGSElYxUeHy0ZHJSQlpsfjxqRl5qSAacPBeAJwADCGZiVk5KfVJhRDFcGWVikUlAIwAHO3+na1YAOz91Zl16bnTck0tXiNj+Q3Z0uPLUys12xNrIABuEAjEVcpqGlpEYF4AZia0AA5VG1k7GWfqmi7Xd6ZugtkAL5AA===`,
    perfect:44,
    index: 40
  },
  41:{
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10NP06O1sfPsgCeAUzoQA7gAcYAZ0kgGISdVT4G3LqxacNPVVq78hkcVJnL2O9ut4BbBACdbEWyCJgBAMzgBaamNm8HcPACAJxYfhggNvaOzuDuXj7hljoq4AgA5gAWcLG2Gdmx6bYCAkoWmv4QgXAhYXIARjDEYo6BYOEgAUEATADsdbxg+Tku8bkCxB0ttm3OGADMOPPKKsnJkXYOTqMe3r5yXTV9AxFRW7Guu4m6N6sVEYcCAIwAHCdr9+uPr++ad9ofAGfYFA5jKAC+QA===`,
    perfect: 45,
    index: 41
  },
  42: {
    string:`N4IgNg9gxghgLgSwgOxALgNoCYA0WC6OIAJvDOhpSALYIBOdEdIRYApgGZwC0ArgA4hCGZLzBhho8ZLEScGEACMYxRRAAeAdxjih8mvUbMidBAHMAFjwF6Rs/MLvT9tBkxbhO1wTOdO5CgDOcExsLFIBEb4Sjkoqauq2Bm7GnlzcxBCaqNG5LobuJuZWfD75KR7s6ZnZtlGxrkaVXhlZOfJRHfZdfp3+wuDFcB41qCZsxEKxgbztCvxMcDosGABsOKsO+sqqGtq6AzsJ+2BJYEMeNkRmdGxsc0p7OqcDjEtwbACMABwADFPyBQATzY4iy/BggUCSSOTwO2zhLx6kW6Cje8DYWAA7P9co4+skmqwWqM6qi+gSbndkBCoUkFnQlqd5AAWHCfBwOAC+QA==`,
    perfect:61,
    index: 42
  },
  43:{
    string:"N4IgNg9gxghgLgSwgOxALgNoAYA0WC6OIAJvDOhpcgK5hiEY10PgIDmAFnCEWAKYAzbkQBOfYiAZN6ODCABGMYvIgAPAO4w6k2dKm0ZjA/uYMjzXccsXzhkADcICCSbsiIceHwBMAdiw6cmIC/FBw9nxggXpmetZugqFwHBAi0VZyjs7pNnG2rvixGXklGQ5OLvEFVVVm5dksWZVyispqmtqNFYH1zb09AM7UqF0Nsv2Fsvk107OlucWLplN5IO6ecHwAnAEswUkRUSwAtggi7mm8gnAAtNQADj2n56k8a+xcd497iXxhKWk9h4vDscoYYisluCodU5jDapCFkjocjYfMUfRCgBfIA==",
    perfect:50,
    index: 43
  },
  44:{
    string:'N4IgNg9gxghgLgSwgOxALgNoCYA0BWAXRxABN4Z0MrkBXMMIjW+x5hnJu9zljt1rgN49u/PoMYih3cAgDmACzghiJCAHdUxOQCcApntSMQAWwQ6dEHSpA75SgLQ0ADiGP6AZmD1Q4Cq27iwrZ6Xj5wAG56YIEYpuaW1sTeHnBOrsZg9sqqGlohJLFiUpLFxSFhvlEx0u4QcPB6WADsAAxFghy29Y0AnO21XZ7evv7WgyUcUkGinXFmFgHEdoppapodwQCe0ZDqzjAAzoebMguJNilreacT/KVzZY9zIDv0GgfHsSCHNEZdbz2nxOd2ewnuBAAvkA',
    perfect:48,
    index: 44
  },
  45:{
    string:'N4IgNg9gxghgLgSwgOxALgNoFYA0BGAXRxABN4Z0MqQBbBAJ3onpGLAFMAzOAWgFcADiCIYQAIxgkxEAB7CcoiSQHM4MMPIzI+YMCPAIA5gAs4rUhADuqYvXYlNIFfTUaFABhwAmAiO279ADcIBAcgkLCFJ1V1Vgw8HAAOXyi6RmZzeiNTfiEU6jSmFjYuXhIrVD8dPSilaRlLdQ0qgNSGIszs3kFNfxqtapb+6JdYjxwATnzxWUbdXsGRAdbRQoyS7lyFlZA7ZRgAZwPHPYFD46HL2sl6ueaFPqvlvSXHtvTi8FKecutt4dO50czlccQAbDgAMzTQFHf5PN6rdrrXZdH4VeGvQYPbHPfSGOzsZBnOH6MBdcwcbjmAnsImONafLImbp5HE7OycDhQODGDL6RmdFnov76JhqODsPCJdyYhSiACe7F0VhJF3Zw0FtjRv0qUXF8ClMvhUVpRLVDORnypZQxT1oVsp311JwgEqNssuSxABz4esVysglgt+jqsyajiUINioZu4fmAsdG1toqiBzgzHYrEROdxiIdHyFORdvgIAF8gA===',
    perfect:126,
    index: '45v2'
  },
  46:{
    string:`N4IgNg9gxghgLgSwgOxALgNoEYA0BmAXRxABN4Z0MqQA3CBEkIjW+x58BAcwAs4RiAJ258BILoICmk1BzoMmOFvPbNlbRRmQBXMGGY69B3fqWsFBNYdNaTHKQDMwkqHBqSwm68aNqQAIwgADwB3GD1NAOCwiJ8bKNDwzzjLJVsjJW8zQQg4eEkAJgB2AAYvO0y7PxVImpTKjPULao05VrMAZ21ZBvi6ywBfIA===`,
    perfect:16,
    index: 46
  },
  47:{
    string:'N4IgNg9gxghgLgSwgOxALgNoEYA0BmAXRxABN4Z0MrkBXMMIjW+xkANwgRJEeYZyZ1+glgL68hBRiOEgAtggBOiiIpDFFCAOYALOAFoaABx4CQAIxglzEAB4B3GPVMyJojOG171ITbrg+igCm3KwqcPBBWAAcAAwu4tLiYpJmHFwJqa4p7vJKKmoaXgbGmSxJWb4QEXBBAJzxrOmhObLhkQ0uvkEAZmBBUHBsQWBlwokC2R7BfQNDI2Nu45WW1naOzqxgxYE7xFrBQahLUpPJUyAAznCqQern592zg8OjYdWRAEwA7I2tJxV3I8bA4nG9/hCPCCNuCLtCwTxActcqt4ZszMESEYYJdLotISAAJ4jSD2bG4rqXGjHKQAXyAA=',
    perfect:85,
    index:47
  },
  48:{
    string:'N4IgJghgLhIFwG0kgG4HsCWYQF0A0Cqm2+h6WuBRFp1JV59hARhGAA5oBOMANpYQAW3dhADOYgSGFdREgQDsArr160ZcyepHitVMVG4BTEHmWraXIx11SAthi5dupkFwwBzQVAC0S9rikLGycPBD82rK2pOZqVKF8pggAHHgAjADMOLSMUrk5xHmFMSpxCLG0Dk4ueCC8RgBmvv5SrGDMaAAeiqW0bR2dAO7hEfHciQRpeAAM2UEgVc5crvVNPmBogwpSVjbyJRZUzjBQRmnJ0z2H5b0EFXe3N9f3hAbGpi8Ljkuu7l7NAQKNAYxQeFnm+RBwKeZU+x2gRgAnJcgUw6EVoSABsNVFcyl9qstaqtfBstlI3lYPo8CT9an9vH5AWD8QlwklEekAExzAhkUH86GffpdPGoilKbZ9ELjdl9Lo40Ywg74lBGKL7BjqzQYtH5CEC9Eq40s8WVb41OqNAFSDTRU1UXiebyuMnbenWHaNeoAYygMjFDuVVGxI0CfKNUL1hvhp2RuoTOW19sFTBe6Zpao1ekIsaRKKDFQNmMhqcDwbLJortMtJKZrVFVZrRLczptVc++oji1r1vrtDZ/AI0zwADZslQ7ZrCD2Wwz24XHsK2KHcR2aSLuk2nf9XC1ah4rEYpWMwkOEFMsubCb82/35oejMedWao4m36/Kx/v1/f6hk9OICDkkGTpAALBOLCNlq2bhsgs4rH2bq2jogHAZMI5pDykQvqeEwIGBeAAOyQdIqE5mRsE4SmlG4UI5FSAAnkYqibHRza3v86ybCehDoReI7YSGK4KmG150q2XHIbydRoD60AYGg2yIFyeA8gAvkAA==',
    perfect:167,
    index:48
  },
  49:{
    string:'N4IgNg9gxghgLgSwgOxALgNoBYA0BGAXRxABN4Z0MrkBXMMIjW+x5hnDEAIwgA8B3GPRCs6DRkzGiWHNo259Bw6eI6cwCAOYALOCGIAnLbv0hNBgKYXUK2xwUChYEbKkS59gLYIDBiAdMjHTgAWhoABxdOHk8uU3MrG3seR2VXFncpdPZJGWjFJyi5TLyPXJyHJWd5AGcaGwICAF8gA=',
    perfect:29,
    index:49
  },
  50:{
    string:`N4IgNg9gxghgLgSwgOxALgNoGYA0BGAXRxABN4Z0MrkBXMMIjW+x8BAcwAs4RiSIA7qmLsATgFNxqVmA7depQcJBjJ0nEzoMNzBo00sdWxrpPGjhg3o0YQAIwgAPATHogzl0xe1WP1qiAAtgiiohCiCmDiAGZwALQ0AA7u3n6sYXDw4ngAHAAMKbbBoeGRMfFJhab6Xr6p9XW+NeaN9k4ubqwOgXYKqlKFbc6uYFXG+kEhYRHEUbFx/EJjni0gAM406o3VBAC+QA`,
    perfect:14,
    index:50
  },
  51:{
    string:`N4IgNg9gxghgLgSwgOxALgNoCYA0AGAXRxABN4Z0MqQA3CBEkIjW+x51hpnFur55AFcwYAcNE8hIsdOYYpE+eI4AjCAFsVIYgHMATgFMDqGYoWnVEAB4B3GCO4sAzoJNzzk5T3AIdACzhtUggbVF1DY0cPFnUEPT0IPSC9XwCAWkEAByivXjZHTnZ3XJBY+MSgsAMAMzg0khCTT2lvMoSk4hT/OobQnJalAcKCviKeQcUQNVt7MAK2iuIq2ozsi2azEtGR/IJigeip6zsHdYmz4Y5tvfHou9z7g63d72u9gF8gA=`,
    perfect:119,
    index:51
  },
  52:{
    string:`N4IgNg9gxghgLgSwgOxALgNoGYA0AmAXRxABN4Z0MqQBbBAJ3onpGLAFMAzOAWgFcADiCIZkfMGBFiJU8ZJwZaDJi2L0EAcwAWvQcIXTJIxQDd29ATADOV/aLmyZBh86f2ZxkGYvXbj+YpWcMzsrIYiSozMrCDq2rwkEADuqP5pnnRRquBcCcmpCuCaOjEc3DEa9OzsBe4BRfExcSVq7CR2kSpNxXkpduGeJhAI7RGZXWy5/EIRAEYQNLMxAJ7sEsn9Loqr60mWNpseCqbDo4XzAB5JMBIdl9e3cxBXN2B3zw9vEUMjwoOnHSsfFq4VcAVBJ1+BGhAF8gA==`,
    perfect:23,
    index:"true52"
  },
  53:{
    string:`N4IgJghgLhIFwG0kgM4FcB2IC6AaBIAFgPYBOADhCijvkWZdbQSRVTXiw+8yAOakApoIyMOdVmOYY0AG1nZOBAG6C2TTiGXEAlmF6ydfQlBC5wxAO5ZzA4Vk4z5juQvxO3CDy+dKtaqR9Pb3dXTUNjU3MwKxsQIX0gpNDffBUAnmSvMJTgnOznXKS/VXVxFV1EugBbHVJSMjMQWUEAMygAWhjraXyQACNiav6mgE9BeSteQYAPSwh5XsKChT87EUC6bT0lvOWB4jmF2V2s7xKMjS3K06KauobSJtIjEy7Y3m2qip3NL5wlCEVmd8kCtDc/hDrr9FOZZMQAMbQHTELCIABMuAAzNgAL5AA===`,
    perfect:46,
    index:52
  },
  54:{
    string:`N4IgJghgLhIFwG0kDsCuAbdBdANAtmu+G2eBpxhZJR5WRlFdeIARgPYC2rIOIAngFNM7AO4haNalQQgATuxhRBATgAME6dgYgAzqmSbGkmWwhgADuzkx0R5rIAW1ixF26jIdAEsA5o6hecDFDPl85QUFDejxjLRMKEAA3QTlXd3spOOMGBwd5RWhVDQTS+PjcrLysrz8AoNQLIIiwTJl8qxsIOzwAJhwAZnoYr3YAY2hvdkNEAEYcWawAXyA`,
    perfect:25,
    index:53
  },
  55:{
    string:`N4IgJghgLhIFwG0kDsCuAbdBdANAtmu+G2eBpxheIAbgPYCWYIRIADnQE4zoh4AcOfliLlRJVvSYtqAZ1TIWRShRABbBp05c+IdAFMAZlAC0qNjITrN2zroPGzF1hq06ceo6fOWx1KcziVCpBFH4hyuHh7Fw8fAgADDgAbCJkEunBIAAWXGwQsrK+GVautvZeJmB0AO6KoawARnRqjboA5pz6+vWZ2JElINowUPoAjPwJlkN0I+OT08PQ81MN/oyBfS427kMM7dneztRlu5z7h07FwWIDNyVRD4MB12FP9x/9eFYvkhvTNH0nHyhQB/z+0ghmx+4PWkP8QJBRShAMRBWRylosJh8KssigXH0ui60KxuLJpN+W2pIRpt2+FLB5I43AgvDwACYcBy0jjKdjGWtSjs7B4HEdps1WroAJ76TC1RazZYTVbUZoADxqbN4vL5TP55Kp+pRQusblFnkcPlYLLieAA7NzeTM5qrXnrBXDDT6DX6zadLeKrmalqN3Q1McavSbvf640LougLlBdD4PJ1ur1aRFcHo6ABjaAMOiKRBcnkAXyAA=`,
    perfect:99,
    index:54
  },
  56:{
    string:`N4IgJghgLhIFwG0kgG4HsCWYQF0A0CIANhgOYAWUIe4aA7gHbUikBOApu0/oelrgVSZsPEAFsMrVmlbMi7AGZQAtAFcADgMISpM5qzKU1m0SQpUaYekxptO3QXxE9ewranat1EAM4/3Tu5mlMxWjPrsIgQMqkREPDFxCbHx0Sk4LkL8oiie3n4BbslJaSUIianl6aXxLhWiAEZoYg0RUVVl9YINEGDqMjBEWl2ETQAew+mZgTl5vv45RTXFlSNrUwSu2Y5zBYvbhMEWIBptk53VHasbyDOC/ayD1AgAzHgALBmOS1vt4pLSWQ0eRKZRhBzaAF6GgGcxg6zuHyqCFZZz4YhoADG0AwaCYiDeAAYcABfIA`,
    perfect:7,
    index:55
  },
  57:{
    string:`N4IgNg9gxghgLgSwgOxALgNoEYA0WC6OIAJvDOhpSAG4QLEiEbICuYYTIAtggE68ReIImACmAMzgBaFgAdGOZmw6KQAC0GyYAZ20KMIAEYxiswXBhh96zTr2cNvLbus9+g4SF4IA5muly1mC+/p7EEADuqEQ+vKKiqJxmvBZWigDMOAAs+LmKSuxMrIWKxSoF5WVFypyGEFyGnnEM1SUVrZU1TO2q2nCCop6x8YmqbgJCIhLS4VHWjs72qgt2+lXLti4Om0sG4x5E3n4zkaMGAJ6i7JGL1nUAHhGWVnmU6z0GD0/s1rT01slUsIMAAGPAg17vGh0FqqP6wgzw6zaFhnaH/V6ImFBEJwJq4oZxBIA8yWYFggCsr3RCJpOOOnkCh1EtKRnDZcOx7K5nIxuQAvkA===`,
    perfect:37,
    index:56
  },
  58:{
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0BmAXRxABN4Z0MrkBXMMIjW+x5hnJu9zljt1ro3AIA5gAs4IYiQgB3VMQBOAUxIgBvHg0ZahYURKmk5CkCJXLUG7iABGMEgAcIiuDDDqOIALYJFilyNFAzgAWhpHTwwfPwDFIzBlADMwmXko/j5BLM1+HUzogGc4F2UpAors3S9bCG9bINUMqsrNGP9ApRDQtKt8loHcqva4hOSwiKiQADcIBDVrIVn5qeWFrzX1frbnV3cpDABGfAJFnO4CswtkRxhCwua2gE9lejlb+6mxFw+HoUKaH0CABfIA=`,
    index:57,
    perfect:126,
  },
  59:{
    string:`N4IgNg9gxghgLgSwgOxALgNoBYA0BWAXRxABN4Z0MqQA3CBEkIjW+x5kAWwQCceIeIYmACmAMzgBaAK4AHJjhayBcGGCEYAbDgDMBZsmlgwBoycWHjpqxbPXzLbnwFCQPBAHMAFlLkKWdAxMzI68/ILC4r7yHF4CsjAAzon+IIlwAiKuPCLsiiBxPAnJqYXFKbHxSRX5ZdWlVSUcAEYQnM2uAJ4ixhAA7v6WDkMcTuHZnj4yMSEgHjkiyOWpgXkBIkX19tu2Niyt7a7zIouDdvmtAB59auo765tN+TQby/qKLInSqByrZ3sjXbDc6hZwRcBRSQkfo/IH3QGfDI5bK5f4mWZ/X5sNEcMCTOATbwE4jHU6jMIuYjuIlQmE4/JjSkQiTTelKFRqDTaQj3WivLbPflNDHYrFBXlXG7GNkIhEgSW3GUguWM8HUqbQvo/EXi56ihkU8GiFma2HsniqdSKAAMuneGDlzRgJGUFs5LTaHRJCzNBUaNQdypBXENhI1dLF7H0AF8gA`,
    index:58,
    perfect:62,
  },  
  60:{
    string:`N4IgNg9gxghgLgSwgOxALgNoAYA0BGAJgF0cQATeGdDGkANwgTJBIxAFsEAnLiLkUmACmAMzgBaAK4AHFjgzJJYMKw7de/UlwQBzABYSZctgybH6jZqul84MMAIwBOHAHYiq01fmLlrXyo+SoEmlsYBnmEe8grBqpw8fAIg2voSZBAA7qiRZp5CXNIwAM7F5l7lUfIgAEYQAB6Z9g653rF+1bx2cEJ4ABxY4XHVFf7DoXmsbAkaycJiUrJjHRNt9AVFpZV5I1Vsdew1yQCeQspZ220RQSvXq+Y1MGQ2XHYtNypTd3cWO9PqSUEokMSw+yxC33GkNuUNhML8XzhIV+VyRqi68CETkG4NxnQg3SxOLBJPaELRiPhyNGpJ+NLYp3OmU2ZTx9zZKMuQyp0Ro0Ope35qj0fBZ5jAugMySMWiEawlaWlslIOi4QiEOWqIsKJVZpJA2rF8QBmnAwMW3ORM0BKUlIJYU1qEEOyVV6s1ZNa5mtpvm6SyHrpexALzejgI+GI1ls9kceDw+DwvM5bKFtLilPJKxT6ez9JzJg2uq5qfGakSvvNGWyluNFeSqQM4mrOUddUazVruz+BaDfx+j2eMYc8gThGT9J+PrmVYDXc91XbTWUDpiafZ1WnQIWRg5huLpez+62HK3trSzbnHIOR1IjMgmVrjvvWSN+sHS87h+Rx71DLOD5vgubBqiIwhQHAdBnPOA5PKGsbfrywEFihZ5+peNZ7qKB65sixRwHwQgCOuU4mjOO6gsBESOsUkgeihk5ot2qJ5sGCpSqQMogG6GolrhiEeAAvkAA===`,
    index:59,
    perfect:344,
  },
  1001: {
    string:`N4IgNg9gxghgLgSwgOxALgNoEYA0BmAXRxABN4Z0MqQAjCADxCI1oaZw2QFcwxnve/Hnw4CRnYc1aMpdGcxZz2EwaMlrVLMAgDmACzghiJCAHdUxHQCcApjdRDNYx+OlMFzja6Wy2L3zIcbv5eBB7qKt5+oUE+MYrRkf7hThGeCYFJsYnpuZIp4unB8cVZGcp5ggUh5QEVEaWllXwKTWntmiAAzlwO8c11YRy12ZkD/R1RmcFhAL5AA=`,
    perfect:25,
    index: 1001
  },
  'custom': {
    string:tmp.store,
    perfect:NaN,
    index:-1
  },
}
