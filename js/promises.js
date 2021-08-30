"use strict";

function capturedEvent(event){
    if(event.type === "PushEvent"){
        return lastPushInfo.created_at;
    }else{
        console.log("Not a Push");
    }
}
function lastPushInfo(username){
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token' + gitHubAccess}})
        .then(response =>  response.json())
        .then(response => response[0].created_at)
        .catch(console.error)
}

console.log(lastPushInfo("ojhill"));

