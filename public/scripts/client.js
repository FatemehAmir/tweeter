/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  const $tweetContainer = $("#tweet-container");
  const loadTweets = function() {
    $tweetContainer.empty()
    $.get('http://localhost:8080/tweets')
    .then(tweetJSON => {
    
      console.log(tweetJSON);
      tweetJSON.forEach(renderTweet);
    }).catch(error => {
      console.error(error);
    });
  };
  const renderTweet = function(tweet) {
    $tweetContainer.append(`
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
      </article>`);
  };
  loadTweets()

  $("form").on("submit", function (event) {
    console.log("hello");
    event.preventDefault();
    console.log($(this).serialize());
    let data=$("#tweet-text").val()
    console.log(data);
    if (data ===""||data.length>140){
      alert("try some thing new  ") ;
    }else{
    $.ajax('http://localhost:8080/tweets', {
        method: 'POST',
        data: $(this).serialize()
      })
      .then(function (morePostsHtml) {
       
        console.log('Success: ', morePostsHtml);
        loadTweets();

      });
    }
  });
});



