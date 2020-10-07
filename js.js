document.addEventListener('DOMContentLoaded', function(){

		document.querySelectorAll('.toAnimate').forEach(element => {
		
				let triggerPosition = window.innerHeight;

				let alreadyDone = false;
				let animationClass = element.getAttribute("class");


				// animation script translateY, fadeIn etc
			document.addEventListener('scroll', event => {		

			
				let rect = element.getBoundingClientRect();
				let elementDistanceFromViewport = rect.top;


				// when toAnimate elements are on the bottom of the screen the animation takes place
				 if (elementDistanceFromViewport <= triggerPosition && !alreadyDone) {

				 		


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
					
						// if element is on screen set property scroll 
						if (elementDistanceFromViewport <= triggerPosition && elementDistanceFromViewport >0 && /\btranslateY\b/.test(animationClass)) {

								let distanceDoneInPercentInViewport = elementDistanceFromViewport / window.innerHeight;
								let translateYdelayValue = distanceDoneInPercentInViewport * (-1);

								
								element.style.setProperty("transition", "transform 1s cubic-bezier(.75,0,.25,1)" + translateYdelayValue + "s")


								let dejaFait = false;
								if (!dejaFait) {
											let container = element.parentElement;
											let translateYvalue = getDistanceBetweenElements(container, element);

											element.style.transform = "translateY(" + translateYvalue + "px)";

											dejaFait = true;
								}

							}




			  })

			
						function getDistanceBetweenElements(a, b) {
						
							let aRect = a.getBoundingClientRect();
							let bRect = b.getBoundingClientRect();

							let aYaxe = aRect.top ;
							let bYaxe = bRect.top;

							let distanceBetweenElements = aYaxe - bYaxe;
							
							return distanceBetweenElements;
							 }



					if (/\btranslateY\b/.test(animationClass)) {

				
						
						let container = element.parentElement;
	


						

									// checking if there are any sibling element if yes :
									if (element.previousElementSibling != null ) {


											 // calculate the difference between each Y axes and the container then calculate the element target position
											function getTranslateYvalue(element) {

												let elementFurthestPreviousSibling = element.previousElementSibling;

												

												let distanceWithFurthestPreviousSibling = getDistanceBetweenElements(elementFurthestPreviousSibling, element);



												let distanceBetweenElementAndContainer = getDistanceBetweenElements(container, element);




												// the target position (translateYvalue) of the animation depending on siblings element to not make them target the same final position
												let translateYvalue = distanceBetweenElementAndContainer - distanceWithFurthestPreviousSibling;

							
												element.style.transform = "translateY(" + translateYvalue + "px)";

												  return translateYvalue;
												}

									getTranslateYvalue(element);
									
									}

									else{	

											
											// let translateYvalue = getDistanceBetweenElements(container, element);

											// element.style.transform = "translateY(" + translateYvalue + "px)";

						
											}
							}					

					

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




})


