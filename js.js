document.addEventListener('DOMContentLoaded', function(){


		// animation script translateY, fadeIn etc
		document.addEventListener('scroll', event => {

			document.querySelectorAll('.toAnimate').forEach(element => {

				let triggerPosition = window.innerHeight;
			  	let rect = element.getBoundingClientRect();
				let elementDistanceFromViewport = rect.top;
				let alreadyDone = false;
				

				// when toAnimate elements are on the bottom of the screen the animation takes place
				 if (elementDistanceFromViewport <= triggerPosition && !alreadyDone) {

				 		let animationClass = element.getAttribute("class");


				 		switch(true){


				 			case /\btoAnimate1\b[^D]/.test(animationClass):

				 				element.classList.add('animation1');
				 				break;


				 			case /\btoAnimate1Delayed\b/.test(animationClass):

				 				element.classList.add('animation1Delayed');
				 				break;


				 			case /\btoAnimate2\b[^D]/.test(animationClass):

				 				element.classList.add('animation2');
				 				break;				


				 			case /\btoAnimate2Delayed\b/.test(animationClass):

				 				element.classList.add('animation2Delayed');
				 				break;

				 			case /\btoTranslateFromLeftToRight\b/.test(animationClass):

				 				element.classList.add('translateFromLeftToRight');
				 				break;

				 			case /\btoTranslateFromRightToLeft\b/.test(animationClass):

				 				element.classList.add('translateFromRightToLeft');
				 				break;

				 			case /\btoTranslateFromBottomToTop\b/.test(animationClass):

				 				element.classList.add('translateFromBottomToTop');
				 				break;

				 			default:
					 			console.log("fail");				 			

					 			break;


				 		}

				 		alreadyDone = true;

					}


			  })

		})



		// animation FAQ
		let questions = document.querySelectorAll('.questions');

		questions.forEach(question => {


				question.addEventListener('click', event => {

					let questionFaqclass = question.getAttribute("class");

					let questionAnswerWrapper = question.nextElementSibling;
					let questionAnswer = questionAnswerWrapper.children[0];
					let questionAnswerHeight = questionAnswer.offsetHeight;


						if (/\brotationCaretFaq\b/.test(questionFaqclass)) {

						

							question.classList.remove("rotationCaretFaq");
							questionAnswerWrapper.style.height = "0px";

						}

						else{

						

							question.classList.add("rotationCaretFaq");


							questionAnswerWrapper.style.height = questionAnswerHeight + "px";
							

						}	



				})


		})

		// scrolling answers in FAQ section










})


