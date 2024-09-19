$(document).ready(function() {
    const apiUrl = 'https://api.example.com/west-bengal-rides';  // Replace with real API URL
  
    // Fetch ride data from the API
    function fetchRides() {
      $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(response) {
          $('#loading').hide();  // Hide the loading message
          displayRides(response.rides);  // Display the rides
        },
        error: function() {
          $('#loading').text('Failed to load rides. Please try again later.');
        }
      });
    }
  
    // Function to display rides dynamically
    function displayRides(rides) {
      const rideList = $('#rideList');
      rideList.empty();  // Clear any previous content
  
      rides.forEach(ride => {
        const rideCard = `
          <div class="col-md-4">
            <div class="card ride-card">
              <img src="${ride.image}" class="card-img-top" alt="${ride.name}">
              <div class="card-body">
                <h5 class="card-title">${ride.name}</h5>
                <p class="card-text">${ride.description}</p>
                <p><strong>Location:</strong> ${ride.location}</p>
                <p><strong>Price:</strong> ₹${ride.price}</p>
                <a href="${ride.link}" class="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        `;
        rideList.append(rideCard);
      });
    }
  
    // Initial function call to fetch rides
    fetchRides();
  });
  