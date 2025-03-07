import self from "../img/self.png"
import mock1 from "../img/alfred.jpeg"
import mock2 from "../img/somas.png"
import mock3 from "../img/peerstream.jpeg"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgba(0,43,54,1)", "#eee8d5"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mete",
    lastName: "Karasakal",
    initials: "MK", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Junior Blockchain and Web3 Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[1],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '💻',
            text: 'Full Stack Web2 Developer'
        },
        {
            emoji: '🌎',
            text: 'based in TRNC'
        },
        {
            emoji: "📖",
            text: "studying Computer Engineering in METU NCC"
        },
        {
            emoji: "📧",
            text: "karasakal99@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://karasakalmt.github.io/",
            icon: "fa fa-file"
        },
        {
            link: "https://github.com/karasakalmt",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/mete-karasakal-808449176",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com/karasakalmt",
            icon: "fa fa-twitter"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Mete. I'm a junior web3 and blockchain developer, and full-stack web3 developer. I study computer engineering in METU NCC, I am enthusiastic of learning new technologies and using them. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'nodejs', 'react', 'solidity', 'git', 'html5', 'css3', 'python', 'c', 'express.js', 'flask', 'web3.js', 'sql-nosql-dbs', 'nestjs'],
            exposedTo: ['c++', 'java', 'haskell', 'verilog', 'prolog']
        }
    ,
    hobbies: [
        {
            label: 'winter sports',
            emoji: '🏂'
        },
        {
            label: 'camping',
            emoji: '🔥'
        },
        {
            label: 'water sports',
            emoji: '🤿'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Alfred",
            source: "https://github.com/karasakalmt/Alfred", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "PeerStream",
            source: "https://github.com/peer-stream/PeerStream",
            image: mock3
        },
        {
            title: "SOMAS",
            source: "https://github.com/karasakalmt/SOMAS-Society-Management-System",
            image: mock2
        },
    ]
}