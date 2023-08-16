import { Box } from "@mui/system";
import ButtonAppBar from "../src/header/header";
import Speakers from "../src/speaker/speakerlist";

export default function Index() {
  return (
    <Box>
      <ButtonAppBar/>
      <Box sx={{paddingTop: "75px"}}>
      <Speakers />
      </Box>
    </Box>
  );
}
