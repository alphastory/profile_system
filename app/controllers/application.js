import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	actions: {
		signOut(){
			console.log( 'Sup bruh' );
			this.get( 'session' ).close();
			this.transitionToRoute( 'login' );
		}
	}
});
