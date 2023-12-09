// Styles
import { FormStyle } from "./style";

type GreetProps = {
  title: string;
  error: React.ReactNode;
  children: React.ReactNode;
};

export default function FormComponent(props: GreetProps) {
  return (
    <FormStyle>
      <div>
        <h4>{props.title}</h4>
        {props.error}
      </div>
      {props.children}
    </FormStyle>
  );
}
