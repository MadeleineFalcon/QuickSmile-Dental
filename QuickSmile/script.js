
/////////////////////////////////////////////////UPDATE NAV ON LOGIN

function updateNavigation() {
  if (sessionStorage.getItem('isLoggedIn') === 'true') {
    const signIn = document.getElementById('signIn');
    const book = document.getElementById('book');
    const bookBtn = document.getElementById('bookBtn');
    
    if (signIn) {
      signIn.textContent = 'Profile';
      signIn.href = 'profile.html';
    }
    if (book) {
      book.href = 'book.html';
    }
    if (bookBtn) {
      bookBtn.href = 'book.html';
    }
  }
}

function handleLogin(event) {
  event.preventDefault();
  sessionStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'profile.html';
  
  return false;
}

function handleRegister(event) {
  event.preventDefault();
  sessionStorage.setItem('isLoggedIn', 'true');
  window.location.href = 'profile.html';
  return false;
}

function logout() {
  sessionStorage.removeItem('isLoggedIn');
  window.location.href = 'home.html';
}
document.addEventListener('DOMContentLoaded', function() {
  updateNavigation();
  
  //listener for login 
  const loginForm = document.querySelector('form[action="profile.html"]');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
  
  //istener for registration 
  const registerForm = document.querySelector('form[action="register.html"]');
  if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
  }

  //listener for logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
});

/////////////////////////// clicakble calendar 
 document.addEventListener('DOMContentLoaded', function() {
  const days = document.querySelectorAll('.day');
  
  days.forEach(day => {
    day.addEventListener('click', function() {
      days.forEach(d => d.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
});

/////////////////////////// clicakble time slots

document.addEventListener('DOMContentLoaded', function() {
  const timeSlots = document.querySelectorAll('.time-slot');
  
  timeSlots.forEach(slot => {
    slot.addEventListener('click', function() {
      timeSlots.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
    });
  });
});


    