let input=document.querySelector("#add");
let btn=document.querySelector("#btn");
let list=document.querySelector("#list");
let el=document.getElementsByTagName("li");

btn.addEventListener("click",()=>{
   let txt=input.value;
   if(txt==="")
   {
       alert("You need to write something!!");
   }
   else{
       let li=document.createElement("li");
       li.innerHTML=txt;
       list.insertBefore(li,list.childNodes[0]);
       input.value="";
   }
});

list.addEventListener("click",e=>{
    if(e.target.tagName=='LI')
    e.target.classList.toggle("checked");
});
