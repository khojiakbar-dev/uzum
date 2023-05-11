import { header } from '/modules/header'
import axios from 'axios'
let productCont = document.querySelector('.productInfo')
let saveds = JSON.parse(localStorage.getItem('users')) || [];
header()




axios.get("http://localhost:3000/goods")
    .then(res => product_reload(res.data, productCont))
const url = location
const id = url.href.split('=').at(-1)
console.log(id);

function product_reload(arr, place) {
    place.innerHTML = "";
    for (let item of arr) {
        if (item.id === +id) {
            // return place

            let topOfProduct = document.createElement('div')
            let bottomOfProduct = document.createElement('div')
            let left_scroll = document.createElement('div')
            let sliderProduct = document.createElement('div')
            let productImgs = document.createElement('div')

            let info = document.createElement('div')
            let titleRp = document.createElement('h2')
            let prices = document.createElement('div')
            let newPrice = document.createElement('span')
            let discountPrice = document.createElement('span')
            let counter = document.createElement('div')
            let minus = document.createElement('span')
            let numberCount = document.createElement('span')
            let plus = document.createElement('span')
            let hr = document.createElement('hr')
            let advice = document.createElement('p.')
            let btns = document.createElement('div')
            let addBasket = document.createElement('button')
            let addSaved = document.createElement('button')

            let descProduct = document.createElement('div')
            let opisanie = document.createElement('h2')
            let moreInfo = document.createElement('p')
            let carousel = document.createElement('div')
            let orgPrice = item.price
            let leftSlider = document.createElement('img')
            let rightSlider = document.createElement('img')

            leftSlider.classList.add('leftSlider')
            rightSlider.classList.add('rightSlider')

            topOfProduct.classList.add('topOfProduct')
            bottomOfProduct.classList.add('bottomOfProduct')
            left_scroll.classList.add('left_scroll')
            sliderProduct.classList.add('sliderProduct')
            info.classList.add('info')
            titleRp.classList.add('titleRp')
            prices.classList.add('prices')
            newPrice.classList.add('newPrice')
            discountPrice.classList.add('discountPrice')
            counter.classList.add('counter')
            minus.classList.add('minus')
            numberCount.classList.add('numberCount')
            plus.classList.add('plus')
            hr.classList.add('hr')
            advice.classList.add('advice')
            btns.classList.add('btns')
            addBasket.classList.add('addBasket')
            addSaved.classList.add('addSaved')
            descProduct.classList.add('descProduct')
            opisanie.classList.add('opisanie')
            moreInfo.classList.add('moreInfo')
            carousel.classList.add('carousel')
            productImgs.classList.add('productImgs')
            titleRp.innerHTML = item.title
            newPrice.innerHTML = `${orgPrice} sum`
            discountPrice.innerHTML = `${orgPrice} sum`
            minus.innerHTML = '-'
            numberCount.innerHTML = "1"
            plus.innerHTML = '+'
            advice.innerHTML =
                'Станьте востребованным разработчиком. Вы изучите основы программирования и основныеконцепции компьютерных наук, цифровые технологии, операционные системы, программное обеспечение, базы данных, системы аналитики, языки программирования и многое другое. Познакомитесь с тестированием и системныманализом. На программе сможете сделать осознанный выбор специализации и технологий, прокачаться ввыбранном направлении.'
            addBasket.innerHTML = 'Добавить в корзину'
            addSaved.innerHTML = 'Добавить в избранное'
            opisanie.innerHTML = 'Описание товара'
            moreInfo.innerHTML = item.description
            leftSlider.src = '/public/arrow-left.svg'
            rightSlider.src = '/public/arrow-right.svg'


            place.append(topOfProduct, bottomOfProduct)
            topOfProduct.append(left_scroll, sliderProduct, info)
            sliderProduct.append(leftSlider, productImgs, rightSlider)
            for (let imgs of item.media) {
                let swiperImg = document.createElement('img')
                swiperImg.classList.add('swiperImg')
                swiperImg.src = imgs
                let carouselImg = document.createElement('img')
                carouselImg.classList.add('carouselImg')
                carouselImg.src = imgs

                left_scroll.append(swiperImg)
                productImgs.append(carouselImg)
            }
            info.append(titleRp, prices, counter, hr, advice, btns)
            prices.append(newPrice, discountPrice)
            counter.append(minus, numberCount, plus)
            btns.append(addBasket, addSaved)
            bottomOfProduct.append(descProduct, carousel)
            descProduct.append(opisanie, moreInfo)


            // item.newPrice = item.price * 100 / item.salePercentage
            // console.log(item.newPrice);



            let totalCost = 0
            plus.onclick = () => {
                numberCount.innerHTML++
                let price = orgPrice * +numberCount.innerHTML
                totalCost = price
                discountPrice.innerHTML = `${price} sum`
            }

            minus.onclick = () => {
                if (numberCount.innerHTML !== "1") {
                    numberCount.innerHTML--
                    totalCost -= orgPrice
                    discountPrice.innerHTML = `${totalCost} sum`


                }

            }

            addSaved.onclick = () => {
                if (!saveds.includes(item.id)) {
                    saveds.push(item.id);
                    localStorage.setItem("users", JSON.stringify(saveds));
                    addSaved.innerHTML = 'Добавить в избранное'
                }
            }


            

          if(saveds.includes(item.id)){
            addSaved.innerHTML = 'Добавлен'
            addSaved.style.background = 'violet'
            addSaved.style.border = 'none'
          }

            // let prev = document.querySelector('.offer__slider-left')
            // let next = document.querySelector('.offer__slider-right')
            // let slider = document.querySelector('.carouselImg')

            // let slideIndex = 0
            // SlidesProduct(slideIndex)

            // function SlidesProduct(n) {

            //     if (n >= slider.length) {
            //         slideIndex = 0
            //     }
            //     if (n < 0) {
            //         slideIndex = slider.length - 1
            //     }

            //     slider.forEach(el => el.classList.add('hide'))

            //     slider[slideIndex].classList.remove('hide')
            //     slider[slideIndex].classList.add('show')
            // }

            // leftSlider.onclick = () => {
            //     slideIndex--
            //     SlidesProduct(slideIndex)
            // }
            // rightSlider.onclick = () => {
            //     slideIndex++
            //     SlidesProduct(slideIndex)
            // }


        }
    }
}