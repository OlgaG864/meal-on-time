interface Props {
    text: string;
}

function Title(props: Props) {
    return (
        <h1 className="text-center m-3">{props.text}</h1>
    );
}

export default Title;