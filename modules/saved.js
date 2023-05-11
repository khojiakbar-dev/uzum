import axios from "axios"

let locData = JSON.parse(localStorage.getItem('users'))
let cont = document.querySelector('.container')
let productsCont = document.querySelector('.savedCont')
let saveds = JSON.parse(localStorage.getItem('users')) || [];

        axios.get('http://localhost:3000/goods')
            .then(res => {
                 for(let item of res.data) {
                    for(let id of locData){
                        if(item.id === id) {
                            reload(item)
                        }
                    }
                 }
            })


export function reload(item) {
    let productBox = document.createElement('div')
    let topSide = document.createElement('div')
    let bottomSide = document.createElement('div')
    let productImg = document.createElement('img')
    let title = document.createElement('a')
    let spanDiscount = document.createElement('span')
    let spanOrigin = document.createElement('span')
    let addProduct = document.createElement('img')
    let savedImg = document.createElement('img')

    productBox.classList.add('productBox')
    topSide.classList.add('topSide')
    bottomSide.classList.add('bottomSide')
    productImg.classList.add('productImg')
    title.classList.add('title')
    spanDiscount.classList.add('spanDiscount')
    spanOrigin.classList.add('spanOrigin')
    addProduct.classList.add('addProduct')
    savedImg.classList.add('savedImg')

    productImg.src = item.media[0]
    title.innerHTML = item.title
    spanDiscount.innerHTML = item.price
    spanOrigin.innerHTML = item.price
    addProduct.src = '/public/buyCard.svg'
    savedImg.src = '/public/saved.svg'
    // title.href = '/pages/productid.html'

    title.onclick = () => {
        location.assign("/pages/productid.html?id=" + item.id);
    }

    if(saveds.includes(item.id)) {
        savedImg.src = '/public/savedActive.svg'
    }

    

    savedImg.onclick = () => {
        if (saveds.includes(item.id)) {
            saveds = saveds.filter((el) => el.id !== item.id);
            savedImg.src = '/public/saved.svg'
        } else {
            saveds.push(item.id);
            savedImg.src = "/public/savedActive.svg";
        }
    }

    productsCont.append(productBox)
    productBox.append(topSide, bottomSide)
    topSide.append(productImg, savedImg)
    bottomSide.append(title, spanDiscount, spanOrigin, addProduct)
}

if(saveds.length === 0) {
    location.assign('/pages/empty.html')
}