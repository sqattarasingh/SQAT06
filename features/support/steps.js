const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";

Given('I go to figure 1 web site', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})
When('I enter user name', function(callback) {
  this.browser
  .waitForVisible(".register-page__username-input")
 .setValue('.register-page__username-input', Math.random().toString(36).substring(7))
 .catch(function(error){
    console.log(error)
      callback()
 }); callback();
  })

  When('I enter email address', function(callback) {
    this.browser
    .waitForVisible(".register-page__email-input")
   .setValue('.register-page__email-input', Math.random().toString(36).substring(7)  + '@gmail.com')
    .catch(function(error){
        console.log(error)
        callback()
      }); callback()
    })
 
  When('I enter a password', function(callback) {
    this.browser
    .waitForVisible(".register-page__password-input")
    .setValue('.register-page__password-input','99999999').then(function() {
    callback();
    })
    .catch(function(error){
    console.log(error);
      })
   })
    
   When('I confirm password', function(callback) {
    this.browser
    .waitForVisible(".register-page__confirm-password-input")
    .setValue('.register-page__confirm-password-input','99999999').then(function() {
       callback();
    })
    .catch(function(error){
      callback(error);
       console.log(error);
      })
   })

   When('I select specialties-list', function(callback) {
    this.browser
    .waitForVisible('.register-page__specialties-list',100000)
    .addValue('.register-page__specialties-list','Physician').then(function() {
       callback();

    })
    .catch(function(error){
      callback(error);
       console.log(error);
      })
   })
   //.addValue('.register-page__specialties-list','Physician')
   //.addValue('.register-page__specialties-other-list', 'Critical Care')
   When('I select specialties-other-list', function(callback) {
    this.browser
    .waitForVisible(".register-page__specialties-other-list",100000)
    .addValue('.register-page__specialties-other-list','Critical Care').then(function() {
       callback();
       
    })
    .catch(function(error){
      callback(error);
       console.log(error);
      })
   })
   When('I agree to term agreement', function(callback) {
    this.browser
    .waitForVisible('.noselect',100000)
    .scroll('.register-page__terms-checkbox')
    .click('.register-page__terms-checkbox').then(function() {
    callback();
    })
    .catch(function(error){
     console.log(error);
      callback(error);
      })
   })   
   
   When('I click on submit', function(callback) {
    this.browser
    .waitForVisible(".register-page__submit-button",100000)
    .click('.register-page__submit-button').then(function() {
      callback();   
    })
    .catch(function(error){
      callback(error);
       console.log(error);
      })
   })

   Then('I should see home logo', function(callback) {
    this.browser
    .waitForVisible('.header-home',100000)
    .isVisible('.header-home').then(function(result){
          result.should.be.true;
          callback();         
    })
    .catch(function(error){
      callback(error);
       console.log(error);
      })
   })


   