// IIFE -- Immediately Invoked Function Expression
(function(){
    function Start()
    {
        console.log("AppStarted..");
    }
    window.addEventListener("load", Start);
})();