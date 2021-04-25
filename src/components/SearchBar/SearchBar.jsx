import React, { useCallback, useRef, useState } from "react";
import { useTopics } from "../../hooks/useTopics";
import { Item } from "../Item/Item";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchInputTextField = useRef(null);
  const { topic, loading } = useTopics(search);
  const classes = useStyles();

  const searchTopics = useCallback(() => {
    setSearch(searchInputTextField.current.value);
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <TextField
              id="standard-basic"
              label="Search"
              defaultValue="react"
              inputRef={searchInputTextField}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<SearchIcon />}
              onClick={searchTopics}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            {loading === true ? (
              <CircularProgress />
            ) : (
              <div>
                {search !== "" && topic.length > 0 ? (
                  <p>
                    {`Topics related to `}
                    <b>{search}</b>
                  </p>
                ) : (
                  <p>
                    <b>{`No results`}</b>
                  </p>
                )}
                {topic.map((item) => (
                  <Item key={item.id} item={item} setSearch={setSearch} />
                ))}
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};
