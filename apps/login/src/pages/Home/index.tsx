import Shell from '@monorepo/shell';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Shell>
      <Box p={2}>
        <Typography>
          This is the Monorepo Login Homepage from <code>@monorepo/login</code>.
        </Typography>
        <Link to="/">Click to go back home.</Link>
      </Box>
    </Shell>
  );
}

export default Home;
