import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  Button,
  Divider,
} from '@mui/material';
import { 
  Download,
  Description,
  PersonAdd,
  Security,
} from '@mui/icons-material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const resources = [
  {
    id: 1,
    title: 'Rules and Regulations',
    description: 'Complete guide to club rules, safety protocols, and hunting regulations. Every member must read and follow these guidelines.',
    icon: <Description fontSize="large" />,
    filename: 'buck-beard-rules-regulations.pdf',
    size: '2.3 MB',
    lastUpdated: 'January 2026',
  },
  {
    id: 2,
    title: 'New Member Application',
    description: 'Application form for prospective members. Fill out completely and submit with required documentation.',
    icon: <PersonAdd fontSize="large" />,
    filename: 'buck-beard-membership-application.pdf',
    size: '1.8 MB',
    lastUpdated: 'January 2026',
  },
  {
    id: 3,
    title: 'Member Visitor Waiver',
    description: 'Liability waiver form required for all guests and visitors. Must be completed before accessing club properties.',
    icon: <Security fontSize="large" />,
    filename: 'buck-beard-visitor-waiver.pdf',
    size: '1.2 MB',
    lastUpdated: 'January 2026',
  },
];

export default function Resources() {
  let basePath = '';
  
  try {
    const router = useRouter();
    basePath = router.basePath || '';
  } catch {
    // Router not available in test environment, use default path
    basePath = '';
  }

  const handleDownload = (filename: string) => {
    // Create download link for files in public/downloads directory
    const downloadUrl = `${basePath}/downloads/${filename}`;
    
    // Create temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Resources | Buck & Beard Hunt Club</title>
        <meta 
          name="description" 
          content="Download essential club documents including rules and regulations, membership application, and visitor waiver forms for Buck & Beard Hunt Club." 
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
              Club Resources
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
              Download essential documents and forms for Buck & Beard Hunt Club members and visitors
            </Typography>
          </Container>
        </Box>

        {/* Resources Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, mb: 6, textAlign: 'center' }}>
            Available Downloads
          </Typography>

          <Grid container spacing={4}>
            {resources.map((resource) => (
              <Grid item key={resource.id} xs={12} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    p: 4,
                    textAlign: 'center',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 3,
                    }}
                  >
                    {resource.icon}
                  </Box>
                  
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    {resource.title}
                  </Typography>
                  
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {resource.description}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'block' }}>
                      <strong>File Size:</strong> {resource.size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'block' }}>
                      <strong>Last Updated:</strong> {resource.lastUpdated}
                    </Typography>
                  </Box>
                  
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Download />}
                    onClick={() => handleDownload(resource.filename)}
                    sx={{
                      width: '100%',
                      py: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    Download PDF
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Important Notice Section */}
        <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                Important Notice
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.7, mb: 4 }}>
                All members and visitors must review and comply with club rules and regulations. 
                New members must complete the application process, and all visitors must sign 
                the liability waiver before accessing any club properties.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For questions about these documents or the application process, please{' '}
                <a href="/contact" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  contact us
                </a>{' '}
                or call (803) 727-5111.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Additional Information Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                For New Members
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                Welcome to Buck & Beard Hunt Club! Before you begin the membership process, 
                please download and review our Rules and Regulations document. This will give 
                you a complete understanding of our club policies and expectations.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                Complete the New Member Application form and submit it along with any required 
                documentation. Our membership committee will review your application and contact 
                you within 10 business days.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                For Existing Members
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                All members should keep current copies of our Rules and Regulations. 
                These documents are updated periodically to reflect changes in club 
                policies and safety requirements.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
                When bringing guests to club properties, ensure they complete the 
                Member Visitor Waiver before participating in any activities. This 
                protects both the club and your guests.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </>
  );
}