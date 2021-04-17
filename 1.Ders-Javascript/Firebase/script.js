const button = document.getElementById("ekle")
const sil = document.getElementById("sil")

db.collection("haberler").get().then((snapshot) => {
    // console.log(snapshot)
    // console.log(snapshot.docs[0].data())

    snapshot.docs.forEach(element => {
        // console.log(element.data())
    });
}).catch((err) => {
    // console.log(err)
});

button.addEventListener("click", () => {
    const now = new Date();
    var haber = {
        ad: 'haber 2',
        icerik: 'içerik 2',
        tarih: firebase.firestore.Timestamp.fromDate(now),
    };
    db.collection("haberler").add(haber).then(() => {
        console.log("haber eklendi");
    }).catch(() => {
        console.log("haber eklenemedi")
    })
});

sil.addEventListener("click", () => {
    let key = "KNqZmVIP7mqCe6OYuHdw";
    const silinecekBelge = db.collection("haberler").doc(`${key}`);
    silinecekBelge.delete().then((e) => {
        console.log('veri başarılı şekilde silinmiştir')
    })
})

// Firestore değişikliklerin dinlenmesi



db.collection("haberler").onSnapshot((snapshot) => {
    // console.log(snapshot.docChanges())
    snapshot.docChanges().forEach((change) => {

        const doc = change.doc;

        if (change.type === 'added') {
            console.log(doc.data(), doc.id)
        }
        if (change.type === "remove") {
            console.log(doc.data(), doc.id)

        }


    })
})

