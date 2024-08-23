import { Styles } from "./Styles";

interface IButton {
    onClick: () => void;
}

export const Button = ({ onClick }: IButton) => {
    return <Styles onClick={onClick}>ENTRAR</Styles>;
};
