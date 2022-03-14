import { useState, useEffect } from 'react';
import { getErrorMessage } from '../Utils/utils';
import { API_UNI_CDN } from '../constant/constant';
import fetch from 'fetch-jsonp';

export const useFetch = () => {
  const URL = `${API_UNI_CDN}app_id=${process.env.REACT_APP_CLIENT_KEY}&app_key=${process.env.REACT_APP_API_KEY}`;
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          setLoading(false);
          response.json().then((events) => {
            setEventsData(events.liveEvents);
          });
        } else {
          throw new Error('Something Went Wrong ' + response.status);
        }
      } catch (error) {
        setLoading(false);
        setError(getErrorMessage(error));
      }
    };
    fetchData();
  }, [URL]);

  return { eventsData, loading, error };
};
