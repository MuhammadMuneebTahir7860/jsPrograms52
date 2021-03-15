const checkUppercaseOrLowerCase= () =>{
    var textValue=document.getElementById("textValue").value;
    if(textValue.toLowerCase()==textValue){
        document.getElementById("textOutput").innerHTML=`${textValue} is Lower Case Letter`;
    }
    else if(textValue.toUpperCase()==textValue){
        document.getElementById("textOutput").innerHTML=`${textValue} is Upper Case Letter`;
    }
}
const checkDay = () =>{
    let weekNumberInput=document.getElementById("weekNumberInput").value;
    var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuarday"];
        if(weekNumberInput<=7 && weekNumberInput>=1){
             document.getElementById("dayOutput").innerHTML=`Today is ${dayNames[weekNumberInput-1]}`;
        }
        else{
            document.getElementById("dayOutput").innerHTML="Invalid Input....Enter Number Between 1 to 7";
        }
    }
const printMonathDays = () =>{
    let monthInput=document.getElementById("monthInput").value;
    if(monthInput==1 || monthInput==3 || monthInput==5 || monthInput==7 || monthInput==8 || monthInput==10 || monthInput==12){
        document.getElementById("monthDaysOutput").innerHTML="This Month Have 31 Days";
    }
    else if(monthInput== 4 || monthInput==6 || monthInput==9 || monthInput==11){
        document.getElementById("monthDaysOutput").innerHTML="This month have 30 days";
    }
    else if(monthInput==2){
        document.getElementById("monthDaysOutput").innerHTML="This month have 28 days";
    }
    else{
        document.getElementById("monthDaysOutput").innerHTML="You Enter Wrong Number of Month";
    }
}

const calaculateNotes= () =>{
    let amountInput=document.getElementById("amountInput").value;
    var note5000=0;
    var note1000=0;
    var note500=0;
    var note100=0;
    var note50=0;
    var note20=0;
    var note10=0;
    var note5=0;
    var note2=0;
    var note1=0;
    if(amountInput>=5000){
        note5000=parseInt(amountInput/5000);
        amountInput=amountInput-(note5000*5000);
    }
    if(amountInput>=1000){
        note1000=parseInt(amountInput/1000);
        amountInput=amountInput-(note1000*1000);
    }
    if(amountInput>=500){
         note500=parseInt(amountInput/500);
        amountInput=amountInput-(note500*500);
    }
    if(amountInput>=100){
        note100=parseInt(amountInput/100);
        amountInput=amountInput-(note100*100);
    }
    if(amountInput>=50){
        note50=parseInt(amountInput/50);
        amountInput=amountInput-(note50*50);
    }
    if(amountInput>=20){
        note20=parseInt(amountInput/20);
        amountInput=amountInput-(note20*20);
    }
    if(amountInput>=10){
        note10=parseInt(amountInput/10);
        amountInput=amountInput-(note10*10);
    }
    if(amountInput>=5){
        note5=parseInt(amountInput/5);
        amountInput=amountInput-(note5*5);
    }
    if(amountInput>=2){
        note2=parseInt(amountInput/2);
        amountInput=amountInput-(note2*2);
    }
    if(amountInput>=1){
        note1=parseInt(amountInput/1);
        amountInput=amountInput-(note1*1);
    }
    var obj={1:note1,2:note2,5:note5,10:note10,20:note20,50:note50,100:note100,500:note500,1000:note1000,5000:note5000};
    var myJson=JSON.stringify(obj);
    document.getElementById("notesOutput").innerHTML=myJson;
}

const checkTriangleOrNot = () =>{
    let firstAngle=document.getElementById("firstAngle").value;
    let secondAngle=document.getElementById("secondAngle").value;
    let thirdAngle=document.getElementById("thirdAngle").value;
    let sumAngle=parseInt(firstAngle)+parseInt(secondAngle)+parseInt(thirdAngle);
    if(sumAngle==180 && firstAngle>0 && secondAngle>0 && thirdAngle>0){
        document.getElementById("triangleOutput").innerHTML="Triangle is Valid";
    }
    else{
        document.getElementById("triangleOutput").innerHTML="Triangle is Not Valid";
    }
}
const checkTriangleOrNotBySides = () =>{
    let sidesFirstAngle=parseInt(document.getElementById("sidesFirstAngle").value);
    let sidesSecondAngle=parseInt(document.getElementById("sidesSecondAngle").value);
    let sidesThirdAngle=parseInt(document.getElementById("sidesThirdAngle").value);
    if(sidesFirstAngle+sidesSecondAngle>=sidesThirdAngle){
        document.getElementById("sidesTriangleOutput").innerHTML="Triangle is Valid";
    }
    else{
        document.getElementById("sidesTriangleOutput").innerHTML="Triangle is not Valid";
    }
}

const checkEqualOrNot = () =>{
    var firstSideInput=document.getElementById("firstSideInput").value;
    var secondSideInput=document.getElementById("secondSideInput").value;
    var thirdSideInput=document.getElementById("thirdSideInput").value;
    if(firstSideInput==secondSideInput && secondSideInput==thirdSideInput){
        document.getElementById("equilateralOutput").innerHTML="Triangle is Equilateral";
    }
    else if(firstSideInput==secondSideInput || firstSideInput==thirdSideInput || secondSideInput==thirdSideInput){ 
        document.getElementById("equilateralOutput").innerHTML="Triangle is Iscosceles";
    }
    else{
        document.getElementById("equilateralOutput").innerHTML="Triangle is Scalene";
    }
}

const findRoots = () =>{
    var firstNumber=document.getElementById("firstNumber").value;
    var secondNumber=document.getElementById("secondNumber").value;
    var thirdNumber=document.getElementById("thirdNumber").value;
    var discriminant=secondNumber*secondNumber-4*firstNumber*thirdNumber;
    let root1,root2;
    if(discriminant>0){
        root1=(-secondNumber + Math.sqrt(discriminant)) / 2 * firstNumber;
        root2=(-secondNumber - Math.sqrt(discriminant)) / 2 * firstNumber;
         document.getElementById("rootsOutput").innerHTML=`The roots of quadratic equation are ${root1} and ${root2}`;
    }
    else if(discriminant==0){
        root1=root2= -secondNumber / (2*firstNumber);
        document.getElementById("rootsOutput").innerHTML=`The roots of quadratic equation are ${root1} and ${root2}`;
    }
    else{
        let realPart=(-secondNumber / (2*firstNumber)).toFixed(2);
        let imagPart=(Math.sqrt(-discriminant) / (2*firstNumber)).toFixed(2);
        document.getElementById("rootsOutput").innerHTML=`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
    }   
}

const findProfitLoss = () =>{
    var costPrice=parseInt(document.getElementById("costPrice").value);
    var sellPrice=parseInt(document.getElementById("sellPrice").value);
    if(sellPrice==costPrice){
        document.getElementById("profitLossOutput").innerHTML="No loss Nor Profit";

    }
    else if(sellPrice>costPrice){
        var profit=sellPrice-costPrice;
        document.getElementById("profitLossOutput").innerHTML=`${profit} Rupees Profit`;
    }
    else{
        var loss=costPrice-sellPrice;
        document.getElementById("profitLossOutput").innerHTML=`${loss} Rupees Loss`;
    }
}

const searchChar = () =>{
    var searchChar=document.getElementById("searchChar").value;
    var stringInput=document.getElementById("stringInput").value;
    var search="";
    for(i=0; i<stringInput.length; i++){
        if(stringInput[i]==searchChar){
            search=search + " At Index " + i + ","
        }
     }
     document.getElementById("searchOutput").innerHTML=search;
}
const countChar = () =>{
    var stringCountInput=document.getElementById("stringCountInput").value;
    var countSearchChar=document.getElementById("countSearchChar").value;
    var count=0;
    for(i=0; i<stringCountInput.length; i++){
        if(stringCountInput[i]==countSearchChar){
            count++;
        }
    }
    document.getElementById("countOutput").innerHTML=`Total Occurence of Character ${countSearchChar} = ${count}`;
}

const findHighFrequency = () =>{
    var str=document.getElementById("stringInputForFrequency").value;
    var max=0;
    maxChar = '';
    str.split('').forEach(function(char){
      if(str.split(char).length > max) {
          max = str.split(char).length-1;
          maxChar = char;
       }
    });
    document.getElementById("frequencyOutput").innerHTML=`Highest Frequency Character = ${maxChar}`;
}

const findlowFrequency = () =>{
    var program13=document.getElementById("program13").value;
    var object={};
    for(i=0; i<program13.length; i++){
        var array=program13[i];
        object[array]=object[array]? object[array]+1:1;
    }
    var objProp=Object.keys(object);
    var objVal=Object.values(object);
    var minVal=objVal[0];
    for(j=0; j<objVal.length; j++){
        if(objVal[j] < minVal){
            minVal=objVal[j];
            var property=objProp[j];
            var merge=`Lowest Frequency Character = ${property} Repeated = ${minVal} Times`;
        }
    }
    document.getElementById("lowFrequencyOutput").innerHTML=merge;
}

const allCharFrequency = () =>{
    var program14=document.getElementById("program14").value;
    var freqObj={};
    for(i=0; i<program14.length; i++){
        var freqArray=program14[i];
        freqObj[freqArray]=freqObj[freqArray]? freqObj[freqArray] + 1 : 1;
    }
    var documentJson=JSON.stringify(freqObj);
    document.getElementById("allCharFrequencyOutput").innerHTML=documentJson;
}

const removeFirstChar = () =>{
    var program15InputString=document.getElementById("program15InputString").value;
    var program15InputChar=document.getElementById("program15InputChar").value;
    var newString="";
    for(let i=0; i<program15InputString.length; i++){
        if(program15InputString[i]==program15InputChar){
            newString=program15InputString[i];
            var replacefirstChar=program15InputString.replace(newString,"")
        }
    }
    document.getElementById("program15Output").innerHTML=`String Passed By User = ${program15InputString} And After Deletion First Occurence of Character = ${replacefirstChar}`;
}

const removeLastChar = () =>{
    var program16InputString=document.getElementById("program16InputString").value;
    var program16InputChar=document.getElementById("program16InputChar").value;
    for(i=program16InputString.length; i>=0; i--){
        if(program16InputString[i]==program16InputChar){
            var lastChar=program16InputString[i];
            var replaceLastChar=program16InputString.splice(i,1);
            break;
        }
    }
    console.log(lastChar);
    console.log(replaceLastChar);
}
