import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";
import { BuildCard } from "../../components/BuildCard";
import { NavLink } from "react-router-dom";
import { getExpedition } from "../../utils/apicall";

export function Expedition() {
  const { data: expedition, isLoading } = useQuery<Build[]>({
    queryFn: () => getExpedition(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!expedition) {
    return null;
  }

  const leagueImg = expedition && expedition[0]?.leagueInfo?.leagueImg;
  const linkTrailer = expedition && expedition[0]?.leagueInfo?.linkTrailer;

  console.log(expedition);

  return (
    <Box sx={{ backgroundColor: "#0a1924" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {expedition.map((buildData, id) => (
            <Grid sx={{ display: "flex", justifyContent: "center" }} item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#0d2232" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
