import swal from 'sweetalert';

const initSweetalert = (selector, options = {}) => {
  const swalButton = document.querySelector(selector);
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', (event) => {
      console.log(event)
      swal(options)
    });
  }
};

export { initSweetalert };
