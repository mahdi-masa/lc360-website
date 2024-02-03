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

window.changeSideBarPosition = function changeSideBarPosition() {
  if (window.innerWidth > 1024) {
    // Use window.scrollY or document.documentElement.scrollTop to check scroll position
    if (window.scrollY > 70) {
      // Declare sidebarElement using var, let, or const
      let sidebarElement = document.getElementById('sidebar');
      sidebarElement.classList.remove('pc:top-[94px]')
      sidebarElement.classList.add('pc:top-0')
    }else{
      let sidebarElement = document.getElementById('sidebar');
      sidebarElement.classList.remove('pc:top-0')
      sidebarElement.classList.add('pc:top-[94px]')

    }
  }else if (window.innerWidth < 1024){
    if (window.scrollY > 50) {
      // Declare sidebarElement using var, let, or const
      let sidebarElement = document.getElementById('sidebar');
      sidebarElement.classList.remove('mobile:top-[60px]')
      sidebarElement.classList.add('mobile:top-0')
    }else{
      let sidebarElement = document.getElementById('sidebar');
      sidebarElement.classList.remove('mobile:top-0')
      sidebarElement.classList.add('mobile:top-[60px]')

    }
  }
};


window.closeSidebar = function closeSidebar(){
    let sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.transform = `translate(${sidebarWidth()}, 0px)`
}
window.addEventListener('load',closeSidebar)
window.addEventListener('resize',closeSidebar)
window.addEventListener('scroll', changeSideBarPosition)

    
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}