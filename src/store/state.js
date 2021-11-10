let defaultCity = '深圳'
try {
  if (localStorage && localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) { }


export default {

  city: defaultCity

}