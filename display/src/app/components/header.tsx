interface HeaderProps {
    title: string;
}

const Header:React.FC<HeaderProps> = ({title}) => {
    return (
        <h1 className="text-4xl text-white font-mono">
                &#60; {title} /&#62;
        </h1>
    )
}

export default Header;