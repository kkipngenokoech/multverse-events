import { Box } from "@mui/system";
import ButtonAppBar from "../src/header/header";
import Speakers from "../src/speaker/speakerlist";
import logoImage from "../public/images/multiverseevents-logo.png"

export default function Index() {
  return (
    <Box>
      <ButtonAppBar logo={logoImage}/>
      <Box sx={{paddingTop: "75px"}}>
      <Speakers />
      </Box>
    </Box>
  );
}
