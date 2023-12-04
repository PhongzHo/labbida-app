// import Cookies from "universal-cookie";
// const cookies = new Cookies({path:'/',secure:true});

// export function getAccessTokenFromCookie() {
//     const access_token = decodeURIComponent(cookies.get('access_token'));
//     return  access_token || null;
//   }
  
//   export function getExpiresFromCookie() {
//     const expires_in = decodeURIComponent(cookies.get('expires_in'));
//     return  expires_in || null;
//   }
  
//   export function isTokenExpired(expires) {
//     const now = new Date().getTime();
//     const expiresInMillis = new Date(expires).getTime();
//     return now >= expiresInMillis;
//   }
  
//   export function setCookie(name, value, exp) {
//     const expires = exp.toUTCString();
//     cookies.set(name,value,expires);
//   }

