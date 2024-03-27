// Quiz Swiper
const quizSwiper = new Swiper('.swiper.is-quiz', {
  autoHeight: true,
  speed: 250,
  spaceBetween: 0,
  slidesPerGroup: 1,
  rewind: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper.is-quiz .swiper-btn-next',
    prevEl: '.swiper.is-quiz .swiper-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Pagination
  pagination: {
    bulletActiveClass: 'is-active',
    bulletClass: 'swiper-bullet',
    bulletElement: 'button',
    clickable: true,
    el: '.swiper.is-quiz .swiper-pagination',
  },
});

// Reset all active options on load
const quizAllOptions = document.querySelectorAll('.quiz-option');
quizAllOptions.forEach(optionEl => optionEl.classList.remove('is-active'));

// Get all slides
const quizSlides = quizSwiper.slides;

// For every slide, create an object
quizSlides.forEach(slide => {
  const slideOptions = slide.querySelectorAll('.quiz-option');

  // Listen for click events
  slide.addEventListener('click', function (e) {
    // Get option element if option element is clicked
    const optionEl = e.target.closest('.quiz-option');

    // Ignore if not clicked on an option button
    if (!optionEl) return;

    // No multiple options: remove active class from other options in slide
    if (
      !slide.getAttribute('data-options') &&
      !optionEl.classList.contains('is-active')
    ) {
      slideOptions.forEach(option => option.classList.remove('is-active'));
    }

    // Toggle active state of clicked option
    optionEl.classList.toggle('is-active');

    // Update Swiper height after content change
    quizSwiper.updateAutoHeight(250); // 250ms is the speed of height transition
  });
});

// Results Generation
// Get template Item for results
const quizResultsTemplate = document.querySelector('.quiz-results-item');
// Get results list
const quizResultsList = document.querySelector('.quiz-results-list');

const quizResultsReset = function () {
  // Clear results list
  quizResultsList.innerHTML = '';
};

// Function to generate results
const quizGenResults = function () {
  // Reset results list
  quizResultsReset();

  // Get all active options
  const activeOptions = document.querySelectorAll('.quiz-option.is-active');

  // Create a results list item for all active options
  activeOptions.forEach(activeOption => {
    // Create new element
    const newElement = quizResultsTemplate.cloneNode(true); // Changed 'deep' to true for correct cloning

    // Get results text from current option element
    const optionAnswerText = activeOption.querySelector('.quiz-option-answer').textContent;

    // Access the results text on the newly generated element
    const newElementTextEl = newElement.querySelector('.quiz-results-text');

    // Set correct text on new element
    newElementTextEl.textContent = optionAnswerText;

    // Append element to results list
    quizResultsList.appendChild(newElement);
  });

  // Update Swiper height after results are generated and added to the DOM
  quizSwiper.updateAutoHeight(250); // 250ms is the speed of height transition
};

// Reset the results list initially
quizResultsReset();

// Listen for slide changes
quizSwiper.on('slideChange', function () {
  const isLastSlide = quizSwiper.isEnd; // Returns true or false

  if (isLastSlide) {
    quizGenResults();
    document.querySelector('.quiz-end-button').style.display = 'block';
  } else {
    // Hide button if not last slide
    document.querySelector('.quiz-end-button').style.display = 'none';
  }
});

// !SECTION Generate PDF
document.querySelector('.quiz-end-button').addEventListener('click', function () {
  const elementToPrint = quizSlides[quizSlides.length - 1];

  const pageBody = document.querySelector('body');

  const clonedLastSlide = elementToPrint.cloneNode(true); // Changed 'deep' to true for correct cloning

  // Add special class to cloned node
  clonedLastSlide.classList.add('cloned-quiz-result');

  pageBody.appendChild(clonedLastSlide);

  window.print();

  // Remove cloned quiz result after printing
  clonedLastSlide.remove();
});
