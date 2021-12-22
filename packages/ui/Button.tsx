import { 
  Button as ChackraButton, 
  ButtonProps 
} from '@chakra-ui/react';

export const Button = ({children, ...rest}: ButtonProps) => {
  console.log(children)
  return <ChackraButton {...rest}>{children}</ChackraButton>;
};
