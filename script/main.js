$(function () {
	$('.main__list__item').on('click', function (e) {
		e.preventDefault();

		var
			$this = $(this),
			container = $this.closest('.main__list'),
			item = $this.closest('.main__list__item'),
			items = $('.main__list__item', container),
			otherContent = $('.main__team__member', container),
			content = item.find('.main__team__member'),
			reqHeight = item.find('.main__team__member__photo').outerHeight();

		if (!item.hasClass('main__team__member_active')) {
			items.removeClass('main__team__member_active');
			item.addClass('main__team__member_active');

			otherContent.css({
				'height' : 0
			});

			content.css({
				'height' : reqHeight
			});
		} else {

			item.removeClass('main__team__member_active');
			content.css({
				'height' : 0
			});
		}
	});

});

$(function(){

  $(".main__menu__type").on("click", function(){

    var box = $(".main__menu__box"),
    	type = $(".main__menu__type");


    if ($(this).hasClass("main__menu__type_active")) {
    	$(this).removeClass("main__menu__type_active");
    	$(this).parent().removeClass("main__menu__box_active");

    } else {
    	box.removeClass("main__menu__box_active");
    	type.removeClass("main__menu__type_active")
    	$(this).addClass("main__menu__type_active");
    	$(this).parent().addClass("main__menu__box_active");

    return false;
    }
  });
});

$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 500,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

$(function () {
	$('.navigation__item').on('click', function (e) {
		e.preventDefault();
	});

	$(".link_about").on('click', function () {
		$(".link_about").moveTo(2);
	});

	$(".link_burger").on('click', function () {
		$(".link_burger").moveTo(3);
	});

	$(".link_team").on('click', function () {
		$(".link_team").moveTo(4);
	});

	$(".link_menu").on('click', function () {
		$(".link_menu").moveTo(5);
	});

	$(".link_feedback").on('click', function () {
		$(".link_feedback").moveTo(6);
	});

	$(".link_order").on('click', function () {
		$(".link_order").moveTo(7);
	});

	$(".link_contacts").on('click', function () {
		$(".link_contacts").moveTo(8);
	});

});


$(function(){
  $("#phone").mask("8(999) 999-9999");
});


$(function() {
	$('.main__customer__more').on('click', function(e) {
		e.preventDefault();

		$('.main__customer__feedback__popup').bPopup();
	});
});

 $(document).ready(function(){
      $('.slider').bxSlider();
 });

$(document).ready(function(){
	ymaps.ready(init);    
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [59.93, 30.38],
                zoom: 12,
                controls: []
        	}); 

        	myMap.behaviors.disable([
                'scrollZoom', 'drag'
            ]);

        	var marks = [
                [59.935070, 30.279720],
                [59.927580, 30.323740],
                [59.975510, 30.331505]   
            ],

            myCollection = new ymaps.GeoObjectCollection({}, {
                draggable: false,
                iconLayout: 'default#image',
                iconImageHref: '../images/icons/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-26, -52]
            });

            for (var i = 0; i < marks.length; i++) {
                myCollection.add(new ymaps.Placemark(marks[i]));
            };

            myMap.geoObjects.add(myCollection);

		};

});


$(function () {
  $('#submit').on('click', function (e) {
    e.preventDefault();

    var userName = $('#name').val();

    $.post(
        "../main.php",
        {
          user_name: userName,
        },
        $(function () {
          $('.order__emailed').bPopup();
        })
    );
  });
});
