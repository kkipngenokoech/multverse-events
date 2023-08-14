import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function SessionAccordion({ sessions }) {
  const [expanded, setExpanded] = useState(false);
  const { title, eventYear, room } = sessions[0];
  console.log(title);
  console.log(sessions[0]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {eventYear}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>{room.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{title}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
