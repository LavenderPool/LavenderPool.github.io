let connnect = document.querySelectorAll('.slider__connect');

for(let i = 0; i < connnect.length; i++){
	connnect[i].onclick = function(){
		let slideWriteNow = 1;
		let data_id = this.getAttribute("data-id");
		let slider = document.querySelectorAll('.slider__slide[data-id="'+data_id+'"]');
		let paggination = document.querySelectorAll('.slider__paggination[data-id="'+data_id+'"] span');

		slider[0].classList.add("is_inactive-slide");
		slider[1].classList.remove("is_inactive-slide");
		paggination[0].classList.remove("is_active");
		paggination[0].style.cursor = "pointer";
		paggination[1].style.cursor = "pointer";
		paggination[1].classList.add("is_active");

		let inp = document.querySelectorAll('.slider-form[data-id="'+data_id+'"] input');
		

		for(let p = 0; p < paggination.length; p++){
			paggination[p].onclick = function(){
				if(p == 2){

				}else{
					for(let s = 0; s < slider.length; s++){
						slider[s].classList.add("is_inactive-slide");
					}
					for(let n = 0; n < slider.length; n++){
						paggination[n].classList.remove("is_active");
					}
					slider[p].classList.remove("is_inactive-slide");
					paggination[p].classList.add("is_active");
				}
			}
		}

		for(let g = 0; i < inp.length; g++){
			inp[g].onclick = function() {
				let radio = inp[g];
				if(radio.checked){
					slideWriteNow++;
					paggination[1].style.cursor = "pointer";
					setTimeout(() =>{
						slider[1].classList.add("is_inactive-slide");
						slider[2].classList.remove("is_inactive-slide");
						paggination[1].classList.remove("is_active");
						paggination[2].classList.add("is_active");
						console.log(slideWriteNow);


						//
						//insert here events 
						//
					}, 300);
				}
			}
		}
	}
}


//burger menu

let burger = document.getElementById("burger");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");

let body = document.querySelector("body");

let open = false;

burger.onclick = function(){
	overlay.style.display = "block";
	modal.style.top = "50%";
	body.style.overflowY = "hidden";
	burger.classList.add("is-active");
	setTimeout(() => { open = true; }, 1);
}

document.onclick = function (e) {
	if (e.target.querySelector != "modal" & open === true) {
		 modal.style.top = "-300vh";
		 overlay.style.display = "none";
		 body.style.overflowY = "auto";
		 burger.classList.remove("is-active");
		 open = false;
	};
};


//scroll

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
	