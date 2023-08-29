import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";
import { getLegion } from "../../utils/apicall";
import { BuildCard } from "../../components/BuildCard";
import { NavLink } from "react-router-dom";

export function Legion() {
  const { data: legion, isLoading } = useQuery<Build[]>({
    queryFn: () => getLegion(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!legion) {
    return null;
  }

  const leagueImg = legion && legion[0]?.leagueInfo?.leagueImg;
  const linkTrailer = legion && legion[0]?.leagueInfo?.linkTrailer;

  console.log(legion);

  return (
    <Box sx={{ backgroundColor: "#2d1931" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {legion.map((buildData, id) => (
            <Grid sx={{ display: "flex", justifyContent: "center" }} item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#3c2044" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
