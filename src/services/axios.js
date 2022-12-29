import axios from "axios";

async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    let found = false;
    let page = 1;
    let countryName = '';
    
    while(!found){
       const res = await axios.get('https://jsonmock.hackerrank.com/api/countries?page=' + page); 
          for(var i = 0; i < res.data.length; i++){
          if(res.data[i].alpha2code == code){
              countryName = res.data[i].name; 
                found = true; 
          }
      } 
    };
    
   
    
    
    return countryName;
}