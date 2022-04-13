import { Button } from "@mui/material";

type Props = {
  text: string;
  color: "primary" | "error";
  variant: "outlined" | "contained";
  onClick: () => void;
};
export const StandardButton: React.FC<Props> = ({
  text,
  onClick,
  color,
  variant,
}) => (
  <Button onClick={onClick} variant={variant} color={color}>
    {text}
  </Button>
);
