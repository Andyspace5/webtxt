$(function(){
	
	//主页面到子页面的跳转
	$(".list_impetus").click(function(){
		location.href="impetus.html";
	})
	$(".list_environment").click(function(){
		location.href="environment.html";
	})
	$(".list_it").click(function(){
		location.href="it.html";
	})
	$(".list_analysis").click(function(){
		location.href="analysis.html";
	})
	
	//切换header上的标题12345
	$(".ups_header h1").click(function(){
		$(".ups_header h1 .change").toggle();
	})
	$(".ups_header .change div").click(function(){
		var txt = $(this).text();
		$(".ups_header h1 span").text(txt);
		
	})
	
	//header上的li的样式切换，以及下面section的内容切换
	$(".ups_header>.nav>li").click(function(){
		$(this).addClass("li_ck").siblings("li").removeClass("li_ck");
	})
	$(".ups_section_state").hide();
	
	$(".ups_date").click(function(){
		$(".ups_section_date").show().siblings("section").hide();
	})
	$(".ups_state1").click(function(){
		$(".ups_section_state1").show().siblings("section").hide();
	})
	
	$(".ups_state2").click(function(){
		$(".ups_section_state2").show().siblings("section").hide();
	})
	
	
	//数据分析上的双切换按钮的切换
	$(".any_change .ups").click(function(){
		$(this).children(".change").toggle();
		$(this).siblings(".u").find(".change").hide();
	})
	$(".any_change .ups .change div").click(function(){
		var txt = $(this).text();
		$(".any_change .ups").children("span").text(txt);
	})
	$(".any_change .u").click(function(){
		$(this).children(".change").toggle();
		$(this).siblings(".ups").find(".change").hide();
	})
	$(".any_change .u .change div").click(function(){
		var txt = $(this).text();
		$(".any_change .u").children("span").text(txt);
	})

	
	
})
