const tweetForm = document.querySelector("#tweetForm");

tweetForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // old version
    // const usernameInput = document.querySelectorAll("input")[0];
    // const tweetInput = document.querySelectorAll("input")[1];


    // version using the name value of an element to refer to it 

    const usernameInput = tweetForm.elements.username
    const tweetInput = tweetForm.elements.tweet
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = "";
    tweetInput.value = "";

    // console.log("SUBMITTT");

});

function addTweet(username, tweet) {

    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    document.querySelector("#tweets").append(newTweet);

}