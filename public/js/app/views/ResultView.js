define([ 'marionette', 'handlebars', '../models/FacetControl', 'text!templates/result.html'],
    function (Marionette, Handlebars, Facet, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend({
            template:Handlebars.compile(template),
            model: new FacetControl(),
            initialize: function() {

                // bind the model change to re-render this view
                this.listenTo(this.model, 'change', this.render);

            },

            render: function() {

                // This alert is going to demonstrate a problem
                alert('We`re rendering the view while changed the Facet');

            }
        });
    });