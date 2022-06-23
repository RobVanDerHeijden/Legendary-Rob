import { Container, Typography } from "@mui/material";
import React from "react";

// export function DtddAnyBanner(props: any) {
//   return (
//     <Container
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <Typography variant="h4">Text</Typography>
//     </Container>
//   );
// }

export interface GPTextProps {
  text: string;
}

const GPText = (props: GPTextProps) => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Text</Typography>
    </Container>
  );
};

export default GPText;
