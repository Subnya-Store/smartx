import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../littleComponent/Typography';

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
      className='border-texting'
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography className="text-texting" variant="h4" component="span">
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography className="text-texting" variant="subtitle1" sx={{ my: 3 }}>
        We are here to help. Get in touch!
      </Typography>
      <Box
        component="img"
        src="images/producBuoy.svg"
        alt="buoy"
        
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;