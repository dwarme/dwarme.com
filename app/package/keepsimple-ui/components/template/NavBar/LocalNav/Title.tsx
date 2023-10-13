import { TitleProps } from "../../../../types/localnav";

const Title: React.FC<TitleProps> = ({title, link}) => {
    return (
        <span className="localnav-title">
            <a href={link}>{title}</a>
        </span>
    );
}

export default Title;