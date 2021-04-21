const makaleler = document.querySelector(".guides")
const cikislinkleri = document.querySelectorAll(".logged-out");
const girislinkleri = document.querySelectorAll(".logged-in");

const uyelikDetaylari = document.querySelector(".account-details")


const kullaniciYukle = (kullanici) => {

    if (kullanici) {
        db.collection("kullanicilar").doc(kullanici.uid).get().then(doc => {
            let html = `
            <div>Kullanıcı mail : <b>${kullanici.email}</b></div>
            <div>
            Bio<br />
                ${doc.data().bio}
            </div>
            
            `;
            uyelikDetaylari.innerHTML = html;
        });
        girislinkleri.forEach(item => item.style.display = "block")
        cikislinkleri.forEach(item => item.style.display = "none")
    } else {
        uyelikDetaylari.innerHTML = ""
        girislinkleri.forEach(item => item.style.display = "none")
        cikislinkleri.forEach(item => item.style.display = "block")
    }
}

const makeleYukle = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const makale = doc.data();
            const li = `
            <li class='makale'>
            <div class="collapsible-header">${makale.baslik}</div>
            <div class="collapsible-body"><span>${makale.icerik}</span></div>
            </li>
            `
            html += li;
        });
        makaleler.innerHTML = html;

    } else {
        makaleler.innerHTML = "<h5 class='center-align'>Makaleleri görebilmeniz için giriş yapınız</h5>"
    }

}

document.addEventListener("DOMContentLoaded", () => {
    var modals = document.querySelectorAll(".modal");
    M.Modal.init(modals)

    var makaleler = document.querySelectorAll(".collapsible");
    M.Collapsible.init(makaleler)

})

