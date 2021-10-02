import React, { ReactElement } from "react"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import { useRouter } from "next/router";
import { useState } from 'react'

interface Props { }

const TextFieldStyle = { backgroundColor: "white", width: "32rem" }

export default function Search({ }: Props): ReactElement {
    const [query, setQuery] = useState('')

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setQuery(e.target.value)
            handleQuery()
        }
    }

    const handleQuery = () => router.push(`/?q=${query}`)

    const router = useRouter()
    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
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
        </>
    )
}
