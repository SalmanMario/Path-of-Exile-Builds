import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { BuildCard } from "../../components/BuildCard";
import { getCrucible } from "../../utils/apicall";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";

export function Crucible() {
  const { data: crucible, isLoading } = useQuery<Build[]>({
    queryFn: () => getCrucible(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!crucible) {
    return null;
  }

  const leagueImg = crucible && crucible[0]?.leagueInfo?.leagueImg;
  const linkTrailer = crucible && crucible[0]?.leagueInfo?.linkTrailer;

  console.log(crucible);

  return (
    <Box sx={{ backgroundColor: "#2e1b09" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {crucible.map((buildData, id) => (
            <Grid item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#3d210a" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
