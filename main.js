// default state
shop_refresh()
$('#rebirth-shop').hide()
$('#items-storage-2-btn').hide()
$('#start').show();
$('#pause').hide();

const isactive = false
var interval = null
var intervalperS = localStorage.interval
var clickcount = localStorage.clickPers

if(clickcount == null){
    clickcount = 1
}else{
    clickcount = Number(localStorage.clickPers) 
}


if(intervalperS < 2000){
    intervalperS = intervalperS
}else{
    intervalperS = 2000
}

if(localStorage.boobaSize == undefined){
     localStorage.boobaSize = Number(0)
}else{
     localStorage.boobaSize = Number(localStorage.getItem('boobaSize'))
}

var booba_size = localStorage.getItem('boobaSize');
var boobasub = localStorage.boobaSize
var click = 0;

    click = parseInt(localStorage.getItem('boobaSize'));
  $("#counter").text(localStorage.getItem('boobaSize'));

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
            click += clickcount
            shop_refresh()
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

  if(localStorage.Rebirth ==  1){
    $('#items-storage-2-btn').show()
    $('#items-storage-2-btn').click(function(){
        $('#main-content').hide()
        $('#rebirth-shop').show()
        $('#items-storage-1-btn').click(function(){
            $('#main-content').show()
        $('#rebirth-shop').hide()
        })
    })
}