import DefaultArticle from "./DeufaultArticle";
function BestOfInternet(props){
    const articles = [
        {
            "id": "213402",
            "name": "Berlinale 2023: \u0391\u03c0\u03bf\u03ba\u03b1\u03bb\u03cd\u03c6\u03b8\u03b7\u03ba\u03b5 \u03c4\u03bf line up \u03c4\u03bf\u03c5 \u03c6\u03b5\u03c3\u03c4\u03b9\u03b2\u03ac\u03bb \u2013 \u0397 \u03c4\u03b1\u03b9\u03bd\u03af\u03b1 \u03c4\u03bf\u03c5 Sean Penn \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u0396\u03b5\u03bb\u03ad\u03bd\u03c3\u03ba\u03b9 \u03c3\u03b5 \u03b5\u03b9\u03b4\u03b9\u03ba\u03ae \u03c0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae",
            "image_uri": "https:\/\/wcdn.wedia.gr\/sites\/default\/files\/styles\/large\/public\/2023-01\/matej-vittek-q2-CTUqtVX0-unsplash-1024x683.jpg",
            "original_url": "https:\/\/www.monopoli.gr\/2023\/01\/23\/promotional-items\/cine-news\/654215\/berlinale-2023-apokalyfthike-to-line-up-tou-festival-i-tainia-tou-sean-penn-gia-ton-zelenski-se-eidiki-provoli\/?utm_source=gazzetta\u0026utm_medium=boi\u0026utm_campaign=best_of_internet",
            "source": {
                "tid": "27",
                "name": "Monopoli"
            }
        },
        {
            "id": "205225",
            "name": "\u0393\u03b9\u03ce\u03c1\u03b3\u03bf\u03c2 \u039a\u03bf\u03c5\u03bc\u03b5\u03bd\u03c4\u03ac\u03ba\u03b7\u03c2: \u03a3\u03c5\u03bd\u03b8\u03ad\u03c4\u03b7\u03c2 \u03bc\u03b5\u03b3\u03b1\u03bb\u03b5\u03b9\u03c9\u03b4\u03ce\u03bd \u03ad\u03c1\u03b3\u03c9\u03bd",
            "image_uri": "https:\/\/wcdn.wedia.gr\/sites\/default\/files\/styles\/large\/public\/2023-01\/7cd12ed3d78573c05a2adf825b47f370_1R8A5113aaa-1-768x480.jpg",
            "original_url": "https:\/\/impactalk.gr\/el\/stories-talk\/giorgos-koymentakis-synthetis-megaleiodon-ergon?utm_source=gazzetta\u0026utm_medium=boi\u0026utm_campaign=best_of_internet",
            "source": {
                "tid": "28",
                "name": "impactalk"
            }
        },
        {
            "id": "213572",
            "name": "10 \u03c4\u03c1\u03b1\u03b3\u03bf\u03c5\u03b4\u03b9\u03c3\u03c4\u03ad\u03c2 \u03c0\u03bf\u03c5 \u03ad\u03ba\u03b1\u03bd\u03b1\u03bd diss \u03c3\u03b5 \u03c0\u03c1\u03ce\u03b7\u03bd \u03c4\u03bf\u03c5\u03c2 \u03bc\u03ad\u03c3\u03b1 \u03b1\u03c0\u03cc \u03c4\u03b1 \u03c4\u03c1\u03b1\u03b3\u03bf\u03cd\u03b4\u03b9\u03b1 \u03c4\u03bf\u03c5\u03c2 (vids)",
            "image_uri": "https:\/\/wcdn.wedia.gr\/sites\/default\/files\/styles\/large\/public\/2023-01\/SINGERS_COVER-1.jpg",
            "original_url": "https:\/\/www.neopolis.gr\/tragoudistes-pou-ekanan-diss-se-proin\/?utm_source=gazzetta\u0026utm_medium=boi\u0026utm_campaign=best_of_internet",
            "source": {
                "tid": "19",
                "name": "Neopolis"
            }
        },
        {
            "id": "213598",
            "name": "\u03a8\u03b5\u03c5\u03c4\u03bf\u03b3\u03b9\u03b1\u03c4\u03c1\u03cc\u03c2: \u03a4\u03bf \u03c4\u03b1\u03be\u03af\u03b4\u03b9 \u03c4\u03bf\u03c5 \u03c3\u03c5\u03bd\u03b5\u03c1\u03b3\u03bf\u03cd \u03c4\u03bf\u03c5 \u03c3\u03c4\u03bf \u03a7\u03cc\u03bb\u03b9\u03b3\u03bf\u03c5\u03bd\u03c4",
            "image_uri": "https:\/\/wcdn.wedia.gr\/sites\/default\/files\/styles\/large\/public\/2023-01\/pseutogiatros-spiti.jpg",
            "original_url": "https:\/\/www.newsbomb.gr\/ellada\/astynomiko-reportaz\/story\/1391058\/pseftogiatros-to-taksidi-tou-synergoy-tou-sto-xoligount-pos-pernoyse-ta-skevasmata?utm_source=gazzetta\u0026utm_medium=boi\u0026utm_campaign=best_of_internet",
            "source": {
                "tid": "26",
                "name": "Newsbomb"
            }
        },
        {
            "id": "212488",
            "name": "\u0394\u03cd\u03bf \u03c3\u03bf\u03cd\u03c0\u03b5\u03c1 \u0394\u03a9\u03a1\u0391 \u03b5\u03bd\u03c4\u03b5\u03bb\u03ce\u03c2 \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd - \u039c\u03cc\u03bd\u03bf \u03b3\u03b9\u03b1 \u03bb\u03af\u03b3\u03bf!",
            "image_uri": "https:\/\/wcdn.wedia.gr\/sites\/default\/files\/styles\/large\/public\/2023-01\/7%20%281%29.jpg",
            "original_url": "https:\/\/bit.ly\/3GZKrUL?utm_source=gazzetta\u0026utm_medium=boi\u0026utm_campaign=best_of_internet",
            "source": {
                "tid": "22",
                "name": "Kingbet"
            }
        },
        {
            "id": "213529",
            "name": "\u0391\u03c5\u03c4\u03ac \u03c4\u03b1 social media \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af \u03b5\u03bc\u03bc\u03bf\u03bd\u03b9\u03ba\u03ac \u03b7 Generation Z",
            "image_uri": "https:\/\/wcdn.wedia.gr\/sites\/default\/files\/styles\/large\/public\/nathan-dumlao-kLmt1mpGJVg-unsplash.jpg",
            "original_url": "https:\/\/jenny.gr\/409032\/ayta-ta-social-media-hrisimopoiei-emmonika-i-generation-z?utm_source=gazzetta\u0026utm_medium=boi\u0026utm_campaign=best_of_internet",
            "source": {
                "tid": "21",
                "name": "Jenny"
            }
        },
        {
            "id": "213597",
            "name": "\u039c\u03b1\u03c1\u03bf\u03c5\u03c3\u03ac\u03ba\u03b7\u03c2: \u03a0\u03bf\u03bb\u03b9\u03ba\u03ae \u00ab\u03bc\u03c0\u03ac\u03bb\u03b1\u00bb \u03c6\u03ad\u03c1\u03bd\u03b5\u03b9 \u03c3\u03c6\u03bf\u03b4\u03c1\u03ae \u03ba\u03b1\u03ba\u03bf\u03ba\u03b1\u03b9\u03c1\u03af\u03b1",
            "image_uri": "https:\/\/wcdn.wedia.gr\/sites\/default\/files\/styles\/large\/public\/2023-01\/kairos-hionia.jpg",
            "original_url": "https:\/\/www.newsbomb.gr\/kairos\/story\/1391080\/kairos-marousakis-poliki-mpala-fernei-sfodri-kakokairia?utm_source=gazzetta\u0026utm_medium=boi\u0026utm_campaign=best_of_internet",
            "source": {
                "tid": "26",
                "name": "Newsbomb"
            }
        },
        {
            "id": "213067",
            "name": "\u039a\u03bf\u03c1\u03c5\u03c6\u03b1\u03af\u03b1 \u03c0\u03b1\u03c1\u03b1\u03c4\u03c3\u03bf\u03cd\u03ba\u03bb\u03b9\u03b1 \u03c0\u03bf\u03c5 \u03ac\u03c6\u03b7\u03c3\u03b1\u03bd \u03b9\u03c3\u03c4\u03bf\u03c1\u03af\u03b1: O\u2026 Pulga, \u03c4\u03bf \u00ab\u03a6\u03b1\u03b9\u03bd\u03cc\u03bc\u03b5\u03bd\u03bf\u00bb \u03ba\u03b1\u03b9 \u03b7 \u00ab\u03b8\u03b5\u03ca\u03ba\u03ae \u03b1\u03bb\u03bf\u03b3\u03bf\u03bf\u03c5\u03c1\u03ac\u00bb",
            "image_uri": "https:\/\/wcdn.wedia.gr\/sites\/default\/files\/styles\/large\/public\/2023-01\/Ronaldo%20%281%29.jpg",
            "original_url": "https:\/\/sports.bwin.gr\/el\/news\/football\/koryfaia-paratsouklia-pou-afhsan-istoria-pulga-fainomeno\/?wm=4543859?utm_source=gazzetta\u0026utm_medium=boi\u0026utm_campaign=best_of_internet",
            "source": {
                "tid": "17",
                "name": "Bet"
            }
        },
        {
            "id": "213401",
            "name": "\u0397 \u03bc\u03c5\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03ae \u03c4\u03b5\u03bb\u03b5\u03c4\u03ae \u03c4\u03bf\u03c5 \u0395\u03c5\u03c1\u03b9\u03c0\u03af\u03b4\u03b7 \u039b\u03b1\u03c3\u03ba\u03b1\u03c1\u03af\u03b4\u03b7 \u03c3\u03c4\u03b7\u03bd \u0395\u03bb\u03b5\u03c5\u03c3\u03af\u03bd\u03b1",
            "image_uri": "https:\/\/wcdn.wedia.gr\/sites\/default\/files\/styles\/large\/public\/2023-01\/DSC00585-2048x1368.jpg",
            "original_url": "https:\/\/www.monopoli.gr\/2023\/01\/23\/reviews\/eidame-parastaseis\/654065\/i-mystiriaki-teleti-tou-eyripidi-laskaridi-stin-eleysina\/?utm_source=gazzetta\u0026utm_medium=boi\u0026utm_campaign=best_of_internet",
            "source": {
                "tid": "27",
                "name": "Monopoli"
            }
        }
    ]

    return(
        <div style={{display:"flex"}}>
            <DefaultArticle alt={articles[0].name} src={articles[0].image_uri} url={articles[0].original_url} title={articles[0].name}></DefaultArticle>
            <DefaultArticle alt={articles[1].name} src={articles[1].image_uri} url={articles[1].original_url} title={articles[1].name}></DefaultArticle>
            <DefaultArticle alt={articles[2].name} src={articles[2].image_uri} url={articles[2].original_url} title={articles[2].name}></DefaultArticle>
        </div>
        )
}
export default BestOfInternet;