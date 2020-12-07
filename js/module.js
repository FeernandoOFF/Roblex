// function consNombre(nombre){
//     // alert("Hola")
//     var modelName= `modelos/${nombre}.glb`
//     window.open("./appDiseno.html")
//     return modelName;
// }

// module.exports =consNombre()
// var silla  = document.getElementById("silla1")
document.querySelectorAll(".template").forEach(element => {
    element.addEventListener("click",()=>{
        // module k=element.dataset.name
        console.log("hola")
        window.open("../appDiseno.html")
    })
});
export var months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];