document.addEventListener('DOMContentLoaded', () => {
    const purchaseButtons = document.querySelectorAll('.button-middle')
    const productTitles = document.querySelectorAll('.product-title')
    const productPrice = document.querySelectorAll('.product-price')
    const cart = document.getElementById("cart")
    const backToMain = document.getElementById("backToMain")
    const cartObject = {
        products : []
    }

    purchaseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = {
                name : productTitles[index].textContent,
                price : productPrice[index].textContent
            }

            cartObject.products.push(product)
            saveData(cartObject)
        })
    })

    function saveData(data){
        localStorage.setItem("products",JSON.stringify(data))
    }

    cart.addEventListener('click',function(){
        window.location.href = "cart.html"
    })
    backToMain.addEventListener("click",function(){
        window.location.href = "index.html"
    })
})
