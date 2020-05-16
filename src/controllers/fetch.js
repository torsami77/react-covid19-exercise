let confirmed = 0;
let recovered = 0;
let deaths = 0;
let countries = [];

const uri = 'https://covid19-data.p.rapidapi.com';
const h = new Headers({ 
    'content-type': 'application/json',
    'x-rapidapi-host': 'covid19-data.p.rapidapi.com',
    'x-rapidapi-key': '86d1c5836cmshc1464f8d98ed391p12e979jsnf8963abf514c'
});

const getAll = async () => {
    const req = new Request(`${uri}/all`, {
        method: 'GET',
        headers: h,
      });
    
    
      const response = await fetch(req);
      const data = await response.json();
          if (data) {
                data.forEach(country => {
                    confirmed = confirmed + country.confirmed;
                    recovered = recovered + country.confirmed;
                    deaths = deaths + country.deaths;
                    countries.push(country.country)
                })

                return {
                    confirmed,
                    recovered,
                    deaths,
                    countries,
                }

          };
};

const getCountry = async (country) => {
    const req = new Request(`${uri}?name=${country}`, {
        method: 'GET',
        headers: h,
    });
    
    const response = await fetch(req);
    const data = await response.json();
        if (data) {
        }
};


export default { getAll, getCountry };