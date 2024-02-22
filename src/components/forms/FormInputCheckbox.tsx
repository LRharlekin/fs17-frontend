import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FormInputCheckbox = () => {
  return (
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="Required" />
    </FormGroup>
  );
};

export { FormInputCheckbox };
