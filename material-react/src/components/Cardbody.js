import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import data from './db.json';
import Grid from '@mui/system/Unstable_Grid';
// import logo from '../img/kahun2.jpeg';

const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const CardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const CountStyle = {
  textAlign: 'left', // テキストを左寄せにするスタイル
};

const Count = data.length; // データの長さをカウント

function formatDateFromTimestamp(timestamp) {
  var date = new Date(timestamp);
  var month = date.getMonth() + 1; // 月は0から始まるため+1する
  var day = date.getDate();
  return month + "月" + day + "日";
}

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  return (
    <>
      <Grid style={CountStyle}>
        表示件数　{Count }件
      </Grid>

      <CardContainer >
          {data.map((item, index) => (
            <Card sx={{ maxWidth: 360 }} key={index}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {item.level}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.title}
                subheader={formatDateFromTimestamp(item.time)}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.img}// 画像のパスを指定
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.text1}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    {item.text2}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </CardContainer>
      </>
  );

}
