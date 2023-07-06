import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import css from '../course/Course.module.css';
import { Box, Container, Paper } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppSlider } from './AppSlider';
import Slider from 'react-slick';
import TelegramIcon from '@mui/icons-material/Telegram';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const cards = [
    {
      id:'1',
      image: 'images/course1.png',
      price: '$199',
      category: 'Research & Development',
      logo: 'images/logo.png',
      instructor: 'Michel John',
      courseTime: '5 Weeks',
      maximumStudents: '50',
      enrolled: '30',
      comments: 0,
      likes: 100,
    },
    {
        id:'2',
        image: 'images/course1.png',
        price: '$199',
        category: 'Research & Development',
        logo: 'images/logo.png',
        instructor: 'Michel John',
        courseTime: '5 Weeks',
        maximumStudents: '50',
        enrolled: '30',
        comments: 0,
        likes: 100,
    },
    {
        id:'3',
        image: 'images/course1.png',
        price: '$199',
        category: 'Research & Development',
        logo: 'images/logo.png',
        instructor: 'Michel John',
        courseTime: '5 Weeks',
        maximumStudents: '50',
        enrolled: '30',
        comments: 0,
        likes: 100,
    },
    {
      id:'4',
      image: 'images/course1.png',
      price: '$199',
      category: 'Research & Development',
      logo: 'images/logo.png',
      instructor: 'Michel John',
      courseTime: '5 Weeks',
      maximumStudents: '50',
      enrolled: '30',
      comments: 0,
      likes: 100,
  },
  {
      id:'5',
      image: 'images/course1.png',
      price: '$199',
      category: 'Research & Development',
      logo: 'images/logo.png',
      instructor: 'Michel John',
      courseTime: '5 Weeks',
      maximumStudents: '50',
      enrolled: '30',
      comments: 0,
      likes: 100,
  },
    
  ];


export const CardComponent = ({ card }) => {
  return (
    
    <Card
      mt={10}
      className={css.card}
      sx={{
        maxHeight: 560,
        maxWidth: 300,
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.05)',
        position: 'relative'
        
      }}
    >
      <CardMedia sx={{ height: 180 }} image={card.image} title="green iguana" >
      <CardContent className={css.overlay}>
          <CardContent className={css.content}>
            <TelegramIcon className={css.telegram}></TelegramIcon>
            <FavoriteBorderOutlinedIcon className={css.heart}></FavoriteBorderOutlinedIcon>
          </CardContent>
      </CardContent>
      </CardMedia>
      <CardContent>
          <Typography  sx={{width:"100%",height:'30%'}} className={css.price}><span style={{marginLeft:'-118px'}}>Price:$199</span></Typography>
          <Typography 
          sx={{ fontFamily: "sans-serif",
          fontWeight: 600,
          fontSize: '0.9rem',
          marginTop:'-20px',
         textTransform: 'uppercase',}} >
         {card.category}
        </Typography>
        <Box component='div' style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <Typography>
         <img className={css.logo} src="images/logo.png" alt="" />
          </Typography>
          <Typography>
         <span className={css.name}> {card.instructor}</span>
          </Typography>
        </Box>
        <Box mt={2} sx={{display:'flex'}}>
         <Typography variant='subtitle2'sx={{fontSize:'10px',lineHeight:'18px',color:'grey'}}>Course Time <br />{card.courseTime}</Typography>
         <Typography sx={{fontSize:'10px',lineHeight:'18px',color:'grey',marginLeft:'30px'}}>Maximum Students <br />{card.maximumStudents}</Typography>
         <Typography sx={{fontSize:'10px',lineHeight:'18px',color:'grey',marginLeft:'30px'}}>Enrolled <br />{card.enrolled}</Typography>
        </Box><br />
        <hr style={{marginTop:'-15px'}}/>
      <CardActions >
      <ChatBubbleOutlineOutlinedIcon style={{fontSize: "medium"}} /><span style={{fontSize: "small",marginLeft:'2px'}}>0</span>
      <FavoriteBorderRoundedIcon style={{marginLeft:'180px',fontSize: "medium"}}  /> <span style={{fontSize: "small",marginLeft:'2px'}}>100</span>
      </CardActions>
      <Typography className={css.footer}>
          <Typography className={css.main}>
              <h3 className={css.view}>View Details</h3>
          </Typography>
        </Typography>
      </CardContent>
    
    </Card>
  );
};

  const Course1 = () => {
    const [cardIndex, setCardIndex] = useState();
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      beforeChange: (current, next) => setCardIndex(next),
    };
  
    const handlePrevClick = () => {
      sliderRef.slickPrev();

    };
  
    const handleNextClick = () => {
      sliderRef.slickNext();
    };
    let sliderRef;

    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '15px', marginTop: '5%' }}>
          <ChevronLeftIcon onClick={handlePrevClick} style={{ border: '1px solid black', marginRight: '15px' }} />
          <ChevronRightIcon onClick={handleNextClick} style={{ border: '1px solid black' }} />
        </div>
        <div style={{ marginTop: '5%' }}></div>
        <Container sx={{paddingBottom:'0px'}}>
            <Slider {...settings} ref={(c) => (sliderRef = c)} sx={{justifyContent:'space-between'}}>
            {cards.map((card, index) => (
              <CardComponent key={index} card={card} />
              ))}
          </Slider>
        </Container>
      </>
    );

  };
  export default Course1
  
