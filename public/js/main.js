let confirmed = 0;
let recovered = 0;
let deaths = 0;

const counter = (value, div) => {
    let count = value - 10;
    for (let start = count; count < value; start++){
	    setInterval(function(){
		    document.getElementById(div).innerHTML = `<h1>${count}</h1>`;
	    }, 10000);
    }
}

const uri = `https://covid19-data.p.rapidapi.com/all`;
const h = new Headers({ 
    'content-type': 'application/json',
    'x-rapidapi-host': 'covid19-data.p.rapidapi.com',
    'x-rapidapi-key': '86d1c5836cmshc1464f8d98ed391p12e979jsnf8963abf514c' });

(async () => {
    const req = new Request(uri, {
        method: 'GET',
        headers: h,
      });
    
    
      const response = await fetch(req);
      const data = await response.json();
          if (data) {
                data.forEach(country => {
                    confirmed = confirmed + country.confirmed
                    recovered = recovered + country.confirmed
                    deaths = deaths + country.deaths
                })
                console.log(`Con = ${confirmed}, rec = ${recovered}, deaths = ${deaths}`)
                //counter(confirmed, 'confirmed');
                //counter(recovered, 'recovered');
                //counter(deaths, 'deaths');

          };
})();
