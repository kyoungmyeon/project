// $(function(){
//     $('.appbarBt').on('click', function(){
//         $('.header-menu-bar').stop().animate({left:100 + '%'},500);
//         $('.mobile-modal-menu').stop().animate({left: 0},500);
//     });
//     $('.appbarCloseBt').on('click', function(){
//         $('.header-menu-bar').stop().animate({left:0 + '%'},500);
//         $('.mobile-modal-menu').stop().animate({left: '-100%'},500);
//     });
//     $(window).resize(function () {windowResizeFn();  });
//     function windowResizeFn() {
//         if ($(window).innerWidth()>1090) {
//             if(t==0){
//                 $('.appbarCloseBt').trigger('click');
//                 t=1;    //false
                
//             }
//         } else {
//             t=0;    //true

//         }
//       };
// });

// // video control
// var winH=$(window).innerHeight();
// var winW=$(window).innerWidth();
// var vidW=$('#mainVideo').innerWidth();
// var vidW=$('#mainVideo').innerHeight();
// var videoPlay='on'; //기본은 켜진(on)상태 비디오
// var soundMuted='off'; //기본은 꺼진(off)상태 소리



// $('#mainVideo').get(0).autoplay=true; //호환성
// $('#mainVideo').get(0).loop=0; //비디오재생 loop=0 Once(한번)
// $('#mainVideo').get(0).muted=true; //소리끄기(true) 켜기(false)

// $(window).resize(function(){
//     videoResizeFn();
// });
// function videoResizeFn(){
//     winH=$(window).innerHeight();
//     winW=$(window).innerWidth();
//     vidW=$('#mainVideo').innerWidth();
//     vidH=$('#mainVideo').innerHeight();

//     $('.section1-main-video').css({width:100+'%', height: winH});
//     if(winH>vidH){ //창 높이보다 비디오 높이가 작을때
//         $('#mainVideo').css({width:'auto', height:winH});
//     }
//     if(winW>vidW){ //창 너비보다 비디오 높이가 작으면
//         $('#mainVideo').css({width:winW, height:'auto'});
//     }
//     // 비디오 수직 수평 가운데 정렬
//     $('#mainVideo').css({marginTop:(winH-vidH)/2,marginLeft:(winW-vidW)/2})
// }
// //정지 버튼을 누르면 플레이 버튼을 누르면
// $('.playPauseIconBt').on('click', function(){
//     if(videoPlay==='on'){
//         $('#mainVideo').get(0).pause();
//         videoPlay='off'
//         $(this).find('img').attr('src','./img/icon-player-play.png')
//     }else{
//         $('#mainVideo').get(0).play();
//         videoPlay='on'
//         $(this).find('img').attr('src','./img/icon-player-pause.png')
//     }

// });

//     // 소리
// $('.mutedIconBt').on({click:function(){
//         if(soundMuted==='off'){
//             soundMuted='on';
//             $('#mainVideo').get(0).muted=false;
//             $(this).find('i').attr('class','fas fa-volume-off')
//         }else{
//             soundMuted='off';
//             $('#mainVideo').get(0).muted=true;
//             $(this).find('i').attr('class','fas fa-volume-mute')
//         }
//     }
  
// });
