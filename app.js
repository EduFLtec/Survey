let nameVal = document.getElementById('name');
let emailVal = document.getElementById('email');
let ageVal = document.getElementById('number');
let occupationVal = document.getElementById('occupation-dropdown');
let bestFeatureVal = document.getElementById('dropdown');
let surveyForm = document.getElementById('survey-form');

// disables submit form if required user input is missing
surveyForm.addEventListener('input', () => {
  if(nameVal.value && emailVal.value && occupationVal.value && bestFeatureVal.value){
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', 'disalbled');
  }
});

surveyForm.addEventListener('submit', () => {
  alert(`  Name: ${nameVal.value},
  email: ${emailVal.value},
  Age: ${ageVal.value},
  Occupation: ${occupationVal.value},`
  )
});