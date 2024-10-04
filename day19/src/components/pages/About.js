import React from 'react'
import Layout from '../Layout/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box  sx={{
          my: 10,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}>
        <Typography variant="h4">
          Welcome my sweet shop
        </Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit magnam, quisquam tenetur accusamus consequuntur sapiente beatae porro nemo, deleniti quo fugiat inventore, rem ratione dolore quis veritatis rerum provident ea modi at explicabo. Sapiente nostrum minima provident corporis odio, ea dolorum ad aliquid voluptatibus error eligendi omnis quasi optio rem magnam incidunt officia perspiciatis doloribus? Vel hic qui iure porro vitae id consequuntur animi sunt facilis repellendus dolore ullam dicta dignissimos ad quae officiis eaque, dolor aut, ea iste blanditiis reiciendis. Libero inventore magnam dolorum provident exercitationem temporibus eos, corporis id nostrum dolor, modi cum aliquam vel? Cumque, hic aperiam.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, odio error. Illo dolor necessitatibus illum ex ipsa impedit. Corrupti a nesciunt alias? Commodi accusantium excepturi necessitatibus fugiat fugit numquam dignissimos reiciendis sequi impedit pariatur! Soluta voluptatibus ullam suscipit, debitis nulla architecto quo, fuga doloremque aperiam dolorum quisquam omnis, cumque sequi voluptatum accusantium ea nemo hic eos! Quis quisquam sapiente reiciendis iure nulla, mollitia suscipit optio ipsa fugiat voluptatum voluptas facere praesentium ab cum, non soluta dolore dolorum asperiores dolorem. Laudantium reprehenderit eveniet itaque sit molestias ipsam et architecto perspiciatis ex, quisquam repellendus obcaecati esse illo ducimus totam quo animi dolorum.</p>
      </Box>
    </Layout>
  )
}

export default About;

