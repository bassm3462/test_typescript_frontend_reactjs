// import axios from "axios";
// import { useEffect } from "react";
export default function Feature() {
//   const inner_getuid = async () => {
//     try {
//       const url = new URL('http://192.168.100.30:80/cgi-bin/getuid?');
//       url.search = new URLSearchParams({
//         username: 'admin',
//         password: "123456"
//       }).toString();
//       const response = await axios({
//         url:url,
//         method: "GET",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         }},);
//       if (!response.ok) {
//         console.log('error'  );
//         return 0;
//       }
//       const contentType = response.headers.get('content-type');
//       if (contentType && contentType.includes('application/xml')) {
//         const text = await response.text();
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(text, 'text/xml');
//         const uid = xmlDoc.getElementsByTagName('uid')[0].textContent;
//         return uid;
//       } else {
//         // Handle non-XML response (possibly JSON)
//         const data = await response.json();
//         // Adjust the parsing logic based on the actual response format
//         return data.uid; // Change accordingly
//       }
//     } catch (error) {
//       console.log(error);
//       console.log('error ',error);
//       return 0;
//     }
//   };
//   const getuid = async () => {
//     let result = await inner_getuid();
//     console.log(`result: ${result}`);

//     return result;
//   };
//   useEffect(() => {
//     getuid();
//   }, []);
//   return (
//     <div>
//       feature
//     </div>
//   )
}