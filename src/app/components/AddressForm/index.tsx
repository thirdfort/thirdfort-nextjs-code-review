import React from "react";
import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";

export default function AddressForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiInput-root": { my: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <FormControl>
          <FormLabel sx={{ color: "black" }}>Name</FormLabel>
          <FormHelperText>Please enter a name</FormHelperText>
          <Input
            required
            name="name"
            defaultValue=""
            placeholder="Enter a name"
            fullWidth
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ color: "#444" }}>Line 1</FormLabel>
          <Input
            required
            name="line1"
            defaultValue=""
            placeholder="Enter line 1"
            fullWidth
            sx={{ ml: 1 }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ color: "#000" }}>Line 2</FormLabel>
          <Input
            name="line2"
            defaultValue=""
            placeholder="Enter line 2"
            fullWidth
            sx={{ ml: 1 }}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ color: "rgba(0, 0, 0, 0.9)" }}>Postcode</FormLabel>
          <Input
            required
            name="line1"
            defaultValue=""
            placeholder="Enter postcode"
            fullWidth
            sx={{ ml: 1 }}
          />
        </FormControl>
      </div>
    </Box>
  );
}
