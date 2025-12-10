import Avatar from "../components/Avatar";
import { useParams} from "react-router";
import data from "../data/classes.json"
import {useState} from "react";

function ClassGallery() {
    const {c} = useParams()
    function isClass(course){
        return course.name == c
    }

        const [courseData, setCourseData] = useState(data ? data.find(isClass) :  {})

    return (
            <>
            { courseData.roster.map((student)=>{
                return  <Avatar key={student.student} c={courseData.name} {...student} />
            })}
            </>

    )
}

export default ClassGallery