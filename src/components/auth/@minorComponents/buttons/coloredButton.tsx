// Styles
import { ColoredButtonStyle } from "./style";

type GreetProps = {
  children: React.ReactNode;
};

export default function ColoredButtonComponent(props: GreetProps) {
  return <ColoredButtonStyle>{props.children}</ColoredButtonStyle>;
}

