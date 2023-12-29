let passinp = document.getElementById("inp");
let generate = document.getElementById("gen");
let clip = document.getElementById("clip");
let lengthE1 = document.getElementById("Passlen");
let upperSet = document.getElementById("upper");
let lowerSet = document.getElementById("lower");
let numberSet = document.getElementById("num");
let symbSet = document.getElementById("symb");
let showmsg = document.getElementById("showmsg");
let warnmsg = document.getElementById("warnmsg");

let arr=["A","B","C","D","E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*"]
let upperArr = ["A","B","C","D","E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 let lowerArr=[ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let numArr=["0","1","2","3","4","5","6","7","8","9"]
  let symbArr=["!","@","#","$","%","^","&","*"];
  passinp.value="";

generate.addEventListener("click", showvalue);

function showvalue() {
  showmsg.innerHTML="";
  warnmsg.innerHTML="";
  let length = lengthE1.value;
  let lower=lowerSet.checked;
   let upper=upperSet.checked;
   let number=numberSet.checked;
   let symb=symbSet.checked;
  let password = generatePassword(length, lower, upper, number, symb);
   passinp.value=password
}

function generatePassword(lengthVal,lowerVal,upperVal,numberVal,symbVal){
    let ctr = "";
    if(lengthVal==""||lengthVal<8 || lengthVal>20){
      warnmsg.innerHTML="Password length should be between 8 and 20 characters";
      return ""
     }

     if(!upperVal && !lowerVal && !numberVal && !symbVal)
     for (let i = 0; i < lengthVal; i++) {
            let randomNumber = Math.floor(Math.random() * (arr.length-1)) + 1;
              ctr += arr[randomNumber];
      }

     if(upperVal){
        let len=Math.floor(lengthVal / 4)
                for (let j = 0; j <len ; j++) {
                  let randomNumber1 = Math.floor(Math.random() * (upperArr.length-1)) + 1;
                  ctr += upperArr[randomNumber1];
                }
    }
       if(lowerVal){
        let len=Math.floor(lengthVal / 4)
                for (let j = 0; j <len ; j++) {
                  let randomNumber1 = Math.floor(Math.random() * (lowerArr.length-1)) + 1;
                  ctr += lowerArr[randomNumber1];
                }
     }
     
     if(numberVal){
        let len=Math.floor(lengthVal / 4)
                for (let j = 0; j <len ; j++) {
                  let randomNumber1 = Math.floor(Math.random() * (numArr.length-1)) + 1;
                  ctr += numArr[randomNumber1];
                }
                
     }
     if(symbVal){
        let len=Math.floor(lengthVal / 4)
                for (let j = 0; j <len ; j++) {
                  let randomNumber1 = Math.floor(Math.random() * (symbArr.length-1)) + 1;
                  ctr += symbArr[randomNumber1];
                }
            
     }

     let len=lengthVal-ctr.length
     for (let i = 0; i < len; i++) {
                          let randomNumber = Math.floor(Math.random() * (arr.length-1)) + 1;
                            ctr += arr[randomNumber];
                     
                    }
    return ctr
}


clip.addEventListener("click", () => {
  if (passinp.value !=="" ) {
    passinp.style.background = "white";
    showmsg.innerHTML = "copied ✅";
    showmsg.style.color = "green";
    navigator.clipboard.writeText(passinp.value);

}
})
