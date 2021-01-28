/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready( () => {
  $.get('http://localhost:8080/tweets').then(response => {
  console.log(response)    
  response.forEach(tweet=> {
   $('#tweet-container').append(`
      <article class="tweet">
          <header class="user">
            <div class="user-img"><img src="${tweet.user.avatars}"></div>
            <div class="user-name"><h2>${tweet.user.name}</h2></div>
            <div class="user-email"><h2>${tweet.user.handle}</h2></div>
          </header>
          <p>${tweet.content.text}</p>
          <footer>
            <small>${tweet.created_at}</small>
          </footer> 
        </article>
   `)
  })
}).catch(error => {
  console.error(error)
})
});