// src/App.js

import React, { useState, useEffect } from "react";
import axios from "axios";
function TestnVR() {
  const [uid, setUid] = useState(0);
  useEffect(() => {
    const getUid = async () => {
      try {
        const response = await fetchUid();
        setUid(response.uid);
      } catch (error) {
        console.log("Error fetching UID:", error);
      }
    };
    getUid();
  }, []);
  const fetchUid = async () => {
    const username = "admin";
    const password = "123456"; 
    const timestampedUrl = timestamp(
      `http://192.168.100.30/cgi-bin/getuid?username=${username}&password=${password}`
    );

    try {
      const response = await axios.get(timestampedUrl);
      if (response.ok) {
        const xmlData = await response.text();

        // Parse XML using DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");

        // Access the UID property from the parsed XML
        const uid = xmlDoc.querySelector("response uid")?.textContent;

        if (uid) {
          setUid(uid);
        } else {
          throw new Error("UID not found in the XML response");
        }
      } else {
        throw new Error("Failed to fetch UID");
      }
    } catch (error) {
      console.log("Error during fetch:", error);
    }
  };

  const timestamp = (url) => {
    const getTimestamp = new Date().getTime();
    if (url.indexOf('?') > -1) {
      url = url + `&timestamp=${getTimestamp}`;
    } else {
      url = url + `?timestamp=${getTimestamp}`;
    }
    return url;
  };

  return (
    <div>
      <p>UID: {uid}</p>
      {/* Other components or UI elements */}
    </div>
  );
}
export default TestnVR;