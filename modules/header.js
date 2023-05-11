export function header(place) {
   let body = document.body
   let header = document.createElement('div')

   let uzum_icon = document.createElement('img')
   let catalog = document.createElement('button')
   let form = document.createElement('form')
   let divSearch = document.createElement('div')
   let input = document.createElement('input')
   let imgSearch = document.createElement('img')
   let accountImg = document.createElement('img')
   let accountName = document.createElement('a')
   let saved = document.createElement('a')
   let korzina = document.createElement('a')
   let divCounter = document.createElement('div')
   let counter = document.createElement('span')

   header.classList.add('header')
   uzum_icon.classList.add('uzum_icon')
   catalog.classList.add('catalog')
   form.classList.add('searchForm')
   divSearch.classList.add('divSearch')
   input.classList.add('input')
   imgSearch.classList.add('imgSearch')
   accountImg.classList.add('accountImg')
   accountName.classList.add('accountName')
   saved.classList.add('saved')
   korzina.classList.add('korzina')
   divCounter.classList.add('divCounter')
   counter.classList.add('counter')

   uzum_icon.src = '/public/uzum-logo.svg'
   input.placeholder = 'Искать товары'
   imgSearch.src = '/public/search.svg'
   accountImg.src = '/public/customer.svg'
   accountName.innerHTML = 'Войти'
   accountName.href = '/pages/registration.html'
   saved.innerHTML = 'Избранное'
   saved.href = '/pages/saved.html'
   korzina.innerHTML = 'Корзина'
   korzina.href = '#'
   counter.innerHTML = 0
   catalog.innerHTML = 'Каталог'


   uzum_icon.onclick = () => {
      location.assign('/index.html')
   }
   
   body.prepend(header)
   header.append(uzum_icon, catalog, form, accountImg, accountName, saved, korzina, divCounter)
   form.append(divSearch)
   divSearch.append(input, imgSearch)
   divCounter.append(counter)
}
