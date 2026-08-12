const navbar = document.getElementById('navbar')
document.querySelectorAll(".copy").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetElement = document.querySelector(copyButton.dataset.copy);
        const textToCopy = targetElement.textContent;
        

        navigator.clipboard.writeText(textToCopy).then(() => {
            const label = copyButton.querySelector(".copy-label");
            const originalText = label.textContent;
            
            copyButton.disabled = true;
            label.textContent = "Copied!";

            setTimeout(() => {
                label.textContent = originalText;
                copyButton.disabled = false;
            }, 2000);
        });
        });
    });

    function openSidebar() {
        navbar.classList.add("show");
    }

    function closeSidebar() {
        navbar.classList.remove("show");
    }

    function printReceipt() {
        window.print();
    }

    function addToGoogleCalendar() {
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const text = encodeURIComponent("Store Pickup: Order #12345");
  const dates = encodeURIComponent("20260815T100000Z/20260815T110000Z");
  const details = encodeURIComponent("Your receipt total was $45.00.");
  const location = encodeURIComponent("123 Main Street, New York, NY");

  const googleCalendarUrl = `${baseUrl}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  
  
  window.open(googleCalendarUrl, "_blank");
}


