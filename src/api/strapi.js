const STRAPI_URL = 'http://localhost:1337'; // Default local Strapi dev URL

/**
 * Basic fetch wrapper for Strapi REST API
 * @param {string} endpoint - The API endpoint (e.g., 'events')
 * @param {object} params - Query parameters
 */
export const fetchFromStrapi = async (endpoint, params = {}) => {
    const queryString = new URLSearchParams({
        populate: '*',
        ...params
    }).toString();

    const url = `${STRAPI_URL}/api/${endpoint}?${queryString}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Strapi Fetch Error: ${response.statusText}`);
        }
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error('API Fetch failed:', error);
        return null;
    }
};

export const getEvents = () => fetchFromStrapi('events', { sort: 'date:asc' });
export const getOffers = () => fetchFromStrapi('offers');
export const getGallery = () => fetchFromStrapi('galleries');
export const getHomeData = () => fetchFromStrapi('pages/home');
