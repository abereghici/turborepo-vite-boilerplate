import Shell from '@monorepo/shell';
import { Spinner } from '@monorepo/posts-ui';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Shell>
      <Box p={2}>
        <Typography>
          This is the Monorepo Posts Homepage from <code>@monorepo/posts</code>.
        </Typography>
        <Link to="/">Click to go back home.</Link>
        <Box>
          <Spinner />
        </Box>
      </Box>
    </Shell>
  );
}

export default Home;
