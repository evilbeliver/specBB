import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
  Box,
} from '@mui/material';
import { LocationOn, Terrain, Nature } from '@mui/icons-material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Property {
  id: number;
  name: string;
  location: string;
  acreage: number;
  description: string;
  features: string[];
  image: string;
  fullDescription: string;
  mapLink?: string;
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Long Cane Property',
    location: 'Edgefield County',
    acreage: 675,
    description: 'Our Edgefield Tract,is roughly 675 acres with a mix of hardwoods, pine stands, clear cuts and creek bottoms.',
    features: ['Deer', 'Turkey', 'Rabbits', 'Quail','Food Plots', 'Clear Cuts'],
    image: '/images/long-cane-deer.jpeg',
    fullDescription:
      'Our Long Cane Tract, aka Edgefield Tract, is located off of Long Cane Rd (State HWy S-19-21) in Edgefield County. The main check in and parking areas are located across the street from a white house. This roughly 675 acre property has 30+ permanant stand locations with a mix of hardwoods, pine stands, and creek bottoms. We have multiple food plots throughout the property to help attract and retain the deer and turkey. We are also starting to see a comeback of wild quail as well. Camping is allowed on this property (campers, tents), but there are no hookups.',
    mapLink: 'https://www.google.com/maps/place/33%C2%B055\'08.2%22N+81%C2%B055\'37.0%22W/@33.9147641,-81.9319122,2370m/data=!3m1!1e3!4m4!3m3!8m2!3d33.918944!4d-81.926944?entry=tts&shorturl=1',
  },
  {
    id: 2,
    name: 'Chappells Ferry Property',
    location: 'Eastern Region',
    acreage: 766,
    description: 'Our Chappells Ferry Tract is located off of Old Chappells Ferry Rd, and Pinckney Road. The main check in and parking area is located off of Pinckney Rd. This roughly 766 acre property has 30+ stands and is broken up into 4 differnet areas.',
    features: ['Deer', 'Turkey', 'Rabbits', 'Quail', 'Food Plots', 'Creek Bottoms'],
    image: 'https://placehold.co/600x400/2c5f2d/ffffff?text=Creek+Bottom+Property',
    fullDescription:
      'Our Chappells Ferry Tract is located off of Old Chappells Ferry Rd, and Pinckney Road. The main check in and parking area is located off of Pinckney Rd. This roughly 766 acre property has 30+ stands and is broken up into 4 differnet areas with roughly 250 acres being off of Country Pond Rd. This property has some of the larger foodplots on the property as you can see in the picture with a few smaller ones as well. This property has great deer, turky and some wild pig opportunities as well. We are seeing more quail also show up on this property as well.',
  },
  {
    id: 3,
    name: 'Pine Hill Property',
    location: 'Southern Region',
    acreage: 425,
    description: 'Mixed pine and hardwood with established food plots and trails.',
    features: ['Deer', 'Small Game', 'Food Plots', 'ATV Trails'],
    image: 'https://placehold.co/600x400/2c5f2d/ffffff?text=Pine+Hill+Property',
    fullDescription:
      'Pine Hill encompasses 425 acres of mixed pine and hardwood forest. Well-maintained ATV trails provide easy access to all corners of the property. Multiple food plots are planted annually to support a healthy deer population and provide excellent hunting opportunities.',
  },
  {
    id: 4,
    name: 'Big Woods Property',
    location: 'Western Region',
    acreage: 600,
    description: 'Expansive mature forest with minimal hunting pressure.',
    features: ['Deer', 'Turkey', 'Bear', 'Primitive Camping'],
    image: 'https://placehold.co/600x400/2c5f2d/ffffff?text=Big+Woods+Property',
    fullDescription:
      'Our largest property at 600 acres, Big Woods offers a true wilderness hunting experience. This remote property features old-growth hardwoods and sees minimal hunting pressure. Trophy bucks and bears are regularly spotted. Primitive camping is available for multi-day hunts.',
  },
  {
    id: 5,
    name: 'River Bend Property',
    location: 'Central Region',
    acreage: 275,
    description: 'River frontage with excellent waterfowl and deer hunting.',
    features: ['Deer', 'Waterfowl', 'Turkey', 'River Access'],
    image: 'https://placehold.co/600x400/2c5f2d/ffffff?text=River+Bend+Property',
    fullDescription:
      'River Bend provides 275 acres with over a mile of river frontage. This unique property offers both excellent deer hunting in the timber and outstanding waterfowl hunting along the river. Spring turkey hunting is also exceptional due to the diverse habitat.',
  },
];

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleOpenDialog = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseDialog = () => {
    setSelectedProperty(null);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
          Our Properties
        </Typography>
        <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Explore our premium hunting properties across the region
        </Typography>

        <Grid container spacing={4}>
          {properties.map((property) => (
            <Grid item key={property.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardActionArea onClick={() => handleOpenDialog(property)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={property.image}
                    alt={property.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {property.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {property.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Terrain fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {property.acreage} acres
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {property.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {property.features.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          icon={<Nature />}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={Boolean(selectedProperty)}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProperty && (
          <>
            <DialogTitle>{selectedProperty.name}</DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 2 }}>
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.name}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOn fontSize="small" sx={{ mr: 0.5 }} />
                <Typography variant="body1" color="text.secondary">
                  {selectedProperty.location}
                  {selectedProperty.mapLink && (
                    <>
                      {' - '}
                      <a 
                        href={selectedProperty.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#2c5f2d', textDecoration: 'underline' }}
                      >
                        Driving Directions
                      </a>
                    </>
                  )}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Terrain fontSize="small" sx={{ mr: 0.5 }} />
                <Typography variant="body1" color="text.secondary">
                  {selectedProperty.acreage} acres
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                {selectedProperty.fullDescription}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Features:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedProperty.features.map((feature, index) => (
                  <Chip
                    key={index}
                    label={feature}
                    icon={<Nature />}
                    color="primary"
                  />
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Footer />
    </>
  );
}
