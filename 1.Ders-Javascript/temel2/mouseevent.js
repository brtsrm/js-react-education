const kutu = document.querySelector(".kutu")
kutu.addEventListener('mousemove', e => {
    kutu.textContent = `kutu x noktası ${e.offsetX} ve y noktası ${e.offsetY}`
})