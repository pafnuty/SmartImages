/* 
	Плагин		:	jQuery.smartImages
	Версия		:	1.0 (06.08.2012)
	Автор		:	ПафНутиЙ 
	Сайт		:	http://pafnuty.name
	Назначение	:	Вывод всплывающих картинок при наведении на миниатюру


	Использование:

		HTML

		<div class="thumbs">
			<img data-image="10.png" src="1.png" alt="1" />
			<img data-image="20.png" src="2.png" alt="2" />
			<img data-image="30.png" src="3.png" alt="3" />
			<img data-image="40.png" src="4.png" alt="4" />
		</div>

	Инициализация:

		jQuery(function($) {
			$(".thumbs img").smartImages();
		});	

*/

$.fn.smartImages = function(prop) {

	var options = $.extend({
		wrap_id: "preview",		//ID создаваемого пустого элемента, в который будет вставлена картинка.
		cursor_paddindg: 15,	// Отступ картинки от курсора мышки.
		img_get: "image", 		//название атрибута  data-* для указания картинки.
		fadein: 200
	}, prop);


	function getXY(e) {
		if ($(window).width() - (offset * 2) >= $("#" + options.wrap_id).width() + e.pageX) {
			left_pos = e.pageX + offset;
		} else {
			left_pos = e.pageX - $("#" + options.wrap_id).width() - offset;
		}
		top_pos = e.pageY - ($("#" + options.wrap_id).height() / 2);
		return {
			left: left_pos,
			top: top_pos
		};
	}

	offset = options.cursor_paddindg;
	var left_pos;

	this.hover(function(e) {
		$("body").append("<p id='" + options.wrap_id + "'><img src='" + $(this).data(options.img_get) + "' /></p>");
		pos = getXY(e);
		$("#" + options.wrap_id).css({
			left: pos.left,
			top: pos.top
		}).fadeIn(options.fadein);
	}, function() {
		$("#" + options.wrap_id).remove();
	});

	this.mousemove(function(e) {
		pos = getXY(e);
		$("#" + options.wrap_id).css({
			left: pos.left,
			top: pos.top
		});
	});
	return this;
};
