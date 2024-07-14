
//Add More Work
const AddMoreWork=()=>{
  let newNode=document.createElement("textarea");
//   newNode.classList.add("name of class"); //if you wanna add any class of this newly created element
newNode.setAttribute("placeholder","Add Work");
newNode.style.marginTop="12px";
newNode.style.marginBottom="12px";
newNode.classList.add("working");
let work=document.getElementById("workID");
let but=document.getElementById("workbtnID");

work.insertBefore(newNode,but);
 }


 //Add More Academics Details
 const AddAcademics=()=>{
let newNode=document.createElement("textarea");
newNode.setAttribute("placeholder","Add More");
newNode.style.marginBottom="12px";
newNode.style.marginTop="12px";
newNode.classList.add("studying");
let academics=document.getElementById("acedemicsID");
let academicsbtn=document.getElementById("acedemicsbtnID");

academics.insertBefore(newNode,academicsbtn);
 }


 //OnSubmitting Details
 function detailSubmit(){
  let r=document.getElementById("detail");
  r.style.display="none";
  let p=document.getElementById("printing");
  p.style.display="block";


  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let phone=document.getElementById("phone").value;
  let address=document.getElementById("address").value;
  let linkedin=document.getElementById("linkedin").value;
  let github=document.getElementById("github").value;
  let portfolio=document.getElementById("portfolio").value;
  let skills=document.getElementById("skills").value;
  let objective=document.getElementById("objective").value;

  let name2=document.getElementById("name2");
  let name3=document.getElementById("name3");
  let email2=document.getElementById("email2");
  let phone2=document.getElementById("phone2");
  let address2=document.getElementById("address2");
  let linkedin2=document.getElementById("linkedin2");
  let github2=document.getElementById("github2");
  let portfolio2=document.getElementById("portfolio2");
  let skills2=document.getElementById("skills2");
  let objective2=document.getElementById("objective2");

  name2.innerHTML=name;
  email2.innerHTML=email;
  name3.innerHTML=name;
  phone2.innerHTML=phone;
  address2.innerHTML=address;
  linkedin2.innerHTML=linkedin;
  github2.innerHTML=github;
  portfolio2.innerHTML=portfolio;
  objective2.innerHTML=objective;
  skills2.innerHTML=skills;

  let work=document.getElementsByClassName("working");
  let str="";
  for(let i of work)
    str=str+`<li> ${i.value} </li>`;

  let workprint=document.getElementById("work2");
  workprint.innerHTML=str;

  let academics=document.getElementsByClassName("studying");
  let str2="";
  for(let i of academics)
    str2=str2+`<li> ${i.value} </li>`;
  
let academicsprint=document.getElementById("academics2");
academicsprint.innerHTML=str2;

let photo=document.getElementById("photo").files[0];
//reads the photo from files
let reader=new FileReader();
reader.readAsDataURL(photo);

reader.onloadend= function () {
document.getElementById("photo2").src=reader.result;
}

 }

 function PrintCV() {
  window.print();
}
