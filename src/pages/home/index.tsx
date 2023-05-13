import { Tabs } from "@mui/material";
import { BillsToPay } from "components/BillsToPay";
import { NextPage } from "next";
import { SyntheticEvent, useState } from "react";
import * as S from "./styles";

const Home: NextPage = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <S.Header>
        <Tabs value={value} onChange={handleChange}>
          <S.Tab label="Contas a Pagar" />
          <S.Tab label="Contas a Receber" />
        </Tabs>
      </S.Header>
      <S.Main>
        <BillsToPay />
      </S.Main>
    </>
  );
};

export default Home;
