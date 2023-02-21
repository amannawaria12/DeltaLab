$(document).ready(function() {
  // When the submit button is clicked
  $('#submit-button').click(function() {
    // Get the user's name from the input field
    var name = $('#name-input').val();
    // Reverse the name
    var reverseName = name.split('').reverse().join('');
    // Get the first letter of the name
    var firstLetter = name.charAt(0);
    // Get the last letter of the name
    var lastLetter = name.charAt(name.length - 1);
    // Get the length of the name
    var length = name.length;
    // Display the results
    $('#results').html('<p>Reverse name: ' + reverseName + '</p>' +
                       '<p>First letter: ' + firstLetter + '</p>' +
                       '<p>Last letter: ' + lastLetter + '</p>' +
                       '<p>Length: ' + length + '</p>');
  });
});
