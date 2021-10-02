import React, { ReactElement } from "react"
import { SxProps } from "@mui/system"
import { AppBar, Typography, Toolbar, Theme } from "@mui/material"
import Search from "./Search"

const AppBarStyles = {
  appbar: {
    background: "#2c3e50",
    py: 2,
  },
  toolbar: {
    flexDirection: "column",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    mb: 2,
  },
}

export default function Navbar({ }): ReactElement {
  return (
    <>
      <AppBar position="sticky" sx={AppBarStyles.appbar}>
        <Toolbar sx={AppBarStyles.toolbar}>
          <Typography variant="h6" sx={AppBarStyles.title}>
            Lyrics Finder
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </>
  )
}
