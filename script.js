


//load the airtable library, call it "Airtable" 
var Airtable = require("airtable");
console.log(Airtable);

//connect our airtable to our website using API key
var base = new Airtable({ apiKey: "keyrS6u3qlNzLqhWE" }).base(
    "appY3sLRT4TNLQLpS"
  );

  //get our airtable data, specify how to retrieve it
base("my_art").select({}).eachPage(gotPageOfArt, gotAllArt);

// an empty array to hold our book data
const art = [];

// callback function that receives our data
function gotPageOfArt(records, fetchNextPage) {
    console.log("gotPageOfArt()");
    // add the records from this page to our art array
    art.push(...records);
    // request more pages
    fetchNextPage();
  }

    // call back function that is called when all pages are loaded
function gotAllArt(err) {
    console.log("gotAllArt()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogArt();
    showArt();
  }

// just loop through the art and console.log them
function consoleLogArt() {
    console.log("consoleLogArt()");
    art.forEach((artwork) => {
      console.log("Art:", artwork);
    });
  }

// loop through airtable data, and display them onto our page
function showArt() {
    console.log("showArt()");
    art.forEach((artwork) => {

      //add art titles
      //let artTitle = document.createElement("h1");
      //artTitle.innerText = artwork.fields.art_title;
      //document.body.appendChild(artTitle);

        //var artImage = document.createElement("img");
        //artImage.src = artwork.fields.art_image[0].url;
        //document.body.append (artImage);



     //creating a new div container  
     // this is where our art info will go 
      var artContainer = document.createElement("div");  
      artContainer.classList.add("art-container"); 
      document.querySelector(".container").append(artContainer);


      // add art titles to our art container
      var artTitle = document.createElement("h1");
      artTitle.classList.add("art-title");
      artTitle.innerText = artwork.fields.art_title;
      artContainer.append(artTitle);

      //add artists to our art container
      var artArtist = document.createElement ("h1");
      artArtist.classList.add ("art-artist");
      artArtist.innerText = artwork.fields.artist;
      artContainer.append(artArtist);


      //add description to our art container
      var artDescription = document.createElement("p");
      artDescription.classList.add("art-description");
      artDescription.innerText = artwork.fields.description;
      artContainer.append(artDescription);

      //add image to our song container
      var artImage = document.createElement("img");
      artImage.classList.add("art-image");
      artImage.src = artwork.fields.art_image[0].url;
      artContainer.append(artImage);

      // add event listener
      //when user clicks on song container
      // image and description will appear or disappear

      artContainer.addEventListener("click", function(){
        artDescription.classList.toggle("active");
        artImage.classList.toggle("active");
      })

      
      //get color field for airtable
      //loop through the array and add each color as a
      //a class to the art container

      var artColor= artwork.fields.color;
      artColor.forEach(function(color){
        artContainer.classList.add(color)
      })

      //add event listener to our filter
      //to add an active class to our art

      var filterRed = document.querySelector ('.red');
      filterRed.addEventListener("click", function(){

        if (artContainer.classList.contains("red")) {
          artContainer.style.background = "red";
          artContainer.style.color = "black";
        } else {
          artContainer.style.background = "white";
          artContainer.style.color = "black";
        }
      })

      var filterOrange = document.querySelector (".orange");
      filterOrange.addEventListener("click",function(){
        if (artContainer.classList.contains("orange")) {
          artContainer.style.background = "orange";
          artContainer.style.color = "black";
        } else {
          artContainer.style.background = "white";
          artContainer.style.color = "black";
        }
      })
      
      var filterYellow = document.querySelector (".yellow");
      filterYellow.addEventListener("click",function(){
        if (artContainer.classList.contains("yellow")) {
          artContainer.style.background = "yellow";
          artContainer.style.color = "black";
        } else {
          artContainer.style.background = "white";
          artContainer.style.color = "black";
        }
      })

      var filterGreen = document.querySelector (".green");
      filterGreen.addEventListener("click",function(){
        if (artContainer.classList.contains("green")) {
          artContainer.style.background = "green";
          artContainer.style.color = "black";
        } else {
          artContainer.style.background = "white";
          artContainer.style.color = "black";
        }
      })

      var filterBlue = document.querySelector (".blue");
      filterBlue.addEventListener("click",function(){
        if (artContainer.classList.contains("blue")) {
          artContainer.style.background = "blue";
          artContainer.style.color = "white";
        } else {
          artContainer.style.background = "white";
          artContainer.style.color = "black";
        }
      })

      var filterPurple = document.querySelector (".purple");
      filterPurple.addEventListener("click",function(){
        if (artContainer.classList.contains("purple")) {
          artContainer.style.background = "purple";
          artContainer.style.color = "white";
        } else {
          artContainer.style.background = "white";
          artContainer.style.color = "black";
        }
      })

      var filterPink = document.querySelector (".pink");
      filterPink.addEventListener("click",function(){
        if (artContainer.classList.contains("pink")) {
          artContainer.style.background = "pink";
    
        } else {
          artContainer.style.background = "white";
          artContainer.style.color = "black";
        }
      })

      var filterBlack = document.querySelector (".black");
      filterBlack.addEventListener("click",function(){
        if (artContainer.classList.contains("black")) {
          artContainer.style.background = "black";
          artContainer.style.color = "white";
        } else {
          artContainer.style.background = "white";
          artContainer.style.color = "black";
        }
      })

      var filterBrown = document.querySelector (".brown");
      filterBrown.addEventListener("click",function(){
        if (artContainer.classList.contains("brown")) {
          artContainer.style.background = "brown";
          artContainer.style.color = "white";
        } else {
          artContainer.style.background = "white";
          artContainer.style.color = "black";
        }
      })

      var filterReset = document.querySelector (".js-reset");
      filterReset.addEventListener("click",function(){
        artContainer.style.background = "white";
        artContainer.style.color = "black";
      })




    });
  }
  
  