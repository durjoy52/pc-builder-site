onClick('eightGB','memory-cost',100)
onClick('sixteenGB','memory-cost',200)
onClick('ssd1','storage-cost',120)
onClick('ssd2','storage-cost',300)
onClick('ssd3','storage-cost',500)
onClick('free-delivery','delivery-cost',0)
onClick('paid-delivery','delivery-cost',20)

function onClick(clickId,updateId,price){
    document.getElementById(clickId).addEventListener('click',function(){

        updatePrice(updateId,price)
        })
}

function updatePrice(itemId,price){
    const selectingItem =document.getElementById(itemId)
selectingItem.innerText = price


const bestPrice =document.getElementById('best-price').innerText;
const memoryPrice = document.getElementById('memory-cost').innerText
const storageCost =document.getElementById('storage-cost').innerText;
const deliveryCost =document.getElementById('delivery-cost').innerText;

const totalPrice = parseFloat(memoryPrice) + parseFloat(bestPrice) + parseFloat(storageCost) + parseFloat(deliveryCost)

const total =document.getElementById('total-price')
total.innerText = totalPrice
}

document.getElementById('apply-btn').addEventListener('click',function(){
    const promoCode = 'pHero';
    const code =document.getElementById('promo-input')
    const codeValue = code.value
    if(codeValue === promoCode){
        const total = document.getElementById('total-price')
        let totalPrice =parseFloat(total.innerText)
        const discount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - discount

        total.innerText = totalPrice

    }

    code.value = ''
})