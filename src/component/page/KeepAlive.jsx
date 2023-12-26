import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { parse } from 'xml-parse';
const KeepAlive = () => {
//      const fetchData = async () => {
//        try {
//          const szHostName = "192.168.100.30";
//          const szPort = 80;
//          const username = "admin";
//          const password = "123456";
 
//          const params = `?username=${encodeURIComponent(admin)}&password=${encodeURIComponent(123456)}`;
//          const url = `http://${szHostName}:${szPort}/cgi-bin/getuid?username=admin&password=123456`;
 
//          const response = await axios.get(url);
 
//          if (!response.ok) {
//            throw new Error(`Failed to get user ID. HTTP status: ${response.status}`);
//          }
 
//          const data = await response.text();
//          const parser = new DOMParser();
//          const xmlDoc = parser.parseFromString(data, 'text/xml');
//          const newUid = xmlDoc.getElementsByTagName("uid")[0]?.textContent;
 
//          if (newUid) {
//            setUid(newUid);
//          } else {
//            throw new Error("Failed to parse user ID from the response.");
//          }
//        } catch (error) {
//          console.error(error.message);
//        }
//      };
 
//      fetchData();
//   //  }, []); // Empty dependency array ensures that the effect runs only once on component mount

// useEffect(() => {
//   const uid = fetchData();
//   console.log('uid', uid);
//   setData(uid);
// }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.100.30:80/cgi-bin/getuid?username=admin&password=123456');

      // Check if the response is in XML format
      if (response.headers['content-type'].includes('xml')) {
        // Parse XML response
        const parsedData = parse(response.data);
        // Access the parsed XML data
        console.log('Parsed XML response:', parsedData);
        // Extract specific values from the XML structure if needed
        // Example: const value = parsedData.root.element1[0];
      } else {
        // Handle other response formats (assuming JSON in this case)
        console.log('Attempting to retrieve user information for:', response.data);
      }
    } catch (error) {
      // console.error('Error:', error);
      console.log('No user found in Local Storage.',error);
    }
  };

  fetchData();
 return (
    <div>
      <h2>Keep Alive</h2>
    </div>
 );
};

export default KeepAlive;