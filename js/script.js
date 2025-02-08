console.log("Hello");
let tab2 = document.querySelector(".tab2");
let link2 = document.querySelector(".link2");
let nav2=document.querySelector(".nav2");
let btn= document.querySelector(".btn");
btn.addEventListener("click",function(e){
    e.preventDefault();
    console.log("Clicked");
    // nav2.style.display="block";
    // btn.innerHTML=`<i class="fa-regular fa-xmark"></i>`;

    // if (btn.classList.contains("active")) {
    //     console.log("Class exists!");
    //     btn.classList.remove("active")
    //     btn.innerHTML=`<i class="fa-solid fa-bars"></i>`;
    //     nav2.style.display = "none";
    // }
    // else{
    //     btn.classList.add("active");
    //     function adjustNav() {
    //         if (window.innerWidth > 768) {
    //             nav2.style.display = "none";
    //         } else {
    //             nav2.style.display = "block";
    //             btn.innerHTML=`<i class="fa-regular fa-xmark"></i>`;
    //         }
    //     }
    //     window.addEventListener("resize", adjustNav);
    //     adjustNav();
    //     console.log("not exist");
    // }

    function adjustNav() {
        if (window.innerWidth > 767) {
            nav2.style.display = "none";
        }
         else {
            if (btn.classList.contains("active")) {
                    btn.classList.remove("active")
                    btn.innerHTML=`<i class="fa-solid fa-bars"></i>`;
                    nav2.style.display = "none";
            }
            else{
                btn.classList.add("active");
                nav2.style.display = "block";
                // nav2.style.transition = "all 1s ease";
                btn.innerHTML=`<i class="fa-regular fa-xmark"></i>`;
                tab2.addEventListener("click",function(e){
                    console.log("clickedtab");
                    btn.classList.remove("active")
                    btn.innerHTML=`<i class="fa-solid fa-bars"></i>`;
                    nav2.style.display = "none";
                })
                link2.addEventListener("click",function(e){
                    console.log("clickedtab");
                    btn.classList.remove("active")
                    btn.innerHTML=`<i class="fa-solid fa-bars"></i>`;
                    nav2.style.display = "none";
                })
            }
        }
    }
    window.addEventListener("resize", adjustNav);
    adjustNav();

})

// tab2.addEventListener("click",function(e){
//     console.log("clickedtab");
    
// })





