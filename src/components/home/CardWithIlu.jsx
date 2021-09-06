function CardWithIlu ({title, desc, svg, reverse}) {
    let styles = {};
    let image_styles = {};

    if(reverse){
        styles = {flexDirection: "row-reverse"};
        image_styles = {transform: "scaleX(-1)"}
    }

    return (
        <div className="card-with-ilu col-sm-12" style={styles}>
            <div className="card-with-ilu-image">
                <img src={svg} alt={title} style={image_styles} />
            </div>
            <div className="card-with-ilu-information">
                <div className="card-with-ilu-information-subdiv">
                    <h3>{title}</h3>
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default CardWithIlu;