var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
   

    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
  
    function logoutMeOut() {
      logout();
    }
  
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logoutMeOut, 600000);
    

    }
  };
  
  
  window.onload = function () {
    inactivityTime();
  };