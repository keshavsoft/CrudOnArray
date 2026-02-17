import { v4 as uuidv4 } from 'uuid';

// Use a Map to store key-value pairs
const tokenStorage = new Map();

/**
 * Creates a new UUID for a specific key.
 * @param {string} key - The unique identifier for this pair (e.g., 'session', 'request')
 */
const setFunc = (key) => {
    const localUuid = uuidv4();
    tokenStorage.set(localUuid, key);
    return localUuid;
};

/**
 * Retrieves the UUID associated with a specific key.
 * @param {string} key 
 */
const getFunc = (inUuid) => {
    return tokenStorage.get(inUuid);
};

/**
 * Optional: Get all stored pairs
 */
const getAllPairs = () => {
    return Object.fromEntries(tokenStorage);
};

export { getFunc, setFunc, getAllPairs };