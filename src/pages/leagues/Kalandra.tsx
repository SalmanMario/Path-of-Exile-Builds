import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";
import { BuildCard } from "../../components/BuildCard";
import { NavLink } from "react-router-dom";
import { getKalandra } from "../../utils/apicall";

export function Kalandra() {
  const { data: kalandra, isLoading } = useQuery<Build[]>({
    queryFn: () => getKalandra(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!kalandra) {
    return null;
  }

  const leagueImg = kalandra && kalandra[0]?.leagueInfo?.leagueImg;
  const linkTrailer = kalandra && kalandra[0]?.leagueInfo?.linkTrailer;

  console.log(kalandra);

  return (
    <Box sx={{ backgroundColor: "#16262d" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {kalandra.map((buildData, id) => (
            <Grid sx={{ display: "flex", justifyContent: "center" }} item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#173642" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
