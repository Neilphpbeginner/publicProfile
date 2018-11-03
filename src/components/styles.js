export const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    display: "flex",
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 11,
    padding: theme.spacing.unit * 5
  },
  toolbar: theme.mixins.toolbar,
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  aboutWidth: {
    display: "flex",
    width: theme.zIndex.drawer,
    height: 35
  },
  link: {
    textDecoration: "none"
  }
});
