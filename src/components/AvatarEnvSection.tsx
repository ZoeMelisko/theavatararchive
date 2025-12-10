

function AvatarEnvSection({src, altText} ) {

    return (
        <div className="">
            <img
                className="w-full h-full object-cover object-top"
                src={src}
                alt={altText}
            />
        </div>
    )
}

export default AvatarEnvSection