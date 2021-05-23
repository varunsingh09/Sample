import React from "react";

import { Container, Box, BoxTitle, BoxText } from "./HomeStyles";

export default function Home({ boxData }) {
  return (
    <Container>
      {boxData.map((box, index) => (
        <Box key={index} bgColor={`#D5CAFA`}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText><img src={box.thumbnailUrl} alt={box.title} /></BoxText>
        </Box>
      ))}
    </Container>
  );
}
