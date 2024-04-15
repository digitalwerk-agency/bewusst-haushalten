document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('#articles .article-teaser-item');

    if (articles.length > 0) {
        articles[0].classList.add('first-article-teaser-item');
        articles[0].style.gridColumnStart = 'span 2';
        articles[0].style.gridColumnEnd = 'span 2';
        articles[0].style.gridRowStart = 'span 1';
        articles[0].style.gridRowEnd = 'span 1';

        const firstTeaser = articles[0].querySelector('.article-teaser');
        if (firstTeaser) {
            firstTeaser.parentNode.removeChild(firstTeaser);
        }
    }

    articles.forEach((item, index) => {
        if (index > 0) {
            const teaserHero = item.querySelector('.article-teaser-hero');
            if (teaserHero) {
                teaserHero.parentNode.removeChild(teaserHero);
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var addToClusterElement = document.getElementById('add-to-cluster');
    var articlesContainer = document.getElementById('articles');
    
    if (addToClusterElement && articlesContainer) {
        articlesContainer.appendChild(addToClusterElement);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const faqTeasers = document.querySelectorAll('#teaser-check .faq-teaser-item');

    faqTeasers.forEach((teaser, index) => {
        const isLargeTeaser = teaser.dataset.largeTeaser === 'ja';

        if (isLargeTeaser) {
            const smallTeaser = teaser.querySelector('#small-teaser');
            if (smallTeaser) {
                smallTeaser.parentNode.removeChild(smallTeaser);
            }
            teaser.style.gridColumnStart = 'span 2';
            teaser.style.gridColumnEnd = 'span 2';
            teaser.style.gridRowStart = 'span 1';
            teaser.style.gridRowEnd = 'span 1';
        } else {
            const largeTeaser = teaser.querySelector('#large-teaser');
            if (largeTeaser) {
                largeTeaser.parentNode.removeChild(largeTeaser);
            }
            teaser.style.gridColumnStart = 'span 1';
            teaser.style.gridColumnEnd = 'span 1';
            teaser.style.gridRowStart = 'span 1';
            teaser.style.gridRowEnd = 'span 1';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('#beratung');
    var target = document.querySelector('#include');
    
    if(button && target) {
      target.appendChild(button);
      button.style.marginLeft = 'auto';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var mainElement = document.getElementById('main');
    if (!mainElement) {
        return;
    }

    var mainElementText = mainElement.textContent.trim();
    var themeColor = '';

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
        case 'Kochen & Backen':
            themeColor = '#db0e33';
            break;
        case 'Nachhaltigkeit':
            themeColor = '#a6d419';
            break;
        default:
            themeColor = '#1170dc';
    }

    var metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.setAttribute('name', 'theme-color');
        document.getElementsByTagName('head')[0].appendChild(metaThemeColor);
    }

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
    var currentItem = scrollContainer.querySelector('.nav-item.c--current');

    if (scrollContainer && currentItem) {
        var scrollPosition = currentItem.offsetLeft - scrollContainer.offsetLeft;
        scrollContainer.scrollLeft = scrollPosition - scrollContainer.clientWidth / 2 + currentItem.clientWidth / 2;
    }
});

function addSoftHyphens(text) {
    var hyphenatedText = text.replace(/([a-zäöüß]{5})([a-zäöüß]+)/gi, '$1&shy;$2');
    return hyphenatedText;
}

function applyHyphenation() {
    var elements = document.querySelectorAll('h1, h2, .heading-style-h1, .heading-style-h2');

    elements.forEach(element => {
        var addHyphens = element.getAttribute('data-add-hyphens');
        if (addHyphens !== "false") {
            element.innerHTML = addSoftHyphens(element.innerHTML);
        }
    });
}

if (window.innerWidth <= 768) {
    document.addEventListener("DOMContentLoaded", applyHyphenation);
}

document.addEventListener('DOMContentLoaded', function() {
    var tables = document.querySelectorAll('table');
    tables.forEach(function(table) {
        var headers = [];
        table.querySelectorAll('thead th').forEach(function(th, index) {
            headers[index] = th.textContent;
        });
        table.querySelectorAll('tbody tr').forEach(function(tr) {
            tr.querySelectorAll('td').forEach(function(td, index) {
                td.setAttribute('data-label', headers[index]);
            });
        });
    });
});
