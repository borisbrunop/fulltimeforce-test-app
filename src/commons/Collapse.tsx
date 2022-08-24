import Collapsible from 'react-collapsible';

interface CollapseTypes {
    children: JSX.Element,
    title: string | JSX.Element
}

export const CollapseComponent = ({ children, title }: CollapseTypes) => {
    return (
        <Collapsible trigger={title}>
            {children}
        </Collapsible>
    )
}