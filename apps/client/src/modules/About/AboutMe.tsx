import { Spoilers } from "$modules/utils";
import { Typography } from "@mui";

export const AboutMe = () => {
  return (
    <div className="mb-8">
      <Typography variant="h4" fontWeight={600} color="secondary.dark">
        Who am I?
      </Typography>
      <div className="mt-4 bg-primary.light p-6 transition-all">
        <Spoilers variant="h6">
          average anime-enjoying, nihongo-learning, left-handed,
          glasses-wearing, classes-with-no-attendance-skipping guy
        </Spoilers>
        <Typography
          variant="h6"
          fontWeight={300}
          marginBottom={3}
          color="secondary.dark"
        >
          I am Idhibhat Pankam, currently in freshmen year, majoring in Computer
          Engineering, Chulalongkorn University. You can call me <i>Margin</i>{" "}
          (yes, that CSS property).
        </Typography>
        <Typography
          variant="h6"
          fontWeight={300}
          marginBottom={10}
          color="secondary.dark"
        >
          I love creating side projects, especically web applications, to solve
          problems. I specialize in Nextjs/Reactjs, Tailwindcss, MaterialUI, but
          other cool technologies are also welcomed.
        </Typography>
      </div>
    </div>
  );
};
