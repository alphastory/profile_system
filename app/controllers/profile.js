import Ember from 'ember';

export default Ember.Controller.extend({
	isEditing: false,

	age: Ember.computed( 'model.dob', function(){
		let dob = this.get( 'model.dob' );
		let dateObject = new Date( dob );
		let diff = Date.now() - dateObject.getTime();
		let ageDate = new Date( diff );

		return Math.abs( ageDate.getUTCFullYear() - 1970 );
	} ),

	actions: {
		deleteProfile(){
			let profile = this.get( 'model' );
			console.log( 'Deleting ' + profile.get( 'name' ) );
			profile.deleteRecord();
			profile.save();

			this.transitionToRoute( 'profiles' );
		},

		editProfile(){
			this.set( 'isEditing', true );
		},

		saveChanges(){
			let profile = this.get( 'model' );
			profile.save();
			
			this.set( 'isEditing', false );
		}
	}
});
