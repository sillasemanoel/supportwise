// Styles
import { SimpleButtonStyle } from "./style";

type GreetProps = {
  children: React.ReactNode;
};

export default function SimpleButtonComponent(props: GreetProps) {
  return <SimpleButtonStyle>{props.children}</SimpleButtonStyle>;
}

