$(document).ready(function() {
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.modal-open-my').addClass('modal-open');
			$('.modal').addClass('in').css('display','block');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	$('.close').click(function(){
		$('.modal').removeClass('in').css('display','none');
	});
});