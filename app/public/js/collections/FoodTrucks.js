FTF = window.FTF || {};
FTF.FoodTrucks = (function ($, _, Backbone, FoodTruck) {

	'use strict';

	return Backbone.Collection.extend({
	 	model: FoodTruck,
	 	url: '/trucks',
	 	getFoodTypes: function () {

	 		return _.uniq(_.flatten(this.map(function (model) {
	 			return model.get('foodType');
	 		})));
	 	},
	 	getTrucksByFoodType: function (type) {

	 		return this.filter(function (model) {
	 			return _.contains(model.get('foodType'), type);
	 		});
	 	},
	 	getFoodTrucksByDay: function (day) {

	 		return this.filter(function (model) {
	 			return _.contains(model.get('schedule'), day);
	 		});
	 	}
	 });

})(jQuery, _, Backbone, FTF.FoodTruck);