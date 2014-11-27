define([ 'App', 'marionette', 'handlebars', 'models/Model', 'text!templates/filter.html'],
    function (App, Marionette, Handlebars, Model, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend({
            template:Handlebars.compile(template),
            model: new Model({
                mobile: App.mobile
            }),

            // View Event Handlers
            events: {

            }
        });
    });