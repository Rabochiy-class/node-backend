import https from 'https'

class DonationController {
    async createDonationPlan( req, res ) {
        try {

            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/donation_plan/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
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

            // const post = await characterService.create( req.body )
            res.status( 201 ).json( JSON.parse( answer ) )
        } catch ( e ) {
            res.status( 500 ).json( e )
        }
    }


    async createDonation( req, res ) {
        try {
    
          var postData = JSON.stringify(req.body)
        
          var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/donations/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
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
    
          // const post = await characterService.create( req.body )
          res.status( 201 ).json( JSON.parse( answer ) )
        } catch ( e ) {
          res.status( 500 ).json( e )
        }
    }

    async postPicture( req, res ) {
        try {
    
          var postData = JSON.stringify(req.body)
        
          var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/picture/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
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
    
          // const post = await characterService.create( req.body )
          res.status( 201 ).json( JSON.parse( answer ) )
        } catch ( e ) {
          res.status( 500 ).json( e )
        }
    }

    async getDonations( req, res ) {
        console.log( req.headers )

        try {

            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/donations/',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length,
                'Authorization': 'Token 1edf1c4c1b256c01a0c43b80265bd7be1641f270'
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

export default new DonationController()