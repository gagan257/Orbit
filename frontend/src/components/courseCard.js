const CourseCard=(props)=>{
    const {courseData}=props;
    const {title, avg_rating, image_750x422, headline} = courseData;
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-slate-300">
            <img className="w-[600px] h-[150px] rounded-lg" src={image_750x422}/>
            <h3 className="font-bold py-2 text-lg">{title}</h3>
            <h4>{headline}</h4>
            <h4>{avg_rating}</h4>
        </div>
    );
};
export default CourseCard;