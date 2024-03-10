const realFileInput = document.getElementById('image');
const customBtn = document.getElementById('your-custom-button-id'); // Replace with your button's actual ID
const customTxt = document.querySelector('.custom-file-button'); // Assuming your button has this class

customBtn.addEventListener('click', function() {
    realFileInput.click();
});

realFileInput.addEventListener('change', function() {
  if (realFileInput.value) {
    customTxt.innerHTML = realFileInput.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; 
  } else { 
    customTxt.innerHTML = 'Choose File'; 
  }
});
const addProductForm = document.getElementById('add-product-form');

addProductForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission for now

    // Here you would:
    // 1. Gather all the form data (product name, price, etc.)
    // 2. Potentially do some basic validation
    // 3. Send the data to your backend (using AJAX or a traditional submission)
});
