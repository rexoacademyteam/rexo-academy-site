
/*
    Caption: Dummy component for nextjs integrations
    @param children:  ReactNode
    @param className: string
    @param href:      string
*/
export default function ({ children, href, className }) {
    return (
        <a href={href} className={className}>
            {children}
        </a>
    )
}
