import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";
import { BuildCard } from "../../components/BuildCard";
import { NavLink } from "react-router-dom";
import { getHarvest } from "../../utils/apicall";

export function Harvest() {
  const { data: harvest, isLoading } = useQuery<Build[]>({
    queryFn: () => getHarvest(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!harvest) {
    return null;
  }

  const leagueImg = harvest && harvest[0]?.leagueInfo?.leagueImg;
  const linkTrailer = harvest && harvest[0]?.leagueInfo?.linkTrailer;

  console.log(harvest);

  return (
    <Box sx={{ backgroundColor: "#131a2c" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {harvest.map((buildData, id) => (
            <Grid sx={{ display: "flex", justifyContent: "center" }} item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#182846" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
