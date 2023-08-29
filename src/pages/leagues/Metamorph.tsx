import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { BuildCard } from "../../components/BuildCard";
import { getMetamorph } from "../../utils/apicall";
import { useQuery } from "react-query";
import { Build } from "../../models/Build";

export function Metamorph() {
  const { data: metamorph, isLoading } = useQuery<Build[]>({
    queryFn: () => getMetamorph(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!metamorph) {
    return null;
  }

  const leagueImg = metamorph && metamorph[0]?.leagueInfo?.leagueImg;
  const linkTrailer = metamorph && metamorph[0]?.leagueInfo?.linkTrailer;

  console.log(metamorph);

  return (
    <Box sx={{ backgroundColor: "#152a15" }}>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <NavLink target="_blank" to={linkTrailer}>
          <img style={{ maxWidth: "100%" }} src={leagueImg} alt="" />
        </NavLink>
      </Container>
      <Container>
        <Grid sx={{ display: "flex", justifyContent: "space-around" }} container>
          {metamorph.map((buildData, id) => (
            <Grid item key={id} xs={12} md={4}>
              <BuildCard data={buildData} color="#213d1d" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
