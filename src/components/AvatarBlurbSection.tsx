// import data from "../data/classes.json"

function AvatarBlurbSection({img, name, tagline, about, world}) {

    return (
        <div className="text-4xl w-4/5 m-auto">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <div className="mb-10">
                    <div className="text-xxxl font-semibold">
                        {name}
                    </div>
                    <div className="text-lg font-semibold">
                        {tagline}
                    </div>
                </div>
                <div className="mb-10">
                    <div className="border-b-2 mb-4 text-2xl w-full">
                        About
                    </div>
                    <div className="text-base">
                        {about}
                    </div>
                </div>
                <div>
                    <div className="border-b-2 mb-4 text-2xl w-full">
                        World
                    </div>
                    <div className="text-base">
                        {world}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarBlurbSection
