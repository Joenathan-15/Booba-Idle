


function lockshop(stats){
    switch(stats){
        case 'item1':
            $('#item-1').text('')
            $('#item-1').prepend('<img class="items-shop mx-auto" src="/assets/logo/lock.svg" alt="">')
            $('#item-1').removeAttr('id');
            location.reload()
        break;
        case 'item2':
            $('#item-2').text('')
            $('#item-2').prepend('<img class="items-shop mx-auto" src="/assets/logo/lock.svg" alt="">')
            $('#item-2').removeAttr('id');
            location.reload()
        break;
        case 'item3':
            $('#item-3').text('')
            $('#item-3').prepend('<img class="items-shop mx-auto" src="/assets/logo/lock.svg" alt="">')
            $('#item-3').removeAttr('id');
            location.reload()
        break;
        case 'item4':
            $('#item-4').text('')
            $('#item-4').prepend('<img class="items-shop mx-auto" src="/assets/logo/lock.svg" alt="">')
            $('#item-4').removeAttr('id');
            location.reload()
        break;
        case 'item5':
            $('#item-5').text('')
            $('#item-5').prepend('<img class="items-shop mx-auto" src="/assets/logo/lock.svg" alt="">')
            $('#item-5').removeAttr('id');
            location.reload()
        break;
        case 'item6':
            $('#item-6').text('')
            $('#item-6').prepend('<img class="items-shop mx-auto" src="/assets/logo/lock.svg" alt="">')
            $('#item-6').removeAttr('id');
            location.reload()
        break;

}}



function shop_refresh(){
var booba_size = localStorage.boobaSize
var item_1 = localStorage.item_1
var item_2 = localStorage.item_2
var item_3 = localStorage.item_3
var item_4 = localStorage.item_4
var item_5 = localStorage.item_5
var item_6 = localStorage.item_6

var item_1_price = Number(180)
var item_2_price = Number(10000)
var item_3_price = Number(200000)
var item_4_price = Number(500000)
var item_5_price = Number(1000000)
var item_6_price = Number(1000000000)

var clicks  = Number(localStorage.boobaSize)

if(clicks >= 180 && item_1 != 1 && item_2 != 1 && item_3 != 1 && item_4 != 1 && item_5 != 1 && item_6 != 1){
    $('#item-1').text('Booba XS')
    $('#item-1').click(function(){
        pause(isactive)
        click = clicks - item_1_price
        localStorage.setItem('boobaSize', click)
        intervalperS = 1800
        localStorage.item_1 = 1
        let stats = 'item1'
        lockshop(stats)
        savegameshop(click)
        $('#counter').text(localStorage.getItem('boobaSize'))
        fw(isactive, click)
    })
}
if(booba_size >= 10000 && item_2 != 1 && item_3 != 1 && item_4 != 1 && item_5 != 1 && item_6 != 1){
    $('#item-2').text('Booba S')
    $('#item-2').click(function(){
        pause(isactive)
        click = clicks - item_2_price
        localStorage.setItem('boobaSize', click)
        intervalperS = 1600
        localStorage.item_2 = 1
        let stats = 'item2'
        lockshop(stats)
        savegameshop(click)
        $('#counter').text(localStorage.getItem('boobaSize'))
        fw(isactive, click)
})}
if(booba_size >= 200000 && item_3 != 1 && item_4 != 1 && item_5 != 1 && item_6 != 1){
    $('#item-3').text('Booba L')
    $('#item-3').click(function(){
        pause(isactive)
        click = clicks - item_3_price
        localStorage.setItem('boobaSize', click)
        intervalperS =  1000
        localStorage.item_3 = 1
        let stats = 'item3'
        lockshop(stats)
        savegameshop(click)
        $('#counter').text(localStorage.getItem('boobaSize'))
        fw(isactive, click)
})}
if(booba_size >= 500000 && item_4 != 1 && item_5 != 1 && item_6 != 1){
    $('#item-4').text('Booba XL')
    $('#item-4').click(function(){
        pause(isactive)
        click = clicks - item_4_price
        localStorage.setItem('boobaSize', click)
        intervalperS =  600
        localStorage.item_4 = 1
        let stats = 'item4'
        lockshop(stats)
        savegameshop(click)
        $('#counter').text(localStorage.getItem('boobaSize'))
        fw(isactive, click)
})}
if(booba_size >= 1000000 && item_5 != 1 && item_6 != 1){
    $('#item-5').text('Booba XXL')
    $('#item-5').click(function(){
        pause(isactive)
        click = clicks - item_5_price
        localStorage.setItem('boobaSize', click)
        intervalperS =  200
        localStorage.item_5 = 1
        let stats = 'item5'
        lockshop(stats)
        savegameshop(click)
        $('#counter').text(localStorage.getItem('boobaSize'))
        fw(isactive, click)
})}
if(booba_size >= 1000000000 && item_6 != 1){
    $('#item-6').text('Holy Booba')
    $('#item-6').click(function(){
        pause(isactive)
        click = clicks - item_6_price
        localStorage.setItem('boobaSize', click)
        intervalperS =  1
        localStorage.item_6 = 1
        let stats = 'item4'
        lockshop(stats)
        savegameshop(click)
        $('#counter').text(localStorage.getItem('boobaSize'))
        fw(isactive, click)
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