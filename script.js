//add your API endpoint here
var API_ENDPOINT = "https://8cntjneub0.execute-api.us-east-1.amazonaws.com/dev_project";

// Function to save a new employee profile
document.getElementById("saveprofile").onclick = function(){
    // Retrieve values from input fields
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Create data object to be sent to the API
    var inputData = {
        "empFirstName": firstName,
        "empLastName": lastName,
        "empEmail": email,
        "empMessage": message
    };

    // AJAX POST request to save the profile
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            // Display success message
            document.getElementById("profileSaved").innerHTML = "Profile Saved!";
        },
        error: function () {
            // Display error message
            alert("Error saving profile");
        }
    });
}

// Function to fetch all employee profiles
document.getElementById("getprofile").onclick = function(){  
    // AJAX GET request to fetch profiles
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            // Clear existing table rows
            $('#employeeProfile tbody').empty();
            
            // Loop through response data and populate the table
            response.forEach(function(data) {
                $('#employeeProfile tbody').append("<tr> \
                    <td>" + data['empFirstName'] + "</td> \
                    <td>" + data['empLastName'] + "</td> \
                    <td>" + data['empEmail'] + "</td> \
                    <td>" + data['empMessage'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            // Display error message
            alert("Error fetching profiles");
        }
    });
}
