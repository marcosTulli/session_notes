import { Box } from '@mui/material';
import { TitleMedium } from '../Text/components';
import logo from '@/assets/images/logo/logo.png';

export function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: '0.5rem', sm: '0.75rem' },
        height: { xs: '35px', sm: '35px', md: '40px' },
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          height: { xs: '28px', sm: '35px', md: '40px' },
          width: 'auto',
          marginLeft: { xs: '8px', sm: 0 },
        }}
      />
      <TitleMedium
        sx={{
          fontWeight: 400,
          color: 'text.primary',
          lineHeight: '25px',
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          margin: 0,
        }}
      >
        <Box
          component="span"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            lineHeight: { xs: '20px', sm: '25px' },
            display: 'inline-flex',
            alignItems: 'center',
            margin: 0,
          }}
        >
          Session Notes
        </Box>
      </TitleMedium>
    </Box>
  );
}

export default Logo;
