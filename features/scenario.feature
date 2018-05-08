Feature: Registering of a user
  As a developer
  I want to register a new user

  Scenario: Sign up a new user
  Given I go to figure 1 web site
  When I enter user name
  And I enter email address
  And I enter a password
  And I confirm password
  And I select specialties-list
  And I select specialties-other-list
  And I agree to term agreement
  And I click on submit
  Then I should see home logo
  
  
 
    
  
