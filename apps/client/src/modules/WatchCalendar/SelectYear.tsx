import { Button, Typography } from "@mui/material";
import { useAppContext } from "src/core/contexts";

export const SelectYear = () => {
  const { setSelectedYear, selectedYear } = useAppContext();
  const stYear = new Date(2022, 1, 1).getFullYear();
  const edYear = new Date().getFullYear();
  const years = [];
  for (let i = stYear; i <= edYear; i++) {
    years.push(i);
  }
  return (
    <div className="flex w-1/6 flex-col items-center">
      <Typography variant="h6" marginBottom={2}>
        Select Year
      </Typography>
      {years.map((y) => (
        <Button
          key={y}
          variant="outlined"
          disabled={y === selectedYear}
          fullWidth
          sx={{ marginBottom: 2 }}
          onClick={() => setSelectedYear(y)}
        >
          {y}
        </Button>
      ))}
    </div>
  );
};
