

    // Course name board

    const words = [
        " React Developer...!",
        " Web Developer....!",
        " Frontend Developer...!",
        " Programmer...!",
      ];
      let currentWordIndex = 0;
      const paragraphElement = document.querySelector(".blink");
      
      function updateParagraph() {
        paragraphElement.innerText = words[currentWordIndex];
        currentWordIndex = (+currentWordIndex + 1) % words.length;
      }
      
      setInterval(updateParagraph, 1000);
      
      
      
      
      function type() {
          let name1 = " Prem Kumar"
         
          let namearr = name1.split("");
          
          function looping() {
            if (namearr.length > 0) {
              let n = namearr.shift();
              document.querySelector(".type").innerHTML += n;
            } else {
              //deleting();
              return false;
            }
            setTimeout(looping, 150);
          }
        
          looping();
        }
        
        type();
      
      
      
      //  Themes
    
      function theme(){
        var element=document.body;
        element.classList.toggle("dark")

      }


      

      function menu(e){
        let list=document.querySelector('ul');

        e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :
        ( e.name = 'menu' , list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
     

      }


