const lauraRoom = document.querySelector("#lauraRoom");
const magnusRoom = document.querySelector("#magnusRoom");
const ajaRoom = document.querySelector("#ajaRoom");

const kitchen = "Køkkenet";
const toilet = "Toilettet";
const livingRoom = "Stuen";

const messages= [kitchen,toilet, livingRoom];

const currentWeek = getWeekNumber(new Date());

const rotation = (currentWeek - 1) % 3; 
const lauraRotation = rotation;
const magnusRotation = (rotation + 1) % 3;
const ajaRotation = (rotation + 2) % 3;

lauraRoom.textContent = messages[lauraRotation];
magnusRoom.textContent = messages[magnusRotation];
ajaRoom.textContent = messages[ajaRotation];


// Function to calculate ISO week number
function getWeekNumber(date) {
    const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    currentDate.setUTCDate(currentDate.getUTCDate() + 4 - (currentDate.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil((((currentDate - yearStart) / 86400000) + 1) / 7);
    return weekNumber;
}

