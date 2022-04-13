import { Alert, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StandardButton } from "../../parts/Button";
import { ConfirmDialog } from "../../parts/Dialog";
import { RadioData } from "../../parts/RajioButton";
import { SelectBox } from "../../parts/SelectBox";
import styled from "styled-components";
import { rajioValues, selectValues } from "./CreateDataType";

export const Register: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [select, setSelect] = useState("");
  const [userId, setUserId] = useState("");
  const [age, setAge] = useState("");
  const [mailAdress, setMailAdress] = useState("");
  const [gender, setGender] = useState(0);
  const [interests, setInterests] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const navigatation = useNavigate();

  //モーダル表示・閉じる処理
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //登録処理
  const fetchData = async () => {
    try {
      await axios.post("http://localhost:3001/users", {
        user_id: userId,
        mail: mailAdress,
        age: age,
        gender: gender,
        job: select,
        interests: interests,
      });
      handleClose();
      setSuccessMessage("新しく登録しました");
    } catch (error) {
      setErrorMessage("問題が発生がしたため借りることが出来ません。");
      handleClose();
    }
  };

  return (
    <>
      <SMessage>
        {errorMessage.length > 0 ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : undefined}
        {successMessage.length > 0 ? (
          <Alert severity="success">{successMessage}</Alert>
        ) : undefined}
      </SMessage>
      <SItems>
        ユーザID
        <STextFiled>
          <TextField
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
            variant="outlined"
          />
        </STextFiled>
        メールアドレス
        <STextFiled>
          <TextField
            onChange={(e) => setMailAdress(e.target.value)}
            value={mailAdress}
            variant="outlined"
          />
        </STextFiled>
        年齢
        <STextFiled>
          <TextField
            onChange={(e) => setAge(e.target.value)}
            value={age}
            variant="outlined"
          />
        </STextFiled>
        性別
        <RadioData
          values={rajioValues}
          rajio={gender}
          onChange={(e) => setGender(Number(e.target.value))}
        />
        職業
        <STextFiled>
          <SelectBox
            onChange={(e) => setSelect(e.target.value)}
            select={select}
            text="職業"
            values={selectValues}
          />
        </STextFiled>
        趣味
        <STextFiled>
          <TextField
            value={interests}
            onChange={(e) => setInterests([e.target.value])}
            variant="outlined"
          />
        </STextFiled>
      </SItems>
      <StandardButton
        onClick={() => navigatation(-1)}
        text="ユーザ一覧に戻る"
        color="error"
        variant="contained"
      />
      <SRightButton>
        <StandardButton
          onClick={handleOpen}
          text="登録"
          color="primary"
          variant="contained"
        />
      </SRightButton>
      <ConfirmDialog
        LeftButtonText="はい"
        RightButtonText="いいえ"
        onClickLeft={fetchData}
        onClickRight={handleClose}
        open={open}
        titleText="登録しますか？"
      />
    </>
  );
};

//css箇所
const SRightButton = styled.div`
  float: right;
`;

const SMessage = styled.div`
  margin-bottom: 2px;
  width: 100%;
`;

const SItems = styled.div`
  margin-bottom: 2px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const STextFiled = styled.div`
  width: 200px;
`;
