// get references to the form elements
const doctorNameInput = document.getElementById('doctor-name');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const submitButton = document.getElementById('submit-button');

// add event listener to the submit button
submitButton.addEventListener('click', (event) => {
  // prevent the form from submitting normally
  event.preventDefault();

  // get the appointment details from the form
  const doctorName = doctorNameInput.value;
  const date = dateInput.value;
  const time = timeInput.value;

  // send the appointment request to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/appointments');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      // display a success message
      alert('Appointment booked successfully!');
    } else {
      // display an error message
      alert('Error booking appointment. Please try again later.');
    }
  };
  xhr.send(JSON.stringify({ doctorName, date, time }));
});
