import {
  Add,
  AttachMoney,
  Clear,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Fab } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { green, red } from "@mui/material/colors";
import { billsToPay } from "mock/bills_to_pay";
import { useState } from "react";

type InstallmentType = {
  price: string;
  installment: string;
};

type RowType = {
  account_name: string;
  purchase_amount: string;
  installments_quantity: number;
  installments_list: InstallmentType[];
};

type RowProps = {
  row: RowType;
};

const Row = ({ row }: RowProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left" sx={{ padding: "8px" }}>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? (
              <KeyboardArrowUp sx={{ fill: green[500] }} />
            ) : (
              <KeyboardArrowDown sx={{ fill: green[500] }} />
            )}
          </IconButton>
        </TableCell>
        <TableCell
          align="left"
          component="th"
          scope="row"
          sx={{ padding: "8px" }}
        >
          {row.account_name}
        </TableCell>
        <TableCell align="left" sx={{ padding: "8px" }}>
          {row.purchase_amount}
        </TableCell>
        <TableCell align="left" sx={{ padding: "8px" }}>
          {row.installments_quantity}
        </TableCell>
        <TableCell align="left" sx={{ padding: "8px" }}>
          <AttachMoney sx={{ fill: green[500] }} />
          <Clear sx={{ fill: red[500] }} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" sx={{ padding: "8px" }}>
                      Valor da parcela
                    </TableCell>
                    <TableCell align="left" sx={{ padding: "8px" }}>
                      Parcela
                    </TableCell>
                    <TableCell align="left" sx={{ padding: "8px" }}>
                      Opções da parcela
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.installments_list.map(
                    ({ price, installment }, index) => (
                      <TableRow key={index}>
                        <TableCell align="left" sx={{ padding: "8px" }}>
                          {price}
                        </TableCell>
                        <TableCell align="left" sx={{ padding: "8px" }}>
                          {installment}
                        </TableCell>
                        <TableCell align="left" sx={{ padding: "8px" }}>
                          <AttachMoney sx={{ fill: green[500] }} />
                          <Clear sx={{ fill: red[500] }} />
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const rows = billsToPay;

export const BillsToPay = (): JSX.Element => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ padding: "8px" }} />
              <TableCell align="left" sx={{ padding: "8px" }}>
                Nome da conta
              </TableCell>
              <TableCell align="left" sx={{ padding: "8px" }}>
                Valor total
              </TableCell>
              <TableCell align="left" sx={{ padding: "8px" }}>
                Nº de parcelas
              </TableCell>
              <TableCell align="left" sx={{ padding: "8px" }}>
                Opções da conta
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Row row={row} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box position="fixed" bottom={16} right={16}>
        <Fab
          sx={{
            backgroundColor: green[500],
            "&:hover": { backgroundColor: green[800] },
          }}
        >
          <Add />
        </Fab>
      </Box>
    </>
  );
};
