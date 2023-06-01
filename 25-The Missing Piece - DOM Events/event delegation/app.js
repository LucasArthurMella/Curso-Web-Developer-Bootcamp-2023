const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets")



// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//     li.addEventListener("click", function () {
//         li.remove();
//     });
// }

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
    tweetsContainer.append(newTweet);

}

tweetsContainer.addEventListener("click", function (e) {
    //target is the thing that was clicked;
    e.target.nodeName === "LI" && e.target.remove();
})