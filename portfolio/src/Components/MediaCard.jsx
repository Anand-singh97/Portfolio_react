import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  const { title, liveUrl, src, code, description } = props;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={src} title="green iguana" />
        <CardContent>
          <Typography
            className=" border-b-[1px]"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            className="flex flex-col gap-2 overflow-scroll h-[15rem]"
            variant="body2"
            color="text.secondary"
          >
            {description.map((element) => {
              return (
                <div className=" text-[1.2rem]">
                  <p className=" font-semibold">{element.heading}</p>
                  <p>{element.explained}</p>
                </div>
              );
            })}
          </Typography>
        </CardContent>
        <CardActions>
          {liveUrl ? (
            <div>
              <div
                className="inline mr-3 px-6 py-3 rounded-md 
                        bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                <Button
                  style={{ color: "white" }}
                  href={liveUrl}
                  rel="noreferrer"
                  target="_blank"
                  size="medium"
                >
                  View Live
                </Button>
              </div>
              <div
                className="inline mr-3 px-6 py-3 rounded-md 
                        bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                <Button
                  style={{ color: "white" }}
                  href={code}
                  rel="noreferrer"
                  target="_blank"
                  size="medium"
                >
                  Code
                </Button>
              </div>
            </div>
          ) : (
            <div
              className="inline px-6 py-1 rounded-md 
                        bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              <Button
                style={{ color: "white" }}
                href={code}
                rel="noreferrer"
                target="_blank"
                size="medium"
              >
                Code
              </Button>
            </div>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
