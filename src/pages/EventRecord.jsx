import React, { useState, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Modal,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; 

const events = [
  {
    id: 1,
    eventName: "Music Concert",
    name: "John Doe",
    description: "Live music performances at the city hall.",
  },
  {
    id: 2,
    eventName: "Tech Conference",
    name: "Jane Smith",
    description: "Discussing innovations in technology.",
  },
  {
    id: 3,
    eventName: "Art Exhibition",
    name: "Alice Brown",
    description: "Exhibit of contemporary art by local artists.",
  },
];

const EventRecord = () => {
  const navigate = useNavigate(); 
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventsList, setEventsList] = useState(events);

  const handleDetailClick = useCallback((event) => {
    setSelectedEvent(event);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedEvent(null);
  }, []);

  const handleDelete = useCallback(
    (id) => {
      const updatedEvents = eventsList.filter((event) => event.id !== id);
      setEventsList(updatedEvents);
    },
    [eventsList]
  );

  const handleAddNewEvent = () => {
    navigate("/create-event"); 
  };

  const handleGoToProfile = () => {
    navigate("/profilepage"); 
  };

  return (
    <Box sx={{ p: 4, bgcolor: "background.default", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 3,
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        Event Record
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddNewEvent}
        >
          Add New Event
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoToProfile} 
        >
          Go to Profile Page
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              {["Event Title", "Name", "Action"].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {eventsList.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  bgcolor: "#f9f9f9",
                  "&:hover": { bgcolor: "#f1f5fb" },
                }}
              >
                <TableCell>{row.eventName}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={() => handleDetailClick(row)}
                  >
                    Detail
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mr: 1 }}
                    onClick={() => handleDelete(row.id)}
                    startIcon={<Delete />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedEvent && (
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: 600,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 4,
              p: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
                textAlign: "center",
                color: "primary.main",
              }}
            >
              Event Details
            </Typography>
            <Box
              sx={{
                bgcolor: "#f4f6f8",
                p: 2,
                borderRadius: 1,
                mb: 2,
              }}
            >
              <Typography sx={{ mb: 1 }}>
                <strong>Description:</strong> {selectedEvent.description}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default EventRecord;
