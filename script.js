
const img = document.getElementById('lightImage')
console.log(img)

function turnon()
{
    img.src ='./image/light on.png'
}
function turnoff()
{
    img.src ='./image/light off.png'
    img.style.marginLeft = '-3px'
    img.style.marginBottom ='10px'
}