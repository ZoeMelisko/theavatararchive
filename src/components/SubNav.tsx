import {Link} from "react-router";

function SubNav({ courseName }) {

    return (
        <div className="flex pb-4 text-xl w-full border-b-2 border-primary-200">
            <div className="flex w-4/5 m-auto">
                <div className="flex-1/2 justify-start">
                    <Link to={"/"}>Home</Link>
                </div>
                <div className="flex-1/2 ">
                    <div className="justify-end">
                        <Link to={"/"}> Fall 2025 : {courseName}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubNav
