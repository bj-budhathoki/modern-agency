interface IProp {
    slogan: string;
    title: string;
}
export const ContainerHeader = ({ slogan, title }: IProp): JSX.Element => {
    return (
        <div>
            <h5 className="text-sm tracking-widest text-red-500 uppercase font-nirmal ">{slogan}</h5>
            <h3 className="my-3 text-4xl font-medium tracking-normal">{title}</h3>
        </div>
    );
};
