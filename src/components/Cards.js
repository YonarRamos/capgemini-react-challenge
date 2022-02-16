import * as React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

export default function MediaCard() {
  const state = useSelector((state) => state);
  console.log(state.length);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {state.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345, height: 360 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.thumbnail}
                alt={item.thumbnail}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <div>
                  <strong>Hair:</strong> {item.hair_color}
                </div>
                <div>
                  <strong>Friends:</strong>
                  {item.friends.map((friend) => (
                    <Chip
                      key={friend}
                      label={friend}
                      size="small"
                      sx={{ m: 0.2 }}
                    />
                  ))}                 
                </div>
                <div>
                  <strong>Professions:</strong>
                  {item.professions.map((profesion) => (
                    <Chip
                      key={profesion}
                      label={profesion}
                      size="small"
                      sx={{ m: 0.3 }}
                    />
                  ))}                  
                </div>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
