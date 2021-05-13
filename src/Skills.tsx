import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

export default function Home() {
  return (
    <>
      {/** Skills */}
      <Grid item>
        <Typography variant="h2">Vaardigheden</Typography>
      </Grid>
      {/** Programming languages */}
      <Grid item>
        <Typography variant="h3">Programmeertalen</Typography>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <SkillCard
          title="Typescript"
          imageUrl="/typescript.png"
          color="#007acc"
        />
        <SkillCard
          title="Javascript"
          imageUrl="/javascript.png"
          color="#f7e018"
          textColor="#000"
        />
        <SkillCard title="Python" imageUrl="/python.png" color="#234a6b" />
        <SkillCard title="C#" imageUrl="/csharp.jpg" color="#67177a" />
      </Grid>
      {/** Frameworks */}
      <Grid item>
        <Typography variant="h3">Frameworks</Typography>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <SkillCard title="React" imageUrl="/react.svg" color="#53c1de" />
        <SkillCard title="Aurelia" imageUrl="/aurelia.png" color="#ab1b77" />
        <SkillCard title="Vue" imageUrl="/vue.png" color="#3fb984" />
        <SkillCard title="Flutter" imageUrl="/flutter.svg" color="#3bbeee" />
        <SkillCard
          title="ASP.NET Core"
          imageUrl="/aspnetcore.png"
          color="#223463"
        />
        <SkillCard
          title="Express"
          imageUrl="/express.png"
          color="#fff"
          textColor="#000"
        />
      </Grid>
      {/** Environments */}
      <Grid item>
        <Typography variant="h3">Clouddiensten</Typography>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <SkillCard title="Firebase" imageUrl="/firebase.png" color="#039be5" />
      </Grid>
    </>
  );
}

const useSkillCardStyles = makeStyles((theme) =>
  createStyles({
    media: {
      height: 200,
    },
    content: ({ color, textColor }: { color: string; textColor: string }) => ({
      position: "relative",
      zIndex: 1,
      backgroundColor: color,
      color: textColor,
      borderTopColor: theme.palette.divider,
      borderTopStyle: "solid",
    }),
  })
);

interface SkillCardProps {
  title: string;
  imageUrl: string;
  color: string;
  textColor?: string;
}

function SkillCard({
  title,
  imageUrl,
  color,
  textColor = "#fff",
}: SkillCardProps) {
  const classes = useSkillCardStyles({ color, textColor });
  const [highlighted, setHighlighted] = useState(false);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        onMouseEnter={() => setHighlighted(true)}
        onMouseLeave={() => setHighlighted(false)}
        raised={highlighted}
      >
        <CardMedia image={imageUrl} className={classes.media} />
        <CardContent className={classes.content}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
