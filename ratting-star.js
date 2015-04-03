$(function(){
	var a = document.querySelectorAll(".kuai");
	var b = document.querySelectorAll(".kuai-1");
	var c = document.querySelectorAll(".kuai-2");
	var flag ;
	$(".kuai").on("mouseenter",function(){
		var this_position = [].indexOf.call(a,this);
		var d = this_position;
		$(a).removeClass("on");
		$(b).removeClass("on-1");
		$(c).removeClass("on-2");
		$(b[d]).addClass("on-1");
		$(c[d]).addClass("on-2");
		for(var i in a){
			if(i>this_position){ break;}
			a[i].className += " on";
		}
	});
	$(".kuai").on("click",function(){
		flag = [].indexOf.call(a,this);;
	})
	$(".kuai").on("mouseout",function(){
		$(a).removeClass("on")
		$(b).removeClass("on-1");
		$(c).removeClass("on-2");
		$(b[flag]).addClass("on-1");
		$(c[flag]).addClass("on-2");
		if(flag||flag==0){
			for(var i in a){
			if(i>flag){ break;}
			a[i].className += " on";
			}
		}
	})
	$(".kuai-1").on("mouseenter",function(){
		var this_position = [].indexOf.call(b,this);
		var d = this_position;
		$(a).removeClass("on");
		$(b).removeClass("on-1");
		$(c).removeClass("on-2");
		$(b[d]).addClass("on-1");
		$(c[d]).addClass("on-2");
		for(var i in a){
			if(i>this_position){ break;}
			a[i].className += " on";
		}
	});
	$(".kuai-1").on("click",function(){
		flag = [].indexOf.call(b,this);;
	})
	$(".kuai-1").on("mouseout",function(){
		$(a).removeClass("on")
		$(b).removeClass("on-1");
		$(c).removeClass("on-2");
		$(b[flag]).addClass("on-1");
		$(c[flag]).addClass("on-2");
		if(flag||flag==0){
			for(var i in a){
			if(i>flag){ break;}
			a[i].className += " on";
			}
		}
	})
	$(".kuai-2").on("mouseenter",function(){
		var this_position = [].indexOf.call(c,this);
		var d = this_position;
		$(a).removeClass("on");
		$(b).removeClass("on-1");
		$(c).removeClass("on-2");
		$(b[d]).addClass("on-1");
		$(c[d]).addClass("on-2");
		for(var i in a){
			if(i>this_position){ break;}
			a[i].className += " on";
		}
	});
	$(".kuai-2").on("click",function(){
		flag = [].indexOf.call(c,this);;
	})
	$(".kuai-2").on("mouseout",function(){
		$(a).removeClass("on")
		$(b).removeClass("on-1");
		$(c).removeClass("on-2");
		$(b[flag]).addClass("on-1");
		$(c[flag]).addClass("on-2");
		if(flag||flag==0){
			for(var i in a){
			if(i>flag){ break;}
			a[i].className += " on";
			}
		}
	})
})