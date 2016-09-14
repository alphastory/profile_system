import Ember from 'ember';

export default Ember.Controller.extend({
	age: Ember.computed( 'model.dob', function(){
		let dob = this.get( 'model.dob' );
		let dateObject = new Date( dob );
		let diff = Date.now() - dateObject.getTime();
		let ageDate = new Date( diff );

		return Math.abs( ageDate.getUTCFullYear() - 1970 );
	} )
});
