import React, { FC } from "react"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import { useRouter } from "next/router";
import { useState } from 'react'

const TextFieldStyle = { backgroundColor: "white", width: "32rem" } as const
const ContainerStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
} as const

const Search: FC<any> = () => {
    const [query, setQuery] = useState('')
    const router = useRouter()
    const handleQuery = () => router.push(`/?q=${query}`)
    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            setQuery((e.target as any).value)
            handleQuery()
        }
    }

    return (
        <Container sx={ContainerStyles}>
            <TextField
                id="filled-basic"
                label="Enter song,artist,name"
                variant="filled"
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                sx={TextFieldStyle}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" edge="end" onClick={handleQuery}>
                                {<SearchIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    )
}

export default Search