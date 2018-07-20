//I just need to get this done once, not everytime I call my subroutine set
let elements = document.getElementsByName('cssProperty');
//Can find this element just once and assigned it.
let div = document.getElementById('modify');

function set()
{
  for ( let index = 0;  index < elements.length;  index++)
  {
    //BEST WAY OF DOING it
        let cssProperty = elements[ index].getAttribute('id');

        let cssValue = elements [index].value;
        div.style[ cssProperty ] = cssValue;
    }
  }

//Target button Set since all changes will be applied when it's pressed
//changes being apply thanks to my eventListener
 document.getElementById('set').addEventListener('click' , set) ;


 //Want the for loop to itiretate and get me the attribute of 0,1 and 2
 //        console.log( elements[ index ].getAttribute('id') );
 //Get the loop to iterate through Elements array values and then through its attributes array values
   //      console.log( elements[ index ].value );
