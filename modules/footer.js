 export function footer(place) {
    let body = document.body
    let footer = document.createElement('div')
    let left = document.createElement('div')
    let middle = document.createElement('div')
    let right = document.createElement('div')
    let last = document.createElement('div')

    let aboutUs = document.createElement('a')
    let delivery = document.createElement('a')
    let vacancy = document.createElement('a')
    let forUsers = document.createElement('a')
    let callCenter = document.createElement('a')
    let queAns = document.createElement('a')
    let bussiness = document.createElement('a')
    let sell = document.createElement('a')
    let registSales = document.createElement('a')

    let topSide = document.createElement('div')
    let bottomSide = document.createElement('div')

    let downloadApp = document.createElement('a')
    let imgApple = document.createElement('img')
    let apple = document.createElement('a')
    let imgGoogle = document.createElement('img')
    let google = document.createElement('a')

    let topSideTwo = document.createElement('div')
    let bottomSideTwo = document.createElement('div')
    let socialMedia = document.createElement('a')

    let aInst = document.createElement('a')
    let imgInst = document.createElement('img')
    let aTeleg = document.createElement('a')
    let imgTeleg = document.createElement('img')
    let aYouTobe = document.createElement('a')
    let imgYouTobe = document.createElement('img')
    let aFaceb = document.createElement('a')
    let imgFacebook = document.createElement('img')

    body.append(footer)
    footer.classList.add('footer')
    left.classList.add('left')
    middle.classList.add('middle')
    right.classList.add('right')
    last.classList.add('last')
    aboutUs.classList.add('aboutUs')
    delivery.classList.add('delivery')
    forUsers.classList.add('forUsers')
    callCenter.classList.add('callCenter')
    queAns.classList.add('queAns')
    bussiness.classList.add('bussiness')
    sell.classList.add('sell')
    registSales.classList.add('registSales')
    topSide.classList.add('topSide')
    bottomSide.classList.add('bottomSide')
    downloadApp.classList.add('downloadApp')
    imgApple.classList.add('imgApple')
    apple.classList.add('apple')
    imgGoogle.classList.add('imgGoogle')
    google.classList.add('google')
    topSideTwo.classList.add('topSideTwo')
    bottomSideTwo.classList.add('bottomSideTwo')
    aInst.classList.add('aInst')
    imgInst.classList.add('imgInst')
    aTeleg.classList.add('aTeleg')
    imgTeleg.classList.add('imgTeleg')
    aYouTobe.classList.add('aYouTobe')
    imgYouTobe.classList.add('imgYouTobe')
    aFaceb.classList.add('aFaceb')
    imgFacebook.classList.add('imgFacebook')
    socialMedia.classList.add('socialMedia')
    vacancy.classList.add('vacancy')

    aboutUs.innerHTML = 'О нас'
    delivery.innerHTML = 'Пункты выдачи'
    vacancy.innerHTML = 'Вакансии'
    forUsers.innerHTML = 'Пользователям'
    callCenter.innerHTML = 'Связаться с нами'
    queAns.innerHTML = 'Вопрос - Ответ'
    bussiness.innerHTML = 'Для предпринимателей'
    sell.innerHTML = 'Продавайте на Uzum'
    registSales.innerHTML = 'Вход для продавцов'
    downloadApp.innerHTML = 'Скачать приложение'
    imgApple.src = '/public/apple.svg'
    apple.innerHTML = 'AppStore'
    imgGoogle.src = '/public/google.svg'
    google.innerHTML = 'Google Play'
    socialMedia.innerHTML = 'Uzum в соцсетях'
    imgInst.src = '/public/inst.svg'
    imgTeleg.src = '/public/telegram.svg'
    imgYouTobe.src = '/public/youtobe.svg'
    imgFacebook.src = '/public/facebook.svg'

    footer.append(left, middle, right, last)
    left.append(aboutUs, delivery, vacancy)
    middle.append(forUsers, callCenter, queAns)
    right.append(bussiness, sell, registSales)

    last.append(topSide, bottomSide, topSideTwo, bottomSideTwo)
    topSide.append(downloadApp)
    bottomSide.append(imgApple, apple, imgGoogle, google)
    topSideTwo.append(socialMedia)
    bottomSideTwo.append(aInst, aTeleg, aYouTobe, aFaceb)
    aInst.append(imgInst)
    aTeleg.append(imgTeleg)
    aYouTobe.append(imgYouTobe)
    aFaceb.append(imgFacebook)


}