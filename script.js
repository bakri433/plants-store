//<i class="fa-brands fa-envira" style="color: rgb(99, 230, 190);"></i>
// .hero-section {
//   background: linear-gradient(to right, #2d4a3e 40%, transparent 100%), 
//               url('image-link.jpg') no-repeat center center;
//   background-size: cover;
// }
 let classifications = document.querySelector(".arrow");
let arrow= document.getElementById("arrow");
    let classlist=document.createElement("div");
    classlist.className="classlist";
    classifications.appendChild(classlist);
    classlist.classList.remove("classlist");
    classlist.style.display="none";


// classifications.addEventListener("mouseenter",()=>{
//    classlist.style.display="block";


// });
// classifications.addEventListener("mouseleave",()=>{
//    classlist.style.display="none";


//});
classifications.addEventListener("click",()=>{
    arrow.style.transform="rotateX(180deg)"
    classlist.classList.toggle("classlist");
})