$(function() {
  
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  
})

  // Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet

var pet_info = {
  
  "name": "Pablo",
  "weight": 6,
  "happiness" : 8,
  
}
  function clickedTreatButton() {
    
    pet_info.weight ++ 
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
    
    pet_info.happiness --
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    // Decrease pet happiness
    // Decrease pet weight
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero, set it back to zero
  }
  
  // Updates your HTML with the current values in your pet_info dictionary
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }
