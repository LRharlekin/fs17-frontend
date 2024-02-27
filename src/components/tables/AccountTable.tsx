import React from "react";

import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

import TableHeader from "./TableHeader";
import { SkeletonText, SkeletonCircle } from "../loaders";

type TableProps = {
  isLoading?: boolean;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  pictureSrc?: string | null;
};

const avatarStyles = {
  my: 2,
  mr: 2,
  width: { xs: 70, md: 90 },
  height: { xs: 70, md: 90 },
};

const AccountDataTable = ({
  isLoading = true,
  name = "Name not found",
  email = "Email not found",
  password = "Password not found",
  pictureSrc = "/broken-image.jpg",
}: TableProps) => {
  const passwordHidden =
    !isLoading && typeof password === "string" && password !== null
      ? password.replace(/./g, "*")
      : "Password hot found";

  return (
    <TableContainer component={Paper}>
      <Table>
        <caption>Your personal account information.</caption>
        <TableHead>
          <TableHeader
            title="Your profile info"
            subtitle="Some info may be accessible to other digital services that we use to run our online store."
            colSpan={2}
          />
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell width="30%">Profile picture</TableCell>
            <TableCell
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: { xs: "flexStart", md: "center" },
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body2" color="grey.600">
                A profile picture helps personalize your account.
              </Typography>
              {!isLoading ? (
                <Avatar
                  sx={avatarStyles}
                  alt={`${name}`}
                  src={`${pictureSrc}`}
                />
              ) : (
                <SkeletonCircle>
                  <Avatar sx={avatarStyles} src="/broken-image.jpg" />
                </SkeletonCircle>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">Name</TableCell>
            <TableCell>{!isLoading ? `${name}` : <SkeletonText />}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">Email</TableCell>
            <TableCell>{!isLoading ? `${email}` : <SkeletonText />}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="30%">Password</TableCell>
            <TableCell>
              {!isLoading ? `${passwordHidden}` : <SkeletonText />}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccountDataTable;
