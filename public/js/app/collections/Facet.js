define(["jquery", "backbone", "models/FacetControl"],
    function ($, Backbone, FacetControl) {
        // Creates a new Backbone Collection class object
        var Collection = Backbone.Collection.extend({
            // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
            model: FacetControl
        });

        return Collection;
    });