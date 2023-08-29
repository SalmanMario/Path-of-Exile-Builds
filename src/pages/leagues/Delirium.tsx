import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";
import { BuildCard } from "../../components/BuildCard";
import { NavLink } from "react-router-dom";
import { getDelirium } from "../../utils/apicall";

export function Delirium() {
  const { data: delirium, isLoading } = useQuery<Build[]>({
    queryFn: () => getDelirium(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!delirium) {
    return null;
  }

  const leagueImg = delirium && delirium[0]?.leagueInfo?.leagueImg;
  const linkTrailer = delirium && delirium[0]?.leagueInfo?.linkTrailer;

  console.log(delirium);

  return (
    <Box sx={{ backgroundColor: "#1b1c1c" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {delirium.map((buildData, id) => (
            <Grid sx={{ display: "flex", justifyContent: "center" }} item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#282a2a" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
