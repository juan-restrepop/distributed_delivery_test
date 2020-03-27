# On the candidate
* Name: Juan Restrepo
* email: juan.restrepop@gmail.com
* LinkedIn profile: [here](https://fr.linkedin.com/in/juan-sebastian-restrepo-a3320a86/en)
* In a sentence: PhD in theoretical quantum optics with a three and a half year experience as a fullstack web developper.

# Context
I know how hard it can be to evaluate a piece of code without further information on the context where it was developed. I would like to summarize here what I had in mind while coming up with a solution for the proposed test.

Initially I thought that I was going to showcase my amazing skills as a developer by doing funky and beautiful data visualizations, which by the way is a subject that deeply interests me. Nevertheless when actually tackling the test two things changed my mind. First of all, this is the first actual technical test that I have "endured" since I started properly looking for a new job some weeks ago. As such I had to start from zero and scaffold from nothing a React project. It is also the first time in almost a year that I have had to produce stable, tested, readable-by-other-humans code. Second, when discussing with Amaury about the position it came clear that you are looking for someone capable of leading a team of developers.

With these two anchors in mind I decided to generate a base code that could actually serve as a good basis for a project to start from. I spent some 2-3 hours per day for almost a week (of course the spent time peaked just before the deadline) trying to bring a stable and almost-production-ready code to life.

In the following you will find some notes and bibliographical points that , I hope, will illuminate my thought process. The bibliographical notes were gathered thinking that at some point I would need to introduce a new developer into the reasons behind the architecture choices. The different sections should roughly follow chronologically the evolution of the code. I also pushed all the branches so you can have some landmarks in the commits history (I could have used tags as well, but did not think about it).

# Think DevOps and make your code as production ready as possible
One of the first questions that came to my mind was "how is this code going to be served". Not only during development but as well during production? How is an ops engineer supposed to interact with my code?

I decided to use environment variables to inform execution context. Which ports are to be used? Where (host, port, ...) are the different services served at?

The app was scaffolded using `create react`, its [documentation](https://create-react-app.dev/docs/adding-custom-environment-variables) tells us that we have out-of-the-box support for `.env` files. And so this is the way I chose. The aforementioned documentation recommends using different `.env` files for different environments (`.env.local`, ` .env.test`, ...) but I instead decided to follow the recommendations of the [twelve factor app regarding config](https://create-react-app.dev/docs/adding-custom-environment-variables). Which [John Papa](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786) seems to agree with.

# Testing means doubting, but I doubt a lot
I have learned the hard way the importance of tests. As soon as I started playing with custom components I wanted to decide on the "framework" I wanted to use for testing. Since create react came with *testing library* and I was on a limited time budget (I did not want to spend a whole afternoon setting up the tests) I decided to go with it. At first I was bewildered by this new API that I was not accustomed to and so I spent a lot of time reading through its [documentation](https://github.com/testing-library/jest-dom#tohavetextcontent) looking for the right DOM extraction method for my tests.

I had three guiding rules for the tests:
    * A test should be living next to what is being tested
    * I love the "describe" - "it should ..." grammar. I find it really expressive.
    * Keep them as unitary as possible. Integration tests are a battle for another day.

I thought that I was going to have the time to write more tests (I rejoiced at the idea of understanding how to mock things with testing library for the api tests). But, forgive me for I have sinned, I decided to test in order to code more. Hopefully I will not have to refactor a whole layer of the code in the coming months.

# Think atomic for a zen collaboration with your designers
I am not a great CSS integrator but I love beautiful interfaces. I thus need to work with a skilled designer. In my experience one way of achieving a fruitful collaboration is by introducing design systems. This is the reason why my CSS is structured the way it is. It is also the reason why my components are separated into `components/` (basic building blocks) and `containers/` (more complex constructions using the building blocks).

Of course a design system needs much more than a naming convention and some CSS variables. It is an ever-evolving collaboration with the designers. But I did want to point that this is a particularly point to me.

Here are some interesting resources on design systems and atomic design:
* [The book on atomic design _ Brian Frost](https://atomicdesign.bradfrost.com/)
* [A collection of examples](https://designsystemsrepo.com/design-systems-recent)
* [IBM's open source design system](https://www.carbondesignsystem.com/)
    * The goals of the design system include improving UI consistency and quality, making the design and development process more efficient and focused, establishing a shared vocabulary between designer and developer, and providing clear, discoverable guidance around design and development best practices.
* [A check list to plan, build and grow one's design system](https://designsystemchecklist.com/?fbclid=IwAR2vGuRZCFsXecj-So2g1zjK1XynywV9fHWnMSqzhwCLVztWhE3XNynRs7Q)

# API and authentication
I did not want to spend a lot of time setting up a reverse proxy to handle the whole CORS chapter properly. I decided to allow CORS everywhere to move faster. This is why you will need the custom backend that I modified. Going through the [mozilla doc on same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) was extremely informative during this decision process.

You will find an `api/` folder containing all the code to get information from the backend. The way I thought about this folder is as the interface between the components and the data source. A component requests some information, it either gets it or not; as such it should not be considering a 404 request as a success. This kind of reasoning led me to introduce some of the middleware you will find in the code. I also discovered that the MIME types of the responses of your backend are not always consistent. One single route can send data that can be parsed as JSON and some that can't depending solely on the status code.

Once I got the connection between the client and the back I had to decide where I wanted to store the authentication token. I went for `sessionStorage`. My point of view regarding the whole sessionStorage vs localStorage vs cookie vs memory debate is that it comes to choosing a set of disadvantages. Looking at this [discussion of mitigation if sessionStorage is chosen](https://security.stackexchange.com/questions/179498/is-it-safe-to-store-a-jwt-in-sessionstorage) might shed some light on the disadvantages that came with my choice. The [official docs on sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) are also a great place to start digging this subject.

# Routing
I spend some time playing with the routing of the app. Of course things became interesting when I decided that I wanted to protect some of the routes. Since I do not trust the browser/client as a source of truth for wether the user is authenticated or not I had to come up with a more complex solution. Please see commits [510f5fa](https://github.com/juan-restrepop/distributed_delivery_test/commit/510f5fa) and [159ef2d](https://github.com/juan-restrepop/distributed_delivery_test/commit/159ef2d) for the implementation details. I am not entirely satisfied with the solution, it results in a lot of unnecessary calls to the API.

# The visualizations
When it was time to come to the visualizations I had ran out of time to adventure in a whole custom solution. I thus decided to go with [react time series](https://github.com/esnet/react-timeseries-charts), it allowed me display th echarts with much overhead.

Of course I did not tackle at all some of the most interesting aspects of the exercice. I think in particular about the dynamic behavior and data querying that would come with the area selection proposed in the image you sent me. Even though I did not have time to tackle this I feel confident that the code I have produced is enough to convince that I have what it takes to handle this pain points.

# Post scriptum
As a physicst I developed a passion for understanding deeply the tools that I use. This is why I spent the time I spent building up a basic project as the one I am proposing. Another way of seeing this is by the lack of Hooks in my code. I know about them, I understand there interest but I don't feel comfortable hiding away the complexity that they abstract. It is not a religion and I am ready to change my mind at any moment.
