import React from 'react';
import { Card, List, ListItem } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';
import {books} from './books';

function Time(prop:any){
    return <List>
    <ListItem disablePadding>
        <AccessTime fontSize='small'/>&nbsp;
        <Typography variant='body2' style={{fontSize:'16px'}}>{books[prop.index].duration}-minute read</Typography>
    </ListItem>
    </List>
}
export default function BookCard(props:any) {
    return (
      <Card style={{ width:'284px',top:"450px",background:' #FFFFFF',
      border: '1px solid #E1ECFC',
      boxSizing: 'border-box',
      borderRadius: '8px',
      }}>
        <CardMedia
          component="img"
          height="294px"
          width='284px'
          image={books[props.index].image} 
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant='body1' style={{fontWeight:'bold',fontSize:'17px'}}>
            {books[props.index].title}
          </Typography>
          <Typography gutterBottom variant="body2" style={{color:'grey',fontSize:'16px'}}>
            {books[props.index].author}
          </Typography>
          <Time index={props.index}></Time>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{
            books[props.index].isFinished=true;
          }}>Finish Reading</Button>
        </CardActions>
      </Card>
    );
  }