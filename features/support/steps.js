const { Given, When, Then } = require('cucumber')
const { setDefaultTimeout } = require('cucumber');
const { expect } = require('chai')
setDefaultTimeout(60 * 1000);

"use strict";

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

//client
  //  .init()
  //  .url('https://duckduckgo.com/')
  //  .setValue('#search_form_input_homepage', 'WebdriverIO')
  //  .click('#search_button_homepage')
 //   .getTitle().then(function(title) {
  ///      console.log('Title is: ' + title);
   // })
  //  .end();


Given('I go to duck duck go', function(callback) {
  client
    .init()
    .url('https://duckduckgo.com/').then(function() {
      callback();
    })
})

When('I search for WebdriverIO', function(callback) {
  client
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage').then(function(){
      callback();
    })
})

Then('I should see the search results', function() {
  client
    .getTitle().then(function(title){
      console.log('Title is: ' + title)
      callback();
  })
 // expect(this.variabl e).to.eql(number)
})
