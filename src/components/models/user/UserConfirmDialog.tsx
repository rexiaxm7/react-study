import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {FC} from "react";

type UserConfirmDialogProps={
    open:boolean;
    handleClose:()=>void;
}
export const UserConfirmDialog:FC<UserConfirmDialogProps> = ({open,handleClose}) => {

    return (  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
    >
        <DialogTitle id="dialog-title">
            ユーザー登録
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="dialog-description">
                登録します。よろしいですか？
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>キャンセル</Button>
            <Button onClick={handleClose} autoFocus>
                登録
            </Button>
        </DialogActions>
    </Dialog>)
}