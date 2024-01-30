"use client";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Typography level="h1" sx={{ mb: 4 }}>
        Contact Details
      </Typography>
      <Box
        sx={{
          background: "var(--joy-palette-background-level1)",
          width: "100%",
          minHeight: "40px",
          mb: 4,
          boxShadow: "md",
          p: 2,
        }}
      >
        <pre>TODO: Address Form</pre>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <Button
          primary
          sx={{ width: { xs: "100%", sm: "auto" } }}
          onClick={() => alert("submit")}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
}
