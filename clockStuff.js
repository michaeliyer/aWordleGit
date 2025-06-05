document.getElementById("footerClocks").style.border = "5px solid #ccc"; // Example of targeting the new ID 
// Function to format time in the "HH:MM:SS" format
function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Function to calculate time remaining until midnight in the Eastern Time Zone
function getTimeUntilMidnightEastern() {
  const now = new Date();

  // Convert current time to Eastern Time Zone
  const easternNow = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  const midnight = new Date(easternNow);
  midnight.setHours(24, 0, 0, 0); // Set to midnight

  const diff = midnight - easternNow; // Difference in milliseconds

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Function to update time display every second
function updateFooter() {
  const now = new Date();

  // Get current Eastern Time
  const easternNow = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  // Update current time display
  document.getElementById("currentTime").textContent = `Current Eastern Time: ${formatTime(
    easternNow
  )}
  YOU ARE SLATED FOR EFFING HELL, PIGS, SO LICK ME!`;

  // Update countdown to midnight
  document.getElementById("countdownToMidnight").textContent = `Your Countdown To That Goddamn Fuckin' Midnight Hour: 🧌 ${getTimeUntilMidnightEastern()} Dear All You Good Clocks, Etc. Out There: Thou Clockest Can't Tick Fast Enough! With no due respect, you make me want to self-mutilate, GOP!`;
}

// Start the clock
setInterval(updateFooter, 1000);
updateFooter(); // Initial call  

function calculateCountdown(targetDate) {
  const now = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const diff = new Date(targetDate) - new Date(now);

  if (diff <= 0) return "00:00:00"; // Countdown complete

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days} very long ass flickin' days, bitch, ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    countdownElement.textContent = `Los Putos Americanos de Mid-Termos Electionés de 2026: ${calculateCountdown("2026-11-03T00:00:00")}. 
    Wilst We Goddamn MotherFucking Maketh Her, Thou Jerkoes, Thoust fulleth Dastardly Nastardly Bastardly Castaway Wasterly Foolinoidal Toolions? Likethly, We Arteth Completethly Fucketh? What Dost Sayeth Thou? I sayeth yea, fuckethstra!`;
  }
}

// Start countdown and update every second
updateCountdown();
setInterval(updateCountdown, 1000);
