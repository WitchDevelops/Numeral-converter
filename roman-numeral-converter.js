class ConvertRoman {
    constructor(arabicNum) {
      this.arabicNum = arabicNum;
      this.romanNum = "";
    }
    romanConverter(romanSymbol, romanValue) {
      while(this.arabicNum >= romanValue) {
        this.romanNum += romanSymbol;
        this.arabicNum -= romanValue;
      }
    }
  }
  
  function convertToRoman(num) {
    let userInput = document.getElementById("user-input").value;
    let converter = new ConvertRoman(num);
    num = userInput;
    
    converter.romanConverter("M", 1000);
    converter.romanConverter("CM", 900);
    converter.romanConverter("D", 500);
    converter.romanConverter("CD", 400);
    converter.romanConverter("C", 100);
    converter.romanConverter("XC", 90);
    converter.romanConverter("L", 50);
    converter.romanConverter("XL", 40);
    converter.romanConverter("X", 10);
    converter.romanConverter("IX", 9);
    converter.romanConverter("V", 5);
    converter.romanConverter("IV", 4);
    converter.romanConverter("I", 1);
    // converter.romanNum;
    let result = document.getElementById("answer");
    result.innerHTML = `${userInput} in arabic is ${converter.romanNum} in roman.`;
    console.log(convertToRoman(userInput));
    return converter.romanNum;
  }
  
  