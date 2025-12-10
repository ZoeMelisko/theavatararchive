import Avatar from "./Avatar.tsx";

function AvatarConnectionSection({quote, student}) {

    return (
        <div className=" ">
            <div className="p-40">
                {/*<Avatar  />*/}
            </div>
            <div className="flex flex-col justify-center">
                <div className="text-xl font-semibold uppercase mb-6">
                    My Connection
                </div>
                <div className="text-xxl pr-40">
                    "{quote}"
                </div>
                <div>
                    -- {student}
                </div>
            </div>
        </div>
    )
}

export default AvatarConnectionSection