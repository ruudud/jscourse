var movies = new Movies();

// Set up with data from static json
movies.reset(moviesJson.contentList);

var list = new List({
	collection: movies
});
list.render();
