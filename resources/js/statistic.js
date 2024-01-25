function calculateTimeIntervalInSeconds(startTime) {
    // Convert the start time to a Date object
    const startDate = new Date(startTime);
  
    // Get the current time
    const currentDate = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - startDate;
  
    // Convert the time difference to seconds
    const seconds = timeDifference / (1000);
  
    return seconds;
  }
  
// Example usage:
const startTime = "2024-01-10T00:00:00Z"; // Replace with your start time


function entityValue(initial, delta, id){
    const intervalInSeconds = calculateTimeIntervalInSeconds(startTime);
    let finalValue = Math.trunc((intervalInSeconds * (delta/3600))+ initial)
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
        delta : 531582
    },
    {
        id: 'desertification',
        initialValue: 407928,
        delta : 1381
    },
    {
        id: 'energy',
        initialValue: 190782000,
        delta : 19645885
    },
    {
        id: 'lostforest',
        initialValue: 176768,
        delta : 598
    },
    {
        id: 'co2',
        initialValue: 1244165000,
        delta : 4213901
    },
    {
        id: 'toxic',
        initialValue: 332861,
        delta : 1127
    },
    {
        id: 'Undernourisheddie',
        initialValue: 156859800,
        delta : 1287
    },
    {
        id: 'carnumber',
        initialValue: 2934790,
        delta : 9964
    },
    {
        id: 'nowaterpeople',
        initialValue: 156859800,
        delta : 1051
    }
    
    

]

setInterval(function(){
elementList.forEach(element => {
    entityValue(element.initialValue, element.delta, element.id);
})},100);
  