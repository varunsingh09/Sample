import React from "react";
import { Container } from "../utils/Container";

// import { isTablet } from 'react-device-detect';

export default ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

