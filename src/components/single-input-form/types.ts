export type SingleInputFormProps = {
  buttonText: string;
  handleClick: (text: string) => Promise<void>;
  placeholder?: string;
};
