const drawerWidth = 120;

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
    link: {
        textDecoration: 'none'
    },
    profileGitHub: {
        float: 'right',
        margin: 5
    },
    spaceBetweenIcons: {
        padding: 7
    },
    listItems: {
        paddingLeft: 40
    }
});
