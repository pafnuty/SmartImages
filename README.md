SmartImages
===========

SmartImages - Простой плагин для jQuery для показа всплывающих картинок

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