const form = document.querySelector(".signup")

const kullaniciDesen = /^[a-z]{5,7}$/;

form.kullaniciAd.addEventListener('keyup', (e) => {
    
    if (kullaniciDesen.test(e.target.value)) {
        form.kullaniciAd.setAttribute('class', 'basarili')
    }
    else {
        form.kullaniciAd.setAttribute('class', 'hatali')

    }
})