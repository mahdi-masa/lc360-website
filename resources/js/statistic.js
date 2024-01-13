function calculateTimeIntervalInHours(startTime) {
    // Convert the start time to a Date object
    const startDate = new Date(startTime);
  
    // Get the current time
    const currentDate = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - startDate;
  
    // Convert the time difference to hours
    const hours = timeDifference / (1000 * 60 * 60);
  
    return hours;
  }
  
// Example usage:
const startTime = "2024-01-10T00:00:00Z"; // Replace with your start time
const intervalInHours = calculateTimeIntervalInHours(startTime);

function entityValue(initial, delta, id, intervalInHours){
    let finalValue = Math.trunc((intervalInHours * delta)+ initial)
    finalValue = finalValue.toLocaleString()
    let element = document.getElementById(id)
    if( element ){
        element.innerHTML = finalValue
    }
}


window.elementList = [
    {
        id: 'usedwater',
        initialValue: 156859800,
        delta : 1
    },
    {
        id: 'desertification',
        initialValue: 407928,
        delta : 1
    },
    {
        id: 'energy',
        initialValue: 190782000,
        delta : 1
    },
    {
        id: 'lostforest',
        initialValue: 176768,
        delta : 1
    },
    {
        id: 'co2',
        initialValue: 1244165000,
        delta : 1
    },
    {
        id: 'toxic',
        initialValue: 332861,
        delta : 1
    },
    {
        id: 'usedwater',
        initialValue: 156859800,
        delta : 1
    },
    {
        id: 'carnumber',
        initialValue: 2934790,
        delta : 1
    },
    {
        id: 'nowaterpeople',
        initialValue: 156859800,
        delta : 1
    }
    
    

]


elementList.forEach(element => {
    entityValue(element.initialValue, element.delta, element.id, intervalInHours);
});
  