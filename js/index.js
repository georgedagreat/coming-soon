const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('June 15, 2018 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <ul id="countdown">
    <li>
      <span class="days timenumbers">${days}</span>
      <p class="timeRefDays timedescription">Days</p>
    </li>
    <li>
      <span class="hours timenumbers">${hours}</span>
      <p class="timeRefHours timedescription">Hours</p>
    </li>
    <li>
      <span class="minutes timenumbers">${mins}</span>
      <p class="timeRefMinutes timedescription">Minutes</p>
    </li>
    <li>
      <span class="seconds timenumbers yellow-text">${seconds}</span>
      <p class="timeRefSeconds timedescription">Seconds</p>
    </li>
  </ul>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);
