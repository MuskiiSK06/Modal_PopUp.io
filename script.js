const toggleButton = document.getElementById("toggleButton");
const moreText = document.getElementById("moreText");

let isShowMore = false;

toggleButton.addEventListener('click', () => {
   isShowMore = !isShowMore;

   if(isShowMore){
      moreText.style.display = "block";
      toggleButton.textContent = "Read Less";
   }
   else{
      moreText.style.display = "none";
      toggleButton.textContent = "Read More";
   }
})

const buyNow = document.getElementById("buyNow");
const modalContainer = document.getElementById("modal-container");
const close = document.getElementById("close");

buyNow.addEventListener("click", () =>{
    modalContainer.classList.add("show");
})

close.addEventListener("click", () =>{
    modalContainer.classList.remove("show");
})