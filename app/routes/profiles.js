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
	}
});
