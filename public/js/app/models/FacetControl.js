define(["jquery", "backbone"],
    function ($, Backbone) {
        // Creates a new Backbone Model class object
        var FacetControl = Backbone.Model.extend({
            initialize:function () {

            },

            // Default values for all of the Model attributes
            defaults:{
                "facet-path": {
                    "name": "value",
                    "level": 2
                },
                "offset": 0,
                "limit": 10,
                "fields":   ["field1", "field2", "field3"],
                "facets": ["facet1", "facet2", "test3"]
            },

            // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate:function (attrs) {

            }
        });

        return FacetControl;
    }
);