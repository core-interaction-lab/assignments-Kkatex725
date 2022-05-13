const formEl = document.getElementById('madlib-form')

formEl.addEventListener('submit', e => {
           e. preventDefault();

           const formData = new FormData (formEl);

           console. log(formData.get('input-1'));
           const spanEls = document.querySelecterAll ('.input-value');

           spanEls.forEach (span => {})
});