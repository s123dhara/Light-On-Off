
const img = document.getElementById('lightImage')
console.log(img)

function turnon()
{
    img.src ='light on.png'
}
function turnoff()
{
    img.src ='light off.png'
    img.style.marginLeft = '-3px'
    img.style.marginBottom ='10px'
}
