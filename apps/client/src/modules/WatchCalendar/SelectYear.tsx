import { Button, Typography } from "@mui/material";
import { useAppContext } from "src/core/contexts";

export const SelectYear = () => {
  const { selectedYear, setSelectedYear } = useAppContext();
  const stYear = new Date(2022, 1, 1).getFullYear();
  const edYear = new Date().getFullYear();
  const years = [];
  for (let i = stYear; i <= edYear; i++) {
    years.push(i);
  }
  return (
    <div className="flex w-1/6 flex-col items-center">
      <Typography variant="h6" marginBottom={2} color="primary.dark">
        Select Year
      </Typography>
      {years.map((y) => (
        <Button
          key={y}
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            color: "primary.dark",
            borderColor: y === selectedYear ? "primary.dark" : "transparent",
          }}
          onClick={() => setSelectedYear(y)}
        >
          {y}
        </Button>
      ))}
    </div>
  );
};
