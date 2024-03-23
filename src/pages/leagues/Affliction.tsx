import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { BuildCard } from "../../components/BuildCard";
import { getAffliction } from "../../utils/apicall";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";

export function Affliction() {
  const { data: affliction, isLoading } = useQuery<Build[]>({
    queryFn: () => getAffliction(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!affliction) {
    return null;
  }

  const leagueImg = affliction && affliction[0]?.leagueInfo?.leagueImg;
  const linkTrailer = affliction && affliction[0]?.leagueInfo?.linkTrailer;

  console.log(affliction);

  return (
    <Box sx={{ backgroundColor: "#0C131B" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {affliction.map((buildData, id) => (
            <Grid item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#111822" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
