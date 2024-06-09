// Handle form submission
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Thank you for your order! We will deliver it shortly.');
  });
  
  // Add interactivity - hover effect on featured dishes
  const dishes = document.querySelectorAll('.dish');
  dishes.forEach(dish => {
    dish.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
    });
    dish.addEventListener('mouseleave', function() {
      this.classList.remove('hovered');
    });
  });
  