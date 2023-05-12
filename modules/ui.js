import axios from 'axios'
let furniture = document.querySelector('.furniture')
let pc = document.querySelector('.pc')
let audio = document.querySelector('.audio')
let tv = document.querySelector('.tv')
let kitchen = document.querySelector('.kitchen')
let saveds = JSON.parse(localStorage.getItem('users')) || [];
const url = 'http://localhost:3000/goods'
axios.get(url)
    .then(res => reload(res.data))


export function reload(arr) {
    for (let item of arr) {
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
        item.isLiked === true ? savedImg.src = '/public/savedActive.svg' :
        savedImg.src = '/public/saved.svg' 

        // title.href = '/pages/productid.html'

        title.onclick = () => {
            location.assign("/pages/productid.html?id=" + item.id);
        }

        savedImg.onclick = () => {
            // if (!saveds.includes(item.id)) {
            //     saveds.push(item.id);
            //     localStorage.setItem("users", JSON.stringify(saveds));
            //     savedImg.src = '/public/savedActive.svg'
            // }
            axios.patch(url + '/' + item.id, {
                isLiked: true
            })
        }


        if (saveds.includes(item.id)) {
            savedImg.src = '/public/savedActive.svg'
        }

        if (item.type === 'furniture') {
            furniture.append(productBox)
            productBox.append(topSide, bottomSide)
            topSide.append(productImg, savedImg)
            bottomSide.append(title, spanDiscount, spanOrigin, addProduct)
        }

        if (item.type === 'PC') {
            pc.append(productBox)
            productBox.append(topSide, bottomSide)
            topSide.append(productImg, savedImg)
            bottomSide.append(title, spanDiscount, spanOrigin, addProduct)
        }

        if (item.type === 'audio') {
            audio.append(productBox)
            productBox.append(topSide, bottomSide)
            topSide.append(productImg, savedImg)
            bottomSide.append(title, spanDiscount, spanOrigin, addProduct)
        }

        if (item.type === 'TV') {
            tv.append(productBox)
            productBox.append(topSide, bottomSide)
            topSide.append(productImg, savedImg)
            bottomSide.append(title, spanDiscount, spanOrigin, addProduct)
        }

        if (item.type === 'kitchen') {
            kitchen.append(productBox)
            productBox.append(topSide, bottomSide)
            topSide.append(productImg, savedImg)
            bottomSide.append(title, spanDiscount, spanOrigin, addProduct)
        }
    }
}