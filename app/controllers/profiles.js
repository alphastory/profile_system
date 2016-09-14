import Ember from 'ember';

export default Ember.Controller.extend({
	firebaseApp: Ember.inject.service(),
	actions: {
		addProfile(){
			console.log( 'Adding Profile' );

			let profileName = this.get( 'profileName' );
			let profileOccupation = this.get( 'profileOccupation' );
			let profileDOB = this.get( 'profileDOB' );

			if( profileName && profileOccupation && profileDOB ){

				let image = document.querySelector( '#newPhoto' );
				let storeName = profileName.replace( '/ /g', '' );

				const storageRef = this.get( 'firebaseApp' ).storage().ref();

				let file = image.files[0];
				let metadata = {
					'contentType' : file.type
				};

				let uploadTask = storageRef.child( `upload/${storeName}/$file.name}` ).put( file, metadata );

				uploadTask.on( 'state_changed', null, ( error ) => {
					console.error( 'Upload Failed: ', error );
				}, () => {
					let uploadUrl = uploadTask.snapshot.metadata.downloadURLs[0];

					let profile = this.store.createRecord( 'profile', {
						photo: uploadUrl,
						name: profileName,
						occupation: profileOccupation,
						dob: profileDOB,
						timestamp: new Date().getTime()
					} );

					profile.save();

					this.send( 'hideForm' );
				} );

			}

		}
	}
});
