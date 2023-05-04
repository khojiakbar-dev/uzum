import {header} from '/modules/header'
import axios from 'axios'
let productCont = document.querySelector('.productInfo')
header()




axios.get("http://localhost:3000/goods")
.then(res => product_reload(res.data , productCont))



function product_reload(arr, place) {
    place.innerHTML = "";
    
    for (let item of arr) {
        place.innerHTML += `
        <div class="topOfProduct">
    <div class="left-scroll">
        <img src="${item.media}" class="swiperImg" alt="">
        </div>
        <div class="sliderProduct">
        <img src="/public/arrow-left.svg" class="arrowProduct-left" alt="">
        <div class="productImgs">
        <img src="${item.media}" class="carouselImg" alt="">
        </div>
        <img src="/public/arrow-right.svg" class="arrowProduct-right" alt="">
        </div>
        <div class="info">
        <h2 class="titlePR">${item.title}</h2>
        <div class="prices">
        <span class="newPrice">${item.price}</span>
        <span class="discountPrice">45 000 сум</span>
        </div>
        <div class="counter">
        <span class="minus">-</span>
        <span class="numberCount">1</span>
        <span class="plus">+</span>
        </div>
        <div class="hr"></div>
        <p>Станьте востребованным разработчиком. Вы изучите основы программирования и основные концепции
        компьютерных наук, цифровые технологии, операционные системы, программное обеспечение, базы данных,
        системы аналитики, языки программирования и многое другое. Познакомитесь с тестированием и системным
        анализом. На программе сможете сделать осознанный выбор специализации и технологий, прокачаться в
        выбранном направлении.
        </p>
        <div class="btns">
        <button class="addBasket">Добавить в корзину</button>
        <button class="addSaved">Добавить в избранное</button>
        </div>
        </div>
        </div>
        <div class="bottomOfProduct">
        <div class="descProduct">
        <h2>Описание товара</h2>
        <p>
        Стиральный порошок Tide Lenor Touch подходит для использования в стиральных машинах любого типа.
        Сочетание очищающего эффекта порошка и смягчающего эффекта Lenor делает вещи безупречно чистыми,
        нежными и свежими. Стирайте согласно рекомендациям на ярлыках текстильных изделий. Рекомендованный
            режим стирки — от 20 минут при температуре воды 30'C и выше. Обратите внимание: порошок не
            предназначен для стирки изделий из шерсти и шелка. Синтетическое моющее средство порошкообразное для
            использования в стиральных машинах любого типа. Рекомендованная температура стирки указана на
            ярлыках текстильных изделий. Не перегружайте стиральную машину. Оставьте зазор в ширину ладони между
            загруженным бельем и барабаном. Белье будет двигаться свободно, стирка будет более эффективной.
            </p>
            </div>
            <div class="carousel"></div>
            </div>    
            `;
        }
        
        //   const boxes = document.querySelectorAll('.box')
        
        //   boxes.forEach(box => {
            //     box.onclick = () => {
                //         location.assign('/pages/movieid.html?id=' + box.id)
                //     }
                //   });
                
            }
            
            let prev = document.querySelector('.arrowProduct-left')
            let next = document.querySelector('.arrowProduct-right')
            let sliders = document.querySelectorAll('.carouselImg') 
            
            let slideIndex = 0
            showSlides(slideIndex)
            
            function showSlides(n) {
            
                if(n >= sliders.length  ) {
                    slideIndex = 0
                }
                if(n < 0) {
                    slideIndex = sliders.length - 1
                }
            
                sliders.forEach(el => el.classList.add('hide'))
            
                sliders[slideIndex].classList.remove('hide')
                sliders[slideIndex].classList.add('show')
            }
            
            prev.onclick = () => {
                slideIndex--
                showSlides(slideIndex)
            }
            next.onclick = () => {
                slideIndex++
                showSlides(slideIndex)
            }
