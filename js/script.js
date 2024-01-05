var siteName = document.getElementById("sn");

var siteUrl = document.getElementById("su");

// array of data of user
var siteData = [];

if(localStorage.getItem("siteData") != null){

  siteData = JSON.parse(localStorage.getItem("siteData"));

  displayData();
}

// function for adding user data
function addData() {

var sites = {
    
        name: siteName.value,
        url: siteUrl.value
}

  siteData.push(sites);

  localStorage.setItem("siteData",JSON.stringify(siteData));

  clearData();

  displayData();
}

function clearData(){

    siteName.value = "";

    siteUrl.value = "";
}

// function for display the data that user entered
function displayData() {

    var userData = "";

    var index = 0;

  for (var i = 0; i < siteData.length; i++) {

    index++;

    userData += `<tr>

                <td> ${index} </td>
                <td> ${siteData[i].name} </td>

                <td>
                <a onclick="visitSite()" target="_blank" href="https:// ${siteData[i].url} ">
                <button class="visit-button text-white px-3 py-1 rounded border-0" type="button"><i class="fa-solid fa-eye pe-2"></i>Visit</button>
                </a>
                </td>
            
                <td>
                <button onclick="deleteData(${i})" class="delete-button text-white px-3 py-1 rounded border-0" type="button"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
                </td>

                </tr>`;
}

    document.getElementById('tbody').innerHTML = userData;
}

// function to open the link of URL
function visitSite(){

  for(var i = 0;i<siteData.length;i++){

    window.location='https://' + siteData[i].url;
  }
}

// function for delete element
function deleteData(index){

  siteData.splice(index,1);

  displayData();
}

var searchedletters = document.getElementById('search');

// function for search the element and display it 
function searchElement(letters){

  var letters = searchedletters.value;

  var searchedElement = "";

  var index = 0;

  for(var i=0;i<siteData.length;i++){

    index++;

     if( siteData[i].name.toLowerCase().includes( letters.toLowerCase() ) == true ){

      searchedElement += `<tr>

      <td> ${index} </td>
      <td> ${siteData[i].name} </td>

      <td>
      <a onclick="visitSite()" target="_blank" href="https:// ${siteData[i].url} ">
      <button class="visit-button text-white px-3 py-1 rounded border-0" type="button"><i class="fa-solid fa-eye pe-2"></i>Visit</button>
      </a>
      </td>
  
      <td>
      <button onclick="deleteData(${i})" class="delete-button text-white px-3 py-1 rounded border-0" type="button"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
      </td>

      </tr>`;
     }
  }

    document.getElementById('tbody').innerHTML = searchedElement;
}

