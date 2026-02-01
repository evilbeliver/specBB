import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  TextField,
  Button,
  Alert,
  Divider,
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn, 
  Schedule,
  Send
} from '@mui/icons-material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const contactInfo = [
  {
    icon: <Email fontSize="large" />,
    title: 'Email',
    content: 'buckandbeard@gmail.com',
    link: 'mailto:buckandbeard@gmail.com',
    description: 'Send us an email for general inquiries or membership information',
  },
  {
    icon: <Phone fontSize="large" />,
    title: 'Phone',
    content: '(803) 727-5111',
    link: 'tel:+18037275111',
    description: 'Call us for immediate assistance or to schedule a property tour',
  },
  {
    icon: <LocationOn fontSize="large" />,
    title: 'Service Area',
    content: 'Saluda & Edgefield Counties',
    link: null,
    description: 'Our hunting properties span across South Carolinas premier hunting regions',
  },
  
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  let basePath = '';
  
  try {
    const router = useRouter();
    basePath = router.basePath || '';
  } catch {
    // Router not available in test environment, use default path
    basePath = '';
  }

  const handleInputChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    if (!name) return;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:buckandbeard@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    // Hide success message after 5 seconds
    window.setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Buck & Beard Hunt Club</title>
        <meta 
          name="description" 
          content="Contact Buck & Beard Hunt Club for membership information, property tours, and hunting inquiries. Email us at buckandbeard@gmail.com or call (803) 727-5111." 
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
              Contact Us
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
              Get in touch with us for membership information, property tours, or any questions about our hunting club
            </Typography>
          </Container>
        </Box>

        {/* Contact Info Cards */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {contactInfo.map((info, index) => (
              <Grid item key={index} xs={12} sm={4} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: info.link ? 'pointer' : 'default',
                    '&:hover': {
                      transform: info.link ? 'translateY(-4px)' : 'none',
                      boxShadow: info.link ? '0 8px 24px rgba(0,0,0,0.15)' : 'inherit',
                    },
                  }}
                  component={info.link ? 'a' : 'div'}
                  href={info.link || undefined}
                  onClick={info.link ? undefined : (e: React.MouseEvent) => e.preventDefault()}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {info.title}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    component="p" 
                    sx={{ 
                      color: info.link ? 'primary.main' : 'text.primary',
                      fontWeight: info.link ? 600 : 400,
                      mb: 1,
                      textDecoration: 'none',
                    }}
                  >
                    {info.content}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Contact Form Section */}
        <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                  Send us a Message
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8, mb: 4 }}>
                  Ready to join Buck & Beard Hunt Club or have questions about our properties? 
                  Fill out the form below and we&rsquo;ll get back to you as soon as possible. We look 
                  forward to hearing from you and potentially welcoming you to our hunting family.
                </Typography>
                
                {showSuccess && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! Your email client should open with the pre-filled message. 
                    We&rsquo;ll respond within 24 hours.
                  </Alert>
                )}

                <Card sx={{ p: 4 }}>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          multiline
                          rows={6}
                          variant="outlined"
                          placeholder="Tell us about your hunting experience, questions about membership, or anything else you&rsquo;d like us to know..."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          sx={{
                            py: 1.5,
                            px: 4,
                            fontSize: '1.1rem',
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                  What to Expect
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                  When you contact Buck & Beard Hunt Club, here&rsquo;s what you can expect from us:
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <LocationOn sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                        Property Tours
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        We&rsquo;re happy to arrange tours of our properties so you can see firsthand what we offer.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Schedule sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600 }}>
                        Flexible Scheduling
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        We understand everyone has different schedules and will work with you to find convenient times.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    Membership Information
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
                    Interested in joining? Contact us to learn about:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, '& li': { mb: 1 } }}>
                    <li>Current membership availability</li>
                    <li>Membership fees and requirements</li>
                    <li>Property access and hunting schedules</li>
                    <li>Club rules and safety requirements</li>
                    <li>Upcoming events and activities</li>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Map/Location Section */}
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Our Service Area
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', mb: 4, maxWidth: 600, mx: 'auto' }}>
            Buck & Beard Hunt Club operates across prime hunting territories in Saluda and Edgefield Counties, 
            South Carolina. Our five properties offer over 2,000 acres of diverse hunting terrain.
          </Typography>
          
          <Box
            sx={{
              height: 300,
              bgcolor: 'grey.100',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url(${basePath}/images/hollywood-deer.jpg)`,
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
                bgcolor: 'rgba(44, 95, 45, 0.7)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          >
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                position: 'relative', 
                zIndex: 1, 
                color: 'white', 
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)' 
              }}
            >
              Saluda & Edgefield Counties
            </Typography>
          </Box>
        </Container>
      </main>

      <Footer />
    </>
  );
}