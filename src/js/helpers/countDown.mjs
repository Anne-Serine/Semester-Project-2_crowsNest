
export function initCountdown(targetDate) {
  function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      // Calculate days, hours, minutes and seconds remaining
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      const countdownContainer = document.getElementById("countdown");
      if (countdownContainer) {
        countdownContainer.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    
        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
      }
      
    }
    
    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);
}