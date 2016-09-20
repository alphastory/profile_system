import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),

	actions: {
		signIn(){
			let userEmail = this.get( 'userEmail' );
			let userPass = this.get( 'userPassword' );

			this.get( 'session' ).open( 'firebase', {
				provider: 'password',
				email: userEmail,
				password: userPass
			}).then( () => {

				this.set( 'userEmail', '' );
				this.set( 'userPassword', '' );
				
				this.transitionToRoute( 'profiles' );

			}, ( error ) => {
				
				if( error.code ){
					console.error( error.code );
				} else {
					console.error( error );
				}

			});
		}
	}
});
