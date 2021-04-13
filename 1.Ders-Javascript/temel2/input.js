const form = document.querySelector(".signup");
// const inputText = document.querySelector("#kullaniciAd")
const inputText = document.querySelector('[name="kullaniciAd"]')
form.addEventListener('submit', e => {
    // Post işlemini yapmıyor
    e.preventDefault();
    console.log(inputText.value)
    console.log(form.kullaniciAd.value);
})