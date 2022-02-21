import { useEffect } from "preact/hooks"

const Stat = ({title, content, ...rest}) => {
    return (
        <div className="stat flex flex-column" {...rest}>
            <div className="header">
                {title}
            </div>
            <div className="content">
                {replaceWithNBSP(content)}
            </div>
        </div>
    )
}

export default Stat