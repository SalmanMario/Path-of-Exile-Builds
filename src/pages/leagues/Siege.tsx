import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";
import { BuildCard } from "../../components/BuildCard";
import { NavLink } from "react-router-dom";
import { getSiege } from "../../utils/apicall";

export function Siege() {
  const { data: siege, isLoading } = useQuery<Build[]>({
    queryFn: () => getSiege(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!siege) {
    return null;
  }

  const leagueImg = siege && siege[0]?.leagueInfo?.leagueImg;
  const linkTrailer = siege && siege[0]?.leagueInfo?.linkTrailer;

  console.log(siege);

  return (
    <Box sx={{ backgroundColor: "#061f27" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {siege.map((buildData, id) => (
            <Grid sx={{ display: "flex", justifyContent: "center" }} item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#072732" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
