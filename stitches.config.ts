import { createStitches } from "@stitches/react";
import { sand, indigo, indigoDark, bronze, sandDark, bronzeDark } from '@radix-ui/colors'

export const { styled, css, globalCss, getCssText, keyframes, createTheme } = createStitches({
    prefix:'light-cream',
    theme: {
        colors: {
            // ...sand,
            background: sand.sand1,
            foreground: sand.sand7,
            foregroundBorder: sand.sand8,
            highlight: sand.sand3,
            foregroundText: sand.sand9,
            text: sand.sand12,
            //bronze
            backgroundBronze: bronze.bronze1,
            foregroundBronze: bronze.bronze7,
            foregroundTintBronze: bronze.bronze5,
            highlightBronze:bronze.bronze3,
            foregroundTextBronze: bronze.bronze9,
            textBronze: bronze.bronze12
        },
        space: {
            0: "4px",
            1: "8px",
            2: "16px",
            3: "24px",
            4: "32px",
            5: "48px",
        },
        fontSizes: {
            6: "0.8rem",
            5: "1.25rem",
            4: "1.563rem",
            3: "1.953rem",
            2: "2.441rem",
            1: "3.052rem",
            p: "1rem",
        },
        fonts: {
            default: "Satoshi-Variable, Inter, Helvetica, sans-serif",
        },
        fontWeights: {
            min:300,
            max:900,
        },
        lineHeights: {
            1: "125%",
            2: "120%",
            3: "96%",
            4: "102%",
            5: "102%",
            6: "98%",
            p: "156%;",
        },
        letterSpacings: {},
        sizes: {
            0: "4px",
            1: "8px",
            2: "16px",
            3: "24px",
            4: "32px",
            5: "48px",
            6: "96px",
            7: "124px",
        },
        borderWidths: {},
        borderStyles: {},
        radii: {
            1: "4px",
            2: "8px",
            round: "9999px",
        },
        shadows: {
            normal: `0px 2px 4px rgba(224,206,199, 0.5)`,
        },
        zIndices: {},
        transitions: {
            fontWeight:'.45s ease-out',
            all: "all 0.8s ease-out",
            color: "color 0.8s ease-out",
            background: "background 0.8s ease-out, color 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        },
    },
    media: {
        dark: "(prefers-color-scheme: dark)",
        bp1: "(max-width: 544)",
        bp2: "(max-width: 544), (min-width: 768px)",
        bp3: "(min-width: 1024px)",
    },
});

export const lightThemePlain =  createTheme('light-plain', {
       colors: {
            // ...sand,
            background: sand.sand1,
            foreground: sand.sand9,
            foregroundBorder: sand.sand8,
            highlight: sand.sand3,
            foregroundText: sand.sand9,
            text: sand.sand12,
            //bronze
            backgroundBronze:  sand.sand1,
            foregroundBronze: sand.sand9,
            foregroundTintBronze: sand.sand5,
            highlightBronze:  sand.sand3,
            foregroundTextBronze: sand.sand9,
            textBronze: sand.sand12,
        },
});



export const lightThemeBlue =  createTheme('light-blue', {
       colors: {
            // ...sand,
            background: sand.sand1,
            foreground: sand.sand9,
            foregroundBorder: sand.sand8,
            highlight: sand.sand3,
            foregroundText: sand.sand9,
            text: sand.sand12,
            //bronze
            backgroundBronze:  indigo.indigo1,
            foregroundBronze: indigo.indigo9,
            foregroundTintBronze:indigo.indigo5,
            highlightBronze: indigo.indigo3,
            foregroundTextBronze: indigo.indigo9,
            textBronze: indigo.indigo12,
        },
});



export const darkThemePlain= createTheme('dark-plain', {
       colors: {
            // ...sand,
            background: sandDark.sand1,
            foreground: sandDark.sand9,
            foregroundBorder: sandDark.sand8,
            highlight: sandDark.sand3,
            foregroundText: sandDark.sand9,
            text: sandDark.sand12,
            //bronze
            backgroundBronze:  sandDark.sand1,
            foregroundBronze: sandDark.sand9,
            foregroundTintBronze:sandDark.sand5,
            highlightBronze: sandDark.sand3,
            foregroundTextBronze: sandDark.sand9,
            textBronze: sandDark.sand12,
        },
});


export const darkTheme = createTheme('dark-blue', {
       colors: {
            // ...sand,
            background: sandDark.sand1,
            foreground: sandDark.sand8,
            foregroundBorder: sandDark.sand8,
            highlight: sandDark.sand3,
            foregroundText: sandDark.sand9,
            text: sandDark.sand12,
            //bronze
            backgroundBronze: indigoDark.indigo1,
            foregroundTintBronze: indigoDark.indigo5,
            foregroundBronze: indigoDark.indigo8,
            highlightBronze:indigoDark.indigo3,
            foregroundTextBronze: indigoDark.indigo9,
            textBronze: indigoDark.indigo12
        },
});

export const fontWeightAnimation = keyframes({
    '0%': { fontWeight: '$min' },
    '100%': { fontWeight: '$max' },
});


//font weights are from 300???900 
export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        fontSize: "16px",
        fontWeight:'300',
        fontFamily: "Inter, Helvetica, sans-serif",
        '::selection':{
            background:'$foregroundBronze',
        }
    },
    "body":{background:'$background'},
    "body, html, #__next": { minHeight: "100%", height: "100%" },
    h1: { fontSize: "$1",  letterSpacing:'-1px', fontKerning:'normal', fontStretch:'semi-condensed', fontOpticalSizing:'auto', WebkitFontSmoothing:'antialiased', lineHeight: "$6", fontWeight: "500",  margin:'calc($4 * 1) 0 $3 0', fontFamily:'Satoshi-Variable, Inter, Helvetica, sans-serif' },
    h2: { fontSize: "$2", lineHeight: "$5", fontWeight: "500", margin:'calc($4 * 1.5) 0 $2 0',fontFamily:'Satoshi-Variable, Inter, Helvetica, sans-serif', '&:first-child':{margin:'calc($2 * 1.5) 0 $2 0'} },
    h3: { fontSize: "$3", lineHeight: "$4", margin:'$4 0 $2 0', fontWeight: "500",fontFamily:'Satoshi-Variable, Inter, Helvetica, sans-serif', '&:first-child':{margin:'$2 0 $2 0'} },
    h4: { fontSize: "$4", lineHeight: "$3",   margin:'$4 0 $2 0', fontWeight: "500",fontFamily:'Satoshi-Variable, Inter, Helvetica, sans-serif', '&:first-child':{margin:'$2 0 $2 0'}},
    h5: { fontSize: "$5", lineHeight: "$2",  margin:'$4 0 $2 0', fontWeight: "500",fontFamily:'Satoshi-Variable, Inter, Helvetica, sans-serif', '&:first-child':{margin:'$2 0 $2 0'} },
    p: { fontSize: "$p", lineHeight: "$p",  margin:'$2 0', fontWeight: "300", '&:first-child':{margin:'0 0 $2 0'} },
    span: { fontSize: "$p", lineHeight: "$p", fontWeight: "300" },
    b: {
        fontWeight: "700",
        fontSize:'inherit'
    },
    i:{
        fontSize:'inherit'
    },
    strong: {
        fontWeight: "700",
        fontSize:'inherit'
    },
    hr: {
        border: 0,
        height: "1px",
        margin: "0",
        padding: "0",
    },
   '@font-face': [{
    fontFamily: 'Satoshi-Variable',
    src: 
    "url('/fonts/fonts/Satoshi-Variable.woff2') format('woff2'),"+
    "url('/fonts/fonts/Satoshi-Variable.woff') format('woff')," +
    "url('/fonts/fonts/Satoshi-Variable.ttf') format('truetype')",
    fontWeight: '300 900',
    fontDisplay: 'swap',
    fontStyle: 'normal'
    },
    {
    fontFamily: 'Inter',
    src: 
    "url('/fonts/fonts/Inter-Regular.woff2') format('woff2'),"+
    "url('/fonts/fonts/Inter-Regular.woff') format('woff')," +
    "url('/fonts/fonts/Inter-Regular.ttf') format('truetype')",
    fontWeight: '300',
    fontDisplay: 'swap',
    fontStyle: 'normal'
    },
],
});