import { useMemo } from 'preact/hooks';
import tw from 'twin.macro';
import { useStyled } from '../../lib/context/goober';
import { parseStyles } from '../../lib/helpers';
import ContentSquareStyles from '../../styles/components/content-square';

const ContentSquare = ({ letter = false, wh = 16, children, loading = true, noBg = false, ...rest }) => {

    const styled = useStyled();

    const ContentSquareLetterSpan = useMemo(() => {
        return styled('span')(() => {
            return parseStyles([
                tw`flex justify-center items-center h-full`,
            ]);
        });
    }, [styled]);

    return (
        <ContentSquareStyles letter={letter} wh={wh} loading={loading} noBg={noBg} {...rest}>
            <ContentSquareLetterSpan>{children}</ContentSquareLetterSpan>
        </ContentSquareStyles>
    );
};

export default ContentSquare;