import bannerImg from './Component/images/down.jpg';

function banner(){
    return(
        <>
        <section className="banner">
            <div className="banner-bg-box">
                <img src={bannerImg} alt="banner"></img>
            </div>
        </section>
        </>
        
    );

}

export default banner;