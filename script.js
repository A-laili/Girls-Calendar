document.addEventListener("DOMContentLoaded", () => {
  const monthSelect = document.getElementById("month-select");
  const yearSelect = document.getElementById("year-select");
  const calendar = document.getElementById("calendar");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Populate month and year select elements
  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 10; year <= currentYear + 10; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }

  monthSelect.value = new Date().getMonth();
  yearSelect.value = new Date().getFullYear();

  function generateCalendar(month, year) {
    calendar.innerHTML = "";

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    // Add headers
    const headers = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    headers.forEach(header => {
      const div = document.createElement("div");
      div.className = "header";
      div.textContent = header;
      calendar.appendChild(div);
    });

    // Add blank days for the first week
    for (let i = 0; i < startDay; i++) {
      const div = document.createElement("div");
      calendar.appendChild(div);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const div = document.createElement("div");
      div.className = "day";
      div.textContent = day;
      div.addEventListener("click", () => {
        div.classList.toggle("selected");
      });
      calendar.appendChild(div);
    }
  }

  monthSelect.addEventListener("change", () => {
    generateCalendar(parseInt(monthSelect.value), parseInt(yearSelect.value));
  });

  yearSelect.addEventListener("change", () => {
    generateCalendar(parseInt(monthSelect.value), parseInt(yearSelect.value));
  });

  generateCalendar(new Date().getMonth(), new Date().getFullYear());
});
