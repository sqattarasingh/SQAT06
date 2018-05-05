"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };

const client = webdriverio.remote(options);

client
    .init()
    .url('https://app.figure1.com/account/register')
    .waitForVisible(".register-page__username-input")

    .setValue('.register-page__username-input','tara')
    .catch(function(error){
        console.log(error);
    })
   // .setValue('.register-page__email-input',Math.random().toString(36).substring(7) +"@gmail.com")
    
   // })
   .setValue('.register-page__email-input','tara@gmail.com')
   .catch(function(error){
       console.log(error);
   })
   .setValue('.register-page__password-input','tara@gmail.com')
   .catch(function(error){
       console.log(error);
   })
   .setValue('.register-page__confirm-password-input','tara@gmail.com')
   .catch(function(error){
       console.log(error);
   })   

   .addValue('.register-page__specialties-list','Physician')
   .addValue('.register-page__specialties-other-list','My specialty is')

   
   .scroll('.register-page__terms-checkbox')
   .click('.register-page__terms-checkbox')

   .click('.register-page__submit-button')
 .click('.register-page__submit-button')

.catch(function(error){
    console.log(error);
})

.getTitle().then(function(title) {
    console.log('Title is: ' + title);
})
.catch(function(err){
    console.log(err)

})
.end()
    
