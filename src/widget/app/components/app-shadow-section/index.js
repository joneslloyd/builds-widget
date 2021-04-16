import register from 'preact-custom-element';

const AppShadowSection = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

register(AppShadowSection, 'app-shadow-section', [], { shadow: true });

export default AppShadowSection;