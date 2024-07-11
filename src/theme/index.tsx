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
