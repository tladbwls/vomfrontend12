$(function () {
 let imgs = "";

 for (let i = 0; i < 200; i++) {
    imgs += `<img src = 'img/pic${i}.jpg' />`;
 }

 $("section").html(imgs);
    
 $("section").on('mousemove', function(e){
    let posX = e.pageX;
    const wid = $(window).width();
    const percent = Math.floor((posX / wid) * 200);

    $('section img').hide();
    $('section img').eq(percent).show();
 })
});