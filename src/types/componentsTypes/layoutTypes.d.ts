import { BoxProps } from "@mui/material";

export type LBoxType = BoxProps & { children: React.ReactNode[] | React.ReactNode };
export type CustomBoxType = BoxProps & { children: React.ReactNode[] | React.ReactNode };
export type LGridType = { children?: React.ReactNode[] | React.ReactNode };
export type CustomGridType = { children?: React.ReactNode[] };