import { WindowControls } from '#components'
import WindowWrapper from '#hoc/windowWrapper.jsx'
import { photosLinks, gallery } from '#constants'

const Photos = () => {
  return <>
    <div id="window-header">
        <WindowControls target="photos"/>
        <h2>Gallery</h2>
    </div>

    <div className="flex h-full">
        <div className="sidebar">
            <h2>Photos</h2>
            <ul>
                {photosLinks.map(({ id, icon, title }) => (
                    <li key={id}>
                        <img src={icon} alt={title} />
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div className="gallery">
            <ul>
                {gallery.map(({ id, img }) => (
                    <li key={id}>
                        <img src={img} alt={`Gallery photo ${id}`} />
                    </li>
                ))}
            </ul>
        </div>
    </div>
  </>
}

const PhotosWindow = WindowWrapper(Photos, 'photos')

export default PhotosWindow
