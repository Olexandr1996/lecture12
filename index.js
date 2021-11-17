//for(let i=1; i<=20; i++) 
    //{ if (!(i % 2)  ) 
 
        //alert (i);

   // } 




   

   //let color = prompt('Put a current color of traffic lights') 
   //function light (color) {
       //switch (color) {
          // case 'red': 
           //return 'yellow'; 

           //case 'yellow': 
           //return 'green'; 
           //case 'green': 
           //return 'yellow'; 
           //default: 
           //return ''
       //}
   //} 
   //const updateColor = light(color); 
   //const message = updateColor ? 'Color is' + updateColor : 'Something going wrong'
   //alert (message);  






   let lehgth = +prompt('Enter length') 
   let width = +prompt ('Enter width') 
   function action (lehgth, width) { 
       if(isNaN(lehgth,width)) 
       {
           return 'Something going wrong';
       }
   
       if (lehgth===width) { 
            
           return lehgth*width  ;
            
       } else 
       {
           return (lehgth+width)*2
       } 
       
       
   }  
   alert(action(lehgth,width)); 
   
   