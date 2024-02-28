import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function MediaCard(job) {
  return (
    <Card className="m-4 border border-gray-200 shadow-6xl">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.job.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.job.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
