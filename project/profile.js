function increaseFollowers() {
    // Get the current number of followers
    var followersCount = parseInt(document.getElementById("followersCount").innerText);

    // Increase the number of followers by 1
    followersCount++;

    // Update the followers count on the page
    document.getElementById("followersCount").innerText = followersCount + "\n Followers";

    // Show an alert when the Follow button is clicked
    alert("Thanks for following Me!!");
}
