import { useEffect } from "preact/hooks"

const Stat = ({title, content, ...rest}) => {
    const replaceWithNBSP = (str) => {
        if (typeof str === 'string') {
            if (str === '' || str.charCodeAt(0) === 32) {
                return <>&nbsp;</>
            }
        }
        return str
    }

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