const drawerWidth = 200;

export const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        paddingLeft: 20,
        paddingTop: 80,
    },
    toolbar: theme.mixins.toolbar,
    cvHeading: {
        textAlign: 'center',
    },
    cvLinks: {
        textAlign: 'center',
        marin: 700
    },
    link: {
        textDecoration: 'none'
    },
    profileGitHub: {
        float: 'right'
    }
});
