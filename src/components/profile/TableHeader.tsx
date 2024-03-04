import { TableCell, TableRow, Typography } from "@mui/material";

type TableHeaderProps = {
  colSpan: number;
  title?: string;
  subtitle?: string;
};

const TableHeader = ({
  title = "Table Headline",
  subtitle = "Some text goes here.",
  colSpan = 99,
}: TableHeaderProps) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" color="grey.800" component="p">
          {subtitle}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default TableHeader;
