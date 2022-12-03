import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import users from '../../pages/api/users.json'
import Link from 'next/link';


export async function getServerSideProps(ctx) {
    const { userID } = ctx.query;
    await dbConnect()
    const user = await User.findOne({userID}).lean() 
    if (user !== null) {
      user._id = user._id.toString()
    }
    return { props: { user } }
  }

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>

        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}


export const Tab1 = ({ datas }) => {
    return (
        <div style={{'display':'grid','gridTemplateColumns':'repeat(3, minmax(0, 1fr))'}}>
            {datas.map(data =>
                <Link href={'../../Chefs/' + data.firstName + dataef.lastName}  key={data._id}>
                    <ActionAreaCard name={data.firstName + " " + data.lastName}/>
                </Link>
        )}
        </div>
    )
}