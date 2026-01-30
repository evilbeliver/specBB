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
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Long Cane Property',
    location: 'Edgefield County',
    acreage: 675,
    description: 'Our Edgefield Tract,is roughly 675 acres with a mix of hardwoods, pine stands, clear cuts and creek bottoms.',
    features: ['Deer', 'Turkey', 'Rabbits', 'Quail','Food Plots', 'Clear Cuts'],
    image: '/images/long-cane-deer.jpg',
    fullDescription:
      'Our Long Cane Tract, aka Edgefield Tract, is located off of Long Cane Rd (State HWy S-19-21) in Edgefield County. The main check in and parking areas are located across the street from a white house. This roughly 675 acre property has 30+ permanant stand locations with a mix of hardwoods, pine stands, and creek bottoms. We have multiple food plots throughout the property to help attract and retain the deer and turkey. We are also starting to see a comeback of wild quail as well. Camping is allowed on this property (campers, tents), but there are no hookups.',
  },
  {
    id: 2,
    name: 'Chappells Ferry Property',
    location: 'Eastern Region',
    acreage: 350,
    description: 'Featuring creek corridors and hardwood bottoms ideal for big game.',
    features: ['Deer', 'Turkey', 'Waterfowl', 'Creek Access'],
    image: 'https://placehold.co/600x400/2c5f2d/ffffff?text=Creek+Bottom+Property',
    fullDescription:
      'The Creek Bottom property spans 350 acres along a pristine creek corridor. This property is known for trophy whitetail deer and spring turkey. The creek provides natural funnels and travel corridors that make this an exceptional hunting location.',
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
