var Movie = Backbone.Model.extend({ });
var Movies = Backbone.Collection.extend({ model: Movie });

var List = Backbone.View.extend({
    el: '#movieList',

    initialize: function () {
    },

    render: function () {
        var movieTemplate = _.template(this._movieTemplate);
        this.collection.each(function (movie) {
            var movieView = movieTemplate(movie.toJSON());
            this.$el.append(movieView);
        }.bind(this));

    },

    _movieTemplate: [
        '<div class="listItem">',
        '  <h2 class="listItemTitle"><%= title %></h2>',
        '  <img src="<%= coverUrl %>" />',
        '</div>'
    ].join('\n')
});
