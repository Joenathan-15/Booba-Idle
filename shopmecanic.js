
function shop_refresh(){
var booba_size = localStorage.boobaSize
var item_1 = localStorage.item_1
var item_2 = localStorage.item_2
var item_3 = localStorage.item_3
var item_4 = localStorage.item_4
var item_5 = localStorage.item_5
var item_6 = localStorage.item_6

var booba_size  = localStorage.boobaSize

if(booba_size >= 500 && item_1 != 1 && item_2 != 1 && item_3 != 1 && item_4 != 1 && item_5 != 1 && item_6 != 1){
    $('#item-1').text('Booba XS')
    $('#item-1').click(function(){
        pause(isactive)
         booba_size = booba_size - 500
         localStorage.boobaSize = booba_size
        localStorage.interval = 1800
        $('#counter').text(localStorage.boobaSize)
        localStorage.item_1 = 1
        location.reload
    })
}
if(booba_size >= 10000 && item_2 != 1 && item_3 != 1 && item_4 != 1 && item_5 != 1 && item_6 != 1){
    $('#item-2').text('Booba S')
    $('#item-2').click(function(){
        booba_size = booba_size - 10000
         localStorage.boobaSize = booba_size
        localStorage.interval = 1600
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        localStorage.item_2 = 1
        location.reload();
})}
if(booba_size >= 200000 && item_3 != 1 && item_4 != 1 && item_5 != 1 && item_6 != 1){
    $('#item-3').text('Booba L')
    $('#item-3').click(function(){
        booba_size = booba_size - 10000
         localStorage.boobaSize = booba_size
        localStorage.interval = 1000
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        localStorage.item_3 = 1
        location.reload();
})}
if(booba_size >= 500000 && item_4 != 1 && item_5 != 1 && item_6 != 1){
    $('#item-4').text('Booba XL')
    $('#item-4').click(function(){
        booba_size = booba_size - 500000
         localStorage.boobaSize = booba_size
        localStorage.interval = 600
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        localStorage.item_4 = 1
        location.reload();
})}
if(booba_size >= 1000000 && item_5 != 1 && item_6 != 1){
    $('#item-5').text('Booba XXL')
    $('#item-5').click(function(){
        booba_size = booba_size - 1000000
         localStorage.boobaSize = booba_size
        localStorage.interval = 200
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        localStorage.item_5 = 1
        location.reload();
})}
if(booba_size >= 1000000000 && item_6 != 1){
    $('#item-6').text('Holy Booba')
    $('#item-6').click(function(){
        booba_size = booba_size - 1000000000
         localStorage.boobaSize = booba_size
        localStorage.interval = 1
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        localStorage.item_6 = 1
        location.reload();
})}

if(item_6 == 1 && booba_size >= 100000){
    $('#item-7').text('Rebirth To Booba Master')
    $('#item-7').click(function(){
        localStorage.removeItem('item_1')
        localStorage.removeItem('item_2')
        localStorage.removeItem('item_3')
        localStorage.removeItem('item_4')
        localStorage.removeItem('item_5')
        localStorage.removeItem('item_6')
        localStorage.interval = 2000
        localStorage.boobaSize = 0
        localStorage.Rebirth =+ 1
        localStorage.clickPers = 2
        location.reload();
})}
}