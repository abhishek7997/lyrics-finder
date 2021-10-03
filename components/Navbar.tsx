import React, { FC } from "react"
import { AppBar, Typography, Toolbar } from "@mui/material"
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
} as const

const Navbar: FC<any> = () => {
  return (
    <AppBar position="sticky" sx={AppBarStyles.appbar}>
      <Toolbar sx={AppBarStyles.toolbar}>
        <Typography variant="h6" sx={AppBarStyles.title}>
          Lyrics Finder
        </Typography>
        <Search />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
