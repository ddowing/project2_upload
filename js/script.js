var $headerGnb=$('header .header-gnb')
var $gnbMenu=$headerGnb.find('> .w1200 .gnb li')
var $openGnb=$headerGnb.find('.open-gnb')

$gnbMenu.hover(
    function(){
        $openGnb.addClass('active')
        $openGnb.hover(function(){},function(){})
    },
    function(){
        $openGnb.removeClass('active')
    })