export type SingleInputFormProps = {
  buttonText: string;
  handleClick: (text: string) => Promise<void>;
  initialValue?: string;
  placeholder?: string;
};
