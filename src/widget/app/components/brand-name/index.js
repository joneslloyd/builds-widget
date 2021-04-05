import tw from 'twin.macro';

const BrandNameStyles = tw('span')`text-white`;

const BrandName = () => {

    return (
        <BrandNameStyles dangerouslySetInnerHTML={{ __html: '<strong>MOB</strong>ALYTICS.gg' }} />
    );
};

export default BrandName;