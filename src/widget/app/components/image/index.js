import tw, { styled } from 'twin.macro';

const Image = ({ src, alt, title, width, height, rounded = false }) => {

    const ImageStyles = styled.img(({ rounded }) => [
        tw`flex`,
        rounded === true && tw`rounded-full`,
    ]);

    return (
        <>
            <ImageStyles src={src} alt={alt} title={title} width={width} height={height} rounded={rounded} />
        </>
    );
};

export default Image;