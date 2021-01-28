$(document).ready(function() {
  //console.log("hello")
  // $("#tweet-text")
  // $(".counter")
  // --- our code goes here ---
  // $(".counter").on('click', function() {
  //    //The this keyword is a reference to the button
  //   console.log(this);

  // });
  $("#tweet-text").on('keyup', function() {
    //The this keyword is a reference to the button
   let value = $(this).val();
 let character = value.length;
 const maxCounter = 140;
// //  if()
console.log(character);
   $(".counter").html(`${maxCounter-character}`)
if (maxCounter-character<0){
  $(".counter").addClass("red");  
}
else{
  $(".counter").removeClass("red");  
}
 
    
 });

  
  
});


// $("#tweet-text").on('click', () => {
//   console.log(this); //The this keyword here refers to something else!
// });
