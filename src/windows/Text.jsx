import WindowControls from '#components/WindowControls.jsx';
import WindowWrapper from '#hoc/windowWrapper.jsx';
import useWindowStore from '#store/window.js';

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return <>
        <div id="window-header">
            <WindowControls target="txtfile" />
            <h2>{name}</h2>
        </div>

        <div className="p-5 space-y-6 bg-white">
            {image && <img src={image} alt={name} />}
            {subtitle && <h3>{subtitle}</h3>}

            {description?.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
        </div>
    </>
}

const TextWindow = WindowWrapper(Text, 'txtfile')

export default TextWindow
