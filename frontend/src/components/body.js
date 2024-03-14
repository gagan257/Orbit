import CourseCard from "./courseCard";
import { useState, useEffect } from "react";
const Body = () => {
    const [courseList, setCourseList] = useState([]);
    useEffect(() => { fetchData(); }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.udemy.com/api-2.0/discovery-units/all_courses/?page_size=16&subcategory=&instructional_level=&lang=&price=&duration=&closed_captions=&subs_filter_type=&subcategory_id=8&source_page=subcategory_page&locale=en_US&currency=inr&navigation_locale=en_US&skip_price=true&sos=ps&fl=scat");
        const json = await data.json();
        setCourseList(json?.unit.items);
    };
    return (
        <div>
            <div className="flex flex-wrap" >
                {courseList.map((item) => (
                    <CourseCard courseData={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};
export default Body;