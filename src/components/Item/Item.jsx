import React, { useCallback, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
}));

export const Item = ({ item, setSearch }) => {
  const topicRef = useRef("");

  const searchSpecificTopic = useCallback(() => {
    setSearch(topicRef.current.innerHTML);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" ref={topicRef} onClick={searchSpecificTopic}>
          {item.name}
        </Typography>
        <Typography variant="h6">
          {`🌟`} {item.stargazerCount}
        </Typography>
      </CardContent>
    </Card>
  );
};
