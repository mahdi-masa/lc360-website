window.sidebarWidth = function sidebarWidth(){
    let sidebarElement = document.getElementById('sidebar')
    let sidebarStyle = window.getComputedStyle(sidebarElement);
    let sidebarWidth = sidebarStyle.getPropertyValue('width')
    return sidebarWidth;
   
}



window.toggleSideBar = function toggleSideBar(){
    let sidebarOverLay = document.getElementById('overlay')
    let sidebarElement = document.getElementById('sidebar');
    if( sidebarElement.className.includes('unactive')){
        sidebarElement.style.transform = `translate(0px, 0px)`
        sidebarOverLay.classList.remove('hidden')
        sidebarOverLay.classList.add('fixed')
        sidebarElement.classList.remove('unactive')
        sidebarElement.classList.add('active')
    }else if(sidebarElement.className.includes('active')){
        sidebarElement.style.transform = `translate(${sidebarWidth()}, 0px)`
        sidebarOverLay.classList.remove('fixed')
        sidebarOverLay.classList.add('hidden')
        sidebarElement.classList.remove('active')
        sidebarElement.classList.add('unactive')

    }
    
}


window.closeSidebar = function closeSidebar(){
    let sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.transform = `translate(${sidebarWidth()}, 0px)`
}
window.addEventListener('onload',closeSidebar())

    
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}