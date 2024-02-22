document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll("#article-rt *"); // Select all children of #article-rt

    for (let i = 0; i < articles.length; i++) {
        const element = articles[i];
        if (element.textContent.startsWith("Tipp:")) {
            // Assume the headline is in the same element as "Tipp:"
            const fullText = element.innerHTML; // Use innerHTML to preserve any inner HTML tags
            const headlineIndex = fullText.indexOf("Tipp:") + 5; // Find the end index of "Tipp:"
            const headline = fullText.substring(headlineIndex).trim(); // Extract headline with HTML tags
            
            // Check if the next sibling is a paragraph for the callout text
            const nextElement = articles[i + 1];
            if (nextElement && nextElement.tagName.toLowerCase() === 'p') {
                const calloutTextHTML = nextElement.innerHTML; // Preserve HTML formatting

                // Create the callout structure
                const calloutContainer = document.createElement("figure");
                calloutContainer.className = "docs_callout";

                const figcaption = document.createElement("figcaption");
                figcaption.className = "docs_callout--header";
                // Insert SVG and headline (preserve any HTML formatting within the headline)
                figcaption.innerHTML = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8525 4.01444C7.6685 4.08344 4.1435 7.54044 3.9945 11.7194C3.9065 14.1474 4.9085 16.4524 6.7445 18.0454C7.5355 18.7324 7.9885 19.7884 7.9885 21.0134C7.9885 22.6674 9.3345 24.0134 10.9885 24.0134H12.9885C14.6425 24.0134 15.9885 22.6674 15.9885 21.0134V20.6384C15.9885 19.6724 16.4435 18.7404 17.2705 18.0124C18.9985 16.4944 19.9885 14.3084 19.9885 12.0134C19.9885 9.85244 19.1395 7.82644 17.5985 6.31044C16.0575 4.79444 14.0155 3.96544 11.8525 4.01444ZM13.9885 21.0134C13.9885 21.5654 13.5405 22.0134 12.9885 22.0134H10.9885C10.4365 22.0134 9.9885 21.5654 9.9885 20.9444C9.9885 20.6284 9.9575 20.3184 9.9115 20.0134H14.0295C14.0045 20.2194 13.9885 20.4284 13.9885 20.6384V21.0134ZM15.9505 16.5104C15.4395 16.9594 15.0275 17.4674 14.7105 18.0134H12.9885V13.8294C14.1495 13.4154 14.9885 12.3154 14.9885 11.0134C14.9885 10.4604 14.5415 10.0134 13.9885 10.0134C13.4355 10.0134 12.9885 10.4604 12.9885 11.0134C12.9885 11.5664 12.5405 12.0134 11.9885 12.0134C11.4365 12.0134 10.9885 11.5654 10.9885 11.0134C10.9885 10.4614 10.5415 10.0134 9.9885 10.0134C9.4355 10.0134 8.9885 10.4604 8.9885 11.0134C8.9885 12.3154 9.8275 13.4154 10.9885 13.8294V18.0134H9.2425C8.9325 17.4554 8.5355 16.9534 8.0545 16.5354C6.6785 15.3404 5.9265 13.6114 5.9925 11.7914C6.1045 8.65744 8.7485 6.06544 11.8865 6.01444C11.9205 6.01444 11.9535 6.01444 11.9885 6.01444C13.5745 6.01444 15.0655 6.62344 16.1965 7.73744C17.3525 8.87444 17.9895 10.3934 17.9895 12.0144C17.9895 13.7344 17.2465 15.3724 15.9515 16.5114L15.9505 16.5104ZM16.7735 2.48744L18.0085 0.477436C18.2965 0.00543568 18.9125 -0.141564 19.3835 0.149436C19.8545 0.438436 20.0015 1.05344 19.7115 1.52444L18.4765 3.53444C18.2885 3.84244 17.9595 4.01144 17.6235 4.01144C17.4445 4.01144 17.2645 3.96344 17.1015 3.86344C16.6305 3.57444 16.4835 2.95844 16.7735 2.48744ZM23.4015 6.63544L21.4685 7.50744C21.3355 7.56844 21.1955 7.59644 21.0585 7.59644C20.6765 7.59644 20.3135 7.37744 20.1465 7.00744C19.9185 6.50444 20.1425 5.91144 20.6465 5.68544L22.5795 4.81344C23.0855 4.58444 23.6755 4.81044 23.9015 5.31344C24.1295 5.81644 23.9055 6.40944 23.4015 6.63544ZM4.1825 1.52344C3.8935 1.05244 4.0415 0.436436 4.5125 0.148436C4.9855 -0.139564 5.5995 0.0084357 5.8875 0.478436L7.1195 2.48944C7.4085 2.96044 7.2605 3.57644 6.7895 3.86444C6.6265 3.96444 6.4455 4.01144 6.2685 4.01144C5.9315 4.01144 5.6035 3.84144 5.4145 3.53344L4.1825 1.52244V1.52344ZM3.6995 7.07444C3.5285 7.43344 3.1705 7.64244 2.7975 7.64244C2.6525 7.64244 2.5055 7.61144 2.3665 7.54344L0.568498 6.68244C0.0704983 6.44444 -0.140502 5.84744 0.0984983 5.34944C0.335498 4.85044 0.935498 4.63744 1.4315 4.87944L3.2295 5.74044C3.7275 5.97844 3.9385 6.57644 3.6995 7.07444Z" fill="currentColor"/>
</svg><span>${headline}</span>`;

                const textParagraph = document.createElement("p");
                textParagraph.className = "docs_callout-text";
                textParagraph.innerHTML = calloutTextHTML; // Use innerHTML to insert the detailed text with formatting

                // Assemble the structure
                calloutContainer.appendChild(figcaption);
                calloutContainer.appendChild(textParagraph);

                // Replace the original elements with the new callout
                element.parentNode.replaceChild(calloutContainer, element);
                nextElement.parentNode.removeChild(nextElement); // Remove the original paragraph used for the callout text

                // Adjust the loop index to skip the next element since it's already processed
                i++;
            }
        }
    }
});

</script>

<script>
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
