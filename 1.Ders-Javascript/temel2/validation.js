const form = document.querySelector(".signup")

const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    const kullaniciAd = document.querySelector("#kullaniciAd").value;
    // console.log(kullaniciAd.value);

    const kullaniciDesen = /^[a-zA-Zİ]{5,10}$/;

    if (kullaniciDesen.test(kullaniciAd)) {
        feedback.innerHTML = "Doğru"
        feedback.style.color = "green"
    } else {
        feedback.innerHTML = "Hatalı"
        feedback.style.color = "red"
    }

})