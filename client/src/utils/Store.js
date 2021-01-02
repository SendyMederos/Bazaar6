import React, { useState } from 'react';

const initialState = {
    user_id: ""
};

export const UserIdContext = React.createContext();

const Store = ({ children }) => {
    const [userId, setUserId] = useState(initialState);
};

export default Store;