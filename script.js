// Sample property data

let properties = [

    {
        name: "Sunrise PG",
        location: "Nashik",
        rent: 6000,
        type: "Single",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    },

    {
        name: "Green View Rooms",
        location: "Pune",
        rent: 7500,
        type: "Double",
        image: "https://images.unsplash.com/photo-1560185008-b033106af5c3"
    },

    {
        name: "Student Comfort PG",
        location: "Mumbai",
        rent: 5000,
        type: "Shared",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb"
    }

];


// Display properties

function displayProperties(list) {

    const container =
        document.getElementById("propertyContainer");

    container.innerHTML = "";


    if (list.length === 0) {

        container.innerHTML =
            "<p>No properties found.</p>";

        return;
    }


    list.forEach(function(property) {

        const card = document.createElement("div");

        card.className = "property-card";


        card.innerHTML = `

            <img
                src="${property.image}"
                alt="${property.name}"
            >

            <div class="property-info">

                <h3>
                    ${property.name}
                </h3>

                <p class="location">
                    📍 ${property.location}
                </p>

                <p class="rent">
                    ₹${property.rent} / month
                </p>

                <span class="type">
                    ${property.type}
                </span>

                <br><br>

                <button
                    onclick="showDetails('${property.name}')"
                >
                    View Details
                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


// Search function

function searchProperties() {

    const location =
        document
        .getElementById("locationSearch")
        .value
        .toLowerCase();


    const type =
        document
        .getElementById("roomType")
        .value;


    const maxRent =
        Number(
            document
            .getElementById("maxRent")
            .value
        );


    const filtered =
        properties.filter(function(property) {

            const locationMatch =
                property.location
                .toLowerCase()
                .includes(location);


            const typeMatch =
                type === "all" ||
                property.type === type;


            const rentMatch =
                !maxRent ||
                property.rent <= maxRent;


            return (
                locationMatch &&
                typeMatch &&
                rentMatch
            );

        });


    displayProperties(filtered);

}


// Add new property

document
    .getElementById("propertyForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const newProperty = {

            name:
                document
                .getElementById("propertyName")
                .value,

            location:
                document
                .getElementById("propertyLocation")
                .value,

            rent:
                Number(
                    document
                    .getElementById("propertyRent")
                    .value
                ),

            type:
                document
                .getElementById("propertyType")
                .value,

            image:
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36"

        };


        properties.push(newProperty);


        displayProperties(properties);


        document
            .getElementById("propertyForm")
            .reset();


        alert("Property added successfully!");

    });


// Property details

function showDetails(name) {

    alert(
        "You selected: " +
        name +
        "\n\nContact owner to know more details."
    );

}


// Show properties when page opens

displayProperties(properties);
