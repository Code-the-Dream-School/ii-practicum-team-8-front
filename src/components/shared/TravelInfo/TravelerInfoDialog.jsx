import { useState, useEffect } from 'react';
import NumberInput from './NumberInput';
import KidsAgeFields from './KidsAgeFields';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const TravelerInfoDialog = ({ setTravelerInfo, travelerInfo }) => {
  const [open, setOpen] = useState(false);

  const [adults, setAdults] = useState(travelerInfo.adults);
  const [kids, setKids] = useState(travelerInfo.kids);
  const [kidsAge, setKidsAge] = useState(travelerInfo.kidsAge);
  const [rooms, setRooms] = useState(travelerInfo.rooms);

  useEffect(() => {
    if (open) {
      setAdults(travelerInfo.adults);
      setKids(travelerInfo.kids);
      setKidsAge(travelerInfo.kidsAge);
      setRooms(travelerInfo.rooms);
    }
  }, [open, travelerInfo]);

  useEffect(() => {
    if (kids < kidsAge.length) {
      const newKidsArray = kidsAge.slice(0, kids);
      setKidsAge(newKidsArray);
    }
    if (kids > kidsAge.length) {
      const zeros = Array(kids - kidsAge.length).fill(0);
      setKidsAge([...kidsAge, ...zeros]);
    }
    if (kids === 0) {
      setKidsAge([]);
    }
  }, [kids]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDone = () => {
    const info = {
      adults,
      kids,
      rooms,
      kidsAge,
    };
    setTravelerInfo(info);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <PersonAddAlt1Icon sx={{ color: 'primary.main' }} />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="dialog-traveler-info" sx={{ color: 'primary.main' }}>
          Traveler info
        </DialogTitle>

        <DialogContent>
          <NumberInput
            label="Adults:"
            value={adults}
            minValue={1}
            onChange={setAdults}
          />
          <NumberInput
            label="Kids:"
            value={kids}
            minValue={0}
            onChange={setKids}
          />
          {kids > 0 && (
            <KidsAgeFields
              kids={kids}
              kidsAge={kidsAge}
              setKidsAge={setKidsAge}
            />
          )}
          <NumberInput
            label="Rooms:"
            value={rooms}
            minValue={1}
            onChange={setRooms}
          />
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>

          <Button variant="contained" onClick={handleDone} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TravelerInfoDialog;
