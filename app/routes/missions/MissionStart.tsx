import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography, Alert } from '@mui/material';
import { useNavigate, useParams } from 'react-router';

const CreateMissionForm = () => {
    const { userId } = useParams(); // Assuming `userId` comes from the URL
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        recurrence: '',
        category: '',
        timeLimit: ''
    });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`/users/${userId}/mission`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess(`Mission created successfully with ID: ${data.missionId}`);
                setFormData({ recurrence: '', category: '', timeLimit: '' });
            } else if (response.status === 404) {
                const data = await response.json();
                setError(data.message || 'User not found');
            } else {
                setError('An unexpected error occurred');
            }
        } catch (err) {
            setError('Failed to connect to the server');
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Create Mission
            </Typography>

            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    select
                    name="recurrence"
                    label="Recurrence"
                    value={formData.recurrence}
                    onChange={handleChange}
                    margin="normal"
                    required
                >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                </TextField>

                <TextField
                    fullWidth
                    name="category"
                    label="Category"
                    value={formData.category}
                    onChange={handleChange}
                    margin="normal"
                    placeholder="Optional"
                />

                <TextField
                    fullWidth
                    name="timeLimit"
                    label="Time Limit (minutes)"
                    type="number"
                    value={formData.timeLimit}
                    onChange={handleChange}
                    margin="normal"
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2 }}
                >
                    Create Mission
                </Button>
            </form>

            <Button
                variant="text"
                color="secondary"
                onClick={() => navigate(-1)}
                sx={{ marginTop: 2 }}
            >
                Back
            </Button>
        </Box>
    );
};

export default CreateMissionForm;