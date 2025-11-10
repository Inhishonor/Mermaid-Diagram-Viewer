import mermaid from 'mermaid';
import { 
    DIAGRAM_PRIMARY_COLOR, 
    DIAGRAM_TERTIARY_COLOR, 
    DIAGRAM_SECONDARY_COLOR, 
    DIAGRAM_TEXT_COLOR,
    DIAGRAM_LINE_COLOR
} from '../src/constants.ts'; 

function initializeMermaid() {
    mermaid.initialize({ 
        startOnLoad: true,
        theme: 'base',  
        themeVariables: {
            primaryColor: DIAGRAM_PRIMARY_COLOR,
            primaryTextColor: DIAGRAM_TEXT_COLOR,
            secondaryColor: DIAGRAM_SECONDARY_COLOR,
            tertiaryColor: DIAGRAM_TERTIARY_COLOR,
            lineColor: DIAGRAM_LINE_COLOR,
            primaryBorderColor: DIAGRAM_LINE_COLOR
        } 
    });
}

initializeMermaid();
