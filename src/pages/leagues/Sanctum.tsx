import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";
import { BuildCard } from "../../components/BuildCard";
import { NavLink } from "react-router-dom";
import { getSanctum } from "../../utils/apicall";

export function Sanctum() {
  const { data: sanctum, isLoading } = useQuery<Build[]>({
    queryFn: () => getSanctum(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!sanctum) {
    return null;
  }

  const leagueImg = sanctum && sanctum[0]?.leagueInfo?.leagueImg;
  const linkTrailer = sanctum && sanctum[0]?.leagueInfo?.linkTrailer;

  console.log(sanctum);

  return (
    <Box sx={{ backgroundColor: "#2d2c2a" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {sanctum.map((buildData, id) => (
            <Grid sx={{ display: "flex", justifyContent: "center" }} item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#564723" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
