'use client';

import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Theme({ children }: Props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#701664",
        contrastText: "#fff",
      },
      secondary: {
        main: "#64748B",
        contrastText: "#fff",
      },
      netral: {
         darken: "#2A1D1F",
       },
    },
    typography: {
      fontFamily: 'Poppins',
    },

    components: {
      // MuiLink: {
      //   defaultProps: {
      //     component: LinkBehavior,
      //   } as LinkProps,
      // },
      // MuiButtonBase: {
      //   defaultProps: {
      //     LinkComponent: LinkBehavior,
      //   },
      // },
      MuiButton: {
         variants: [
            {
               props: { variant: "contained" },
               style: {
                 color: "#FFF",
                 borderRadius: '10px',
                 backgroundColor: "#701664",
                 boxShadow: "none",
                 "&:hover": {
                   backgroundColor: "#701664",
                   boxShadow: "none"
                 },
               },
             },
         ]
      },
    },
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Theme;
