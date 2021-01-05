import React from "react";

const UserContext = React.createContext({
	login: () => {},
	signup: () => {},
	notamember: () => {},
});

export default UserContext;
