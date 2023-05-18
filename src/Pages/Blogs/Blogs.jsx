import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blogs-container'>
                <div className='blogs-texts'>
                    <h4 className='text-center my-4'>Questions and Answers</h4>
                    <div>
                        <h6>Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side? </h6>
                        <p> Answer: Refresh tokens allow you to balance your users access needs with your organizations security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them</p>
                    </div>
                    <div>
                        <h6>Question 2: Compare SQL and NoSQL databases?</h6>
                        <p>Answer: SQL databases use a structured query language and have a defined schema. NoSQL databases use dynamic schemas for unstructured data. NoSQL databases scale horizontally, whereas SQL databases scale vertically. Whereas SQL databases are table-based, NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                    </div>
                    <div>
                        <h6>Question 3: What is express js? What is Nest JS?</h6>
                        <p>Answer:  Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.</p>
                        <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
                    </div>
                    <div>
                        <h6>Question 4: What is MongoDB aggregate and how does it work?</h6>
                        <p>Answer: The MongoDB aggregation framework is highly flexible and can handle a wide range of data analysis and transformation tasks. It allows you to efficiently process large volumes of data on the server side and retrieve the desired results in a structured format. By leveraging the power of aggregation, you can perform complex calculations, data manipulation, and reporting directly within the database.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;