import { useEffect, useState} from 'react';
import { codeToHtml } from 'shiki';
import githubLightHC from 'shiki/themes/github-light-high-contrast.mjs'

const punctuationTheme = {
    ...githubLightHC,
    name: 'github-light-high-contrast-yellow',
    tokenColors: [
        ...githubLightHC.tokenColors ?? [],
        {
            scope: [
                'punctuation.separator.key-value.mapping.yaml',
                               
                'punctuation.definition.string.begin.yaml',
                
                'punctuation.definition.string.end.yaml',
                
                'punctuation.definition.block.sequence.item.yaml', 
                
                'punctuation.definition.mapping.begin.yaml',
                
                'punctuation.definition.mapping.end.yaml',
                
                'punctuation.definition.sequence.begin.yaml',
                
                'punctuation.definition.sequence.end.yaml', 
            ],
            settings: { foreground: '#9900ff' },
        },

        {
             scope: [ 
                'entity.name.tag.yaml' 
            ],
            settings: { foreground: '#1a7f37' },
        },
    ],
};

const sample = `metadata:
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
    blueprint_id:
agent_guid:`;

export function YAMLBlock() {
    const [html, setHtml] = useState('');

    useEffect(() => {
        let alive = true;
        codeToHtml(sample, {
            lang: "yaml",
            theme: punctuationTheme,
            colorReplacements: {                                         
           '#ffffff' : '#cce4f6',
           '#023b95' : '#e60000',
           '#032563' : '#000000'                                                  
        },
        }).then((out) => {
            if (alive) setHtml(out);
        });
        return () => { alive = false; };
    }, []);

    return (
        <div className="yaml-view h-full m-4 [&>pre]:rounded-md [&>pre]:h-full [&>pre]:pt-1" dangerouslySetInnerHTML={{ __html: html }}></div>
    );
}