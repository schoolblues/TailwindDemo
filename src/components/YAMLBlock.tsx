import { useEffect, useState} from 'react';
import { codeToHtml } from 'shiki';

const sample = ` metadata:
    logo: Avatar_Default.svg
    Notmicrosoft.voice-live.enabled: "false"
object: agent.version
id: Kat:1
Name: Kat
version: "1"
description: ""
created_at: 1778562902
definition:
    kind: prompt
    model: Biggly-Wiggly-7.9-zippy
    instructions: ""
    tools:
        - type: web_search
status: active
instance_identity:
    principal_id: 
    client_id:
blueprint: 
    principal_id:
    client_id:
blueprint_reference:
    type:
    blueprint_id
agent_guid`;

export function YAMLBlock() {
    const [html, setHtml] = useState('');

    useEffect(() => {
        let alive = true;
        codeToHtml(sample, {
            lang: "yaml",
            theme: 'github-dark',
        }).then((out) => {
            if (alive) setHtml(out);
        });
        return () => { alive = false; };
    }, []);

    return (
        <div className="" dangerouslySetInnerHTML={{ __html: html }}></div>
    );
}