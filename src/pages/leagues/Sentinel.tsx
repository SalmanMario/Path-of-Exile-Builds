import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";
import { BuildCard } from "../../components/BuildCard";
import { NavLink } from "react-router-dom";
import { getSentinel } from "../../utils/apicall";

export function Sentinel() {
  const { data: sentinel, isLoading } = useQuery<Build[]>({
    queryFn: () => getSentinel(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!sentinel) {
    return null;
  }

  const leagueImg = sentinel && sentinel[0]?.leagueInfo?.leagueImg;
  const linkTrailer = sentinel && sentinel[0]?.leagueInfo?.linkTrailer;

  console.log(sentinel);

  return (
    <Box sx={{ backgroundColor: "#0c0f3f" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {sentinel.map((buildData, id) => (
            <Grid sx={{ display: "flex", justifyContent: "center" }} item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#101a57" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
