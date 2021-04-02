//console.log("Hello, Airtable");

var Airtable = require("airtable");
//console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keygWB51hJVwkC70B" }).base(
    "appxMMo2J4HpQf9Jf"
  );

  // get our collection base, select all the records
  // specify functions that will receive the data
  base("kimchi")
    .select({})
    .eachPage(gotPageOfKimchis, gotAllKimchis);

  // an empty array to hold our data
  var kimchis = [];

  // callback function that receives our data
  function gotPageOfKimchis(records, fetchNextPage) {
      console.log("gotPageOfKimchis()");
      // add the records from this page to our array
      kimchis.push(...records);
      // request more pages
      fetchNextPage();
    }

  // call back function that is called when all pages are loaded
    function gotAllKimchis(err) {
      console.log("gotAllKimchis()");

    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }

    // call functions to log and show the books
    consoleLogKimchis();
    showKimchis();
  }

  // just loop through the books and console.log them
  function consoleLogKimchis() {
      console.log("consoleLogKimchis()");
      kimchis.forEach(kimchi => {
        console.log("kimchi:", kimchi);
      });
    }

  // look through our airtable data, create elements
  function showKimchis() {
      console.log("showKimchis()");
      kimchis.forEach(kimchi => {


        // create container for each song
      var kimchiContainer = document.createElement("div");
      kimchiContainer.classList.add("kimchi-container");
      document.querySelector(".container").append(kimchiContainer);

      // add song titles
      var kimchiTitle = document.createElement("h1");
      kimchiTitle.classList.add("kimchi-title");
      kimchiTitle.innerText = kimchi.fields.title;
      kimchiContainer.append(kimchiTitle);

      var kimchiDescription = document.createElement("p");
      kimchiDescription.classList.add("kimchi-description");
      kimchiDescription.innerText = kimchi.fields.description;
      kimchiContainer.append(kimchiDescription);

      var kimchiImage = document.createElement("img");
      kimchiImage.classList.add("kimchi-image");
      kimchiImage.src = kimchi.fields.image[0].url;
      kimchiContainer.append(kimchiImage);

      kimchiContainer.addEventListener("click", function() {
      kimchiDescription.classList.toggle("active");
      kimchiImage.classList.toggle("active");
        });

      });
  }
