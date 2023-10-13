import { ReactNode } from "react";
import Content from "./Content";

interface SectionProps{
    className?: string;
    children?: ReactNode;
}
const Section: React.FC<SectionProps> & {Content: typeof Content} = ({className, children})=>{
    return (
        <section className={`section ${className ?? ''}`}>
            {children}
        </section>
    )
}

Section.Content = Content;
export default Section;