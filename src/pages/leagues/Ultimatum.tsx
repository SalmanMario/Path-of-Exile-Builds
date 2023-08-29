import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";
import { BuildCard } from "../../components/BuildCard";
import { NavLink } from "react-router-dom";
import { getUltimatum } from "../../utils/apicall";

export function Ultimatum() {
  const { data: ultimatum, isLoading } = useQuery<Build[]>({
    queryFn: () => getUltimatum(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!ultimatum) {
    return null;
  }

  const leagueImg = ultimatum && ultimatum[0]?.leagueInfo?.leagueImg;
  const linkTrailer = ultimatum && ultimatum[0]?.leagueInfo?.linkTrailer;

  console.log(ultimatum);

  return (
    <Box sx={{ backgroundColor: "#270a0a" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {ultimatum.map((buildData, id) => (
            <Grid sx={{ display: "flex", justifyContent: "center" }} item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#3f0d0d" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
