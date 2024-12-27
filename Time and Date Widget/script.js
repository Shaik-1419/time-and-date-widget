function updateDateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    const now = new Date();
    
    // Format Time (HH:MM:SS)
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let time = `${hours}:${minutes}:${seconds}`;
    
    // Format Date (Month Day, Year)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let date = now.toLocaleDateString('en-US', options);

    // Update the elements
    timeElement.textContent = time;
    dateElement.textContent = date;
}

// Update time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();
