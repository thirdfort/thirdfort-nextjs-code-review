import Box from "@mui/joy/Box";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        p: 4,
        backgroundColor: "var(--joy-palette-background-level3)",
      }}
    >
      {children}
    </Box>
  );
}
