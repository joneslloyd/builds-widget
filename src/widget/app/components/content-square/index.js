import tw from 'twin.macro';
import ContentSquareStyles from '../../styles/components/content-square';

const ContentSquareLetterSpan = tw.span`flex justify-center items-center h-full`;

const ContentSquare = ({ letter = false, wh = 16, children, loading = true, noBg = false, ...rest }) => {

    return (
        <ContentSquareStyles letter={letter} wh={wh} loading={loading} noBg={noBg} {...rest}>
            <ContentSquareLetterSpan>{children}</ContentSquareLetterSpan>
        </ContentSquareStyles>
    );
};

export default ContentSquare;