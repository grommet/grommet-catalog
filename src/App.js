import React from 'react';
import {
  Box, Button, Grid, Grommet, Heading, Image, Paragraph, grommet,
} from 'grommet';

const Item = ({ description, href, imageSrc, name }) => (
  <Box pad="medium">
    <Button fill plain href={href}>
      {({ hover }) => (
        <Box
          fill
          align="center"
          justify="between"
          pad={{ top: "medium", horizontal: 'medium' }}
          round="large"
          border={{ side: 'all', color: hover ? 'brand' : 'transparent', size: 'large' }}
          overflow="hidden"
        >
          <Box align="center">
            <Heading level={2} margin="none">{name}</Heading>
            <Paragraph size="large" textAlign="center">
              {description}
            </Paragraph>
          </Box>
          <Image src={imageSrc} style={{ maxWidth: '100%' }} />
        </Box>
      )}
    </Button>
  </Box>
)

function App() {
  return (
    <Grommet full theme={grommet}>
      <Box fill background="#3D138D" overflow="auto">
        <Grid
          columns={[['xxsmall', 'flex'], ['medium', 'xxlarge'], ['xxsmall', 'flex']]}
          rows={['flex']}
          areas={[{ name: 'content', start: [1, 0], end: [1, 0] }]}
        >
          <Box gridArea="content">
            <Box direction="row" align="center" justify="center">
              <Heading>Grommet Catalog</Heading>
            </Box>
            <Grid columns="large">
              <Item
                name="Designer"
                description="build experiences with grommet components; then publish
                and share your ideas with a simple wysiwyg interface."
                imageSrc="/screens/designer.png"
                href="https://designer.grommet.io"
              />
              <Item
                name="Theme Designer"
                description="want grommet to look like your brand? plug your
                details in and share it or import into the Designer."
                imageSrc="/screens/theme-designer.png"
                href="https://theme-designer.grommet.io"
              />
              <Item
                name="Publisher"
                description="build elegant static content sites with a simple
                authoring interface."
                imageSrc="/screens/publisher.png"
                href="https://publisher.grommet.io"
              />
              <Item
                name="Slides"
                description="communicate your ideas simply with a presentation
                builder that leverages the beautiful unsplash image service."
                imageSrc="/screens/slides.png"
                href="https://slides.grommet.io"
              />
              <Item
                name="Grommet"
                description="reference grommet component details and experiment
                with them."
                imageSrc="/screens/docs.png"
                href="https://v2.grommet.io"
              />
              <Item
                name="Icons"
                description="explore the grommet icon library to find the
                perfect way to communicate a concept succinctly."
                imageSrc="/screens/icons.png"
                href="https://icons.grommet.io"
              />
              <Item
                name="Storybook"
                description="wondering how you can do something with grommet?
                check out the storybook with examples of different ways to
                use the components."
                imageSrc="/screens/storybook.png"
                href="https://storybook.grommet.io/?path=/story/components--all"
              />
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Grommet>
  );
}

export default App;
