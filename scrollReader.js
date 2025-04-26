/* Sanctuary Starship - Scroll Reader */

function loadLogs() {
  const logs = JSON.parse(localStorage.getItem('sanctuaryLogs')) || [];

  const logsContainer = document.getElementById('logs-container');
  logsContainer.innerHTML = '';

  if (logs.length === 0) {
    logsContainer.innerHTML = '<p>No scrolls stitched yet, Captain.</p>';
    return;
  }

  logs.forEach(log => {
    const logDiv = document.createElement('div');
    logDiv.className = 'log-entry';
    logDiv.innerHTML = `
      <h3>Stardate: ${log.stardate}</h3>
      <p><strong>Mission Context:</strong> ${log.context}</p>
      <p><strong>Forensic Observations:</strong> ${log.forensic}</p>
      <p><strong>Emotional Landscape:</strong> ${log.emotion}</p>
      <hr>
    `;
    logsContainer.appendChild(logDiv);
  });
}