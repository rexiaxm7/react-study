import { DialogTitle, DialogActions, Dialog } from "@mui/material";
import { StandardButton } from "./Button";

type Props = {
  titleText: string;
  LeftButtonText: string;
  RightButtonText: string;
  onClickLeft: () => void;
  onClickRight: () => void;
  open: boolean;
};

export const ConfirmDialog: React.FC<Props> = ({
  titleText,
  LeftButtonText,
  RightButtonText,
  onClickLeft,
  open,
  onClickRight,
}) => (
  <div>
    <Dialog open={open}>
      <DialogTitle>{titleText}</DialogTitle>
      <DialogActions>
        <StandardButton
          color="primary"
          onClick={onClickLeft}
          text={LeftButtonText}
          variant="outlined"
        />
        <StandardButton
          color="primary"
          onClick={onClickRight}
          text={RightButtonText}
          variant="outlined"
        />
      </DialogActions>
    </Dialog>
  </div>
);
