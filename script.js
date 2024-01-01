var btn = document.querySelector('.btn')
console.log(btn)
let qrImg = document.querySelector('#qrImg')
let input = document.querySelector('.input')

btn.addEventListener('click',()=>{
    if(input.value == ''){
        alert('Please Enter Something to Get QR-Code')
    }else{
            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
        input.value=''
        }
        
})