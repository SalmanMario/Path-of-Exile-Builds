import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { BuildCard } from "../../components/BuildCard";
import { getAncestor } from "../../utils/apicall";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";

export function Ancestor() {
  const { data: ancestor, isLoading } = useQuery<Build[]>({
    queryFn: () => getAncestor(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!ancestor) {
    return null;
  }

  const leagueImg = ancestor && ancestor[0]?.leagueInfo?.leagueImg;
  const linkTrailer = ancestor && ancestor[0]?.leagueInfo?.linkTrailer;

  console.log(ancestor);

  return (
    <Box sx={{ backgroundColor: "#1A292C" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {ancestor.map((buildData, id) => (
            <Grid item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#233537" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
