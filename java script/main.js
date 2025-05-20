var allproduct = document.querySelectorAll('.card-body h5');
var btn = document.querySelectorAll('.btn');
var content = document.getElementById('content');
var btn2 = document.getElementById('btn2');
var del = document.getElementById('del');
var btn3 = document.querySelector('.total');
var product = document.getElementById('product');
var totalPrice = 0;
var title = document.querySelector(".title")

btn.forEach(function(item){
    item.onclick = function(){
        content.innerHTML += item.getAttribute("name") + "<br>"
        totalPrice += +(item.getAttribute("price"));
        if(content.innerHTML !==""){
            del.style.display="block";
            btn2.style.display="block";
            btn2.style.background="gray";
            btn2.style.borderRadius="15px"
            product.style.display = "block"
            product.style.color = "brown"
            product.style.fontSize = "20px"
            btn2.style.color = "white";
            del.style.background="brown"
            del.style.color="beige"
            del.style.borderRadius="15px"
            showPrice.style.borderRadius="15px"
            // showPrice.style.background="gray"

        }
    }
})





btn2.onclick = function(){
   btn3.innerHTML = (totalPrice)
    if(totalPrice > 7000){
        alert("You Got Discount")
        totalPrice -= 2000
    }
}

del.onclick = function(){
    if(content.innerHTML !== ""){
        content.innerHTML = "";
        btn3.innerHTML = "0";
        btn2.style.display="none";
        del.style.display="none";
        btn.style.background="blue"
    }
}



var inputt = document.querySelector(".inpSearch")
var productLiset = document.querySelectorAll(".card")
var notFound = document.getElementById("notFound")

inputt.addEventListener("input" ,() => {
    var inpValue = inputt.value.toLowerCase()

    var anaV = false
    productLiset.forEach((item)=> {
        if(item.textContent.toLowerCase().includes(inpValue)){
            item.style.display="list-item"
            anaV = true
        }else{
            item.style.display="none"
        }

    })
        notFound.style.display = anaV ? "none" : "block"
})


 document.addEventListener('DOMContentLoaded', function() {
            // Carousel Randomization (same as before)
            const carouselInner = document.querySelector('#randomImageCarousel .carousel-inner');
            const carouselItems = Array.from(carouselInner.children);

            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            shuffleArray(carouselItems);
            carouselInner.innerHTML = '';
            carouselItems.forEach((item, index) => {
                carouselInner.appendChild(item);
                if (index === 0) {
                    item.classList.add('active');
                }
            });
        });

