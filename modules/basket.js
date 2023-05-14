import axios from 'axios'


let storeData = JSON.parse(localStorage.getItem('basket'))
let leftBasket = document.querySelector('.leftBasket')
let basketProducts = JSON.parse(localStorage.getItem('basket')) || [];
const url = 'http://localhost:3000/goods'


axios.get(url)
    .then(res => {
        reload(storeData, res.data)
    })



function reload(storeArr, dataLoc) {
    for (let item of dataLoc) {
        for (let id of storeArr) {
            if (item.id === +id) {
                let items = document.createElement('div')
                let left_item = document.createElement('div')
                let right_item = document.createElement('div')
                let img = document.createElement('img')
                let title = document.createElement('h3')
                let price = document.createElement('span')
                let counter = document.createElement('div')
                let minus = document.createElement('span')
                let numberCount = document.createElement('span')
                let plus = document.createElement('span')
                let deleteBtn = document.createElement('button')
                let dsPrc = 0


                items.classList.add('items')
                left_item.classList.add('left_item')
                right_item.classList.add('right_item')
                img.classList.add('img')
                title.classList.add('title')
                price.classList.add('price')
                counter.classList.add('counter')
                minus.classList.add('minus')
                numberCount.classList.add('numberCount')
                plus.classList.add('plus')
                deleteBtn.classList.add('deleteBtn')

                img.src = item.media[0]
                title = item.title
                price = item.price
                minus.innerHTML = '-'
                plus.innerHTML = '+'
                numberCount.innerHTML = '1'
                deleteBtn.innerHTML = 'Удалить'

                leftBasket.append(items)
                items.append(left_item, right_item)
                left_item.append(img)
                right_item.append(title, price, counter, deleteBtn)
                counter.append(minus, numberCount, plus)


                img.onclick = () => {
                    location.assign("/pages/productid.html?id=" + item.id);
                }

                // if (item.salePercentage > 0) {
                //     dsPrc = Math.floor((item.price / 100) * item.salePercentage)
                // } else {
                //     dsPrc = item.price
                //     spanDiscount.style.display = 'none'
                // }

                // spanOrigin.innerHTML = dsPrc + ' сум'
                // spanDiscount.innerHTML = item.price + 'сум'


                deleteBtn.onclick = () => {
                    if (!basketProducts.includes(item.id)) {
                        basketProducts.push(item.id)
                        localStorage.setItem("basket", JSON.stringify(basketProducts));
                    } else {
                        basketProducts = basketProducts.filter(el => el !== item.id)
                        localStorage.setItem("basket", JSON.stringify(basketProducts));
                        setTimeout(() => {
                            items.style.display = 'none'
                        }, 200)
                    }
                }


            }
        }
    }
}

if (basketProducts.length === 0) {
    location.assign('/pages/empty.html')
}

