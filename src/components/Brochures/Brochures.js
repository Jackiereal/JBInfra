import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      marginBottom:'50px ',
    },
})

export const Brochures = ()=>{
    const classes = useStyles();
    return (
        <div classes={classes.root}>
            <embed src="sample.pdf" width="100%" height="1200" />
        </div>
    )
}