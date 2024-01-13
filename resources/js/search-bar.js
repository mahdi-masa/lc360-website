window.toggleSearchElement = function toggleSearchElement(){
    
    let searchElement = document.getElementById('searchelement');
    let searchElementStyle = getComputedStyle(searchElement)
    
    if (searchElementStyle.display === 'none') {
      searchElement.style.display = 'flex'
    } else {
      searchElement.style.display = 'none';
    }
};
