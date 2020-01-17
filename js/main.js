$(document).ready(function() {

	mutevideo();
	soundOnOff();
	couleur_reseaux_sociaux();
});

/*---------------- SON DE LA VIDEO -----------------------*/

function mutevideo() {

	$("video").prop('muted', true);

	$("#mute-video").on('click', function(){

		if( $("video").prop('muted')){

			$("video")
		      			.prop('muted', false)

		} else {
			$("video")
		  				.prop('muted', true);

		}

	});

}

/*------- VISUALISATION SON MARCHE OU ARRET -----------*/

function soundOnOff() {

	$("#mute-video").on('click', function() {

		if ($('#mute-video').hasClass('soundOn')) {

			$('#mute-video')
				.removeClass('soundOn')
				.addClass('soundOff');


		} else {

			$('#mute-video')
				.removeClass('soundOff')
				.addClass('soundOn');

		}

    });

}

/*------------  COULEUR RESEAUX SOCIAUX  ---------------*/

function couleur_reseaux_sociaux() {

	/*------------  MOUSEENTER  ---------------*/

	$(".flaticon-facebook").on('mouseenter', function () {
		$(this)
			.css({
				transition: "color 0.5s",
				color: "#3b5998",
			});
	});

	$(".flaticon-twitter-logo-silhouette").on('mouseenter', function () {
		$(this)
			.css({
				transition: "color 0.5s",
				color: "#00aced"
			});
	});

	$(".flaticon-youtube").on('mouseenter', function () {
		$(this)
			.css({
				transition: "color 0.5s",
				color: "#bb0000"
			});
	});

	$(".flaticon-instagram-symbol").on('mouseenter', function () {
		$(this)
			.css({
				transition: "color 0.5s",
				color: "#ff2df3"
			});
	});

	/*------------  MOUSELEAVE  ---------------*/

	$(".flaticon-facebook, .flaticon-twitter-logo-silhouette, .flaticon-youtube, .flaticon-instagram-symbol").on('mouseleave', function () {
		$(this)
			.css('color', '#fff')
	});
}