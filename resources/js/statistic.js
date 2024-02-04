function thisYearSecondPassed(startTime) {
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
function todaySecondsPassed() {
    const currentDate = new Date();

    // Extract the current hour, minute, and second
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    // Calculate the total number of seconds passed in the day
    const totalSecondsPassed = (currentHour * 3600) + (currentMinute * 60) + currentSecond;

    return totalSecondsPassed;
}
  
// Example usage:
const startTimeForYearlyContor = new Date().getFullYear()+"-01-01T00:00:00Z"; // Replace with your start time
console.log(startTimeForYearlyContor);


function yearlyValueCalc(initial, delta, id){
    const intervalInSeconds = thisYearSecondPassed(startTimeForYearlyContor);
    let finalValue = Math.trunc((intervalInSeconds * (delta/3600))+ initial)
    finalValue = finalValue.toLocaleString()
    let element = document.getElementById(id)
    if( element ){
        element.innerHTML = finalValue
    }
}

function dailyValueCalc(initial, delta, id){
    const intervalInSeconds = todaySecondsPassed();
    let finalValue = Math.trunc((intervalInSeconds * (delta/3600))+ initial)
    finalValue = finalValue.toLocaleString()
    let element = document.getElementById(id)
    if( element ){
        element.innerHTML = finalValue
    }
}

function generalValueCalc(initial, delta, id){
    
    let finalValue = Math.trunc((initial * (delta/3600))+ initial)
    finalValue = finalValue.toLocaleString()
    let element = document.getElementById(id)
    if( element ){
        element.innerHTML = finalValue
    }
}


window.elementList = [
    {
        id: 'usedwater',
        initialValue: 0,
        delta : 529582,
        yearly:true
    },
    {
        id: 'desertification',
        initialValue: 0,
        delta : 1376,
        yearly:true,
    },
    {
        id: 'energy',
        initialValue: 0,
        delta : 19453885,
        yearly:false,
    },
    {
        id: 'lostforest',
        initialValue: 0,
        delta : 596.30,
        yearly: true,
    },
    {
        id: 'co2',
        initialValue: 0,
        delta : 4196901,
        yearly:true,
    },
    {
        id: 'toxic',
        initialValue: 0,
        delta : 1122.90,
        yearly: true,
    },
    {
        id: 'Undernourisheddie',
        initialValue: 0,
        delta : 1277,
        yearly: false,
    },
    {
        id: 'carnumber',
        initialValue: 0,
        delta : 9914,
        yearly:true,
    },
    {
        id: 'nowaterpeople',
        initialValue: 766424000,
        delta : 1051,
        general: true,
        
    }
    
    

]

setInterval(function(){
elementList.forEach(element => {
    if( element.yearly ){
        yearlyValueCalc(element.initialValue, element.delta, element.id);
    }else if ( !element.yearly){
        dailyValueCalc(element.initialValue, element.delta, element.id)
    }else if( element.general ){
        generalValueCalc(element.initialValue, element.delta, element.id)
    }
})},100);
  