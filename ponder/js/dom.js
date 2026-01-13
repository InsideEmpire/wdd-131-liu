let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    const html = document.getElementById('html')
    const css = document.getElementById('css')
    const js = document.getElementById('js')

    if (codeValue === 'html') {
        html.style.color = 'grey'
        css.style.color = 'black'
        js.style.color = 'black'
    } else if (codeValue === 'css') {
        css.style.color = 'blue'
        html.style.color = 'black'
        js.style.color = 'black'
    } else if (codeValue === 'js') {
        js.style.color = 'yellow'
        css.style.color = 'black'
        html.style.color = 'black'
    }
})
                