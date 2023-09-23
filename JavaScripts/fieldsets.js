// Fieldset JavaScripts
count = 0
function replaceFirstDiv() {
    count += 1
    var slider = document.getElementById('advTrend');
    var replace = document.getElementById('textReplacement');
    
    if (count % 2 == 1) {

        var replaceTitle = 'Stylish'
        var replaceText = 'The Peak of Elegance and Style'

        document.getElementById('carDesc').innerText = replaceTitle;
        document.getElementById('underText').innerText = replaceText;

        
        slider.style.transition = '0.5s'
        slider.style.margin = '0'
        slider.style.marginLeft = '10%'
        slider.style.marginRight = '0'

        // Hidden Text Display
        replace.style.display = 'initial'
        replace.style.transitionDuration = '0.5s'
        replace.style.opacity = '1'

    }
    else {
        var replaceTitle = 'Trending'
        var replaceText = 'The Latest and Greatest'

        document.getElementById('carDesc').innerText = replaceTitle;
        document.getElementById('underText').innerText = replaceText;

        slider.style.opacity = '1'
        slider.style.transition = '0.5s'
        slider.style.marginLeft = 'auto'
        slider.style.marginRight = 'auto'
        slider.style.marginTop = '16px'

        replace.style.display = 'none'
        replace.style.transitionDuration = '0.5s'
        replace.style.opacity = '0.1'

    }

   

}

