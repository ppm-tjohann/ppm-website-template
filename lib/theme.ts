import { createTheme } from '@mui/material'



let theme = createTheme( {} )

// DEFAULT PROPS
theme = createTheme( theme, {
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'xl',
            },
        },

        MuiGrid: {
            defaultProps: {
                spacing: 6,
            },

        },
    },
} )

export default theme
