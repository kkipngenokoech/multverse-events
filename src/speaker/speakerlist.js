import { Grid } from "@mui/material";
import { SpeakerData } from "../../speakerdata";
import SpeakerCard from "./speaker";

export default function Speakers() {
  return (
    <Grid container spacing={2}>
      {SpeakerData ? (
        SpeakerData.map((profile) => {
          return (
            <Grid
              key={profile.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mx-auto"
            >
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
