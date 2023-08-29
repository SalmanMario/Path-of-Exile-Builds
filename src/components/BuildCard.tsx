import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { BuildCardProps } from "../models/Build";
import { NavLink } from "react-router-dom";

export function BuildCard({ data, color }: BuildCardProps) {
  return (
    <Box>
      <Card
        sx={{
          width: 350,
          minHeight: 950,
          mb: 4,
          bgcolor: color || "#3c2044",
        }}
      >
        <CardMedia component="img" height="100%" image={data.cardImage} alt={data.ascendancy} />
        <CardContent>
          <Typography color="white" variant="h5">
            {data.buildName}
          </Typography>
          <Typography sx={{ my: 1 }} color="white" variant="body1">
            {data.ascendancy}
          </Typography>
          <Typography sx={{ my: 1 }} color="white" variant="body1">
            {data.patchName}
          </Typography>
          <Typography sx={{ my: 1 }} variant="body1" color="white">
            {data.bossDamage}
          </Typography>
          <Typography sx={{ my: 1 }} variant="body1" color="white">
            {data.clearSpeed}
          </Typography>
          <Typography sx={{ my: 1 }} variant="body1" color="white">
            {data.survability}
          </Typography>
          <Typography sx={{ my: 1 }} variant="body1" color="white">
            {data.leagueMechanic}
          </Typography>
          <Typography sx={{ my: 1 }} variant="body1" color="white">
            {data.pro}
          </Typography>
          <Typography sx={{ my: 1 }} variant="body1" color="white">
            {data.cons}
          </Typography>
          <Box>
            <Typography variant="body1" color="white">
              Mandatory Uniques:
            </Typography>
            {data &&
              data.items &&
              data.items.map((item, itemId) => (
                <Box key={itemId + 1} sx={{ display: "inline-block", mx: 0.2 }}>
                  <NavLink style={{ textDecoration: "none", color: "#EB5418" }} target="_blank" to={item.linkUnique}>
                    {item.nameUnique},
                  </NavLink>
                </Box>
              ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ my: 1 }} variant="body1" color="white">
              {data.investment}
            </Typography>
            <img style={{ marginLeft: "0.5rem" }} className="currencyPng" src={data.exaltedPng} alt="" />
          </Box>
          <Typography sx={{ my: 1 }} color="white" variant="body1">
            {data.content}
          </Typography>
          <NavLink to={data.youtubeLink} style={{ color: "#EB5418", textDecoration: "none" }}>
            Youtube Gameplay
          </NavLink>
        </CardContent>
      </Card>
    </Box>
  );
}
