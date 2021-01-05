import React from "react";

const UserContext = React.createContext({
	user: {},
	login: () => {},
	signup: () => {},
	notamember: () => {},
});

export default UserContext;
