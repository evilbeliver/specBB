import React, { useState } from 'react';
import Head from 'next/head';
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
    description: 'Our Long Cane Tract,is roughly 675 acres with a mix of hardwoods, pine stands, clear cuts and creek bottoms.',
    features: ['Deer', 'Turkey', 'Rabbits', 'Quail','Food Plots', 'Clear Cuts', 'Camping'],
    image: 'images/long-cane-deer.jpg',
    fullDescription:
      'Our Long Cane Tract, aka Edgefield Tract, is located off of Long Cane Rd (State HWy S-19-21) in Edgefield County. The main check in and parking areas are located across the street from a white house. This roughly 675 acre property has 30+ permanant stand locations with a mix of hardwoods, pine stands, and creek bottoms. We have multiple food plots throughout the property to help attract and retain the deer and turkey. We are also starting to see a comeback of wild quail as well. Camping is allowed on this property (campers, tents), but there are no hookups.',
    mapLink: 'https://maps.app.goo.gl/TkEnAkVd1ZZVN9XY7',
  },
  {
    id: 2,
    name: 'Chappells Ferry Property',
    location: 'Saluda County',
    acreage: 766,
    description: 'Our Chappells Ferry Tract is roughly 766 acre property broken up into 4 differnet areas.',
    features: ['Deer', 'Turkey', 'Rabbits', 'Quail', 'Food Plots', 'Creek Bottoms'],
    image: 'images/chappells-ferry-deer.png',
    fullDescription:
      'Our Chappells Ferry Tract is located off of Old Chappells Ferry Rd, and Pinckney Road. The main check in and parking area is located off of Pinckney Rd. This roughly 766 acre property has 30+ stands and is broken up into 4 differnet areas with roughly 250 acres being off of Country Pond Rd. This property has some of the larger foodplots on the property as you can see in the picture with a few smaller ones as well. This property has great deer, turky and some wild pig opportunities as well. We are seeing more quail also show up on this property as well.',
    mapLink: 'https://maps.app.goo.gl/Lx3N1cWP3Vm86DCu6',
  },
  {
    id: 3,
    name: 'Hollywood Property',
    location: 'Saluda County',
    acreage: 520,
    description: 'Our Hollywood Tract is 520 acre, property with a mix of hardwoods, pine stands, and creek bottoms with multiple smaller food plots throughout the property.',
    features: ['Deer', 'Turkey', 'Food Plots', 'Pigs'],
    image: 'images/hollywood-deer.jpg',
    fullDescription:
      'Our Hollywood Tract is located off of Old Town Road. The main parking and check in area is at the end of the road on the left hand side. We are the first drive way with a large red gate. The property spans both sides of the road as well as part of Crossroad Church Road. This 520 acre property has 20+ permanant stand locations with a mix of hardwoods, pine stands, and creek bottoms. We have multiple smaller food plots throughout the property to help attract and retain the deer and turkey. This property is also known to have pigs around as well.',
    mapLink: 'https://maps.app.goo.gl/GGozqkXsDeVTKq7D8',
  },
  {
    id: 4,
    name: 'Old Charleston Property',
    location: 'Edgefield County',
    acreage: 440,
    description: 'Our Old Charleston Tract is 440 acre property has 10+ stands and is broken up into multiple sections',
    features: ['Deer', 'Turkey', 'Camping'],
    image: 'images/old-charleston-turkey.jpg',
    fullDescription:
      'Our Old Charlston Tract is located off of Old Charleston Rd, and Red Hawk Dr.(State Rd S-41-66) The main check in area is located off of Old Charleston Rd were an old yellow school bus is parked This roughly 440 acre property has 10+ stands and is broken up into multiple sections with part of the property located off of Magnolia Ln. This property has multiple food plots with a mix of hardwoods, pines, and creak bottoms. Camping is also allowed on this property as well, there are currently no hookups at this property.',
    mapLink: 'https://maps.app.goo.gl/CFvJRsXiHYddxu5k9',
  },
  {
    id: 5,
    name: 'Piney Wood Property',
    location: 'Saluda County',
    acreage: 275,
    description: 'Our Piney Wood Tract is 130 acre property has 12+ stands and has a few food plots on the property..',
    features: ['Deer', 'Turkey',],
    image: 'images/piney-wood-deer.jpeg',
    fullDescription:
      'Our Piney Wood Tract is located around the corner from our Hollywood Tract and is off of Pineywood Rd. The main check in area is located across the streat from a farm and house. This roughly 130 acre property has 12+ stands and has a few food plots on the property.',
    mapLink: 'https://maps.app.goo.gl/cHvK85Uecx5Hq6Af8',
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
      <Head>
        <title>Properties | Buck & Beard Hunt Club</title>
        <meta 
          name="description" 
          content="Explore Buck & Beard Hunt Club's 5 premium hunting properties across South Carolina, totaling over 2,600 acres of prime deer and turkey hunting land." 
        />
      </Head>

      <Header />
      
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: { xs: 8, md: 12 },
            textAlign: 'center',
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Our Properties
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                opacity: 0.9,
              }}
            >
              Explore our premium hunting properties across South Carolina, totaling over 2,600 acres of prime hunting land
            </Typography>
          </Container>
        </Box>

        {/* Properties Grid */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
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
      </main>

      <Footer />
    </>
  );
}
