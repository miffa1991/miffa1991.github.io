$("input[name=tel]").each(function(){
	  $(this).mask("+7 (999) 999-99-99");
});
new setupAjaxForm('control-call');
new setupAjaxForm('control-prob');
new setupAjaxForm('control-ras4');
new setupAjaxForm('control-for');
$("#calc-data input").on("change",function(){
	input_name = $(this).attr("name");
	input_val = $(this).val();
	if(input_val < 1) input_val = 0;
	$("#control-ras4 input[name="+input_name+"]").val(input_val);
});
$("#control-ras4").on("submit", function(){
	$("#control-ras4 input[hidden=hidden]").each(function(){
		vall = $(this).val();
		if(vall == "") $(this).val(0);
	});
});
	$(function(){
$(".forpop").on("click", function(){
	zag = $(this).prevAll(".s3-c-descr").text();
	$("#for h2").text(zag);
	$("#for input[name=for]").val(zag);
});

		$("#gotocalc").on("click", function(){
		$("html,body").animate({ scrollTop: '2120px'}, 1500);
		});
		$(".s6-cnt li").on("click", function(){
			tip = $(this).find(".s6-list").text();
			$(".s6-icon").hide();
			$(".s6-li-active").removeClass("s6-li-active");
			$(this).toggleClass("s6-li-active");
			$(this).find(".s6-icon").show();
			$("#control-ras4 input[name=tip]").val(tip);
		});
		$(window).scroll(function(e){
    var scrolled = $(window).scrollTop();
   $('.prlx1').css('top',(720-(scrolled*.5))+'px');
   $('.prlx2').css('top',(2650-(scrolled*.25))+'px'); 
});

		///Popup
		$(".popup-link").on("click", function(){
			popup = "#"+$(this).attr("popup");
			$(popup).fadeIn(300);
			$(".wrap").fadeIn(300);
			return false;
		});
		$(".wrap, .pop-close").on("click", function(){
			$('.popup').fadeOut(300);
			$(".wrap").fadeOut(300);
		});
	});

	function setupAjaxForm(form_id, form_validations){
    var form = '#' + form_id;
    var disableSubmit = function(val){
        $(form + ' input[type=submit]').attr('disabled', val);
    };
    var options = {
        dataType:  'json',
        beforeSubmit: function(){
            if(typeof form_validations == "function" && !form_validations()) {
              return false;
            }
            disableSubmit(true);
        },
        success: function(json){
        	 if(json.type == 'error'){
		alert(json.message);
	}
            disableSubmit(false);
            if(json.type == 'success'){
            	$('.popup').fadeOut(300);
            	$("#success").fadeIn(300);
                $(form).clearForm();
			}
        }
    };
    $(form).ajaxForm(options);
}