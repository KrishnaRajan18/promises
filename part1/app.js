
$(document).ready(function () {
    let favNumber = 9;
    let baseURL = "http://numbersapi.com";
  
 
  axios.get(`${baseURL}/${favNumber}?json`)
      .then((data) => {
        let response= data.data;
        $("#favorite-number-fact").text(response.text);
      })
      
      let favNumbers = [7, 11, 22];
      axios.get(`${baseURL}/${favNumbers}?json`)
      .then((data) => {
        let response= data.data;
        Object.keys(response).forEach(function (key) {
          $("#numbers-fact").append(response[key]).append("<br>");
        });
      })
     
  
   
  
      let fourPromises = [];
  
      for (let i = 1; i < 5; i++){
          fourPromises.push(
            axios.get(`${baseURL}/${favNumber}?json`)
          );
      }
  
      Promise.all(fourPromises)
      .then(numberArr => numberArr.forEach(data => 
          $("#four-facts").append(data.data.text).append("<br>")))
     
  
   
  });
