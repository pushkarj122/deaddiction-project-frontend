import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, IconButton } from "@mui/material";
import { Close as CloseIcon } from '@mui/icons-material';

const initialEvents = [
  { id: 1, eventTitle: "Music Concert", eventDate: "2024-12-15", eventDescription: "An exciting music concert with live performances." },
  { id: 2, eventTitle: "Art Exhibition", eventDate: "2024-12-20", eventDescription: "A beautiful exhibition showcasing modern art." },
  { id: 3, eventTitle: "Tech Conference", eventDate: "2024-12-22", eventDescription: "A conference on the latest trends in technology." },
];

const EventRecordPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState(initialEvents);

  const handleDetailClick = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  const handleDelete = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 600, color: "#3f51b5" }}>
        Event Record
      </Typography>

      <Box display="flex" justifyContent="space-between" marginBottom="20px">
        <Button variant="contained" color="primary" style={{ marginLeft: "10px", padding: "8px 20px" }}>
          Add New Event
        </Button>
        <Button variant="contained" color="primary" style={{ marginRight: "10px", padding: "8px 20px" }}>
          Go to Profile
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={6} style={{ borderRadius: "8px", marginTop: "20px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
        <Table>
          <TableHead style={{ backgroundColor: "#3f51b5", color: "white" }}>
            <TableRow>
              <TableCell style={{ fontWeight: 600, fontSize: "1rem", color: "white" }}>Event Title</TableCell>
              <TableCell style={{ fontWeight: 600, fontSize: "1rem", color: "white" }}>Event Date</TableCell>
              <TableCell style={{ fontWeight: 600, fontSize: "1rem", color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id} style={{ cursor: "pointer", '&:hover': { backgroundColor: "#f1f1f1" } }}>
                <TableCell style={{ fontSize: "1rem", padding: "16px" }}>{event.eventTitle}</TableCell>
                <TableCell style={{ fontSize: "1rem", padding: "16px" }}>{event.eventDate}</TableCell>
                <TableCell style={{ padding: "16px", display: "flex", gap: "10px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ padding: "8px 20px" }}
                    onClick={() => handleDetailClick(event)}
                  >
                    Detail
                  </Button>
                  <Button
                    variant="outlined"
                    style={{ color: "#9c27b0", borderColor: "#9c27b0", fontWeight: 600, padding: "8px 20px" }}
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" style={{ fontWeight: 600, color: "#3f51b5" }}>Event Details</Typography>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" style={{ padding: "10px 0", lineHeight: 1.6 }}>
            {selectedEvent?.eventDescription}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained" style={{ backgroundColor: "#3f51b5" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventRecordPage;
