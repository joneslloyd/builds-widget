import tw from 'twin.macro';

const ImageStyles = tw.img`flex`;

const Image = ({ src, alt, title, width, height }) => {

    return (
        <>
            <ImageStyles src={src} alt={alt} title={title} width={width} height={height} />
        </>
    );
};

export default Image;