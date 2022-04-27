let hamburger = document.querySelector(".hamburger");
let Product = document.querySelector(".Product")
let Company = document.querySelector(".Company")
let Connect = document.querySelector(".Connect")

let arrow01 = document.querySelector(".arrow01")
let arrow02 = document.querySelector(".arrow02")
let arrow03 = document.querySelector(".arrow03")

let ul__product = document.querySelector(".inner__ul__product")
let ul__company = document.querySelector(".inner__ul__company")
let ul__connect = document.querySelector(".inner__ul__connect")

let header__main__links = document.querySelector(".header__main__links")

hamburger.addEventListener("click",function(){
    console.log(hamburger);
    if(hamburger.classList.contains("open")){
        hamburger.classList.replace("open","close")
        hamburger.style.height = "26px"
        header__main__links.classList.add("fadeOut")
        if (header__main__links.classList.contains("fadeIn")){
            header__main__links.classList.replace("fadeIn","fadeOut")
        }

    }else if(hamburger.classList.contains("close")){
        hamburger.classList.replace("close","open")
        header__main__links.classList.replace("fadeOut","fadeIn")
    }else{
        hamburger.classList.add("open")
        
        
    }
    
})


Product.addEventListener("click",function(){
    if (arrow01.classList.contains("spinUp")){
        arrow01.classList.replace("spinUp","spinDown")
        ul__product.classList.replace("showList","hideList")

        }else if(arrow01.classList.contains("spinDown")){
        arrow01.classList.replace("spinDown","spinUp")
        ul__product.classList.replace("hideList","showList")

        }else{
        arrow01.classList.add("spinUp")
        ul__product.classList.add("showList")
    }

})
Company.addEventListener("click",function(){
    if (arrow02.classList.contains("spinUp")){
        arrow02.classList.replace("spinUp","spinDown")
        ul__company.classList.replace("showList","hideList")
        }else if(arrow02.classList.contains("spinDown")){
        arrow02.classList.replace("spinDown","spinUp")
        ul__company.classList.replace("hideList","showList")
        }else{
        arrow02.classList.add("spinUp")
        ul__company.classList.add("showList")
    }

})

Connect.addEventListener("click",function(){
    if (arrow03.classList.contains("spinUp")){
        arrow03.classList.replace("spinUp","spinDown")
        ul__connect.classList.replace("showList","hideList")
        }else if(arrow03.classList.contains("spinDown")){
        arrow03.classList.replace("spinDown","spinUp")
        ul__connect.classList.replace("hideList","showList")
        }else{
        arrow03.classList.add("spinUp")
        ul__connect.classList.add("showList")
    }

})
