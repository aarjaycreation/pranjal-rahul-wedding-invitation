const scriptURL = 'https://script.google.com/macros/s/AKfycbxnUL9qcht2oEF074cG1zCfv2IJN0zCFjbCSjz7365LQrdNdLA3P_CjBeDg1dBsyMIc/exec';
const form = document.forms['newsletter'];
const loading = document.querySelector(".loading");
//const join = document.querySelector('.button');
form.addEventListener('submit', e => {
   e.preventDefault()
   document.querySelector('.button').disabled = true;
   loading.classList.add("d-block");
   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(function (data) {
         // from reset
         form.reset();
         // on success
         loading.classList.remove("d-block");
         Swal.fire({
            icon: 'success',
            text: 'Thank You for Joining Our Celebration!'
         })
         document.querySelector('.button').disabled = false;
      })
      .catch(function (data) {
         // from reset
         form.reset();
         // on success
         loading.classList.remove("d-block");
         Swal.fire({
            icon: 'error',
            text: 'Oops! Something Went Wrong.'
         })
         document.querySelector('.button').disabled = false;
      });
})