import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		signIn(){
			let userEmail = this.get( 'userEmail' );
			let userPass = this.get( 'userPassword' );

			console.log( userEmail, userPass );
		}
	}
});
