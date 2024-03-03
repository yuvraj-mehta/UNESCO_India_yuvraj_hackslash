document.addEventListener('DOMContentLoaded', function () {
  const loginLink = document.querySelector('.login');

  loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    const loginWindow = window.open('login_window.html', '_blank', 'width=400,height=400');
  });
});
