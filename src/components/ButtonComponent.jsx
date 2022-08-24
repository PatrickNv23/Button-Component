import React from 'react'
import Button from '@mui/material/Button';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Grid from '@mui/material/Grid';
function ButtonComponent(props) {
  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <p style={{ fontFamily: "Ubuntu Mono" }}>{props.details}</p>
        <Button variant={props.variant} size={props.size ? props.size : "large"} style={{ fontFamily: "Noto Sans", background: `${props.background}`, color: `${props.color}`, textTransform: "none" }} disabled={props.disabled ? true : false} startIcon={props.isStartIcon ? <LocalGroceryStoreIcon /> : ""} endIcon={props.isEndIcon ? <LocalGroceryStoreIcon /> : ""} onClick={() => setDisabledButton()}>{props.textContent ? props.textContent : "Default"}</Button>
      </Grid>
    </>
  )
}

export default ButtonComponent