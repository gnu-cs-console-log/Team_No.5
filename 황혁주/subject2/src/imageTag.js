function imageTag(number){
 let imageCount = "./assets/"+number+".jpg";
 console.log(imageCount);
    return (
        <>
        <img id="image" src={imageCount} alt=""></img>
        </>
    );
}

export default imageTag;