import tw from 'twin.macro';

const BrandNameStyles = tw('a')`normal-case text-white`;

const BrandName = () => {

    return (
        <BrandNameStyles href="https://mobalytics.gg" target="_blank" title="Mobalytics" dangerouslySetInnerHTML={{ __html: '<strong>MOB</strong>ALYTICS.gg' }} />
    );
};

export default BrandName;