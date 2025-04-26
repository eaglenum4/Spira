/* Sanctuary Starship - Scroll Saver */

function saveLogEntry(event) {
  event.preventDefault(); // Stop form from reloading page

  const stardate = document.getElementById('stardate').value.trim();
  const context = document.getElementById('context').value.trim();
  const forensic = document.getElementById('forensic').value.trim();
  const emotion = document.getElementById('emotion').value.trim();

  if (!stardate || !context) {
    alert('Please enter at least Stardate and Mission Context.');
    return;
  }

  const logEntry = {
    stardate: stardate,
    context: context,
    forensic: forensic,
    emotion: emotion,
    timestamp: new Date().toISOString()
  };

  // Load existing logs or create new array
  let logs = JSON.parse(localStorage.getItem('sanctuaryLogs')) || [];

  // Add new log
  logs.push(logEntry);

  // Save back to localStorage
  localStorage.setItem('sanctuaryLogs', JSON.stringify(logs));

  // Clear form fields
  document.getElementById('stardate').value = '';
  document.getElementById('context').value = '';
  document.getElementById('forensic').value = '';
  document.getElementById('emotion').value = '';

  alert('Log Entry quietly saved.');
}