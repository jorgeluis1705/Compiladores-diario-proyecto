import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import { format } from "date-fns";
import { es } from "date-fns/esm/locale";
import { FC, Fragment, useState } from "react";
import { Classes } from "../../models/clases";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "52%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const ClassescarComponent: FC<{ item: Classes }> = ({
  item,
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Fragment>
      <Grid
        sx={{
          minHeight: 600,
          marginTop: 10,
        }}
        onClick={handleOpen}
        item
        xs={12}
        md={4}
        lg={6}
      >
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={item.image}
              alt="Imagen relacionada"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Clase {item.id + ": "}
                {format(new Date(item.date), "MMMM dd yyyy", {
                  locale: es,
                })}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {item.content + " ..."}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={item.image}
                alt="Imagen relacionada"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Clase {item.id}
                  {format(new Date(item.date), "MMMM dd yyyy", {
                    locale: es,
                  })}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Modal>
    </Fragment>
  );
};
