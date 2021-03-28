import * as http from "http";
import * as React from "react";
import {useEffect, useState} from "react";

import useTheme from "@theme/hooks/useThemeContext";
import axios from "axios";

export default function VersionButton(props) {
    const [version, setVersion] = useState(null)
    const {isDarkTheme} = useTheme()

    const requestVersion = async () => {
        return await axios.get(`http://localhost:8000/versions/${props.id}`)
            .then(res => res.data)
    }

    useEffect(() => {
        let unmounted = false
        requestVersion().then(version => {
            if (unmounted) return
            setVersion(version)
        })
        return () => {
            unmounted = true
        }
    }, [])

    if (version == null) return <a>Loading</a>

    return <a style={{
        color: isDarkTheme ? "white" : "black",
        padding: '0.3rem',
        fontWeight: '400'
    }}>{version}</a>;
}

