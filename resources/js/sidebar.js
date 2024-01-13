
window.sidebarWidth = function sidebarWidth(){
    let sidebarElement = document.getElementById('sidebar')
    let sidebarStyle = window.getComputedStyle(sidebarElement);
    let sidebarWidth = sidebarStyle.getPropertyValue('width')
    return sidebarWidth;
    
}



window.openSidebar = function openSidebar(){
    let sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.transform = `translate(0px, 0px)`
}


window.closeSidebar = function closeSidebar(){
    let sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.transform = `translate(${sidebarWidth()}, 0px)`
}
closeSidebar()
    
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