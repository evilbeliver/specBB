import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

export default function Home() {
  const features = [
    {
      title: 'Prime Hunting Grounds',
      description: 'Acres of pristine wilderness managed for optimal wildlife habitat',
    },
    {
      title: 'Expert Guides',
      description: 'Experienced guides to ensure a safe and successful hunt',
    },
    {
      title: 'Modern Facilities',
      description: 'Comfortable lodging and amenities for your hunting trip',
    },
  ];

  return (
    <>
      <Head>
        <title>Buck & Beard Hunt Club | Modern Hunting Experience</title>
        <meta name="description" content="Buck & Beard Hunt Club - A modern, accessible hunting club website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <Box component="main" id="main-content" role="main" aria-label="Main content">
        {/* Hero Section */}
        <Box
          component="section"
          aria-labelledby="hero-heading"
          sx={{
            position: 'relative',
            height: { xs: '400px', md: '600px' },
            backgroundImage: 'url(/heroimage.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            },
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              id="hero-heading"
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ 
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Welcome to Buck & Beard Hunt Club
            </Typography>
            <Typography 
              variant="h5" 
              component="p" 
              sx={{ 
                textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              A modern hunting experience built on tradition and excellence
            </Typography>
          </Container>
        </Box>

        {/* About Section */}
        <Box
          component="section"
          aria-labelledby="about-heading"
          sx={{
            py: { xs: 6, md: 8 },
            bgcolor: 'background.default',
          }}
        >
          <Container maxWidth="lg">
            <Typography
              id="about-heading"
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ mb: 3, textAlign: 'center' }}
            >
              About Our Club
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                textAlign: 'center',
                fontSize: '1.125rem',
                lineHeight: 1.8,
              }}
            >
              Buck & Beard Hunt Club combines traditional hunting values with modern amenities.
              Experience the thrill of the hunt in a safe, sustainable, and welcoming environment.
            </Typography>
          </Container>
        </Box>

        {/* Features Section */}
        <Box
          component="section"
          aria-labelledby="features-heading"
          sx={{
            py: { xs: 6, md: 8 },
            bgcolor: 'background.paper',
          }}
        >
          <Container maxWidth="lg">
            <Typography
              id="features-heading"
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ mb: 5, textAlign: 'center' }}
            >
              What We Offer
            </Typography>
            <Grid
              container
              spacing={4}
              role="list"
              sx={{ justifyContent: 'center' }}
            >
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} role="listitem">
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: 600, color: 'primary.main' }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
