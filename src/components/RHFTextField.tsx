import { Controller, FieldValues, FieldPath, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface RHFTextFieldProps<T extends FieldValues> extends Omit<TextFieldProps, 'name' | 'control'> {
  name: FieldPath<T>;
}

function RHFTextField<T extends FieldValues>({ name, ...props }: RHFTextFieldProps<T>) {
  const { control } = useFormContext<T>();
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
