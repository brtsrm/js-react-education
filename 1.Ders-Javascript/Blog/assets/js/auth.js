// Auth durumunu izle
auth.onAuthStateChanged(k => {
    // console.log(k)
    if (k) {
        console.log("Giriş işlemi başarılı")

        // veriler getir

        db.collection("makaleler").onSnapshot(snapshot => {
            // console.log(snapshot.docs)

            makeleYukle(snapshot.docs);
            kullaniciYukle(k)
        });

    } else {
        console.log("Çıkış işlemiş başarılı")
        makeleYukle([]);
        kullaniciYukle()
    }
})



// makale oluştur


const makaleOlusturForm = document.querySelector('#makale-form');


makaleOlusturForm.addEventListener("submit", (e) => {

    e.preventDefault();
    console.log(makaleOlusturForm["title"].value);
    console.log(makaleOlusturForm["content"].value);
    db.collection("makaleler").add({
        baslik: makaleOlusturForm["title"].value,
        icerik: makaleOlusturForm["content"].value
    }).then(() => {
        const modal = document.querySelector("#modal-create")
        M.Modal.getInstance(modal).close();
        makaleOlusturForm.reset;
    }).catch(err => {
        console.log(err.message)
    })


})

// üyelik oluştur

const uyelikForm = document.querySelector("#signup-form");

uyelikForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const mail = uyelikForm["signup-email"].value;
    const password = uyelikForm["signup-password"].value;

    auth.createUserWithEmailAndPassword(mail, password).then(auth => {
        // console.log(auth)

        return db.collection('kullanicilar').doc(auth.user.uid).set({
            bio:uyelikForm['signup-bio'].value
        }).then(() => {

            const modal = document.querySelector("#modal-singup");
            M.Modal.getInstance(modal).close()
            uyelikForm.reset();

        })
    })

})


const cikis = document.querySelector("#logout");

cikis.addEventListener("click", e => {
    e.preventDefault();
    auth.signOut().then(() => {
        // console.log("Çıkış işlemi başarılı");
    })
})


// Giriş işlemi


const loginForm = document.querySelector("#signin-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();


    const mail = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    auth.signInWithEmailAndPassword(mail, password).then(() => {
        // console.log(sonuc.user)

        const modal = document.querySelector("#modal-login")



        M.Modal.getInstance(modal).close();
        loginForm.reset;
    })

})