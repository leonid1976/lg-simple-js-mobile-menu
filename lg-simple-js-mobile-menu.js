function burgerMenu(navSelector, endPoint) {
  
  let windowWidth = document.documentElement.clientWidth;
  let bodyElement = document.body;
  let logoElement = document.querySelector(".logo");
  let toggleButton;
  let menu; 
  let newMenu;
  let overlayElement;

  
  if(windowWidth < endPoint) {
    init();
  }

    window.addEventListener("resize", function(event){

    if (document.documentElement.clientWidth < endPoint) {
      init();    
    } else {
      reinstate();
    }
  })
  
  function reinstate() {
    if(newMenu) {
        newMenu.remove();
        newMenu = undefined;
        overlayElement.remove();
        toggleButton.removeEventListener("click", toggleMenu);
        toggleButton.remove();
        menu[0].style.display = "block";
    } else {
      return;
    }
  }
  
  
  function init() {
      if(!newMenu) { 
      menu =  document.getElementsByClassName(navSelector);   
      newMenu = menu[0].cloneNode(true);
      menu[0].style.display = "none";
      newMenu.classList.add('new-menu');
      newMenu.classList.add('noActive');

      overlayElement = document.createElement('div');
      overlayElement.classList.add('site-overlay');
      overlayElement.classList.add('noActive');

      toggleButton = document.createElement('button');
      toggleButton.classList.add('cmn-toggle-switch');
      toggleButton.classList.add('cmn-toggle-switch__htx');
      toggleButton.innerHTML = "<span></span>";



      document.body.prepend(toggleButton);
      document.body.prepend(newMenu);    
      document.body.prepend(overlayElement);
        
      toggleButton.addEventListener("click", toggleMenu);  
      }
  }
  





  function toggleMenu() {

    
    function menuSwitchOn() {
      toggleButton.classList.add("active");   //change button to cross
      logoElement.classList.add("noActive");  //hide logo
      overlayElement.classList.remove("noActive");  //show overlay  
      overlayElement.addEventListener("click", handleOverlay);
      newMenu.classList.remove("noActive"); 
      bodyElement.classList.add("stop-scrolling"); // stop scrolling       
    }
    
    function menuSwithOff() {
      toggleButton.classList.remove("active");  //change button to normal 
      logoElement.classList.remove("noActive");  //show logo
      overlayElement.removeEventListener("click", handleOverlay);      
      overlayElement.classList.add("noActive");  //hide overlay 
      newMenu.classList.add("noActive"); 
      bodyElement.classList.remove("stop-scrolling"); // stop scrolling  
      
    }
    
    function handleOverlay() {
        menuSwithOff();  
    }

    if(toggleButton.classList.contains("active")) {
        menuSwithOff();

    } else {
        menuSwitchOn();
    }
  } 
}