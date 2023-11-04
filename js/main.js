

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('floating');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
    document.getElementById('floating-toggle').classList.remove("active");
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW & HIDE MENU ===============*/
const toggleButton = document.getElementById('floating-toggle')

const activeMenu = () => {
    toggleButton.classList.toggle('active')
}


toggleButton.addEventListener('click', activeMenu)



// Function to fetch sunrise and sunset times using the Sunrise Sunset API
async function getSunriseSunset() {
    try {
      const response = await fetch('https://api.sunrise-sunset.org/json?lat=20.5937&lng=78.9629&formatted=0');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching sunrise and sunset data:', error);
      return null;
    }
  }
  
  // Function to determine if it's currently day or night based on sunrise and sunset times
  function isDaytime(sunrise, sunset) {
    const now = new Date();
    return now >= new Date(sunrise) && now <= new Date(sunset);
  }
  
  // Function to update the body class based on the time of day
  function updateBodyClass() {
    getSunriseSunset().then(results => {
      if (results) {
        const { sunrise, sunset } = results;
        const isDay = isDaytime(sunrise, sunset);
        document.body.classList.toggle('dark-mode', isDay);
        document.body.classList.toggle('light-mode', !isDay);
      }
    });
  }
  
  // Call the updateBodyClass function to set the initial body class
  updateBodyClass();
  
  // Set up an interval to update the body class every minute (in milliseconds)
  setInterval(updateBodyClass, 60 * 1000);
  



