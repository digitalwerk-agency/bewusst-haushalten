function addSoftHyphens(e){return e.replace(/([a-zäöüß]{5})([a-zäöüß]+)/gi,"$1&shy;$2")}function applyHyphenation(){document.querySelectorAll("h1, h2, .heading-style-h1, .heading-style-h2").forEach(e=>{"false"!==e.getAttribute("data-add-hyphens")&&(e.innerHTML=addSoftHyphens(e.innerHTML))})}document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll("#articles .article-teaser-item");if(e.length>0){e[0].classList.add("first-article-teaser-item"),e[0].style.gridColumnStart="span 2",e[0].style.gridColumnEnd="span 2",e[0].style.gridRowStart="span 1",e[0].style.gridRowEnd="span 1";let t=e[0].querySelector(".article-teaser");t&&t.parentNode.removeChild(t)}e.forEach((e,t)=>{if(t>0){let a=e.querySelector(".article-teaser-hero");a&&a.parentNode.removeChild(a)}})}),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("add-to-cluster"),t=document.getElementById("articles");e&&t&&t.appendChild(e)}),document.addEventListener("DOMContentLoaded",function(){console.log("DOM fully loaded and parsed");let e=document.querySelectorAll("#teaser-check .faq-teaser-item");console.log(`Found ${e.length} .faq-teaser-item elements`),e.forEach((e,t)=>{let a="ja"===e.dataset.largeTeaser;if(console.log(`Teaser #${t+1}: large-teaser attribute is set to 'ja'? ${a}`),a){let n=e.querySelector("#small-teaser");n?(console.log(`Removing #small-teaser from Teaser #${t+1}`),n.parentNode.removeChild(n)):console.log(`#small-teaser not found in Teaser #${t+1}`),console.log(`Applying large teaser styling to Teaser #${t+1}`),e.style.gridColumnStart="span 2",e.style.gridColumnEnd="span 2",e.style.gridRowStart="span 1",e.style.gridRowEnd="span 1"}else{let r=e.querySelector("#large-teaser");r?(console.log(`Removing #large-teaser from Teaser #${t+1}`),r.parentNode.removeChild(r)):console.log(`#large-teaser not found in Teaser #${t+1}`),console.log(`Applying default/small teaser styling to Teaser #${t+1}`),e.style.gridColumnStart="span 1",e.style.gridColumnEnd="span 1",e.style.gridRowStart="span 1",e.style.gridRowEnd="span 1"}})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#beratung"),t=document.querySelector("#include");e&&t&&(t.appendChild(e),e.style.marginLeft="auto")}),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("main");if(e){var t=e.textContent.trim(),a="";switch(t){case"Waschen & Trocknen":a="#07cdb7";break;case"K\xfchlen & Gefrieren":a="#5d16ae";break;case"Sp\xfclen":a="#ebb238";break;case"Kochen & Backen":a="#db0e33";break;case"Nachhaltigkeit":a="#a6d419";break;default:a="#1170dc"}var n=document.querySelector('meta[name="theme-color"]');n||((n=document.createElement("meta")).setAttribute("name","theme-color"),document.getElementsByTagName("head")[0].appendChild(n)),n.setAttribute("content",a)}}),document.addEventListener("DOMContentLoaded",e=>{let t=document.querySelectorAll(".year"),a=new Date().getFullYear();t.forEach(e=>{e.textContent=a})}),window.addEventListener("load",function(){var e=document.querySelector(".padding-global.is-navsub"),t=e.querySelector(".nav-item.w--current");if(e&&t){var a=t.offsetLeft-e.offsetLeft;e.scrollLeft=a-e.clientWidth/2+t.clientWidth/2}}),window.innerWidth<=768&&document.addEventListener("DOMContentLoaded",applyHyphenation),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("table").forEach(function(e){var t=[];e.querySelectorAll("thead th").forEach(function(e,a){t[a]=e.textContent}),e.querySelectorAll("tbody tr").forEach(function(e){e.querySelectorAll("td").forEach(function(e,a){e.setAttribute("data-label",t[a])})})})});