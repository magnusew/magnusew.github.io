const lauraRoom = document.querySelector("#lauraRoom");
const magnusRoom = document.querySelector("#magnusRoom");
const ajaRoom = document.querySelector("#ajaRoom");
const lauraBtn = document.querySelector("#lauraBtn");
const magnusBtn = document.querySelector("#magnusBtn");
const ajaBtn = document.querySelector("#ajaBtn");

// Find the element to display the week range
const weekRangeElement = document.querySelector("#weekRange");

const kitchen = "Køkkenet";
const toilet = "Toilettet";
const livingRoom = "Stuen";

const messages = [kitchen, toilet, livingRoom];
const urls = ['./kitchen.html', './toilet.html', './living_room.html'];

// Get the current week's Friday and Thursday
const { startOfWeek, endOfWeek } = getCurrentWeekRange(new Date());

// Display the current week date range in the header
weekRangeElement.textContent = `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`;

// Determine rotation for Laura, Magnus, and Aja
const currentWeek = getFridayBasedWeekNumber(startOfWeek);  // Use the start of the week for week number logic
const rotation = (currentWeek - 1) % 3;
const lauraRotation = rotation;
const magnusRotation = (rotation + 1) % 3;
const ajaRotation = (rotation + 2) % 3;

// Set room to fit with current week
lauraRoom.textContent = messages[lauraRotation];
magnusRoom.textContent = messages[magnusRotation];
ajaRoom.textContent = messages[ajaRotation];

lauraBtn.addEventListener('click', function () {
    window.location.href = urls[lauraRotation];
});

lauraBtn.addEventListener('touchstart', function () {
    window.location.href = urls[lauraRotation];
});

magnusBtn.addEventListener('click', function () {
    window.location.href = urls[magnusRotation];
});

magnusBtn.addEventListener('touchstart', function () {
    window.location.href = urls[magnusRotation];
});

ajaBtn.addEventListener('click', function () {
    window.location.href = urls[ajaRotation];
});

ajaBtn.addEventListener('touchstart', function () {
    window.location.href = urls[ajaRotation];
});

// Function to calculate the current week's Friday (start) and Thursday (end)
function getCurrentWeekRange(date) {
    const currentDate = new Date(date);

    // Calculate the start of the week (Friday)
    const dayOfWeek = currentDate.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
    const diffToFriday = (dayOfWeek + 2) % 7; // Calculate days to the previous Friday
    const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - diffToFriday));

    // Calculate the end of the week (Thursday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return { startOfWeek, endOfWeek };
}

// Helper function to format the date as 'DD/MM/YYYY' (or change format as desired)
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Function to calculate the week number starting from Friday
function getFridayBasedWeekNumber(date) {
    const currentDate = new Date(date);
    
    // Adjust to Friday being the first day of the week
    const day = currentDate.getDay(); // Sunday is 0, Monday is 1, and so on
    const diffToFriday = (day + 2) % 7; // Days to previous Friday
    
    currentDate.setDate(currentDate.getDate() - diffToFriday);

    const yearStart = new Date(Date.UTC(currentDate.getFullYear(), 0, 1));
    const weekNumber = Math.ceil((((currentDate - yearStart) / 86400000) + 1) / 7);
    
    return weekNumber;
}