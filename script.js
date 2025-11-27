
/////////////////////////////////////////////////UPDATE NAV ON LOGIN


//TO DO:
//add js so once user logs in or registers the log in button changes to profile button



////////////////////////////////////////////////////////////////////

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

    