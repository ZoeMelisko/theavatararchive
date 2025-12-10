import NavBar from "../components/NavBar.tsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import data from "../data/classes.json";
import AvatarBlurbSection from "../components/AvatarBlurbSection.tsx";
import AvatarEnvSection from "../components/AvatarEnvSection.tsx";
import AvatarConnectionSection from "../components/AvatarConnectionSection.tsx";
import Title from "../components/Title.tsx";
import SubNav from "../components/SubNav.tsx";

function ProfilePage(props) {
    const {c, a} = useParams()
    function isClass(course){
        return course.name == c
    }

    // console.log(c)
    // console.log(a)
    const [courseData, setCourseData] = useState(data ? data.find(isClass) :  {})

    function isAvatar(student){
        return student.avatar.name == a
    }


    const [studentData, setStudentData] = useState(courseData ? courseData.roster.find(isAvatar) :  {})


    useEffect(() => {console.log(studentData)},[studentData])
    return (
        <>
            <Title />
            <SubNav courseName={data.course.name} />
            <AvatarBlurbSection
                img={studentData.avatar360Gif.file}
                name={studentData.avatar.name}
                tagline={studentData.avatar.tagline}
                about={studentData.avatar.about}
                world={studentData.avatar.world}
            />
            <AvatarEnvSection
                src={studentData.avatarEnvImg.file}
                altText={studentData.avatarEnvImg.altText}
            />
            <AvatarConnectionSection
                student={studentData.name}
                quote={studentData.avatar.connection}
            />
        </>
    )
}

export default ProfilePage