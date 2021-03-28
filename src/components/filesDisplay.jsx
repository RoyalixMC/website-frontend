import {Component, useEffect, useState} from "react";
import * as React from "react";
import http from "http";

import {materialDark, materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism';

import SyntaxHighlighter from 'react-syntax-highlighter';

import axios from "axios";
import useTheme from "@theme/hooks/useThemeContext";

export default function FilesDisplay(props) {
    const [files, setFiles] = useState([])
    const {isDarkTheme} = useTheme()

    const constructFileDisplay = (file) => {
        return (
            <div>
                <h2 id={"Hello"} style={{
                    color: isDarkTheme ? "white" : "black",
                    padding: '0.3rem',
                    fontSize: "2em",
                    fontWeight: '400'
                }}>{file.path}</h2>
                <SyntaxHighlighter language="yaml" style={isDarkTheme ? materialDark : materialLight}>
                    {file.data}
                </SyntaxHighlighter>
            </div>
        )
    }

    const requestFiles = async () => {
        return await axios.get(`http://localhost:8000/configs/${props.id}`)
            .then(res => res.data)
    }

    useEffect(() => {
        let unmounted = false
        requestFiles().then(files => {
            if (unmounted) return
            setFiles(files)
        })
        return () => {
            unmounted = true
        }
    }, [])

    if (files.length === 0) return <a>Loading</a>

    return (
        <div className="files-container">
            {files.map((file, idx) => (
                <div className={"file-" + idx} key={idx}>
                    {constructFileDisplay(file)}
                </div>
            ))}
        </div>
    )
}
