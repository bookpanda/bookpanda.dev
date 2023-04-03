import { Spoilers } from "$modules/utils";
import { Typography } from "@mui/material";

export const AboutMe = () => {
  return (
    <div>
      <Typography variant="h4" fontWeight={600}>
        Who am I?
      </Typography>
      <Spoilers variant="h6">
        average anime-enjoying, nihongo-learning, left-handed, glasses-wearing,
        classes-with-no-attendance-skipping guy
      </Spoilers>
      <Typography variant="h6" fontWeight={300} marginBottom={3}>
        I am Idhibhat Pankam, currently in freshmen year, majoring in Computer
        Engineering, Chulalongkorn University. You can call me <i>Margin</i>{" "}
        (Yes, that CSS property).
      </Typography>
      <Typography variant="h6" fontWeight={300} marginBottom={10}>
        I love creating side projects, especically web applications, to solve
        problems. I specialize in Nextjs/Reactjs, Tailwindcss, MaterialUI, but
        other cool technologies are also welcomed.
      </Typography>
    </div>
  );
};
