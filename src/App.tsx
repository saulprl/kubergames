import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Theme } from "@mui/system";

const App = () => {
  const theme: Theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#e91e63",
      },
      secondary: {
        main: "#8e24aa",
      },
      background: {
        default: "#0a1929",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: "100%", height: "100%" }}>
        <Typography variant="h4">Welcome to Kubergames!</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
