// Styles
import { DescriptionStyle } from "./style";

type GreetProps = {
  h1: string;
  p: string;
};

export default function DescriptionComponent(props: GreetProps) {
  return (
    <DescriptionStyle>
      <h1>{props.h1}</h1>
      <p>{props.p}</p>
    </DescriptionStyle>
  );
}
