import https from 'https'

class DonationPlanController {
    async postDonationPlan( req, res ) {
        console.log( req.headers )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/donation_plan/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length,
                'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
                }
            };
            
            var answer = await new Promise( ( resolve ) => {
            const apiReq = https.request(options, (res) => {
            
                const body = []
        
                res.on('data', (chunk) => body.push(chunk))
                res.on('end', () => {
                const resString = Buffer.concat(body).toString()
                console.log( 'resString: ', resString )
                resolve(resString)
                })
            })
            apiReq.on('error', (e) => {
                console.error(e);
            });
    
            apiReq.write(postData);
            apiReq.end();
            })
    
            console.log( 'answer: ', answer )
    
            res.status( 201 ).json( JSON.parse( answer ) )
        } catch ( e ) {
            res.status( 500 ).json( e )
        }
      }

      async getDonationPlan( req, res ) {
        console.log( req.headers )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/donation_plan/',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length,
                'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
                }
            };
            
            var answer = await new Promise( ( resolve ) => {
            const apiReq = https.request(options, (res) => {
            
                const body = []
        
                res.on('data', (chunk) => body.push(chunk))
                res.on('end', () => {
                const resString = Buffer.concat(body).toString()
                console.log( 'resString: ', resString )
                resolve(resString)
                })
            })
            apiReq.on('error', (e) => {
                console.error(e);
            });
    
            apiReq.write(postData);
            apiReq.end();
            })
    
            console.log( 'answer: ', answer )
    
            res.status( 201 ).json( JSON.parse( answer ) )
        } catch ( e ) {
            res.status( 500 ).json( e )
        }
      }

      async getDonationPlanById( req, res ) {
        console.log( req.headers )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/donation_plan/{id}/',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length,
                'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
                }
            };
            
            var answer = await new Promise( ( resolve ) => {
            const apiReq = https.request(options, (res) => {
            
                const body = []
        
                res.on('data', (chunk) => body.push(chunk))
                res.on('end', () => {
                const resString = Buffer.concat(body).toString()
                console.log( 'resString: ', resString )
                resolve(resString)
                })
            })
            apiReq.on('error', (e) => {
                console.error(e);
            });
    
            apiReq.write(postData);
            apiReq.end();
            })
    
            console.log( 'answer: ', answer )
    
            res.status( 201 ).json( JSON.parse( answer ) )
        } catch ( e ) {
            res.status( 500 ).json( e )
        }
      }

      async patchDonationPlan( req, res ) {
        console.log( req.headers )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/donation_plan/{id}/',
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length,
                'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
                }
            };
            
            var answer = await new Promise( ( resolve ) => {
            const apiReq = https.request(options, (res) => {
            
                const body = []
        
                res.on('data', (chunk) => body.push(chunk))
                res.on('end', () => {
                const resString = Buffer.concat(body).toString()
                console.log( 'resString: ', resString )
                resolve(resString)
                })
            })
            apiReq.on('error', (e) => {
                console.error(e);
            });
    
            apiReq.write(postData);
            apiReq.end();
            })
    
            console.log( 'answer: ', answer )
    
            res.status( 201 ).json( JSON.parse( answer ) )
        } catch ( e ) {
            res.status( 500 ).json( e )
        }
      }

      async deleteDonationPlan( req, res ) {
        console.log( req.headers )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/donation_plan/{id}/',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length,
                'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
                }
            };
            
            var answer = await new Promise( ( resolve ) => {
            const apiReq = https.request(options, (res) => {
            
                const body = []
        
                res.on('data', (chunk) => body.push(chunk))
                res.on('end', () => {
                const resString = Buffer.concat(body).toString()
                console.log( 'resString: ', resString )
                resolve(resString)
                })
            })
            apiReq.on('error', (e) => {
                console.error(e);
            });
    
            apiReq.write(postData);
            apiReq.end();
            })
    
            console.log( 'answer: ', answer )
    
            res.status( 201 ).json( JSON.parse( answer ) )
        } catch ( e ) {
            res.status( 500 ).json( e )
        }
      }
}

export default new DonationPlanController()