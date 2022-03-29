import { marked } from "marked";

export const renderMardown = (mardownData: string) => {
    const rawMarkup = marked(mardownData, {sanitize: false});
    return { __html: rawMarkup };
}

export const getHighlights = (highlights: string[]) => {
    return highlights.map((item) => {
        return (
            <li key={item} >
                <span className="label">{item}</span>
            </li>
        );
    });
}