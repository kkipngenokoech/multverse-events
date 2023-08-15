import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SessionAccordion from "./accordion";

export default function SpeakerCard({ profile }) {
  const { id, first, last, company, favorite, twitterHandle, sessions, bio } =
    profile;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={`/images/speaker-${id}.webp`}
        title={`${first} ${last}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {first} {last}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
      <CardContent>
        <SessionAccordion sessions={sessions} />
      </CardContent>
      <CardActions>
        <Button size="small">{twitterHandle}</Button>
        <Button size="small">{company}</Button>
      </CardActions>
    </Card>
  );
}
