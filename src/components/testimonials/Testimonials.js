import "./testimonials.scss"
export default function Testimonials() {




    const data = [
        {
            id: 1,
            name: "Nathan Jones",
            title: "Digital Technology Devilery 1 @ DTE Energy",
            desc: "Chris has been an integral part of our team and contributed greatly to our success with the client. He's a solid developer and a great teammate. He consistently delivers high quality work in a timely manner and understands the business processes behind our technology."

        },
        {
            id: 2,
            name: "Michael Rhodas",
            title: "Technical Lead @ DTE Energy",
            desc: "“Chris has been an excellent asset to the DTE client for well over a year now. He demonstrate on a daily basis strong development skills and the ability to complete complicated work quickly. Chris has been able to work on several project over the year with DTE in which he has sharpened his React skills to a high proficiency. He has learned clean code practices with our code base standards and adopts them in his daily work. Not only that he also mentors others and teaches these standards regularly. We have a new project with our client and I hand selected Chris to work on that project because I know he is dependable and will get the work done to a high standard fast.”",
            featured: true
            
        },
        {
            id: 3,
            name: "Prateek Jena",
            title: "Senior Front End Developer @ DTE Energy",
            desc: `I worked with Chris in DTE, He is focused and goal orientated, He juggled multiple projects at ease providing perfect solutions, His work ethics and problem solving skills are commendable. He is a key asset for DTE 2024's success.`,
        },
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1 className="title"> Testimonials </h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card" }>

                        <div className="bottom">
                            <h3> {d.name} </h3>
                            <h4>  {d.title} </h4>
                        </div>
                        <div className="center"> {d.desc} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}