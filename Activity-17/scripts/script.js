document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var phone = document.getElementById('phone').value;

  var usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username);
  var emailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email);
  var passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
  var phoneValid = /^\+?[0-9]{10,15}$/.test(phone);

  document.getElementById('usernameFeedback').style.display = usernameValid ? 'none' : 'block';
  document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';
  document.getElementById('passwordFeedback').style.display = passwordValid ? 'none' : 'block';
  document.getElementById('phoneFeedback').style.display = phoneValid ? 'none' : 'block';

  document.getElementById('usernameFeedback').textContent = usernameValid ? '' : 'Username should be at least 5 characters long and contain only letters and numbers.';
  document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Please enter a valid email address.';
  document.getElementById('passwordFeedback').textContent = passwordValid ? '' : 'Password must be at least 8 characters, with numbers and mixed case letters.';
  document.getElementById('phoneFeedback').textContent = phoneValid ? '' : 'Please enter a valid phone number (10–15 digits, optional +).';

  var formValid = usernameValid && emailValid && passwordValid && phoneValid;

  if (formValid) {
    document.getElementById('registrationFeedback').textContent = 'Your user registration was accepted!';
    document.getElementById('registrationFeedback').style.display = 'block';
  } else {
    document.getElementById('registrationFeedback').textContent = '';
    document.getElementById('registrationFeedback').style.display = 'none';
  }
});
