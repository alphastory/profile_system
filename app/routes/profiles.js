import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll( 'profile' );
	},

	actions: {
		showNewForm(){
			let form = document.querySelector( '#newProfile' );
			let blur = document.querySelector( '#blur' );
			form.style.display = 'block';
			blur.style.display = 'block';
		},

		hideForm(){
			let form = document.querySelector( '#newProfile' );
			let blur = document.querySelector( '#blur' );
			form.style.display = 'none';
			blur.style.display = 'none';
		}
	},

	beforeModel(){
		if( !this.get( 'session' ).get( 'isAuthenticated' ) ){
			this.transitionTo( 'login' );
		}
		return this.get( 'session' ).fetch().catch( function(){} );
	}
});
