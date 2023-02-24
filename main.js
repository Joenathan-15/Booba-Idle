// default state
$('#start').show();
$('#pause').hide();
const isactive = false
var interval = null
var intervalperS = localStorage.interval



if(localStorage.interval <= 1000){
    localStorage.interval = localStorage.interval
}else{
    localStorage.interval = 2000
}


if(localStorage.boobaSize == undefined){
    localStorage.boobaSize = 0
}else{
    localStorage.boobaSize = localStorage.boobaSize
}
// console.log(localStorage.boobaSize)

var booba_size = localStorage.getItem('boobaSize');
var boobasub = localStorage.boobaSize
var click = 0;

    click = parseInt(localStorage.getItem('boobaSize'));
  $("#counter").text(localStorage.getItem('boobaSize'));



if(booba_size >= 500){
    $('#item-1').text('Booba XS')
    $('#item-1').click(function(){
        localStorage.boobaSize = localStorage.boobaSize -500
        localStorage.interval = 1800
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        location.reload();
    })
}
if(booba_size >= 10000){
    $('#item-2').text('Booba S')
    $('#item-2').click(function(){
        localStorage.boobaSize = localStorage.boobaSize -10000
        localStorage.interval = 1600
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        location.reload();
})}
if(booba_size >= 200000){
    $('#item-3').text('Booba L')
    $('#item-3').click(function(){
        localStorage.boobaSize = localStorage.boobaSize - 200000
        localStorage.interval = 1000
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        location.reload();
})}
if(booba_size >= 500000){
    $('#item-4').text('Booba XL')
    $('#item-4').click(function(){
        localStorage.boobaSize = localStorage.boobaSize -500000
        localStorage.interval = 600
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        location.reload();
})}
if(booba_size >= 1000000){
    $('#item-5').text('Booba XXL')
    $('#item-5').click(function(){
        localStorage.boobaSize = localStorage.boobaSize -1000000
        localStorage.interval = 200
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        location.reload();
})}
if(booba_size >= 1000000000){
    $('#item-6').text('Holy Booba')
    $('#item-6').click(function(){
        localStorage.boobaSize = localStorage.boobaSize -1000000000
        localStorage.interval = 1
        pause(isactive)
        $('#counter').text(localStorage.boobaSize)
        location.reload();
})}



//saat tombol start di pencet
function on(isactive) {
    //When Start is clicked
    const pause = $('#pause')
    const start = $('#start')
    pause.show();
    start.hide();
    isactive = true
    fw(isactive)
}

function fw(isactive) {
    if(isactive == true){
        interval =  setInterval(function(){
            click += 1
            localStorage.boobaSize = click;
        $('#counter').text(click)
     }, intervalperS )
    //  console.log(isactive);
    }
}

//When pause is clicked
function pause(isactive){
        const pause = $('#pause')
        const start = $('#start')
        pause.hide();
        start.show();
        isactive = false
        stop()
    clearInterval(interval);  
  }
