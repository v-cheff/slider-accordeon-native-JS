    let images = document.querySelectorAll(".img");
    let container = document.querySelector(".images");
    let active = container.firstElementChild;
    active.style.display = "block";
    prev.setAttribute("disabled", "disabled")

    
    next.addEventListener("click", function(){

      active.style.display = "none"
      active = active.nextSibling;;
      if(active.tagName !== "IMG") {
        active = active.nextSibling;
      };
      active.style.display = "block";
    
    })
    prev.addEventListener("click", function(){
      active.style.display = "none"
      active = active.previousSibling;
      if(active.tagName !== "IMG") {
        active = active.previousSibling;
      };
      active.style.display = "block";
    })

    window.addEventListener("click", function() {
      if(active == container.firstElementChild) {
      prev.setAttribute("disabled", "disabled") 
    } else {
      prev.removeAttribute("disabled")
    }
    })
    window.addEventListener("click", function() {
      if(active.nextSibling == container.childNodes[container.childNodes.length-1]) {
      next.setAttribute("disabled", "disabled") 
    } else {
      next.removeAttribute("disabled")
    }
    })


    let header = document.querySelectorAll(".header")

    header.forEach((el) => {
      el.addEventListener("click", () => {

        let textBlocks = document.querySelectorAll(".text");
        textBlocks.forEach((el1) => {
          el1.style.display = "none"
        })

        let content = el.nextElementSibling;
        content.style.display = "block";
      })
    }
    )




