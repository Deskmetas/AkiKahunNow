import { AppBar, Toolbar, Typography} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import LongMenu from './Menu'
import React from 'react';
import './Header.css';
import logo from '../img/akikahun.png';


function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#9e9d24' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
            
            <Typography style ={{
                fontSize : '25px',
                justifyContent: 'space-between' ,
                fontWeight:'bold'
            }}>
                花粉情報をリアルタイムで共有
            </Typography>
            <CardMedia className="img"
                component="img"
                height="194"
                image={logo} // ここで1回だけ指定
                style={{ width: '15%' }}
            />
            <Typography style ={{
                fontSize : '25px',
                flex: 1,
                fontWeight:'bold'
            }}>
                スギ、ヒノキ以外のマイナーな花粉にも対応
            </Typography>
            <LongMenu />
            </Toolbar>
        </AppBar>
    )
}

export default Header;
