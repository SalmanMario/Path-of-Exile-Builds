import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#181a20",
      }}
    >
      <img
        style={{ maxWidth: "100%" }}
        src="https://image.api.playstation.com/vulcan/img/rnd/202011/0203/ej3083aB8yMTgCh8uyAD9ezc.png"
      />
      <Typography color={"white"} variant="h2">
        Page not found
      </Typography>
      <Typography color={"white"} m={2} variant="h6">
        The requested URL was not found on this server. That's all we know.
      </Typography>
      <Box mb={11.8}>
        <Button onClick={goToMainPage} variant="contained">
          Go to Mainpage
        </Button>
      </Box>
    </Box>
  );
}
