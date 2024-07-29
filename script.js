const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === 'admin' && password === 'password') {
		message.innerHTML = 'Login successful! Redirecting to dashboard...';
		setTimeout(() => {
			window.location.href = 'dashboard.html';
		}, 2000);
	} else {
		message.innerHTML = 'Invalid username or password!';
	}
});
const username = localStorage.getItem('username');
document.getElementById('username').innerHTML = username;
document.getElementById('username-profile').innerHTML = username;

registerForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const newUsername = document.getElementById('new-username').value;
	const newPassword = document.getElementById('new-password').value;

    // TO DO: Implement registration logic here
  

	message.innerHTML = 'Registration successful! Please log in.';
	setTimeout(() => {
		registerForm.style.display = 'none';
		loginForm.style.display = 'block';
	}, 2000);
});
