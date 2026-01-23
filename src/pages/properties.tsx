import Head from 'next/head';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
} from '@mui/material';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TerrainIcon from '@mui/icons-material/Terrain';
import NatureIcon from '@mui/icons-material/Nature';

interface Property {
  id: number;
  name: string;
  location: string;
  acreage: string;
  description: string;
  features: string[];
  image: string;
  fullDescription: string;
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Property Name 1',
    location: 'Location, State',
    acreage: '100 acres',
    description: 'Brief description of the property highlighting key features.',
    features: ['Deer', 'Turkey', 'Food Plots', 'Timber'],
    image: '/images/property-placeholder.jpg',
    fullDescription: 'Detailed description of Property 1. Include information about terrain, wildlife, accessibility, amenities, and any special features that make this property unique.',
  },
  {
    id: 2,
    name: 'Property Name 2',
    location: 'Location, State',
    acreage: '150 acres',
    description: 'Brief description of the property highlighting key features.',
    features: ['Deer', 'Turkey', 'Creek', 'Hardwoods'],
    image: '/images/property-placeholder.jpg',
    fullDescription: 'Detailed description of Property 2. Include information about terrain, wildlife, accessibility, amenities, and any special features that make this property unique.',
  },
  {
    id: 3,
    name: 'Property Name 3',
    location: 'Location, State',
    acreage: '200 acres',
    description: 'Brief description of the property highlighting key features.',
    features: ['Deer', 'Turkey', 'Cabin', 'Ponds'],
    image: '/images/property-placeholder.jpg',
    fullDescription: 'Detailed description of Property 3. Include information about terrain, wildlife, accessibility, amenities, and any special features that make this property unique.',
  },
  {
    id: 4,
    name: 'Property Name 4',
    location: 'Location, State',
    acreage: '120 acres',
    description: 'Brief description of the property highlighting key features.',
    features: ['Deer', 'Turkey', 'Rolling Hills', 'Food Plots'],
    image: '/images/property-placeholder.jpg',
    fullDescription: 'Detailed description of Property 4. Include information about terrain, wildlife, accessibility, amenities, and any special features that make this property unique.',
  },
  {
    id: 5,
    name: 'Property Name 5',
    location: 'Location, State',
    acreage: '180 acres',
    description: 'Brief description of the property highlighting key features.',
    features: ['Deer', 'Turkey', 'River Access', 'Mixed Timber'],
    image: '/images/property-placeholder.jpg',
    fullDescription: 'Detailed description of Property 5. Include information about terrain, wildlife, accessibility, amenities, and any special features that make this property unique.',
  },
];

export default function PropertiesPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleCardClick = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleClose = () => {
    setSelectedProperty(null);
  };

  return (
    <>
      <Head>
        <title>Our Properties | Buck & Beard Hunt Club</title>
        <meta
          name="description"
          content="Explore our 5 premier hunting properties featuring diverse terrain, abundant wildlife, and excellent hunting opportunities."
        />
      </Head>

      <Header />

      <Box
        sx={{
          bgcolor: 'background.default',
          minHeight: '100vh',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: 'primary.main',
              }}
            >
              Our Properties
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Explore our collection of premier hunting properties. Click on any property to learn
              more about its unique features and opportunities.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {properties.map((property) => (
              <Grid item xs={12} sm={6} md={4} key={property.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardActionArea onClick={() => handleCardClick(property)}>
                    <CardMedia
                      component="div"
                      sx={{
                        height: 200,
                        bgcolor: 'grey.300',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <NatureIcon sx={{ fontSize: 80, color: 'grey.500' }} />
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                        {property.name}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.secondary' }}>
                        <LocationOnIcon sx={{ fontSize: 18, mr: 0.5 }} />
                        <Typography variant="body2">{property.location}</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'text.secondary' }}>
                        <TerrainIcon sx={{ fontSize: 18, mr: 0.5 }} />
                        <Typography variant="body2">{property.acreage}</Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary" paragraph>
                        {property.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {property.features.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            size="small"
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
      </Box>

      {/* Property Details Dialog */}
      <Dialog
        open={!!selectedProperty}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedProperty && (
          <>
            <DialogTitle>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {selectedProperty.name}
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              <Box
                sx={{
                  width: '100%',
                  height: 300,
                  bgcolor: 'grey.300',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  borderRadius: 1,
                }}
              >
                <NatureIcon sx={{ fontSize: 120, color: 'grey.500' }} />
              </Box>

              <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">
                    <strong>Location:</strong> {selectedProperty.location}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TerrainIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">
                    <strong>Size:</strong> {selectedProperty.acreage}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                Features
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {selectedProperty.features.map((feature, index) => (
                  <Chip
                    key={index}
                    label={feature}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>

              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                About This Property
              </Typography>
              <Typography variant="body1" paragraph>
                {selectedProperty.fullDescription}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" variant="contained">
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
