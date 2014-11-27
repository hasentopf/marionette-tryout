define([ 'marionette', 'handlebars', '../models/FacetControl', 'text!templates/filter.html'],
    function (Marionette, Handlebars, Facet, template) {

        return Marionette.ItemView.extend({
            template: Handlebars.compile(template),

            model: new FacetControl(),

            /*
            initialize: function() {
                // bind the model change to re-render this view
                this.listenTo(this.model, 'change', this.render);
            },
            render: function() {
                // This alert is going to demonstrate a problem
                console.log('We`re rendering the view');

            },
             */


            // View Event Handlers
            events: {
                "click .submit": "submitFilter"
            },

            submitFilter: function(e) {
                console.log('submit filter');
                e.preventDefault();

                var formData = {};
            }
        });
    });