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
    var lastIndex=program16InputString.lastIndexOf(program16InputChar);
    var newString=program16InputString.substring(0,lastIndex) + program16InputString.substring(lastIndex+1,program16InputString.length);
    document.getElementById("program16Output").innerHTML=newString;
}

const removeAllChar = () =>{
    var fullStringInput=document.getElementById("fullStringInput").value;
    var program17InputChar=document.getElementById("program17InputChar").value;
    var wordsIndex="";
    for(i=0; i<fullStringInput.length; i++){
        if(fullStringInput[i]!=program17InputChar && fullStringInput[i]!=" "){
            wordsIndex +=fullStringInput[i];
        }
        else{
            if(fullStringInput[i]==program17InputChar){
                wordsIndex = wordsIndex;
            }
            else if(fullStringInput[i]==" "){
                wordsIndex = wordsIndex + " " + fullStringInput[i];
            }
        }
    }
    document.getElementById("removeOutput").innerHTML=wordsIndex;
}
const removeAllRepeatedChar = () => {
    const program18InputString=document.getElementById("program18InputString").value;
    const removeString = () =>{
    const stringArray=program18InputString.split("");
    const duplicateArray=stringArray.filter(el =>{
        return stringArray.indexOf(el) == stringArray.lastIndexOf(el);
    });
    return duplicateArray.join("");
}
    document.getElementById("repeatedRemoveOutput").innerHTML=removeString(program18InputString);
}

 const replaceChar = () =>{
     const program19IputString=document.getElementById("program19IputString").value;
     const program19InputChar=document.getElementById("program19InputChar").value;
     const program19InputReplaceChar=document.getElementById("program19InputReplaceChar").value;
     const replaceFirstOccurenceChar=program19IputString.replace(program19InputChar,program19InputReplaceChar);
     document.getElementById("program19Output").innerHTML=replaceFirstOccurenceChar;
 }

 const replaceLastChar = () =>{
     const program20IputString=document.getElementById("program20IputString").value;
     const program20InputChar=document.getElementById("program20InputChar").value;
     const program20InputReplaceChar=document.getElementById("program20InputReplaceChar").value;
     const lastIndexOfChar=program20IputString.lastIndexOf(program20InputChar);
     const replaceLastCharOcrnce=program20IputString.substring(0,lastIndexOfChar) + program20InputReplaceChar + program20IputString.substring(lastIndexOfChar+1,program20IputString.length) ;
     document.getElementById("program20Output").innerHTML=replaceLastCharOcrnce;
 }

 const replaceAllChar = () =>{
     const program21IputString= document.getElementById("program21IputString").value;
     const program21InputChar=document.getElementById("program21InputChar").value;
     const program21InputReplaceChar=document.getElementById("program21InputReplaceChar").value;
     var newStringA="";
     for(i=0; i<program21IputString.length; i++){
         if(program21IputString[i]!=program21InputChar &&   program21IputString[i]!=" "){
             newStringA +=program21IputString[i];
         }
         else{
             if(program21IputString[i]==program21InputChar){
                 newStringA = newStringA + program21InputReplaceChar;
             }
             else if(program21IputString[i]==" "){
                 newStringA = newStringA + " " + program21IputString[i];
             }
         }
     }
     document.getElementById("program21Output").innerHTML=newStringA;
 }
 
 const findWordOcrnce = () =>{
     const program22InputString=document.getElementById("program22InputString").value;
     const prograam22InputWord=document.getElementById("prograam22InputWord").value;
     const split=program22InputString.split(" ");
     const indexOfFirtOcrnce=split.indexOf(prograam22InputWord);
     document.getElementById("program22Output").innerHTML=`First Occurence Of Word ${prograam22InputWord} At Index ${indexOfFirtOcrnce}`;
 }

 const findLastWordOcrnce = () =>{
     const program23InputString=document.getElementById("program23InputString").value;
     const prograam23InputWord=document.getElementById("prograam23InputWord").value;
     const splitProgram23=program23InputString.split(" ");
     const lastIndexOfWord=splitProgram23.lastIndexOf(prograam23InputWord);
     document.getElementById("program23Output").innerHTML=`Last Occurence Of Word ${prograam23InputWord} At Index ${lastIndexOfWord}`;
 }

 const findAllWordOcrnce = () =>{
     const program24InputString=document.getElementById("program24InputString").value;
     const prograam24InputWord=document.getElementById("prograam24InputWord").value;
      var indexes="";
     const program24Split=program24InputString.split(" ");
     for(i=0; i<program24Split.length; i++){
         if(program24Split[i]==prograam24InputWord){
             indexes = indexes + " " + i;
         }
     }
     document.getElementById("program24Output").innerHTML=`All Indexes of ${prograam24InputWord} = ${indexes}`;
 }

 const countWordOcrnce = () =>{
     const program25InputString=document.getElementById("program25InputString").value;
     const prograam25InputWord=document.getElementById("prograam25InputWord").value;
     var counter=0;
     const splitProgram25=program25InputString.split(" ");
     for(i=0; i<splitProgram25.length; i++){
         if(splitProgram25[i]==prograam25InputWord){
             counter ++;
         }
     }
     document.getElementById("program25Output").innerHTML=`Total Occurence of word ${prograam25InputWord} = ${counter}`;
 }

 const removefirstoccnce = () => {
     const program26InputString=document.getElementById("program26InputString").value;
     const prograam26InputWord=document.getElementById("prograam26InputWord").value;
     var wordsString="";
     var newStringWord="";
    for(i=0; i<program26InputString.length; i++){
        if(program26InputString[i]!=" "){
            wordsString +=program26InputString[i];
        }
        else{
            if(program26InputString[i]==" "){
                newStringWord += " " + wordsString;
                wordsString="";
            }
        }
    }
    if(program26InputString.length !=" "){
        newStringWord += " " + wordsString;
        wordsString="";
    }
    const replacefirstWord=newStringWord.replace(prograam26InputWord,"");
    document.getElementById("program26Output").innerHTML=replacefirstWord;
 }

 const removeLastoccnce = () =>{
     const program27InputString=document.getElementById("program27InputString").value;
     const prograam27InputWord=document.getElementById("prograam27InputWord").value;
    const splitArraa=program27InputString.split(" ");
    const last=splitArraa.lastIndexOf(prograam27InputWord);
    splitArraa.splice(last,1,"");
    const arrayToString=splitArraa.toString();
    var removeCommaString=arrayToString.replace(/,/g," ");
    document.getElementById("program27Output").innerHTML=removeCommaString; 
}

const removeAllCharccnce = () =>{
    const program28InputString=document.getElementById("program28InputString").value;
    const prograam28InputWord=document.getElementById("prograam28InputWord").value;
    var newWordsArray=[];
    const wordsArray=program28InputString.split(" ");
    for(i=0; i<wordsArray.length; i++){
        if(wordsArray[i]!=prograam28InputWord){
            newWordsArray.push(wordsArray[i]);
        }
    }
    const string=newWordsArray.toString().replace(/,/g," ");
    document.getElementById("program28Output").innerHTML=string;
}

const removeSpaces = () =>{
    const program29InputString=document.getElementById("program29InputString").value;
    const trim=program29InputString.replace(/ /g,"");
    document.getElementById("program29Output").innerHTML=trim;
}

const removeTrailingSpaces = () =>{
    const program30InputString=document.getElementById("program30InputString").value;
    const trimtrailing=program30InputString.replace(/ /g,"");
    document.getElementById("program30Output").innerHTML=trimtrailing;
}

const removeAllSpaces = () =>{
    const program31InputString=document.getElementById("program31InputString").value;
    const trimAll=program31InputString.replace(/ /g,"");
    document.getElementById("program31Output").innerHTML=trimAll;
}

const removeExtraSpaces = () =>{
    const program32InputString= document.getElementById("program32InputString").value;
    const removeExtra=program32InputString.replace(/\s+/g," ");
    document.getElementById("program32Output").innerHTML=removeExtra;
}
 const countfrequency = () =>{
     const program33InputString=document.getElementById("program33InputString").value;
     var frequencyObjet={};
     const makeArray=program33InputString.split(" ");
     for(i=0; i<makeArray.length; i++){
         var element=makeArray[i];
         frequencyObjet[element]=frequencyObjet[element]? frequencyObjet[element]+1: 1;
     }
     var jsonObject=JSON.stringify(frequencyObjet);
     document.getElementById("program33Output").innerHTML=jsonObject;
 }

 const printUniqueEle = () =>{
     const program34InputString=document.getElementById("program34InputString").value;
     const removeRepeatedEle = () =>{
        const makeWordsArray=program34InputString.split(" ");
        const duplicateWordsArray=makeWordsArray.filter(el =>{
            return makeWordsArray.indexOf(el) == makeWordsArray.lastIndexOf(el);
        });
        return duplicateWordsArray.join(" ");
    }
    document.getElementById("program34Output").innerHTML=removeRepeatedEle(program34InputString);
 }

 const countDuplicateEle = () =>{
     const program35InputString=document.getElementById("program35InputString").value;
     var count=0;
     var frequencyObjet1={};
     const makeArray1=program35InputString.split(" ");
     for(i=0; i<makeArray1.length; i++){
         var element1=makeArray1[i];
         frequencyObjet1[element1]=frequencyObjet1[element1]? frequencyObjet1[element1]+1: 1;
     }
     console.log(frequencyObjet1);
     const valuesArray=Object.values(frequencyObjet1);
     console.log(valuesArray);
     for(i=0; i<valuesArray.length; i++){
         if(valuesArray[i]>=2){
             count++;
         }
     }
     document.getElementById("program35Output").innerHTML=`Total Duplicate Element = ${count}`;
 }

 const deleteDuplicateEle = () =>{
     const program36InputString=document.getElementById("program36InputString").value;
     const deleteDuplicate = () =>{
         const array36=program36InputString.split(" ");
         const filterArray = array36.filter(index =>{
            return array36.indexOf(index) == array36.lastIndexOf(index);
         });
        return filterArray.join(" ");
     }
     document.getElementById("program36Output").innerHTML=deleteDuplicate(program36InputString);
 }

 const mergeArray = () =>{
     const program37InputString1=document.getElementById("program37InputString1").value;
     const program37InputString2=document.getElementById("program37InputString2").value;
     const program37InputString3=document.getElementById("program37InputString3").value;
     const firstArray=program37InputString1.split(" ");
     const secondArray=program37InputString2.split(" ");
     const thirdArray=program37InputString3.split(" ");
     var arrayfristsecond=[];
     for(i=0; i<secondArray.length; i++){
        firstArray.push(secondArray[i]);
     }
     for(i=0; i<thirdArray.length; i++){
         firstArray.push(thirdArray[i]);
     }
    const stringOfArray=firstArray.toString().replace(/,/g," ");
    document.getElementById("program37Output").innerHTML=stringOfArray;
 } 

 const reverseArray = () =>{
     const program38InputString = document.getElementById("program38InputString").value;
     const array38=program38InputString.split(" ");
     var reverseArray=[];
     for(i=array38.length-1; i>=0; i--){
         reverseArray.push(array38[i]);
     }
     const reverseString=reverseArray.toString().replace(/,/g," ");
     document.getElementById("program38Output").innerHTML=reverseString;
 }

 const separateEvenOdd = () =>{
     const program39InputString=document.getElementById("program39InputString").value;
     const numberArray=program39InputString.split(" ");
     var evenArray=[];
     var oddArray=[];
     for(i=0; i<numberArray.length; i++){
         if(numberArray[i]%2==0){
             evenArray.push(numberArray[i]);
         }
         else{
             oddArray.push(numberArray[i]);
         }
     }
     document.getElementById("program39Output").innerHTML=`Odd Elements Array = ${oddArray} And Even Elements Array = ${evenArray}`;
 }

 const searchEle = () =>{
     const program40InputString=document.getElementById("program40InputString").value;
     const searchArray=program40InputString.split(" ");
     const program40InputElemnt=document.getElementById("program40InputElemnt").value;
     var elementIndexes="";
     for(i=0; i<searchArray.length; i++){
         if(searchArray[i]==program40InputElemnt){
             elementIndexes=elementIndexes + "," + i;
         }
     }
     document.getElementById("program40Output").innerHTML=`${program40InputElemnt} Found At Index ${elementIndexes}`;
 }

const sortArray = () =>{
    const program41InputElemnt=document.getElementById("program41InputElemnt").value;
    const unSortArray=program41InputElemnt.split(" ");
    const ascendingArray=unSortArray.sort();
    console.log(ascendingArray);
    var  descendingArray=[];
    for(i=ascendingArray.length-1; i>=0; i--){
        descendingArray.push(ascendingArray[i]);
    }
    document.getElementById("program41Output").innerHTML=`Ascending Order Array = ${ascendingArray} Descending Order Array = ${descendingArray}`;
}

const sortEvenOddArray = () => {
    const program42InputElemnt=document.getElementById("program42InputElemnt").value;
    const numberArray=program42InputElemnt.split(" ");
     var evenArray=[];
     var oddArray=[];
     for(i=0; i<numberArray.length; i++){
         if(numberArray[i]%2==0){
             evenArray.push(numberArray[i]);
         }
         else{
             oddArray.push(numberArray[i]);
         }
     }
     evenArray.sort(function(a, b){return a-b});
     oddArray.sort(function(a, b){return a-b});
     document.getElementById("program42Output").innerHTML=`Even Sort Array = ${evenArray} Odd Sort Array = ${oddArray}`;
}

const leftRotateArray = () =>{
    const program43InputElemnt=document.getElementById("program43InputElemnt").value;
    const program43InputNumber=document.getElementById("program43InputNumber").value;
    const elementsArray=program43InputElemnt.split(" ");
    var leftRotation=elementsArray.slice(program43InputNumber,elementsArray.length) + "," + elementsArray.slice(0,program43InputNumber);
    document.getElementById("program43Output").innerHTML=`Original Array = ${elementsArray} + Left Rotate Array = ${leftRotation}`;
}

const  rightRotateArray = () =>{
    const program44InputElemnt=document.getElementById("program44InputElemnt").value;
    const program44InputNumber=document.getElementById("program44InputNumber").value;
    const elementsArray44=program44InputElemnt.split(" ");
    var rightRotation=elementsArray44.slice(elementsArray44.length-program44InputNumber,elementsArray44.length) + "," + elementsArray44.slice(0,elementsArray44.length-program44InputNumber)
    document.getElementById("program44Output").innerHTML=`Original Array = ${elementsArray44} + Right Rotate Array = ${rightRotation}`;
}

const findSum = () =>{
    const program45InputElemnt=document.getElementById("program45InputElemnt").value;
    var sum=0;
    for(i=1; i<=program45InputElemnt; i++){
        sum =sum+parseInt([i]);
    }
   document.getElementById("program45Output").innerHTML=sum;
}

const findEvenSum = () =>{
    const program46InputElemnt=parseInt(document.getElementById("program46InputElemnt").value);
    var evenSum=0;
    for(i=0; i<=program46InputElemnt; i++){
        if(parseInt([i])%2==0){
            evenSum =evenSum + parseInt([i]);
        }
    }
    document.getElementById("program46Output").innerHTML=evenSum;
}
 const findOddSum = () =>{
     const program47InputElemnt=document.getElementById("program47InputElemnt").value;
     var oddSum=0;
    for(i=0; i<=program47InputElemnt; i++){
        if(parseInt([i])%2!=0){
            oddSum =oddSum + parseInt([i]);
        }
    }
    document.getElementById("program47Output").innerHTML=oddSum;
 }

 const printTable = () =>{
     const program48InputElemnt=parseInt(document.getElementById("program48InputElemnt").value);
     var table=0;
     for(i=1; i<=10; i++){
         table =program48InputElemnt + "*" + i + "=" + program48InputElemnt*i;
        console.log(table);
     }
     document.getElementById("program48Output").innerHTML="Check Console";
 }

 const countDigits = () =>{
     const program49InputElemnt=document.getElementById("program49InputElemnt").value;
     const numberLenght=program49InputElemnt.length;
     document.getElementById("program49Output").innerHTML=`Number of Digits in ${program49InputElemnt} = ${numberLenght}`;
 }

 const findFirstLast = () =>{
     const program50InputElemnt =document.getElementById("program50InputElemnt").value;
     const firstDigit=program50InputElemnt.slice(0,1);
     const lastDigit=program50InputElemnt.slice(program50InputElemnt.length-1,program50InputElemnt.length);
     document.getElementById("program50Output").innerHTML=`First Digit = ${firstDigit} Last Digit = ${lastDigit}`;
 }

 const findFirstLastSum = () =>{
     const program51InputElemnt=document.getElementById("program51InputElemnt").value;
     const firstDigit1=parseInt(program51InputElemnt.slice(0,1));
     const lastDigit1=parseInt(program51InputElemnt.slice(program51InputElemnt.length-1,program51InputElemnt.length));
    const sumFirstLastDig=firstDigit1+lastDigit1;
    document.getElementById("program51Output").innerHTML=sumFirstLastDig;
 }

 const swapFirstLast = () =>{
     const program52InputElemnt=document.getElementById("program52InputElemnt").value;
     const firstForSwap=program52InputElemnt.slice(0,1);
     const lastForSwap=program52InputElemnt.slice(program52InputElemnt.length-1,program52InputElemnt.length);
     const afterSwap=lastForSwap + program52InputElemnt.slice(1,program52InputElemnt.length-1) + firstForSwap;
     document.getElementById("program52Output").innerHTML=`Original String = ${program52InputElemnt} After Swapping = ${afterSwap}`;
 }

 const sumOfAllDig = () =>{
     const program53InputElemnt=document.getElementById("program53InputElemnt").value;
     var sumAllDig=0;
     for(i=0; i<program53InputElemnt.length; i++){
         sumAllDig = sumAllDig+parseInt(program53InputElemnt[i]);
     }
     document.getElementById("program53Output").innerHTML=`Sum of All Digits = ${sumAllDig}`;
 }

 const productOfAllDig = () =>{
     const program54InputElemnt=document.getElementById("program54InputElemnt").value;
     var productAllDig=1;
     for(i=0; i<program54InputElemnt.length; i++){
         productAllDig = productAllDig*parseInt(program54InputElemnt[i]);
     }
     document.getElementById("program54Output").innerHTML=`Sum of All Digits = ${productAllDig}`;
 }

 