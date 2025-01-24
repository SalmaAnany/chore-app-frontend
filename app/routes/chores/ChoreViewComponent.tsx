import Box from "@mui/material/Box";
import React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Star } from "@mui/icons-material";
import ChoreResponse from "~/data/ChoreResponse";

export default function ChoreViewComponent(props: { chore: ChoreResponse }) {
  return (
    <Box sx={{ mb: 1 }}>
      <Box component="span" style={{ fontSize: "2em" }}>
        Chore Details
      </Box>

      <Container maxWidth="sm">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="section">{props.chore?.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/*Description*/}
            <List>
              <ListItem>
                <ListItemText
                  primary={`Description`}
                  secondary={props.chore?.description}
                />
              </ListItem>
            </List>

            {/*Recurrence*/}
            <List>
              <ListItem>
                <ListItemText
                  primary={`Recurrence`}
                  secondary={props.chore?.recurrence}
                />
              </ListItem>
            </List>

            {/*category*/}
            <List>
              <ListItem>
                <ListItemText
                  primary={`Category`}
                  secondary={props.chore?.category}
                />
              </ListItem>
            </List>

            {/*duration*/}
            <List>
              <ListItem>
                <ListItemText
                  primary={`Duration`}
                  secondary={props.chore?.duration}
                />
              </ListItem>
            </List>

            {/*Difficulty*/}
            <List>
              <ListItem>
                <ListItemText
                  primary={`Difficulty`}
                  secondary={
                    <Rating
                      name="hover-feedback"
                      value={props.chore?.difficulty}
                      precision={0.5}
                      readOnly
                      emptyIcon={
                        <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                      }
                    />
                  }
                />
              </ListItem>
            </List>
          </AccordionDetails>
          <AccordionActions>
            <ButtonGroup>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonGroup>
          </AccordionActions>
        </Accordion>
      </Container>
    </Box>
  );
}
