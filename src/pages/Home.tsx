import { useQuery } from "react-query";
import { getLeagues } from "../utils/apicall";
import { Box, Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from "@mui/material";
import { League } from "../models/League"; // Make sure to import the League type
import moment from "moment";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export function Home() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const { data: leagues, isLoading } = useQuery<League[]>({
    queryFn: () => getLeagues(),
  });

  if (isLoading || !leagues) {
    return (
      <Box>
        <Typography variant="h2">Please, wait 1 minute for the API to start!</Typography>
        <CircularProgress></CircularProgress>
      </Box>
    );
  }

  console.log(leagues);

  return (
    <Box sx={{ backgroundColor: "#181a20" }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ maxWidth: "100%" }}
            src="https://image.api.playstation.com/vulcan/img/rnd/202011/0203/ej3083aB8yMTgCh8uyAD9ezc.png"
          />
        </Box>
        <Grid container spacing={2}>
          {leagues.map((data, id) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card
                onMouseEnter={() => setExpandedCard(id)}
                onMouseLeave={() => setExpandedCard(null)}
                style={{
                  maxHeight: expandedCard === id ? "none" : "445px", // Adjust the initial height
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                  border: "4px solid #4b8ba9",
                  marginBottom: "2rem",
                }}
              >
                <NavLink target="_blank" to={data.linkTrailer}>
                  <CardMedia component={"img"} sx={{ height: 250 }} image={data.leagueImg} title={data.name} />
                </NavLink>
                <CardContent sx={{ backgroundColor: "#2b3341" }}>
                  <NavLink
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/league/${encodeURIComponent(data.name)}`}
                  >
                    <Grid container>
                      <Grid item md={6}>
                        <Typography variant="body1" color="white">
                          {moment(data.releaseDate).format("MMMM, D ,YYYY")}
                        </Typography>
                      </Grid>
                      <Grid item sx={{ textAlign: "right" }} md={6}>
                        <Typography variant="body1" color="white">
                          {moment(data.endDate).format("MMMM, D ,YYYY")}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography my={2} color="white" textAlign={"center"} variant="h4">
                      {data.name}
                    </Typography>
                    <Typography color="white" variant="body1">
                      {data.description}
                    </Typography>
                  </NavLink>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
