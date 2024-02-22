
document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('#articles .article-teaser-item');

    if (articles.length > 0) {
        // Apply special styling to the first .article-teaser-item
        articles[0].classList.add('first-article-teaser-item');
        articles[0].style.gridColumnStart = 'span 2';
        articles[0].style.gridColumnEnd = 'span 2';
        articles[0].style.gridRowStart = 'span 1';
        articles[0].style.gridRowEnd = 'span 1';

        // Remove the .article-teaser element in the first .article-teaser-item from the DOM
        const firstTeaser = articles[0].querySelector('.article-teaser');
        if (firstTeaser) {
            firstTeaser.parentNode.removeChild(firstTeaser);
        }
    }

    // Remove the .article-teaser-hero element in all other .article-teaser-item elements from the DOM
    articles.forEach((item, index) => {
        if (index > 0) { // Skip the first item
            const teaserHero = item.querySelector('.article-teaser-hero');
            if (teaserHero) {
                teaserHero.parentNode.removeChild(teaserHero);
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Select the element to be moved
    var addToClusterElement = document.getElementById('add-to-cluster');
    
    // Select the target container
    var articlesContainer = document.getElementById('articles');
    
    // Check if both elements exist to avoid errors
    if (addToClusterElement && articlesContainer) {
        // Append #add-to-cluster as the last child of #articles
        articlesContainer.appendChild(addToClusterElement);
    }
});




document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Select all .faq-teaser-item elements inside #teaser-check
    const faqTeasers = document.querySelectorAll('#teaser-check .faq-teaser-item');
    console.log(`Found ${faqTeasers.length} .faq-teaser-item elements`);

    faqTeasers.forEach((teaser, index) => {
        // Check the value of the data-large-teaser attribute
        const isLargeTeaser = teaser.dataset.largeTeaser === 'ja';
        console.log(`Teaser #${index + 1}: large-teaser attribute is set to 'ja'? ${isLargeTeaser}`);

        if (isLargeTeaser) {
            // If large teaser, remove #small-teaser and apply styling to the teaser item
            const smallTeaser = teaser.querySelector('#small-teaser');
            if (smallTeaser) {
                console.log(`Removing #small-teaser from Teaser #${index + 1}`);
                smallTeaser.parentNode.removeChild(smallTeaser);
            } else {
                console.log(`#small-teaser not found in Teaser #${index + 1}`);
            }
            // Apply specific styling for large teaser display
            console.log(`Applying large teaser styling to Teaser #${index + 1}`);
            teaser.style.gridColumnStart = 'span 2';
            teaser.style.gridColumnEnd = 'span 2';
            teaser.style.gridRowStart = 'span 1';
            teaser.style.gridRowEnd = 'span 1';
        } else {
            // If not a large teaser, remove #large-teaser
            const largeTeaser = teaser.querySelector('#large-teaser');
            if (largeTeaser) {
                console.log(`Removing #large-teaser from Teaser #${index + 1}`);
                largeTeaser.parentNode.removeChild(largeTeaser);
            } else {
                console.log(`#large-teaser not found in Teaser #${index + 1}`);
            }
            // Apply or revert to default styling for small teaser display
            console.log(`Applying default/small teaser styling to Teaser #${index + 1}`);
            teaser.style.gridColumnStart = 'span 1';
            teaser.style.gridColumnEnd = 'span 1';
            teaser.style.gridRowStart = 'span 1';
            teaser.style.gridRowEnd = 'span 1';
        }
    });
});



  document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('#beratung');
    var target = document.querySelector('#include'); // Corrected ID
    
    // Ensure the button and target element exist
    if(button && target) {
      // Append the button to the target element
      target.appendChild(button);
      
      // Optional: Apply styles to position the button to the extreme right
      button.style.marginLeft = 'auto';
    }
  });




document.addEventListener('DOMContentLoaded', function() {
    var mainElement = document.getElementById('main');
    if (!mainElement) {
        return; // Element with ID #main not found, exit the function.
    }

    var mainElementText = mainElement.textContent.trim();
    var themeColor = ''; // Initialize theme color variable

    // Determine the theme color based on the text content
    switch (mainElementText) {
        case 'Waschen & Trocknen':
            themeColor = '#07cdb7';
            break;
        case 'Kühlen & Gefrieren':
            themeColor = '#5d16ae';
            break;
        case 'Spülen':
            themeColor = '#ebb238';
            break;
        case 'Kochen & Backen': // Corrected category
            themeColor = '#db0e33';
            break;
        case 'Nachhaltigkeit':
            themeColor = '#a6d419';
            break;
        default:
            themeColor = '#1170dc'; // Default color if no match is found
    }

    // Find or create the meta tag
    var metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.setAttribute('name', 'theme-color');
        document.getElementsByTagName('head')[0].appendChild(metaThemeColor);
    }

    // Set the theme color
    metaThemeColor.setAttribute('content', themeColor);
});




document.addEventListener('DOMContentLoaded', (event) => {
    const yearElements = document.querySelectorAll('.year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
});




window.addEventListener('load', function() {
    var scrollContainer = document.querySelector('.padding-global.is-navsub');
    // Updated to reflect that we're targeting an element with both 'nav-item' and 'w--current' classes within '.padding-global.is-navsub'
    var currentItem = scrollContainer.querySelector('.nav-item.w--current');

    if (scrollContainer && currentItem) {
        var scrollPosition = currentItem.offsetLeft - scrollContainer.offsetLeft;
        // This attempts to center the 'current' item in the scroll container by adjusting 'scrollLeft'
        scrollContainer.scrollLeft = scrollPosition - scrollContainer.clientWidth / 2 + currentItem.clientWidth / 2;
    }
});



function addSoftHyphens(text) {
    var hyphenatedText = text.replace(/([a-zäöüß]{5})([a-zäöüß]+)/gi, '$1&shy;$2');
    return hyphenatedText;
}

// Funktion, die die Silbentrennung durchführt
function applyHyphenation() {
    // Ziel ist es, alle h1, h2 sowie .heading-style-h1 und .heading-style-h2 Elemente zu erfassen
    var elements = document.querySelectorAll('h1, h2, .heading-style-h1, .heading-style-h2');

    elements.forEach(element => {
        var addHyphens = element.getAttribute('data-add-hyphens');
        // Nur wenn das data-add-hyphens Attribut nicht "false" ist, führe die Silbentrennung durch
        if (addHyphens !== "false") {
            element.innerHTML = addSoftHyphens(element.innerHTML);
        }
    });
}

// Prüfen, ob die Bildschirmgröße 768px oder kleiner ist
if (window.innerWidth <= 768) {
    document.addEventListener("DOMContentLoaded", applyHyphenation);
}


document.addEventListener('DOMContentLoaded', function() {
    var tables = document.querySelectorAll('table'); // Find all tables
    tables.forEach(function(table) {
        var headers = [];
        table.querySelectorAll('thead th').forEach(function(th, index) {
            headers[index] = th.textContent; // Store header texts
        });
        table.querySelectorAll('tbody tr').forEach(function(tr) {
            tr.querySelectorAll('td').forEach(function(td, index) {
                td.setAttribute('data-label', headers[index]); // Set data-label attribute
            });
        });
    });
});
