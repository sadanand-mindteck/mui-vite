import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface RHFTextFieldProps<T extends FieldValues> extends Omit<TextFieldProps, 'name'> {
  name: FieldPath<T>;
  control: Control<T>;
}

function RHFTextField<T extends FieldValues>({ name, control, ...props }: RHFTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...props}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}

export default RHFTextField;
