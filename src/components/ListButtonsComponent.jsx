import { Container } from '@mui/system';
import React from 'react'
import ButtonComponent from './ButtonComponent';
import Grid from '@mui/material/Grid';
function ListButtonsComponent() {
    return (
        <Container maxWidth="lg">
            <h1 style={{ fontFamily: "Poppins", color: "#4F4F4F", textAlign: "center" }}>Buttons</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <ButtonComponent details="<Button />" variant="contained" background="#E0E0E0" color="#3F3F3F" />
                <ButtonComponent details='<Button variant="outline"/>' variant="outlined" />

                <ButtonComponent details='<Button variant="text"/>' variant="text" />

                <ButtonComponent details='<Button disableShadow />' variant="contained" />

                <ButtonComponent details='<Button disabled />' variant="contained" color="#9E9E9E" textContent="Disabled" disabled="true" />

                <ButtonComponent details='<Button variant="text" disabled />' textContent="Disabled" variant="text" disabled="true" />

                <ButtonComponent details='<Button startIcon="local_grocery_store" />' isStartIcon="true" variant="contained" />

                <ButtonComponent details='<Button endIcon="local_grocery_store" />' isEndIcon="LocalGroceryStoreIcon" variant="contained" />

                <ButtonComponent details='<Button size="sm"/>' variant="contained" size="small" />

                <ButtonComponent details='<Button size="md"/>' variant="contained" size="medium" />

                <ButtonComponent details='<Button size="lg"/>' variant="contained" />

                <ButtonComponent details='<Button color="default" />' variant="contained" background="#E0E0E0" color="#3F3F3F" />

                <ButtonComponent details='<Button color="primary" />' variant="contained" />

                <ButtonComponent details='<Button color="secondary" />' variant="contained" background="#455A64" color="#FFFFFF" textContent="Secondary" />

                <ButtonComponent details='<Button color="danger" />' background="#D32F2F" color="#FFFFFF" textContent="Danger" />

            </Grid>
        </Container>
    )
}

export default ListButtonsComponent