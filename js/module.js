document.querySelectorAll('.template').forEach(item => {
    item.addEventListener('click', event => {
    var modelPath=item.dataset.model
    var w = window.open("./appDiseno.html");
    w.model = modelPath;
    })
})
