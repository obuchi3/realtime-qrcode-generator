import React from 'react';
import './App.css';
import {
  TextField,
  MenuItem,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

const App: React.FC = () => {
  const levels = ['L', 'M', 'Q', 'H'];

  const [text, setText] = React.useState('QRコードテキスト');
  const [size, setSize] = React.useState(300);
  const [level, setLevel] = React.useState('L');

  return (
    <div className={'App'}>
      <AppBar position={'static'} color={'default'} className={'app-bar'}>
        <Toolbar>
          <Typography variant={'h6'} color={'inherit'}>
            Realtime QR Code Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        variant={'outlined'}
        label={'テキスト'}
        value={text}
        multiline={true}
        rows={4}
        rowsMax={4}
        onChange={e => setText(e.target.value)}
        className={'text-field'}
        fullWidth={true}
      />
      <TextField
        variant={'outlined'}
        type={'number'}
        label={'サイズ'}
        value={size}
        onChange={e => setSize(Number.parseInt(e.target.value))}
        className={'text-field'}
        fullWidth={true}
      />
      <TextField
        variant={'outlined'}
        select={true}
        label="誤り訂正レベル"
        value={level}
        onChange={e => setLevel(e.target.value)}
        className={'text-field'}
        fullWidth={true}
      >
        {levels.map(level => (
          <MenuItem key={level} value={level}>
            {level}
          </MenuItem>
        ))}
      </TextField>
      <div className="qr-code">
        <img
          src={`https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${text}&chld=${level}&choe=UTF-8`}
          alt={'QRコード'}
        />
      </div>
    </div>
  );
};

export default App;
