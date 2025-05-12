
function getIPAndLog() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            let logs = JSON.parse(localStorage.getItem('loginLogs')) || [];
            const entry = `${new Date().toLocaleString()} - IP: ${data.ip}`;
            logs.push(entry);
            localStorage.setItem('loginLogs', JSON.stringify(logs));
            const li = document.createElement('li');
            li.textContent = entry;
            document.getElementById('log-list').appendChild(li);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem('adminTheme');
    const themeSelect = document.getElementById('theme-select');
    const body = document.getElementById('admin-body');
    if (savedTheme) {
        body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

    themeSelect.addEventListener('change', function() {
        body.className = this.value;
        localStorage.setItem('adminTheme', this.value);
    });

    getIPAndLog();
});
