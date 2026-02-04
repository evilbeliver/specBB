import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

export default function Home() {
  let heroImageUrl = '/heroimage.png';
  
  try {
    const router = useRouter();
    heroImageUrl = `${router.basePath || ''}/heroimage.png`;
  } catch {
    // Router not available in test environment, use default path
    heroImageUrl = '/heroimage.png';
  }
  
  const features = [
    {
      title: 'Prime Hunting Grounds',
      description: 'We have 5 properties in the Saluda and Edgefield areas totaling over 2000 acres',
    },
    {
      title: 'Family Friendly Atmosphere',
      description: 'Our club fosters a welcoming environment for hunters of all ages and experience levels',
    },
    {
      title: 'Camping Available',
      description: 'We have multiple camp sites available on club properties for members',
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
          aria-describedby="hero-description"
          sx={{
            position: 'relative',
            height: { xs: '400px', sm: '450px', md: '500px', lg: '550px' },
            backgroundImage: `url(${heroImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
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
              backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay for text readability
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
              id="hero-description"
              variant="h5" 
              component="p" 
              sx={{ 
                textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              A modern hunting experience built on tradition and excellence
            </Typography>
            {/* Hidden description for background image accessibility */}
            <Typography
              component="span"
              sx={{
                position: 'absolute',
                left: '-10000px',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
              }}
            >
              Background image shows scenic hunting grounds with natural forest landscape
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
              Welcome to Buck & Beard and thank you for taking the time to check us out. We are a family-oriented organization of men and women dedicated to constantly learning, improving and expanding our passion for the outdoors and the opportunities to enjoy safe successful deer and turkey hunting. If you are seeking a new experience, we encourage you to read on to determine if we offer what you are looking for. For more information and to schedule a tour of our properties, contact us and we will get back to you.
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
