//your JS code here. If required.
function updateDateTime() {
            const dateTimeElement = document.getElementById("timer");
            const now = new Date();
            const dateTimeString = now.toLocaleString(); // Format the date and time as a string
            dateTimeElement.textContent = dateTimeString;
        }

        // Initial call to display the date and time
        updateDateTime();

        // Update the date and time every second (1000 milliseconds)
        setInterval(updateDateTime, 1000);