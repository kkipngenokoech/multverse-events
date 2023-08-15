import { Grid } from "@mui/material";
import { data } from "../speakerdata";
import SpeakerCard from "../src/speaker/speaker";

export default function Index() {
  return (
    <Grid container spacing={2}>
      {data ? (
        data.map((profile) => {
          return (
            <Grid key={profile.id} item xs={12} sm={6} md={4} lg={3}>
              <SpeakerCard profile={profile} />
            </Grid>
          );
        })
      ) : (
        <p>Data is empty</p>
      )}
    </Grid>
  );
}
