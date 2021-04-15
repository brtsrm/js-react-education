const verileriGetir = async () => {

    const res = await fetch('veriler.json');
    return await res.json();
    
}

verileriGetir().then((res) => {
    console.log(res)
})