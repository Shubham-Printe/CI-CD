/**
 * Local type shim for react-hook-form (package dist types reference missing ../src paths).
 * Remove this file when the package fixes its declarations.
 */
import type { ComponentType } from "react";

declare module "react-hook-form" {
  export type FieldError = {
    message?: string;
    type?: string;
    ref?: { name?: string };
  };

  export type FieldValues = Record<string, unknown>;
  // Generic kept for API compatibility with useForm<T> / Controller
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- shim type
  export type Control<TFieldValues extends FieldValues = FieldValues> = unknown;

  export type UseFormReturn<TFieldValues extends FieldValues = FieldValues> = {
    register: (name: string, options?: unknown) => Record<string, unknown>;
    handleSubmit: (
      onValid: (data: TFieldValues) => void | Promise<void>
    ) => (e?: React.BaseSyntheticEvent) => void;
    control: Control<TFieldValues>;
    formState: { errors: Partial<Record<string, FieldError>> };
  };

  export function useForm<TFieldValues extends FieldValues = FieldValues>(
    props?: unknown
  ): UseFormReturn<TFieldValues>;

  export type ControllerRenderProps = {
    field: {
      value: unknown;
      onChange: (value: unknown) => void;
      onBlur: () => void;
      ref: (instance: unknown) => void;
    };
  };

  export type ControllerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends string = string,
  > = {
    name: TName;
    control: Control<TFieldValues>;
    render: (props: ControllerRenderProps) => React.ReactElement;
  };

  export const Controller: ComponentType<ControllerProps>;
}
