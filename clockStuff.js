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
  document.getElementById("countdownToMidnight").textContent = `Here's, um, Our Own Good Goddamn Mother, um, Christing Effing Effed Up Soily Garbage Effing Countdown To Your Goddamn Stupid Idiotic Goddamn Fuckin' Midnight Hour: 🧌 ${getTimeUntilMidnightEastern()} Dear All You Good Clocks, Etc. Out There: Thou Clockest Can't Ticketh Fast Enough! With no due respect, you make me want to self-mutilate, GOP! You know you're morons. Maybe just jump to your deaths!`;
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

  return `${days} very freakin' dark, um, long-ass flickston ass days, you, um, know, Yo!! You, one, all, holy extremely, um, dumb fuck bitch fuckass - drunks, ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    countdownElement.textContent = `Los Putos de Putanños y de, um, los Americanos de los Mid-Termos Christos Electionés de lo 2026: ${calculateCountdown("2026-11-03T00:00:00")}. 
    Wilst We Goddamn MotherFucking Maketh Her, It, That, Thou, Los Jerkoes, Lo, Thoust Fulleth andeth Dastardly Nastardly and Bastardly Castaway Wasterly Foolinoidal Toolions? Likethly, We Arteth Completethly Fucketh? What Dost Sayeth Thou? I sayeth yea, fuckethstroid! Licketh off pleaseth thou. Ah, the hate...You see thgat?`;
  }
}

// Start countdown and update every second
updateCountdown();
setInterval(updateCountdown, 1000);
