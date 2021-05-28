import React from "react";
import Nav from "../../components/Common/Header"


export default ({children}) => {

	console.log("render Main default Admin", children)
	return (
		<div>
			<Nav />
			{/* Default Layout  */}
			{children}
		</div>
        
	)
}

