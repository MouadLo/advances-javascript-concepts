var favoriteFood = "grapes";

var foodThoughts = function () {
    console.log('Original favourite food: ' + favoriteFood);

    var favoriteFood = 'sushi';

    console.log('New favourite food:' + favoriteFood );
};
foodThoughts();

var favoriteFood = undefined;

favoriteFood = "grapes";

var foodThoughts = function () {
    console.log('Original favourite food: ' + favoriteFood);

    var favoriteFood = 'sushi';

    console.log('New favourite food:' + favoriteFood );
};
foodThoughts();

var favoriteFood = undefined;
var foodThoughts = undefined;

favoriteFood = "grapes";

 foodThoughts = function () {
    console.log('Original favourite food: ' + favoriteFood);

    var favoriteFood = 'sushi';

    console.log('New favourite food:' + favoriteFood );
};
foodThoughts();

var favoriteFood = undefined;
var foodThoughts = undefined;

favoriteFood = "grapes";

foodThoughts = function () {
    var favoriteFood = undefined;
    console.log('Original favourite food: ' + favoriteFood);

    favoriteFood = 'sushi';

    console.log('New favourite food:' + favoriteFood );
};
foodThoughts();