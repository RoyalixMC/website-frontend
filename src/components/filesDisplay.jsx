import {useContext, useEffect, useState} from "react";
import * as React from "react";

import {materialDark, materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism';

import SyntaxHighlighter from 'react-syntax-highlighter';

import axios from "axios";
import useTheme from "@theme/hooks/useThemeContext";
import TocContext from "../theme/TocContext";

export default function FilesDisplay(props) {
    const [files, setFiles] = useState([])
    const {isDarkTheme} = useTheme()

    const context = useContext(TocContext)

    const constructFileDisplay = (file) => {
        return (
            <div>
                <h2 id={file.name} style={{
                    color: isDarkTheme ? "white" : "black",
                    padding: '0.3rem',
                    fontSize: "2em",
                    fontWeight: '400'
                }}>
                    {file.path}
                    <a className={"hash-link"} href={`#${file.name}`}>#</a>
                </h2>
                <div>
                    <SyntaxHighlighter language="yaml" style={isDarkTheme ? materialDark : materialLight}>
                        {file.data}
                    </SyntaxHighlighter>
                </div>
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

            const tocs = []
            for (let file of files) {
                const obj = {
                    "value": file.name,
                    "id": file.name,
                    "children": []
                }
                tocs.push(obj)
            }

            context.setToc(tocs)
        })
        return () => {
            unmounted = true
        }
    }, [])

    if (files.length === 0) return <a>Loading</a>

    return (
        <div className="container">
            <div className="files-container">
                {files.map((file, idx) => (
                    constructFileDisplay(file)
                ))}
            </div>
        </div>
    )
}
