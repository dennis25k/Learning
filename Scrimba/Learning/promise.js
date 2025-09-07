const userLeft = false;
const userWatchedCatMeme = false;

function watchedTutorial() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject("User Left");
        } else if (userWatchedCatMeme) {
            reject("User watched a Cat Meme");
        } else {
            resolve("User watched the Video");
        }
    });
}

watchedTutorial()
    .then(value => console.log(value))
    .catch(error => console.log(error));
