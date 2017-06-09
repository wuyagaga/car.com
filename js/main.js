$(function(){
	
//放回顶部
	var backToBack = $('.back-to-top'),
		toolbar	   = $('.toolbar') ;
	backToBack.on('click',function(){
		// console.log('bakbackbakdfa')
		$('body,html').animate({
			scrollTop:0
		},400)
	})
	$(window).on('scroll',function(){
		// console.log('bakbackbakdfa')
		if($(window).scrollTop()<$(window).height()){
			toolbar.fadeOut()
		}else{
			toolbar.fadeIn()
		}
	})
	$(window).trigger('scroll')

// 工具类提示
$('#yonghudenglu').tooltip({html : true })
$('#lianxiwomen').tooltip({html : true })
// 下拉菜单
 dropdownOpen();








})
function dropdownOpen() {
 var $dropdownLi = $('li.dropdown');
 $dropdownLi.mouseover(function() {
 $(this).addClass('open');
 }).mouseout(function() {
 $(this).removeClass('open');
 });
}