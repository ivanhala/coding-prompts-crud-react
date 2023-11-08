import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    Drawer,
    Button,
    Typography,
    TextField,
    Grid,
    Stack,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'date', headerName: 'Date', width: 110 },
    { field: 'time', headerName: 'Time', width: 110 },
];


const initialRows = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        date: '2023-10-01',
        time: '12:00',
    },
    // Add more initial data as needed
];


function UserManagement() {
    const [rows, setRows] = useState(initialRows);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);


    const handleRowSelected = (selection) => {
        const selectedID = selection[0];
        const user = rows.find((row) => row.id === selectedID);
        setSelectedUser(user || null);
    };


    const handleAddUser = () => {
        setSelectedUser(null);
        setOpenDrawer(true);
    };


    const handleEditUser = () => {
        if (selectedUser) {
            setOpenDrawer(true);
        }
    };


    const handleDeleteUser = () => {
        if (selectedUser) {
            setRows(rows.filter((row) => row.id !== selectedUser.id));
            setSelectedUser(null);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newUser = {
            id: selectedUser ? selectedUser.id : rows.length + 1,
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            date: formData.get('date'),
            time: formData.get('time'),
        };


        if (selectedUser) {
            setRows(
                rows.map((row) => (row.id === selectedUser.id ? newUser : row))
            );
        } else {
            setRows([...rows, newUser]);
        }


        setOpenDrawer(false);
    };


    return (
        <div style={{ height: 400, width: '100%' }}>
            <Stack direction="row" spacing={2} mb={2}>
                <Button
                    variant="contained"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={handleAddUser}
                >
                    Add User
                </Button>
                <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={handleEditUser}
                    disabled={!selectedUser}
                >
                    Edit User
                </Button>
                <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={handleDeleteUser}
                    color="error"
                    disabled={!selectedUser}
                >
                    Delete User
                </Button>
            </Stack>


            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                onSelectionModelChange={handleRowSelected}
                selectionModel={selectedUser ? [selectedUser.id] : []}
                checkboxSelection
            />


            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Typography variant="h6" style={{ padding: 16 }}>
                    {selectedUser ? 'Edit User' : 'Add User'}
                </Typography>


                <form style={{ padding: 16 }} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Name"
                                name="name"
                                defaultValue={selectedUser?.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Email"
                                name="email"
                                defaultValue={selectedUser?.email}
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Phone"
                                name="phone"
                                defaultValue={selectedUser?.phone}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Date"
                                name="date"
                                defaultValue={selectedUser?.date}
                                type="date"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                label="Time"
                                name="time"
                                defaultValue={selectedUser?.time}
                                type="time"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" fullWidth>
                                {selectedUser ? 'Update User' : 'Add User'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Drawer>
        </div>
    );
}


export default UserManagement;