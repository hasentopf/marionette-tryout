define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/HeaderView', 'views/FilterView', 'views/ResultView'],
    function (App, Backbone, Marionette, WelcomeView, HeaderView, FilterView, ResultView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.asideRegion.close();
            App.mainRegion.show(new WelcomeView());
        },
        search:function () {
            App.asideRegion.show(new FilterView());
            App.mainRegion.show(new ResultView());
        }
    });
});