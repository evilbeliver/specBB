import Head from 'next/head';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { 
  ExpandMore, 
  Groups, 
  Terrain, 
  Security, 
  School,
  FamilyRestroom,
  LocalFlorist 
} from '@mui/icons-material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const values = [
  {
    icon: <Security fontSize="large" />,
    title: 'Safety First',
    description: 'Safety is our top priority. We maintain strict safety protocols and ensure all members are properly trained and equipped.',
  },
  {
    icon: <Groups fontSize="large" />,
    title: 'Community',
    description: 'We foster a welcoming community where hunters of all skill levels can learn, share experiences, and build lasting friendships.',
  },
  {
    icon: <LocalFlorist fontSize="large" />,
    title: 'Conservation',
    description: 'We are committed to sustainable hunting practices and wildlife conservation for future generations.',
  },
  {
    icon: <FamilyRestroom fontSize="large" />,
    title: 'Family Oriented',
    description: 'Buck & Beard is a family-friendly organization that welcomes hunters of all ages and backgrounds.',
  },
  {
    icon: <School fontSize="large" />,
    title: 'Education',
    description: 'We are dedicated to constantly learning, improving, and expanding our knowledge of hunting and the outdoors.',
  },
  {
    icon: <Terrain fontSize="large" />,
    title: 'Quality Grounds',
    description: 'We maintain over 2000 acres of prime hunting grounds across multiple properties in the Saluda and Edgefield areas.',
  },
];

const faqs = [
  {
    question: 'What types of hunting are available?',
    answer: 'Our club offers deer and turkey hunting across all our properties. Some properties also provide opportunities for small game like rabbits and quail, as well as wild pig hunting.',
  },
  {
    question: 'Are camping facilities available?',
    answer: 'Yes, camping is available on select properties including our Long Cane and Old Charleston tracts. We accommodate both RVs and tent camping, though hookups are not currently available.',
  },
  {
    question: 'What about food plots and stands?',
    answer: 'We maintain multiple food plots throughout our properties to attract and retain wildlife. Our properties feature 60+ permanent stand locations across all tracts.',
  },
  {
    question: 'How do I become a member?',
    answer: 'To learn more about membership opportunities and to schedule a property tour, please contact us. We\'ll be happy to discuss our current availability and membership requirements.',
  },
  {
    question: 'Are there hunting seasons and regulations?',
    answer: 'All hunting activities must comply with South Carolina Department of Natural Resources regulations. We follow all state hunting seasons and bag limits.',
  },
  {
    question: 'What safety measures are in place?',
    answer: 'Safety is our top priority. We require all members to follow strict safety protocols, including mandatory hunter safety certification and adherence to our club safety rules.',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Buck & Beard Hunt Club</title>
        <meta 
          name="description" 
          content="Learn about Buck & Beard Hunt Club - a family-oriented hunting organization dedicated to safe, sustainable deer and turkey hunting across 2000+ acres in South Carolina." 
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
              About Buck & Beard Hunt Club
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
              A family-oriented organization dedicated to safe, successful, and sustainable hunting
            </Typography>
          </Container>
        </Box>

        {/* Mission Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                Welcome to Buck & Beard and thank you for taking the time to check us out. We are a 
                family-oriented organization of men and women dedicated to constantly learning, improving 
                and expanding our passion for the outdoors and the opportunities to enjoy safe successful 
                deer and turkey hunting.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                If you are seeking a new experience, we encourage you to read on to determine if we offer 
                what you are looking for. For more information and to schedule a tour of our properties, 
                contact us and we will get back to you.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 400,
                  bgcolor: 'grey.100',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: 'url(/images/long-cane-deer.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.3)',
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* Values Section */}
        <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              align="center"
              sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 6 }}
            >
              Our Values
            </Typography>
            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Properties Overview */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Our Properties
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                Buck & Beard Hunt Club manages over 2,000 acres across five premier hunting properties 
                in the Saluda and Edgefield County areas. Our properties offer diverse terrain including 
                hardwood forests, pine stands, clear cuts, and creek bottoms.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                With 60+ permanent stand locations and multiple food plots maintained throughout our 
                properties, we provide excellent opportunities for deer and turkey hunting, with some 
                properties also offering small game and wild pig hunting.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  Property Features:
                </Typography>
                <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                  <li>Multiple food plots for wildlife attraction</li>
                  <li>Permanent stand locations across all properties</li>
                  <li>Diverse terrain and habitat types</li>
                  <li>Camping facilities available on select properties</li>
                  <li>Easy access and parking areas</li>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 500,
                  bgcolor: 'grey.100',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: 'url(/images/chappells-ferry-deer.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.3)',
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* FAQ Section */}
        <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              align="center"
              sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 6 }}
            >
              Frequently Asked Questions
            </Typography>
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  sx={{
                    mb: 2,
                    '&:before': { display: 'none' },
                    boxShadow: 'none',
                    border: '1px solid',
                    borderColor: 'grey.200',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      '& .MuiAccordionSummary-content': {
                        my: 2,
                      },
                    }}
                  >
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Contact CTA */}
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Ready to Join Our Community?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 4, maxWidth: 600, mx: 'auto' }}>
            Contact us today to learn more about membership opportunities and to schedule a tour 
            of our properties. We look forward to welcoming you to the Buck & Beard family.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
              <strong>Email:</strong> buckandbeard@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
              <strong>Phone:</strong> (803) 727-5111
            </Typography>
          </Box>
        </Container>
      </main>

      <Footer />
    </>
  );
}