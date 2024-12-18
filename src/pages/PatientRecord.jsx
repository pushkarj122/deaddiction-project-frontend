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

const randomData = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    age: 32,
    mobile: "1234567890",
    address: "123 Main St",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    age: 28,
    mobile: "9876543210",
    address: "456 Oak Ave",
  },
  {
    id: 3,
    name: "Robert Brown",
    gender: "Male",
    age: 45,
    mobile: "4567891230",
    address: "789 Pine Blvd",
  },
];

const treatmentDetails = [
  {
    admissionDate: "2023-12-01",
    problem: "Fractured Leg",
    treatmentSummary: "Surgery performed successfully.",
    progressSummary: "Healing as expected.",
    dischargeDate: "2023-12-10",
  },
  {
    admissionDate: "2023-11-15",
    problem: "High Fever",
    treatmentSummary: "Administered antibiotics.",
    progressSummary: "Fully recovered.",
    dischargeDate: "2023-11-20",
  },
  {
    admissionDate: "2023-10-01",
    problem: "Broken Arm",
    treatmentSummary: "Cast applied.",
    progressSummary: "Rehabilitation ongoing.",
    dischargeDate: "2023-10-15",
  },
];

const PatientRecord = () => {
  const [patients, setPatients] = useState(randomData);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleDetailClick = useCallback((index) => {
    setSelectedTreatment(treatmentDetails[index]);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedTreatment(null);
  }, []);

  const handleDelete = useCallback(
    (id) => {
      const updatedPatients = patients.filter((patient) => patient.id !== id);
      setPatients(updatedPatients);
    },
    [patients]
  );

  const handleDownloadPDF = () => {
    alert("Download PDF feature is not implemented yet.");
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
        Patient Record
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Button variant="contained" color="primary">
          Add New Data
        </Button>
        <Button variant="contained" color="primary">
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
              {["Name", "Gender", "Age", "Mobile No", "Address", "Action"].map(
                (header) => (
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
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  bgcolor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                  "&:hover": { bgcolor: "#f1f5fb" },
                }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={() => handleDetailClick(index)}
                    startIcon={<Edit />}
                  >
                    Detail
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
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

      {selectedTreatment && (
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
              Treatment Details
            </Typography>
            <Box
              sx={{
                bgcolor: "#f4f6f8",
                p: 2,
                borderRadius: 1,
                mb: 2,
              }}
            >
              {Object.entries(selectedTreatment).map(([key, value]) => (
                <Typography key={key} sx={{ mb: 1 }}>
                  <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}
                </Typography>
              ))}
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDownloadPDF}
                sx={{ mr: 2 }}
              >
                Download PDF
              </Button>
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

export default PatientRecord;
