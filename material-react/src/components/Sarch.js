import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Grid,Box,Typography,Button,Stack} from '@mui/material';


export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const centerStyle = {
    display: 'grid',
    placeItems: 'center',
  };

  return (
    <div>
        <Grid style={centerStyle}>

            <Box 
                // border={1}
                sx={{
                width: 900,
                height: 250,
                m:1,
                backgroundColor: '#ffeb3b',
                // '&:hover': {
                
                // // opacity: [0.9, 0.8, 0.7],
                // },
            }}>
            <Typography 
            sx={{
                m:1,
            }}
            >
            地域
            </Typography>
            <Box>
                <FormControl 
                sx={{ backgroundColor: '#ffffff',
                    width:200,
                    }}
                >
                    <InputLabel id="demo-simple-select-label">Pref</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>北海道</MenuItem>
                        <MenuItem value={20}>青森</MenuItem>
                        <MenuItem value={30}>岩手</MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl fullWidth
                    sx={{ backgroundColor: '#ffffff',
                    width:200,
                    }}
                    >
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>札幌</MenuItem>
                        <MenuItem value={20}>函館</MenuItem>
                        <MenuItem value={30}>釧路</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
                <Box>
                    アレルゲン
                </Box>
                <Box >
                <FormControl 
                sx={{ backgroundColor: '#ffffff',
                    width:200,
                    }}
                >
                    <InputLabel id="demo-simple-select-label">first</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={7}>スギ</MenuItem>
                        <MenuItem value={8}>ヒノキ</MenuItem>
                        <MenuItem value={9}>ブタクサ</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
                <Box style={centerStyle}>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">条件検索</Button>
                    </Stack>
                </Box>
        </Box>
      </Grid>
    </div>
  );
}