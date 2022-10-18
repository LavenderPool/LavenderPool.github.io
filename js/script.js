function openTab(id, button){
	let buttons = document.getElementsByClassName("auth__form-undertext"); // получаем все кнопки табов
	let tabs = document.getElementsByClassName('auth__tabs-tab') // получаем id таба
	for( var i = 0; i<tabs.length; i++) { // перебираем все табы
		tabs[i].classList.remove("active"); // оффаем все табы
	};
	document.getElementById(button).checked =  true; // активируем кнопку таба
	document.getElementById(id).classList.add("active") // включаем таб полученный из аргумента функции
}

function show_hide_password(target, id){
	var input = document.getElementById(id); // получаем id нужного нам поля из аргумента
	if (input.getAttribute('type') == 'password') { // если тип инпута = пароль
		target.classList.add('view'); // кнопке даем класс чтобы была анимация 
		input.setAttribute('type', 'text'); // ставить тип текст чтобы видно было пароль
	} else { // если же тип инпута = текст, то меняем всё обратно
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

$('#repeat-pass').add("#reg-pass").on('input', function(){ // на изменение инпута вызывать данную функцию
	if ($('#reg-pass').val() != $('#repeat-pass').val()){ // если пароли не равны
		$('#repeat-pass').addClass("false"); //  поле с повторением пароля помечать как не верно
	}else{ // если равны, то убирать класс
		$('#repeat-pass').removeClass("false");
	}
}) 

$(".auth__forgot-p").on('click', function(){ // отслеживание нажатия на забыл парролбь
	$(".auth__tabs").css("display", "none"); // если нажаал то оффаем табы реги и логи и включаем восстановления
	$(".auth__forgot").css("display", "flex");
	let back = true;

	let buff = $(".auth__back").attr('href'); // сохраняем ссылку
	$(".auth__back").removeAttr("href"); // удаляем ссылку

	if (back){ // действия при нааажатии кнопки вернуться
		$(".auth__back").on('click', function(){
			$(".auth__tabs").css("display", "block");
			$(".auth__forgot").css("display", "none");
			$(".auth__forgot-2").css("display", "none");
			back = false;
			setTimeout(function(){ 
				$('.auth__back').attr("href", buff) // возвращаем ссылку по таймауту чтобы моментально не перешлось по ней
			}, 10)
		})
	}
})

$(".auth__forgot button").on('click', function(){ // проверка введён ли эмаил, если да, то выдаём окно "чё то там"
	if(!$('.auth__forgot input').val()){
		$('.auth__forgot input').addClass("false");
	}else{
		$(".auth__forgot-2").css("display", "block");
		$(".auth__forgot").css("display", "none");
	}
})

$('#reg-btn').on('click', function(){ // по-сути юзлес функция
	if($('#reg-pass').val() == $('#repeat-pass').val() && $('#reg-email').val()){
		window.location.href = "/thx.html"; // сделал отдельной страницой чтобы юзер мог по истории зайти и опять получить ссылку
	}
})