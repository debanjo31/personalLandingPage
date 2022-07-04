$(document).ready(function(){

  //     window.onload( loadTheme());
    
  //     function loadTheme() {
  //   //Add this to body onload, gets the current theme. If panelTheme is empty, defaults to blue.
  //   if (localStorage.getItem('panelTheme') == '') {
  //     setTheme('White');
  //     alert("ready");
  //    } else {
  //     setTheme(localStorage.getItem('panelTheme'));
  //     alert("Seen ready before");
  //    }
  // }  

  //     function ready(){
  //       alert("ready");
  //     }
  
  // function setTheme(theme) {
  //   if (theme == 'Dark') {
  //     localStorage.setItem('panelTheme', theme);
  //     alert("Ready now working");
  //     //$(document).documentElement.style.setProperty('--white', 'green');
  //     //$(h1).style.setProperty({'color':'green'});
  //   }

  //    else if (theme == 'White') {
  //    localStorage.setItem('panelTheme',  theme);
  //   //   $(document).documentElement.style.setProperty('--white', 'green');
  //     alert('Redy not seen')
  // }
  // }
  
  
 //need to create a function that toogle as the input is been clicked between white and black
    
      $("input[type='checkbox']").click(function(e){
      
        if($(this).is(":checked")){  
          $("body").get(0).style.setProperty("--white","rgb(255, 255, 255)")
          $("body").get(0).style.setProperty("--black","rgb(0, 0, 36)")
        }
        else if($(this).is(":not(:checked)")){
          $("body").get(0).style.setProperty("--white","rgb(255, 255, 255)")
          $("body").get(0).style.setProperty("--black","rgb(0, 0, 0)")
        }
        
      }
      );  
    

  });
