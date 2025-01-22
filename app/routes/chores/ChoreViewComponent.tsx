import Box from "@mui/material/Box";
import React from "react";
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    ButtonGroup,
    Grid2,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChoreResponse from "~/data/ChoreResponse";

export default function ChoreViewComponent(props: { chore: ChoreResponse }) {
    return (<Box sx={{mb: 2}}>
                    <div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography component="section">{props.chore?.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>description:{props.chore?.description}</div>
                                <div>recurrence:{props.chore?.recurrence}</div>
                                <div>category:{props.chore?.category}</div>
                                <div>duration: {props.chore?.duration}</div>
                                <div>difficulty: {props.chore?.difficulty}</div>
                            </AccordionDetails>
                            <AccordionActions>
                                <ButtonGroup>
                                    <Button>View</Button>
                                    <Button>Edit</Button>
                                    <Button>Delete</Button>
                                </ButtonGroup>
                            </AccordionActions>

                        </Accordion>
                    </div>
        </Box>);
}
