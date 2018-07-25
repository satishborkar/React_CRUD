export function fakeBackend() {

    console.log("Fake backend is running...");

    const realFetch = window.fetch;
    //const users = [{ username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
    const userCollection = [
        {
            id: Math.floor(Math.random() * 7777777),
            updated_date: "15/07/2018",
            name: "Jeffery Jeff",
            firstName: "Jeffery",
            lastName: "Jeff",
            username: "jeff",
            password: "jeff",
            brand: "2018 Dodge Ram(U)",
            compension: "$525.12",
            token: "8d5367ad-82ae-4c0f-bb11-adf0b347a06a"

        },
        {
            id: Math.floor(Math.random() * 7777777),
            updated_date: "15/07/2017",
            name: "John Smith",
            firstName: "John",
            lastName: "Smith",
            username: "john",
            password: "john",
            brand: "2018 Dodge Ram(U)",
            compension: "$525.12",
            token: "8d5367ad-82ae-4c0f-bb11-adf0b347a07a"
        },
        {
            id: Math.floor(Math.random() * 7777777),
            updated_date: "15/07/2018",
            name: "Tom Jones",
            firstName: "Tom",
            lastName: "Jones",
            username: "tom",
            password: "tom",
            brand: "2018 Toyoto Corolla(U)",
            compension: "$525.12",
            token: "8d5367ad-82ae-4c0f-bb11-adf0b347a09a"
        },
        {
            id: Math.floor(Math.random() * 7777777),
            updated_date: "15/07/2018",
            name: "Vikas Sable",
            firstName: "Vikas",
            lastName: "Sable",
            username: "vikas",
            password: "vikas",
            brand: "2011 Buick Regal(U)",
            compension: "$525.12",
            token: "8d5367ad-82ae-4c0f-bb11-adf0b347a09a"
        },
        {
            id: Math.floor(Math.random() * 7777777),
            updated_date: "15/07/2013",
            name: "Manoj Kulkarni",
            firstName: "Manoj",
            lastName: "Kulkarni",
            username: "manoj",
            password: "manoj",
            brand: "2014 Chevrolet Cruze(U)",
            compension: "$525.12",
            token: "8d5367ad-82ae-4c0f-bb11-adf0b347a010a"
        },
        {
            id: Math.floor(Math.random() * 7777777),
            updated_date: "15/07/2018",
            name: "Shashi Gavali",
            firstName: "Shashi",
            lastName: "Gavali",
            username: "shashi",
            password: "shashi",
            brand: "2018 Toyoto Corolla(U)",
            compension: "$525.12",
            token: "8d5367ad-82ae-4c0f-bb11-adf0b347a011a"
        },
        {
            id: Math.floor(Math.random() * 7777777),
            updated_date: "15/07/2018",
            name: "Pooja Jadhav",
            firstName: "Pooja",
            lastName: "Jadhav",
            username: "pooja",
            password: "pooja",
            brand: "2011 Buick Regal(U)",
            compension: "$525.12",
            token: "8d5367ad-82ae-4c0f-bb11-adf0b347a012a"
        },
        {
            id: Math.floor(Math.random() * 7777777),
            updated_date: "15/07/2013",
            name: "Bhima Borkar",
            firstName: "Bhima",
            lastName: "Bokrar",
            username: "bhima",
            password: "bhima",
            brand: "2014 Chevrolet Cruze(U)",
            compension: "$525.12",
            token: "8d5367ad-82ae-4c0f-bb11-adf0b347a013a"
        },
        {
            id: Math.floor(Math.random() * 7777777),
            updated_date: "15/07/2013",
            name: "Varsha Borkar",
            firstName: "Varsha",
            lastName: "Borkar",
            username: "varsha",
            password: "varsha",
            brand: "2014 Chevrolet Cruze(U)",
            compension: "$525.12",
            token: "8d5367ad-82ae-4c0f-bb11-adf0b347a014a"
        }
    ];

    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // Wrapping in a setTimeout to simulate API call waiting...
            setTimeout(() => {
                if (url.endsWith('user/authenticate') && opts.method === 'POST') {

                    //get params from the body
                    let params = JSON.parse(opts.body);

                    //find the user in userCollection 

                    const getUser = userCollection.filter((user) => {
                        return user.username == params.username && user.password === params.password;
                    });

                    if (getUser.length > 0) {

                        let user = getUser[0];

                        let responseObj = {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: user.token
                        }

                        resolve({ ok: true, json: () => responseObj });
                    } else {
                        reject({ message: 'Invalid username or password', statusCode: '404' });
                    }

                }

                // pass through any requests not handled above
                realFetch(url, opts);

            }, 500);
        });
    };
}
