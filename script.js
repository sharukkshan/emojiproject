let emoji_container = document.getElementById("emoje_container")

let seach_field = document.getElementById("search_field");

function displayEmoji(searchedValue){
    // console.log("👋");
    let filteredEmojies = emojiList.filter(function(emojee){
        if(emojee.description.indexOf(searchedValue) != -1){
            return true;
        }
    })
    filteredEmojies.forEach(function(emoji){
        // console.log(emoji);
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_description = document.createElement("td");

        new_emoji.innerText = emoji.emoji;
        new_aliases.innerText = emoji.aliases;
        new_description.innerText = emoji.description;

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_description);

        // console.log(new_row);
        emoji_container.appendChild(new_row)
    })
}

function searchData(e){
    // console.log(e);
    let value = e.target.value;
    displayEmoji(value);
    // console.log(e.target.value);
}
// console.log(emojiList);
window.addEventListener('load', displayEmoji);
seach_field.addEventListener("keyup", searchData);