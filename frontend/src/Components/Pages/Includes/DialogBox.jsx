import React from 'react'
import { Dialog, DialogContent, DialogActions, Button, Slider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import dayjs from 'dayjs'

export const DialogBox = ({ open, handleClose, setValue, handleSubmit, newVal, label, type, restroData }) => {
  return (
    <Dialog open={open} maxWidth='xs' fullWidth={true} onSubmit={handleSubmit} onClose={handleClose}>
      <DialogContent className='px-5'>
        {
          type === 'minTime' &&
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticTimePicker onChange={(newValue) => setValue(newValue)} slotProps={{
              actionBar: {
                actions: []
              }
            }}
              defaultValue={dayjs(restroData.minTime)} />
          </LocalizationProvider>
        }
        {
          type === 'maxTime' && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticTimePicker onChange={(newValue) => setValue(newValue)} slotProps={{
                actionBar: {
                  actions: []
                }
              }}
                defaultValue={dayjs(restroData.maxTime)} />
            </LocalizationProvider>
          )
        }
        {
          type === 'maxGuests' && (
            <Slider
              className='mt-4'
              aria-label="Temperature"
              defaultValue={restroData.maxGuests}
              valueLabelDisplay="on"
              step={1}
              marks
              min={1}
              max={10}
              onChange={(newValue) => setValue(newValue.target.value)}
            />
          )
        }
        {
          type === 'liveCharge' && (
            <Slider
              className='mt-4'
              aria-label="Temperature"
              defaultValue={restroData.liveBookingCharge}
              valueLabelDisplay="on"
              step={100}
              min={100}
              max={5000}
              onChange={(newValue) => setValue(newValue.target.value)}
            />
          )
        }
        {
          type === 'reservationCharge' && (
            <Slider
              className='mt-4'
              defaultValue={restroData.reservationCharge}
              valueLabelDisplay="on"
              step={100}
              min={100}
              max={5000}
              onChange={(newValue) => setValue(newValue.target.value)}
            />
          )
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}
