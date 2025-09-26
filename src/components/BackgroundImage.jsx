import background_image01 from '../data/background_image.js'

export default function BackgroundImage() {
    return (
        <img 
            src={background_image01.background_image.image04}
            alt="background_image"
            className="absolute flex-1 object-cover h-full w-full" 
            style={{ zIndex: -2 }}
        />
    )
}